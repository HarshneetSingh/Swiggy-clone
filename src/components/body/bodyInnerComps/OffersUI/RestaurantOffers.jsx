import React from 'react'
import RestaurantList from '../RestaurantUI/RestaurantList'

const RestaurantOffers = (props) => {
  const data = props.restaurants?.[0]?.card?.card
  const title = data?.title || 'Restaurants with offers'
  const restaurants = data?.restaurants || []

  return (
    <div>
      <div className='mt-14 w-4/5 m-auto'>
        <p className='text-2xl text-ttlRestroHeading font-bold'>{title}</p>
        <p className='mt-1 text-base text-locationError'>All offers and deals, from restaurants near you</p>
      </div>
      {restaurants.length > 0
        ? <RestaurantList restaurants={restaurants} />
        : <p className='w-4/5 m-auto mt-10 text-locationError'>No restaurant offers available right now.</p>
      }
    </div>
  )
}

export default RestaurantOffers
