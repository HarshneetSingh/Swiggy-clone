import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../utils/CartContext'

const DELIVERY_FEE = 49
const PLATFORM_FEE = 6
const GST_RATE = 0.05

const VegDot = ({ isVeg }) => (
    <div className={`flex-shrink-0 w-4 h-4 border-2 flex items-center justify-center rounded-sm
        ${isVeg === 1 ? 'border-[#0f8a65]' : 'border-[#e43b4f]'}`}>
        <span className={`w-2 h-2 rounded-full ${isVeg === 1 ? 'bg-[#0f8a65]' : 'bg-[#e43b4f]'}`} />
    </div>
)

const EmptyCart = () => (
    <div className='flex flex-col items-center justify-center py-24 px-6 text-center'>
        <div className='w-40 h-40 mb-6 opacity-30'>
            <svg viewBox="0 0 200 200" className='w-full h-full fill-sortByBtnHoverColor'>
                <path d="M70 170a15 15 0 1 0 0-30 15 15 0 0 0 0 30zm80 0a15 15 0 1 0 0-30 15 15 0 0 0 0 30zM10 20h20l26 100h88l20-70H56" stroke="#3D4152" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        </div>
        <h2 className='text-2xl font-extrabold text-ttlRestroHeading mb-2'>Your cart is empty</h2>
        <p className='text-locationError text-sm mb-8 max-w-xs'>You haven't added anything yet. Find something delicious!</p>
        <Link
            to='/'
            className='px-8 py-3 bg-headerHoverColor text-white font-bold rounded-lg hover:bg-[#e5711a] transition-colors text-sm'
        >
            Browse Restaurants
        </Link>
    </div>
)

const BillRow = ({ label, value, bold, orange, sub }) => (
    <div className={`flex justify-between items-center ${sub ? 'py-1' : 'py-2'}`}>
        <span className={`text-sm ${bold ? 'font-bold text-ttlRestroHeading' : 'text-sortByBtnColor'} ${orange ? 'text-headerHoverColor font-semibold' : ''}`}>
            {label}
        </span>
        <span className={`text-sm ${bold ? 'font-bold text-ttlRestroHeading' : 'text-sortByBtnColor'} ${orange ? 'text-headerHoverColor font-semibold' : ''}`}>
            {value}
        </span>
    </div>
)

const Cart = () => {
    const { cart, dispatch } = useCart()
    const [coupon, setCoupon] = useState('')
    const [appliedCoupon, setAppliedCoupon] = useState(null)
    const [instructions, setInstructions] = useState('')
    const [ordered, setOrdered] = useState(false)

    const subtotal = cart.items.reduce((sum, i) => sum + ((i.price || i.defaultPrice || 0) / 100) * i.qty, 0)
    const discount = appliedCoupon ? Math.round(subtotal * 0.1) : 0
    const gst = Math.round((subtotal - discount) * GST_RATE)
    const total = Math.round(subtotal - discount + DELIVERY_FEE + PLATFORM_FEE + gst)
    const totalItems = cart.items.reduce((s, i) => s + i.qty, 0)

    if (ordered) {
        return (
            <div className='min-h-[60vh] flex flex-col items-center justify-center px-6 text-center py-20'>
                <div className='w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6'>
                    <svg viewBox='0 0 24 24' className='w-10 h-10 fill-green-500'>
                        <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
                    </svg>
                </div>
                <h2 className='text-2xl font-extrabold text-ttlRestroHeading mb-2'>Order Placed!</h2>
                <p className='text-locationError text-sm mb-8'>Your food is being prepared. Estimated delivery: 30–40 mins.</p>
                <Link to='/' onClick={() => dispatch({ type: 'CLEAR' })}
                    className='px-8 py-3 bg-headerHoverColor text-white font-bold rounded-lg hover:bg-[#e5711a] transition-colors text-sm'>
                    Back to Home
                </Link>
            </div>
        )
    }

    if (!cart.items.length) return <EmptyCart />

    return (
        <div className='min-h-screen bg-lightShimmer pb-16'>
            <div className='w-full max-w-5xl mx-auto px-4 pt-8'>

                {/* heading */}
                <div className='mb-6'>
                    <h1 className='text-2xl sm:text-3xl font-extrabold text-ttlRestroHeading'>Your Cart</h1>
                    <p className='text-locationError text-sm mt-1'>{totalItems} item{totalItems !== 1 ? 's' : ''} from <span className='font-semibold text-sortByBtnHoverColor'>{cart.restaurantName || 'restaurant'}</span></p>
                </div>

                <div className='flex flex-col lg:flex-row gap-6 items-start'>

                    {/* ── Left column ── */}
                    <div className='flex-1 flex flex-col gap-4 min-w-0'>

                        {/* Items card */}
                        <div className='bg-white rounded-2xl shadow-sm border border-[#e9e9eb] overflow-hidden'>
                            <div className='px-5 py-4 border-b border-[#f1f1f6]'>
                                <p className='font-bold text-ttlRestroHeading text-base'>{cart.restaurantName || 'Your order'}</p>
                            </div>

                            <div className='divide-y divide-[#f1f1f6]'>
                                {cart.items.map(item => {
                                    const price = (item.price || item.defaultPrice || 0) / 100
                                    return (
                                        <div key={item.id} className='flex items-center gap-x-3 px-5 py-4'>
                                            {item.hasOwnProperty('isVeg') && <VegDot isVeg={item.isVeg} />}

                                            {/* image */}
                                            {item.imageId && (
                                                <img
                                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                                                    className='w-14 h-14 rounded-lg object-cover flex-shrink-0'
                                                    alt={item.name}
                                                />
                                            )}

                                            {/* name + price */}
                                            <div className='flex-1 min-w-0'>
                                                <p className='font-semibold text-ttlRestroHeading text-sm truncate'>{item.name}</p>
                                                <p className='text-xs text-locationError mt-0.5'>₹{price.toFixed(0)} each</p>
                                            </div>

                                            {/* stepper */}
                                            <div className='flex items-center bg-headerHoverColor rounded-lg overflow-hidden flex-shrink-0'>
                                                <button
                                                    onClick={() => dispatch({ type: 'REMOVE', id: item.id })}
                                                    className='text-white font-bold text-lg px-2.5 py-1 hover:bg-[#e5711a] transition-colors'
                                                >−</button>
                                                <span className='text-white font-bold text-sm px-2 min-w-[24px] text-center'>{item.qty}</span>
                                                <button
                                                    onClick={() => dispatch({ type: 'ADD', item, restaurantName: cart.restaurantName })}
                                                    className='text-white font-bold text-lg px-2.5 py-1 hover:bg-[#e5711a] transition-colors'
                                                >+</button>
                                            </div>

                                            {/* line total */}
                                            <p className='text-sm font-bold text-ttlRestroHeading w-14 text-right flex-shrink-0'>
                                                ₹{(price * item.qty).toFixed(0)}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* add more */}
                            <div className='px-5 py-3 border-t border-[#f1f1f6]'>
                                <Link to='/' className='text-headerHoverColor font-semibold text-sm hover:underline'>
                                    + Add more items
                                </Link>
                            </div>
                        </div>

                        {/* Delivery instructions */}
                        <div className='bg-white rounded-2xl shadow-sm border border-[#e9e9eb] px-5 py-4'>
                            <p className='font-bold text-ttlRestroHeading text-sm mb-3'>Delivery instructions</p>
                            <textarea
                                value={instructions}
                                onChange={e => setInstructions(e.target.value)}
                                placeholder='E.g. Ring the bell, leave at door…'
                                rows={3}
                                className='w-full text-sm text-sortByBtnHoverColor border border-[#d4d5d9] rounded-lg px-3 py-2 resize-none focus:outline-none focus:border-headerHoverColor transition-colors placeholder-locationError'
                            />
                        </div>

                        {/* Coupon */}
                        <div className='bg-white rounded-2xl shadow-sm border border-[#e9e9eb] px-5 py-4'>
                            <p className='font-bold text-ttlRestroHeading text-sm mb-3'>Apply coupon</p>
                            {appliedCoupon ? (
                                <div className='flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-3'>
                                    <div className='flex items-center gap-x-2'>
                                        <svg viewBox='0 0 24 24' className='w-4 h-4 fill-green-500'><path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' /></svg>
                                        <span className='text-sm font-semibold text-green-700'>{appliedCoupon} — 10% off applied!</span>
                                    </div>
                                    <button onClick={() => setAppliedCoupon(null)} className='text-xs text-locationError hover:text-sortByBtnHoverColor'>Remove</button>
                                </div>
                            ) : (
                                <div className='flex gap-x-2'>
                                    <input
                                        value={coupon}
                                        onChange={e => setCoupon(e.target.value.toUpperCase())}
                                        placeholder='Enter coupon code'
                                        className='flex-1 border border-[#d4d5d9] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-headerHoverColor transition-colors placeholder-locationError'
                                    />
                                    <button
                                        onClick={() => { if (coupon.trim()) setAppliedCoupon(coupon.trim()) }}
                                        className='px-4 py-2 bg-headerHoverColor text-white text-sm font-bold rounded-lg hover:bg-[#e5711a] transition-colors'
                                    >Apply</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ── Right column: Bill ── */}
                    <div className='w-full lg:w-[340px] flex flex-col gap-4 flex-shrink-0'>

                        {/* Deliver to */}
                        <div className='bg-white rounded-2xl shadow-sm border border-[#e9e9eb] px-5 py-4'>
                            <div className='flex items-center justify-between mb-2'>
                                <p className='font-bold text-ttlRestroHeading text-sm'>Deliver to</p>
                                <button className='text-xs text-headerHoverColor font-semibold hover:underline'>Change</button>
                            </div>
                            <div className='flex items-start gap-x-2'>
                                <i className='fa-solid fa-location-dot text-headerHoverColor mt-0.5' />
                                <p className='text-sm text-sortByBtnColor leading-snug'>New Delhi, Delhi, India</p>
                            </div>
                        </div>

                        {/* Bill details */}
                        <div className='bg-white rounded-2xl shadow-sm border border-[#e9e9eb] px-5 py-4'>
                            <p className='font-bold text-ttlRestroHeading text-sm mb-3'>Bill details</p>

                            <BillRow label='Item total' value={`₹${subtotal.toFixed(0)}`} />
                            {discount > 0 && <BillRow label='Coupon discount' value={`−₹${discount}`} orange />}
                            <BillRow label='Delivery fee' value={`₹${DELIVERY_FEE}`} />
                            <BillRow label='Platform fee' value={`₹${PLATFORM_FEE}`} />
                            <BillRow label={`GST (${(GST_RATE * 100).toFixed(0)}%)`} value={`₹${gst}`} />

                            <hr className='my-3 border-[#e9e9eb]' />

                            <BillRow label='To pay' value={`₹${total}`} bold />
                        </div>

                        {/* savings */}
                        {discount > 0 && (
                            <p className='text-center text-xs text-green-600 font-semibold bg-green-50 border border-green-100 rounded-xl py-2'>
                                🎉 You're saving ₹{discount} on this order!
                            </p>
                        )}

                        {/* CTA */}
                        <button
                            onClick={() => setOrdered(true)}
                            className='w-full py-4 bg-headerHoverColor hover:bg-[#e5711a] text-white font-extrabold rounded-xl text-base shadow-md transition-all duration-200 flex items-center justify-center gap-x-3'
                        >
                            <span>Place Order</span>
                            <span className='bg-white bg-opacity-20 rounded-lg px-2 py-0.5 text-sm'>₹{total}</span>
                        </button>

                        <p className='text-center text-xs text-locationError'>
                            By placing your order, you agree to our{' '}
                            <span className='text-sortByBtnHoverColor underline cursor-pointer'>Terms of Service</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
