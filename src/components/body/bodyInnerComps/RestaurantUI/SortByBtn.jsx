import React, { useContext, useState } from 'react'
import { NavLink, useOutletContext, useSearchParams } from 'react-router-dom'
import { searchLogo, restroSorting } from '../../../../utils/helper'
import SortFilterContext from '../../../../utils/SortFilterContext'
import LocationContext from '../../../../utils/LocationContext'

const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04a1 1 0 0 0-.79 1.61z" />
    </svg>
)

const SortByBtn = (props) => {
    const { filteredRestaurants, allRestaurants, setFilteredRestaurants } = props
    const [location] = useContext(LocationContext)
    const [selectedSort, setSelectedSort] = useContext(SortFilterContext)
    const sortbtn = allRestaurants?.cards?.[3]?.card?.card?.sortConfigs
    const [setFilterBar] = useOutletContext()
    const [url, setUrl] = useSearchParams()
    const [showMobileSort, setShowMobileSort] = useState(false)

    let totalOpenRestaurants
    if ('totalSize' in (filteredRestaurants || {})) {
        totalOpenRestaurants = filteredRestaurants?.totalSize
    } else {
        totalOpenRestaurants = allRestaurants?.cards?.[3]?.card?.card?.restaurantCount
    }

    const handleSort = (key) => {
        setUrl({ sortBy: key })
        setFilteredRestaurants([])
        restroSorting(key, setFilteredRestaurants, location, selectedSort.filter)
        setSelectedSort({ ...selectedSort, sort: key })
        setShowMobileSort(false)
    }

    return (
        <>
            <div className="w-full max-w-6xl mx-auto px-4 mt-8 mb-1">
                {/* top row: count + search */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl lg:text-[27px] font-extrabold text-ttlRestroHeading tracking-tight">
                        {!totalOpenRestaurants
                            ? 'Finding restaurants…'
                            : <>{totalOpenRestaurants} <span className="font-normal text-locationError">restaurants</span></>
                        }
                    </h2>

                    <NavLink
                        to="/Search"
                        className="flex items-center gap-x-2 px-4 py-2 rounded-full border border-[#d4d5d9] text-sortByBtnHoverColor fill-sortByBtnHoverColor hover:border-headerHoverColor hover:text-headerHoverColor hover:fill-headerHoverColor transition-all duration-200 text-sm font-semibold"
                    >
                        {searchLogo}
                        <span className="hidden sm:inline">Search</span>
                    </NavLink>
                </div>

                {/* sort pills — desktop */}
                <div className="hidden sm:flex items-center gap-x-2 flex-wrap gap-y-2">
                    {sortbtn?.map(({ title, key }) => {
                        const active = selectedSort.sort === key
                        return (
                            <button
                                key={key}
                                onClick={() => handleSort(key)}
                                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 whitespace-nowrap
                                    ${active
                                        ? 'bg-sortByBtnHoverColor text-white border-sortByBtnHoverColor shadow-sm'
                                        : 'bg-white text-sortByBtnColor border-[#d4d5d9] hover:border-sortByBtnHoverColor hover:text-sortByBtnHoverColor'
                                    }`}
                            >
                                {active && <span className="mr-1.5">✓</span>}
                                {title}
                            </button>
                        )
                    })}

                    <button
                        onClick={() => setFilterBar(true)}
                        className="ml-auto flex items-center gap-x-2 px-4 py-2 rounded-full border border-headerHoverColor text-headerHoverColor fill-headerHoverColor text-sm font-semibold hover:bg-headerHoverColor hover:text-white hover:fill-white transition-all duration-200"
                    >
                        <FilterIcon />
                        Filters
                    </button>
                </div>

                {/* sort row — mobile: scrollable chips + filter button */}
                <div className="flex sm:hidden items-center gap-x-2">
                    <div className="flex-1 overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-x-2 pb-1">
                            {sortbtn?.map(({ title, key }) => {
                                const active = selectedSort.sort === key
                                return (
                                    <button
                                        key={key}
                                        onClick={() => handleSort(key)}
                                        className={`flex-shrink-0 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200
                                            ${active
                                                ? 'bg-sortByBtnHoverColor text-white border-sortByBtnHoverColor'
                                                : 'bg-white text-sortByBtnColor border-[#d4d5d9]'
                                            }`}
                                    >
                                        {active && '✓ '}{title}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <button
                        onClick={() => setFilterBar(true)}
                        className="flex-shrink-0 flex items-center gap-x-1.5 px-3 py-1.5 rounded-full border border-headerHoverColor text-headerHoverColor fill-headerHoverColor text-xs font-semibold"
                    >
                        <FilterIcon />
                        Filters
                    </button>
                </div>
            </div>

            <hr className="w-full max-w-6xl mx-auto mt-4 border-[#e9e9eb]" />
        </>
    )
}

export default SortByBtn
