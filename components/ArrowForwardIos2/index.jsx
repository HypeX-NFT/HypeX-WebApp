import React from "react";
import "./ArrowForwardIos2.css";

function ArrowForwardIos2(props) {
  const { className } = props;

  return (
    <div className={`arrowforwardios-2 ${className || ""}`}>
      <div className="overlap-group-3">
        <img className="vector-72" src="/img/vector@2x.png" />
        <img className="vector-73" src="/img/vector-23@2x.svg" />
      </div>
    </div>
  );
}

export default ArrowForwardIos2;
