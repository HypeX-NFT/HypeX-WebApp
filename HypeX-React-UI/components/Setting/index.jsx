import React from "react";
import Frame from "../Frame";
import Frame2 from "../Frame2";
import Frame3 from "../Frame3";
import AccountBalanceWallet from "../AccountBalanceWallet";
import StateDefault from "../StateDefault";
import StateDefault2 from "../StateDefault2";
import "./Setting.css";

function Setting(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    myBoxes,
    myInventory,
    userStatus,
    myFragments,
    wallet,
    settings,
    setting,
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
          <img className="hypexlogoedited-removebg-1-6" src={hype_X_Logo_EditedRemovebg1} />
          <div className="flex-row-46">
            <Frame />
            <div className="my-boxes-2 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">{myBoxes}</div>
          </div>
          <div className="flex-row-47">
            <Frame2 />
            <div className="my-inventory-2 valign-text-middle chakrapetch-bold-blue-violet-22-1px">{myInventory}</div>
          </div>
          <div className="flex-row-48">
            <img className="vector-98" src="/img/vector-12@2x.svg" />
            <div className="user-status-3 valign-text-middle chakrapetch-bold-rhino-22-1px">{userStatus}</div>
          </div>
          <div className="flex-row-49">
            <Frame3 />
            <div className="my-fragments-2 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">
              {myFragments}
            </div>
          </div>
          <div className="flex-row-50">
            <AccountBalanceWallet className={accountBalanceWalletProps.className} />
            <div className="wallet-4 valign-text-middle chakrapetch-bold-rhino-22-1px-2">{wallet}</div>
          </div>
          <div className="overlap-group18-1">
            <img className="rectangle-462" src="/img/rectangle-462@2x.svg" />
            <div className="settings-2 valign-text-middle chakrapetch-bold-white-22-1px">{settings}</div>
            <img className="vector-99" src="/img/vector-73@2x.svg" />
            <div className="rectangle-263-2"></div>
          </div>
        </div>
        <div className="flex-col-37">
          <div className="s-etting valign-text-middle chakrapetch-semi-bold-white-36px">{setting}</div>
          <div className="overlap-group20-2">
            <div className="overlap-group-13">
              <div className="enter-address valign-text-middle baijamjuree-medium-regent-gray-20px">{enterAddress}</div>
              <img className="vector-96" src="/img/vector-16-1@2x.svg" />
            </div>
            <div className="overlap-group-14">
              <img className="rectangle-4-4" src="/img/rectangle-426-2@2x.svg" />
              <StateDefault />
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault2Props.children}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-11">
            <div className="overlap-group-13">
              <div className="enter-id valign-text-middle baijamjuree-medium-regent-gray-20px">{enterId}</div>
              <img className="vector-96" src="/img/vector-16-1@2x.svg" />
            </div>
            <div className="overlap-group-14">
              <img className="rectangle-4-4" src="/img/rectangle-426-2@2x.svg" />
              <StateDefault />
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault22Props.children}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-12">
            <div className="overlap-group-13">
              <div className="enter-phone-number valign-text-middle baijamjuree-medium-regent-gray-20px">
                {enterPhoneNumber}
              </div>
              <img className="vector-96" src="/img/vector-16-1@2x.svg" />
            </div>
            <div className="overlap-group-14">
              <img className="rectangle-4-4" src="/img/rectangle-426-2@2x.svg" />
              <StateDefault />
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault23Props.children}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-11">
            <div className="overlap-group-13">
              <div className="enter-email valign-text-middle baijamjuree-medium-regent-gray-20px">{enterEmail}</div>
              <img className="vector-96" src="/img/vector-16-1@2x.svg" />
            </div>
            <div className="overlap-group-14">
              <img className="rectangle-4-4" src="/img/rectangle-426-2@2x.svg" />
              <StateDefault />
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault24Props.children}</StateDefault2>
            </div>
          </div>
        </div>
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
          <div className="overlap-group21-1">
            <div className="overlap-group-13">
              <div className="enter-password valign-text-middle baijamjuree-medium-regent-gray-20px">
                {enterPassword}
              </div>
              <img className="vector-96" src="/img/vector-16-1@2x.svg" />
            </div>
            <div className="overlap-group-14">
              <img className="rectangle-4-4" src="/img/rectangle-426-2@2x.svg" />
              <StateDefault />
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault25Props.children}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group22-1">
            <div className="overlap-group-13">
              <div className="select-language valign-text-middle baijamjuree-medium-regent-gray-20px">
                {selectLanguage}
              </div>
              <img className="vector-96" src="/img/vector-16-1@2x.svg" />
            </div>
            <div className="overlap-group-14">
              <img className="rectangle-4-4" src="/img/rectangle-426-2@2x.svg" />
              <StateDefault />
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault26Props.children}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-12">
            <div className="overlap-group-13">
              <div className="text-14 valign-text-middle baijamjuree-medium-regent-gray-20px">{text14}</div>
              <img className="vector-96" src="/img/vector-16-1@2x.svg" />
            </div>
            <div className="overlap-group-14">
              <img className="rectangle-4-4" src="/img/rectangle-426-2@2x.svg" />
              <StateDefault />
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault27Props.children}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group24-2">
            <div className="overlap-group-13">
              <div className="select-theme-color valign-text-middle baijamjuree-medium-regent-gray-20px">
                {selectThemeColor}
              </div>
              <img className="vector-96" src="/img/vector-16-1@2x.svg" />
            </div>
            <div className="overlap-group-14">
              <img className="rectangle-4-4" src="/img/rectangle-426-2@2x.svg" />
              <StateDefault />
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault28Props.children}</StateDefault2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
