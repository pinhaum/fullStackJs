import React from "react";
import "./style.css";

const GrayImg = (props) => {
  return (
    <>
      <img
        src={props.img_url}
        alt=""
        className={props.gray ? "gray-img" : "color-img"}
      />
    </>
  );
};

export default GrayImg;
