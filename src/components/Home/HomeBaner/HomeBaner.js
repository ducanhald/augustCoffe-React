import React from "react";
import Slider from "react-slick";
import "./HomeBaner.css";
import ly1 from "../../../asset/imgs/ly1.png";
import ly2 from "../../../asset/imgs/ly2.png";
import ly3 from "../../../asset/imgs/lycf.png";
function HomeBanner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true,
  };
  return (
    <div className="col l-5">
      <div className="home__banner">
        <Slider {...settings}>
          <div>
            <h3>
              <img src={ly2} alt="" className="img-lycf" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={ly3} alt="" className="img-lycf" />
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default HomeBanner;
