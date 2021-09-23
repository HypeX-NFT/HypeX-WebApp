import React from "react";
import { Link } from "react-router-dom";
import "./HomeLimitedBox.css";

function HomeLimitedBox(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    stake,
    fragmentFactory,
    nftMoorph,
    nftForge,
    loan,
    profilePic,
    shopping_Bag,
    bannerVersion21,
    bannerVersion41,
    limitedBox,
    nftCards,
    line79,
    picture11,
    drop0Series1,
    x30100Left,
    wechatImage_202109131624261,
    rectangle481,
    unbox,
    rectangle482,
    price,
    picture12,
    x0100Left,
    drop0Series0,
    wechatImage_202109131624262,
    title,
    rectangle483,
    unbox2,
    rectangle484,
    price2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-limited-box-2 screen">
        <div className="flex-row-43">
          {/* <div className="overlap-group5-8 chakrapetch-normal-white-25px"> */}
            <img className="hypexlogoedited-removebg-1-2" src={hype_X_Logo_EditedRemovebg1} />
            <div className="stake-2 valign-text-middle">{stake}</div>
            <Link to="/fragment-factory">
            <div className="fragment-factory-4 valign-text-middle">{fragmentFactory}</div>
            </Link>
            <Link to="/morph-page">
            <div className="nft-moorph-2 valign-text-middle">{nftMoorph}</div>
            </Link>
            <Link to="/forge-page">
            <div className="nft-forge-2 valign-text-middle">{nftForge}</div>
            </Link>
          {/* </div> */}
          <Link to="loan">
          <div className="loan-2 valign-text-middle chakrapetch-normal-white-25px">{loan}</div>
          </Link>
          <Link to="/wallet">
          <div className="overlap-group4-9">
            <img className="profile-pic-9" src={profilePic} />
            <div className="ellipse-40-2 border-1px-neon-blue"></div>
            <div className="ellipse-42-2 border-4px-neon-blue"></div>
            <div className="ellipse-41-2 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown', 'animate-appear');">
              <div className="ellipse-43-2 border-0-5px-neon-blue"></div>
            </a>
          </div>
          </Link>
          <img className="shoppingbag-2" src={shopping_Bag} />
        </div>
        <div className="flex-col-23">
          <div className="overlap-group7-1">
            <img className="banner-version-2-1" src={bannerVersion21} />
            <div className="ellipse-36"></div>
            <div className="ellipse-37"></div>
            <div className="ellipse-38"></div>
            <img className="banner-version-4-1" src={bannerVersion41} />
          </div>
          <div className="overlap-group6-8">
            <div className="limited-box valign-text-middle chakrapetch-bold-white-36px">{limitedBox}</div>
            <div className="nft-cards valign-text-middle chakrapetch-bold-gun-powder-36px">{nftCards}</div>
            <div className="box-trigger"></div>
            <div className="merchandise-trigger"></div>
            <img className="line-79" src={line79} />
          </div>
          <div className="flex-row-44">
            <div className="group-472">
              <img className="picture1-1" src={picture11} />
              <p className="drop-0-series-1 valign-text-middle chakrapetch-bold-mist-gray-16px">{drop0Series1}</p>
              <div className="x30100-l-eft valign-text-middle chakrapetch-bold-mist-gray-16px">{x30100Left}</div>
              <img className="we-chat-image20210913162426-1" src={wechatImage_202109131624261} />
              <div className="overlap-group-9">
                <img className="rectangle-48" src={rectangle481} />
                <div className="unbox valign-text-middle chakrapetch-semi-bold-white-28px">{unbox}</div>
                <img className="rectangle-48-1" src={rectangle482} />
                <div className="price valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price}</div>
              </div>
            </div>
            <div className="group-471">
              <img className="picture1-2" src={picture12} />
              <div className="overlap-group1-9 chakrapetch-bold-mist-gray-16px">
                <div className="x0100-l-eft valign-text-middle">{x0100Left}</div>
                <p className="drop-0-series-0 valign-text-middle">{drop0Series0}</p>
              </div>
              <div className="overlap-group2-9">
                <img className="we-chat-image20210913162426-2" src={wechatImage_202109131624262} />
                <div className="rectangle-485"></div>
                <h1 className="title valign-text-middle chakrapetch-bold-black-60px">{title}</h1>
              </div>
              <div className="overlap-group3-9">
                <img className="rectangle-48" src={rectangle483} />
                <div className="unbox valign-text-middle chakrapetch-semi-bold-white-28px">{unbox2}</div>
                <img className="rectangle-48-1" src={rectangle484} />
                <div className="price valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLimitedBox;
