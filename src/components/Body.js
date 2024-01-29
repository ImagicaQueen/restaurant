import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([resList]);


    useEffect(() => {
        fetchData();
    }, []);




    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json.data.cards[4].card.card.gridElements.
            infoWithStyle.restaurants
            , "cards")
        // console.log(json.data.cards
        //     , "cards")

        // Optional Chaining
        // setListOfRestaurant(
        //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // );
        setListOfRestaurant(
            listOfRestaurant
        );


    };

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterdData = listOfRestaurant.filter((ele) => ele.info.avgRating > 4)
                    setListOfRestaurant(filterdData)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant?.map(restaurant => <ResturantCard resData={restaurant} />)
                }
            </div>
        </div>
    );
}

export default Body;


