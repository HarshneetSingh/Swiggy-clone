import React from 'react'
import { useOutletContext } from 'react-router-dom';
import RestaurantUI from '../../../../utils/RestaurantUI';
import HomeMainShimmer from './HomeMainShimmer';
import HomeCategories from './HomeCategories';

const HomeMain = () => {
  const restroDetails=useOutletContext()
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants]=restroDetails[1]
  const [localFilters] = restroDetails[3] || [{ minRating: null, maxDelivery: null, vegOnly: false }]
  return (!allRestaurants?.cards?.length) ? <HomeMainShimmer /> : (
        <div>
            <div className={`body  flex flex-col w-full h-full`} >

                {/* Restaurant UI  */}

                <HomeCategories />
                <RestaurantUI filteredRestaurants={filteredRestaurants} allRestaurants={allRestaurants} setFilteredRestaurants={setFilteredRestaurants} localFilters={localFilters} />


            </div>
        </div>
    )
}

export default HomeMain