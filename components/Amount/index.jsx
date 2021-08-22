import React from "react";
import "./Amount.css";

function Amount(props) {
  const { x289, className } = props;

  return (
    <div className={`amount-6 ${className || ""}`}>
      <img className="path-20" src="/img/path-14@2x.svg" />
      <div className="x289-45 poppins-medium-fuscous-gray-14-9px">{x289}</div>
    </div>
  );
}

export default Amount;
