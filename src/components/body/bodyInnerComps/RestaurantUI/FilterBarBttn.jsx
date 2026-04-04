import React, { useState } from 'react'

const FilterBarBttn = (props) => {
    const [selected, setSelected] = useState(false)
    const { filterName, filterArr, setFilterArr, filter } = props

    const toggle = () => {
        const isNowSelected = !selected
        setSelected(isNowSelected)

        if (filterName.key === 'CUISINES') {
            setFilterArr([
                {
                    CUISINES: isNowSelected
                        ? [...filterArr[0].CUISINES, filter?.option]
                        : filterArr[0].CUISINES.filter(c => c !== filter?.option),
                },
                { SHOW_RESTAURANTS_WITH: filterArr[1].SHOW_RESTAURANTS_WITH },
            ])
        } else {
            setFilterArr([
                { CUISINES: filterArr[0].CUISINES },
                {
                    SHOW_RESTAURANTS_WITH: isNowSelected
                        ? [...filterArr[1].SHOW_RESTAURANTS_WITH, filter?.option]
                        : filterArr[1].SHOW_RESTAURANTS_WITH.filter(c => c !== filter?.option),
                },
            ])
        }
    }

    return (
        <button
            onClick={toggle}
            className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 flex items-center gap-x-1.5
                ${selected
                    ? 'bg-sortByBtnHoverColor text-white border-sortByBtnHoverColor shadow-sm'
                    : 'bg-white text-sortByBtnColor border-[#d4d5d9] hover:border-sortByBtnHoverColor hover:text-sortByBtnHoverColor'
                }`}
        >
            {selected && (
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current flex-shrink-0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
            )}
            {filter?.option}
        </button>
    )
}

export default FilterBarBttn
