import React from "react";
import "./Frame3.css";

function Frame3(props) {
  const { className } = props;

  return (
    <div className={`frame-3 ${className || ""}`}>
      <img className="vector-48" src="/img/vector-14@2x.svg" />
    </div>
  );
}

export default Frame3;
