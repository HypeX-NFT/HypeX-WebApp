import React from "react";
import "./ProfileDropDown5.css";

function ProfileDropDown5(props) {
  const {
    overlapGroup,
    line66,
    line67,
    line68,
    line69,
    profilePic,
    surname,
    vector19,
    line110,
    rectangle458,
    text16,
    hxc,
    text17,
    place,
    union,
    usd,
    phone,
    union2,
    withdraw,
    line111,
    boxIcon,
    myMysteryBoxes,
    sneakerIcon,
    myCollections,
    puzzleIcon,
    myNftCards,
    affiliatesIcon,
    myStatus,
    overlapGroup6,
    walletIcon,
    myWallets,
    settingIcon,
    mySetting,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile-dropdown4 border-8px-neon-blue screen">
        <div className="overlap-group-6" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="line-6-8" src={line66} />
          <img className="line-6-9" src={line67} />
          <img className="line-6-8" src={line68} />
          <img className="line-6-9" src={line69} />
        </div>
        <div className="flex-row-27">
          <div className="overlap-group1-6">
            <img className="profile-pic-6" src={profilePic} />
            <div className="ellipse-44-4 border-1px-neon-blue"></div>
            <div className="ellipse-4-4 border-4px-neon-blue"></div>
            <div className="ellipse-46-4 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-4 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-17">
            <div className="overlap-group4-6">
              <div className="surname-4 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-4" src={vector19} />
              <img className="line-110-4" src={line110} />
            </div>
            <div className="overlap-group2-6">
              <img className="rectangle-458-4" src={rectangle458} />
              <div className="text-16 valign-text-middle chakrapetch-semi-bold-white-12px">{text16}</div>
            </div>
          </div>
          <div className="overlap-group5-5">
            <div className="hxc-4 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-17 chakrapetch-semi-bold-magenta--fuchsia-24px">{text17}</div>
            <div className="place-4 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
            <img className="union-17" src={union} />
          </div>
          <div className="overlap-group3-6">
            <div className="usd-4 chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone-4 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-18" src={union2} />
            <div className="withdraw-4 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-18">
          <img className="line-111-2" src={line111} />
          <div className="flex-row-28">
            <img className="box-icon-4" src={boxIcon} />
            <div className="my-mystery-boxes-4 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
          </div>
          <div className="flex-row-29">
            <img className="sneaker-icon-4" src={sneakerIcon} />
            <div className="my-collections-4 chakrapetch-medium-bright-turquoise-30px">{myCollections}</div>
          </div>
          <div className="flex-row-30">
            <img className="x-icon-4" src={puzzleIcon} />
            <div className="my-nft-cards-4 chakrapetch-medium-bright-turquoise-30px">{myNftCards}</div>
          </div>
          <div className="affiliate-3">
            <img className="x-icon-4" src={affiliatesIcon} />
            <div className="my-status-4 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="overlap-group6-5" style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <img className="x-icon-4" src={walletIcon} />
            <div className="my-wallets-4 chakrapetch-medium-white-30px">{myWallets}</div>
          </div>
          <div className="flex-row-31">
            <img className="x-icon-4" src={settingIcon} />
            <div className="my-setting-4 chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown5;
