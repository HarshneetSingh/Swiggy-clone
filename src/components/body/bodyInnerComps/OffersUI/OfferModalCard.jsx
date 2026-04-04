import React, { useContext } from 'react'
import OfferModalContext from '../../../../utils/OfferModalContext'

const OfferModalCard = (props) => {
  if (props.offerModalState === false) {
    return false
  }
  const { offerModalData, setOfferModalData, offerModalState, setOfferModalState,copied, setCopied  } = useContext(OfferModalContext)
  return (
    <>
      <div className={` bg-white fixed w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3  p-7 top-2/4  left-2/4   overflow-auto transition-all  -translate-x-2/4 duration-500 z-50 ${(offerModalState === false) ? "translate-y-full opacity-0 duration-[0ms]" : " -translate-y-2/4"}`}>
        <div className='flex'>
          <div className='flex items-center justify-around border border-[#daceb7]  bg-[#fffae6]  '>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${offerModalData?.logo}`} className="w-5 h-5 mx-2 " alt="" />
            <div className=' text-sm px-3 font-semibold h-full text-ttlRestroHeading relative '>
              <div className='m-2 '> {offerModalData?.couponCode}</div>
              <span className=' before:content-[" "] before:bottom-0 before:absolute before:w-2 before:h-2  before:border-transparent before:border-[5px] before:border-b-[5px] before:left-0 before:border-b-[#daceb7]       after:bottom-[-2px] after:content-[" "] after:border-transparent after:border-b-white  after:border-[5px] after:border-b-[5px]  after:absolute after:w-2 after:h-2 after:left-0'></span>
              <span className=' before:content-[" "] before:top-0 before:absolute before:w-2 before:h-2  before:border-transparent before:border-[5px] before:border-t-[5px] before:left-0 before:border-t-[#daceb7]       after:top-[-2px] after:content-[" "] after:border-transparent after:border-t-white  after:border-[5px] after:border-t-[5px]  after:absolute after:w-2 after:h-2 after:left-0'></span>
            </div>

          </div>

        </div>
        <div className='text-base font-semibold mt-4'>{offerModalData?.title}</div>
        <div className='text-xs font-light mt-2'>{offerModalData?.description}</div>
        <div className='text-xs my-2'>
          {typeof offerModalData?.tnc === 'string'
            ? offerModalData.tnc
            : offerModalData?.tnc?.title}
        </div>

        <div>
          {Array.isArray(offerModalData?.tnc?.bulletTexts) &&
            offerModalData.tnc.bulletTexts.map((text, index) => (
              <div key={index} className='flex items-center'>
                <span className='font-black text-xl'>&#183;</span>
                <span className='ml-2 text-xs text-sortByBtnColor'>{text}</span>
              </div>
            ))
          }
        </div>
        <div>
          {<button
            className={`border py-2 px-5 mt-2 font-bold  border-headerHoverColor hover:shadow-[0_2px_8px_#d4d5d9]  text-sm ${(copied === offerModalData?.couponCode) ? "px-9 border-neutral-400 text-stone-600" : "  text-headerHoverColor"}`}
            onClick={() => {
              setCopied(offerModalData?.couponCode)
              navigator.clipboard.writeText(offerModalData?.couponCode);
              console.log(copied)
            }}
          >
              {(copied === offerModalData?.couponCode) ? "COPIED" : "COPY CODE"}
          </button>}

        </div>
      </div>
      <div className={` ${(offerModalState === true) ? "z-40 fixed h-full w-full bg-slate-800 opacity-40  top-0 left-0 right-0 bottom-0" : ""}`} onClick={() => {
        setOfferModalData(null)
        setOfferModalState(false)
      }} />
    </>

  )
}

export default OfferModalCard