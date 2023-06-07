import React from 'react';
import Header from "./components/Header";
import SectionImgs from "./components/SectionImgs";
import Cards from "./components/Cards";
import data from "./data";

export default function App() {
    const cardInfo = data.map(course => {
        return (
            <Cards
                key={course.id}
                image={course.coverImg}
                rate={course.stats.rating}
                review={course.stats.reviewCount}
                location={course.location}
                title={course.title}
                price={course.price}
                openSpots={course.openSpots}
            />
        )
    })

    return (
        <div>
            <Header />
            <SectionImgs />
            <section className="cards-block">
                {cardInfo}
            </section>
        </div>
    )
}