import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import ArrowForwardIos2 from "../ArrowForwardIos2";
import Group461 from "../Group461";
import "./MeltPage.css";

function MeltPage(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    text11,
    text12,
    file_16010746003623,
    file_16010748630162,
    lvCardholder,
    x30Hxc,
    spanText,
    spanText2,
    upgradeToLv2,
    text13,
    supremeJacket,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    melt,
    spanText8,
    spanText9,
    spanText10,
    arrowForwardIos2Props,
    arrowForwardIos22Props,
    group461Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="melt-page-2 screen">
        <div className="flex-row-43">
          <div className="overlap-group3-6">
            <Link to="/home-limited-box">
              <img className="hypexlogoedited-removebg-1-5" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-3 valign-text-middle chakrapetch-medium-white-21px">
                {fragmentFactory}
              </div>
            </Link>
          </div>
          <Link to="/stake-info-page">
            <div className="stake-3 valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
          </Link>
          <Link to="/loan">
            <div className="loan-3 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
          </Link>
          <Link to="/display-nfts">
            <div className="display-nf-ts-3 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
          </Link>
          <div className="overlap-group1-7">
            <img className="profile-pic-5" src={profilePic} />
            <div className="ellipse-40-5 border-1px-neon-blue"></div>
            <div className="ellipse-42-3 border-4px-neon-blue"></div>
            <div className="ellipse-41-5 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
              <div className="ellipse-43-3 border-0-5px-neon-blue"></div>
            </a>
          </div>
          <ShoppingBag />
        </div>
        <div className="flex-col-35">
          <div className="flex-row-44">
            <div className="text-11 valign-text-middle chakrapetch-semi-bold-white-30px">{text11}</div>
            <div className="frame-25">
              <div className="overlap-group8-4">
                <img className="vector-88" src="/img/vector-68@2x.svg" />
                <img className="vector-89" src="/img/vector-69@2x.svg" />
                <img className="vector-90" src="/img/vector-70@2x.svg" />
                <img className="vector-91" src="/img/vector-71@2x.svg" />
              </div>
            </div>
            <div className="text-12 chakrapetch-semi-bold-white-18px">{text12}</div>
          </div>
          <div className="flex-row-45">
            <ArrowForwardIos2 className={arrowForwardIos2Props.className} />
            <img className="file1601074600362-3" src={file_16010746003623} />
            <img className="file1601074863016-2" src={file_16010748630162} />
            <img className="lv-cardholder" src={lvCardholder} />
            <ArrowForwardIos2 className={arrowForwardIos22Props.className} />
            <div className="flex-col-36">
              <div className="overlap-group2-10">
                <div className="buy-button-2"></div>
                <div className="x30-hxc-1 chakrapetch-normal-white-16px">{x30Hxc}</div>
                <div className="buy-button-3"></div>
                <Group461 className={group461Props.className} />
              </div>
              <div className="x80-durability-1 chakrapetch-normal-white-16px-2">
                <span className="chakrapetch-normal-razzle-dazzle-rose-16px">{spanText}</span>
                <span className="chakrapetch-normal-white-16px">{spanText2}</span>
              </div>
              <div className="overlap-group4-7">
                <div className="upgrade-to-lv2-1 valign-text-middle chakrapetch-medium-white-14px">{upgradeToLv2}</div>
              </div>
              <p className="text-13 chakrapetch-medium-white-14px">{text13}</p>
            </div>
          </div>
          <div className="supreme-jacket valign-text-middle chakrapetch-semi-bold-white-30px">{supremeJacket}</div>
          <div className="text-10 chakrapetch-normal-white-19px-2">
            <span className="chakrapetch-normal-white-19px">{spanText3}</span>
            <span className="chakrapetch-normal-razzle-dazzle-rose-19px">{spanText4}</span>
            <span className="chakrapetch-normal-white-19px">{spanText5}</span>
          </div>
          <div className="x60-success-rate-1 chakrapetch-normal-white-19px-2">
            <span className="chakrapetch-normal-razzle-dazzle-rose-19px">{spanText6}</span>
            <span className="chakrapetch-normal-white-19px">{spanText7}</span>
          </div>
          <div className="overlap-group-12">
            <div className="melt valign-text-middle chakrapetch-medium-white-28px">{melt}</div>
            <img className="union-5" src="/img/union-30@2x.svg" />
            <img className="line-70-3" src="/img/line-70-3@2x.svg" />
            <img className="line-71-3" src="/img/line-71-3@2x.svg" />
            <img className="line-72-3" src="/img/line-72-3@2x.svg" />
            <img className="line-73-3" src="/img/line-73-3@2x.svg" />
          </div>
          <div className="cost-40-hxc-1 rubik-medium-white-24px-2">
            <span className="rubik-medium-white-24px">{spanText8}</span>
            <span className="rubik-medium-razzle-dazzle-rose-24px">{spanText9}</span>
            <span className="rubik-medium-white-24px">{spanText10}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeltPage;
