import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResponsiveSlider = ({ sliderSettings, children }) => {
    const settings = sliderSettings;
    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}
export default ResponsiveSlider;