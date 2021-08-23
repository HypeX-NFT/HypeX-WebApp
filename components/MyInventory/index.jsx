import React from "react";
import Frame from "../Frame";
import Frame2 from "../Frame2";
import Frame3 from "../Frame3";
import AccountBalanceWallet from "../AccountBalanceWallet";
import Search from "../Search";
import ArrowForwardIos2 from "../ArrowForwardIos2";
import Merchandises from "../Merchandises";
import { Link } from "react-router-dom";
import "./MyInventory.css";

function MyInventory(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    myBoxes,
    myInventory,
    userStatus,
    myFragments,
    wallet,
    settings,
    myInventory2,
    myItems,
    totalItems,
    number,
    redeemedItems,
    number2,
    marketValue,
    price,
    totalStaked,
    number3,
    search,
    marketValue2,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
    name,
    feb,
    place,
    apr,
    name2,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec,
    itemDistribution,
    lvApparel,
    airJordan,
    nike,
    palace,
    supreme,
    item,
    seeAll,
    itemImage,
    itemName,
    status,
    method,
    marketValue3,
    action,
    file_16010746003623,
    lucasAmaeta,
    lucasAmaetaInfoCo,
    x289,
    x2892,
    x2893,
    x2894,
    x2895,
    x2896,
    x2897,
    x2898,
    lucasAmaeta2,
    lucasAmaetaInfoCo2,
    lucasAmaetaInfoCo3,
    file_16010748630163,
    file_16010789496713,
    lucasAmaeta3,
    lucasAmaetaInfoCo4,
    x2899,
    x28910,
    x28911,
    x28912,
    surname,
    profilePic,
    frame2Props,
    accountBalanceWalletProps,
    searchProps,
    arrowForwardIos2Props,
    arrowForwardIos22Props,
    arrowForwardIos23Props,
    arrowForwardIos24Props,
    merchandisesProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="my-inventory-3 screen">
        <div className="overlap-group1-8">
          <Link to="/home-limited-box">
            <img className="hypexlogoedited-removebg-1-7" src={hype_X_Logo_EditedRemovebg1} />
          </Link>
          <Link to="/my-box">
            <div className="flex-row-52">
              <Frame />
              <div className="my-boxes-3 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">{myBoxes}</div>
            </div>
          </Link>
          <div className="overlap-group9-8">
            <div className="rectangle-263-3"></div>
            <Frame2 className={frame2Props.className} />
            <div className="my-inventory-4 valign-text-middle chakrapetch-bold-white-22-1px">{myInventory}</div>
          </div>
          <Link to="my-status">
            <div className="flex-row-53">
              <img className="vector-102" src="/img/vector-80@2x.svg" />
              <div className="user-status-4 valign-text-middle chakrapetch-bold-rhino-22-1px">{userStatus}</div>
            </div>
          </Link>
          <Link to="my-fragments">
            <div className="flex-row-54">
              <Frame3 />
              <div className="my-fragments-3 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">
                {myFragments}
              </div>
            </div>
          </Link>
          <Link to="/wallet">
            <div className="flex-row-55">
              <AccountBalanceWallet className={accountBalanceWalletProps.className} />
              <div className="wallet-5 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">{wallet}</div>
            </div>
          </Link>
         <Link to="/setting">
          <div className="flex-row-56">
            <img className="vector-103" src="/img/vector-49@2x.svg" />
            <div className="settings-3 valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">{settings}</div>
          </div>
         </Link>
        </div>
        <div className="overlap-group-15">
          <div className="rectangle-465-1"></div>
          <div className="frame-3-1">
            <div className="flex-row-57">
              <div className="flex-col-39">
                <div className="my-inventory-5 valign-text-middle chakrapetch-semi-bold-white-36px">{myInventory2}</div>
                <div className="overlap-group5-7">
                  <div className="flex-col-40">
                    <div className="my-items valign-text-middle chakrapetch-semi-bold-white-24px">{myItems}</div>
                    <div className="total-items valign-text-middle chakrapetch-normal-blue-violet-18px">
                      {totalItems}
                    </div>
                    <div className="number-8 chakrapetch-medium-white-36px">{number}</div>
                    <div className="redeemed-items valign-text-middle chakrapetch-normal-blue-violet-18px">
                      {redeemedItems}
                    </div>
                    <div className="number-6 chakrapetch-medium-white-36px">{number2}</div>
                  </div>
                  <div className="flex-col-41">
                    <div className="market-value valign-text-middle chakrapetch-normal-blue-violet-18px">
                      {marketValue}
                    </div>
                    <div className="price-5 chakrapetch-medium-white-36px">{price}</div>
                    <div className="total-staked valign-text-middle chakrapetch-normal-blue-violet-18px">
                      {totalStaked}
                    </div>
                    <div className="number-6 chakrapetch-medium-white-36px">{number3}</div>
                  </div>
                </div>
              </div>
              <div className="flex-col-42">
                <div className="overlap-group6-7">
                  <div className="search-9 valign-text-middle chakrapetch-semi-bold-white-19-9px">{search}</div>
                  <Search className={searchProps.className} />
                </div>
                <div className="overlap-group2-13">
                  <div className="flex-col-43">
                    <div className="market-value-1 valign-text-middle chakrapetch-semi-bold-white-24px">
                      {marketValue2}
                    </div>
                    <div className="flex-row-58">
                      <div className="flex-col-44">
                        <div className="number-9 valign-text-middle chakrapetch-medium-blue-violet-14px">{number4}</div>
                        <div className="number-7 valign-text-middle chakrapetch-medium-blue-violet-14px">{number5}</div>
                        <div className="number-10 valign-text-middle chakrapetch-medium-blue-violet-14px">
                          {number6}
                        </div>
                        <div className="number-7 valign-text-middle chakrapetch-medium-blue-violet-14px">{number7}</div>
                        <div className="number-11 valign-text-middle chakrapetch-medium-blue-violet-14px">
                          {number8}
                        </div>
                        <div className="number-12 valign-text-middle chakrapetch-medium-blue-violet-14px">
                          {number9}
                        </div>
                      </div>
                      <div className="flex-col-45">
                        <img className="line-79-3" src="/img/line-74-1@1x.svg" />
                        <div className="overlap-group9-9">
                          <img className="line-75-1" src="/img/line-74-1@1x.svg" />
                          <img className="line-78-1" src="/img/line-74-1@1x.svg" />
                          <img className="line-76-1" src="/img/line-74-1@1x.svg" />
                          <img className="line-77-1" src="/img/line-74-1@1x.svg" />
                          <img className="vector-21-2" src="/img/vector-21-3@1x.svg" />
                          <img className="vector-20-2" src="/img/vector-20-3@1x.svg" />
                        </div>
                        <img className="line-74-1" src="/img/line-74-1@1x.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-row-59">
                    <div className="name-12 valign-text-middle chakrapetch-medium-bright-turquoise-14px">{name}</div>
                    <div className="feb-1 valign-text-middle chakrapetch-medium-bright-turquoise-14px">{feb}</div>
                    <div className="place-5 valign-text-middle chakrapetch-medium-bright-turquoise-14px">{place}</div>
                    <div className="flex-row-item-1 valign-text-middle chakrapetch-medium-bright-turquoise-14px">
                      {apr}
                    </div>
                    <div className="name-13 valign-text-middle chakrapetch-medium-bright-turquoise-14px">{name2}</div>
                    <div className="jun-1 valign-text-middle chakrapetch-medium-bright-turquoise-14px">{jun}</div>
                    <div className="jul-1 valign-text-middle chakrapetch-medium-bright-turquoise-14px">{jul}</div>
                    <div className="aug-1 valign-text-middle chakrapetch-medium-bright-turquoise-14px">{aug}</div>
                    <div className="sep-1 valign-text-middle chakrapetch-medium-bright-turquoise-14px">{sep}</div>
                    <div className="flex-row-item-1 valign-text-middle chakrapetch-medium-bright-turquoise-14px">
                      {oct}
                    </div>
                    <div className="nov-1 valign-text-middle chakrapetch-medium-bright-turquoise-14px">{nov}</div>
                    <div className="dec-1 valign-text-middle chakrapetch-medium-bright-turquoise-14px">{dec}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row-60">
              <div className="overlap-group3-7">
                <div className="flex-col-46">
                  <div className="item-distribution valign-text-middle chakrapetch-semi-bold-white-24px">
                    {itemDistribution}
                  </div>
                  <img className="doughnut" src="/img/doughnut@2x.svg" />
                </div>
                <div className="flex-col-47">
                  <div className="group-425">
                    <div className="ellipse-2"></div>
                    <div className="lv-apparel chakrapetch-medium-white-18px">{lvApparel}</div>
                  </div>
                  <div className="group-421">
                    <div className="ellipse-3"></div>
                    <div className="air-jordan chakrapetch-medium-white-18px">{airJordan}</div>
                  </div>
                  <div className="group-422">
                    <div className="ellipse-3-1"></div>
                    <div className="nike chakrapetch-medium-white-18px">{nike}</div>
                  </div>
                  <div className="group-423">
                    <div className="ellipse-3-2"></div>
                    <div className="palace chakrapetch-medium-white-18px">{palace}</div>
                  </div>
                  <div className="group-424">
                    <div className="ellipse-3-3"></div>
                    <div className="supreme chakrapetch-medium-white-18px">{supreme}</div>
                  </div>
                </div>
              </div>
              <div className="flex-col-48">
                <div className="flex-col-49">
                  <div className="flex-col-50">
                    <div className="flex-row-61">
                      <div className="item valign-text-middle chakrapetch-semi-bold-white-24px">{item}</div>
                      <div className="see-all-2 valign-text-middle chakrapetch-semi-bold-white-16px">{seeAll}</div>
                      <ArrowForwardIos2 className={arrowForwardIos2Props.className} />
                    </div>
                    <div className="flex-row-62">
                      <div className="item-image valign-text-middle chakrapetch-normal-silver-16px">{itemImage}</div>
                      <div className="item-name valign-text-middle chakrapetch-normal-silver-16px">{itemName}</div>
                      <div className="status-1 valign-text-middle chakrapetch-normal-silver-16px">{status}</div>
                      <div className="method valign-text-middle chakrapetch-normal-silver-16px">{method}</div>
                      <div className="market-value-2 valign-text-middle chakrapetch-normal-silver-16px">
                        {marketValue3}
                      </div>
                      <div className="action valign-text-middle chakrapetch-normal-silver-16px">{action}</div>
                    </div>
                    <img className="line-80-2" src="/img/line-80-2@1x.svg" />
                  </div>
                  <div className="flex-row-63">
                    <img className="file1601074600362-3-1" src={file_16010746003623} />
                    <div className="flex-col-51">
                      <div className="lucas-amaeta-6 chakrapetch-medium-white-14px">{lucasAmaeta}</div>
                      <div className="lucasamaetainfoco-1 chakrapetch-normal-blue-violet-12px">{lucasAmaetaInfoCo}</div>
                    </div>
                    <div className="x289-21 valign-text-middle chakrapetch-medium-white-14-9px">{x289}</div>
                    <div className="x289-22 valign-text-middle chakrapetch-medium-white-14-9px">{x2892}</div>
                    <div className="x289-23 valign-text-middle chakrapetch-medium-white-14-9px">{x2893}</div>
                    <div className="overlap-group8-5">
                      <ArrowForwardIos2 className={arrowForwardIos22Props.className} />
                      <div className="x289-24 valign-text-middle chakrapetch-medium-magenta--fuchsia-14-9px">
                        {x2894}
                      </div>
                      <img className="rectangle-46" src="/img/rectangle-467@2x.svg" />
                    </div>
                  </div>
                  <div className="overlap-group4-9">
                    <ArrowForwardIos2 className={arrowForwardIos23Props.className} />
                    <div className="rectangle-470-1"></div>
                    <div className="x289-25 valign-text-middle chakrapetch-medium-orange-red-14-9px">{x2895}</div>
                    <div className="x289-26 valign-text-middle chakrapetch-medium-white-14-9px">{x2896}</div>
                    <div className="x289-27 valign-text-middle chakrapetch-medium-bright-turquoise-14-9px">{x2897}</div>
                    <div className="x289-28 valign-text-middle chakrapetch-medium-white-14-9px">{x2898}</div>
                    <div className="lucas-amaeta-7 chakrapetch-medium-white-14px">{lucasAmaeta2}</div>
                    <div className="lucasamaetainfoco-2 chakrapetch-normal-blue-violet-12px">{lucasAmaetaInfoCo2}</div>
                    <div className="lucasamaetainfoco-3 chakrapetch-normal-blue-violet-12px">{lucasAmaetaInfoCo3}</div>
                    <img className="file1601074863016-3" src={file_16010748630163} />
                    <img className="rectangle-468" src="/img/rectangle-468@2x.svg" />
                  </div>
                </div>
                <div className="flex-row-64">
                  <img className="file1601078949671-3" src={file_16010789496713} />
                  <div className="flex-col-52">
                    <div className="lucas-amaeta-6 chakrapetch-medium-white-14px">{lucasAmaeta3}</div>
                    <div className="lucasamaetainfoco-4 chakrapetch-normal-blue-violet-12px">{lucasAmaetaInfoCo4}</div>
                  </div>
                  <div className="x289-29 valign-text-middle chakrapetch-medium-eucalyptus-14-9px">{x2899}</div>
                  <div className="x289-30 valign-text-middle chakrapetch-medium-white-14-9px">{x28910}</div>
                  <div className="x289-31 valign-text-middle chakrapetch-medium-white-14-9px">{x28911}</div>
                  <div className="overlap-group7-6">
                    <ArrowForwardIos2 className={arrowForwardIos24Props.className} />
                    <div className="x289-32 valign-text-middle chakrapetch-medium-bright-turquoise-14-9px">
                      {x28912}
                    </div>
                    <img className="rectangle-46" src="/img/rectangle-468@2x.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="surname-5 valign-text-middle chakrapetch-bold-white-20px">{surname}</div>
          <img className="profile-pic-7" src={profilePic} />
          <div className="ellipse-40-7 border-1px-neon-blue"></div>
          <div className="ellipse-4-3 border-4px-neon-blue"></div>
          <div className="ellipse-41-7 border-0-8px-neon-blue"></div>
          <div className="ellipse-4-3 border-0-5px-neon-blue"></div>
        </div>
        <Merchandises {...merchandisesProps} />
      </div>
    </div>
  );
}

export default MyInventory;
