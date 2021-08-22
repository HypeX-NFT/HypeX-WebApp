import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import ArrowForwardIos from "../ArrowForwardIos";
import Search from "../Search";
import "./HomeMerchandise.css";

function HomeMerchandise(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    loan,
    displayNfts,
    profilePic,
    bannerVersion21,
    bannerVersion41,
    limitedBox,
    merchandise,
    sortBy,
    surname,
    categories,
    place,
    rarity,
    text1,
    name,
    wechat_Image_20210805201052Removebg,
    redeem,
    number,
    x16,
    name2,
    image51,
    redeem2,
    number2,
    x110,
    airYeezy2Octopus,
    image55,
    redeem3,
    number3,
    x114,
    name3,
    wechat_Image_20210805201221Removebg,
    redeem4,
    number4,
    x15,
    name4,
    image52,
    redeem5,
    number5,
    x19,
    yeezy350,
    image58,
    redeem6,
    number6,
    x113,
    name5,
    wechat_Image_20210805201403Removebg,
    redeem7,
    number7,
    x14,
    name6,
    image53,
    redeem8,
    number8,
    x18,
    name7,
    image59,
    redeem9,
    number9,
    x112,
    name8,
    wechat_Image_20210805201725Removebg,
    redeem10,
    number10,
    x13,
    yeezy500Stone,
    image54,
    redeem11,
    number11,
    x17,
    name9,
    image60,
    redeem12,
    number12,
    x111,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-merchandise screen">
        <div className="flex-row">
          <div className="overlap-group3">
            <img className="hypexlogoedited-removebg-1" src={hype_X_Logo_EditedRemovebg1} />
            <Link to="/fragment-factory">
              <div className="fragment-factory valign-text-middle chakrapetch-medium-white-21px">{fragmentFactory}</div>
            </Link>
          </div>
          <Link to="/stake-info-page">
            <div className="stake valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
          </Link>
          <Link to="/loan">
            <div className="loan valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
          </Link>
          <Link to="/display-nfts">
            <div className="display-nf-ts valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
          </Link>
          <div className="overlap-group-1">
            <img className="profile-pic" src={profilePic} />
            <div className="ellipse-40 border-1px-neon-blue"></div>
            <div className="ellipse-42 border-4px-neon-blue"></div>
            <div className="ellipse-41 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
              <div className="ellipse-43 border-0-5px-neon-blue"></div>
            </a>
          </div>
          <ShoppingBag />
        </div>
        <div className="flex-col-1">
          <div className="overlap-group1">
            <img className="banner-version-2-1" src={bannerVersion21} />
            <div className="ellipse-36"></div>
            <div className="ellipse-37"></div>
            <div className="ellipse-38"></div>
            <img className="banner-version-4-1" src={bannerVersion41} />
          </div>
          <div className="overlap-group32">
            <div className="overlap-group2-1">
              <div className="limited-box valign-text-middle chakrapetch-bold-gun-powder-36px">{limitedBox}</div>
              <div className="box-trigger"></div>
              <img className="line-79" src="/img/line-79@1x.svg" />
            </div>
            <div className="overlap-group5">
              <div className="merchandise valign-text-middle chakrapetch-bold-white-36px">{merchandise}</div>
              <div className="merchandise-trigger"></div>
            </div>
          </div>
          <div className="flex-row-1">
            <div className="sort-by valign-text-middle">{sortBy}</div>
            <div className="frame-19">
              <div className="surname valign-text-middle chakrapetch-bold-white-24px">{surname}</div>
              <ArrowForwardIos />
            </div>
            <div className="frame-20">
              <div className="categories valign-text-middle chakrapetch-bold-white-24px">{categories}</div>
              <ArrowForwardIos />
            </div>
            <div className="frame-21">
              <div className="place valign-text-middle chakrapetch-bold-white-24px">{place}</div>
              <ArrowForwardIos />
            </div>
            <div className="frame-22">
              <div className="rarity valign-text-middle chakrapetch-bold-white-24px">{rarity}</div>
              <ArrowForwardIos />
            </div>
            <div className="overlap-group4 border-2px-neon-blue">
              <div className="text-1 valign-text-middle chakrapetch-semi-bold-white-24px-2">{text1}</div>
              <Search />
            </div>
          </div>
          <div className="frame-24">
            <div className="flex-col-2">
              <div className="overlap-group2">
                <div className="name valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">{name}</div>
                <img className="we-chat-image-ovebg-preview-1" src={wechat_Image_20210805201052Removebg} />
              </div>
              <div className="overlap-group">
                <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem}</div>
                <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">{number}</div>
                <img className="x1-6" src={x16} />
                <img className="line" src="/img/line-82@2x.svg" />
                <img className="line-1" src="/img/line-83@2x.svg" />
              </div>
              <div className="overlap-group24">
                <div className="name-1 valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">{name2}</div>
                <img className="image-51" src={image51} />
              </div>
              <div className="overlap-group">
                <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem2}</div>
                <img className="rectangle-452" src="/img/rectangle-452@2x.svg" />
                <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">{number2}</div>
                <img className="x1-10" src={x110} />
                <img className="line" src="/img/line-104@2x.svg" />
                <img className="line-1" src="/img/line-105@2x.svg" />
              </div>
              <div className="overlap-group29">
                <div className="air-yeezy-2-octopus valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">
                  {airYeezy2Octopus}
                </div>
                <img className="image-55" src={image55} />
              </div>
              <div className="overlap-group">
                <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem3}</div>
                <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">{number3}</div>
                <img className="x1-14" src={x114} />
                <img className="line" src="/img/line-82@2x.svg" />
                <img className="line-1" src="/img/line-83@2x.svg" />
              </div>
            </div>
            <div className="flex-row-2">
              <div className="flex-col">
                <div className="overlap-group27">
                  <div className="name-2 valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">{name3}</div>
                  <img className="we-chat-image-ovebg-preview-2" src={wechat_Image_20210805201221Removebg} />
                </div>
                <div className="overlap-group">
                  <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                  <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem4}</div>
                  <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                  <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">{number4}</div>
                  <img className="x1-5" src={x15} />
                  <img className="line" src="/img/line-82@2x.svg" />
                  <img className="line-1" src="/img/line-83@2x.svg" />
                </div>
                <div className="overlap-group11">
                  <div className="name-3 valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">{name4}</div>
                  <img className="image-52" src={image52} />
                </div>
                <div className="overlap-group">
                  <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                  <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem5}</div>
                  <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                  <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">{number5}</div>
                  <img className="x1-9" src={x19} />
                  <img className="line" src="/img/line-82@2x.svg" />
                  <img className="line-1" src="/img/line-83@2x.svg" />
                </div>
                <div className="overlap-group20">
                  <div className="yeezy-350 valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">
                    {yeezy350}
                  </div>
                  <img className="image-58" src={image58} />
                </div>
                <div className="overlap-group">
                  <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                  <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem6}</div>
                  <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                  <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">{number6}</div>
                  <img className="x1-13" src={x113} />
                  <img className="line" src="/img/line-82@2x.svg" />
                  <img className="line-1" src="/img/line-83@2x.svg" />
                </div>
              </div>
              <div className="flex-row-3">
                <div className="flex-col">
                  <div className="overlap-group2">
                    <div className="name-4 valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">{name5}</div>
                    <img className="we-chat-image-ovebg-preview-2-1" src={wechat_Image_20210805201403Removebg} />
                  </div>
                  <div className="overlap-group">
                    <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                    <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem7}</div>
                    <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                    <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">
                      {number7}
                    </div>
                    <img className="x1-4" src={x14} />
                    <img className="line" src="/img/line-82@2x.svg" />
                    <img className="line-1" src="/img/line-83@2x.svg" />
                  </div>
                  <div className="overlap-group28">
                    <div className="name-5 valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">{name6}</div>
                    <img className="image-53" src={image53} />
                  </div>
                  <div className="overlap-group">
                    <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                    <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem8}</div>
                    <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                    <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">
                      {number8}
                    </div>
                    <img className="x1-8" src={x18} />
                    <img className="line" src="/img/line-82@2x.svg" />
                    <img className="line-1" src="/img/line-83@2x.svg" />
                  </div>
                  <div className="overlap-group26">
                    <div className="name-6 valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">{name7}</div>
                    <img className="image-59" src={image59} />
                  </div>
                  <div className="overlap-group">
                    <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                    <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem9}</div>
                    <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                    <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">
                      {number9}
                    </div>
                    <img className="x1-12" src={x112} />
                    <img className="line" src="/img/line-82@2x.svg" />
                    <img className="line-1" src="/img/line-83@2x.svg" />
                  </div>
                </div>
                <div className="flex-col-3">
                  <div className="overlap-group21">
                    <div className="name-7 valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">{name8}</div>
                    <img className="we-chat-image-ovebg-preview-2-2" src={wechat_Image_20210805201725Removebg} />
                  </div>
                  <div className="overlap-group">
                    <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                    <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem10}</div>
                    <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                    <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">
                      {number10}
                    </div>
                    <img className="x1-3" src={x13} />
                    <img className="line" src="/img/line-82@2x.svg" />
                    <img className="line-1" src="/img/line-83@2x.svg" />
                  </div>
                  <div className="overlap-group18">
                    <div className="yeezy-500-stone valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">
                      {yeezy500Stone}
                    </div>
                    <img className="image-54" src={image54} />
                  </div>
                  <div className="overlap-group">
                    <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                    <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem11}</div>
                    <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                    <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">
                      {number11}
                    </div>
                    <img className="x1-7" src={x17} />
                    <img className="line" src="/img/line-82@2x.svg" />
                    <img className="line-1" src="/img/line-83@2x.svg" />
                  </div>
                  <div className="overlap-group23">
                    <div className="name-8 valign-text-middle chakrapetch-semi-bold-bright-turquoise-24px">{name9}</div>
                    <img className="image-60" src={image60} />
                  </div>
                  <div className="overlap-group">
                    <img className="rectangle-4" src="/img/rectangle-426@2x.svg" />
                    <div className="redeem valign-text-middle chakrapetch-semi-bold-ebony-28px">{redeem12}</div>
                    <img className="rectangle-4-1" src="/img/rectangle-428@2x.svg" />
                    <div className="number valign-text-middle chakrapetch-semi-bold-bright-turquoise-28px">
                      {number12}
                    </div>
                    <img className="x1-11" src={x111} />
                    <img className="line" src="/img/line-82@2x.svg" />
                    <img className="line-1" src="/img/line-83@2x.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMerchandise;
