import React from "react";
import "./ProfileDropDown.css";

function ProfileDropDown(props) {
  const {
    profilePic,
    surname,
    text37,
    hxc,
    text38,
    place,
    usd,
    phone,
    withdraw,
    boxIcon,
    myMysteryBoxes,
    sneakerIcon,
    text36,
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
      <div className="profile-dropdown-5 border-8px-neon-blue screen">
        <div className="overlap-group1-19">
          <img className="line-6" src="/img/line-66@2x.svg" />
          <img className="line-6" src="/img/line-67@2x.svg" />
          <img className="line-6" src="/img/line-66@2x.svg" />
          <img className="line-6" src="/img/line-67@2x.svg" />
        </div>
        <div className="flex-row-96">
          <div className="overlap-group4-32">
            <img className="profile-pic-14" src={profilePic} />
            <div className="ellipse-44 border-1px-neon-blue"></div>
            <div className="ellipse-4-5 border-4px-neon-blue"></div>
            <div className="ellipse-46 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-5 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-75">
            <div className="overlap-group6-16">
              <div className="surname-7 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-1" src="/img/vector-19-2@2x.svg" />
              <img className="line-110" src="/img/line-110-1@2x.svg" />
            </div>
            <div className="overlap-group5-12">
              <img className="rectangle-458" src="/img/rectangle-458-3@2x.svg" />
              <div className="text-37 valign-text-middle chakrapetch-semi-bold-white-12px">{text37}</div>
            </div>
          </div>
          <div className="overlap-group3-18">
            <div className="hxc-1 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-38 chakrapetch-semi-bold-magenta--fuchsia-24px">{text38}</div>
            <img className="union-18" src="/img/union-46@2x.svg" />
            <div className="place-7 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
          </div>
          <div className="overlap-group-26">
            <div className="usd chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-19" src="/img/union-47@2x.svg" />
            <div className="withdraw valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="overlap-group2-24">
          <img className="line-5" src="/img/line-5@1x.svg" />
          <img className="line-111" src="/img/line-111-1@1x.svg" />
        </div>
        <div className="flex-row-97">
          <img className="box-icon" src={boxIcon} />
          <div className="my-mystery-boxes-1 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
        </div>
        <div className="flex-row-98">
          <img className="sneaker-icon" src={sneakerIcon} />
          <div className="text-36 chakrapetch-medium-bright-turquoise-30px">{text36}</div>
        </div>
        <div className="flex-row-99">
          <img className="x-icon" src={puzzleIcon} />
          <div className="my-fragments-5 chakrapetch-medium-bright-turquoise-30px">{myFragments}</div>
        </div>
        <div className="flex-row-100">
          <img className="x-icon" src={affiliatesIcon} />
          <div className="my-status-1 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
        </div>
        <div className="flex-row-101">
          <img className="x-icon" src={walletIcon} />
          <div className="my-wallets chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
        </div>
        <div className="flex-row-102">
          <img className="x-icon" src={settingIcon} />
          <div className="my-setting chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown;
