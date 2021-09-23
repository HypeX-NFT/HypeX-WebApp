import React from "react";
import "./ProfileDropDown.css";

function ProfileDropDown(props) {
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
    text1,
    hxc,
    text2,
    union,
    place,
    usd,
    phone,
    union2,
    withdraw,
    line112,
    overlapGroup1,
    boxIcon,
    myMysteryBoxes,
    sneakerIcon,
    myCollections,
    puzzleIcon,
    myNftCards,
    affiliatesIcon,
    myStatus,
    walletIcon,
    myWallets,
    settingIcon,
    mySetting,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile-dropdown-6 border-8px-neon-blue screen">
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="line-6" src={line66} />
          <img className="line-6-1" src={line67} />
          <img className="line-6" src={line68} />
          <img className="line-6-1" src={line69} />
        </div>
        <div className="flex-row">
          <div className="overlap-group2">
            <img className="profile-pic" src={profilePic} />
            <div className="ellipse-44 border-1px-neon-blue"></div>
            <div className="ellipse-4 border-4px-neon-blue"></div>
            <div className="ellipse-46 border-0-8px-neon-blue"></div>
            <div className="ellipse-4 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col">
            <div className="overlap-group3">
              <div className="surname valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19" src={vector19} />
              <img className="line-110" src={line110} />
            </div>
            <div className="overlap-group6">
              <img className="rectangle-458" src={rectangle458} />
              <div className="text-1 valign-text-middle chakrapetch-semi-bold-white-12px">{text1}</div>
            </div>
          </div>
          <div className="overlap-group4">
            <div className="hxc chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-2 chakrapetch-semi-bold-magenta--fuchsia-24px">{text2}</div>
            <img className="union" src={union} />
            <div className="place valign-text-middle chakrapetch-medium-white-20px">{place}</div>
          </div>
          <div className="overlap-group5">
            <div className="usd chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-1" src={union2} />
            <div className="withdraw valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-1">
          <img className="line-112" src={line112} />
          <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img className="box-icon" src={boxIcon} />
            <div className="my-mystery-boxes chakrapetch-medium-white-30px">{myMysteryBoxes}</div>
          </div>
          <div className="flex-row-1">
            <img className="sneaker-icon" src={sneakerIcon} />
            <div className="my-collections chakrapetch-medium-bright-turquoise-30px">{myCollections}</div>
          </div>
          <div className="flex-row-2">
            <img className="x-icon" src={puzzleIcon} />
            <div className="my-nft-cards chakrapetch-medium-bright-turquoise-30px">{myNftCards}</div>
          </div>
          <div className="affiliate">
            <img className="x-icon" src={affiliatesIcon} />
            <div className="my-status chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="flex-row-3">
            <img className="x-icon" src={walletIcon} />
            <div className="my-wallets chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
          </div>
          <div className="flex-row-4">
            <img className="x-icon" src={settingIcon} />
            <div className="my-setting chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown;
