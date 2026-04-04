import React, { useContext, useState } from 'react'
import OfferModalContext from '../../../../utils/OfferModalContext'

const PaymentCard = (props) => {
    const card = props.offerDetail?.info
    const { setOfferModalData, setOfferModalState, copied, setCopied } = useContext(OfferModalContext)
    const [justCopied, setJustCopied] = useState(false)

    function copyCode() {
        navigator.clipboard.writeText(card?.couponCode || '').catch(() => {})
        setJustCopied(true)
        setCopied(card?.couponCode)
        setTimeout(() => setJustCopied(false), 2000)
    }

    return (
        <div className='border border-slate-300 p-8 w-96'>
            {/* Coupon code badge */}
            <div className='flex'>
                <div className='flex items-center justify-around border border-[#daceb7] bg-[#fffae6]'>
                    <div className='w-5 h-5 mx-2 flex items-center justify-center'>
                        <i className='fa-solid fa-tag text-[#b8860b] text-sm' />
                    </div>
                    <div className='text-sm px-3 font-semibold h-full text-ttlRestroHeading relative'>
                        <div className='m-2'>{card?.couponCode}</div>
                        <span className='before:content-[" "] before:bottom-0 before:absolute before:w-2 before:h-2 before:border-transparent before:border-[5px] before:border-b-[5px] before:left-0 before:border-b-[#daceb7] after:bottom-[-2px] after:content-[" "] after:border-transparent after:border-b-white after:border-[5px] after:border-b-[5px] after:absolute after:w-2 after:h-2 after:left-0'></span>
                        <span className='before:content-[" "] before:top-0 before:absolute before:w-2 before:h-2 before:border-transparent before:border-[5px] before:border-t-[5px] before:left-0 before:border-t-[#daceb7] after:top-[-2px] after:content-[" "] after:border-transparent after:border-t-white after:border-[5px] after:border-t-[5px] after:absolute after:w-2 after:h-2 after:left-0'></span>
                    </div>
                </div>
            </div>

            {/* Title & description */}
            <div className='text-sm font-semibold mt-4'>{card?.offerTitle}</div>
            <div className='text-xs font-light mt-2'>{card?.offerDescription}</div>

            {/* More details button */}
            <button
                className='my-3 text-xs font-extrabold text-[#5d8ed5]'
                onClick={() => {
                    setOfferModalData({
                        couponCode: card?.couponCode,
                        title: card?.offerTitle,
                        description: card?.offerDescription,
                        tnc: card?.tnc,
                        logo: card?.imageId,
                    })
                    setOfferModalState(true)
                }}
            >
                + MORE
            </button>

            {/* Copy code button */}
            <div>
                <button
                    className={`border-2 border-dashed px-4 py-2 text-xs font-extrabold w-full transition ${justCopied ? 'border-green-500 text-green-600' : 'border-headerHoverColor text-headerHoverColor hover:bg-orange-50'}`}
                    onClick={copyCode}
                >
                    {justCopied ? '✓ COPIED!' : 'COPY CODE'}
                </button>
            </div>
        </div>
    )
}

export default PaymentCard
