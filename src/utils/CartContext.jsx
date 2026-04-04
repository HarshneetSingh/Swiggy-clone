import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            const existing = state.items.find(i => i.id === action.item.id)
            if (existing) {
                return {
                    ...state,
                    items: state.items.map(i =>
                        i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
                    ),
                }
            }
            return {
                restaurantId: action.restaurantId,
                restaurantName: action.restaurantName,
                items: [...state.items, { ...action.item, qty: 1 }],
            }
        }
        case 'REMOVE': {
            const existing = state.items.find(i => i.id === action.id)
            if (!existing) return state
            if (existing.qty === 1) {
                const items = state.items.filter(i => i.id !== action.id)
                return items.length === 0
                    ? { restaurantId: null, restaurantName: '', items: [] }
                    : { ...state, items }
            }
            return {
                ...state,
                items: state.items.map(i =>
                    i.id === action.id ? { ...i, qty: i.qty - 1 } : i
                ),
            }
        }
        case 'CLEAR':
            return { restaurantId: null, restaurantName: '', items: [] }
        default:
            return state
    }
}

const initialState = { restaurantId: null, restaurantName: '', items: [] }

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(reducer, initialState)
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
export default CartContext
