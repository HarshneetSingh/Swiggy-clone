import React, { useState, useEffect } from 'react'
import RestaurantOffers from './bodyInnerComps/OffersUI/RestaurantOffers'
import PaymentOffers from './bodyInnerComps/OffersUI/PaymentOffers'
import OfferPageShimmer from './bodyInnerComps/RestaurantOffersUI/OfferPageShimmer'
import offersRestaurantMock from '../../mocks/offersRestaurant.json'
import offersPaymentMock from '../../mocks/offersPayment.json'

const Offers = () => {
  const [restaurant, setRestaurant] = useState(null)
  const [offers, setOffers] = useState(null)
  const [showMain, setShowMain] = useState(true)

  useEffect(() => {
    setRestaurant(offersRestaurantMock.cards)
    setOffers(offersPaymentMock.cards)
  }, [])

  return (
    <div className=' w-full'>
      <div className='h-[240px] sm:h-[300px] bg-[#005062]'>
        <div className='flex justify-between w-full max-w-5xl mx-auto px-4 h-full items-center'>
          <div className='text-white'>
            <p className='text-3xl sm:text-5xl font-bold'>Offers for you</p>
            <p className='text-sm sm:text-[21px] mt-1 opacity-80'>Explore top deals and offers exclusively for you!</p>
          </div>
          <div className='hidden sm:block flex-shrink-0'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham" alt="Offers" className='w-48 lg:w-[270px] h-36 lg:h-48 object-contain' />
          </div>
        </div>
      </div>
      {
        (restaurant === null || offers === null) ? <OfferPageShimmer /> : <>
          <div className='border-b-[1px] border-neutral-300 relative '>
            <div className=' h-16 w-4/5 m-auto flex '>
              <button className={` text-xl hover:text-ttlRestroHeading ${(showMain) ? ' text-ttlRestroHeading font-medium  ' : "font-normal text-locationError "}`} onClick={() => setShowMain(true)}>Restaurant offers</button>
              <button className={`ml-5  text-xl hover:text-ttlRestroHeading ${!(showMain) ? ' text-ttlRestroHeading font-medium  ' : "font-normal text-locationError "}`} onClick={() => setShowMain(false)}>Payment offers/Coupons</button>
            </div>
            <div className={`w-2 h-[2px] ease-in-out  duration-500 transition  bg-ttlRestroHeading absolute bottom-0 ${(showMain) ? " translate-x-[155px] w-40" : " w-56 translate-x-[330px]"}`}></div>
          </div>
          <div>
            {(showMain) ? <RestaurantOffers restaurants={restaurant} /> : <PaymentOffers offers={offers} />}
          </div>
        </>
      }
    </div>
  )
}

export default Offers
