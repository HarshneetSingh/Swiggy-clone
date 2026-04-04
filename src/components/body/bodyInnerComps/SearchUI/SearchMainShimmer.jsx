import React from 'react'

const SearchMainShimmer = () => {
    return (
        <div className='p-2'>
            <div className='w-2/6 h-4 my-3 bg-shimmerColor'></div>
            {
                [...Array(3)].map((e, r) => {
                    return <React.Fragment key={r}>
                    <div className=' flex justify-start items-center pl-4 gap-x-3 '>
                        <i className="text-xl  text-locationError pt-4 pr-4 fa-solid fa-magnifying-glass"></i>
                        <div className='w-2/4 h-4  bg-shimmerColor '></div>
                    </div>
                    <hr className='bg-black   my-1 ml-16' />
                    </React.Fragment>
                })
            }
        </div>
    )
}

export default SearchMainShimmer