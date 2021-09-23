import React from "react";
import "./Amount2.css";

function Amount2(props) {
  const { children, className } = props;

  return (
    <div className={`amount-22 ${className || ""}`}>
      <div className="x380 poppins-medium-fuscous-gray-14-9px">{children}</div>
    </div>
  );
}

export default Amount2;
