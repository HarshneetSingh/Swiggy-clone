const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(cors())

// ─── Paths ────────────────────────────────────────────────────────────────────
const MOCKS_DIR = path.join(__dirname, 'src/mocks')
const MENUS_DIR = path.join(MOCKS_DIR, 'menus')
const SEARCH_DIR = path.join(MOCKS_DIR, 'search_results')
if (!fs.existsSync(MENUS_DIR)) fs.mkdirSync(MENUS_DIR, { recursive: true })

// ─── Helpers ──────────────────────────────────────────────────────────────────
function readJSON(filePath) {
    try { return JSON.parse(fs.readFileSync(filePath, 'utf8')) } catch { return null }
}

function writeJSON(filePath, data) {
    try { fs.writeFileSync(filePath, JSON.stringify(data)) } catch { /* ignore write errors */ }
}

// ─── Swiggy proxy ─────────────────────────────────────────────────────────────
const SWIGGY_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.swiggy.com/',
    'Origin': 'https://www.swiggy.com',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
}

let sessionCookies = ''
let wafToken = ''

async function fetchWafToken() {
    try {
        const { default: fetch } = await import('node-fetch')
        const res = await fetch(
            'https://b67f7794189c.edge.sdk.awswaf.com/b67f7794189c/3dddb029b68f/challenge.js',
            { headers: { 'User-Agent': SWIGGY_HEADERS['User-Agent'], 'Referer': 'https://www.swiggy.com/' } }
        )
        const script = await res.text()
        const match = script.match(/["']aws-waf-token["']\s*[,:]\s*["']([^"']+)["']/)
        if (match) wafToken = match[1]
    } catch { /* silently fail */ }
}
fetchWafToken()

async function swiggyFetch(url, extraHeaders = {}) {
    const { default: fetch } = await import('node-fetch')
    const headers = { ...SWIGGY_HEADERS, ...extraHeaders }
    const cookieParts = [sessionCookies, wafToken ? `aws-waf-token=${wafToken}` : ''].filter(Boolean).join('; ')
    if (cookieParts) headers['Cookie'] = cookieParts

    const res = await fetch(url, { headers })
    const setCookie = res.headers.raw()['set-cookie']
    if (setCookie) {
        sessionCookies = setCookie.map(c => c.split(';')[0]).join('; ')
    }
    const text = await res.text()
    if (!text.trim().startsWith('{')) throw new Error('Non-JSON (WAF block)')
    return JSON.parse(text)
}

// ─── Search mock lookup ───────────────────────────────────────────────────────
let searchIndex = readJSON(path.join(SEARCH_DIR, '_index.json')) || {}

const TAB_CARD = {
    card: { card: { tab: [
        { title: 'Restaurants', id: 'RESTAURANT', selected: true },
        { title: 'Dishes', id: 'DISH' }
    ]}}
}

function withTabCard(data) {
    if (data?.cards && !data.cards[0]?.card?.card?.tab) {
        data.cards.unshift(TAB_CARD)
    }
    return data
}

function getSearchMock(str) {
    const lower = str.toLowerCase().trim()
    const slug = lower.replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')

    // 1. Exact slug match (e.g. "biryani" → biryani.json)
    if (searchIndex[slug]) {
        const data = readJSON(path.join(SEARCH_DIR, slug + '.json'))
        if (data) return withTabCard(data)
    }

    // 2. Keyword match from index (e.g. "chicken roll" → chicken.json)
    for (const [s, meta] of Object.entries(searchIndex)) {
        if (meta.keywords?.some(k => k.length > 2 && (lower.includes(k) || k.includes(lower.split(' ')[0])))) {
            const data = readJSON(path.join(SEARCH_DIR, s + '.json'))
            if (data) return withTabCard(data)
        }
    }

    // 3. Restaurant name match (e.g. "Biryani Blues" → biryani.json)
    for (const [s, meta] of Object.entries(searchIndex)) {
        if (meta.restaurants?.some(name =>
            lower.includes(name.split(' ')[0]) || name.includes(lower.split(' ')[0])
        )) {
            const data = readJSON(path.join(SEARCH_DIR, s + '.json'))
            if (data) return withTabCard(data)
        }
    }

    // 4. Generic fallback
    return withTabCard(readJSON(path.join(MOCKS_DIR, 'searchResults.json')))
}

// ─── Routes ───────────────────────────────────────────────────────────────────

// GET /api/restaurants — homepage + sort + filter
// Live first → fall back to restaurants.json
app.get('/api/restaurants', async (req, res) => {
    const { lat = '28.6139', lng = '77.2090', sortBy = '', filters = '' } = req.query
    const sort = sortBy ? `&sortAttribute=${sortBy}` : ''
    const filter = filters ? `&facets=${filters}` : ''
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING${sort}${filter}`

    try {
        const data = await swiggyFetch(url)
        const hasRestaurants = data?.data?.cards?.some(c =>
            c?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0
        )
        if (hasRestaurants) return res.json(data)
        throw new Error('No restaurants in response')
    } catch {
        const mock = readJSON(path.join(MOCKS_DIR, 'restaurants.json'))
        if (mock) return res.json(mock)
        res.status(503).json({ error: 'Unavailable and no mock found' })
    }
})

// GET /api/menu — live first → cache on success → serve cache → {data:null}
// Auto-caches every successful live fetch so next time is instant
app.get('/api/menu', async (req, res) => {
    const { lat = '28.6139', lng = '77.2090', restaurantId } = req.query
    const cacheFile = path.join(MENUS_DIR, `${restaurantId}.json`)

    // 0. Check cache first (instant, skip network entirely if cached)
    const cached = readJSON(cacheFile)
    if (cached?.data) return res.json(cached)

    // 1. Warm up session if needed
    if (!sessionCookies) {
        const warmUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        await swiggyFetch(warmUrl).catch(() => {})
    }

    // 2. Try live
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
    try {
        const data = await swiggyFetch(url, {
            'Referer': `https://www.swiggy.com/restaurants/${restaurantId}`,
        })
        if (data?.data) {
            writeJSON(cacheFile, data) // auto-cache for future requests
            return res.json(data)
        }
        throw new Error('No data')
    } catch {
        // 3. Fall back to null → client uses cuisine template
        res.json({ data: null })
    }
})

// GET /api/search/suggest — live first → filter searchSuggest.json
app.get('/api/search/suggest', async (req, res) => {
    const { lat = '28.6139', lng = '77.2090', str = '' } = req.query
    const url = `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${lng}&str=${encodeURIComponent(str)}&trackingId=undefined&includeIMItem=true`

    try {
        const data = await swiggyFetch(url)
        if (data?.data?.suggestions?.length) return res.json(data)
        throw new Error('Empty suggestions')
    } catch {
        const mock = readJSON(path.join(MOCKS_DIR, 'searchSuggest.json'))
        if (!mock) return res.json({ data: { suggestions: [] } })
        const lower = str.toLowerCase()
        const filtered = (mock.suggestions || []).filter(s =>
            s.text?.toLowerCase().includes(lower)
        )
        res.json({ data: { suggestions: filtered.length ? filtered : mock.suggestions.slice(0, 8) } })
    }
})

// GET /api/search — live v3 first → keyword-matched stored results
app.get('/api/search', async (req, res) => {
    const { lat = '28.6139', lng = '77.2090', str = '', selectedPLTab = 'RESTAURANT' } = req.query
    const url = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${encodeURIComponent(str)}&trackingId=undefined&submitAction=ENTER&queryUniqueId=undefined&selectedPLTab=${selectedPLTab}`

    try {
        const data = await swiggyFetch(url)
        if (data?.data?.cards) {
            if (!data.data.cards[0]?.card?.card?.tab) data.data.cards.unshift(TAB_CARD)
            return res.json(data)
        }
        throw new Error('No cards')
    } catch {
        const mock = getSearchMock(str)
        res.json(mock ? { data: mock } : { data: null })
    }
})

// ─── Serve frontend in production ─────────────────────────────────────────────
const DIST = path.join(__dirname, 'dist')
if (fs.existsSync(DIST)) {
    app.use(express.static(DIST))
    app.get('*', (_, res) => res.sendFile(path.join(DIST, 'index.html')))
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
