import React from "react";
import "./Close.css";

function Close(props) {
  const { className } = props;

  return (
    <div className={`close ${className || ""}`}>
      <div className="overlap-group3-13">
        <img className="vector-106" src="/img/vector-40@2x.png" />
        <img className="vector-107" src="/img/vector-119@2x.svg" />
      </div>
    </div>
  );
}

export default Close;
