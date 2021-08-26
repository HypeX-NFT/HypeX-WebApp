import React from "react";
import Frame from "../Frame";
import Frame2 from "../Frame2";
import Frame3 from "../Frame3";
import AccountBalanceWallet from "../AccountBalanceWallet";
import StateDefault from "../StateDefault";
import StateDefault2 from "../StateDefault2";
import { Link } from "react-router-dom";
import "./EditPaymentMethod.css";

function EditPaymentMethod(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    myBoxes,
    myInventory,
    userStatus,
    addCard,
    wallet,
    manageCards,
    title,
    enterAddress,
    enterId,
    enterPhoneNumber,
    enterEmail,
    profilePic,
    surname,
    enterPassword,
    selectLanguage,
    text14,
    selectThemeColor,
    accountBalanceWalletProps,
    stateDefault2Props,
    stateDefault22Props,
    stateDefault23Props,
    stateDefault24Props,
    stateDefault25Props,
    stateDefault26Props,
    stateDefault27Props,
    stateDefault28Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="setting screen">
        <div className="overlap-group4-8">
          <Link to="/home-limited-box">
           <img className="hypexlogoedited-removebg-1-6" src={hype_X_Logo_EditedRemovebg1} />
          </Link>
          <div className="overlap-group18-1">
            <div className="settings-2 valign-text-middle">{manageCards}</div>
            <div className="rectangle-263-2"></div>
          </div>
          <Link to="/add-payment-method">
            <div className="flex-row-49">
                <div className="my-fragments-2 valign-text-middle">
                {addCard}
                </div>
            </div>
          </Link>
        </div>
        <div className="flex-col-37">
          <div className="s-etting valign-text-middle">{title}</div>
        </div>
        <Link to="/wallet">
          <div className="flex-col-38">
            <div className="flex-row-51">
              <div className="overlap-group12-1">
                <img className="profile-pic-6" src={profilePic} />
                <div className="ellipse-40-6 border-1px-neon-blue"></div>
                <div className="ellipse-4-2 border-4px-neon-blue"></div>
                <div className="ellipse-41-6 border-0-8px-neon-blue"></div>
                <div className="ellipse-4-2 border-0-5px-neon-blue"></div>
              </div>
              <div className="surname-4 valign-text-middle chakrapetch-bold-white-20px">{surname}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EditPaymentMethod;
