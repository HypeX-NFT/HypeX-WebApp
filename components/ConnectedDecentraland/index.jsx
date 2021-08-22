import React from "react";
import Close from "../Close";
import ImageFrame from "../ImageFrame";
import "./ConnectedDecentraland.css";

function ConnectedDecentraland(props) {
  const { congratulations, text19, image32, open } = props;

  return (
    <div className="container-center-horizontal">
      <div className="connected-decentraland screen">
        <div className="overlap-group4-27">
          <div className="overlap-group1-11">
            <div className="congratulations chakrapetch-semi-bold-white-35px">{congratulations}</div>
            <div className="text-19 chakrapetch-semi-bold-white-35px">{text19}</div>
            <img className="line-77-3" src="/img/line-77-3@2x.svg" />
            <img className="line-78-3" src="/img/line-78-3@2x.svg" />
          </div>
          <Close />
        </div>
        <div className="overlap-group2-19">
          <ImageFrame />
          <img className="image-32" src={image32} />
        </div>
        <div className="overlap-group-21">
          <div className="open valign-text-middle chakrapetch-semi-bold-white-30px">{open}</div>
        </div>
      </div>
    </div>
  );
}

export default ConnectedDecentraland;
