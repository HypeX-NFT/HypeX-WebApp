import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import ArrowForward from "../ArrowForward";
import "./Stake.css";

function Stake(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    text57,
    image60,
    file_16010789496713,
    image59,
    name,
    number,
    text62,
    text63,
    quantity,
    text58,
    price,
    spanText,
    spanText2,
    text61,
    stake2,
    yourStake,
    text59,
    price2,
    viewFullStatus,
    x13480ToTier3,
    totalPool,
    estimatedApy,
    percent,
    text60,
    price3,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="stake-9 screen">
        <div className="flex-row-141">
          <div className="overlap-group2-31">
            <Link to="/home-limited-box">
              <img className="hypexlogoedited-removebg-1-15" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-11 valign-text-middle chakrapetch-medium-white-21px">
                {fragmentFactory}
              </div>
            </Link>
            <img className="union-30" src="/img/union-32@2x.svg" />
            <div className="stake-10 valign-text-middle chakrapetch-medium-bright-turquoise-21px">{stake}</div>
          </div>
          <div className="overlap-group7-13">
            <Link to="/loan">
              <div className="loan-11 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
            </Link>
            <Link to="/display-nfts">
              <div className="display-nf-ts-9 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
            </Link>
          </div>
          <div className="overlap-group9-17">
            <img className="profile-pic-21" src={profilePic} />
            <div className="ellipse-40-15 border-1px-neon-blue"></div>
            <div className="ellipse-42-9 border-4px-neon-blue"></div>
            <div className="ellipse-41-15 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
              <div className="ellipse-43-9 border-0-5px-neon-blue"></div>
            </a>
          </div>
          <ShoppingBag />
        </div>
        <div className="flex-row-142">
          <div className="flex-col-98">
            <div className="flex-col-99">
              <div className="text-57 valign-text-middle chakrapetch-bold-white-28px">{text57}</div>
              <div className="flex-row-143">
                <div className="overlap-group4-39">
                  <img className="image-60-3" src={image60} />
                  <img className="rectangle-454-3" src="/img/rectangle-454@2x.svg" />
                  <img className="vector-21-8" src="/img/vector-21-4@2x.svg" />
                </div>
                <img className="file1601078949671-3-4" src={file_16010789496713} />
                <div className="overlap-group3-25">
                  <img className="image-59-4" src={image59} />
                  <img className="vector-20-8" src="/img/vector-20-4@2x.svg" />
                  <img className="rectangle-453-3" src="/img/rectangle-453@2x.svg" />
                </div>
              </div>
              <div className="name-24 valign-text-middle chakrapetch-bold-white-36px">{name}</div>
            </div>
            <div className="flex-row-144">
              <div className="overlap-group12-2">
                <div className="overlap-group5-19">
                  <img className="line-109-1" src="/img/line-109@2x.svg" />
                  <div className="number-30 valign-text-middle chakrapetch-bold-white-28px">{number}</div>
                  <div className="text-62 valign-text-middle chakrapetch-bold-white-28px">{text62}</div>
                  <div className="text-63 valign-text-middle chakrapetch-bold-white-28px">{text63}</div>
                </div>
                <div className="quantity-2 valign-text-middle chakrapetch-medium-white-18px">{quantity}</div>
              </div>
              <div className="flex-col-100">
                <div className="text-58 valign-text-middle chakrapetch-medium-white-18px">{text58}</div>
                <div className="price-16 valign-text-middle chakrapetch-semi-bold-white-36px">{price}</div>
              </div>
            </div>
            <div className="flex-col-101">
              <div className="overlap-group8-12">
                <a href="javascript:ShowOverlay('coinlist-for-stake', 'animate-appear');">
                  <img className="vector-22-2" src="/img/vector-22-2@2x.svg" />
                </a>
                <a href="javascript:ShowOverlay('coinlist-for-stake', 'animate-appear');">
                  <div className="pairs-ust-hxc chakrapetch-normal-white-24px">
                    <span className="chakrapetch-normal-white-24px">{spanText}</span>
                    <span className="chakrapetch-semi-bold-white-24px">{spanText2}</span>
                  </div>
                </a>
              </div>
              <div className="text-61 valign-text-middle chakrapetch-medium-white-18px">{text61}</div>
              <div className="overlap-group6-23">
                <a href="javascript:ShowOverlay('stake-success', 'animate-appear');">
                  <img className="union-31" src="/img/union-45@2x.svg" />
                </a>
                <div className="stake-11 valign-text-middle chakrapetch-bold-mirage-28px">{stake2}</div>
              </div>
            </div>
          </div>
          <div className="flex-col-102">
            <div className="your-stake valign-text-middle chakrapetch-bold-white-24px">{yourStake}</div>
            <div className="overlap-group-37">
              <img className="rectangle-431-1" src="/img/rectangle-431-4@2x.svg" />
              <div className="text-59 valign-text-middle chakrapetch-normal-white-18px">{text59}</div>
              <div className="price-17 chakrapetch-medium-white-48px">{price2}</div>
              <div className="view-full-status valign-text-middle chakrapetch-medium-white-18px">{viewFullStatus}</div>
              <div className="x13480-to-tier-3 valign-text-middle chakrapetch-medium-white-14px">{x13480ToTier3}</div>
              <ArrowForward />
              <div className="rectangle-455-1"></div>
              <div className="rectangle-456-1"></div>
            </div>
            <div className="total-pool valign-text-middle chakrapetch-bold-white-24px">{totalPool}</div>
            <div className="overlap-group1-26">
              <img className="rectangle-432" src="/img/rectangle-432-3@2x.svg" />
              <div className="estimated-apy chakrapetch-normal-white-18px">{estimatedApy}</div>
              <div className="percent-1 chakrapetch-semi-bold-white-24px">{percent}</div>
              <div className="text-60 valign-text-middle chakrapetch-medium-white-18px">{text60}</div>
              <div className="price-18 chakrapetch-normal-white-48px">{price3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stake;
