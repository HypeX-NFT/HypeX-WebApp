import React from "react";
import "./Frame.css";

function Frame(props) {
  const { className } = props;

  return (
    <div className={`frame ${className || ""}`}>
      <img className="vector-36" src="/img/vector-19@2x.svg" />
    </div>
  );
}

export default Frame;
