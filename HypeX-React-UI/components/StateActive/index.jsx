import React from "react";
import "./StateActive.css";

function StateActive(props) {
  const { text30 } = props;

  return (
    <div className="state-active">
      <div className="group-1">
        <img className="rectangle-8-1" src="/img/rectangle-8@2x.svg" />
      </div>
      <div className="text-30 chakrapetch-semi-bold-white-16px">{text30}</div>
    </div>
  );
}

export default StateActive;
