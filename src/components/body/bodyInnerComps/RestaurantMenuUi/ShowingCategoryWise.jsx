import React, { useState } from 'react'
import { loadMenu } from '../../../../utils/helper'

const ShowingCategoryWise = (props) => {
    const { Title, itemCards, showVeg, restaurantName } = props


    return (
        <div className='w-[97%] m-auto'>
            
             <p className='text-lg text-selectedBgColor  font-extrabold mt-5 mb-2' >{Title}</p>
            

            {
                itemCards.map((card, index) => {
                    const title = card?.title
                    const itemCards = card?.itemCards
                    const [isVisible, setIsVisible] = useState(true)
                    const VegCard = itemCards?.filter((card) => card?.card?.info?.itemAttribute?.vegClassifier === 'VEG')
                    return <div key={index}>
                        <div className='w-full'  >
                            <div className='flex justify-between  py-3 ' onClick={() => setIsVisible(prev => !prev)}>

                                <p className="text-base text-ttlRestroHeading font-medium group-hover:text-headerHoverColor group-hover:duration-100 ">{title + ` (${(showVeg) ? VegCard.length : itemCards.length})  `}</p>

                                <div className='text-lg text-ttlRestroHeading mr-3   '>
                                    {
                                        isVisible ? <i className=" fa-sharp fa-solid fa-angle-up "></i> :
                                            <i className="  fa-sharp fa-solid fa-angle-down "></i>
                                    }
                                </div>
                            </div>

                            <div>
                                {(isVisible) ?
                                    (showVeg) ? VegCard.map((card) => {
                                        return <div key={card?.card?.info?.id}>{loadMenu(card, restaurantName)}</div>
                                    }) :
                                        itemCards.map((card) => {
                                            return <div key={card?.card?.info?.id}>{loadMenu(card, restaurantName)}</div>
                                        })
                                    :
                                    ""

                                }
                            </div>
                            <hr className='bg-black h-[0px]' />

                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ShowingCategoryWise