import { CDN_URL } from "../utils/constant";
const styleCard = {
    backgroundColor: "#f0f0f0"
}
const ResturantCard = (props) => {
    let { resData } = props;
    let { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } = resData[0].info;

    console.log(resData[0].info, "hdsfghmvbfdmn ")
    return (
        <div className="res-card" style={styleCard}>
            <img
                src={CDN_URL + cloudinaryImageId}
                alt="res-logo"
                className="res-logo"
            />

            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}
export default ResturantCard