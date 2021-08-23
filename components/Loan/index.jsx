import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import "./Loan.css";

function Loan(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    text35,
    yourLoan,
    image60,
    file_16010789496713,
    image59,
    placeholder,
    percent,
    totalLoanDebt,
    price,
    name,
    number,
    text33,
    text34,
    quantity,
    text31,
    price2,
    spanText,
    spanText2,
    spanText3,
    text32,
    loan2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="loan-8 screen">
        <div className="flex-col-72">
          <div className="flex-col-73">
            <div className="flex-row-92">
              <div className="overlap-group-25">
                <Link to="/home-limited-box">
                  <img className="hypexlogoedited-removebg-1-13" src={hype_X_Logo_EditedRemovebg1} />
                </Link>
                <Link to="/fragment-factory">
                  <div className="fragment-factory-10 valign-text-middle chakrapetch-medium-white-21px">
                    {fragmentFactory}
                  </div>
                </Link>
              </div>
              <div className="overlap-group8-11">
                <img className="union-16" src="/img/union-32@2x.svg" />
                <Link to="/stake-info-page">
                  <div className="stake-8 valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
                </Link>
                <div className="loan-9 valign-text-middle chakrapetch-medium-bright-turquoise-21px">{loan}</div>
              </div>
              <Link to="/display-nfts">
                <div className="display-nf-ts-8 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
              </Link>
              <Link to="/wallet">
                <div className="overlap-group2-23">
                  <img className="profile-pic-13" src={profilePic} />
                  <div className="ellipse-40-13 border-1px-neon-blue"></div>
                  <div className="ellipse-42-8 border-4px-neon-blue"></div>
                  <div className="ellipse-41-13 border-0-8px-neon-blue"></div>
                  <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
                    <div className="ellipse-43-8 border-0-5px-neon-blue"></div>
                  </a>
                </div>
              </Link>
              <ShoppingBag />
            </div>
            <div className="flex-row-93">
              <div className="text-35 valign-text-middle chakrapetch-bold-white-28px">{text35}</div>
              <div className="your-loan valign-text-middle chakrapetch-bold-white-24px">{yourLoan}</div>
            </div>
          </div>
          <div className="flex-row-94">
            <div className="overlap-group5-11">
              <img className="image-60-2" src={image60} />
              <img className="rectangle-454-2" src="/img/rectangle-454@2x.svg" />
              <img className="vector-21-6" src="/img/vector-21-4@2x.svg" />
            </div>
            <img className="file1601078949671-3-3" src={file_16010789496713} />
            <div className="overlap-group6-15">
              <img className="image-59-3" src={image59} />
              <img className="vector-20-6" src="/img/vector-20-4@2x.svg" />
              <img className="rectangle-453-2" src="/img/rectangle-453@2x.svg" />
            </div>
            <div className="overlap-group1-18">
              <div className="placeholder chakrapetch-normal-white-18px">{placeholder}</div>
              <div className="percent chakrapetch-semi-bold-white-24px">{percent}</div>
              <img className="rectangle-431" src="/img/rectangle-431-3@2x.svg" />
              <div className="total-loan-debt valign-text-middle chakrapetch-medium-white-18px">{totalLoanDebt}</div>
              <div className="price-13 chakrapetch-normal-white-48px">{price}</div>
              <div className="rectangle-455"></div>
              <div className="rectangle-456"></div>
            </div>
          </div>
          <div className="name-21 valign-text-middle chakrapetch-bold-white-36px">{name}</div>
        </div>
        <div className="flex-row-95">
          <div className="overlap-group10-9">
            <div className="overlap-group4-31">
              <img className="line-109" src="/img/line-109@2x.svg" />
              <div className="number-22 valign-text-middle chakrapetch-bold-white-28px">{number}</div>
              <div className="text-33 valign-text-middle chakrapetch-bold-white-28px">{text33}</div>
              <div className="text-34 valign-text-middle chakrapetch-bold-white-28px">{text34}</div>
            </div>
            <div className="quantity valign-text-middle chakrapetch-medium-white-18px">{quantity}</div>
          </div>
          <div className="flex-col-74">
            <div className="text-31 valign-text-middle chakrapetch-medium-white-18px">{text31}</div>
            <div className="price-14 valign-text-middle chakrapetch-semi-bold-white-36px">{price2}</div>
          </div>
        </div>
        <div className="overlap-group7-12">
          <img className="vector-22-1" src="/img/vector-22-2@2x.svg" />
          <div className="in-ustusd chakrapetch-normal-white-24px">
            <span className="chakrapetch-normal-white-24px">{spanText}</span>
            <span className="chakrapetch-semi-bold-white-24px">{spanText2}</span>
            <span className="chakrapetch-bold-white-24px">{spanText3}</span>
          </div>
        </div>
        <div className="text-32 valign-text-middle chakrapetch-medium-white-18px">{text32}</div>
        <div className="overlap-group3-17">
          <a href="javascript:ShowOverlay('loan-success', 'animate-appear');">
            <img className="union-17" src="/img/union-45@2x.svg" />
          </a>
          <div className="loan-10 valign-text-middle chakrapetch-bold-mirage-28px">{loan2}</div>
        </div>
      </div>
    </div>
  );
}

export default Loan;
