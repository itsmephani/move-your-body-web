import React, { useEffect, useState, PropsWithChildren } from "react";
import "./Slider.scss";

export type SliderProps = {
  currentSlide?: number;
};

export default (props: PropsWithChildren<SliderProps>) => {
  const [currentSlide, setCurrentSlide] = useState(
    () => props.currentSlide || 0
  );

  useEffect(() => {
    //setSlides(Array.from(document.querySelectorAll("Slide")));
  }, []);

  useEffect(() => {
    setCurrentSlide(props.currentSlide || 0);
  }, [props.currentSlide]);

  return (
    <div className="slider">
      <div
        className="slider__slides_container"
        style={{ transform: `translateX(${currentSlide * -100}%)` }}
      >
        {props.children}
      </div>
    </div>
  );
};
