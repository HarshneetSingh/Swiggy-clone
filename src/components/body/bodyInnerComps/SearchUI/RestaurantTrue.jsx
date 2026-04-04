import React from 'react'
import RestroCards from './RestroCards'

const RestaurantTrue = (props) => {
    let cards = props?.data
    cards = (cards?.length === 2) ? cards[1] : cards?.[0]

    const groupedCards = cards?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || []
    const topResult = groupedCards.filter((card) => card?.card?.card?.hasOwnProperty('info'))
    const moreResults = groupedCards.filter((card) => card?.card?.card?.hasOwnProperty('title') && card?.card?.card?.hasOwnProperty('restaurants'))

    if (!groupedCards.length) {
        // fallback: data has restaurants directly in cards[1].card.card.restaurants
        const direct = cards?.card?.card?.restaurants || []
        return (
            <div className='bg-lightShimmer'>
                <div className='p-5 pt-10 flex flex-col gap-y-5'>
                    {direct.map(r => <RestroCards key={r?.info?.id} CardsInfo={r?.info} />)}
                </div>
            </div>
        )
    }
    return (
        <div className='bg-lightShimmer '>
            <div className='p-5 pt-10 gap-5 grid grid-cols-1'>

                {
                    (topResult.length > 0) ?
                        topResult.map((card) => {
                            const info = card?.card?.card?.info
                            return < RestroCards key={info?.id} CardsInfo={info} />
                        }) : ""

                }
            </div>
            <div>
                {
                    (moreResults.length > 0) ?

                        <>
                            <p className='font-extrabold text-ttlRestroHeading p-5'>{moreResults[0]?.card?.card?.title}</p>
                            <div className='px-5 gap-5 grid grid-cols-1'>
                                {
                                    moreResults?.[0]?.card?.card?.restaurants?.map((card) => {
                                        const info = card?.info
                                        return  < RestroCards key={info?.id} CardsInfo={info} />
                                    })
                                }
                            </div>
                        </> : ""
                }
            </div>
        </div>
    )
}

export default RestaurantTrue