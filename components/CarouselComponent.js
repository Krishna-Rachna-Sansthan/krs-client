import React from "react";
import { SliderData } from "../utils/SliderData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./cards/Card";
import { responsive } from "../utils/CarouselResponsiveness";

function CarouselComponent() {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      deviceType={this?.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {SliderData.map((slide, index) => {
        return (
          <div
            style={{ height: "100%" }}
            className="slide slide-container"
            key={index}
          >
            <Card source={slide.image} description={slide.description} />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
