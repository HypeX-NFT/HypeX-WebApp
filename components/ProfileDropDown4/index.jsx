import React from "react";
import "./ProfileDropDown4.css";

function ProfileDropDown4(props) {
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
    text9,
    hxc,
    text10,
    union,
    place,
    usd,
    phone,
    union2,
    withdraw,
    line111,
    boxIcon,
    myMysteryBoxes,
    sneakerIcon,
    myCollections,
    overlapGroup2,
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
      <div className="profile-dropdown3 border-8px-neon-blue screen">
        <div className="overlap-group3-4" style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <img className="line-6-6" src={line66} />
          <img className="line-6-7" src={line67} />
          <img className="line-6-6" src={line68} />
          <img className="line-6-7" src={line69} />
        </div>
        <div className="flex-row-19">
          <div className="overlap-group4-4">
            <img className="profile-pic-4" src={profilePic} />
            <div className="ellipse-44-3 border-1px-neon-blue"></div>
            <div className="ellipse-4-3 border-4px-neon-blue"></div>
            <div className="ellipse-46-3 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-3 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-11">
            <div className="overlap-group5-3">
              <div className="surname-3 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-3" src={vector19} />
              <img className="line-110-3" src={line110} />
            </div>
            <div className="overlap-group6-3">
              <img className="rectangle-458-3" src={rectangle458} />
              <div className="text-9 valign-text-middle chakrapetch-semi-bold-white-12px">{text9}</div>
            </div>
          </div>
          <div className="overlap-group-4">
            <div className="hxc-3 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-10 chakrapetch-semi-bold-magenta--fuchsia-24px">{text10}</div>
            <img className="union-8" src={union} />
            <div className="place-3 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
          </div>
          <div className="overlap-group1-4">
            <div className="usd-3 chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone-3 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-9" src={union2} />
            <div className="withdraw-3 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-12">
          <img className="line-111-1" src={line111} />
          <div className="flex-row-20">
            <img className="box-icon-3" src={boxIcon} />
            <div className="my-mystery-boxes-3 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
          </div>
          <div className="flex-row-21">
            <img className="sneaker-icon-3" src={sneakerIcon} />
            <div className="my-collections-3 chakrapetch-medium-bright-turquoise-30px">{myCollections}</div>
          </div>
          <div className="overlap-group2-4" style={{ backgroundImage: `url(${overlapGroup2})` }}>
            <img className="x-icon-3" src={puzzleIcon} />
            <div className="my-nft-cards-3 chakrapetch-medium-white-30px">{myNftCards}</div>
          </div>
          <div className="affiliate-2">
            <img className="x-icon-3" src={affiliatesIcon} />
            <div className="my-status-3 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="flex-row-22">
            <img className="x-icon-3" src={walletIcon} />
            <div className="my-wallets-3 chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
          </div>
          <div className="flex-row-23">
            <img className="x-icon-3" src={settingIcon} />
            <div className="my-setting-3 chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown4;
