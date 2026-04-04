import React, { useContext } from "react";
import AllRestaurantsContext from "../../../../utils/AllRestroContext";
import SortFilterContext from "../../../../utils/SortFilterContext";
import LocationContext from "../../../../utils/LocationContext";
import { updateRestroByfiltering, restroSorting } from "../../../../utils/helper";
import FilterBarBttn from "./FilterBarBttn";
import { useSearchParams } from "react-router-dom";

const SORT_OPTIONS = [
    { label: 'Relevance', key: 'relevance' },
    { label: 'Rating', key: 'modelBasedRatingDesc' },
    { label: 'Delivery Time', key: 'deliveryTimeAsc' },
    { label: 'Cost: Low to High', key: 'costForTwoAsc' },
    { label: 'Cost: High to Low', key: 'costForTwoDesc' },
]

const RATING_OPTIONS = [4.0, 4.5]
const DELIVERY_OPTIONS = [
    { label: 'Under 30 mins', value: 30 },
    { label: 'Under 45 mins', value: 45 },
]

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current flex-shrink-0">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
)

const SectionDivider = () => <hr className="mt-5 border-[#e9e9eb]" />

const FilterBar = (props) => {
    const [restaurantContext] = useContext(AllRestaurantsContext);
    const [selectedSort, setSelectedSort] = useContext(SortFilterContext);
    const [location] = useContext(LocationContext);
    const filterData = restaurantContext?.filters;
    const [url, setUrl] = useSearchParams();
    const [filterArr, setFilterArr] = props.filterArr;
    const [localFilters, setLocalFilters] = props.localFilters;

    const activeCount =
        (filterArr[0]?.CUISINES?.length || 0) +
        (filterArr[1]?.SHOW_RESTAURANTS_WITH?.length || 0) +
        (localFilters?.minRating ? 1 : 0) +
        (localFilters?.maxDelivery ? 1 : 0) +
        (localFilters?.vegOnly ? 1 : 0) +
        (selectedSort.sort && selectedSort.sort !== 'relevance' && selectedSort.sort !== 'RELEVANCE' ? 1 : 0)

    const handleSort = (key) => {
        setUrl({ sortBy: key })
        props.setFilteredRestaurants([])
        restroSorting(key, props.setFilteredRestaurants, location, selectedSort.filter)
        setSelectedSort({ ...selectedSort, sort: key })
    }

    const clearAll = () => {
        setFilterArr([{ CUISINES: [] }, { SHOW_RESTAURANTS_WITH: [] }])
        setLocalFilters({ minRating: null, maxDelivery: null, vegOnly: false })
        setUrl({ sortBy: 'relevance' })
        props.setFilteredRestaurants([])
        restroSorting('relevance', props.setFilteredRestaurants, location, undefined)
        setSelectedSort({ sort: 'relevance', filter: undefined })
    }

    return (
        <>
            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
                    ${props.filterBarState ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 h-16 border-b border-[#e9e9eb] flex-shrink-0">
                    <div className="flex items-center gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-headerHoverColor">
                            <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04a1 1 0 0 0-.79 1.61z" />
                        </svg>
                        <span className="text-lg font-bold text-ttlRestroHeading">Filters</span>
                        {activeCount > 0 && (
                            <span className="bg-headerHoverColor text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                {activeCount}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => props.setFilterBar(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-lightShimmer text-sortByBtnHoverColor transition-colors"
                        aria-label="Close filters"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-6 py-4">

                    {/* Sort By */}
                    <div className="mb-6">
                        <p className="text-xs font-bold text-locationError uppercase tracking-widest mb-3">Sort By</p>
                        <div className="flex flex-col gap-y-1">
                            {SORT_OPTIONS.map(({ label, key }) => {
                                const active = selectedSort.sort === key ||
                                    (key === 'relevance' && (!selectedSort.sort || selectedSort.sort === 'RELEVANCE'))
                                return (
                                    <button
                                        key={key}
                                        onClick={() => handleSort(key)}
                                        className="flex items-center justify-between py-2 w-full text-left"
                                    >
                                        <span className={`text-sm ${active ? 'font-semibold text-ttlRestroHeading' : 'text-sortByBtnColor'}`}>
                                            {label}
                                        </span>
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${active ? 'border-headerHoverColor' : 'border-[#d4d5d9]'}`}>
                                            {active && <div className="w-2.5 h-2.5 rounded-full bg-headerHoverColor" />}
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                        <SectionDivider />
                    </div>

                    {/* Rating */}
                    <div className="mb-6">
                        <p className="text-xs font-bold text-locationError uppercase tracking-widest mb-3">Rating</p>
                        <div className="flex flex-wrap gap-2">
                            {RATING_OPTIONS.map(rating => {
                                const active = localFilters?.minRating === rating
                                return (
                                    <button
                                        key={rating}
                                        onClick={() => setLocalFilters(f => ({ ...f, minRating: active ? null : rating }))}
                                        className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 flex items-center gap-x-1.5
                                            ${active
                                                ? 'bg-sortByBtnHoverColor text-white border-sortByBtnHoverColor shadow-sm'
                                                : 'bg-white text-sortByBtnColor border-[#d4d5d9] hover:border-sortByBtnHoverColor hover:text-sortByBtnHoverColor'
                                            }`}
                                    >
                                        {active && <CheckIcon />}
                                        ⭐ {rating}+
                                    </button>
                                )
                            })}
                        </div>
                        <SectionDivider />
                    </div>

                    {/* Delivery Time */}
                    <div className="mb-6">
                        <p className="text-xs font-bold text-locationError uppercase tracking-widest mb-3">Delivery Time</p>
                        <div className="flex flex-wrap gap-2">
                            {DELIVERY_OPTIONS.map(({ label, value }) => {
                                const active = localFilters?.maxDelivery === value
                                return (
                                    <button
                                        key={value}
                                        onClick={() => setLocalFilters(f => ({ ...f, maxDelivery: active ? null : value }))}
                                        className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 flex items-center gap-x-1.5
                                            ${active
                                                ? 'bg-sortByBtnHoverColor text-white border-sortByBtnHoverColor shadow-sm'
                                                : 'bg-white text-sortByBtnColor border-[#d4d5d9] hover:border-sortByBtnHoverColor hover:text-sortByBtnHoverColor'
                                            }`}
                                    >
                                        {active && <CheckIcon />}
                                        {label}
                                    </button>
                                )
                            })}
                        </div>
                        <SectionDivider />
                    </div>

                    {/* Pure Veg */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-locationError uppercase tracking-widest">Pure Veg</p>
                                <p className="text-xs text-sortByBtnColor mt-0.5">Show only vegetarian restaurants</p>
                            </div>
                            <button
                                onClick={() => setLocalFilters(f => ({ ...f, vegOnly: !f.vegOnly }))}
                                className={`relative w-12 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${localFilters?.vegOnly ? 'bg-green-500' : 'bg-[#d4d5d9]'}`}
                            >
                                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${localFilters?.vegOnly ? 'translate-x-6' : 'translate-x-0.5'}`} />
                            </button>
                        </div>
                        <SectionDivider />
                    </div>

                    {/* API Filters (Cuisines, Show Restaurants With) */}
                    {filterData?.map((filterName, index) => (
                        <div key={index} className="mb-6">
                            <p className="text-xs font-bold text-locationError uppercase tracking-widest mb-3">
                                {filterName.title}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {filterName?.options.map((filter, i) => (
                                    <FilterBarBttn
                                        key={i}
                                        index={i}
                                        filterName={filterName}
                                        filterArr={filterArr}
                                        setFilterArr={setFilterArr}
                                        filter={filter}
                                    />
                                ))}
                            </div>
                            {index < filterData.length - 1 && <SectionDivider />}
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-[#e9e9eb] flex items-center gap-x-3 flex-shrink-0 bg-white">
                    <button
                        className="flex-1 h-12 border border-[#d4d5d9] rounded-lg text-sm font-bold text-sortByBtnHoverColor hover:border-sortByBtnHoverColor transition-colors"
                        onClick={clearAll}
                    >
                        Clear all
                    </button>
                    <button
                        className="flex-1 h-12 bg-headerHoverColor hover:bg-[#e5711a] text-white rounded-lg text-sm font-bold shadow-sm transition-colors"
                        onClick={() => {
                            updateRestroByfiltering(filterArr, props.setFilteredRestaurants, setUrl, url, location, selectedSort, setSelectedSort)
                            props.setFilterBar(false)
                        }}
                    >
                        Show restaurants
                    </button>
                </div>
            </div>

            {/* Backdrop */}
            {props.filterBarState && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-[1px]"
                    onClick={() => props.setFilterBar(false)}
                />
            )}
        </>
    )
}

export default FilterBar
