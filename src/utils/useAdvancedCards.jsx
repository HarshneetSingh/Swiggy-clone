import { useState, useEffect, useContext } from 'react'
import LocationContext from './LocationContext'
import mockData from '../mocks/restaurants.json'
import { PROXY } from '../config'

const useAdvancedCards = (resid) => {
    const [allRestaurants, setRestaurant] = useState(null)
    const [filteredRestaurants, setFilteredRestaurants] = useState(null)
    const [location] = useContext(LocationContext)

    useEffect(() => {
        getRestaurant()
    }, [])

    async function getRestaurant() {
        try {
            const result = await fetch(`${PROXY}/api/restaurants?lat=${location.lat}&lng=${location.lng}`)
            const text = await result.text()
            const data = JSON.parse(text)
            if (data?.data) {
                setRestaurant(data.data)
                setFilteredRestaurants(data.data)
            } else {
                throw new Error('No data')
            }
        } catch (err) {
            console.warn('Proxy failed, using mock data:', err.message)
            setRestaurant(mockData.data)
            setFilteredRestaurants(mockData.data)
        }
    }

    return [allRestaurants, filteredRestaurants, setFilteredRestaurants]
}

export default useAdvancedCards;
