import React from "react";
import { Link } from "react-router-dom";
import "./MorphPage.css";

function MorphPage(props) {
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
    vector21,
    vector22,
    x0857C7A77Ba118452F804605818D564D0E,
    x0857C7A77Ba118452F804605818D564D0E2,
    text5,
    e29C9C180C6279B0B02Abd6A1801C7C0408,
    text6,
    f5Ca38F748A1D6Eaf726B8A42Fb575C3C71,
    f5Ca38F748A1D6Eaf726B8A42Fb575C3C712,
    wechatImage_202108291118591,
    vector20,
    vector23,
    insurance,
    spanText,
    spanText2,
    spanText3,
    group1,
    morph,
    union2,
    line70,
    line71,
    line72,
    line73,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="morph-page screen">
        <div className="flex-row-12">
          <div className="overlap-group1-2">
            <Link to="/home-limited-box">
            <img className="hypexlogoedited-removebg-1" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/stake-info-page">
              <div className="stake valign-text-middle chakrapetch-normal-white-25px">{stake}</div>
            </Link>
            <Link to= "/fragment-factory">
              <div className="fragment-factory valign-text-middle chakrapetch-normal-white-25px">{fragmentFactory}</div>
            </Link>
            <div className="nft-moorph valign-text-middle chakrapetch-normal-bright-turquoise-25px">{nftMoorph}</div>
            <Link to="/forge-page">
              <div className="nft-forge valign-text-middle chakrapetch-normal-white-25px">{nftForge}</div>
            </Link>
            <img className="union-4" src={union} />
          </div>
          <Link to="/loan">
            <div className="loan valign-text-middle chakrapetch-normal-white-25px">{loan}</div>
          </Link>
          <Link to="/wallet">
          <div className="overlap-group2-2">
            <img className="profile-pic-2" src={profilePic} />
            <div className="ellipse-40 border-1px-neon-blue"></div>
            <div className="ellipse-42 border-4px-neon-blue"></div>
            <div className="ellipse-41 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown', 'animate-appear');">
              <div className="ellipse-43 border-0-5px-neon-blue"></div>
            </a>
          </div>
          </Link>
          <img className="shoppingbag" src={shopping_Bag} />
        </div>
        <div className="flex-row-13">
          <div className="flex-col-3">
            <img className="vector-2" src={vector21} />
            <img className="vector-2-1" src={vector22} />
          </div>
          <div className="flex-col-4">
            <img className="x0857c7a77ba1184-70c85f231fbbb-1" src={x0857C7A77Ba118452F804605818D564D0E} />
            <img className="x0857c7a77ba1184-70c85f231fbbb-2" src={x0857C7A77Ba118452F804605818D564D0E2} />
          </div>
          <div className="flex-col-5 chakrapetch-normal-white-30px">
            <div className="text-5 valign-text-middle">{text5}</div>
            <img className="e29c9c180c6279b-15e4f3884bb6b-1" src={e29C9C180C6279B0B02Abd6A1801C7C0408} />
            <div className="text-6 valign-text-middle">{text6}</div>
            <img className="f5ca38f748a1d6e-de13da2d9202b-2" src={f5Ca38F748A1D6Eaf726B8A42Fb575C3C71} />
          </div>
          <div className="flex-col-6">
            <img className="f5ca38f748a1d6e-de13da2d9202b-1" src={f5Ca38F748A1D6Eaf726B8A42Fb575C3C712} />
            <img className="we-chat-image20210829111859-1" src={wechatImage_202108291118591} />
          </div>
          <div className="flex-col-7">
            <img className="vector-2" src={vector20} />
            <img className="vector-2-1" src={vector23} />
          </div>
          <div className="flex-col-8">
            <div className="overlap-group4-2">
              <div className="overlap-group3-2">
                <div className="insurance chakrapetch-normal-white-30px">{insurance}</div>
                <div className="cost-20-hxc chakrapetch-normal-white-30px-2">
                  <span className="chakrapetch-normal-white-30px">{spanText}</span>
                  <span className="span1">{spanText2}</span>
                  <span className="chakrapetch-normal-white-30px">{spanText3}</span>
                </div>
              </div>
              <img className="group-1" src={group1} />
            </div>
            <div className="overlap-group-2">
              <div className="morph valign-text-middle">{morph}</div>
              <img className="union-5" src={union2} />
              <img className="line-70" src={line70} />
              <img className="line-71" src={line71} />
              <img className="line-72" src={line72} />
              <img className="line-73" src={line73} />
            </div>
            <div className="cost-40-hxc">
              <span className="chakrapetch-normal-white-25px">{spanText4}</span>
              <span className="span1-1">{spanText5}</span>
              <span className="chakrapetch-normal-white-25px">{spanText6}</span>
            </div>
            <div className="x70-success-rate chakrapetch-normal-white-35px">
              <span className="span0">{spanText7}</span>
              <span className="chakrapetch-normal-white-35px-2">{spanText8}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MorphPage;
