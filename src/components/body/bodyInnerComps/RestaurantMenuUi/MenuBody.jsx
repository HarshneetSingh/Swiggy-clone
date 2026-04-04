import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShowingCategoryWise from './ShowingCategoryWise'
import ShowingRecommendedWise from './ShowingRecommendedWise'
import RestroNameAndDetails from './RestroNameAndDetails'
import { searchLogo } from '../../../../utils/helper'
const MenuBody = (props) => {
    const { restaurantMenu, restaurantInfoFromCard } = props
    const infoCard = restaurantMenu?.cards?.find(c => c?.card?.card?.['@type']?.includes('Restaurant') && c?.card?.card?.info)
    const restaurantInfo = restaurantInfoFromCard || infoCard?.card?.card?.info
    const offersCard = restaurantMenu?.cards?.find(c => c?.card?.card?.gridElements?.infoWithStyle?.offers)
    const offersOnRestaurant = offersCard?.card?.card?.gridElements?.infoWithStyle?.offers
    const menuCard = restaurantMenu?.cards?.find(c => c?.groupedCard?.cardGroupMap?.REGULAR)
    const restroitems = menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards
    if (!restroitems?.length) {
        return <div className='w-full max-w-2xl mx-auto px-4 py-20 text-center text-locationError'>Menu unavailable. Please try again later.</div>
    }
    let address = []
    address.push(restroitems[restroitems?.length-1])
    address.push(restroitems[restroitems?.length-2])

    let [isVeg, topPicks, restroDishes] = [false, false, []]

    if (restroitems?.[1]?.card?.card?.title !== "Top Picks") {
        [isVeg, ...restroDishes] = restroitems

        restroDishes = restroDishes?.filter((card) => card?.card?.card?.hasOwnProperty('title'))
    } else {
        [isVeg, topPicks, ...restroDishes] = restroitems
        restroDishes = restroDishes?.filter((card) => card?.card?.card?.hasOwnProperty('title'))

    }
    isVeg = isVeg?.card?.card?.hasOwnProperty('isPureVeg')
    isVeg = isVeg === true
    const [showVeg, setShowVeg] = useState(false)
    return (

        <div className='w-full h-full mt-1'>
            <div className='w-full max-w-2xl mx-auto px-4 flex flex-col'>
                {/* home link and search */}
                <div className='flex justify-between font-medium text-locationError my-8'>
                    <p className='text-[10px] mr-2'><span className='hover:text-lightColor'><Link to='/'>Home </Link></span> <span className='mx-1'>/</span> <span className='text-lightColor '> {restaurantInfo?.name}</span></p>
                    <button className='fill-lightColor   '>{searchLogo}</button>
                </div>
                

                {/* name and its details */}
                <div className='? float-right'>
                    <RestroNameAndDetails restaurantInfo={restaurantInfo} offersOnRestaurant={offersOnRestaurant} />
                    {/* veg option */}
                    <div className='flex gap-x-3 mb-6'>
                        <p className=' font-extrabold text-sortByBtnHoverColor text-sm'>Veg Only </p>


                        <button onClick={() => {
                            setShowVeg(prev => !prev)
                        }} >
                            <div className={`w-8 h-4 ${!(showVeg) ? 'bg-[#D4D5D9] transition duration-200' : "bg-[#008000]  transition duration-200"} rounded-sm`}>
                                <div className={` rounded-sm flex  bg-white  ${(showVeg) ? 'border-[#008000] opacity-100  ' : "border-[#D4D5D9]   "} ${(showVeg) ? 'translate-x-full transition ease-out duration-1000 ' : "translate-x-0  duration-500 transition ease-out "}  border-2 w-4 h-4  justify-center items-center`}>
                                    {
                                        (showVeg) ? <span className='w-2 h-2 rounded-full bg-[#008000] '></span> : ""
                                    }
                                </div>
                            </div>

                        </button>
                    </div>
                    <hr />
                </div>


                {/* items  */}
                <div>
                    {
                        restroDishes.map((dishes, index) => {
                            const Title = dishes?.card?.card?.title
                            let itemCards = (dishes?.card?.card?.hasOwnProperty('categories')) ? dishes?.card?.card?.categories : dishes?.card?.card?.itemCards

                            return (
                                <div key={index}>
                                    {
                                        (dishes?.card?.card?.hasOwnProperty('categories')) ? <ShowingCategoryWise Title={Title} itemCards={itemCards} showVeg={showVeg} topPicks={topPicks} restaurantName={restaurantInfo?.name} /> : <ShowingRecommendedWise topPicks={topPicks} Title={Title} showVeg={showVeg} itemCards={itemCards} restaurantName={restaurantInfo?.name} />
                                    }
                                    <hr className={`  border-t-[14px] border-lightGray`} />

                                </div>
                            )
                        })
                    }
                </div>
                {/* licensing and address */}
                {(address[0]?.card?.card?.completeAddress) ?
                    <div className='bg-lightGray  w-full text-locationError px-3 h-60'>
                        {address[1]?.card?.card?.imageId && (
                            <div className='flex pb-5  gap-4    items-center'>
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_60,h_30/${address[1]?.card?.card?.imageId}`} alt="" />
                                <p className='text-sm'>{address[1]?.card?.card?.text}</p>
                            </div>
                        )}
                        <hr className='bg-slate-400 h-[2px]' />
                        <div className='py-2'>
                            <p className='text-sm font-bold'>{address[0]?.card?.card?.name}</p>
                            <p className='text-sm '>(Outlet:{address[0]?.card?.card?.area})</p>
                            <p className='text-xs py-3'> <i className="fa-sharp fa-solid fa-location-dot mr-2" ></i>{address[0]?.card?.card?.completeAddress}</p>
                        </div>
                    </div> : ""}
            </div>
        </div>
    )
}

export default MenuBody