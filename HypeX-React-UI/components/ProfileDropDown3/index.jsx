import React from "react";
import "./ProfileDropDown3.css";

function ProfileDropDown3(props) {
  const {
    profilePic,
    surname,
    text43,
    hxc,
    text44,
    place,
    usd,
    phone,
    withdraw,
    boxIcon,
    myMysteryBoxes,
    sneakerIcon,
    text42,
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
      <div className="profile-dropdown2 border-8px-neon-blue screen">
        <div className="overlap-group4-34">
          <img className="line-6-2" src="/img/line-66@2x.svg" />
          <img className="line-6-2" src="/img/line-67@2x.svg" />
          <img className="line-6-2" src="/img/line-66@2x.svg" />
          <img className="line-6-2" src="/img/line-67@2x.svg" />
        </div>
        <div className="flex-row-108">
          <div className="overlap-group3-20">
            <img className="profile-pic-16" src={profilePic} />
            <div className="ellipse-44-2 border-1px-neon-blue"></div>
            <div className="ellipse-4-7 border-4px-neon-blue"></div>
            <div className="ellipse-46-2 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-7 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-78">
            <div className="overlap-group5-14">
              <div className="surname-9 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-3" src="/img/vector-19-2@2x.svg" />
              <img className="line-110-2" src="/img/line-110-1@2x.svg" />
            </div>
            <div className="overlap-group6-18">
              <img className="rectangle-458-2" src="/img/rectangle-458-3@2x.svg" />
              <div className="text-43 valign-text-middle chakrapetch-semi-bold-white-12px">{text43}</div>
            </div>
          </div>
          <div className="overlap-group1-21">
            <div className="hxc-3 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-44 chakrapetch-semi-bold-magenta--fuchsia-24px">{text44}</div>
            <div className="place-9 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
            <img className="union-22" src="/img/union-46@2x.svg" />
          </div>
          <div className="overlap-group2-26">
            <div className="usd-2 chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone-2 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-23" src="/img/union-47@2x.svg" />
            <div className="withdraw-2 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-79">
          <img className="line-111-2" src="/img/line-111-1@1x.svg" />
          <div className="flex-row-109">
            <img className="box-icon-2" src={boxIcon} />
            <div className="my-mystery-boxes-3 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
          </div>
          <div className="flex-row-110">
            <img className="sneaker-icon-2" src={sneakerIcon} />
            <div className="text-42 chakrapetch-medium-bright-turquoise-30px">{text42}</div>
          </div>
          <div className="flex-row-111">
            <img className="x-icon-2" src={puzzleIcon} />
            <div className="my-fragments-7 chakrapetch-medium-bright-turquoise-30px">{myFragments}</div>
          </div>
          <div className="affiliate-1">
            <img className="x-icon-2" src={affiliatesIcon} />
            <div className="my-status-3 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="overlap-group-28">
            <img className="x-icon-2" src={walletIcon} />
            <div className="my-wallets-2 chakrapetch-medium-white-30px">{myWallets}</div>
          </div>
          <div className="flex-row-112">
            <img className="x-icon-2" src={settingIcon} />
            <div className="my-setting-2 chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown3;
