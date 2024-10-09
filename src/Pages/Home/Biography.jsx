import React from "react";
import Bio_img from "/images/Biography.png";
import Divider from "../../Common/Divider";
import Button from "../../Common/Button";

const Biography = () => {
  return (
    <div className="biography">
      <div className="leftside">
        <img src={Bio_img} alt="Biography" />
      </div>
      <div className="rightside">
        <div className="bio_title">
         <h2>Biography</h2>
        <Divider />
       </div>
        <p>
          Lilian Amaka Okocha, is the Managing Director of Platinum Plus
          Consultants Limited. She is a PPCL pioneer member of the management
          team since 2015 with over 20 years’ wide raging experience from Oil
          and Gas industry, post-secondary institution, in top Executive
          Management positions with international organizations in Canada and
          Nigeria. Former employee of Suncor Energy and Athabasca University,
          Associated Engineering, BBA Engineering Alberta Canada, and a
          Certified Executive Coach from Certified Coaches Federation (Canada).
          Amaka holds a Master of Business Administration from Athabasca
          University (Canada), a Post- Baccalaureate Diploma in Management
          (Athabasca University Canada) as well as Bachelor of Arts degree in
          Philosophy from the University of Lagos (Nigeria).
        </p>
        <Button title="Read More About Me" />
      </div>
    </div>
  );
};

export default Biography;
