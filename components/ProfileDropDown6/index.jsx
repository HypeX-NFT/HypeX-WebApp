import React from "react";
import "./ProfileDropDown6.css";

function ProfileDropDown6(props) {
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
    text18,
    hxc,
    text19,
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
    puzzleIcon,
    myNftCards,
    affiliatesIcon,
    myStatus,
    walletIcon,
    myWallets,
    overlapGroup2,
    settingIcon,
    mySetting,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile-dropdown5 border-8px-neon-blue screen">
        <div className="overlap-group1-7" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <img className="line-6-10" src={line66} />
          <img className="line-6-11" src={line67} />
          <img className="line-6-10" src={line68} />
          <img className="line-6-11" src={line69} />
        </div>
        <div className="flex-row-32">
          <div className="overlap-group3-7">
            <img className="profile-pic-7" src={profilePic} />
            <div className="ellipse-44-5 border-1px-neon-blue"></div>
            <div className="ellipse-4-5 border-4px-neon-blue"></div>
            <div className="ellipse-46-5 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-5 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-19">
            <div className="overlap-group-7">
              <div className="surname-5 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-5" src={vector19} />
              <img className="line-110-5" src={line110} />
            </div>
            <div className="overlap-group6-6">
              <img className="rectangle-458-5" src={rectangle458} />
              <div className="text-18 valign-text-middle chakrapetch-semi-bold-white-12px">{text18}</div>
            </div>
          </div>
          <div className="overlap-group4-7">
            <div className="hxc-5 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-19 chakrapetch-semi-bold-magenta--fuchsia-24px">{text19}</div>
            <img className="union-19" src={union} />
            <div className="place-5 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
          </div>
          <div className="overlap-group5-6">
            <div className="usd-5 chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone-5 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-20" src={union2} />
            <div className="withdraw-5 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-20">
          <img className="line-111-3" src={line111} />
          <div className="flex-row-33">
            <img className="box-icon-5" src={boxIcon} />
            <div className="my-mystery-boxes-5 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
          </div>
          <div className="flex-row-34">
            <img className="sneaker-icon-5" src={sneakerIcon} />
            <div className="my-collections-5 chakrapetch-medium-bright-turquoise-30px">{myCollections}</div>
          </div>
          <div className="flex-row-35">
            <img className="x-icon-5" src={puzzleIcon} />
            <div className="my-nft-cards-5 chakrapetch-medium-bright-turquoise-30px">{myNftCards}</div>
          </div>
          <div className="affiliate-4">
            <img className="x-icon-5" src={affiliatesIcon} />
            <div className="my-status-5 chakrapetch-medium-bright-turquoise-30px">{myStatus}</div>
          </div>
          <div className="flex-row-36">
            <img className="x-icon-5" src={walletIcon} />
            <div className="my-wallets-5 chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
          </div>
          <div className="overlap-group2-7" style={{ backgroundImage: `url(${overlapGroup2})` }}>
            <img className="setting-icon" src={settingIcon} />
            <div className="my-setting-5 chakrapetch-medium-white-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown6;
