import React from "react";
import Frame from "../Frame";
import Frame2 from "../Frame2";
import Frame3 from "../Frame3";
import AccountBalanceWallet from "../AccountBalanceWallet";
import Search from "../Search";
import ArrowForwardIos2 from "../ArrowForwardIos2";
import Icon from "../Icon";
import { Link } from "react-router-dom";
import "./MyStatus.css";

function MyStatus(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    myBoxes,
    myInventory,
    userStatus,
    myFragments,
    wallet,
    settings,
    userStatus2,
    totalStaked,
    x45000Hxc,
    x368036Usd,
    totalNftStaked,
    x30000Hxc,
    x245357Usd,
    totalHxcStaked,
    x15000Hxc,
    x122679Usd,
    totalHxcEarned,
    x5000Hxc,
    x40893Usd,
    level2,
    stakingAmount,
    x50000Hxc,
    address,
    address2,
    text9,
    address3,
    search,
    profilePic,
    surname,
    referralHistory,
    referralCode,
    seeAll,
    text8,
    purchasing,
    reward,
    weekly,
    name,
    lucasAmaetaInfoCo,
    lucasAmaeta,
    lucasAmaetaInfoCo2,
    lucasAmaeta2,
    lucasAmaetaInfoCo3,
    price,
    x289,
    x2892,
    x2893,
    x2894,
    x2895,
    sep122019,
    sep122020,
    sep122021,
    profitGraph,
    number,
    number2,
    number3,
    number4,
    number5,
    number6,
    name2,
    feb,
    place,
    apr,
    name3,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec,
    accountBalanceWalletProps,
    searchProps,
    arrowForwardIos2Props,
    arrowForwardIos22Props,
    iconProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="my-status screen">
        <div className="flex-row-26">
          <img className="union-4" src="/img/union-29@1x.svg" />
          <div className="overlap-group5-6">
            <Link to="/home-limited-box">
              <img className="hypexlogoedited-removebg-1-4" src={hype_X_Logo_EditedRemovebg1} />
            </Link>
            <Link to="/my-box">
              <div className="flex-row-27">
                <Frame />
                <div className="my-boxes-1 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">{myBoxes}</div>
              </div>
            </Link>
            <Link to="/my-inventory">
              <div className="flex-row-28">
                <Frame2 />
                <div className="my-inventory-1 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">
                  {myInventory}
                </div>
              </div>
            </Link>
            <div className="overlap-group10-5">
              <div className="rectangle-263-1"></div>
              <img className="vector-86" src="/img/vector-48@2x.svg" />
              <div className="user-status-1 valign-text-middle chakrapetch-bold-white-22-1px">{userStatus}</div>
            </div>
            <Link to="/my-fragments">
              <div className="flex-row-29">
                <Frame3 />
                <div className="my-fragments-1 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">
                  {myFragments}
                </div>
              </div>
            </Link>
            <Link to="/wallet">
              <div className="flex-row-30">
                <AccountBalanceWallet className={accountBalanceWalletProps.className} />
                <div className="wallet-3 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">{wallet}</div>
              </div>
            </Link>
            <Link to="/setting">
              <div className="flex-row-31">
                <img className="vector-87" src="/img/vector-49@2x.svg" />
                <div className="settings-1 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">{settings}</div>
              </div>
            </Link>
          </div>
          <div className="flex-col-21">
            <div className="user-status-2 valign-text-middle chakrapetch-semi-bold-white-36px">{userStatus2}</div>
            <div className="flex-row-32">
              <div className="overlap-group4-6">
                <div className="total valign-text-middle chakrapetch-normal-blue-violet-18px">{totalStaked}</div>
                <div className="x45000-hxc chakrapetch-medium-white-36px">{x45000Hxc}</div>
                <div className="x-usd chakrapetch-normal-regent-gray-18px">{x368036Usd}</div>
              </div>
              <div className="overlap-group2-9">
                <div className="total valign-text-middle chakrapetch-normal-blue-violet-18px">{totalNftStaked}</div>
                <div className="x30000hxc chakrapetch-medium-white-36px">{x30000Hxc}</div>
                <div className="x-usd chakrapetch-normal-regent-gray-18px">{x245357Usd}</div>
              </div>
            </div>
            <div className="flex-row-33">
              <div className="overlap-group9-7">
                <div className="total valign-text-middle chakrapetch-normal-blue-violet-18px">{totalHxcStaked}</div>
                <div className="x15000hxc chakrapetch-medium-white-36px">{x15000Hxc}</div>
                <div className="x-usd chakrapetch-normal-regent-gray-18px">{x122679Usd}</div>
              </div>
              <div className="overlap-group6-6">
                <div className="total valign-text-middle chakrapetch-normal-blue-violet-18px">{totalHxcEarned}</div>
                <div className="x5000hxc chakrapetch-medium-white-36px">{x5000Hxc}</div>
                <div className="x-usd chakrapetch-normal-regent-gray-18px">{x40893Usd}</div>
              </div>
            </div>
            <div className="overlap-group7-5">
              <div className="flex-col-22">
                <div className="level-2 valign-text-middle chakrapetch-semi-bold-white-24px">{level2}</div>
                <div className="staking-amount valign-text-middle chakrapetch-normal-blue-violet-18px">
                  {stakingAmount}
                </div>
                <div className="x50000hxc chakrapetch-medium-white-36px">{x50000Hxc}</div>
                <div className="address valign-text-middle chakrapetch-normal-white-18px">{address}</div>
                <div className="address-1 valign-text-middle chakrapetch-normal-white-18px">{address2}</div>
                <div className="text-9 valign-text-middle chakrapetch-normal-white-18px">{text9}</div>
              </div>
              <div className="address-2 valign-text-middle">{address3}</div>
            </div>
          </div>
        </div>
        <div className="flex-col-23">
          <div className="flex-row-34">
            <div className="overlap-group8-3">
              <div className="search-8 valign-text-middle chakrapetch-semi-bold-white-19-9px">{search}</div>
              <Search className={searchProps.className} />
            </div>
            <div className="overlap-group3-5">
              <img className="profile-pic-4" src={profilePic} />
              <div className="ellipse-40-4 border-1px-neon-blue"></div>
              <div className="ellipse-4-1 border-4px-neon-blue"></div>
              <div className="ellipse-41-4 border-0-8px-neon-blue"></div>
              <div className="ellipse-4-1 border-0-5px-neon-blue"></div>
            </div>
            <div className="surname-3 valign-text-middle chakrapetch-bold-white-20px">{surname}</div>
          </div>
          <div className="flex-col-24">
            <div className="overlap-group1-5">
              <div className="flex-col-25">
                <div className="flex-row-35">
                  <div className="overlap-group12">
                    <div className="referral-history valign-text-middle chakrapetch-semi-bold-white-24px">
                      {referralHistory}
                    </div>
                    <div className="rectangle-478 border-2px-neon-blue"></div>
                    <div className="referral-code valign-text-middle">{referralCode}</div>
                  </div>
                  <div className="see-all-1 valign-text-middle chakrapetch-semi-bold-white-16px">{seeAll}</div>
                  <ArrowForwardIos2 className={arrowForwardIos2Props.className} />
                </div>
                <div className="flex-row-36">
                  <div className="text-8 valign-text-middle chakrapetch-normal-silver-16px">{text8}</div>
                  <div className="purchasing valign-text-middle chakrapetch-normal-silver-16px">{purchasing}</div>
                  <div className="reward valign-text-middle chakrapetch-normal-silver-16px">{reward}</div>
                  <div className="weekly valign-text-middle chakrapetch-normal-silver-16px">{weekly}</div>
                  <ArrowForwardIos2 className={arrowForwardIos22Props.className} />
                </div>
                <img className="line-80-1" src="/img/line-80-1@1x.svg" />
              </div>
              <div className="flex-row-37">
                <div className="flex-row-38">
                  <div className="flex-row-39">
                    <div className="flex-col-26">
                      <img className="mask-group" src="/img/mask-group@2x.svg" />
                      <img className="mask-group-1" src="/img/mask-group-1@2x.svg" />
                      <img className="mask-group-2" src="/img/mask-group-2@2x.svg" />
                    </div>
                    <div className="flex-col-27">
                      <div className="name-9 chakrapetch-medium-white-14px">{name}</div>
                      <div className="lucasamaetainfoco chakrapetch-normal-blue-violet-12px">{lucasAmaetaInfoCo}</div>
                      <div className="lucas-amaeta-4 chakrapetch-medium-white-14px">{lucasAmaeta}</div>
                      <div className="lucasamaetainfoco chakrapetch-normal-blue-violet-12px">{lucasAmaetaInfoCo2}</div>
                      <div className="lucas-amaeta-5 chakrapetch-medium-white-14px">{lucasAmaeta2}</div>
                      <div className="lucasamaetainfoco chakrapetch-normal-blue-violet-12px">{lucasAmaetaInfoCo3}</div>
                    </div>
                    <img className="path" src="/img/path-3@2x.svg" />
                  </div>
                  <div className="flex-col-28">
                    <div className="price-4 valign-text-middle chakrapetch-medium-quick-silver-14-9px">{price}</div>
                    <div className="x289-18 valign-text-middle chakrapetch-medium-quick-silver-14-9px">{x289}</div>
                    <div className="x289-19 valign-text-middle chakrapetch-medium-quick-silver-14-9px">{x2892}</div>
                  </div>
                  <img className="path-1" src="/img/path-3@2x.svg" />
                </div>
                <div className="flex-col-29">
                  <div className="x289-20 valign-text-middle chakrapetch-medium-quick-silver-14-9px">{x2893}</div>
                  <div className="x289-18 valign-text-middle chakrapetch-medium-quick-silver-14-9px">{x2894}</div>
                  <div className="x289-19 valign-text-middle chakrapetch-medium-quick-silver-14-9px">{x2895}</div>
                </div>
                <div className="flex-row-40">
                  <div className="flex-col-30">
                    <Icon />
                    <div className="icon">
                      <div className="overlap-group13">
                        <div className="rectangle border-1-9px-white"></div>
                        <img className="path-2" src="/img/path-8@2x.svg" />
                        <img className="path-3" src="/img/path-9@2x.svg" />
                        <img className="path-4" src="/img/path-10@2x.svg" />
                      </div>
                    </div>
                    <Icon className={iconProps.className} />
                  </div>
                  <div className="flex-col-31">
                    <div className="sep-12-2019 valign-text-middle chakrapetch-medium-quick-silver-14-9px">
                      {sep122019}
                    </div>
                    <div className="sep-12-2020 valign-text-middle chakrapetch-medium-quick-silver-14-9px">
                      {sep122020}
                    </div>
                    <div className="sep-12-2021 valign-text-middle chakrapetch-medium-quick-silver-14-9px">
                      {sep122021}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group-11">
              <div className="flex-col-32">
                <div className="profit-graph valign-text-middle chakrapetch-semi-bold-white-24px">{profitGraph}</div>
                <div className="flex-row-41">
                  <div className="flex-col-33">
                    <div className="number-2 valign-text-middle chakrapetch-medium-blue-violet-14px">{number}</div>
                    <div className="number-1 valign-text-middle chakrapetch-medium-blue-violet-14px">{number2}</div>
                    <div className="number-3 valign-text-middle chakrapetch-medium-blue-violet-14px">{number3}</div>
                    <div className="number-1 valign-text-middle chakrapetch-medium-blue-violet-14px">{number4}</div>
                    <div className="number-4 valign-text-middle chakrapetch-medium-blue-violet-14px">{number5}</div>
                    <div className="number-5 valign-text-middle chakrapetch-medium-blue-violet-14px">{number6}</div>
                  </div>
                  <div className="flex-col-34">
                    <img className="line-79-2" src="/img/line-74@1x.svg" />
                    <div className="overlap-group16">
                      <img className="line-74" src="/img/line-74@1x.svg" />
                      <img className="line-75" src="/img/line-74@1x.svg" />
                      <img className="line-78" src="/img/line-74@1x.svg" />
                      <img className="line-76" src="/img/line-74@1x.svg" />
                      <img className="line-77" src="/img/line-74@1x.svg" />
                      <img className="vector-20-1" src="/img/vector-20-1@1x.svg" />
                      <img className="vector-21-1" src="/img/vector-21-1@1x.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-row-42">
                <div className="name-10 chakrapetch-medium-bright-turquoise-14px">{name2}</div>
                <div className="feb chakrapetch-medium-bright-turquoise-14px">{feb}</div>
                <div className="place-4 chakrapetch-medium-bright-turquoise-14px">{place}</div>
                <div className="flex-row-item chakrapetch-medium-bright-turquoise-14px">{apr}</div>
                <div className="name-11 chakrapetch-medium-bright-turquoise-14px">{name3}</div>
                <div className="jun chakrapetch-medium-bright-turquoise-14px">{jun}</div>
                <div className="jul chakrapetch-medium-bright-turquoise-14px">{jul}</div>
                <div className="aug chakrapetch-medium-bright-turquoise-14px">{aug}</div>
                <div className="sep chakrapetch-medium-bright-turquoise-14px">{sep}</div>
                <div className="flex-row-item chakrapetch-medium-bright-turquoise-14px">{oct}</div>
                <div className="nov chakrapetch-medium-bright-turquoise-14px">{nov}</div>
                <div className="dec chakrapetch-medium-bright-turquoise-14px">{dec}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStatus;
