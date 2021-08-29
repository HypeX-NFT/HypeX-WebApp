import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import ArrowForwardIos2 from "../ArrowForwardIos2";
import Group461 from "../Group461";
import "./MeltPage2.css";

function MeltPage2(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    text23,
    lvCardholder,
    file_16010746003623,
    file_16010748630162,
    name,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    melt,
    spanText6,
    spanText7,
    spanText8,
    text24,
    x30Hxc,
    spanText9,
    spanText10,
    upgradeToLv2,
    text25,
    arrowForwardIos2Props,
    arrowForwardIos22Props,
    group461Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="melt-page screen">
        <div className="flex-row-86">
          <div className="overlap-group2-21">
            <Link to="/home-limited-box">
              <img className="hypexlogoedited-removebg-1-11" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-6 valign-text-middle chakrapetch-medium-white-21px">
                {fragmentFactory}
              </div>
            </Link>
          </div>
          <Link to="/stake-info-page">
            <div className="stake-6 valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
          </Link>
          <Link to="/loan">
            <div className="loan-6 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
          </Link>
          <Link to="/display-nfts">
            <div className="display-nf-ts-6 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
          </Link>
          <Link to="/wallet">
            <div className="overlap-group-23">
              <img className="profile-pic-11" src={profilePic} />
              <div className="ellipse-40-11 border-1px-neon-blue"></div>
              <div className="ellipse-42-6 border-4px-neon-blue"></div>
              <div className="ellipse-41-11 border-0-8px-neon-blue"></div>
              <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
                <div className="ellipse-43-6 border-0-5px-neon-blue"></div>
              </a>
            </div>
          </Link>
          <ShoppingBag />
        </div>
        <div className="flex-row-87">
          <div className="flex-col-67">
            <div className="text-23 valign-text-middle chakrapetch-semi-bold-white-30px">{text23}</div>
            <div className="flex-row-88">
              <ArrowForwardIos2 className={arrowForwardIos2Props.className} />
              <img className="lv-cardholder-1" src={lvCardholder} />
              <img className="file1601074600362-3-5" src={file_16010746003623} />
              <img className="file1601074863016-2-4" src={file_16010748630162} />
              <ArrowForwardIos2 className={arrowForwardIos22Props.className} />
            </div>
            <div className="name-20 valign-text-middle chakrapetch-semi-bold-white-30px">{name}</div>
            <div className="text-22 chakrapetch-normal-white-19px-2">
              <span className="chakrapetch-normal-white-19px">{spanText}</span>
              <span className="chakrapetch-normal-razzle-dazzle-rose-19px">{spanText2}</span>
              <span className="chakrapetch-normal-white-19px">{spanText3}</span>
            </div>
            <div className="x60-success-rate-2 chakrapetch-normal-white-19px-2">
              <span className="chakrapetch-normal-razzle-dazzle-rose-19px">{spanText4}</span>
              <span className="chakrapetch-normal-white-19px">{spanText5}</span>
            </div>
            <div className="overlap-group1-16">
              <div className="melt-1 valign-text-middle chakrapetch-medium-white-28px">{melt}</div>
              <img className="union-8" src="/img/union-30@2x.svg" />
              <img className="line-70-5" src="/img/line-70-5@2x.svg" />
              <img className="line-71-5" src="/img/line-71-3@2x.svg" />
              <img className="line-72-5" src="/img/line-72-3@2x.svg" />
              <img className="line-73-5" src="/img/line-73-3@2x.svg" />
            </div>
            <div className="cost-40-hxc-2 rubik-medium-white-24px-2">
              <span className="rubik-medium-white-24px">{spanText6}</span>
              <span className="rubik-medium-razzle-dazzle-rose-24px">{spanText7}</span>
              <span className="rubik-medium-white-24px">{spanText8}</span>
            </div>
          </div>
          <div className="flex-col-68">
            <div className="flex-row-89">
              <div className="frame-25-1">
                <div className="overlap-group8-10">
                  <img className="vector-112" src="/img/vector-68@2x.svg" />
                  <img className="vector-113" src="/img/vector-129@2x.svg" />
                  <img className="vector-114" src="/img/vector-130@2x.svg" />
                  <img className="vector-115" src="/img/vector-131@2x.svg" />
                </div>
              </div>
              <div className="text-24 chakrapetch-semi-bold-white-18px">{text24}</div>
            </div>
            <div className="overlap-group3-15">
              <div className="buy-button-4"></div>
              <div className="x30-hxc-2 chakrapetch-normal-white-16px">{x30Hxc}</div>
              <div className="buy-button-5"></div>
              <Group461 className={group461Props.className} />
            </div>
            <div className="x80-durability-2 chakrapetch-normal-white-16px-2">
              <span className="chakrapetch-normal-razzle-dazzle-rose-16px">{spanText9}</span>
              <span className="chakrapetch-normal-white-16px">{spanText10}</span>
            </div>
            <div className="overlap-group4-29">
              <div className="upgrade-to-lv2-2 valign-text-middle chakrapetch-medium-white-14px">{upgradeToLv2}</div>
            </div>
            <p className="text-25 chakrapetch-medium-white-14px">{text25}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeltPage2;
