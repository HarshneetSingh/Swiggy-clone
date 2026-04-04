import React from 'react'
import PaymentCard from './PaymentCard'

const PaymentOffers = (props) => {
  const data = props.offers?.[0]?.card?.card
  const title = data?.title || 'Payment Offers'
  const offers = data?.offers || []

  return (
    <div className='w-4/5 m-auto'>
      <div className='mt-16 mb-6 font-bold text-2xl text-ttlRestroHeading'>{title}</div>
      {offers.length > 0
        ? <div className='flex flex-wrap gap-9'>
            {offers.map((offer, index) => (
              <PaymentCard key={index} offerDetail={offer} />
            ))}
          </div>
        : <p className='text-locationError'>No payment offers available right now.</p>
      }
    </div>
  )
}

export default PaymentOffers
