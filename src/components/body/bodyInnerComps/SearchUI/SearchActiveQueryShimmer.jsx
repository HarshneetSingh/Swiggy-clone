import React from 'react'

const SearchActiveQueryShimmer = () => {
  return (
    <div className='h-full w-full bg-lightShimmer p-2'>
      <div className='w-full h-14 bg-white flex justify-start p-4 items-center gap-x-3 mb-12 '>
        <p className='rounded-3xl bg-shimmerColor w-20 h-8'></p>
        <p className='rounded-3xl border w-20 h-8'></p>
      </div>
      <div className='flex flex-col gap-y-4'>
        {
        [...Array(5)].map((_,i)=>{
          return (
            <div key={i} className=' p-4 bg-white w-full'>
              <div className='w-4 h-4 my-3 bg-shimmerColor'></div>
              <div className='w-3/5 h-4 my-2 bg-shimmerColor'></div>
              <div className='w-2/4 h-4 my-2 bg-shimmerColor'></div>
              <div className='w-1/12 h-4 my-3 bg-shimmerColor'> </div>
            </div>
          )
        })
      }
      </div>
      
    </div>
  )
}

export default SearchActiveQueryShimmer