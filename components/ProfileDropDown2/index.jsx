import React from "react";
import "./ProfileDropDown2.css";

function ProfileDropDown2(props) {
  const {
    overlapGroup1,
    line66,
    line67,
    line68,
    line69,
    profilePic,
    surname,
    vector19,
    line110,
    rectangle458,
    text3,
    hxc,
    text4,
    union,
    place,
    usd,
    phone,
    union2,
    withdraw,
    line5,
    line111,
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
      <div className="profile-dropdown border-8px-neon-blue screen">
        <div className="profile-drop-down border-8px-neon-blue">
          <div className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img className="line-6-2" src={line66} />
            <img className="line-6-3" src={line67} />
            <img className="line-6-2" src={line68} />
            <img className="line-6-3" src={line69} />
          </div>
          <div className="flex-row-5">
            <div className="overlap-group-1">
              <img className="profile-pic-1" src={profilePic} />
              <div className="ellipse-44-1 border-1px-neon-blue"></div>
              <div className="ellipse-4-1 border-4px-neon-blue"></div>
              <div className="ellipse-46-1 border-0-8px-neon-blue"></div>
              <div className="ellipse-4-1 border-0-5px-neon-blue"></div>
            </div>
            <div className="flex-col-2">
              <div className="overlap-group4-1">
                <div className="surname-1 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
                <img className="vector-19-1" src={vector19} />
                <img className="line-110-1" src={line110} />
              </div>
              <div className="overlap-group6-1">
                <img className="rectangle-458-1" src={rectangle458} />
                <div className="text-3 valign-text-middle chakrapetch-semi-bold-white-12px">{text3}</div>
              </div>
            </div>
            <div className="overlap-group2-1">
              <div className="hxc-1 chakrapetch-normal-white-18px">{hxc}</div>
              <div className="text-4 chakrapetch-semi-bold-magenta--fuchsia-24px">{text4}</div>
              <img className="union-2" src={union} />
              <div className="place-1 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
            </div>
            <div className="overlap-group3-1">
              <div className="usd-1 chakrapetch-normal-white-18px">{usd}</div>
              <div className="phone-1 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
              <img className="union-3" src={union2} />
              <div className="withdraw-1 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
            </div>
          </div>
          <div className="overlap-group5-1">
            <img className="line-5" src={line5} />
            <img className="line-111" src={line111} />
          </div>
          <div className="flex-row-6">
            <img className="box-icon-1" src={boxIcon} />
            <div className="my-mystery-boxes-1 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
          </div>
          <div className="flex-row-7">
            <img className="sneaker-icon-1" src={sneakerIcon} />
            <div className="my-collections-1 chakrapetch-medium-bright-turquoise-30px">{myCollections}</div>
          </div>
          <div className="flex-row-8">
            <img className="x-icon-1" src={puzzleIcon} />
            <div className="my-nft-cards-1 chakrapetch-medium-bright-turquoise-30px">{myNftCards}</div>
          </div>
          <div className="flex-row-9">
            <img className="x-icon-1" src={affiliatesIcon} />
            <div className="my-status-1 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="flex-row-10">
            <img className="x-icon-1" src={walletIcon} />
            <div className="my-wallets-1 chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
          </div>
          <div className="flex-row-11">
            <img className="x-icon-1" src={settingIcon} />
            <div className="my-setting-1 chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown2;
