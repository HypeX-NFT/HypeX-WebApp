import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import "./MerchandisePage.css";

function MerchandisePage(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    image63,
    x,
    image62,
    text71,
    lvCardholder,
    name,
    text70,
    youHave,
    lvCardholder2,
    spanText,
    spanText2,
    lvFragment,
    spanText3,
    spanText4,
    melt,
    forge,
    text72,
    with5LvFragments,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="merchandise-page screen">
        <div className="flex-row-148">
          <div className="overlap-group-41">
            <Link to="/home-limited-box">
              <img className="hypexlogoedited-removebg-1-17" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-13 valign-text-middle chakrapetch-medium-white-21px">
                {fragmentFactory}
              </div>
            </Link>
          </div>
          <Link to="/stake-info-page">
            <div className="stake-13 valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
          </Link>
          <Link to="/loan">
            <div className="loan-13 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
          </Link>
          <Link to="/display-nfts">
            <div className="display-nf-ts-11 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
          </Link>
          <Link to="/wallet">
            <div className="overlap-group3-28">
              <img className="profile-pic-23" src={profilePic} />
              <div className="ellipse-40-17 border-1px-neon-blue"></div>
              <div className="ellipse-42-11 border-4px-neon-blue"></div>
              <div className="ellipse-41-17 border-0-8px-neon-blue"></div>
              <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
                <div className="ellipse-43-11 border-0-5px-neon-blue"></div>
              </a>
            </div>
          </Link>
          <ShoppingBag />
        </div>
        <div className="flex-row-149">
          <div className="flex-col-106">
            <div className="overlap-group4-41">
              <img className="image-63-2" src={image63} />
              <div className="x valign-text-middle">{x}</div>
              <img className="image-62" src={image62} />
            </div>
            <div className="text-71 valign-text-middle chakrapetch-bold-white-24px">{text71}</div>
            <img className="lv-cardholder-3" src={lvCardholder} />
          </div>
          <div className="flex-col-107">
            <div className="name-25 valign-text-middle chakrapetch-bold-white-24px">{name}</div>
            <div className="text-70 chakrapetch-normal-white-18px">{text70}</div>
            <div className="you-have valign-text-middle chakrapetch-bold-white-24px">{youHave}</div>
            <div className="flex-row-150">
              <img className="lv-cardholder-4" src={lvCardholder2} />
              <div className="text-73 valign-text-middle chakrapetch-medium-white-18px-2">
                <span>
                  <span className="span-11 chakrapetch-medium-white-18px">{spanText}</span>
                  <span className="span-11 chakrapetch-medium-bright-turquoise-18px">{spanText2}</span>
                </span>
              </div>
            </div>
            <div className="overlap-group2-35">
              <img className="lv-fragment" src={lvFragment} />
              <div className="lv-fragments-x10 valign-text-middle chakrapetch-medium-white-18px-2">
                <span>
                  <span className="span-11 chakrapetch-medium-white-18px">{spanText3}</span>
                  <span className="span-11 chakrapetch-medium-bright-turquoise-18px">{spanText4}</span>
                </span>
              </div>
            </div>
            <div className="flex-row-151">
              <Link to="/melt-page">
                <div className="group-459">
                  <div className="overlap-group6-25">
                    <div className="group-458-3">
                      <div className="overlap-group5-20">
                        <img className="line-72-7" src="/img/line-72-8@2x.svg" />
                        <img className="line-73-7" src="/img/line-72-2@2x.svg" />
                        <img className="union-33" src="/img/union-63@2x.svg" />
                        <img className="line-70-7" src="/img/line-70-8@2x.svg" />
                        <img className="line-71-7" src="/img/line-72-2@2x.svg" />
                      </div>
                    </div>
                    <div className="melt-3 valign-text-middle chakrapetch-medium-white-28px">{melt}</div>
                  </div>
                </div>
              </Link>
              <div className="overlap-group1-30">
                <Link to="/forge-page">
                  <div className="group-457">
                    <div className="overlap-group5-20">
                      <img className="line-72-7" src="/img/line-70-3@2x.svg" />
                      <img className="line-73-7" src="/img/line-72-3@2x.svg" />
                      <img className="union-33" src="/img/union-62@2x.svg" />
                      <img className="line-70-7" src="/img/line-70-7@2x.svg" />
                      <img className="line-71-7" src="/img/line-72-3@2x.svg" />
                    </div>
                  </div>
                </Link>
                <Link to="/forge-page">
                  <div className="forge-1 valign-text-middle chakrapetch-medium-white-28px">{forge}</div>
                </Link>
              </div>
            </div>
            <div className="flex-row-152">
              <div className="text-72 chakrapetch-normal-white-19px">{text72}</div>
              <div className="with-5-lv-fragments chakrapetch-normal-white-19px">{with5LvFragments}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchandisePage;
