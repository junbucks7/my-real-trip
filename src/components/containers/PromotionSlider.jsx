import React from "react";
import Slider from "react-slick";
// import style from "./style.module.css";

class PromotionSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
          {/* <div className={style["promotion-image-wrapper"]}>
            <img
              className={style["promotion-image"]}
              src="https://d2ur7st6jjikze.cloudfront.net/cms/479_original_1577953842.jpg?1577953842"
            />
          </div> */}
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default PromotionSlider;
