import React from "react";
import hero_img from "/images/hero_img.png"
import Divider from "../../Common/Divider";

const Hero = () => {
  return (
    <div className="hero_card">
      <div className="hero">
        <div className="leftside">
          <div className="heading">
            <h1>Lilian Amaka Okocha</h1>
            <Divider />
          </div>
        </div>
        <div className="rightside">
          <img src={hero_img} alt="" />
        </div>
      </div>
      <div className="content">
        <h1>Managing Director.</h1>
        <h1>Public Speaker.</h1>
        <h1>Investor.</h1>
      </div>
    </div>
  );
};

export default Hero;
