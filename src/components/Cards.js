import React from "react";

export default function Cards(props) {
    return (
        <div className="flex-block">
            <div className="card-img_block">
                <img className="card-img_style" src={`./imgs/${props.img}`} alt="Woman is an athlete"/>
                <span className="card-online">Sold out</span>
            </div>
            <div className="card-info">
                <img src="./icons/star.svg" alt="Star"/>
                <span className="card-rating">{props.rating}</span>
                <span className="card-review_count">({props.reviewCount}) • </span>
                <span className="card-review_count">{props.country}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-cost">From £{props.price} <span>/ person</span></p>
        </div>
    )
}