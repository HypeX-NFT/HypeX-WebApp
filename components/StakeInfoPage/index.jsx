import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import "./StakeInfoPage.css";

function StakeInfoPage(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    text20,
    text21,
    stakeNow,
    image59,
    file_16010746003624,
    file_16010789496713,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="stake-info-page screen">
        <div className="flex-row-84">
          <div className="overlap-group3-14">
            <Link to="/home-limited-box">
              <img className="hypexlogoedited-removebg-1-10" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-5 valign-text-middle chakrapetch-medium-white-21px">
                {fragmentFactory}
              </div>
            </Link>
            <img className="union-7" src="/img/union-32@2x.svg" />
            <div className="stake-5 valign-text-middle chakrapetch-medium-bright-turquoise-21px">{stake}</div>
          </div>
          <div className="overlap-group-22">
            <Link to="/loan">
              <div className="loan-5 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
            </Link>
            <Link to="/display-nfts">
              <div className="display-nf-ts-5 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
            </Link>
          </div>
          <Link to="/wallet">
            <div className="overlap-group2-20">
              <img className="profile-pic-10" src={profilePic} />
              <div className="ellipse-40-10 border-1px-neon-blue"></div>
              <div className="ellipse-42-5 border-4px-neon-blue"></div>
              <div className="ellipse-41-10 border-0-8px-neon-blue"></div>
              <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
                <div className="ellipse-43-5 border-0-5px-neon-blue"></div>
              </a>
            </div>
          </Link>
          <ShoppingBag />
        </div>
        <div className="flex-row-85">
          <div className="flex-col-66">
            <div className="text-20 valign-text-middle chakrapetch-bold-white-48px">{text20}</div>
            <div className="text-21 chakrapetch-normal-white-18px">{text21}</div>
            <Link to="/stake">
              <div className="group-462">
                <div className="overlap-group5-9">
                  <div className="overlap-group4-28">
                    <img className="line-70-4" src="/img/line-70-4@2x.svg" />
                    <img className="line-72-4" src="/img/line-72-4@2x.svg" />
                  </div>
                  <div className="stake-now valign-text-middle chakrapetch-medium-bright-turquoise-24-4px">
                    {stakeNow}
                  </div>
                  <div className="overlap-group6-13">
                    <img className="line-71-4" src="/img/line-71-4@2x.svg" />
                    <img className="line-73-4" src="/img/line-73-4@2x.svg" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="overlap-group1-15">
            <img className="image-59-2" src={image59} />
            <img className="rectangle-453-1" src="/img/rectangle-453-1@1x.svg" />
            <img className="file1601074600362-4" src={file_16010746003624} />
            <img className="rectangle-454-1" src="/img/rectangle-454-1@2x.svg" />
            <img className="file1601078949671-3-2" src={file_16010789496713} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakeInfoPage;
