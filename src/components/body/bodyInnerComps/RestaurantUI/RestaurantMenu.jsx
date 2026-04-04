import { useParams, useLocation } from 'react-router-dom'
import useRestaurantMenu from '../../../../utils/useRestaurantMenu';
import MenuBody from '../RestaurantMenuUi/MenuBody';
import RestaurantMenuShimmer from '../RestaurantMenuUi/RestaurantMenuShimmer';

const RestaurantMenu = () => {
    const { stringResid } = useParams();
    let resid = stringResid.split("-");
    resid = resid[resid.length - 1]

    const { state } = useLocation()
    const restaurantMenu = useRestaurantMenu(resid, state?.restaurantInfo);

    return restaurantMenu === null ? <RestaurantMenuShimmer /> : (
        <MenuBody restaurantMenu={restaurantMenu} restaurantInfoFromCard={state?.restaurantInfo} />
    )
}

export default RestaurantMenu;
