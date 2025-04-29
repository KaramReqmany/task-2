import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };



    const getVisibleCards = () => {
        const visibleCards = [];
        for (let i = 0; i < 3; i++) {
            visibleCards.push(cards[(currentIndex + i) % cards.length]);
        }
        return visibleCards;
    };

    return (
        <div className="slider-container">
            <button className="nav-button" onClick={prevSlide}>
                <img src='../../../public/assets/img/slideleft.png' alt="" />
            </button>

            <div className="slider-wrapper">
                <div className="slider-track">
                    {getVisibleCards().map((card, index) => (
                        <div key={index} className="slide">
                            {card}
                        </div>
                    ))}
                </div>
            </div>

            <button className="nav-button" onClick={nextSlide}>
                <img src='../../../public/assets/img/slideright.png' alt="" />
            </button>
            <div className="alternative-button-container">
                <button className="nav-button-hidden" onClick={prevSlide}>
                    <img src='../../../public/assets/img/slideleft.png' alt="" />
                </button>
                <button className="nav-button-hidden" onClick={prevSlide}>
                    <img src='../../../public/assets/img/slideright.png' alt="" />
                </button>

            </div>
        </div>
    );
};

export default Slider;