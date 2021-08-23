import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import StateActive from "../StateActive";
import "./FragmentFactory.css";

function FragmentFactory(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    fragmentFactory2,
    yeezy3,
    lv32,
    fragmentQuantity,
    number,
    text27,
    text29,
    x13,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    compose,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    center1,
    lv31,
    expectedQuantity,
    number2,
    text26,
    text28,
    stateActiveProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="fragment-factory-7 screen">
        <div className="flex-row-90">
          <div className="overlap-group3-16">
            <img className="union-9" src="/img/union-37@2x.svg" />
            <Link to="/home-limited-box">
              <img className="hypexlogoedited-removebg-1-12" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <div className="fragment-factory-8 valign-text-middle chakrapetch-medium-bright-turquoise-21px">
              {fragmentFactory}
            </div>
          </div>
          <Link to="/stake-info-page">
            <div className="stake-7 valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
          </Link>
          <Link to="/loan">
            <div className="loan-7 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
          </Link>
          <Link to="/display-nfts">
            <div className="display-nf-ts-7 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
          </Link>
          <Link to="/wallet">
            <div className="overlap-group2-22">
              <img className="profile-pic-12" src={profilePic} />
              <div className="ellipse-40-12 border-1px-neon-blue"></div>
              <div className="ellipse-42-7 border-4px-neon-blue"></div>
              <div className="ellipse-41-12 border-0-8px-neon-blue"></div>
              <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
                <div className="ellipse-43-7 border-0-5px-neon-blue"></div>
              </a>
            </div>
          </Link>
          <ShoppingBag />
        </div>
        <div className="flex-row-91">
          <div className="flex-col-69">
            <div className="fragment-factory-9 valign-text-middle chakrapetch-bold-white-48px">{fragmentFactory2}</div>
            <div className="overlap-group-24">
              <img className="yeezy-3" src={yeezy3} />
              <div className="original-fragment">
                <div className="overlap-group6-14">
                  <div className="rectangle-77"></div>
                  <img className="lv3-2-1" src={lv32} />
                </div>
              </div>
              <img className="union-10" src="/img/union-38@2x.svg" />
              <img className="union-11" src="/img/union-40@2x.svg" />
              <div className="fragment-quantity valign-text-middle chakrapetch-medium-white-18px">
                {fragmentQuantity}
              </div>
              <div className="number-20 valign-text-middle chakrapetch-bold-white-28px">{number}</div>
              <div className="text-27 valign-text-middle chakrapetch-bold-bright-turquoise-28px">{text27}</div>
              <div className="text-29 valign-text-middle chakrapetch-bold-bright-turquoise-28px">{text29}</div>
              <img className="x1-3-1" src={x13} />
              <img className="vector-20-5" src="/img/vector-20-6@2x.svg" />
              <img className="vector-21-5" src="/img/vector-21-6@2x.svg" />
            </div>
            <div className="overlap-group5-10">
              <div className="add-to-max-20 valign-text-middle chakrapetch-medium-white-18px-2">
                <span>
                  <span className="span-3 chakrapetch-medium-white-18px">{spanText}</span>
                  <span className="span-3 chakrapetch-medium-bright-turquoise-18px">{spanText2}</span>
                </span>
              </div>
              <img className="union-12" src="/img/union-43@2x.svg" />
            </div>
          </div>
          <div className="flex-col-70">
            <StateActive text30={stateActiveProps.text30} />
            <div className="cost-20-hxc-1 rubik-medium-white-16px-2">
              <span className="rubik-medium-white-16px">{spanText3}</span>
              <span className="rubik-medium-bright-turquoise-16px">{spanText4}</span>
              <span className="rubik-medium-white-16px">{spanText5}</span>
            </div>
            <div className="overlap-group4-30">
              <div className="compose valign-text-middle">{compose}</div>
              <img className="union-13" src="/img/union-42@2x.svg" />
              <img className="line-74-3" src="/img/line-74-3@2x.svg" />
              <img className="line-75-3" src="/img/line-75-3@2x.svg" />
              <img className="line-76-3" src="/img/line-72-2@2x.svg" />
              <img className="line-77-4" src="/img/line-72-2@2x.svg" />
            </div>
            <div className="cost-10-hxc">
              <span className="chakrapetch-medium-white-20px">{spanText6}</span>
              <span className="span-5">{spanText7}</span>
              <span className="chakrapetch-medium-white-20px">{spanText8}</span>
            </div>
            <div className="x50-success-rate">
              <span className="span-5">{spanText9}</span>
              <span className="chakrapetch-normal-white-24px">{spanText10}</span>
            </div>
          </div>
          <div className="flex-col-71">
            <div className="result">
              <div className="overlap-group7-11">
                <img className="center-1" src={center1} />
                <img className="lv3-1" src={lv31} />
              </div>
              <div className="rectangle-78"></div>
            </div>
            <div className="expected-quantity valign-text-middle chakrapetch-medium-white-18px">{expectedQuantity}</div>
            <div className="overlap-group1-17">
              <img className="union-14" src="/img/union-38@2x.svg" />
              <img className="union-15" src="/img/union-40@2x.svg" />
              <div className="number-21 valign-text-middle chakrapetch-bold-white-28px">{number2}</div>
              <div className="text-26 valign-text-middle chakrapetch-bold-bright-turquoise-28px">{text26}</div>
              <div className="text-28 valign-text-middle chakrapetch-bold-bright-turquoise-28px">{text28}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FragmentFactory;
