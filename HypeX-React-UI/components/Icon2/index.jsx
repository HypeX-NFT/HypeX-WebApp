import React from "react";
import "./Icon2.css";

function Icon2(props) {
  const { className } = props;

  return (
    <div className={`icon-9 ${className || ""}`}>
      <div className="overlap-group-16">
        <div className="rectangle-7 border-1-9px-regent-gray"></div>
        <img className="path-23" src="/img/path-11@2x.svg" />
        <img className="path-24" src="/img/path-12@2x.svg" />
        <img className="path-25" src="/img/path-13@2x.svg" />
      </div>
    </div>
  );
}

export default Icon2;
