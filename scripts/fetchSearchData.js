const fs = require('fs')
const path = require('path')

const PROXY = 'http://localhost:3000'
const OUT_DIR = path.join(__dirname, '../src/mocks/search_results')

const QUERIES = [
    'biryani', 'pizza', 'burger', 'coffee', 'shake', 'chole bhature',
    'paneer', 'chicken', 'dosa', 'chinese', 'sandwich', 'roll',
    'noodles', 'pasta', 'momos', 'thali', 'idli', 'kebab',
    'ice cream', 'cake', 'north indian', 'south indian', 'mughlai',
    'punjabi', 'rajasthani', 'street food', 'healthy', 'salad',
    'paratha', 'poha', 'upma', 'pav bhaji', 'vada pav', 'frankie',
    'wrap', 'soup', 'manchurian', 'fried rice', 'hakka noodles',
    'spring roll', 'dim sum', 'sushi', 'thai', 'mexican', 'continental',
    'dessert', 'halwa', 'gulab jamun', 'rasmalai', 'ladoo',
    'fish', 'prawn', 'egg', 'dal makhani', 'palak paneer', 'butter chicken',
    'tandoori', 'tikka', 'korma', 'curry', 'masala', 'biryani rice',
    'lassi', 'juice', 'smoothie', 'tea', 'chai', 'cappuccino',
]

function slugify(q) {
    return q.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
}

async function fetchQuery(q) {
    const url = `${PROXY}/api/search?lat=28.6139&lng=77.2090&str=${encodeURIComponent(q)}&selectedPLTab=RESTAURANT`
    const res = await fetch(url)
    const json = await res.json()
    if (!json?.data?.cards) throw new Error('No cards in response')
    return json.data
}

async function run() {
    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

    const index = {}
    let success = 0, fail = 0

    for (const q of QUERIES) {
        const slug = slugify(q)
        const filePath = path.join(OUT_DIR, slug + '.json')
        try {
            console.log(`Fetching: "${q}"...`)
            const data = await fetchQuery(q)
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
            // Extract restaurant names from result for the index
            const restaurants = extractRestaurantNames(data)
            index[slug] = { query: q, keywords: [slug, ...q.toLowerCase().split(' ')].filter(k => k.length > 2), restaurants }
            console.log(`  ✓ saved (${restaurants.length} restaurants)`)
            success++
        } catch (err) {
            console.log(`  ✗ failed: ${err.message}`)
            fail++
        }
        // Small delay to be polite
        await new Promise(r => setTimeout(r, 300))
    }

    fs.writeFileSync(path.join(OUT_DIR, '_index.json'), JSON.stringify(index, null, 2))
    console.log(`\nDone: ${success} success, ${fail} failed`)
    console.log(`Index saved with ${Object.keys(index).length} entries`)
}

function extractRestaurantNames(data) {
    const names = []
    for (const card of data?.cards || []) {
        // top result (single restaurant card)
        if (card?.card?.card?.info?.name) names.push(card.card.card.info.name.toLowerCase())
        // grouped restaurants
        const restros = card?.card?.card?.restaurants || card?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
        if (Array.isArray(restros)) {
            for (const r of restros) {
                const name = r?.card?.card?.info?.name || r?.info?.name
                if (name) names.push(name.toLowerCase())
            }
        }
    }
    return [...new Set(names)]
}

run().catch(console.error)
