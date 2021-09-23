import React from "react";
import "./StateDefault.css";

function StateDefault(props) {
  const { className } = props;

  return (
    <div className={`state-default ${className || ""}`}>
      <div className="label-i1228257 chakrapetch-semi-bold-white-20px">EDIT</div>
    </div>
  );
}

export default StateDefault;
