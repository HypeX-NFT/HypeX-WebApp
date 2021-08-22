import React from "react";
import "./Frame2.css";

function Frame2(props) {
  const { className } = props;

  return (
    <div className={`frame-2 ${className || ""}`}>
      <img className="vector-42" src="/img/vector-18@2x.svg" />
    </div>
  );
}

export default Frame2;
