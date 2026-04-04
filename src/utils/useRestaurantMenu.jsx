import { useState, useEffect, useContext } from 'react'
import LocationContext from './LocationContext'
import { getMenuTemplateForCuisines } from './menuTemplates'
import { PROXY } from '../config'
const LS_PREFIX = 'swiggy_menu_'
const LS_MAX    = 40   // keep last 40 menus in localStorage

// ── localStorage helpers ──────────────────────────────────────────────────────
function lsGetMenu(id) {
    try {
        const raw = localStorage.getItem(LS_PREFIX + id)
        return raw ? JSON.parse(raw) : null
    } catch { return null }
}

function lsSetMenu(id, data) {
    try {
        localStorage.setItem(LS_PREFIX + id, JSON.stringify(data))
        // evict oldest if over limit
        const keys = Object.keys(localStorage).filter(k => k.startsWith(LS_PREFIX))
        if (keys.length > LS_MAX) {
            keys.sort((a, b) => {
                try {
                    const ta = JSON.parse(localStorage.getItem(a))?._ts || 0
                    const tb = JSON.parse(localStorage.getItem(b))?._ts || 0
                    return ta - tb
                } catch { return 0 }
            })
            localStorage.removeItem(keys[0])
        }
    } catch { /* localStorage full — silently ignore */ }
}

// ── Template fallback (same logic as server-side menuTemplates) ───────────────
function buildMenuFromTemplate(restaurantInfo) {
    const template = getMenuTemplateForCuisines(restaurantInfo?.cuisines)
    return {
        cards: [
            {
                card: {
                    card: {
                        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
                        info: restaurantInfo || {}
                    }
                }
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
                                    card: {
                                        card: {
                                            '@type': 'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge',
                                            isPureVeg: false
                                        }
                                    }
                                },
                                {
                                    card: {
                                        card: {
                                            '@type': 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                                            title: template.title,
                                            itemCards: template.items.map(item => ({
                                                card: {
                                                    '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                                                    info: item
                                                }
                                            }))
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ]
    }
}

// ── Hook ──────────────────────────────────────────────────────────────────────
const useRestaurantMenu = (resid, restaurantInfo) => {
    const [restaurant, setRestaurant] = useState(null)
    const [location]  = useContext(LocationContext)

    useEffect(() => {
        setRestaurant(null)
        getRestaurant()
    }, [resid])

    async function getRestaurant() {
        // 1. Check localStorage first (instant, works completely offline)
        const cached = lsGetMenu(resid)
        if (cached?.cards) {
            setRestaurant(cached)
            return
        }

        // 2. Try server (checks disk cache → live API → template)
        try {
            const res  = await fetch(`${PROXY}/api/menu?lat=${location.lat}&lng=${location.lng}&restaurantId=${resid}`)
            const json = await res.json()
            if (json?.data?.cards) {
                lsSetMenu(resid, { ...json.data, _ts: Date.now() })
                setRestaurant(json.data)
                return
            }
            throw new Error('No data')
        } catch {
            // 3. Full offline: build from template using restaurantInfo passed via route state
            setRestaurant(buildMenuFromTemplate(restaurantInfo))
        }
    }

    return restaurant
}

export default useRestaurantMenu
