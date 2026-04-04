import React from 'react'
import SortByBtn from '../components/body/bodyInnerComps/RestaurantUI/SortByBtn'
import RestaurantList from '../components/body/bodyInnerComps/RestaurantUI/RestaurantList'
import { CardShimmer, FilterSelectedBtn } from './helper'

const getRestaurantsFromCards = (data, localFilters) => {
    if (!data?.cards) return []
    const chains = data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    const mainGrid = data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    const seen = new Set()
    let restaurants = [...chains, ...mainGrid].filter(r => {
        const id = r?.info?.id
        if (!id || seen.has(id)) return false
        seen.add(id)
        return true
    })
    if (localFilters?.minRating) restaurants = restaurants.filter(r => (r?.info?.avgRating || 0) >= localFilters.minRating)
    if (localFilters?.maxDelivery) restaurants = restaurants.filter(r => (r?.info?.sla?.deliveryTime || 999) <= localFilters.maxDelivery)
    if (localFilters?.vegOnly) restaurants = restaurants.filter(r => r?.info?.veg === true)
    return restaurants
}

const RestaurantUI = (props) => {
    const restaurants = getRestaurantsFromCards(props.filteredRestaurants, props.localFilters)

    return (
        <>
            <SortByBtn filteredRestaurants={props.filteredRestaurants} allRestaurants={props.allRestaurants} setFilteredRestaurants={props.setFilteredRestaurants} />
            <FilterSelectedBtn filters={props.filteredRestaurants?.filters} setFilteredRestaurants={props.setFilteredRestaurants} />
            {
                (restaurants.length === 0) ?
                    <div className="w-5/6 m-auto h-full flex">
                        <div className="mt-9 ml-5">
                            <div className="flex justify-between flex-wrap-reverse gap-x-9 gap-y-16 pb-20">
                                {[...Array(12)].map((i, j) => <CardShimmer key={j} />)}
                            </div>
                        </div>
                    </div>
                    :
                    <RestaurantList restaurants={restaurants} />
            }
        </>
    )
}

export default RestaurantUI;
