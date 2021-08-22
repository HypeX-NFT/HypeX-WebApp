import React from "react";
import "./ProfileDropDown5.css";

function ProfileDropDown5(props) {
  const {
    profilePic,
    surname,
    text49,
    hxc,
    text50,
    place,
    usd,
    phone,
    withdraw,
    boxIcon,
    myMysteryBoxes,
    sneakerIcon,
    text48,
    puzzleIcon,
    myFragments,
    affiliatesIcon,
    myStatus,
    walletIcon,
    myWallets,
    settingIcon,
    mySetting,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile-dropdown4 border-8px-neon-blue screen">
        <div className="overlap-group4-36">
          <img className="line-6-4" src="/img/line-66@2x.svg" />
          <img className="line-6-4" src="/img/line-67@2x.svg" />
          <img className="line-6-4" src="/img/line-66@2x.svg" />
          <img className="line-6-4" src="/img/line-67@2x.svg" />
        </div>
        <div className="flex-row-118">
          <div className="overlap-group5-16">
            <img className="profile-pic-18" src={profilePic} />
            <div className="ellipse-44-4 border-1px-neon-blue"></div>
            <div className="ellipse-4-9 border-4px-neon-blue"></div>
            <div className="ellipse-46-4 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-9 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-82">
            <div className="overlap-group1-23">
              <div className="surname-11 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-5" src="/img/vector-19-2@2x.svg" />
              <img className="line-110-4" src="/img/line-110-1@2x.svg" />
            </div>
            <div className="overlap-group6-20">
              <img className="rectangle-458-4" src="/img/rectangle-458-3@2x.svg" />
              <div className="text-49 valign-text-middle chakrapetch-semi-bold-white-12px">{text49}</div>
            </div>
          </div>
          <div className="overlap-group-30">
            <div className="hxc-5 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-50 chakrapetch-semi-bold-magenta--fuchsia-24px">{text50}</div>
            <img className="union-26" src="/img/union-46@2x.svg" />
            <div className="place-11 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
          </div>
          <div className="overlap-group2-28">
            <div className="usd-4 chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone-4 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-27" src="/img/union-47@2x.svg" />
            <div className="withdraw-4 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-83">
          <img className="line-112" src="/img/line-111-1@1x.svg" />
          <div className="flex-row-119">
            <img className="box-icon-4" src={boxIcon} />
            <div className="my-mystery-boxes-5 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
          </div>
          <div className="overlap-group3-22">
            <img className="sneaker-icon-4" src={sneakerIcon} />
            <div className="text-48 chakrapetch-medium-white-30px">{text48}</div>
          </div>
          <div className="flex-row-120">
            <img className="x-icon-4" src={puzzleIcon} />
            <div className="my-fragments-9 chakrapetch-medium-bright-turquoise-30px">{myFragments}</div>
          </div>
          <div className="affiliate-3">
            <img className="x-icon-4" src={affiliatesIcon} />
            <div className="my-status-5 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="flex-row-121">
            <img className="x-icon-4" src={walletIcon} />
            <div className="my-wallets-4 chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
          </div>
          <div className="flex-row-122">
            <img className="x-icon-4" src={settingIcon} />
            <div className="my-setting-4 chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown5;
