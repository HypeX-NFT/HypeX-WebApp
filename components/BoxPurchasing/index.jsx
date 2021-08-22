import React from "react";
import Close from "../Close";
import "./BoxPurchasing.css";

function BoxPurchasing(props) {
  const { text69, image62, image71, offcl_Box_Supreme_21, open, closeProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="box-purchasing screen">
        <div className="overlap-group-40">
          <img className="line-75-6" src="/img/line-77-3@2x.svg" />
          <img className="line-76-6" src="/img/line-78-3@2x.svg" />
        </div>
        <div className="flex-col-105">
          <div className="text-69 chakrapetch-semi-bold-white-35px">{text69}</div>
          <img className="image-6-2" src={image62} />
          <div className="overlap-group1-29">
            <img className="image-7-1" src={image71} />
            <img className="offcl-boxsupreme2-1" src={offcl_Box_Supreme_21} />
          </div>
          <div className="overlap-group2-34">
            <div className="open-3 valign-text-middle chakrapetch-semi-bold-white-30px">{open}</div>
          </div>
        </div>
        <Close className={closeProps.className} />
      </div>
    </div>
  );
}

export default BoxPurchasing;
