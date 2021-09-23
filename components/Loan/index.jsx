import React from "react";
import { Link } from "react-router-dom";
import "./Loan.css";

function Loan(props) {
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
    text28,
    x35135Aaa6Cc23891B40Cb3F378C53A17A1,
    vector21,
    wechatImage_202109150120353,
    vector20,
    name,
    line109,
    vector22,
    spanText,
    spanText2,
    spanText3,
    number,
    text29,
    text30,
    quantity,
    text31,
    price,
    text27,
    overlapGroup3,
    loan2,
    e55E1658E2Ba74E8Ce1B48C8604B674Ee90,
    yourLoan,
    placeholder,
    percent,
    rectangle431,
    totalLoanDebt,
    price2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="loan-7 screen">
        <div className="flex-row-55">
          <div className="overlap-group-15">
            <img className="hypexlogoedited-removebg-1-7" src={hype_X_Logo_EditedRemovebg1} />
            <Link to="/stake-info-page">
              <div className="stake-7 valign-text-middle chakrapetch-normal-white-25px">{stake}</div>
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-9 valign-text-middle chakrapetch-normal-white-25px">{fragmentFactory}</div>
            </Link>
            <Link to="/morph-page">
              <div className="nft-moorph-7 valign-text-middle chakrapetch-normal-white-25px">{nftMoorph}</div>
            </Link>
            <Link to="/forge-page">
              <div className="nft-forge-7 valign-text-middle chakrapetch-normal-white-25px">{nftForge}</div>
            </Link>
            <img className="union-27" src={union} />
            <div className="loan-8 valign-text-middle chakrapetch-normal-bright-turquoise-25px">{loan}</div>
          </div>
          <div className="overlap-group4-12">
            <img className="profile-pic-14" src={profilePic} />
            <div className="ellipse-40-7 border-1px-neon-blue"></div>
            <div className="ellipse-42-6 border-4px-neon-blue"></div>
            <div className="ellipse-41-7 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown', 'animate-appear');">
              <div className="ellipse-43-6 border-0-5px-neon-blue"></div>
            </a>
          </div>
          <img className="shoppingbag-7" src={shopping_Bag} />
        </div>
        <div className="flex-row-56">
          <div className="flex-col-33">
            <div className="text-28 valign-text-middle chakrapetch-bold-white-28px">{text28}</div>
            <div className="flex-row-57">
              <img className="x35135aaa6cc2389-cf03efcfdaec458-1" src={x35135Aaa6Cc23891B40Cb3F378C53A17A1} />
              <img className="vector-21" src={vector21} />
              <img className="we-chat-image20210915012035-3" src={wechatImage_202109150120353} />
              <img className="vector-20" src={vector20} />
            </div>
            <div className="name valign-text-middle chakrapetch-bold-white-36px">{name}</div>
            <div className="overlap-group5-11">
              <div className="overlap-group2-13">
                <img className="line-109" src={line109} />
                <img className="vector-22" src={vector22} />
                <div className="in-ustusd chakrapetch-normal-white-24px">
                  <span className="chakrapetch-normal-white-24px">{spanText}</span>
                  <span className="chakrapetch-semi-bold-white-24px">{spanText2}</span>
                  <span className="chakrapetch-bold-white-24px">{spanText3}</span>
                </div>
                <div className="number-1 valign-text-middle chakrapetch-bold-white-28px">{number}</div>
                <div className="text-29 valign-text-middle chakrapetch-bold-white-28px">{text29}</div>
                <div className="text-30 valign-text-middle chakrapetch-bold-white-28px">{text30}</div>
              </div>
              <div className="quantity valign-text-middle chakrapetch-medium-white-18px">{quantity}</div>
              <div className="text-31 valign-text-middle chakrapetch-medium-white-18px">{text31}</div>
              <div className="price-4 valign-text-middle chakrapetch-semi-bold-white-36px">{price}</div>
            </div>
            <div className="text-27 valign-text-middle chakrapetch-medium-white-18px">{text27}</div>
            <div className="overlap-group3-13" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <div className="loan-9 valign-text-middle chakrapetch-bold-mirage-28px">{loan2}</div>
            </div>
          </div>
          <div className="flex-row-58">
            <img className="e55e1658e2ba74e-8d8ba32d9358b9b-1" src={e55E1658E2Ba74E8Ce1B48C8604B674Ee90} />
            <div className="flex-col-34">
              <div className="your-loan valign-text-middle chakrapetch-bold-white-24px">{yourLoan}</div>
              <div className="overlap-group1-13">
                <div className="placeholder chakrapetch-normal-white-18px">{placeholder}</div>
                <div className="percent chakrapetch-semi-bold-white-24px">{percent}</div>
                <img className="rectangle-431" src={rectangle431} />
                <div className="total-loan-debt valign-text-middle chakrapetch-medium-white-18px">{totalLoanDebt}</div>
                <div className="price-5 chakrapetch-normal-white-48px">{price2}</div>
                <div className="rectangle-455"></div>
                <div className="rectangle-456"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loan;
