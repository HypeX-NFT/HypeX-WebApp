import React from "react";
import { Link } from "react-router-dom";
import "./HomeLimitedBox2.css";

function HomeLimitedBox2(props) {
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
    soldOut,
    rectangle483,
    unbox2,
    rectangle484,
    price2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-limited-box screen">
        <div className="flex-row-47">
          <div className="overlap-group6-9 chakrapetch-normal-white-25px">
            <img className="hypexlogoedited-removebg-1-4" src={hype_X_Logo_EditedRemovebg1} />
            <Link to="/stake-info-page">
              <div className="stake-4 valign-text-middle chakrapetch-normal-white-25px">{stake}</div>
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-6 valign-text-middle chakrapetch-normal-white-25px">{fragmentFactory}</div>
            </Link>
            <Link to="/morph-page">
              <div className="nft-moorph-4 valign-text-middle chakrapetch-normal-white-25px">{nftMoorph}</div>
            </Link>
            <Link to="/forge-page">
              <div className="nft-forge-4 valign-text-middle chakrapetch-normal-white-25px">{nftForge}</div>
            </Link>
          </div>
          <Link to="/loan">
            <div className="loan-4 valign-text-middle chakrapetch-normal-white-25px">{loan}</div>
          </Link>
          <Link to="/wallet">
          <div className="overlap-group4-11">
            <img className="profile-pic-11" src={profilePic} />
            <div className="ellipse-40-4 border-1px-neon-blue"></div>
            <div className="ellipse-42-4 border-4px-neon-blue"></div>
            <div className="ellipse-41-4 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown', 'animate-appear');">
              <div className="ellipse-43-4 border-0-5px-neon-blue"></div>
            </a>
          </div>
          </Link>
          <img className="shoppingbag-4" src={shopping_Bag} />
        </div>
        <div className="flex-col-25">
          <div className="overlap-group7-2">
            <img className="banner-version-2-1-1" src={bannerVersion21} />
            <div className="ellipse-36-1"></div>
            <div className="ellipse-37-1"></div>
            <div className="ellipse-38-1"></div>
            <img className="banner-version-4-1-1" src={bannerVersion41} />
          </div>
          <div className="overlap-group5-10">
            <div className="limited-box-1 valign-text-middle chakrapetch-bold-white-36px">{limitedBox}</div>
            <div className="nft-cards-1 valign-text-middle chakrapetch-bold-gun-powder-36px">{nftCards}</div>
            <div className="box-trigger-1"></div>
            <Link to='/nft-cards'>
              <div className="merchandise-trigger-1"></div>
            </Link>
            <img className="line-79-1" src={line79} />
          </div>
          <div className="flex-row-48">
            <div className="group-472-1">
              <img className="picture1-1-1" src={picture11} />
              <p className="drop-0-series-1-1 valign-text-middle chakrapetch-bold-mist-gray-16px">{drop0Series1}</p>
              <div className="x30100-l-eft-1 valign-text-middle chakrapetch-bold-mist-gray-16px">{x30100Left}</div>
              <img className="we-chat-image20210913162426-1-1" src={wechatImage_202109131624261} />
              <div className="overlap-group-11">
                <img className="rectangle-48-2" src={rectangle481} />
                <div className="unbox-1 valign-text-middle chakrapetch-semi-bold-white-28px">{unbox}</div>
                <img className="rectangle-48-3" src={rectangle482} />
                <div className="price-1 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price}</div>
              </div>
            </div>
            <div className="group-471-1">
              <img className="picture1-2-1" src={picture12} />
              <div className="overlap-group2-11 chakrapetch-bold-mist-gray-16px">
                <div className="x0100-l-eft-1 valign-text-middle">{x0100Left}</div>
                <p className="drop-0-series-0-1 valign-text-middle">{drop0Series0}</p>
              </div>
              <div className="overlap-group3-11">
                <img className="we-chat-image20210913162426-2-1" src={wechatImage_202109131624262} />
                <div className="rectangle-485-1"></div>
                <div className="sold-out valign-text-middle chakrapetch-bold-black-60px">{soldOut}</div>
              </div>
              <div className="overlap-group1-11">
                <img className="rectangle-48-2" src={rectangle483} />
                <div className="unbox-1 valign-text-middle chakrapetch-semi-bold-white-28px">{unbox2}</div>
                <img className="rectangle-48-3" src={rectangle484} />
                <div className="price-1 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLimitedBox2;
