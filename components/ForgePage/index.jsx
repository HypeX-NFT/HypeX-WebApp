import React from "react";
import { Link } from "react-router-dom";
import "./ForgePage.css";

function ForgePage(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    stake,
    fragmentFactory,
    nftMoorph,
    nftForge,
    union,
    loan,
    profilePic,
    shopping_Bag,
    text25,
    x115,
    spanText,
    spanText2,
    forge,
    union2,
    line70,
    line71,
    line72,
    line73,
    rectangle3,
    spanText3,
    spanText4,
    spanText5,
    union3,
    spanText6,
    spanText7,
    spanText8,
    insurance,
    spanText9,
    spanText10,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="forge-page screen">
        <div className="flex-row-49">
          <div className="overlap-group2-12">
            <Link to='/home-limited-box'>
              <img className="hypexlogoedited-removebg-1-5" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/stake-info-page">
              <div className="stake-5 valign-text-middle chakrapetch-normal-white-25px">{stake}</div>
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-7 valign-text-middle chakrapetch-normal-white-25px">{fragmentFactory}</div>
            </Link>
            <Link to="/morph-page">
              <div className="nft-moorph-5 valign-text-middle chakrapetch-normal-white-25px">{nftMoorph}</div>
            </Link>
            <div className="nft-forge-5 valign-text-middle chakrapetch-normal-bright-turquoise-25px">{nftForge}</div>
            <img className="union-24" src={union} />
          </div>
          <Link to="/loan">
            <div className="loan-5 valign-text-middle chakrapetch-normal-white-25px">{loan}</div>
          </Link>
          <Link to="/my-box">
            <div className="overlap-group-12">
              <img className="profile-pic-12" src={profilePic} />
              <div className="ellipse-40-5 border-1px-neon-blue"></div>
              <div className="ellipse-4-7 border-4px-neon-blue"></div>
              <div className="ellipse-41-5 border-0-8px-neon-blue"></div>
              <div className="ellipse-4-7 border-0-5px-neon-blue"></div>
            </div>
          </Link>
          <img className="shoppingbag-5" src={shopping_Bag} />
        </div>
        <div className="flex-row-50">
          <div className="flex-col-26">
            <div className="text-25 valign-text-middle chakrapetch-normal-white-30px">{text25}</div>
            <img className="x1-15" src={x115} />
            <div className="x60-success-rate">
              <span className="span-3">{spanText}</span>
              <span className="span1-2">{spanText2}</span>
            </div>
            <div className="overlap-group3-12">
              <div className="forge valign-text-middle">{forge}</div>
              <img className="union-25" src={union2} />
              <img className="line-70-2" src={line70} />
              <img className="line-71-2" src={line71} />
              <img className="line-72-2" src={line72} />
              <img className="line-73-2" src={line73} />
            </div>
            <div className="flex-row-51">
              <img className="rectangle-3" src={rectangle3} />
              <div className="flex-col-27">
                <div className="cost-40-hxc-1">
                  <span className="rubik-medium-white-24px">{spanText3}</span>
                  <span className="span-3">{spanText4}</span>
                  <span className="rubik-medium-white-24px">{spanText5}</span>
                </div>
                <div className="overlap-group1-12">
                  <img className="union-26" src={union3} />
                  <div className="cost-20-hxc-2">
                    <span className="rubik-medium-white-16px">{spanText6}</span>
                    <span className="span-3">{spanText7}</span>
                    <span className="rubik-medium-white-16px">{spanText8}</span>
                  </div>
                  <div className="insurance-1 valign-text-middle">{insurance}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-24 chakrapetch-normal-white-35px">
            <span className="chakrapetch-normal-bright-turquoise-35px">{spanText9}</span>
            <span className="chakrapetch-normal-white-35px-2">{spanText10}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgePage;
