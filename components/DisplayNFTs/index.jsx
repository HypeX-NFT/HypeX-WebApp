import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import "./DisplayNFTs.css";

function DisplayNFTs(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    text16,
    image60,
    file_16010789496713,
    image59,
    name,
    text15,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="display-nfts screen">
        <div className="flex-row-68">
          <div className="overlap-group1-9">
            <Link to="/home-limited-box">
              <img className="hypexlogoedited-removebg-1-8" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-4 valign-text-middle chakrapetch-medium-white-21px">
                {fragmentFactory}
              </div>
            </Link>
          </div>
          <Link to="/stake-info-page">
            <div className="stake-4 valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
          </Link>
          <Link to="/loan">
            <div className="loan-4 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
          </Link>
          <div className="overlap-group3-11">
            <img className="union-6" src="/img/union-32@2x.svg" />
            <div className="display-nf-ts-4 valign-text-middle chakrapetch-medium-bright-turquoise-21px">
              {displayNfts}
            </div>
          </div>
          <Link to="/wallet">
            <div className="overlap-group2-17">
              <img className="profile-pic-8" src={profilePic} />
              <div className="ellipse-40-8 border-1px-neon-blue"></div>
              <div className="ellipse-42-4 border-4px-neon-blue"></div>
              <div className="ellipse-41-8 border-0-8px-neon-blue"></div>
              <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
                <div className="ellipse-43-4 border-0-5px-neon-blue"></div>
              </a>
            </div>
          </Link>
          <ShoppingBag />
        </div>
        <div className="text-16 valign-text-middle chakrapetch-bold-white-28px">{text16}</div>
        <div className="flex-row-69">
          <div className="overlap-group4-25">
            <img className="image-60-1" src={image60} />
            <img className="rectangle-454" src="/img/rectangle-454@2x.svg" />
            <img className="vector-21-3" src="/img/vector-21-4@2x.svg" />
          </div>
          <img className="file1601078949671-3-1" src={file_16010789496713} />
          <div className="overlap-group-19">
            <img className="image-59-1" src={image59} />
            <img className="vector-20-3" src="/img/vector-20-4@2x.svg" />
            <img className="rectangle-453" src="/img/rectangle-453@2x.svg" />
          </div>
        </div>
        <div className="name-17 valign-text-middle chakrapetch-bold-white-36px">{name}</div>
        <Link to="/connected-decentraland">
          <a href="javascript:ShowOverlay('connected-decentraland', 'animate-appear');">
            <div className="group-460">
              <div className="overlap-group6-11">
                <img className="vector-12-1" src="/img/vector-12-1@2x.svg" />
                <img className="vector-13-1" src="/img/vector-13-1@2x.svg" />
                <div className="text-15 valign-text-middle chakrapetch-bold-mirage-28px">{text15}</div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default DisplayNFTs;
