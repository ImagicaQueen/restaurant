import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body"



// const ResturantCard = (props) => {
//     let { resData } = props;

//     return (
//         <div className="res-card" style={styleCard}>
//             {resData.map((restaurant, index) => (
//                 <div key={index}>
//                     <img
//                         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
//                         alt="res-logo"
//                         className="res-logo"
//                     />
//                     <h3>{restaurant.info.name}</h3>
//                     <h4>{restaurant.info.cuisines.join(" , ")}</h4>
//                     <h4>{restaurant.info.avgRating} stars</h4>
//                     <h4>{restaurant.info.costForTwo / 10}</h4>
//                     <h4>{restaurant.info.deliveryTime} minutes</h4>
//                 </div>
//             ))}
//         </div>
//     );
// };

// const resList = {
//     "info": {
//         "id": "425",
//         "name": "Hotel Empire",
//         "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
//         "locality": "Koramangala",
//         "areaName": "Koramangala",
//         "costForTwo": "₹450 for two",
//         "cuisines": [
//             "North Indian",
//             "Kebabs",
//             "Biryani"
//         ],
//         "avgRating": 4.3,
//         "parentId": "475",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "10K+",
//         "sla": {
//             "deliveryTime": 24,
//             "lastMileTravel": 1.3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "24 mins",
//             "lastMileTravelString": "1.3 km",
//             "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//             "nextCloseTime": "2024-01-02 03:00:00",
//             "opened": true
//         },
//         "badges": {},
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//             "entityBadges": {
//                 "imageBased": {},
//                 "textBased": {},
//                 "textExtendedBadges": {}
//             }
//         },
//         "aggregatedDiscountInfoV3": {
//             "header": "₹100 OFF",
//             "subHeader": "ABOVE ₹199",
//             "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                 "lottie": {},
//                 "video": {}
//             }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//         "link": "https://www.swiggy.com/restaurants/hotel-empire-koramangala-bangalore-425",
//         "type": "WEBLINK"
//     }
// }






const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)



