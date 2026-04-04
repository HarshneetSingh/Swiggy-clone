import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImgApi } from "../../../../config";

const offerLogo = <svg viewBox="0 0 32 32" height="16" width="16" ><path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z"></path></svg>

const Card = ({ id, cloudinaryImageId, name, promoted, cuisines, deliveryTime, costForTwoString, avgRating, aggregatedDiscountInfo, locality, areaName }) => {
    const [showQuickView, setShowQuickView] = useState(false)
    const cuisine = cuisines?.join(", ") || ""
    const menuPath = `/restaurant/${name}-${id}`
    const restaurantInfo = { id, name, cloudinaryImageId, cuisines, avgRating, locality, areaName, promoted, aggregatedDiscountInfoV3: aggregatedDiscountInfo, sla: { deliveryTime }, costForTwo: costForTwoString }

    return (
        <>
            <div className="group p-5 pb-0 w-full border-transparent border hover:border-[#d3d5df] hover:shadow-[0_4px_7px_0_rgba(218,220,230,.6)]">
                <div className="relative">
                    <div className="w-full h-40 animate-[fadeIn_300ms_linear_1] after:content-[' hello'] after:w-full after:h-40 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#282c3f0d] after:bg-blend-overlay">
                        <img
                            className="w-full h-full object-cover"
                            src={`${ImgApi}${cloudinaryImageId}`}
                            alt={name}
                            onError={(e) => { e.target.onerror = null; e.target.style.visibility = 'hidden' }}
                        />
                    </div>
                    {promoted && (
                        <div className="bg-cardHover text-white -left-2 absolute top-0 text-xs font-medium px-2 py-1 after:content-[''] after:absolute after:border-cardHover after:w-0 after:h-0 after:-bottom-2 after:left-0 after:border-t-8 after:border-r-8 after:border-b-transparent after:border-b-8 after:border-l-0">
                            PROMOTED
                        </div>
                    )}
                    <div className="text-base font-semibold text-ttlRestroHeading mt-3">{name}</div>
                    <div className="text-xs font-normal text-sortByBtnColor">{cuisine.length >= 50 ? cuisine.substr(0, 50) + "..." : cuisine}</div>
                    <div className="flex justify-between items-center text-[#535665] text-xs font-normal my-4">
                        <p className="bg-red-400 text-white p-1 h-5 text-[11px]"><i className="fa-solid fa-star mr-1 text-[10px]"></i>{avgRating}</p>
                        <p>•</p>
                        <p>{deliveryTime} MINS</p>
                        <p>•</p>
                        <p>{costForTwoString}</p>
                    </div>
                    <hr />
                    {aggregatedDiscountInfo?.header && (
                        <div className="font-normal text-[13px] flex justify-start my-2 text-[#723729] fill-[#8a584b]">
                            {offerLogo}
                            <p className="m-[1px] ml-[3px]">
                                {aggregatedDiscountInfo.header}
                                {aggregatedDiscountInfo.subHeader ? ` ${aggregatedDiscountInfo.subHeader}` : ''}
                            </p>
                        </div>
                    )}
                </div>
                <div className="m-auto text-center invisible group-hover:visible">
                    <hr />
                    <button
                        className="text-sky-600 text-sm my-3 hover:text-slate-400 font-semibold"
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setShowQuickView(true)
                        }}
                    >
                        QUICKVIEW
                    </button>
                </div>
            </div>

            {/* Quickview modal — rendered outside the Link via state */}
            {showQuickView && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
                    onClick={() => setShowQuickView(false)}
                >
                    <div
                        className="bg-white w-[420px] rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="relative w-full h-52">
                            <img
                                className="w-full h-full object-cover"
                                src={`${ImgApi}${cloudinaryImageId}`}
                                alt={name}
                                onError={(e) => { e.target.onerror = null; e.target.style.visibility = 'hidden' }}
                            />
                            <button
                                className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-sortByBtnHoverColor hover:text-headerHoverColor"
                                onClick={() => setShowQuickView(false)}
                            >
                                <i className="fa-regular fa-x text-xs font-bold" />
                            </button>
                            {promoted && (
                                <div className="bg-cardHover text-white absolute top-3 left-3 text-xs font-medium px-2 py-1">
                                    PROMOTED
                                </div>
                            )}
                        </div>

                        {/* Details */}
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-ttlRestroHeading">{name}</h2>
                            <p className="text-sm text-sortByBtnColor mt-1">{cuisine}</p>
                            {(locality || areaName) && (
                                <p className="text-xs text-locationError mt-1">
                                    <i className="fa-solid fa-location-dot mr-1" />
                                    {[locality, areaName].filter(Boolean).join(', ')}
                                </p>
                            )}

                            <div className="flex items-center gap-x-4 mt-4 text-sm text-[#535665]">
                                <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
                                    ★ {avgRating}
                                </span>
                                <span>{deliveryTime} mins delivery</span>
                                <span>{costForTwoString}</span>
                            </div>

                            {aggregatedDiscountInfo?.header && (
                                <div className="mt-3 flex items-center gap-x-1 text-[#723729] text-sm font-medium fill-[#8a584b]">
                                    {offerLogo}
                                    <span>{aggregatedDiscountInfo.header} {aggregatedDiscountInfo.subHeader}</span>
                                </div>
                            )}

                            <Link
                                to={menuPath}
                                state={{ restaurantInfo }}
                                className="block mt-5 w-full text-center bg-headerHoverColor text-white py-3 font-bold text-sm rounded hover:bg-opacity-90 transition"
                                onClick={() => setShowQuickView(false)}
                            >
                                VIEW FULL MENU →
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card
