import React from "react";
import "./ProfileDropDown6.css";

function ProfileDropDown6(props) {
  const {
    profilePic,
    surname,
    text53,
    hxc,
    text54,
    place,
    usd,
    phone,
    withdraw,
    boxIcon,
    myMysteryBoxes,
    sneakerIcon,
    text52,
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
      <div className="profile-dropdown5 border-8px-neon-blue screen">
        <div className="overlap-group5-18">
          <img className="line-6-5" src="/img/line-66@2x.svg" />
          <img className="line-6-5" src="/img/line-67@2x.svg" />
          <img className="line-6-5" src="/img/line-66@2x.svg" />
          <img className="line-6-5" src="/img/line-67@2x.svg" />
        </div>
        <div className="flex-row-136">
          <div className="overlap-group-34">
            <img className="profile-pic-20" src={profilePic} />
            <div className="ellipse-44-5 border-1px-neon-blue"></div>
            <div className="ellipse-4-11 border-4px-neon-blue"></div>
            <div className="ellipse-46-5 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-11 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-96">
            <div className="overlap-group1-25">
              <div className="surname-13 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-6" src="/img/vector-19-2@2x.svg" />
              <img className="line-110-5" src="/img/line-110-1@2x.svg" />
            </div>
            <div className="overlap-group3-24">
              <img className="rectangle-458-5" src="/img/rectangle-458-3@2x.svg" />
              <div className="text-53 valign-text-middle chakrapetch-semi-bold-white-12px">{text53}</div>
            </div>
          </div>
          <div className="overlap-group4-38">
            <div className="hxc-6 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-54 chakrapetch-semi-bold-magenta--fuchsia-24px">{text54}</div>
            <img className="union-28" src="/img/union-46@2x.svg" />
            <div className="place-13 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
          </div>
          <div className="overlap-group2-30">
            <div className="usd-5 chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone-5 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-29" src="/img/union-47@2x.svg" />
            <div className="withdraw-5 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-97">
          <img className="line-112-1" src="/img/line-111-1@1x.svg" />
          <div className="overlap-group6-22">
            <img className="box-icon-5" src={boxIcon} />
            <div className="my-mystery-boxes-7 chakrapetch-medium-white-30px">{myMysteryBoxes}</div>
          </div>
          <div className="flex-row-137">
            <img className="sneaker-icon-5" src={sneakerIcon} />
            <div className="text-52 chakrapetch-medium-bright-turquoise-30px">{text52}</div>
          </div>
          <div className="flex-row-138">
            <img className="x-icon-5" src={puzzleIcon} />
            <div className="my-fragments-12 chakrapetch-medium-bright-turquoise-30px">{myFragments}</div>
          </div>
          <div className="affiliate-4">
            <img className="x-icon-5" src={affiliatesIcon} />
            <div className="my-status-6 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="flex-row-139">
            <img className="x-icon-5" src={walletIcon} />
            <div className="my-wallets-5 chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
          </div>
          <div className="flex-row-140">
            <img className="x-icon-5" src={settingIcon} />
            <div className="my-setting-5 chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown6;
