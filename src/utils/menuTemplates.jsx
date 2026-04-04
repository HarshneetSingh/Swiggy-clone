const templates = {
    pizza: {
        title: "Pizzas",
        items: [
            { id: "t1", name: "Margherita Pizza", description: "Classic tomato base with mozzarella cheese", price: 22900, isVeg: 1, imageId: "ol3yb02mkqbvsbbr7kz6" },
            { id: "t2", name: "Pepperoni Pizza", description: "Loaded with pepperoni and mozzarella", price: 32900, isVeg: 0, isBestseller: true, imageId: "ol3yb02mkqbvsbbr7kz6" },
            { id: "t3", name: "BBQ Chicken Pizza", description: "Smoky BBQ sauce with grilled chicken", price: 34900, isVeg: 0, imageId: "ol3yb02mkqbvsbbr7kz6" },
            { id: "t4", name: "Veggie Supreme", description: "Bell peppers, mushrooms, olives and onions", price: 28900, isVeg: 1, imageId: "ol3yb02mkqbvsbbr7kz6" },
        ]
    },
    burger: {
        title: "Burgers",
        items: [
            { id: "t1", name: "Classic Veg Burger", description: "Crispy veggie patty with lettuce and cheese", price: 14900, isVeg: 1, isBestseller: true },
            { id: "t2", name: "Chicken Burger", description: "Grilled chicken with special sauce", price: 18900, isVeg: 0 },
            { id: "t3", name: "Double Patty Burger", description: "Double the beef, double the flavour", price: 22900, isVeg: 0 },
            { id: "t4", name: "Paneer Tikka Burger", description: "Spiced paneer tikka with mint chutney", price: 16900, isVeg: 1 },
        ]
    },
    biryani: {
        title: "Biryani",
        items: [
            { id: "t1", name: "Chicken Biryani", description: "Fragrant basmati rice with tender chicken", price: 24900, isVeg: 0, isBestseller: true },
            { id: "t2", name: "Veg Biryani", description: "Aromatic rice with seasonal vegetables", price: 18900, isVeg: 1 },
            { id: "t3", name: "Mutton Biryani", description: "Slow-cooked mutton with dum biryani", price: 28900, isVeg: 0 },
            { id: "t4", name: "Egg Biryani", description: "Classic biryani with boiled eggs", price: 19900, isVeg: 0 },
        ]
    },
    chinese: {
        title: "Chinese",
        items: [
            { id: "t1", name: "Veg Fried Rice", description: "Wok-tossed rice with fresh vegetables", price: 16900, isVeg: 1, isBestseller: true },
            { id: "t2", name: "Chicken Hakka Noodles", description: "Stir-fried noodles with chicken and sauces", price: 19900, isVeg: 0 },
            { id: "t3", name: "Veg Manchurian", description: "Crispy veggie balls in a tangy sauce", price: 17900, isVeg: 1 },
            { id: "t4", name: "Chilli Chicken", description: "Crispy chicken tossed in chilli garlic sauce", price: 22900, isVeg: 0 },
        ]
    },
    northindian: {
        title: "Main Course",
        items: [
            { id: "t1", name: "Paneer Butter Masala", description: "Rich and creamy paneer curry", price: 26900, isVeg: 1, isBestseller: true },
            { id: "t2", name: "Dal Makhani", description: "Slow-cooked black lentils in butter", price: 22900, isVeg: 1 },
            { id: "t3", name: "Butter Chicken", description: "Tender chicken in a rich tomato gravy", price: 28900, isVeg: 0 },
            { id: "t4", name: "Garlic Naan", description: "Freshly baked naan with garlic butter", price: 7900, isVeg: 1 },
        ]
    },
    cafe: {
        title: "Drinks & Snacks",
        items: [
            { id: "t1", name: "Cappuccino", description: "Rich espresso with creamy milk foam", price: 22900, isVeg: 1, isBestseller: true },
            { id: "t2", name: "Cold Coffee", description: "Chilled blended coffee with ice cream", price: 18900, isVeg: 1 },
            { id: "t3", name: "Chocolate Brownie", description: "Warm fudgy brownie with vanilla ice cream", price: 18900, isVeg: 1 },
            { id: "t4", name: "Club Sandwich", description: "Triple-decker sandwich with veggies", price: 22900, isVeg: 1 },
        ]
    },
    streetfood: {
        title: "Street Food",
        items: [
            { id: "t1", name: "Pav Bhaji", description: "Spiced mashed vegetables with butter pav", price: 12900, isVeg: 1, isBestseller: true },
            { id: "t2", name: "Vada Pav", description: "Mumbai's favourite spicy potato fritter in pav", price: 4900, isVeg: 1 },
            { id: "t3", name: "Bhel Puri", description: "Crispy puffed rice with tangy chutneys", price: 8900, isVeg: 1 },
            { id: "t4", name: "Sev Puri", description: "Crispy puris topped with chutneys and sev", price: 9900, isVeg: 1 },
        ]
    },
    default: {
        title: "Recommended",
        items: [
            { id: "t1", name: "Special Thali", description: "A wholesome platter of the day's specials", price: 19900, isVeg: 1, isBestseller: true },
            { id: "t2", name: "Masala Chai", description: "Freshly brewed Indian spiced tea", price: 4900, isVeg: 1 },
            { id: "t3", name: "Veg Combo Meal", description: "Rice, dal, sabzi and roti", price: 17900, isVeg: 1 },
            { id: "t4", name: "Sweet Lassi", description: "Chilled yoghurt drink with sugar", price: 8900, isVeg: 1 },
        ]
    },
}

export function getMenuTemplateForCuisines(cuisines = []) {
    const joined = cuisines.join(' ').toLowerCase()
    if (joined.includes('pizza')) return templates.pizza
    if (joined.includes('burger') || joined.includes('fast food') || joined.includes('sandwich')) return templates.burger
    if (joined.includes('biryani')) return templates.biryani
    if (joined.includes('chinese') || joined.includes('noodle')) return templates.chinese
    if (joined.includes('north indian') || joined.includes('mughlai') || joined.includes('punjabi')) return templates.northindian
    if (joined.includes('cafe') || joined.includes('coffee') || joined.includes('bakery') || joined.includes('dessert')) return templates.cafe
    if (joined.includes('street food') || joined.includes('snack') || joined.includes('chaat')) return templates.streetfood
    return templates.default
}
