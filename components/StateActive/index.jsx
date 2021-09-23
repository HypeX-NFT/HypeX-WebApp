import React from "react";
import "./StateActive.css";

function StateActive(props) {
  const { group1, text15 } = props;

  return (
    <div className="state-active">
      <img className="group-1-1" src={group1} />
      <div className="text-15 chakrapetch-normal-white-30px">{text15}</div>
    </div>
  );
}

export default StateActive;
