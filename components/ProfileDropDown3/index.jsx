import React from "react";
import "./ProfileDropDown3.css";

function ProfileDropDown3(props) {
  const {
    overlapGroup3,
    line66,
    line67,
    line68,
    line69,
    profilePic,
    surname,
    vector19,
    line110,
    rectangle458,
    text7,
    hxc,
    text8,
    union,
    place,
    usd,
    phone,
    union2,
    withdraw,
    line112,
    boxIcon,
    myMysteryBoxes,
    overlapGroup1,
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
      <div className="profile-dropdown2 border-8px-neon-blue screen">
        <div className="overlap-group3-3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <img className="line-6-4" src={line66} />
          <img className="line-6-5" src={line67} />
          <img className="line-6-4" src={line68} />
          <img className="line-6-5" src={line69} />
        </div>
        <div className="flex-row-14">
          <div className="overlap-group2-3">
            <img className="profile-pic-3" src={profilePic} />
            <div className="ellipse-44-2 border-1px-neon-blue"></div>
            <div className="ellipse-4-2 border-4px-neon-blue"></div>
            <div className="ellipse-46-2 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-2 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-9">
            <div className="overlap-group4-3">
              <div className="surname-2 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-2" src={vector19} />
              <img className="line-110-2" src={line110} />
            </div>
            <div className="overlap-group5-2">
              <img className="rectangle-458-2" src={rectangle458} />
              <div className="text-7 valign-text-middle chakrapetch-semi-bold-white-12px">{text7}</div>
            </div>
          </div>
          <div className="overlap-group6-2">
            <div className="hxc-2 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-8 chakrapetch-semi-bold-magenta--fuchsia-24px">{text8}</div>
            <img className="union-6" src={union} />
            <div className="place-2 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
          </div>
          <div className="overlap-group-3">
            <div className="usd-2 chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone-2 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-7" src={union2} />
            <div className="withdraw-2 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-10">
          <img className="line-112-1" src={line112} />
          <div className="flex-row-15">
            <img className="box-icon-2" src={boxIcon} />
            <div className="my-mystery-boxes-2 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
          </div>
          <div className="overlap-group1-3" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img className="sneaker-icon-2" src={sneakerIcon} />
            <div className="my-collections-2 chakrapetch-medium-white-30px">{myCollections}</div>
          </div>
          <div className="flex-row-16">
            <img className="x-icon-2" src={puzzleIcon} />
            <div className="my-nft-cards-2 chakrapetch-medium-bright-turquoise-30px">{myNftCards}</div>
          </div>
          <div className="affiliate-1">
            <img className="x-icon-2" src={affiliatesIcon} />
            <div className="my-status-2 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="flex-row-17">
            <img className="x-icon-2" src={walletIcon} />
            <div className="my-wallets-2 chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
          </div>
          <div className="flex-row-18">
            <img className="x-icon-2" src={settingIcon} />
            <div className="my-setting-2 chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown3;
