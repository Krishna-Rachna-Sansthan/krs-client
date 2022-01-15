import React, { useState } from "react";
import { SliderData } from "../utils/SliderData";
import Card from "./Card";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider-container">
      <div className="slider">
        <div className="left-arrow icon">
          <ArrowCircleLeftIcon onClick={prevSlide} className="arrow" />
        </div>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? "slide slide-container active"
                  : "slide slide-container"
              }
              key={index}
            >
              {index === current && (
                <Card source={slide.image} description={slide.description} />
              )}
            </div>
          );
        })}
        <div className="right-arrow icon">
          <ArrowCircleRightIcon onClick={nextSlide} className="arrow" />
        </div>
      </div>
    </section>
  );
}
export default Carousel;
