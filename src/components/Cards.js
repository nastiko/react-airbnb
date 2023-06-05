import React from "react";

export default function Cards() {
    return (
        <div className="flex-block">
            <div className="card-img_block">
                <img className="card-img_style" src="./imgs/athlete.png" alt="Woman is an athlete"/>
                <span className="card-online">Sold out</span>
            </div>
            <div className="card-info">
                <img src="./icons/star.svg" alt="Star"/>
                <span className="card-rating">5.0</span>
                <span className="card-review_count">(6) • </span>
                <span className="card-review_count">UK</span>
            </div>
            <p className="card-title">Life lessons with Katie Zaferes</p>
            <p className="card-cost">From £136 <span>/ person</span></p>
        </div>
    )
}