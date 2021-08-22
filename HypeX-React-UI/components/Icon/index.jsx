import React from "react";
import "./Icon.css";

function Icon(props) {
  const { className } = props;

  return (
    <div className={`icon-1 ${className || ""}`}>
      <div className="overlap-group1-6">
        <div className="rectangle-1 border-1-9px-white"></div>
        <img className="path-5" src="/img/path@2x.svg" />
        <img className="path-6" src="/img/path-1@2x.svg" />
        <img className="path-7" src="/img/path-2@2x.svg" />
      </div>
    </div>
  );
}

export default Icon;
