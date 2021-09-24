import React from "react";
import { Link } from "react-router-dom";
import "./StakeInfoPage.css";

function StakeInfoPage(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    stake,
    fragmentFactory,
    nftMoorph,
    nftForge,
    union,
    loan,
    profilePic,
    shopping_Bag,
    text22,
    text23,
    overlapGroup,
    line70,
    line72,
    stakeNow,
    line71,
    line73,
    image59,
    rectangle453,
    file_16010746003624,
    rectangle454,
    file_16010789496713,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="stake-info-page screen">
        <div className="flex-row-45">
          <div className="overlap-group3-10">
            <Link to="home-limited-box">
              <img className="hypexlogoedited-removebg-1-3" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <div className="stake-3 valign-text-middle chakrapetch-normal-bright-turquoise-25px">{stake}</div>
            <Link to="/fragment-factory">
              <div className="fragment-factory-5 valign-text-middle chakrapetch-normal-white-25px">{fragmentFactory}</div>
            </Link>
            <Link to="/morph-page">
              <div className="nft-moorph-3 valign-text-middle chakrapetch-normal-white-25px">{nftMoorph}</div>
            </Link>
            <Link to="/forge-page">
              <div className="nft-forge-3 valign-text-middle chakrapetch-normal-white-25px">{nftForge}</div>
            </Link>
            <img className="union-23" src={union} />
          </div>
          <Link to="/loan">
            <div className="loan-3 valign-text-middle chakrapetch-normal-white-25px">{loan}</div>
          </Link>
          <Link to= "/my-box">
          <div className="overlap-group5-9">
            <img className="profile-pic-10" src={profilePic} />
            <div className="ellipse-40-3 border-1px-neon-blue"></div>
            <div className="ellipse-42-3 border-4px-neon-blue"></div>
            <div className="ellipse-41-3 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown', 'animate-appear');">
              <div className="ellipse-43-3 border-0-5px-neon-blue"></div>
            </a>
          </div>
          </Link>
          <img className="shoppingbag-3" src={shopping_Bag} />
        </div>
        <div className="flex-row-46">
          <div className="flex-col-24">
            <div className="text-22 valign-text-middle">{text22}</div>
            <div className="text-23 chakrapetch-normal-white-18px">{text23}</div>
            <div className="overlap-group-10" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <div className="overlap-group1-10">
                <img className="line-70-1" src={line70} />
                <img className="line-72-1" src={line72} />
              </div>
              <div className="stake-now valign-text-middle">{stakeNow}</div>
              <div className="overlap-group2-10">
                <img className="line-71-1" src={line71} />
                <img className="line-73-1" src={line73} />
              </div>
            </div>
          </div>
          <div className="overlap-group4-10">
            <img className="image-59" src={image59} />
            <img className="rectangle-453" src={rectangle453} />
            <img className="file1601074600362-4" src={file_16010746003624} />
            <img className="rectangle-454" src={rectangle454} />
            <img className="file1601078949671-3" src={file_16010789496713} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakeInfoPage;
