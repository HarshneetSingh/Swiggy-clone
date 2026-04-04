import { useState, useEffect } from 'react'
import mockData from '../mocks/restaurants.json'
import { PROXY } from '../config'

const useRestaurant = (location, setRestaurantContext) => {
    const [allRestaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        setRestaurants([])
        getRestaurants()
    }, [location])

    async function getRestaurants() {
        try {
            const data = await fetch(`${PROXY}/api/restaurants?lat=${location.lat}&lng=${location.lng}`)
            const text = await data.text()
            const json = JSON.parse(text)
            if (json?.data) {
                setRestaurants(json.data)
                setFilteredRestaurants(json.data)
                setRestaurantContext(json.data)
            } else {
                throw new Error('No data')
            }
        } catch (err) {
            console.warn('Proxy failed, using mock data:', err.message)
            setRestaurants(mockData.data)
            setFilteredRestaurants(mockData.data)
            setRestaurantContext(mockData.data)
        }
    }

    return [allRestaurants, filteredRestaurants, setFilteredRestaurants, setRestaurants]
}

export default useRestaurant;
