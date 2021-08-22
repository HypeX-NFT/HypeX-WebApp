import React from "react";
import Icon2 from "../Icon2";
import "./Date.css";

function Date(props) {
  const { className, icon2Props } = props;

  return (
    <div className={`date-9 ${className || ""}`}>
      <Icon2 className={icon2Props.className} />
      <div className="sep-16-2019 poppins-medium-fuscous-gray-14-9px">SEP 16, 2019</div>
    </div>
  );
}

export default Date;
