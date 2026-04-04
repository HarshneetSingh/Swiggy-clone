import React, { useEffect, useState } from 'react'
import OfferPageShimmer from './bodyInnerComps/RestaurantOffersUI/OfferPageShimmer'
import Loader from '../../utils/Loader'
import supportMock from '../../mocks/support.json'
import supportIssueMock from '../../mocks/supportIssue.json'

const Accordian = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const { title, description, hyperLinkText, hyperLink, options } = props.element
    const descriptionarr = description?.split('\n')
    return (
        <>
            <button className="group w-full text-left" onClick={() => setIsVisible(prev => !prev)}>
                <div className='flex justify-between py-5 gap-x-4'>
                    <p className="text-[15px] sm:text-[17px] text-sortByBtnHoverColor group-hover:text-headerHoverColor group-hover:duration-100">{title}</p>
                    <div className='text-lg text-locationError flex-shrink-0'>
                        {isVisible
                            ? <i className="fa-sharp fa-solid fa-angle-up" />
                            : <i className="fa-sharp fa-solid fa-angle-down" />
                        }
                    </div>
                </div>
                {isVisible && (
                    <>
                        {descriptionarr?.map((desc, index) => (
                            <p key={index} className='text-sm text-sortByBtnColor text-left flex flex-col'>{desc}</p>
                        ))}
                        <div className='text-left h-auto'>
                            <div className='mb-7 mt-2'>
                                <a href={`${hyperLink}`} className='text-headerHoverColor hover:text-ttlRestroHeading text-sm font-bold' target='_blank'>{hyperLinkText}</a>
                            </div>
                            {options.length > 0 && (
                                <div className='mb-7'>
                                    <a
                                        className='text-headerHoverColor py-3 px-4 border-headerHoverColor border font-bold text-sm'
                                        href={`mailto:${options[0]?.emailId}?subject=${title}`}
                                        target="_blank"
                                    >
                                        SEND AN EMAIL
                                    </a>
                                    <p className='text-[10px] text-locationError mt-4'>{options[0]?.waitTime}</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </button>
            <hr />
        </>
    )
}

const Help = () => {
    const [issues, setIssues] = useState(null)
    const [description, setDescription] = useState(null)
    const [heading, setHeading] = useState('Partner Onboarding')
    const [btnClicked, setBtnClicked] = useState('partner-onboarding')
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        setIssues(supportMock.issueTypes.data)
    }, [])

    useEffect(() => {
        setDescription(null)
        setDescription(supportIssueMock.issues.data)
    }, [btnClicked])

    return (
        <div className='bg-[#37718e] min-h-screen'>
            <div className="w-full max-w-6xl mx-auto px-4">

                {/* Header */}
                <div className='text-white h-24 sm:h-32 relative'>
                    <div className='absolute bottom-0 left-0 sm:left-11'>
                        <p className='text-2xl sm:text-3xl font-bold'>Help & Support</p>
                        <p className='text-sm sm:text-base'>Let's take a step ahead and help you better.</p>
                    </div>
                </div>

                {/* Main card */}
                <div className='bg-white min-h-[600px] p-4 sm:p-12 mt-6 sm:mt-9 mb-8'>

                    {/* Mobile: category dropdown toggle */}
                    <div className='sm:hidden mb-4'>
                        <button
                            onClick={() => setSidebarOpen(p => !p)}
                            className='w-full flex justify-between items-center px-4 py-3 bg-[#edf1f7] font-semibold text-sortByBtnHoverColor rounded'
                        >
                            <span>{heading}</span>
                            <i className={`fa-sharp fa-solid fa-angle-${sidebarOpen ? 'up' : 'down'} text-locationError`} />
                        </button>
                        {sidebarOpen && issues && (
                            <div className='flex flex-col border border-t-0 rounded-b overflow-hidden'>
                                {issues.map((issue) => (
                                    <button
                                        key={issue.type}
                                        className={`text-left px-6 py-4 text-sm font-semibold border-b last:border-b-0 ${btnClicked === issue.type ? 'bg-white text-black' : 'bg-[#edf1f7] text-[#535665]'}`}
                                        onClick={() => {
                                            setBtnClicked(issue.type)
                                            setHeading(issue.title)
                                            setSidebarOpen(false)
                                        }}
                                    >
                                        {issue.title}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Desktop: sidebar + content */}
                    <div className='h-full w-full flex gap-4'>

                        {/* Sidebar — hidden on mobile */}
                        <div className='hidden sm:flex bg-[#edf1f7] flex-col min-h-[500px] w-[22%] pt-5'>
                            {issues === null
                                ? <OfferPageShimmer />
                                : issues.map((issue) => (
                                    <button
                                        key={issue.type}
                                        className={`text-left pl-8 lg:pl-14 py-6 hover:text-black text-sm lg:text-base font-semibold ${btnClicked === issue.type ? 'bg-white text-black' : 'text-[#535665]'}`}
                                        onClick={() => {
                                            setBtnClicked(issue.type)
                                            setHeading(issue.title)
                                        }}
                                    >
                                        {issue.title}
                                    </button>
                                ))
                            }
                        </div>

                        {/* Content */}
                        <div className='bg-white sm:pl-10 lg:pl-14 pt-2 sm:pt-8 h-full w-full sm:w-[78%]'>
                            {description === null
                                ? <div className='mt-20'><Loader /></div>
                                : (
                                    <div>
                                        {issues && (
                                            <p className='text-xl sm:text-2xl font-bold text-ttlRestroHeading mb-1'>{heading}</p>
                                        )}
                                        <div className='flex flex-col'>
                                            {description.map((element, index) => (
                                                <Accordian key={index} element={element} />
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help;
