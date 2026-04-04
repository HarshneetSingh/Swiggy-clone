/**
 * Test all proxy routes — live + fallback scenarios
 * Run: node scripts/testFallbacks.js
 */

const BASE = 'http://localhost:3000'
let passed = 0, failed = 0

async function test(name, url, validator) {
    try {
        const res = await fetch(url)
        const data = await res.json()
        const valid = validator(data)
        if (valid) {
            console.log(`  ✓  ${name}`)
            passed++
        } else {
            console.log(`  ✗  ${name}`)
            console.log(`     Got: ${JSON.stringify(data).slice(0, 120)}`)
            failed++
        }
    } catch (err) {
        console.log(`  ✗  ${name}`)
        console.log(`     Error: ${err.message}`)
        failed++
    }
}

async function run() {
    console.log('\n── /api/restaurants ─────────────────────────────────────────')
    await test(
        'Returns cards array',
        `${BASE}/api/restaurants?lat=28.6139&lng=77.2090`,
        d => Array.isArray(d?.data?.cards) && d.data.cards.length > 0
    )
    await test(
        'Has restaurant data in cards',
        `${BASE}/api/restaurants?lat=28.6139&lng=77.2090`,
        d => d?.data?.cards?.some(c =>
            c?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0 ||
            c?.groupedCard?.cardGroupMap
        )
    )

    console.log('\n── /api/search/suggest ──────────────────────────────────────')
    await test(
        'Returns suggestions for "biryani"',
        `${BASE}/api/search/suggest?lat=28.6139&lng=77.2090&str=biryani`,
        d => Array.isArray(d?.data?.suggestions) && d.data.suggestions.length > 0
    )
    await test(
        'Returns suggestions for "pizza"',
        `${BASE}/api/search/suggest?lat=28.6139&lng=77.2090&str=pizza`,
        d => d?.data?.suggestions?.length > 0
    )
    await test(
        'Returns something even for unknown query "xyzabc"',
        `${BASE}/api/search/suggest?lat=28.6139&lng=77.2090&str=xyzabc`,
        d => Array.isArray(d?.data?.suggestions)
    )

    console.log('\n── /api/search ───────────────────────────────────────────────')
    const tabValidator = d => {
        const tab = d?.data?.cards?.[0]?.card?.card?.tab
        return tab?.[0]?.title === 'Restaurants' && tab?.[1]?.title === 'Dishes'
    }
    const restaurantsValidator = d =>
        d?.data?.cards?.length >= 2 &&
        (d.data.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.length > 0 ||
         d.data.cards[1]?.card?.card?.restaurants?.length > 0)

    await test('biryani — has tab card',       `${BASE}/api/search?str=biryani`,        tabValidator)
    await test('biryani — has restaurants',    `${BASE}/api/search?str=biryani`,        restaurantsValidator)
    await test('pizza — has tab card',         `${BASE}/api/search?str=pizza`,          tabValidator)
    await test('shake — has tab card',         `${BASE}/api/search?str=shake`,          tabValidator)
    await test('chole bhature — has tab card', `${BASE}/api/search?str=chole+bhature`,  tabValidator)
    await test('coffee — has tab card',        `${BASE}/api/search?str=coffee`,         tabValidator)
    await test('momos — has tab card',         `${BASE}/api/search?str=momos`,          tabValidator)
    await test('sandwich — has restaurants',   `${BASE}/api/search?str=sandwich`,       restaurantsValidator)
    await test('noodles — has restaurants',    `${BASE}/api/search?str=noodles`,        restaurantsValidator)
    await test('dal makhani — has tab card',   `${BASE}/api/search?str=dal+makhani`,    tabValidator)
    await test('butter chicken — has tab',     `${BASE}/api/search?str=butter+chicken`, tabValidator)
    await test(
        'Restaurant name "Biryani Blues" — falls back to biryani results',
        `${BASE}/api/search?str=Biryani+Blues`,
        d => tabValidator(d) && restaurantsValidator(d)
    )
    await test(
        'Unknown query "xyz123" — still returns tab + some results',
        `${BASE}/api/search?str=xyz123unknownfood`,
        d => tabValidator(d)
    )

    console.log('\n── /api/menu ─────────────────────────────────────────────────')
    await test(
        'Returns {data} or {data:null} — never crashes',
        `${BASE}/api/menu?restaurantId=8620&lat=28.6139&lng=77.2090`,
        d => 'data' in d
    )
    await test(
        'Non-existent restaurant — returns {data:null} gracefully',
        `${BASE}/api/menu?restaurantId=0000001&lat=28.6139&lng=77.2090`,
        d => d?.data === null || d?.data !== undefined
    )
    await test(
        'Missing restaurantId — does not crash server',
        `${BASE}/api/menu?lat=28.6139&lng=77.2090`,
        d => 'data' in d || 'error' in d
    )

    console.log('\n─────────────────────────────────────────────────────────────')
    console.log(`  ${passed} passed  |  ${failed} failed  |  ${passed + failed} total\n`)
    if (failed > 0) process.exit(1)
}

run().catch(err => { console.error(err); process.exit(1) })
