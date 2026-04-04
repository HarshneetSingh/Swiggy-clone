import React from 'react'

const RestaurantMenuShimmer = () => {
    return (
        <div className='w-full max-w-2xl mx-auto px-4'>
            <p className='w-full h-3 mb-8 bg-shimmerColor'></p>
            <div className='px-3'>
                <p className='w-24 h-2 mb-8 bg-lightShimmer'></p>

                <div className='flex gap-x-5 mb-32'>
                    {
                        [...Array(2)].map((_, i) => {
                            return (
                                <div key={i} className='flex-col w-full flex gap-y-4'>
                                    <div className=' h-52 bg-lightShimmer '></div>
                                    <p className='w-2/6 h-2 bg-lightShimmer '></p>
                                    <p className='w-1/6 h-1.5 bg-lightShimmer'></p>
                                    <div className='flex justify-between  '>
                                        <p className='w-2/12 h-1.5 bg-lightShimmer'></p>
                                        <p className='bg-lightShimmer w-2/12 h-5'></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default RestaurantMenuShimmer