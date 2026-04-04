export const ImgApi="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
export const PROXY = process.env.PROXY_URL || (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000')

// export const RestaurantList =

//     // 20230226022423
//     // https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5649034&lng=77.2403317&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING

//     [
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "20972",
//                     "name": "Oven Story Pizza",
//                     "uuid": "1fefbd92-5e8f-407e-a6c2-2c6ebf64e724",
//                     "city": "4",
//                     "area": "Lajpat Nagar 2",
//                     "totalRatingsString": "100+ ratings",
//                     "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
//                     "cuisines": [
//                         "Pizzas",
//                         "Italian"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 40000,
//                     "costForTwoString": "₹400 FOR TWO",
//                     "deliveryTime": 28,
//                     "minDeliveryTime": 28,
//                     "maxDeliveryTime": 28,
//                     "slaString": "28 MINS",
//                     "lastMileTravel": 1.2000000476837158,
//                     "slugs": {
//                         "restaurant": "ovenstory-lajpat-nagar-lajpat-nagar",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "D-25, Shop No. 8, Ground Floor, Lajpat Nagar-II, New Delhi-110024",
//                     "locality": "D Block",
//                     "parentId": 3534,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "FLAT125 off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "FLAT125 off | Use FLATDEAL",
//                                 "discountType": "Flat",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FLAT125 off | Use FLATDEAL",
//                                 "discountType": "Flat",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "₹125 OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use FLATDEAL",
//                                 "discountType": "Flat",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FLAT125 off | Use FLATDEAL",
//                                 "discountType": "Flat",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "1.2 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "20972",
//                         "deliveryTime": 28,
//                         "minDeliveryTime": 28,
//                         "maxDeliveryTime": 28,
//                         "lastMileTravel": 1.2000000476837158,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.8",
//                     "totalRatings": 100,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "533744",
//                     "name": "Food Bus Of India",
//                     "uuid": "cba7d772-ad86-412a-8d17-bebbe72bac59",
//                     "city": "4",
//                     "area": "Lajpat Nagar 1",
//                     "totalRatingsString": "50+ ratings",
//                     "cloudinaryImageId": "g4yjspjkfns9da0rfjy4",
//                     "cuisines": [
//                         "Indian",
//                         "Snacks",
//                         "Fast Food",
//                         "Beverages"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 40000,
//                     "costForTwoString": "₹400 FOR TWO",
//                     "deliveryTime": 27,
//                     "minDeliveryTime": 27,
//                     "maxDeliveryTime": 27,
//                     "slaString": "27 MINS",
//                     "lastMileTravel": 1.100000023841858,
//                     "slugs": {
//                         "restaurant": "food-bus-of-india-lajpat-nagar-lajpat-nagar",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "Metro Station Gate No.5, Lajpat Nagar, DEFENCE COLONY, South East, Delhi-110024",
//                     "locality": "Defence Colony",
//                     "parentId": 273675,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "10% off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "10% off | Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "10% off up to ₹40 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "10% OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "10% off up to ₹40 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "1.1 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "533744",
//                         "deliveryTime": 27,
//                         "minDeliveryTime": 27,
//                         "maxDeliveryTime": 27,
//                         "lastMileTravel": 1.100000023841858,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "4.1",
//                     "totalRatings": 50,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "388587",
//                     "name": "PICK A TIKKA",
//                     "uuid": "bc7ff77d-d173-4ee2-9ce4-599ba42feb0a",
//                     "city": "4",
//                     "area": "Shahpur Jat",
//                     "totalRatingsString": "100+ ratings",
//                     "cloudinaryImageId": "dbw6un4cuu2uizgoklcp",
//                     "cuisines": [
//                         "North Indian",
//                         "Chinese",
//                         "Kebabs"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 35000,
//                     "costForTwoString": "₹350 FOR TWO",
//                     "deliveryTime": 36,
//                     "minDeliveryTime": 35,
//                     "maxDeliveryTime": 45,
//                     "slaString": "35-45 MINS",
//                     "lastMileTravel": 4.199999809265137,
//                     "slugs": {
//                         "restaurant": "pick-a-tikka-hauz-khas-hauz-khas",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "GROUND FLOOR, 252/B,SHANTI BHAWAN, SHAHPUR JAT,NEW DELHI-110049",
//                     "locality": "Hauz Khas",
//                     "parentId": 252614,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "FLAT125 off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "FLAT125 off | Use FLATDEAL",
//                                 "discountType": "Flat",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FLAT125 off | Use FLATDEAL",
//                                 "discountType": "Flat",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "₹125 OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use FLATDEAL",
//                                 "discountType": "Flat",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FLAT125 off | Use FLATDEAL",
//                                 "discountType": "Flat",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "ribbon": [
//                         {
//                             "type": "PROMOTED"
//                         }
//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "cid=5804566~p=19~eid=00000186-8a5a-f68b-3788-db8200861330",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "4.1 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "388587",
//                         "deliveryTime": 36,
//                         "minDeliveryTime": 35,
//                         "maxDeliveryTime": 45,
//                         "lastMileTravel": 4.199999809265137,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": true,
//                     "avgRating": "4.1",
//                     "totalRatings": 100,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "619256",
//                     "name": "Food_O_Gasm",
//                     "uuid": "5f9113af-d81a-496e-b376-3cdaa2d65a7a",
//                     "city": "4",
//                     "area": "Lajpat Nagar 4",
//                     "totalRatingsString": "50+ ratings",
//                     "cloudinaryImageId": "i6a24yy9ttupjerrsqis",
//                     "cuisines": [
//                         "North Indian",
//                         "Indian",
//                         "Pizzas"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 30000,
//                     "costForTwoString": "₹300 FOR TWO",
//                     "deliveryTime": 29,
//                     "minDeliveryTime": 29,
//                     "maxDeliveryTime": 29,
//                     "slaString": "29 MINS",
//                     "lastMileTravel": 1.5,
//                     "slugs": {
//                         "restaurant": "food_o_gasm-lajpat-nagar-lajpat-nagar",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "5/3, OLD DOUBLE STOREY, LAJPAT NAGAR- IV, SOUTH DELHI, DELHI-110024,  KILOKARI, DEFENCE COLONY, South East, Delhi - 110024",
//                     "locality": "Kilokari",
//                     "parentId": 368969,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "20% off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "20% off | Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "20% off up to ₹50 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "20% OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "20% off up to ₹50 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "1.5 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "619256",
//                         "deliveryTime": 29,
//                         "minDeliveryTime": 29,
//                         "maxDeliveryTime": 29,
//                         "lastMileTravel": 1.5,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "4.1",
//                     "totalRatings": 50,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "15668",
//                     "name": "Behrouz Biryani - Royal & Safe",
//                     "uuid": "c1dc203c-7d41-48ce-9d1a-60bac9c8665e",
//                     "city": "4",
//                     "area": "Lajpat Nagar 2",
//                     "totalRatingsString": "100+ ratings",
//                     "cloudinaryImageId": "vhcaednxntltchov5ibp",
//                     "cuisines": [
//                         "Biryani",
//                         "Mughlai",
//                         "Lucknowi",
//                         "Hyderabadi",
//                         "Kebabs",
//                         "North Indian",
//                         "Persian",
//                         "Desserts"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 50000,
//                     "costForTwoString": "₹500 FOR TWO",
//                     "deliveryTime": 30,
//                     "minDeliveryTime": 30,
//                     "maxDeliveryTime": 30,
//                     "slaString": "30 MINS",
//                     "lastMileTravel": 1.2000000476837158,
//                     "slugs": {
//                         "restaurant": "behrouz-biryani-lajpat-nagar-lajpat-nagar",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "D-25, Shop No. 8, Ground Floor, Lajpat Nagar-II, New Delhi-110024",
//                     "locality": "D Block",
//                     "parentId": 1803,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "50% off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "50% off | Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "50% OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "1.2 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "15668",
//                         "deliveryTime": 30,
//                         "minDeliveryTime": 30,
//                         "maxDeliveryTime": 30,
//                         "lastMileTravel": 1.2000000476837158,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "4.1",
//                     "totalRatings": 100,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "54527",
//                     "name": "Hishi Cafe",
//                     "uuid": "c090f171-42ed-4a46-84f8-348b0546b196",
//                     "city": "4",
//                     "area": "Jangpura",
//                     "totalRatingsString": "1000+ ratings",
//                     "cloudinaryImageId": "j6omfiwikgjip1wcl8pn",
//                     "cuisines": [
//                         "Snacks",
//                         "American",
//                         "Italian"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 20000,
//                     "costForTwoString": "₹200 FOR TWO",
//                     "deliveryTime": 37,
//                     "minDeliveryTime": 35,
//                     "maxDeliveryTime": 45,
//                     "slaString": "35-45 MINS",
//                     "lastMileTravel": 3,
//                     "slugs": {
//                         "restaurant": "hishi-cafe-jangpura-new-lajpat-nagar",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "1/16 A,Ground Floor,Jangpura,New Delhi",
//                     "locality": "H Block",
//                     "parentId": 16732,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "50% off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "50% off | Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "50% OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "ribbon": [
//                         {
//                             "type": "PROMOTED"
//                         }
//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "cid=5844241~p=22~eid=00000186-8a5a-f68b-3788-db830086167d",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "3 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "54527",
//                         "deliveryTime": 37,
//                         "minDeliveryTime": 35,
//                         "maxDeliveryTime": 45,
//                         "lastMileTravel": 3,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": true,
//                     "avgRating": "4.1",
//                     "totalRatings": 1000,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "35837",
//                     "name": "Sweet Truth - Cake and Desserts",
//                     "uuid": "bd50fa6f-519a-4f20-9680-5b39890eef41",
//                     "city": "4",
//                     "area": "Lajpat Nagar 2",
//                     "totalRatingsString": "20+ ratings",
//                     "cloudinaryImageId": "7c51efd1c5a12b7925e428a87977f85d",
//                     "cuisines": [
//                         "Bakery",
//                         "Desserts"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 45000,
//                     "costForTwoString": "₹450 FOR TWO",
//                     "deliveryTime": 25,
//                     "minDeliveryTime": 25,
//                     "maxDeliveryTime": 25,
//                     "slaString": "25 MINS",
//                     "lastMileTravel": 1.2000000476837158,
//                     "slugs": {
//                         "restaurant": "sweet-truth-tagore-garden-rajouri-garden",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "D-25, Shop No. 8, Ground Floor, Lajpat Nagar-II, New Delhi-110024",
//                     "locality": "D Block",
//                     "parentId": 4444,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "FREE DELIVERY",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Free Delivery",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "1.2 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "35837",
//                         "deliveryTime": 25,
//                         "minDeliveryTime": 25,
//                         "maxDeliveryTime": 25,
//                         "lastMileTravel": 1.2000000476837158,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "4.0",
//                     "totalRatings": 20,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "345823",
//                     "name": "Rollsking",
//                     "uuid": "b6fc8d89-0d38-41af-9022-7e313652a45d",
//                     "city": "4",
//                     "area": "Defence Colony",
//                     "totalRatingsString": "100+ ratings",
//                     "cloudinaryImageId": "roz0po3jo7liwxkdcqd8",
//                     "cuisines": [
//                         "North Indian",
//                         "Fast Food",
//                         "Beverages"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 25000,
//                     "costForTwoString": "₹250 FOR TWO",
//                     "deliveryTime": 30,
//                     "minDeliveryTime": 25,
//                     "maxDeliveryTime": 35,
//                     "slaString": "25-35 MINS",
//                     "lastMileTravel": 2,
//                     "slugs": {
//                         "restaurant": "rolls-king-south-extension-south-extension",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "Corner shop number 132, Flyover market, ",
//                     "locality": "C Block",
//                     "parentId": 4697,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "40% off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "40% off | Use GUILTFREE",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "40% off up to ₹100 | Use code GUILTFREE",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "40% OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use GUILTFREE",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "40% off up to ₹100 | Use code GUILTFREE",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "2 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "345823",
//                         "deliveryTime": 30,
//                         "minDeliveryTime": 25,
//                         "maxDeliveryTime": 35,
//                         "lastMileTravel": 2,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.9",
//                     "totalRatings": 100,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "633866",
//                     "name": "Sher singh da dhaba",
//                     "uuid": "99d3af63-7206-4ccd-828c-7935031ad675",
//                     "city": "4",
//                     "area": "Shahpur Jat",
//                     "totalRatingsString": "20+ ratings",
//                     "cloudinaryImageId": "kuh6qfjj6enqyjlyvg6l",
//                     "cuisines": [
//                         "North Indian",
//                         "Kebabs",
//                         "Tandoor",
//                         "Mughlai"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 40000,
//                     "costForTwoString": "₹400 FOR TWO",
//                     "deliveryTime": 36,
//                     "minDeliveryTime": 35,
//                     "maxDeliveryTime": 45,
//                     "slaString": "35-45 MINS",
//                     "lastMileTravel": 4.199999809265137,
//                     "slugs": {
//                         "restaurant": "sher-singh-da-dhaba-south-extension-south-extension",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "252-B, Ground Floor, Shanti Bhawan, Shahpur Jat, HAUZ KHAS, South , Delhi-110049",
//                     "locality": "Hauz Khas",
//                     "parentId": 282105,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "FREE DELIVERY",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Free Delivery",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "ribbon": [
//                         {
//                             "type": "PROMOTED"
//                         }
//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "cid=5804568~p=25~eid=00000186-8a5a-f68b-3788-db8400861916",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "4.1 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "633866",
//                         "deliveryTime": 36,
//                         "minDeliveryTime": 35,
//                         "maxDeliveryTime": 45,
//                         "lastMileTravel": 4.199999809265137,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": true,
//                     "avgRating": "4.5",
//                     "totalRatings": 20,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "186201",
//                     "name": "The Biryani Life",
//                     "uuid": "c09b194d-2751-4e99-99ae-c95563bb0aea",
//                     "city": "4",
//                     "area": "Lajpat Nagar 2",
//                     "totalRatingsString": "Too Few Ratings",
//                     "cloudinaryImageId": "ge31izsel9x6h74c8hu0",
//                     "cuisines": [
//                         "Biryani",
//                         "Hyderabadi",
//                         "Lucknowi",
//                         "North Indian",
//                         "Mughlai",
//                         "Desserts"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 25000,
//                     "costForTwoString": "₹250 FOR TWO",
//                     "deliveryTime": 26,
//                     "minDeliveryTime": 26,
//                     "maxDeliveryTime": 26,
//                     "slaString": "26 MINS",
//                     "lastMileTravel": 1.2000000476837158,
//                     "slugs": {
//                         "restaurant": "the-biryani-life-lajpat-nagar-new-lajpat-nagar",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "D 25  Shop No  8  Ground Floor  Lajpat Nagar II  New Delhi 110024",
//                     "locality": "D Block",
//                     "parentId": 8496,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "FREE DELIVERY",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Free Delivery",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "1.2 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "186201",
//                         "deliveryTime": 26,
//                         "minDeliveryTime": 26,
//                         "maxDeliveryTime": 26,
//                         "lastMileTravel": 1.2000000476837158,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "--",
//                     "totalRatings": 0,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "376932",
//                     "name": "Ghar Ka Tadka",
//                     "uuid": "c8b0176a-2cad-4be5-8bc9-ce82f91db0ec",
//                     "city": "4",
//                     "area": "Amar Colony",
//                     "totalRatingsString": "100+ ratings",
//                     "cloudinaryImageId": "dgvuyff4zu2pi1qykpap",
//                     "cuisines": [
//                         "Indian"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 15000,
//                     "costForTwoString": "₹150 FOR TWO",
//                     "deliveryTime": 34,
//                     "minDeliveryTime": 34,
//                     "maxDeliveryTime": 34,
//                     "slaString": "34 MINS",
//                     "lastMileTravel": 2.200000047683716,
//                     "slugs": {
//                         "restaurant": "ghar-ka-tadka-greater-kailash-2-greater-kailash-2",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "Shop No. 129, First Floor, Auto Complex, Zamrudpur, G.K. - 1, New Delhi (Desi Theke Ke upar Near ethinic swad)",
//                     "locality": "Zamrudpur",
//                     "parentId": 8838,
//                     "unserviceable": false,
//                     "veg": true,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "50% off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "50% off | Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "50% OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "2.2 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "376932",
//                         "deliveryTime": 34,
//                         "minDeliveryTime": 34,
//                         "maxDeliveryTime": 34,
//                         "lastMileTravel": 2.200000047683716,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.9",
//                     "totalRatings": 100,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "315101",
//                     "name": "Waffle & more",
//                     "uuid": "80a3c66c-fd04-4ac7-9e82-09799997d45e",
//                     "city": "4",
//                     "area": "Malviya Nagar",
//                     "totalRatingsString": "100+ ratings",
//                     "cloudinaryImageId": "upvdt6e6smrecacctchv",
//                     "cuisines": [
//                         "Waffle",
//                         "Fast Food"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 35000,
//                     "costForTwoString": "₹350 FOR TWO",
//                     "deliveryTime": 28,
//                     "minDeliveryTime": 25,
//                     "maxDeliveryTime": 35,
//                     "slaString": "25-35 MINS",
//                     "lastMileTravel": 5.800000190734863,
//                     "slugs": {
//                         "restaurant": "waffles-&-more-malviya-nagar-malviya-nagar",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "136 FF BEGUMPUR , HAUZ KHAS, South , , Delhi, 110017",
//                     "locality": "",
//                     "parentId": 224947,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "50% off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "50% off | Use LNBINGE",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code LNBINGE",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "50% OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use LNBINGE",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code LNBINGE",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "ribbon": [
//                         {
//                             "type": "PROMOTED"
//                         }
//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "cid=5985103~p=28~eid=00000186-8a5a-f68b-3788-db8500861c72",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "5.8 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "315101",
//                         "deliveryTime": 28,
//                         "minDeliveryTime": 25,
//                         "maxDeliveryTime": 35,
//                         "lastMileTravel": 5.800000190734863,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": true,
//                     "avgRating": "3.8",
//                     "totalRatings": 100,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "17854",
//                     "name": "Cafe Coffee Day",
//                     "uuid": "7d4fc793-06ba-4eff-bc44-901289c3e3bf",
//                     "city": "4",
//                     "area": "Lajpat Nagar 2",
//                     "totalRatingsString": "50+ ratings",
//                     "cloudinaryImageId": "fj5zd6uxtzfl774tedxh",
//                     "cuisines": [
//                         "Beverages",
//                         "Snacks",
//                         "Desserts"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 30000,
//                     "costForTwoString": "₹300 FOR TWO",
//                     "deliveryTime": 29,
//                     "minDeliveryTime": 29,
//                     "maxDeliveryTime": 29,
//                     "slaString": "29 MINS",
//                     "lastMileTravel": 1.100000023841858,
//                     "slugs": {
//                         "restaurant": "cafe-coffee-day-lajapat-nagar-lajpat-nagar",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "A-10, GROUND FLOOR, LAJPAT GAR-2, NEW DELHI",
//                     "locality": "A Block",
//                     "parentId": 1,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "60% off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "60% off | Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "60% off up to ₹120 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "60% OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "60% off up to ₹120 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "1.1 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "17854",
//                         "deliveryTime": 29,
//                         "minDeliveryTime": 29,
//                         "maxDeliveryTime": 29,
//                         "lastMileTravel": 1.100000023841858,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "4.0",
//                     "totalRatings": 50,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "123414",
//                     "name": "Vicky marinated momos",
//                     "uuid": "315401b6-9262-4e06-ad1c-069b079b4a6e",
//                     "city": "4",
//                     "area": "Lajpat Nagar 4",
//                     "totalRatingsString": "100+ ratings",
//                     "cloudinaryImageId": "zcqn9d3rf45tvesnhqri",
//                     "cuisines": [
//                         "Chinese",
//                         "Fast Food"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 20000,
//                     "costForTwoString": "₹200 FOR TWO",
//                     "deliveryTime": 23,
//                     "minDeliveryTime": 23,
//                     "maxDeliveryTime": 23,
//                     "slaString": "23 MINS",
//                     "lastMileTravel": 0.800000011920929,
//                     "slugs": {
//                         "restaurant": "vicky-marinated-momos-na-hauz-khas",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "7/11 DOUBLE STORY LAJPAT NAGAR DELHI 110024",
//                     "locality": "Hauz Khas",
//                     "parentId": 222976,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "FREE DELIVERY",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Free Delivery",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "FREE DELIVERY",
//                                 "discountType": "FREE_DELIVERY",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "0.8 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "123414",
//                         "deliveryTime": 23,
//                         "minDeliveryTime": 23,
//                         "maxDeliveryTime": 23,
//                         "lastMileTravel": 0.800000011920929,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "4.2",
//                     "totalRatings": 100,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "460740",
//                     "name": "CHICKEERA - Bowls & Sandwiches",
//                     "uuid": "f4e95728-d850-43d9-ae1c-13df44235441",
//                     "city": "4",
//                     "area": "SDA Market",
//                     "totalRatingsString": "50+ ratings",
//                     "cloudinaryImageId": "0ceecf2b627f01a5bc0c79fe4fc2a4e6",
//                     "cuisines": [
//                         "Lebanese",
//                         "Middle Eastern",
//                         "American",
//                         "Beverages"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 50000,
//                     "costForTwoString": "₹500 FOR TWO",
//                     "deliveryTime": 31,
//                     "minDeliveryTime": 30,
//                     "maxDeliveryTime": 40,
//                     "slaString": "30-40 MINS",
//                     "lastMileTravel": 5.800000190734863,
//                     "slugs": {
//                         "restaurant": "chickeera-hauz-khas-hauz-khas",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "G.F. C-15, SHOPPING CENTRE S D AREA, N A NEAR JK CHAURDHARY C-17, NEW DELHI- 110016, South West , Delhi-110016",
//                     "locality": "Gamal Abdel Nasser Marg",
//                     "parentId": 60400,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "50% off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "50% off | Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "50% OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "ribbon": [
//                         {
//                             "type": "PROMOTED"
//                         }
//                     ],
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "cid=5990418~p=31~eid=00000186-8a5a-f68b-3788-db8600861f79",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "5.8 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "460740",
//                         "deliveryTime": 31,
//                         "minDeliveryTime": 30,
//                         "maxDeliveryTime": 40,
//                         "lastMileTravel": 5.800000190734863,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": true,
//                     "avgRating": "3.7",
//                     "totalRatings": 50,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         },
//         {
//             "cardType": "restaurant",
//             "layoutAlignmentType": "VERTICAL",
//             "data": {
//                 "type": "restaurant",
//                 "data": {
//                     "type": "F",
//                     "id": "424479",
//                     "name": "King Shawarma",
//                     "uuid": "77edcc74-e1a7-4cec-a31a-d00a93948218",
//                     "city": "4",
//                     "area": "Lajpat Nagar 4",
//                     "totalRatingsString": "100+ ratings",
//                     "cloudinaryImageId": "rzwbdetq40wlcp5ku3eg",
//                     "cuisines": [
//                         "Italian",
//                         "Chinese",
//                         "Snacks"
//                     ],
//                     "tags": [

//                     ],
//                     "costForTwo": 25000,
//                     "costForTwoString": "₹250 FOR TWO",
//                     "deliveryTime": 25,
//                     "minDeliveryTime": 25,
//                     "maxDeliveryTime": 25,
//                     "slaString": "25 MINS",
//                     "lastMileTravel": 1.899999976158142,
//                     "slugs": {
//                         "restaurant": "king-shawarma-lajpat-nagar-lajpat-nagar",
//                         "city": "delhi"
//                     },
//                     "cityState": "4",
//                     "address": "C-30 Amar Colony market  back side , Lajpat Nagar 4 New Delhi 110024",
//                     "locality": "Amar Colony",
//                     "parentId": 4076,
//                     "unserviceable": false,
//                     "veg": false,
//                     "select": false,
//                     "favorite": false,
//                     "tradeCampaignHeaders": [

//                     ],
//                     "aggregatedDiscountInfo": {
//                         "header": "50% off",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "50% off | Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "aggregatedDiscountInfoV2": {
//                         "header": "50% OFF",
//                         "shortDescriptionList": [
//                             {
//                                 "meta": "Use TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "descriptionList": [
//                             {
//                                 "meta": "50% off up to ₹100 | Use code TRYNEW",
//                                 "discountType": "Percentage",
//                                 "operationType": "RESTAURANT"
//                             }
//                         ],
//                         "subHeader": "",
//                         "headerType": 0,
//                         "superFreedel": ""
//                     },
//                     "chain": [

//                     ],
//                     "feeDetails": {
//                         "fees": [

//                         ],
//                         "totalFees": 0,
//                         "message": "",
//                         "title": "",
//                         "amount": "",
//                         "icon": ""
//                     },
//                     "availability": {
//                         "opened": true,
//                         "nextOpenMessage": "",
//                         "nextCloseMessage": ""
//                     },
//                     "longDistanceEnabled": 0,
//                     "rainMode": "NONE",
//                     "thirdPartyAddress": false,
//                     "thirdPartyVendor": "",
//                     "adTrackingID": "",
//                     "badges": {
//                         "imageBased": [

//                         ],
//                         "textBased": [

//                         ],
//                         "textExtendedBadges": [

//                         ]
//                     },
//                     "lastMileTravelString": "1.8 kms",
//                     "hasSurge": false,
//                     "sla": {
//                         "restaurantId": "424479",
//                         "deliveryTime": 25,
//                         "minDeliveryTime": 25,
//                         "maxDeliveryTime": 25,
//                         "lastMileTravel": 1.899999976158142,
//                         "lastMileDistance": 0,
//                         "serviceability": "SERVICEABLE",
//                         "rainMode": "NONE",
//                         "longDistance": "NOT_LONG_DISTANCE",
//                         "preferentialService": false,
//                         "iconType": "EMPTY"
//                     },
//                     "promoted": false,
//                     "avgRating": "3.8",
//                     "totalRatings": 100,
//                     "new": false
//                 },
//                 "subtype": "basic"
//             },
//             "parentWidget": false
//         }
//     ]

