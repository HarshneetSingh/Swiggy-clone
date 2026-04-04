import { useParams } from 'react-router-dom'
import useAdvancedCards from '../../../../utils/useAdvancedCards';
import Shimmer from './HomeMainShimmer';
import RestaurantUI from '../../../../utils/RestaurantUI'
import HomeCategories from './HomeCategories'


const Collection = () => {
    const { resid } = useParams()
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useAdvancedCards(resid)
    return allRestaurants===null ? <Shimmer /> : (
        <>
            <HomeCategories />
            <RestaurantUI filteredRestaurants={filteredRestaurants} allRestaurants={allRestaurants} setFilteredRestaurants={setFilteredRestaurants} />
        </>
    )
}

export default Collection