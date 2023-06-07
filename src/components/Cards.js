import React from "react";

export default function Cards(props) {

    let badgeText;
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if(props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            <img className="card-img_style" src={`./imgs/${props.image}`} alt="Woman is an athlete" />
            {badgeText && <span className="card-badge">{badgeText}</span>}
            <div className="card-info">
                <img src="./icons/star.svg" alt="Star" />
                <span className="card-rating">{props.rate}</span>
                <span className="card-review_count">({props.review}) • </span>
                <span className="card-review_count">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-cost">From £{props.price} <span>/ person</span></p>
        </div>

    )
}