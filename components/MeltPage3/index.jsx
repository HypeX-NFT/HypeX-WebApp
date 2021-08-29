import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import Group461 from "../Group461";
import "./MeltPage3.css";

function MeltPage3(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    text65,
    text66,
    file_16010748630162,
    lvCardholder,
    file_16010746003623,
    x30Hxc,
    spanText,
    spanText2,
    upgradeToLv2,
    text67,
    supremeCardholder,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    melt,
    spanText8,
    spanText9,
    spanText10,
    group461Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="melt-page2 screen">
        <div className="flex-row-145">
          <div className="overlap-group2-32">
            <Link to="/home-limited-box">
              <img className="hypexlogoedited-removebg-1-16" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-12 valign-text-middle chakrapetch-medium-white-21px">
                {fragmentFactory}
              </div>
            </Link>
          </div>
          <Link to="/stake-info-page">
            <div className="stake-12 valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
          </Link>
          <Link to="/loan">
            <div className="loan-12 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
          </Link>
          <Link to="/display-nfts">
            <div className="display-nf-ts-10 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
          </Link>
          <Link to="/wallet">
            <div className="overlap-group1-27">
              <img className="profile-pic-22" src={profilePic} />
              <div className="ellipse-40-16 border-1px-neon-blue"></div>
              <div className="ellipse-42-10 border-4px-neon-blue"></div>
              <div className="ellipse-41-16 border-0-8px-neon-blue"></div>
              <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
                <div className="ellipse-43-10 border-0-5px-neon-blue"></div>
              </a>
            </div>
          </Link>
          <ShoppingBag />
        </div>
        <div className="flex-col-103">
          <div className="flex-row-146">
            <div className="text-65 valign-text-middle chakrapetch-semi-bold-white-30px">{text65}</div>
            <div className="frame-25-2">
              <div className="overlap-group6-24">
                <img className="vector-120" src="/img/vector-68@2x.svg" />
                <img className="vector-121" src="/img/vector-69@2x.svg" />
                <img className="vector-122" src="/img/vector-70@2x.svg" />
                <img className="vector-123" src="/img/vector-71@2x.svg" />
              </div>
            </div>
            <div className="text-66 chakrapetch-semi-bold-white-18px">{text66}</div>
          </div>
          <div className="flex-row-147">
            <img className="vector-21-9" src="/img/vector-21-10@2x.svg" />
            <img className="file1601074863016-2-5" src={file_16010748630162} />
            <img className="lv-cardholder-2" src={lvCardholder} />
            <img className="file1601074600362-3-6" src={file_16010746003623} />
            <img className="vector-20-9" src="/img/vector-20-10@2x.svg" />
            <div className="flex-col-104">
              <div className="overlap-group3-26">
                <div className="buy-button-6"></div>
                <div className="x30-hxc-3 chakrapetch-normal-white-16px">{x30Hxc}</div>
                <div className="buy-button-7"></div>
                <Group461 className={group461Props.className} />
              </div>
              <div className="x80-durability-3 chakrapetch-normal-white-16px-2">
                <span className="chakrapetch-normal-razzle-dazzle-rose-16px">{spanText}</span>
                <span className="chakrapetch-normal-white-16px">{spanText2}</span>
              </div>
              <div className="overlap-group4-40">
                <div className="upgrade-to-lv2-3 valign-text-middle chakrapetch-medium-white-14px">{upgradeToLv2}</div>
              </div>
              <p className="text-67 chakrapetch-medium-white-14px">{text67}</p>
            </div>
          </div>
          <div className="supreme-cardholder valign-text-middle chakrapetch-semi-bold-white-30px">
            {supremeCardholder}
          </div>
          <div className="text-64 chakrapetch-normal-white-19px-2">
            <span className="chakrapetch-normal-white-19px">{spanText3}</span>
            <span className="chakrapetch-normal-razzle-dazzle-rose-19px">{spanText4}</span>
            <span className="chakrapetch-normal-white-19px">{spanText5}</span>
          </div>
          <div className="x60-success-rate-3 chakrapetch-normal-white-19px-2">
            <span className="chakrapetch-normal-razzle-dazzle-rose-19px">{spanText6}</span>
            <span className="chakrapetch-normal-white-19px">{spanText7}</span>
          </div>
          <div className="overlap-group-38">
            <div className="melt-2 valign-text-middle chakrapetch-medium-white-28px">{melt}</div>
            <img className="union-32" src="/img/union-30@2x.svg" />
            <img className="line-70-6" src="/img/line-70-5@2x.svg" />
            <img className="line-71-6" src="/img/line-71-6@2x.svg" />
            <img className="line-72-6" src="/img/line-72-3@2x.svg" />
            <img className="line-73-6" src="/img/line-73-3@2x.svg" />
          </div>
          <div className="cost-40-hxc-3 rubik-medium-white-24px-2">
            <span className="rubik-medium-white-24px">{spanText8}</span>
            <span className="rubik-medium-razzle-dazzle-rose-24px">{spanText9}</span>
            <span className="rubik-medium-white-24px">{spanText10}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeltPage3;
