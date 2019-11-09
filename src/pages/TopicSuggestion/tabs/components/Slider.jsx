import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {
  render() {
    const { images, sliderIndex } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: sliderIndex
    };
    return (
      <Slider {...settings}>
        {images &&
          images.map(function(item, i) {
            return (
              <div key={i}>
                <div
                  style={{
                    width: "100%",
                    height: "450px",
                    background: `url(${item.url}) center/cover no-repeat`
                  }}
                ></div>
              </div>
            );
          })}
      </Slider>
    );
  }
}

export default SimpleSlider;
