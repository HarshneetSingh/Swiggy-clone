import React from 'react'
import { Link } from 'react-router-dom'
const RestroCards = (props) => {
    const info = props?.CardsInfo
    const name = info?.name
    const cuisine = info?.cuisines.join(',')
    const Availability = info?.availability?.hasOwnProperty('opened')

    return (
        <div className='w-full flex h-[156px] overflow-hidden items-center bg-white ' >

            <Link className='flex  items-center px-4 gap-x-3 pb-5  ' to={`/restaurant/${name}-${info?.id}`} state={{ restaurantInfo: info }}>
                <div className={`w-[88px] relative animate-[fadeIn_200ms_linear_1] after:content-[' hello'] after:rounded-lg    after:w-[88px] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0  after:bg-[#ebe8570c]} after:bg-blend-overlay`}>
                    <img className='rounded-lg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,${(Availability && info?.availability?.opened === true) ? '' : 'e_grayscale,'}c_fill/${info?.cloudinaryImageId}`} alt="" onError={(e) => { e.target.onerror = null; e.target.style.visibility = 'hidden' }} />

                    {
                        info?.promoted && (
                            <div className="bg-selectedBgColor opacity-90    text-white -left-2 absolute top-1 rounded-[4px] text-xs font-medium px-1 py-0.5">
                                Ad</div>
                        )
                    }
                    {
                        info?.hasOwnProperty('aggregatedDiscountInfoV3') && (
                            <div className=' bg-white p-px py-1 absolute -bottom-2 rounded-md left-2/4 -translate-x-2/4 z-10 border w-10/12 text-center text-[#ed5e0e]'>
                                {
                                    info?.aggregatedDiscountInfoV3?.hasOwnProperty('header') && (
                                        <p className='text-sm font-extrabold '>{info?.aggregatedDiscountInfoV3?.header}</p>
                                    )
                                }
                                {
                                    info?.aggregatedDiscountInfoV3?.hasOwnProperty('subHeader') && (
                                        <p className='text-[8px] text-headerHoverColor font-bold'>• {info?.aggregatedDiscountInfoV3?.subHeader} •</p>
                                    )
                                }
                                {
                                    info?.aggregatedDiscountInfoV3?.hasOwnProperty('discountTag') && (
                                        <div className=' absolute -top-[15px] text-white font-extrabold text-[9px] tracking-widest whitespace-nowrap left-2/4 -translate-x-2/4 px-1 py-1 rounded-tr-xl  rounded-tl-xl bg-[#ed5e0e]  '>
                                            {info?.aggregatedDiscountInfoV3?.discountTag}
                                        </div>
                                    )
                                }



                            </div>
                        )
                    }
                </div>

                <div className='mt-3 flex flex-col gap-y-1 items-start '>
                    <p className='text-selectedBgColor font-bold'>{name?.length >= 30 ? name?.substr(0, 30) + "..." : name}</p>
                    {

                        (Availability === false && (info?.availability.hasOwnProperty('nextOpenTimeMessage') || info?.availability.hasOwnProperty('restaurantClosedMeta'))) ? "" : (
                            <div className='flex justify-between items-end  text-sortByBtnColor text-xs font-bold '>
                                <p ><i className="fa-solid fa-star mr-1 text-[10px]" />{info?.avgRating}</p>
                                <p className='mx-1'>•</p>
                                <p>{info?.sla?.slaString}</p>
                                <p className='mx-1'>•</p>
                                <p className=''>{info?.costForTwo || info?.costForTwoMessage}</p>
                            </div>
                        )
                    }
                    <div className=" font-normal text-sm  text-locationError flex  whitespace-nowrap   ">
                        {
                            info?.availability.hasOwnProperty('nextCloseMessage') ?
                                <div className='font-bold text-[#8a584b]'>{`${info?.availability?.nextCloseMessage} • `} &nbsp; </div> : ""
                        }


                        <div>{cuisine?.length >= 30 ? cuisine?.substr(0, 30) + "..." : cuisine}</div>
                    </div>

                    {
                        !(Availability) && (
                            <p className='text-xs text-sortByBtnColor overflow-hidden whitespace-nowrap'>{info?.availability?.nextOpenTimeMessage?.toUpperCase()}</p>
                        )
                    }
                    {
                        !(Availability === false && info?.availability.hasOwnProperty('nextOpenTimeMessage')) ?
                            <p className='text-xs text-sortByBtnColor overflow-hidden whitespace-nowrap'>{info?.unorderableMessage?.toUpperCase().length >= 30 ? info?.unorderableMessage?.toUpperCase().substr(0, 37) + "..." : info?.unorderableMessage?.toUpperCase()}</p>
                            : ""
                    }
                </div>

            </Link>
        </div>
    )
}

export default RestroCards