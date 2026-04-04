import React from 'react'
import { Link } from 'react-router-dom'
const OfferColumn = (props) => {
  const cards = props.photos?.data?.data?.cards
  return (
    <div className='w-full   h-[340px] bg-[#171a29]'>
      <div className=' relative w-4/5 m-auto h-full overflow-hidden'>
        <div className="h-full flex flex-nowrap  overflow-x-scroll    items-center justify-between whitespace-nowrap gap-x-12 mb-10 ">

          {
            cards.map(card => {
              const cardDetail = card?.data
              return (

                <Link to={`collections/${cardDetail?.link}?type=rcv2`} key={cardDetail?.bannerId}><div className='w-[260px] animate-[fadeIn_100ms_linear_1] h-[260px] hover:scale-105 hover:duration-700 hover:transition-[cubic-bezier(0.22, 0.61, 0.36, 1)] hover:ease-in-out'><img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${cardDetail?.creativeId}`} alt="" onError={(e) => { e.target.onerror = null; e.target.style.visibility = 'hidden' }} /></div></Link>

              )
            })
          }

        </div>
      </div>


    </div>
  )
}

export default OfferColumn