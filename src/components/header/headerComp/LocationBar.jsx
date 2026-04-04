import React, { useContext, useEffect, useState } from 'react'
import LocationContext from '../../../utils/LocationContext'
import Loader from '../../../utils/Loader'

const NOMINATIM = 'https://nominatim.openstreetmap.org'

async function getAreas(input, setAreas) {
    try {
        const result = await fetch(
            `${NOMINATIM}/search?q=${encodeURIComponent(input)}&format=json&countrycodes=in&limit=6&addressdetails=1`,
            { headers: { 'Accept-Language': 'en' } }
        )
        const data = await result.json()
        setAreas(data.map(place => ({
            description: place.display_name,
            place_id: place.place_id,
            _lat: place.lat,
            _lng: place.lon
        })))
    } catch {
        setAreas([])
    }
}

function applyLocation(place, setLocation) {
    const [name1, ...other] = place.description.split(',')
    setLocation({
        name: [name1.trim(), other.join(',').trim()],
        lat: parseFloat(place._lat),
        lng: parseFloat(place._lng)
    })
}

function currentLocation(setLocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
        try {
            const { latitude, longitude } = position.coords
            const result = await fetch(
                `${NOMINATIM}/reverse?lat=${latitude}&lon=${longitude}&format=json`,
                { headers: { 'Accept-Language': 'en' } }
            )
            const data = await result.json()
            const name = data.display_name.split(',')
            setLocation({ name: [name[0].trim(), data.display_name], lat: latitude, lng: longitude })
        } catch { /* silent */ }
    })
}

const LocationBar = (props) => {
    const [location, setLocation] = useContext(LocationContext)
    const [input, setInput] = useState('')
    const [areas, setAreas] = useState(null)
    const [setFilteredRestaurants, setRestaurants] = props.useRestaurant

    const close = () => {
        props.setLocationBar(false)
        setInput('')
        setAreas(null)
    }

    useEffect(() => {
        if (input.length >= 3) {
            setAreas(null)
            getAreas(input, setAreas)
        } else {
            setAreas(null)
        }
    }, [input])

    return (
        <>
            {/* Panel — full-width on mobile, 400px on sm+ */}
            <div className={`
                fixed top-0 left-0 h-full z-50 bg-white shadow-2xl
                w-full sm:w-[400px]
                flex flex-col
                transition-transform duration-300 ease-in-out
                ${props.locationBarState ? 'translate-x-0' : '-translate-x-full'}
            `}>

                {/* Header */}
                <div className="flex items-center justify-between px-5 pt-6 pb-4 border-b border-[#e9e9eb]">
                    <p className="text-lg font-extrabold text-ttlRestroHeading">Select location</p>
                    <button
                        onClick={close}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-lightShimmer text-sortByBtnHoverColor transition-colors"
                        aria-label="Close"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>

                {/* Search input */}
                <div className="px-5 pt-4 pb-3">
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-locationError">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </span>
                        <input
                            className="w-full h-12 pl-9 pr-16 border border-[#d4d5d9] rounded-lg text-sm text-ttlRestroHeading placeholder-locationError focus:outline-none focus:border-headerHoverColor focus:ring-1 focus:ring-headerHoverColor transition-all duration-200"
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Search for area, street name…"
                            autoFocus
                        />
                        {input.length >= 1 && (
                            <button
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-headerHoverColor hover:underline"
                                onClick={() => setInput('')}
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto">

                    {/* Current location button — shown when not searching */}
                    {input.length < 3 && (
                        <button
                            className="w-full flex items-center gap-x-3 px-5 py-4 border-b border-[#e9e9eb] hover:bg-lightShimmer transition-colors group"
                            onClick={() => {
                                setFilteredRestaurants([])
                                setRestaurants([])
                                currentLocation(setLocation)
                                close()
                            }}
                        >
                            <div className="w-10 h-10 rounded-full bg-[#fff3e8] flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-headerHoverColor" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="3" />
                                    <circle cx="12" cy="12" r="8" />
                                    <line x1="12" y1="2" x2="12" y2="4" />
                                    <line x1="12" y1="20" x2="12" y2="22" />
                                    <line x1="20" y1="12" x2="22" y2="12" />
                                    <line x1="2" y1="12" x2="4" y2="12" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-semibold text-ttlRestroHeading group-hover:text-headerHoverColor transition-colors">
                                    Use current location
                                </p>
                                <p className="text-xs text-locationError">Using GPS</p>
                            </div>
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-locationError ml-auto flex-shrink-0">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                            </svg>
                        </button>
                    )}

                    {/* Current saved location chip */}
                    {input.length < 3 && location?.name?.[1] && (
                        <div className="px-5 pt-4 pb-2">
                            <p className="text-[11px] font-bold text-locationError uppercase tracking-widest mb-2">Current location</p>
                            <div className="flex items-start gap-x-3 p-3 rounded-lg border border-[#e9e9eb] bg-lightShimmer">
                                <i className="fa-solid fa-location-dot text-headerHoverColor mt-0.5 flex-shrink-0" />
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-ttlRestroHeading truncate">{location.name[0]}</p>
                                    <p className="text-xs text-locationError leading-4 mt-0.5 line-clamp-2">{location.name[1]}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Search results */}
                    {input.length >= 3 && (
                        <>
                            {areas === null
                                ? <Loader />
                                : areas.length === 0
                                    ? (
                                        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
                                            <img
                                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_404,h_400/empty_location_unserviceable_3x_dt3civ"
                                                width="160" height="160" alt="No results"
                                                className="mb-4 opacity-70"
                                            />
                                            <p className="font-bold text-lg text-ttlRestroHeading mb-1">No results found</p>
                                            <p className="text-sm text-locationError">Try a different area or street name</p>
                                        </div>
                                    )
                                    : (
                                        <div className="px-5 pt-2">
                                            <p className="text-[11px] font-bold text-locationError uppercase tracking-widest mb-2">Results</p>
                                            {areas.map(place => {
                                                const [name, ...rest] = place.description.split(',')
                                                return (
                                                    <button
                                                        key={place.place_id}
                                                        className="w-full flex items-start gap-x-3 py-3 border-b border-[#f1f1f6] hover:bg-lightShimmer rounded-lg px-2 -mx-2 transition-colors group text-left"
                                                        onClick={() => {
                                                            setFilteredRestaurants([])
                                                            setRestaurants([])
                                                            applyLocation(place, setLocation)
                                                            close()
                                                        }}
                                                    >
                                                        <div className="w-8 h-8 rounded-full bg-lightShimmer flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-locationError group-hover:fill-headerHoverColor transition-colors">
                                                                <path d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z" />
                                                                <path d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z" />
                                                            </svg>
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="text-sm font-semibold text-ttlRestroHeading group-hover:text-headerHoverColor transition-colors leading-5 truncate">
                                                                {name.trim()}
                                                            </p>
                                                            <p className="text-xs text-locationError leading-4 mt-0.5 line-clamp-2">
                                                                {rest.join(',').trim()}
                                                            </p>
                                                        </div>
                                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-locationError flex-shrink-0 mt-1">
                                                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                                        </svg>
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    )
                            }
                        </>
                    )}
                </div>
            </div>

            {/* Backdrop */}
            {props.locationBarState && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-[1px]"
                    onClick={close}
                />
            )}
        </>
    )
}

export default LocationBar
