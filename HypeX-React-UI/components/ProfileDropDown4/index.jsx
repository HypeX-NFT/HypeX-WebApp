import React from "react";
import "./ProfileDropDown4.css";

function ProfileDropDown4(props) {
  const {
    profilePic,
    surname,
    text46,
    hxc,
    text47,
    place,
    usd,
    phone,
    withdraw,
    boxIcon,
    myMysteryBoxes,
    sneakerIcon,
    text45,
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
      <div className="profile-dropdown3 border-8px-neon-blue screen">
        <div className="overlap-group2-27">
          <img className="line-6-3" src="/img/line-66@2x.svg" />
          <img className="line-6-3" src="/img/line-67@2x.svg" />
          <img className="line-6-3" src="/img/line-66@2x.svg" />
          <img className="line-6-3" src="/img/line-67@2x.svg" />
        </div>
        <div className="flex-row-113">
          <div className="overlap-group-29">
            <img className="profile-pic-17" src={profilePic} />
            <div className="ellipse-44-3 border-1px-neon-blue"></div>
            <div className="ellipse-4-8 border-4px-neon-blue"></div>
            <div className="ellipse-46-3 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-8 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-80">
            <div className="overlap-group1-22">
              <div className="surname-10 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-4" src="/img/vector-19-2@2x.svg" />
              <img className="line-110-3" src="/img/line-110-1@2x.svg" />
            </div>
            <div className="overlap-group6-19">
              <img className="rectangle-458-3" src="/img/rectangle-458-3@2x.svg" />
              <div className="text-46 valign-text-middle chakrapetch-semi-bold-white-12px">{text46}</div>
            </div>
          </div>
          <div className="overlap-group5-15">
            <div className="hxc-4 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-47 chakrapetch-semi-bold-magenta--fuchsia-24px">{text47}</div>
            <img className="union-24" src="/img/union-46@2x.svg" />
            <div className="place-10 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
          </div>
          <div className="overlap-group3-21">
            <div className="usd-3 chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone-3 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-25" src="/img/union-47@2x.svg" />
            <div className="withdraw-3 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-81">
          <img className="line-111-3" src="/img/line-111-1@1x.svg" />
          <div className="flex-row-114">
            <img className="box-icon-3" src={boxIcon} />
            <div className="my-mystery-boxes-4 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
          </div>
          <div className="flex-row-115">
            <img className="sneaker-icon-3" src={sneakerIcon} />
            <div className="text-45 chakrapetch-medium-bright-turquoise-30px">{text45}</div>
          </div>
          <div className="overlap-group4-35">
            <img className="x-icon-3" src={puzzleIcon} />
            <div className="my-fragments-8 chakrapetch-medium-white-30px">{myFragments}</div>
          </div>
          <div className="affiliate-2">
            <img className="x-icon-3" src={affiliatesIcon} />
            <div className="my-status-4 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="flex-row-116">
            <img className="x-icon-3" src={walletIcon} />
            <div className="my-wallets-3 chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
          </div>
          <div className="flex-row-117">
            <img className="x-icon-3" src={settingIcon} />
            <div className="my-setting-3 chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown4;
