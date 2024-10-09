import React from "react";
import "./Common.css";
import { Link } from "react-router-dom";

const Button = ({ title, url }) => {
  return (
    <Link className="button" to={`${url ? url : "/"}`}>
      {title}
    </Link>
  );
};

export default Button;
