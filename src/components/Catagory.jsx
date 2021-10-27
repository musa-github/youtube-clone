import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

function Catagory() {
  const showAside = useSelector((state) => state.control.aside);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className={showAside ? "catagory" : "hideCatagory"}>
      <div className="catagory__container">
        <Slider {...settings}>
          {[...new Array(15)].map((item, index) => {
            return (
              <Button variant="outlined" className="catagory__btn" key={index}>
                catagory
              </Button>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Catagory;
