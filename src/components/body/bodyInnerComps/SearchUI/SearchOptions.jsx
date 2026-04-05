import { useContext } from "react"
import LocationContext from "../../../../utils/LocationContext"
import { getClientSearchMock } from "../../../../utils/clientSearchMock"
import { PROXY } from "../../../../config"

async function fetchQuery(setActiveQueryData, restro, location, setInput) {
    setInput(restro.text)
    setActiveQueryData(null)
    try {
        const queryParams = new URLSearchParams(restro?.cta?.link)
        const metadata = queryParams.get("metadata") || queryParams.get("metaData") || "mock"
        const result = await fetch(`${PROXY}/api/search?lat=${location.lat}&lng=${location.lng}&str=${restro.text}&metaData=${metadata}`)
        const text = await result.text()
        const data = JSON.parse(text)
        if (data?.data) {
            setActiveQueryData([data.data, metadata, restro.text, location])
        } else {
            throw new Error('No data')
        }
    } catch (err) {
        console.warn('Search proxy failed, using mock:', err.message)
        setActiveQueryData([getClientSearchMock(restro.text), "mock", restro.text, location])
    }
}

const SearchOptions = (props) => {
    const [input, searchRestaurant, setSearchParams, setActiveQuery, setActiveQueryData, setInput, preSearch] = props.prop
    let popularCuisine = preSearch?.filter((card) => card?.card?.card?.hasOwnProperty('header') && card?.card?.card?.header?.hasOwnProperty('title'))
    popularCuisine = popularCuisine[0]?.card?.card
    const [location] = useContext(LocationContext)
    return (
        (input.length < 2) ?
            <div className="w-full overflow-hidden">
                <p className="font-extrabold text-xl text-sortByBtnHoverColor">{popularCuisine?.header?.title}</p>
                <div className="flex  w-full mt-3 snap-x   gap-x-3 h-full overflow-x-scroll items-center">
                    {
                        popularCuisine?.imageGridCards?.info.map((category, i) => {
                            return <div key={i}>
                                <button onClick={() => {
                                    const categoryName = category?.action?.link?.split('=')
                                    setInput(categoryName[1])
                                }} className=" whitespace-nowrap  w-20 h-28">
                                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${category?.imageId}`} alt="" onError={(e) => { e.target.onerror = null; e.target.style.visibility = 'hidden' }} />
                                </button>
                            </div>
                        })
                    }
                </div>
            </div> :
            (searchRestaurant === null) ?
                <div className="flex flex-col">
                    {
                        [...Array(6)].map((_, i) => {
                            return (
                                <div key={i} className=" h-24  w-full flex gap-x-4 items-center" >
                                    <div className="bg-shimmerColor h-16 w-16"></div>
                                    <div>
                                        <p className="bg-shimmerColor h-tenpx w-40 mb-2"></p>
                                        <p className="bg-shimmerColor h-tenpx w-28"></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                :
                (searchRestaurant.length === 0) ?
                    <p className="text-sm text-ttlRestroHeading font-bold">{`No match found for "${input}"`}</p> :
                    searchRestaurant.map((restro) => {
                        return (
                            <button className="  h-24  w-full flex gap-x-4 items-center hover:bg-[#f2f6fc]"
                                onClick={() => {
                                    fetchQuery(setActiveQueryData, restro, location, setInput)
                                    setSearchParams({ query: restro.text })
                                    setActiveQuery(true)
                                }}
                                key={restro.text}>
                                <img className=" w-16 h-16 rounded " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${restro.cloudinaryId}`} alt="" onError={(e) => { e.target.onerror = null; e.target.style.visibility = 'hidden' }} />
                                <div className=" w-full text-left">
                                    <p className="text-sm  text-sortByBtnHoverColor font-normal">{restro.text}</p>
                                    <p className="text-xs text-[#686B78] ">{restro.tagToDisplay}</p>
                                </div>
                            </button>
                        )
                    })
    )
}

export default SearchOptions
