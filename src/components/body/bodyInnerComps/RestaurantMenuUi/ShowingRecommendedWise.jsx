import React, { useState } from 'react'
import { loadMenu } from '../../../../utils/helper'

const ShowingRecommendedWise = (props) => {
    const { topPicks, Title, itemCards, index, showVeg, restaurantName } = props
    const [isVisible, setIsVisible] = useState(true)
    const VegCard = itemCards?.filter((card) => card?.card?.info?.itemAttribute?.vegClassifier === 'VEG')
    return (
        <>

            <div className='w-[97%] m-auto'>

                <button className='w-full' onClick={() => setIsVisible(prev => !prev)}>
                    <div className='flex justify-between  py-5 '>
                        <p className="text-lg text-selectedBgColor group-hover:text-headerHoverColor group-hover:duration-100 font-extrabold ">{Title + ` (${(showVeg) ? VegCard.length:itemCards.length})`}</p>


                        <div className='text-lg text-selectedBgColor mr-2'>
                            {
                                (isVisible) ? <i className=" fa-sharp fa-solid fa-angle-up "></i> :
                                    <i className="  fa-sharp fa-solid fa-angle-down "></i>
                            }
                        </div>
                    </div>
                </button>
                <div>
                    {
                        (isVisible)
                            ? (showVeg) ? VegCard.map((card) => {
                              return <div key={card?.card?.info?.id}>{ loadMenu(card, restaurantName)}</div>
                            }) : itemCards.map((card) => {
                               return <div key={card?.card?.info?.id}>{ loadMenu(card, restaurantName)}</div>
                            })
                            :
                            ""

                    }
                </div>



            </div>

        </>
    )
}

export default ShowingRecommendedWise