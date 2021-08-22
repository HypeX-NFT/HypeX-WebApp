import React from "react";
import "./ProfileDropDown2.css";

function ProfileDropDown2(props) {
  const {
    profilePic,
    surname,
    text40,
    hxc,
    text41,
    place,
    usd,
    phone,
    withdraw,
    boxIcon,
    myMysteryBoxes,
    sneakerIcon,
    text39,
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
      <div className="profile-dropdown border-8px-neon-blue screen">
        <div className="overlap-group3-19">
          <img className="line-6-1" src="/img/line-66@2x.svg" />
          <img className="line-6-1" src="/img/line-67@2x.svg" />
          <img className="line-6-1" src="/img/line-66@2x.svg" />
          <img className="line-6-1" src="/img/line-67@2x.svg" />
        </div>
        <div className="flex-row-103">
          <div className="overlap-group5-13">
            <img className="profile-pic-15" src={profilePic} />
            <div className="ellipse-44-1 border-1px-neon-blue"></div>
            <div className="ellipse-4-6 border-4px-neon-blue"></div>
            <div className="ellipse-46-1 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-6 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-76">
            <div className="overlap-group6-17">
              <div className="surname-8 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-2" src="/img/vector-19-2@2x.svg" />
              <img className="line-110-1" src="/img/line-110-1@2x.svg" />
            </div>
            <div className="overlap-group4-33">
              <img className="rectangle-458-1" src="/img/rectangle-458-3@2x.svg" />
              <div className="text-40 valign-text-middle chakrapetch-semi-bold-white-12px">{text40}</div>
            </div>
          </div>
          <div className="overlap-group1-20">
            <div className="hxc-2 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-41 chakrapetch-semi-bold-magenta--fuchsia-24px">{text41}</div>
            <img className="union-20" src="/img/union-46@2x.svg" />
            <div className="place-8 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
          </div>
          <div className="overlap-group-27">
            <div className="usd-1 chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone-1 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-21" src="/img/union-47@2x.svg" />
            <div className="withdraw-1 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-77">
          <img className="line-111-1" src="/img/line-111-1@1x.svg" />
          <div className="flex-row-104">
            <img className="box-icon-1" src={boxIcon} />
            <div className="my-mystery-boxes-2 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
          </div>
          <div className="flex-row-105">
            <img className="sneaker-icon-1" src={sneakerIcon} />
            <div className="text-39 chakrapetch-medium-bright-turquoise-30px">{text39}</div>
          </div>
          <div className="flex-row-106">
            <img className="x-icon-1" src={puzzleIcon} />
            <div className="my-fragments-6 chakrapetch-medium-bright-turquoise-30px">{myFragments}</div>
          </div>
          <div className="affiliate">
            <img className="x-icon-1" src={affiliatesIcon} />
            <div className="my-status-2 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="flex-row-107">
            <img className="x-icon-1" src={walletIcon} />
            <div className="my-wallets-1 chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
          </div>
          <div className="overlap-group2-25">
            <img className="setting-icon" src={settingIcon} />
            <div className="my-setting-1 chakrapetch-medium-white-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown2;
