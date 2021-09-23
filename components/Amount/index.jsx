import React from "react";
import "./Amount.css";

function Amount(props) {
  const { icon, x289, className } = props;

  return (
    <div className={`amount-18 ${className || ""}`}>
      <img className="icon-9" src={icon} />
      <div className="x289-39 poppins-medium-fuscous-gray-14-9px">{x289}</div>
    </div>
  );
}

export default Amount;
