import React from "react";
import Close from "../Close";
import "./LoanSuccess.css";

function LoanSuccess(props) {
  const {
    congratulations,
    youDeposited,
    open,
    file_16010789496715,
    spanText,
    spanText2,
    spanText3,
    image142,
    image162,
    closeProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="loan-success screen">
        <div className="overlap-group-31">
          <img className="group-458-1" src="/img/group-458-1@2x.svg" />
          <img className="rectangle-409" src="/img/rectangle-409@1x.svg" />
          <div className="congratulations-1 chakrapetch-semi-bold-white-35px">{congratulations}</div>
          <div className="you-deposited chakrapetch-semi-bold-white-35px">{youDeposited}</div>
          <Close className={closeProps.className} />
          <div className="open-1 valign-text-middle chakrapetch-semi-bold-white-30px">{open}</div>
          <img className="line-77-5" src="/img/line-77-3@2x.svg" />
          <img className="line-78-4" src="/img/line-78-3@2x.svg" />
          <img className="file1601078949671-5" src={file_16010789496715} />
          <div className="text-51 valign-text-middle robotomono-medium-white-20px-2">
            <span>
              <span className="span-7 robotomono-medium-white-20px">{spanText}</span>
              <span className="span-7 robotomono-medium-razzle-dazzle-rose-20px">{spanText2}</span>
              <span className="span-7 robotomono-medium-white-20px">{spanText3}</span>
            </span>
          </div>
          <img className="image-14-2" src={image142} />
          <img className="image-16-2" src={image162} />
        </div>
      </div>
    </div>
  );
}

export default LoanSuccess;
