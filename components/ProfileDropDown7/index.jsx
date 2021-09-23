import React from "react";
import "./ProfileDropDown7.css";

function ProfileDropDown7(props) {
  const {
    overlapGroup5,
    line66,
    line67,
    line68,
    line69,
    profilePic,
    surname,
    vector19,
    line110,
    rectangle458,
    text20,
    hxc,
    text21,
    union,
    place,
    usd,
    phone,
    union2,
    withdraw,
    line112,
    boxIcon,
    myMysteryBoxes,
    sneakerIcon,
    myCollections,
    puzzleIcon,
    myNftCards,
    overlapGroup6,
    affiliatesIcon,
    myStatus,
    walletIcon,
    myWallets,
    settingIcon,
    mySetting,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile-dropdown6 border-8px-neon-blue screen">
        <div className="overlap-group5-7" style={{ backgroundImage: `url(${overlapGroup5})` }}>
          <img className="line-6-12" src={line66} />
          <img className="line-6-13" src={line67} />
          <img className="line-6-12" src={line68} />
          <img className="line-6-13" src={line69} />
        </div>
        <div className="flex-row-37">
          <div className="overlap-group-8">
            <img className="profile-pic-8" src={profilePic} />
            <div className="ellipse-44-6 border-1px-neon-blue"></div>
            <div className="ellipse-4-6 border-4px-neon-blue"></div>
            <div className="ellipse-46-6 border-0-8px-neon-blue"></div>
            <div className="ellipse-4-6 border-0-5px-neon-blue"></div>
          </div>
          <div className="flex-col-21">
            <div className="overlap-group2-8">
              <div className="surname-6 valign-text-middle chakrapetch-medium-white-20px">{surname}</div>
              <img className="vector-19-6" src={vector19} />
              <img className="line-110-6" src={line110} />
            </div>
            <div className="overlap-group4-8">
              <img className="rectangle-458-6" src={rectangle458} />
              <div className="text-20 valign-text-middle chakrapetch-semi-bold-white-12px">{text20}</div>
            </div>
          </div>
          <div className="overlap-group1-8">
            <div className="hxc-6 chakrapetch-normal-white-18px">{hxc}</div>
            <div className="text-21 chakrapetch-semi-bold-magenta--fuchsia-24px">{text21}</div>
            <img className="union-21" src={union} />
            <div className="place-6 valign-text-middle chakrapetch-medium-white-20px">{place}</div>
          </div>
          <div className="overlap-group3-8">
            <div className="usd-6 chakrapetch-normal-white-18px">{usd}</div>
            <div className="phone-6 chakrapetch-semi-bold-bright-turquoise-24px">{phone}</div>
            <img className="union-22" src={union2} />
            <div className="withdraw-6 valign-text-middle chakrapetch-medium-white-20px">{withdraw}</div>
          </div>
        </div>
        <div className="flex-col-22">
          <img className="line-112-2" src={line112} />
          <div className="flex-row-38">
            <img className="box-icon-6" src={boxIcon} />
            <div className="my-mystery-boxes-6 chakrapetch-medium-bright-turquoise-30px">{myMysteryBoxes}</div>
          </div>
          <div className="flex-row-39">
            <img className="sneaker-icon-6" src={sneakerIcon} />
            <div className="my-collections-6 chakrapetch-medium-bright-turquoise-30px">{myCollections}</div>
          </div>
          <div className="flex-row-40">
            <img className="x-icon-6" src={puzzleIcon} />
            <div className="my-nft-cards-6 chakrapetch-medium-bright-turquoise-30px">{myNftCards}</div>
          </div>
          <div className="overlap-group6-7" style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <div className="affiliate-5">
              <img className="x-icon-6" src={affiliatesIcon} />
              <div className="my-status-6 chakrapetch-medium-white-30px">{myStatus}</div>
            </div>
          </div>
          <div className="flex-row-41">
            <img className="x-icon-6" src={walletIcon} />
            <div className="my-wallets-6 chakrapetch-medium-bright-turquoise-30px">{myWallets}</div>
          </div>
          <div className="flex-row-42">
            <img className="x-icon-6" src={settingIcon} />
            <div className="my-setting-6 chakrapetch-medium-bright-turquoise-30px">{mySetting}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown7;
