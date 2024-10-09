import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <h3>Get in touch</h3>
        <div className="mailphone">
          <Link to="mailto:Lilianamakaokocha@gmail.com">
            Lilianamakaokocha@gmail.com
          </Link>
          | <Link to="tel:+233-5664-7465">Tel: +233-5664-7465</Link>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
