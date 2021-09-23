import React from "react";
import "./Group433.css";

function Group433(props) {
  const { lucasAmaeta, lucasAmaetaInfoCo, className } = props;

  return (
    <div className={`group-433 ${className || ""}`}>
      <div className="lucas-amaeta-7 poppins-medium-azure-radiance-14-9px">{lucasAmaeta}</div>
      <div className="lucasamaetainfoco poppins-normal-regent-gray-9-3px">{lucasAmaetaInfoCo}</div>
    </div>
  );
}

export default Group433;
