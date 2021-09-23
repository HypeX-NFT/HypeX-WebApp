import React from "react";
import { Link } from "react-router-dom";
import "./Stake.css";

function Stake(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    stake,
    fragmentFactory,
    nftMoorph,
    nftForge,
    union,
    loan,
    displayNfts,
    profilePic,
    shopping_Bag,
    text37,
    image60,
    rectangle454,
    vector21,
    file_16010789496713,
    image59,
    vector20,
    rectangle453,
    name,
    line109,
    number,
    text42,
    text43,
    quantity,
    text38,
    price,
    vector22,
    spanText,
    spanText2,
    text41,
    overlapGroup9,
    stake2,
    yourStake,
    rectangle431,
    text39,
    price2,
    viewFullStatus,
    x13480ToTier3,
    arrow_Forward,
    totalPool,
    rectangle432,
    estimatedApy,
    percent,
    text40,
    price3,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="stake-9 screen">
        <div className="flex-row-105">
          <div className="overlap-group1-25">
            <img className="hypexlogoedited-removebg-1-12" src={hype_X_Logo_EditedRemovebg1} />
            <div className="stake-10 valign-text-middle chakrapetch-normal-bright-turquoise-25px">{stake}</div>
            <Link to="/fragment-factory">
              <div className="fragment-factory-10 valign-text-middle chakrapetch-normal-white-25px">
                {fragmentFactory}
              </div>
            </Link>
            <div className="nft-moorph-8 valign-text-middle chakrapetch-normal-white-25px">{nftMoorph}</div>
            <div className="nft-forge-8 valign-text-middle chakrapetch-normal-white-25px">{nftForge}</div>
            <img className="union-30" src={union} />
          </div>
          <div className="overlap-group8-6 chakrapetch-normal-white-25px">
            <Link to="/loan">
              <div className="loan-10 valign-text-middle">{loan}</div>
            </Link>
          <div className="display-nf-ts valign-text-middle">{displayNfts}</div>
          </div>
          <div className="overlap-group2-19">
            <img className="profile-pic-19" src={profilePic} />
            <div className="ellipse-40-12 border-1px-neon-blue"></div>
            <div className="ellipse-42-7 border-4px-neon-blue"></div>
            <div className="ellipse-41-12 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown', 'animate-appear');">
              <div className="ellipse-43-7 border-0-5px-neon-blue"></div>
            </a>
          </div>
          <img className="shoppingbag-8" src={shopping_Bag} />
        </div>
        <div className="flex-row-106">
          <div className="flex-col-69">
            <div className="flex-col-70">
              <div className="text-37 valign-text-middle chakrapetch-bold-white-28px">{text37}</div>
              <div className="flex-row-107">
                <div className="overlap-group-34">
                  <img className="image-60" src={image60} />
                  <img className="rectangle-454-1" src={rectangle454} />
                  <img className="vector-21-4" src={vector21} />
                </div>
                <img className="file1601078949671-3-2" src={file_16010789496713} />
                <div className="overlap-group7-7">
                  <img className="image-59-1" src={image59} />
                  <img className="vector-20-4" src={vector20} />
                  <img className="rectangle-453-1" src={rectangle453} />
                </div>
              </div>
              <div className="name-8 valign-text-middle chakrapetch-bold-white-36px">{name}</div>
            </div>
            <div className="flex-row-108">
              <div className="overlap-group10-3">
                <div className="overlap-group5-13 chakrapetch-bold-white-28px">
                  <img className="line-109-1" src={line109} />
                  <div className="number-16 valign-text-middle">{number}</div>
                  <div className="text-42 valign-text-middle">{text42}</div>
                  <div className="text-43 valign-text-middle">{text43}</div>
                </div>
                <div className="quantity-1 valign-text-middle chakrapetch-medium-white-18px">{quantity}</div>
              </div>
              <div className="flex-col-71">
                <div className="text-38 valign-text-middle chakrapetch-medium-white-18px">{text38}</div>
                <div className="price-16 valign-text-middle chakrapetch-semi-bold-white-36px">{price}</div>
              </div>
            </div>
            <div className="flex-col-72">
              <div className="overlap-group4-14">
                <img className="vector-22-2" src={vector22} />
                <div className="pairs-ust-hxc chakrapetch-normal-white-24px">
                  <span className="chakrapetch-normal-white-24px">{spanText}</span>
                  <span className="chakrapetch-semi-bold-white-24px">{spanText2}</span>
                </div>
              </div>
              <div className="text-41 valign-text-middle chakrapetch-medium-white-18px">{text41}</div>
              <div className="overlap-group9-3" style={{ backgroundImage: `url(${overlapGroup9})` }}>
                <div className="stake-11 valign-text-middle chakrapetch-bold-mirage-28px">{stake2}</div>
              </div>
            </div>
          </div>
          <div className="flex-col-73">
            <div className="your-stake valign-text-middle chakrapetch-bold-white-24px">{yourStake}</div>
            <div className="overlap-group6-14">
              <img className="rectangle-431-2" src={rectangle431} />
              <div className="text-39 valign-text-middle chakrapetch-normal-white-18px">{text39}</div>
              <div className="price-17 chakrapetch-medium-white-48px">{price2}</div>
              <div className="view-full-status valign-text-middle chakrapetch-medium-white-18px">{viewFullStatus}</div>
              <div className="x13480-to-tier-3 valign-text-middle chakrapetch-medium-white-14px">{x13480ToTier3}</div>
              <img className="arrowforward" src={arrow_Forward} />
              <div className="rectangle-455-1"></div>
              <div className="rectangle-456-1"></div>
            </div>
            <div className="total-pool valign-text-middle chakrapetch-bold-white-24px">{totalPool}</div>
            <div className="overlap-group3-18">
              <img className="rectangle-432-1" src={rectangle432} />
              <div className="estimated-apy chakrapetch-normal-white-18px">{estimatedApy}</div>
              <div className="percent-1 chakrapetch-semi-bold-white-24px">{percent}</div>
              <div className="text-40 valign-text-middle chakrapetch-medium-white-18px">{text40}</div>
              <div className="price-18 chakrapetch-normal-white-48px">{price3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stake;
