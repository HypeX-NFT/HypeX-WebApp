import React from "react";
import { Link } from "react-router-dom";
import StateActive from "../StateActive";
import "./FragmentFactory.css";

function FragmentFactory(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    stake,
    fragmentFactory,
    nftMoorph,
    nftForge,
    union,
    loan,
    fragmentFactory2,
    wechatImage_202109150120351,
    desiredQuantity,
    union2,
    union3,
    number,
    text12,
    text14,
    spanText,
    spanText2,
    union4,
    spanText3,
    spanText4,
    spanText5,
    compose,
    union5,
    line74,
    line75,
    line76,
    line77,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    profilePic,
    inventoryQuantity,
    wechatImage_202109150120311,
    union6,
    union7,
    number2,
    text11,
    text13,
    spanText11,
    spanText12,
    union8,
    shopping_Bag,
    stateActiveProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="fragment-factory-1 screen">
        <div className="flex-col-13">
          <div className="flex-row-24">
            <div className="overlap-group6-4">
              <img className="hypexlogoedited-removebg-1-1" src={hype_X_Logo_EditedRemovebg1} />
              <Link to="/stake-info-page">
                <div className="stake-1 valign-text-middle chakrapetch-normal-white-25px">{stake}</div>
              </Link>
              <div className="fragment-factory-2 valign-text-middle chakrapetch-normal-bright-turquoise-25px">
                {fragmentFactory}
              </div>
              <Link to= "/morph-page">
                <div className="nft-moorph-1 valign-text-middle chakrapetch-normal-white-25px">{nftMoorph}</div>
              </Link>
              <Link to="/forge-page">
                <div className="nft-forge-1 valign-text-middle chakrapetch-normal-white-25px">{nftForge}</div>
              </Link>
              <img className="union-11" src={union} />
            </div>
            <Link to="/loan">
              <div className="loan-1 valign-text-middle chakrapetch-normal-white-25px">{loan}</div>
            </Link>
          </div>
          <div className="flex-row-25">
            <div className="flex-col-14">
              <img className="fragment-factory-3" src={fragmentFactory2} />
              <img className="we-chat-image20210915012035-1" src={wechatImage_202109150120351} />
              <div className="desired-quantity valign-text-middle chakrapetch-normal-white-24px">{desiredQuantity}</div>
              <div className="overlap-group4-5">
                <img className="union-12" src={union2} />
                <img className="union-13" src={union3} />
                <div className="number valign-text-middle chakrapetch-bold-white-28px">{number}</div>
                <div className="text-12 valign-text-middle chakrapetch-bold-bright-turquoise-28px">{text12}</div>
                <div className="text-14 valign-text-middle chakrapetch-bold-bright-turquoise-28px">{text14}</div>
              </div>
              <div className="overlap-group7">
                <div className="add-to-max-20 valign-text-middle chakrapetch-normal-white-18px-2">
                  <span>
                    <span className="span-1 chakrapetch-normal-white-18px">{spanText}</span>
                    <span className="span-1 chakrapetch-normal-bright-turquoise-18px">{spanText2}</span>
                  </span>
                </div>
                <img className="union-10" src={union4} />
              </div>
            </div>
            <div className="flex-col-15">
              <div className="overlap-group5-4">
                <StateActive group1={stateActiveProps.group1} text15={stateActiveProps.text15} />
                <div className="cost-20-hxc-1 chakrapetch-normal-white-30px-2">
                  <span className="chakrapetch-normal-white-30px">{spanText3}</span>
                  <span className="chakrapetch-normal-bright-turquoise-30px">{spanText4}</span>
                  <span className="chakrapetch-normal-white-30px">{spanText5}</span>
                </div>
              </div>
              <div className="overlap-group2-5">
                <div className="compose valign-text-middle">{compose}</div>
                <img className="union-14" src={union5} />
                <img className="line-74" src={line74} />
                <img className="line-75" src={line75} />
                <img className="line-76" src={line76} />
                <img className="line-77" src={line77} />
              </div>
              <div className="cost-10-hxc chakrapetch-normal-white-30px-2">
                <span className="chakrapetch-normal-white-30px">{spanText6}</span>
                <span className="chakrapetch-normal-bright-turquoise-30px">{spanText7}</span>
                <span className="chakrapetch-normal-white-30px">{spanText8}</span>
              </div>
              <div className="x50-success-rate chakrapetch-normal-white-35px">
                <span className="chakrapetch-normal-bright-turquoise-35px">{spanText9}</span>
                <span className="chakrapetch-normal-white-35px-2">{spanText10}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row-26">
          <div className="flex-col-16">
            <div className="overlap-group-5">
              <img className="profile-pic-5" src={profilePic} />
              <div className="ellipse-40-1 border-1px-neon-blue"></div>
              <div className="ellipse-42-1 border-4px-neon-blue"></div>
              <div className="ellipse-41-1 border-0-8px-neon-blue"></div>
              <a href="javascript:ShowOverlay('profile-dropdown', 'animate-appear');">
                <div className="ellipse-43-1 border-0-5px-neon-blue"></div>
              </a>
            </div>
            <div className="overlap-group8">
              <div className="inventory-quantity valign-text-middle chakrapetch-normal-white-24px">
                {inventoryQuantity}
              </div>
              <div className="picture2-1"></div>
              <img className="we-chat-image20210915012031-1" src={wechatImage_202109150120311} />
            </div>
            <div className="overlap-group1-5">
              <img className="union-15" src={union6} />
              <img className="union-16" src={union7} />
              <div className="number valign-text-middle chakrapetch-bold-white-28px">{number2}</div>
              <div className="text-11 valign-text-middle chakrapetch-bold-bright-turquoise-28px">{text11}</div>
              <div className="text-13 valign-text-middle chakrapetch-bold-bright-turquoise-28px">{text13}</div>
            </div>
            <div className="overlap-group3-5">
              <div className="add-to-max-20-1 valign-text-middle chakrapetch-normal-white-18px-2">
                <span>
                  <span className="span-1 chakrapetch-normal-white-18px">{spanText11}</span>
                  <span className="span-1 chakrapetch-normal-bright-turquoise-18px">{spanText12}</span>
                </span>
              </div>
              <img className="union-10" src={union8} />
            </div>
          </div>
          <img className="shoppingbag-1" src={shopping_Bag} />
        </div>
      </div>
    </div>
  );
}

export default FragmentFactory;
