import React from "react";
import Icon from "../Icon";
import "./Date.css";

function Date(props) {
  const { className, iconProps } = props;

  return (
    <div className={`date-9 ${className || ""}`}>
      <Icon path2={iconProps.path2} path3={iconProps.path3} />
      <div className="sep-16-2019 poppins-medium-fuscous-gray-14-9px">SEP 16, 2019</div>
    </div>
  );
}

export default Date;
