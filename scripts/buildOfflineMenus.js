/**
 * buildOfflineMenus.js
 *
 * 1. Tries to fetch live menus for home-page restaurants via the proxy
 * 2. For every restaurant that has no cached menu, generates a
 *    cuisine-appropriate template menu and saves it to src/mocks/menus/
 *
 * Run: node scripts/buildOfflineMenus.js
 */

const fs   = require('fs')
const path = require('path')
const http = require('http')

const MENUS_DIR  = path.join(__dirname, '../src/mocks/menus')
const MOCKS_DIR  = path.join(__dirname, '../src/mocks')
const PROXY      = 'http://localhost:3000'

if (!fs.existsSync(MENUS_DIR)) fs.mkdirSync(MENUS_DIR, { recursive: true })

// ── Template data (mirrors menuTemplates.jsx) ─────────────────────────────────
const TEMPLATES = {
    pizza: {
        title: 'Pizzas',
        items: [
            { id:'t1', name:'Margherita Pizza',    description:'Classic tomato base with mozzarella cheese',    price:22900, isVeg:1, isBestseller:true, imageId:'ol3yb02mkqbvsbbr7kz6' },
            { id:'t2', name:'Pepperoni Pizza',     description:'Loaded with pepperoni and mozzarella',          price:32900, isVeg:0, imageId:'ol3yb02mkqbvsbbr7kz6' },
            { id:'t3', name:'BBQ Chicken Pizza',   description:'Smoky BBQ sauce with grilled chicken',          price:34900, isVeg:0, imageId:'ol3yb02mkqbvsbbr7kz6' },
            { id:'t4', name:'Veggie Supreme',      description:'Bell peppers, mushrooms, olives and onions',    price:28900, isVeg:1, imageId:'ol3yb02mkqbvsbbr7kz6' },
            { id:'t5', name:'Cheese Burst Pizza',  description:'Extra cheese-filled crust pizza',              price:36900, isVeg:1, imageId:'ol3yb02mkqbvsbbr7kz6' },
        ]
    },
    burger: {
        title: 'Burgers',
        items: [
            { id:'t1', name:'Classic Veg Burger',     description:'Crispy veggie patty with lettuce and cheese',  price:14900, isVeg:1, isBestseller:true },
            { id:'t2', name:'Chicken Burger',         description:'Grilled chicken with special sauce',           price:18900, isVeg:0 },
            { id:'t3', name:'Double Patty Burger',    description:'Double the beef, double the flavour',          price:22900, isVeg:0 },
            { id:'t4', name:'Paneer Tikka Burger',    description:'Spiced paneer tikka with mint chutney',        price:16900, isVeg:1 },
            { id:'t5', name:'Crispy Chicken Burger',  description:'Extra crispy chicken with sriracha mayo',     price:20900, isVeg:0 },
        ]
    },
    biryani: {
        title: 'Biryani',
        items: [
            { id:'t1', name:'Chicken Biryani',     description:'Fragrant basmati rice with tender chicken',     price:24900, isVeg:0, isBestseller:true },
            { id:'t2', name:'Veg Biryani',         description:'Aromatic rice with seasonal vegetables',        price:18900, isVeg:1 },
            { id:'t3', name:'Mutton Biryani',      description:'Slow-cooked mutton with dum biryani',           price:28900, isVeg:0 },
            { id:'t4', name:'Egg Biryani',         description:'Classic biryani with boiled eggs',              price:19900, isVeg:0 },
            { id:'t5', name:'Prawn Biryani',       description:'Juicy prawns with spiced basmati rice',         price:32900, isVeg:0 },
        ]
    },
    chinese: {
        title: 'Chinese',
        items: [
            { id:'t1', name:'Veg Fried Rice',         description:'Wok-tossed rice with fresh vegetables',         price:16900, isVeg:1, isBestseller:true },
            { id:'t2', name:'Chicken Hakka Noodles',  description:'Stir-fried noodles with chicken',               price:19900, isVeg:0 },
            { id:'t3', name:'Veg Manchurian',         description:'Crispy veggie balls in a tangy sauce',           price:17900, isVeg:1 },
            { id:'t4', name:'Chilli Chicken',         description:'Crispy chicken tossed in chilli garlic sauce',   price:22900, isVeg:0 },
            { id:'t5', name:'Sweet Corn Soup',        description:'Classic corn soup with spring onions',           price:12900, isVeg:1 },
        ]
    },
    northindian: {
        title: 'Main Course',
        items: [
            { id:'t1', name:'Butter Chicken',     description:'Creamy tomato-based chicken curry',              price:28900, isVeg:0, isBestseller:true },
            { id:'t2', name:'Paneer Butter Masala', description:'Soft paneer in rich buttery gravy',            price:24900, isVeg:1 },
            { id:'t3', name:'Dal Makhani',        description:'Slow-cooked black lentils with butter and cream', price:19900, isVeg:1 },
            { id:'t4', name:'Naan (2 pcs)',       description:'Freshly baked tandoor bread',                    price: 8900, isVeg:1 },
            { id:'t5', name:'Chicken Tikka',      description:'Marinated chicken pieces grilled in tandoor',    price:26900, isVeg:0 },
        ]
    },
    southindian: {
        title: 'South Indian',
        items: [
            { id:'t1', name:'Masala Dosa',        description:'Crispy dosa with spiced potato filling',         price:14900, isVeg:1, isBestseller:true },
            { id:'t2', name:'Idli Sambar (4 pcs)', description:'Steamed rice cakes with sambar and chutney',   price:11900, isVeg:1 },
            { id:'t3', name:'Vada (2 pcs)',       description:'Crispy urad dal fritters',                      price: 9900, isVeg:1 },
            { id:'t4', name:'Uttapam',            description:'Thick pancake with onion, tomato and chillies', price:13900, isVeg:1 },
            { id:'t5', name:'Filter Coffee',      description:'Authentic South Indian filter coffee',          price: 5900, isVeg:1 },
        ]
    },
    desserts: {
        title: 'Desserts & Sweets',
        items: [
            { id:'t1', name:'Gulab Jamun (4 pcs)', description:'Soft milk-solid balls soaked in rose syrup',   price: 8900, isVeg:1, isBestseller:true },
            { id:'t2', name:'Rasgulla (4 pcs)',   description:'Spongy cottage cheese balls in sugar syrup',    price: 7900, isVeg:1 },
            { id:'t3', name:'Chocolate Brownie',  description:'Warm fudgy brownie with vanilla ice cream',     price:14900, isVeg:1 },
            { id:'t4', name:'Kulfi',              description:'Traditional Indian ice cream with pistachios',   price: 9900, isVeg:1 },
            { id:'t5', name:'Mango Lassi',        description:'Thick mango yoghurt drink',                     price: 8900, isVeg:1 },
        ]
    },
    cafe: {
        title: 'Cafe Menu',
        items: [
            { id:'t1', name:'Cappuccino',         description:'Espresso with steamed milk foam',               price: 9900, isVeg:1, isBestseller:true },
            { id:'t2', name:'Cold Coffee',        description:'Chilled coffee with ice cream',                 price:11900, isVeg:1 },
            { id:'t3', name:'Avocado Toast',      description:'Sourdough with smashed avocado and eggs',       price:18900, isVeg:1 },
            { id:'t4', name:'Blueberry Muffin',   description:'Freshly baked muffin with blueberries',        price: 7900, isVeg:1 },
            { id:'t5', name:'Caesar Salad',       description:'Romaine lettuce with parmesan and croutons',   price:17900, isVeg:1 },
        ]
    },
    default: {
        title: 'Popular Items',
        items: [
            { id:'t1', name:'Chef\'s Special Thali', description:'Complete meal with rice, dal, sabzi and roti',  price:22900, isVeg:1, isBestseller:true },
            { id:'t2', name:'Veg Combo Meal',        description:'Rice, dal, paneer curry with garlic naan',      price:19900, isVeg:1 },
            { id:'t3', name:'Non-Veg Combo Meal',    description:'Rice, dal, chicken curry with naan',            price:24900, isVeg:0 },
            { id:'t4', name:'Fresh Lime Soda',       description:'Refreshing lime with soda',                     price: 4900, isVeg:1 },
            { id:'t5', name:'Dessert of the Day',    description:'Ask our staff for today\'s dessert special',    price: 8900, isVeg:1 },
        ]
    },
}

const STARTERS = {
    nonveg: [
        { id:'s1', name:'Chicken 65',         description:'Crispy fried chicken with spiced batter',         price:19900, isVeg:0, isBestseller:true },
        { id:'s2', name:'Fish Fry',           description:'Fresh fish marinated with coastal spices',        price:22900, isVeg:0 },
        { id:'s3', name:'Egg Bhurji',         description:'Spiced scrambled eggs with onion and tomato',    price:14900, isVeg:0 },
    ],
    veg: [
        { id:'s1', name:'Paneer Tikka',       description:'Marinated paneer grilled in tandoor',            price:22900, isVeg:1, isBestseller:true },
        { id:'s2', name:'Veg Spring Rolls',   description:'Crispy rolls with mixed vegetable filling',     price:14900, isVeg:1 },
        { id:'s3', name:'Samosa (2 pcs)',     description:'Crispy pastry with spiced potato filling',      price: 7900, isVeg:1 },
    ]
}

function pickTemplate(cuisines = []) {
    const c = cuisines.map(x => x.toLowerCase()).join(' ')
    if (c.includes('pizza'))                       return 'pizza'
    if (c.includes('burger') || c.includes('fast food') || c.includes('sandwich')) return 'burger'
    if (c.includes('biryani'))                     return 'biryani'
    if (c.includes('chinese') || c.includes('asian') || c.includes('thai')) return 'chinese'
    if (c.includes('south indian') || c.includes('kerala') || c.includes('tamil')) return 'southindian'
    if (c.includes('north indian') || c.includes('mughlai') || c.includes('punjabi') || c.includes('curry')) return 'northindian'
    if (c.includes('dessert') || c.includes('ice cream') || c.includes('sweet') || c.includes('bakery')) return 'desserts'
    if (c.includes('cafe') || c.includes('coffee') || c.includes('waffle') || c.includes('continental')) return 'cafe'
    return 'default'
}

function buildMenu(info) {
    const key      = pickTemplate(info?.cuisines)
    const template = TEMPLATES[key]
    const starters = (info?.veg) ? STARTERS.veg : STARTERS.nonveg

    return {
        data: {
            cards: [
                {
                    card: { card: {
                        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
                        info: info || {}
                    }}
                },
                {
                    card: { card: { gridElements: { infoWithStyle: { offers: [] } } } }
                },
                {
                    groupedCard: {
                        cardGroupMap: {
                            REGULAR: {
                                cards: [
                                    {
                                        card: { card: {
                                            '@type': 'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge',
                                            isPureVeg: info?.veg === true
                                        }}
                                    },
                                    {
                                        card: { card: {
                                            '@type': 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                                            title: `Recommended (${starters.length})`,
                                            itemCards: starters.map(item => ({
                                                card: {
                                                    '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                                    info: { ...item, id: `${info?.id}_${item.id}` }
                                                }
                                            }))
                                        }}
                                    },
                                    {
                                        card: { card: {
                                            '@type': 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                                            title: `${template.title} (${template.items.length})`,
                                            itemCards: template.items.map(item => ({
                                                card: {
                                                    '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                                    info: { ...item, id: `${info?.id}_main_${item.id}` }
                                                }
                                            }))
                                        }}
                                    }
                                ]
            }}}}]}}
}

// ── Live fetch helper ──────────────────────────────────────────────────────────
function fetchMenu(id) {
    return new Promise(resolve => {
        const url = `${PROXY}/api/menu?lat=28.6139&lng=77.2090&restaurantId=${id}`
        http.get(url, res => {
            let body = ''
            res.on('data', d => body += d)
            res.on('end', () => {
                try {
                    const j = JSON.parse(body)
                    resolve(j?.data ? j : null)
                } catch { resolve(null) }
            })
        }).on('error', () => resolve(null))
        setTimeout(() => resolve(null), 8000)
    })
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
    const manifest = JSON.parse(fs.readFileSync(path.join(MOCKS_DIR, 'restaurant_manifest.json')))
    const allIds   = Object.keys(manifest)
    const homeIds  = Object.keys(JSON.parse(fs.readFileSync(path.join(MOCKS_DIR, 'restaurants.json')))
        .data.cards.reduce((acc, c) => {
            (c?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
                .forEach(r => { if (r?.info?.id) acc[r.info.id] = 1 })
            return acc
        }, {}))

    console.log(`Total unique restaurants: ${allIds.length}`)
    console.log(`Home page restaurants to fetch live: ${homeIds.length}`)

    // 1. Try live fetch for home page restaurants
    let liveOk = 0, liveFail = 0
    for (const id of homeIds) {
        const cacheFile = path.join(MENUS_DIR, `${id}.json`)
        if (fs.existsSync(cacheFile)) { liveOk++; process.stdout.write('.'); continue }
        const data = await fetchMenu(id)
        if (data?.data) {
            fs.writeFileSync(cacheFile, JSON.stringify(data))
            liveOk++
            process.stdout.write('✓')
        } else {
            liveFail++
            process.stdout.write('✗')
        }
    }
    console.log(`\nLive fetch: ${liveOk} ok, ${liveFail} failed`)

    // 2. Generate offline template for every restaurant with no cached menu
    let generated = 0, skipped = 0
    for (const id of allIds) {
        const cacheFile = path.join(MENUS_DIR, `${id}.json`)
        if (fs.existsSync(cacheFile)) { skipped++; continue }
        const info = manifest[id]
        const menu = buildMenu(info)
        fs.writeFileSync(cacheFile, JSON.stringify(menu))
        generated++
        if (generated % 100 === 0) process.stdout.write(`\r  Generated ${generated}...`)
    }
    console.log(`\nTemplate menus generated: ${generated}`)
    console.log(`Skipped (already cached): ${skipped}`)
    console.log(`\nTotal menus in cache: ${fs.readdirSync(MENUS_DIR).length}`)
}

main().catch(console.error)
