import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Card from "./Card"
import { CardShimmer } from "../../../../utils/helper"

const PAGE_SIZE = 8

const RestaurantList = (props) => {
    const servicable = props.restaurants.reduce((acc, restaurant) => {
        const restaurantData = restaurant?.info
        if (restaurantData?.isOpen !== false) acc.push(restaurantData)
        return acc
    }, [])

    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
    const [loading, setLoading] = useState(false)
    const sentinelRef = useRef(null)

    // Reset when restaurants change (e.g. filter applied)
    useEffect(() => {
        setVisibleCount(PAGE_SIZE)
    }, [props.restaurants])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && visibleCount < servicable.length && !loading) {
                setLoading(true)
                setTimeout(() => {
                    setVisibleCount(c => Math.min(c + PAGE_SIZE, servicable.length))
                    setLoading(false)
                }, 800)
            }
        }, { threshold: 0.1 })

        if (sentinelRef.current) observer.observe(sentinelRef.current)
        return () => observer.disconnect()
    }, [visibleCount, servicable.length, loading])

    if (servicable.length === 0) return <p className="text-center py-10 text-locationError">No restaurants found</p>

    const visible = servicable.slice(0, visibleCount)

    return (
        <div className="w-full max-w-6xl mt-4 mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                {visible.map((restaurant) => (
                    <Link
                        to={`/restaurant/${restaurant?.name}-${restaurant?.id}`}
                        state={{ restaurantInfo: restaurant }}
                        key={restaurant?.id}
                    >
                        <Card
                            id={restaurant?.id}
                            cloudinaryImageId={restaurant?.cloudinaryImageId}
                            name={restaurant?.name}
                            cuisines={restaurant?.cuisines}
                            deliveryTime={restaurant?.sla?.deliveryTime}
                            costForTwoString={restaurant?.costForTwo}
                            avgRating={restaurant?.avgRating}
                            promoted={restaurant?.promoted}
                            aggregatedDiscountInfo={restaurant?.aggregatedDiscountInfoV3}
                            locality={restaurant?.locality}
                            areaName={restaurant?.areaName}
                        />
                    </Link>
                ))}

                {/* Shimmer cards while loading next batch */}
                {loading && [...Array(PAGE_SIZE)].map((_, i) => <CardShimmer key={`shimmer-${i}`} />)}
            </div>

            {/* Invisible sentinel for IntersectionObserver */}
            {visibleCount < servicable.length && (
                <div ref={sentinelRef} className="h-4 mt-4" />
            )}
        </div>
    )
}

export default RestaurantList
