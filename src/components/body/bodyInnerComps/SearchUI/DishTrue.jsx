import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DishTrue = (props) => {
    const [keyModal, setKeyModal] = useState(false)
    let cards = props.data
    cards = (cards?.length === 2) ? cards[1] : cards?.[0]

    const allDishCards = cards?.groupedCard?.cardGroupMap?.DISH?.cards || []
    const groupedCard = allDishCards[0]?.card?.card   // sort/filter widget
    const dishCards   = allDishCards.slice(1).filter(c => c?.card?.card?.info)

    const { selectedBtnArr, setSelectedBtnArr, setExtraCallPreventer } = props

    let sortName = groupedCard?.sortConfigs?.filter(s => s.hasOwnProperty('selected')) || []
    if (sortName.length > 0 && sortName[0].key === 'NONE') sortName = []

    if (!dishCards.length) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center px-4">
                <p className="text-xl font-bold text-ttlRestroHeading mb-2">No dishes found</p>
                <p className="text-sm text-locationError">Try searching with a different keyword</p>
            </div>
        )
    }

    return (
        <>
            {/* Sort + filter bar */}
            <div className="flex items-center gap-x-2 py-3 px-1 overflow-x-auto no-scrollbar border-b border-dashed border-lightShimmer">
                {/* Sort button */}
                <div className="relative flex-shrink-0">
                    <button
                        onClick={() => setKeyModal(p => !p)}
                        className={`flex items-center gap-x-1 px-3 py-1.5 text-xs font-medium border rounded-full transition-colors
                            ${sortName.length > 0
                                ? 'border-[#ec997e] bg-[#fdf2ee] text-[#676a77] font-semibold'
                                : 'bg-[#fafafa] border-[#d4d5d9] text-sortByBtnColor'}`}
                    >
                        Sort by {sortName.length > 0 ? `: ${sortName[0]?.title}` : ''}
                        <i className="fa-solid fa-chevron-down text-[8px]" />
                    </button>

                    {keyModal && (
                        <div className="absolute top-9 left-0 z-30 flex flex-col gap-y-2 p-3 border rounded-xl bg-white shadow-lg min-w-[160px]">
                            {groupedCard?.sortConfigs?.map(sort => (
                                <button
                                    key={sort.key}
                                    onClick={() => {
                                        setSelectedBtnArr({ arrFace: selectedBtnArr.arrFace, sortKey: sort.key })
                                        setExtraCallPreventer(1)
                                        setKeyModal(false)
                                    }}
                                    className="flex items-center gap-x-2 text-left"
                                >
                                    <div className={`w-4 h-4 border rounded-full relative flex-shrink-0
                                        ${sort.selected ? 'border-darkOrange' : 'border-sortByBtnColor'}`}>
                                        <div className={`absolute h-2 w-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                            ${sort.selected ? 'bg-darkOrange' : 'bg-white'}`} />
                                    </div>
                                    <p className="text-sm text-sortByBtnColor">{sort.title}</p>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-px h-4 bg-[#d4d5d9] flex-shrink-0" />

                {/* Facet filters */}
                {groupedCard?.facetList?.map((facet, index) => {
                    const faceInfo = facet?.facetInfo[0]
                    return (
                        <button
                            key={index}
                            className={`flex-shrink-0 px-3 py-1.5 text-xs border rounded-full transition-colors
                                ${faceInfo?.selected
                                    ? 'border-[#ec997e] bg-[#fdf2ee] text-[#676a77] font-semibold'
                                    : 'bg-[#fafafa] border-[#d4d5d9] text-sortByBtnColor font-medium'}`}
                            onClick={() => {
                                if (!faceInfo?.selected) {
                                    setSelectedBtnArr({
                                        arrFace: [...selectedBtnArr.arrFace, {
                                            id: facet.id,
                                            infoId: faceInfo.id,
                                            infoOperater: faceInfo.operator,
                                            faceLabel: faceInfo.label
                                        }],
                                        sortKey: selectedBtnArr.sortKey
                                    })
                                    setExtraCallPreventer(1)
                                } else {
                                    setSelectedBtnArr({
                                        arrFace: selectedBtnArr.arrFace.filter(f => f.id !== facet.id),
                                        sortKey: selectedBtnArr.sortKey
                                    })
                                }
                            }}
                        >
                            {faceInfo?.label}
                            {faceInfo?.selected && <i className="fa-regular fa-x text-[8px] ml-1" />}
                        </button>
                    )
                })}
            </div>

            {/* Dish list */}
            <div className="bg-lightShimmer">
                {dishCards.map((c, idx) => {
                    const dish   = c?.card?.card?.info
                    const restro = c?.card?.card?.restaurant?.info
                    if (!dish) return null

                    const price       = dish.price ? (dish.price / 100).toFixed(0) : null
                    const rating      = dish.ratings?.aggregatedRating?.rating
                    const ratingCount = dish.ratings?.aggregatedRating?.ratingCount
                    const ribbon      = dish.ribbon?.text
                    const restroPath  = `/restaurant/${restro?.name}-${restro?.id}`

                    return (
                        <div key={dish.id ?? idx} className="bg-white border-b border-[#f1f1f6]">
                            <div className="flex items-start gap-x-4 px-4 py-4">

                                {/* Dish image */}
                                <div className="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-lightShimmer">
                                    {dish.imageId
                                        ? <img
                                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${dish.imageId}`}
                                            className="w-full h-full object-cover"
                                            alt={dish.name}
                                          />
                                        : <div className="w-full h-full flex items-center justify-center text-locationError text-3xl">🍽</div>
                                    }
                                    {ribbon && (
                                        <div
                                            className="absolute bottom-0 left-0 right-0 text-center text-[9px] font-bold py-0.5 text-white"
                                            style={{ background: dish.ribbon?.topBackgroundColor || '#d53d4c' }}
                                        >
                                            {ribbon}
                                        </div>
                                    )}
                                </div>

                                {/* Dish info */}
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-sm text-ttlRestroHeading leading-snug truncate">{dish.name}</p>
                                    <p className="text-xs text-locationError mt-0.5">{dish.category}</p>

                                    <div className="flex items-center gap-x-3 mt-1.5">
                                        {price && (
                                            <p className="text-sm font-semibold text-ttlRestroHeading">₹{price}</p>
                                        )}
                                        {rating && (
                                            <span className="flex items-center gap-x-1 text-xs text-green-700 font-semibold">
                                                <i className="fa-solid fa-star text-[9px]" />
                                                {rating}
                                                {ratingCount && <span className="text-locationError font-normal">({ratingCount})</span>}
                                            </span>
                                        )}
                                    </div>

                                    {/* Restaurant row */}
                                    {restro && (
                                        <Link
                                            to={restroPath}
                                            state={{ restaurantInfo: restro }}
                                            className="mt-3 flex items-center gap-x-2 group"
                                        >
                                            {restro.cloudinaryImageId && (
                                                <img
                                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_60,h_60,c_fill/${restro.cloudinaryImageId}`}
                                                    className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                                                    alt={restro.name}
                                                />
                                            )}
                                            <div className="min-w-0">
                                                <p className="text-xs font-semibold text-sortByBtnHoverColor group-hover:text-headerHoverColor transition-colors truncate">
                                                    {restro.name}
                                                </p>
                                                <p className="text-[10px] text-locationError">
                                                    {restro.sla?.deliveryTime} mins · {restro.locality || restro.areaName}
                                                </p>
                                            </div>
                                            <span className="ml-auto flex-shrink-0 text-[10px] font-semibold text-headerHoverColor border border-headerHoverColor rounded px-1.5 py-0.5 group-hover:bg-headerHoverColor group-hover:text-white transition-colors">
                                                ORDER
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DishTrue
