import React from 'react'
import { useCart } from '../../../../utils/CartContext'
import { useParams } from 'react-router-dom'

const VegIcon = ({ isVeg }) => (
    <div className={`flex border-2 w-[15px] h-[15px] justify-center items-center flex-shrink-0
        ${isVeg === 1 ? 'border-[#0f8a65]' : 'border-[#e43b4f]'}`}>
        {isVeg === 1
            ? <span className='w-sevenpx h-sevenpx rounded-full bg-[#0f8a65]' />
            : <i className="fa-sharp fa-solid fa-play fa-2xs text-[#e43b4f] -rotate-90" />
        }
    </div>
)

const MenuCard = ({ item, restaurantName }) => {
    const { cart, dispatch } = useCart()
    const qty = cart.items.find(i => i.id === item?.id)?.qty || 0

    const add = () => dispatch({
        type: 'ADD',
        item: {
            id: item?.id,
            name: item?.name,
            price: item?.price,
            defaultPrice: item?.defaultPrice,
            imageId: item?.imageId,
            isVeg: item?.isVeg,
        },
        restaurantName: restaurantName || '',
    })

    const remove = () => dispatch({ type: 'REMOVE', id: item?.id })

    return (
        <div className='flex justify-between relative' key={item?.id}>
            {/* left: info */}
            <div className='flex-1 min-w-0 pr-4'>
                <div className='flex mb-2 gap-x-2 items-center'>
                    {item?.hasOwnProperty('isVeg') && <VegIcon isVeg={item.isVeg} />}
                    {item?.isBestseller && (
                        <p className='text-headerHoverColor font-bold text-[13px]'>
                            <i className="fa-solid fa-star mr-[2px] text-[11px]" />Bestseller
                        </p>
                    )}
                </div>

                <p className='font-semibold text-ttlRestroHeading'>{item?.name}</p>

                <div className='flex items-center gap-x-3 mt-1'>
                    <p className='text-sm font-medium text-ttlRestroHeading'>
                        <i className="fa-solid fa-indian-rupee-sign mr-1 text-xs" />
                        {((item?.price || item?.defaultPrice) / 100).toFixed(0)}
                    </p>
                    {item?.offerTags?.length > 0 && (
                        <p className='p-1 bg-[#FAE8E3] border-l-darkOrange text-[#DB6742] font-light border-l text-[10px]'>
                            <span className="font-bold">{item.offerTags[0]?.title}</span>
                            <span> | {item.offerTags[0]?.subTitle}</span>
                        </p>
                    )}
                </div>

                <p className='text-locationError font-light text-sm my-3 line-clamp-2'>{item?.description}</p>
            </div>

            {/* right: image + add */}
            <div className='relative flex-shrink-0 w-32'>
                {item?.imageId && (
                    <div className='relative w-32 h-24 rounded-md overflow-hidden'>
                        <div className='absolute inset-0 bg-[rgba(40,44,63,.05)] z-10 rounded-md' />
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                            className='w-full h-full object-cover rounded-md'
                            alt={item?.name}
                            onError={(e) => { e.target.onerror = null; e.target.style.visibility = 'hidden' }}
                        />
                    </div>
                )}

                {/* ADD / qty stepper */}
                <div className={`absolute ${item?.imageId ? '-bottom-3' : 'top-0'} left-1/2 -translate-x-1/2`}>
                    {qty === 0 ? (
                        <button
                            onClick={add}
                            className='bg-white py-2 px-8 text-headerHoverColor font-bold border rounded-md text-xs shadow-[0px_3px_8px_#e9e9eb] border-[#d4d5d9] hover:shadow-[0_2px_8px_#d4d5d9] whitespace-nowrap'
                        >
                            {item?.addons && <span className='absolute right-2 top-0.5 text-base leading-none'>+</span>}
                            ADD
                        </button>
                    ) : (
                        <div className='flex items-center bg-headerHoverColor rounded-md shadow-[0px_3px_8px_#e9e9eb] overflow-hidden'>
                            <button onClick={remove} className='text-white font-bold text-lg px-2.5 py-1 hover:bg-[#e5711a] transition-colors'>−</button>
                            <span className='text-white font-bold text-sm px-1 min-w-[20px] text-center'>{qty}</span>
                            <button onClick={add} className='text-white font-bold text-lg px-2.5 py-1 hover:bg-[#e5711a] transition-colors'>+</button>
                        </div>
                    )}
                </div>

                {item?.addons && qty === 0 && (
                    <p className='text-[10px] text-[#7e808c] text-center bg-white z-50 mt-[7px]'>Customisable</p>
                )}
            </div>
        </div>
    )
}

export default MenuCard
