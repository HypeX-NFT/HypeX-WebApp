import React from "react";
import Close from "../Close";
import "./StakeSuccess.css";

function StakeSuccess(props) {
  const {
    text55,
    open,
    file_16010789496714,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    image141,
    image161,
    closeProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="stake-success screen">
        <div className="overlap-group-36">
          <img className="group-458-2" src="/img/group-458@2x.svg" />
          <img className="rectangle-408" src="/img/rectangle-409@1x.svg" />
          <div className="text-55 chakrapetch-semi-bold-white-35px">{text55}</div>
          <Close className={closeProps.className} />
          <div className="open-2 valign-text-middle chakrapetch-semi-bold-white-30px">{open}</div>
          <img className="line-75-5" src="/img/line-77-3@2x.svg" />
          <img className="line-76-5" src="/img/line-78-3@2x.svg" />
          <img className="file1601078949671-4" src={file_16010789496714} />
          <div className="text-56 valign-text-middle robotomono-medium-white-20px-2">
            <span>
              <span className="span-8 robotomono-medium-white-20px">{spanText}</span>
              <span className="span-8 robotomono-medium-razzle-dazzle-rose-20px">{spanText2}</span>
              <span className="span-8 robotomono-medium-white-20px">{spanText3}</span>
              <span className="span-8 robotomono-medium-razzle-dazzle-rose-20px">{spanText4}</span>
              <span className="span-8 robotomono-medium-white-20px">{spanText5}</span>
            </span>
          </div>
          <img className="image-14-1" src={image141} />
          <img className="image-16-1" src={image161} />
        </div>
      </div>
    </div>
  );
}

export default StakeSuccess;
