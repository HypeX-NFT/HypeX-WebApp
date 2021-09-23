import React from "react";
import "./Amount3.css";

function Amount3(props) {
  const { children, className } = props;

  return (
    <div className={`amount-27 ${className || ""}`}>
      <div className="price-12 poppins-medium-fuscous-gray-14-9px">{children}</div>
    </div>
  );
}

export default Amount3;
