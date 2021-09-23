import React from "react";
import "./Icon.css";

function Icon(props) {
  const { path2, path3 } = props;

  return (
    <div className="icon-12">
      <div className="overlap-group-31">
        <div className="rectangle-8 border-1-9px-regent-gray"></div>
        <img className="path-18" src="/img/path-6@2x.png" />
        <img className="path-19" src={path2} />
        <img className="path-20" src={path3} />
      </div>
    </div>
  );
}

export default Icon;
