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

                // one of method to get data, but you need to use way like: {props.item.coverImg}
                //item={course}

                // another method to get data, but you need to use way like: {props.coverImg}
                {...course}
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