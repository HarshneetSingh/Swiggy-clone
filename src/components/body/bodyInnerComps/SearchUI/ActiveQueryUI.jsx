import React, { useState, useEffect } from 'react'
import RestaurantTrue from './RestaurantTrue'
import DishTrue from './DishTrue'
import { facet } from '../../../../utils/helper'
import SearchActiveQueryShimmer from './SearchActiveQueryShimmer.jsx'
import { getClientSearchMock } from '../../../../utils/clientSearchMock'
import { PROXY } from '../../../../config'

async function getSelectedData(otherData, id, setSelectedData, setLoadOnChange, selectedBtnArr) {
    const [metaData, RestroName, location] = otherData
    setLoadOnChange(true)
    try {
        const facets = selectedBtnArr.arrFace.length === 0 ? '' : '&facets=' + facet(selectedBtnArr.arrFace)
        const sortKey = selectedBtnArr.sortKey === '' ? '' : '&sortKey=' + selectedBtnArr.sortKey
        const result = await fetch(`${PROXY}/api/search?lat=${location.lat}&lng=${location.lng}&str=${RestroName}&metaData=${metaData}${facets}${sortKey}&selectedPLTab=${id}`)
        const text = await result.text()
        const data = JSON.parse(text)
        if (data?.data) {
            setSelectedData(data.data)
        } else {
            throw new Error('No data')
        }
    } catch (err) {
        console.warn('Search proxy failed, using mock:', err.message)
        setSelectedData(getClientSearchMock(RestroName))
    }
    setLoadOnChange(false)
}

function btnclick(condition, a, b, c, d, ep, ep1, ep2, ep3, ep4, f) {
    if (condition) {
        a(true)
        b(false)
    } else {
        c(true)
        d(false)
        getSelectedData(ep, ep1, ep2, ep3, ep4)
        f(true)
    }
}

const ActiveQueryUI = (props) => {
    const activeQueryData = props.prop
    const [queryData, otherData] = [activeQueryData?.[0], activeQueryData?.filter((data, index) => index != 0)]
    const [restaurantData, setRestaurantData] = useState(queryData)
    const [dishData, setDishData] = useState(queryData)
    const btns = queryData?.cards?.[0]?.card?.card?.tab
    const [defaultRestroStatus, setDefaultRestroStatus] = useState(btns?.[0] ? 'selected' in btns[0] : true)
    const [defaultDishStatus, setDefaultDishStatus] = useState(btns?.[1] ? 'selected' in btns[1] : false)
    const [restaurantStatus, setRestaurantStatus] = useState(defaultRestroStatus)
    const [dishStatus, setDishStatus] = useState(defaultDishStatus)
    const [loadOnChange, setLoadOnChange] = useState(false)
    const [selectedBtnArr, setSelectedBtnArr] = useState({ arrFace: [], sortKey: "" })
    const [extraCallPreventer, setExtraCallPreventer] = useState(0)

    useEffect(() => {
        if (extraCallPreventer !== 0) {
            getSelectedData(otherData, "DISH", setDishData, setLoadOnChange, selectedBtnArr)
        }
    }, [selectedBtnArr])

    return (loadOnChange) ? <SearchActiveQueryShimmer /> : (
        <div className=' relative '>
            <div className="text-sm font-bold fixed bg-white  z-20 w-full max-w-2xl px-4 sm:px-0  pb-1  ">
                <button className={`border mr-2 px-3 py-2 rounded-3xl ${(restaurantStatus) ? "bg-selectedBgColor text-white border-selectedBorderColor" : "bg-white text-ttlRestroHeading border-neutral-300"}`}
                    onClick={() => {
                        btnclick(defaultRestroStatus, setRestaurantStatus, setDishStatus, setRestaurantStatus, setDishStatus, otherData, btns?.[0]?.id, setRestaurantData, setLoadOnChange, selectedBtnArr, setDefaultRestroStatus)
                    }}
                >
                    {btns?.[0]?.title}
                </button >
                <button className={`border px-3 py-2 rounded-3xl ${(dishStatus) ? "bg-selectedBgColor text-white border-selectedBorderColor" : "bg-white text-ttlRestroHeading border-neutral-300"}`}
                    onClick={() => {
                        btnclick(defaultDishStatus, setDishStatus, setRestaurantStatus, setDishStatus, setRestaurantStatus, otherData, btns?.[1]?.id, setDishData, setLoadOnChange, selectedBtnArr, setDefaultDishStatus)
                    }}>
                    {btns?.[1]?.title}
                </button>
            </div>
            <div className='  relative top-10 pb-10'>
                {restaurantStatus && <RestaurantTrue data={restaurantData?.cards} />}
                {dishStatus && <DishTrue data={dishData?.cards} otherData={otherData} setLoadOnChange={setLoadOnChange} setExtraCallPreventer={setExtraCallPreventer} loadOnChange={loadOnChange} setDishData={setDishData} selectedBtnArr={selectedBtnArr} setSelectedBtnArr={setSelectedBtnArr} />}
            </div>
        </div>
    )
}

export default ActiveQueryUI
