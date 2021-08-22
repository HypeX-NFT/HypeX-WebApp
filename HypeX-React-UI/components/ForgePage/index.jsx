import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import ArrowForwardIos2 from "../ArrowForwardIos2";
import Group461 from "../Group461";
import "./ForgePage.css";

function ForgePage(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    airJordanFragment,
    forgingFactory,
    x12,
    lv32,
    yeezy2,
    spanText,
    spanText2,
    forge,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    insurance,
    text4,
    x30Hxc,
    spanText9,
    spanText10,
    upgradeToLv2,
    text5,
    arrowForwardIos2Props,
    arrowForwardIos22Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="forge-page screen">
        <div className="flex-row-19">
          <div className="overlap-group-7">
            <Link to="/home-limited-box">
              <img className="hypexlogoedited-removebg-1-2" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-1 valign-text-middle chakrapetch-medium-white-21px">
                {fragmentFactory}
              </div>
            </Link>
          </div>
          <Link to="/stake-info-page">
            <div className="stake-1 valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
          </Link>
          <Link to="/loan">
            <div className="loan-1 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
          </Link>
          <Link to="/display-nfts">
            <div className="display-nf-ts-1 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
          </Link>
          <div className="overlap-group3-3">
            <img className="profile-pic-2" src={profilePic} />
            <div className="ellipse-40-2 border-1px-neon-blue"></div>
            <div className="ellipse-42-1 border-4px-neon-blue"></div>
            <div className="ellipse-41-2 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
              <div className="ellipse-43-1 border-0-5px-neon-blue"></div>
            </a>
          </div>
          <ShoppingBag />
        </div>
        <div className="flex-row-20">
          <div className="flex-col-13">
            <div className="overlap-group1-3">
              <div className="air-jordan-fragment valign-text-middle chakrapetch-semi-bold-white-30px">
                {airJordanFragment}
              </div>
              <div className="forging-factory valign-text-middle chakrapetch-semi-bold-white-30px">
                {forgingFactory}
              </div>
              <ArrowForwardIos2 className={arrowForwardIos2Props.className} />
              <ArrowForwardIos2 className={arrowForwardIos22Props.className} />
              <img className="x1-2" src={x12} />
              <img className="lv3-2" src={lv32} />
              <img className="yeezy-2" src={yeezy2} />
            </div>
            <div className="x60-success-rate chakrapetch-normal-white-19px-2">
              <span className="span0">{spanText}</span>
              <span className="chakrapetch-normal-white-19px">{spanText2}</span>
            </div>
            <div className="overlap-group5-4">
              <div className="forge valign-text-middle chakrapetch-medium-white-28px">{forge}</div>
              <img className="union-2" src="/img/union-15@2x.svg" />
              <img className="line-70-2" src="/img/line-70-2@2x.svg" />
              <img className="line-71-2" src="/img/line-71-2@2x.svg" />
              <img className="line-72-2" src="/img/line-72-2@2x.svg" />
              <img className="line-73-2" src="/img/line-72-2@2x.svg" />
            </div>
            <div className="flex-row-21">
              <img className="rectangle-3" src="/img/rectangle-3@2x.svg" />
              <div className="flex-col-14">
                <div className="cost-40-hxc rubik-medium-white-24px-2">
                  <span className="rubik-medium-white-24px">{spanText3}</span>
                  <span className="span1">{spanText4}</span>
                  <span className="rubik-medium-white-24px">{spanText5}</span>
                </div>
                <div className="overlap-group2-7">
                  <img className="union-3" src="/img/union-14@2x.svg" />
                  <div className="cost-20-hxc rubik-medium-white-16px-2">
                    <span className="rubik-medium-white-16px">{spanText6}</span>
                    <span className="rubik-medium-bright-turquoise-16px">{spanText7}</span>
                    <span className="rubik-medium-white-16px">{spanText8}</span>
                  </div>
                  <div className="insurance valign-text-middle">{insurance}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col-15">
            <div className="flex-row-22">
              <div className="frame-26">
                <div className="overlap-group10-3">
                  <img className="vector-80" src="/img/vector-32@2x.svg" />
                  <img className="vector-81" src="/img/vector-33@2x.svg" />
                  <img className="vector-82" src="/img/vector-34@2x.svg" />
                  <img className="vector-83" src="/img/vector-35@2x.svg" />
                </div>
              </div>
              <div className="text-4 chakrapetch-semi-bold-white-18px">{text4}</div>
            </div>
            <div className="overlap-group4-4">
              <div className="buy-button"></div>
              <div className="x30-hxc chakrapetch-normal-white-16px">{x30Hxc}</div>
              <div className="buy-button-1"></div>
              <Group461 />
            </div>
            <div className="x80-durability chakrapetch-normal-white-16px-2">
              <span className="span0-1">{spanText9}</span>
              <span className="chakrapetch-normal-white-16px">{spanText10}</span>
            </div>
            <div className="overlap-group6-5">
              <div className="upgrade-to-lv2 valign-text-middle chakrapetch-medium-white-14px">{upgradeToLv2}</div>
            </div>
            <p className="text-5 chakrapetch-medium-white-14px">{text5}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgePage;
