import React from "react";
import "./Slide.scss";

export default (props: { children: any }) => {
  return <div className="slider__slide">{props.children}</div>;
};
