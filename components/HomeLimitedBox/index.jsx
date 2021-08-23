import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import ArrowForwardIos from "../ArrowForwardIos";
import Search from "../Search";
import "./HomeLimitedBox.css";

function HomeLimitedBox(props) {
  const {
    fragmentFactory,
    hype_X_Logo_EditedRemovebg1,
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
    searchBoxes,
    text6,
    offcl_Lv_Supreme7,
    unbox,
    price,
    image46,
    unbox2,
    price2,
    chunkyDunk,
    image50,
    unbox3,
    price3,
    supremeValueBox,
    offcl_Box_Supreme_25,
    unbox4,
    price4,
    image47,
    unbox5,
    price5,
    text7,
    image56,
    unbox6,
    price6,
    nikeLuxuryBox,
    offcl_Box_Nike_55,
    unbox7,
    price7,
    image48,
    unbox8,
    price8,
    yeezyBox,
    image61,
    unbox9,
    price9,
    kawsBox,
    offcl_Kaws5,
    unbox10,
    price10,
    image49,
    unbox11,
    price11,
    palaceBox,
    image57,
    unbox12,
    price12,
    searchProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-limited-box screen">
        <div className="flex-row-23">
          <div className="overlap-group5-5">
            <Link to="/fragment-factory">
              <div className="fragment-factory-2 valign-text-middle chakrapetch-medium-white-21px">
                {fragmentFactory}
              </div>
            </Link>
            <img className="hypexlogoedited-removebg-1-3" src={hype_X_Logo_EditedRemovebg1} />
          </div>
          <Link to="/stake-info-page">
            <div className="stake-2 valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
          </Link>
          <Link to="/loan">
            <div className="loan-2 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
          </Link>
          <Link to="/display-nfts">
            <div className="display-nf-ts-2 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
          </Link>
          <Link to="/wallet">
            <div className="overlap-group1-4">
              <img className="profile-pic-3" src={profilePic} />
              <div className="ellipse-40-3 border-1px-neon-blue"></div>
              <div className="ellipse-42-2 border-4px-neon-blue"></div>
              <div className="ellipse-41-3 border-0-8px-neon-blue"></div>
              <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
                <div className="ellipse-43-2 border-0-5px-neon-blue"></div>
              </a>
            </div>
          </Link>
          <ShoppingBag />
        </div>
        <div className="flex-col-16">
          <div className="overlap-group-10">
            <img className="banner-version-2-1-1" src={bannerVersion21} />
            <div className="ellipse-36-1"></div>
            <div className="ellipse-37-1"></div>
            <div className="ellipse-38-1"></div>
            <img className="banner-version-4-1-1" src={bannerVersion41} />
          </div>
          <div className="overlap-group32-1">
            <div className="overlap-group4-5">
              <div className="limited-box-1 valign-text-middle chakrapetch-bold-white-36px">{limitedBox}</div>
              <div className="box-trigger-1"></div>
              <img className="line-79-1" src="/img/line-79-1@1x.svg" />
            </div>
            <div className="overlap-group3-4">
              <div className="merchandise-1 valign-text-middle chakrapetch-bold-gun-powder-36px">{merchandise}</div>
              <div className="merchandise-trigger-1"></div>
            </div>
          </div>
          <div className="flex-row-24">
            <div className="sort-by-1 valign-text-middle">{sortBy}</div>
            <div className="frame-19-1">
              <div className="surname-2 valign-text-middle chakrapetch-bold-white-24px">{surname}</div>
              <ArrowForwardIos />
            </div>
            <div className="frame-20-1">
              <div className="categories-1 valign-text-middle chakrapetch-bold-white-24px">{categories}</div>
              <ArrowForwardIos />
            </div>
            <div className="frame-21-1">
              <div className="place-3 valign-text-middle chakrapetch-bold-white-24px">{place}</div>
              <ArrowForwardIos />
            </div>
            <div className="frame-22-1">
              <div className="rarity-1 valign-text-middle chakrapetch-bold-white-24px">{rarity}</div>
              <ArrowForwardIos />
            </div>
            <div className="overlap-group2-8">
              <div className="search-boxes valign-text-middle chakrapetch-semi-bold-white-24px-2">{searchBoxes}</div>
              <Search className={searchProps.className} />
            </div>
          </div>
          <div className="frame-23">
            <div className="flex-row-25">
              <div className="flex-col-17">
                <div className="overlap-group30">
                  <div className="text-6 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-24px">{text6}</div>
                  <img className="offcllv-supreme-7" src={offcl_Lv_Supreme7} />
                </div>
                <div className="overlap-group-8">
                  <img className="rectangle-4-2" src="/img/rectangle-422@2x.svg" />
                  <div className="unbox valign-text-middle chakrapetch-semi-bold-white-28px">{unbox}</div>
                  <img className="rectangle-4-3" src="/img/rectangle-419@2x.svg" />
                  <div className="price-2 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price}</div>
                </div>
                <div className="overlap-group20-1">
                  <img className="bape-box" src="/img/bape-box@2x.svg" />
                  <img className="image-46" src={image46} />
                </div>
                <div className="overlap-group-9">
                  <img className="rectangle-43" src="/img/rectangle-430-1@2x.svg" />
                  <div className="unbox-1 valign-text-middle chakrapetch-semi-bold-white-28px">{unbox2}</div>
                  <img className="rectangle-43-1" src="/img/rectangle-434-1@2x.svg" />
                  <div className="price-3 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price2}</div>
                </div>
                <div className="overlap-group24-1">
                  <div className="chunky-dunk valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-24px">
                    {chunkyDunk}
                  </div>
                  <img className="image-50" src={image50} />
                </div>
                <div className="overlap-group-8">
                  <img className="rectangle-4-2" src="/img/rectangle-422@2x.svg" />
                  <div className="unbox valign-text-middle chakrapetch-semi-bold-white-28px">{unbox3}</div>
                  <img className="rectangle-4-3" src="/img/rectangle-419@2x.svg" />
                  <div className="price-2 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price3}</div>
                </div>
              </div>
              <div className="flex-col-18">
                <div className="overlap-group22">
                  <Link to="/box-page">
                    <div className="supreme-value-box valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-24px">
                      {supremeValueBox}
                    </div>
                  </Link>
                  <Link to="/box-page" className="align-self-flex-center">
                    <img className="offcl-boxsupreme2-5" src={offcl_Box_Supreme_25} />
                  </Link>
                </div>
                <div className="overlap-group-8">
                  <img className="rectangle-4-2" src="/img/rectangle-422@2x.svg" />
                  <div className="unbox valign-text-middle chakrapetch-semi-bold-white-28px">{unbox4}</div>
                  <img className="rectangle-4-3" src="/img/rectangle-419@2x.svg" />
                  <div className="price-2 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price4}</div>
                </div>
                <div className="overlap-group29-1">
                  <img className="off-white-box" src="/img/off-white-box@2x.svg" />
                  <img className="image-47" src={image47} />
                </div>
                <div className="overlap-group-9">
                  <img className="rectangle-43" src="/img/rectangle-430-1@2x.svg" />
                  <div className="unbox-1 valign-text-middle chakrapetch-semi-bold-white-28px">{unbox5}</div>
                  <img className="rectangle-43-1" src="/img/rectangle-434-1@2x.svg" />
                  <div className="price-3 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price5}</div>
                </div>
                <div className="overlap-group10-4">
                  <div className="text-7 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-24px">{text7}</div>
                  <img className="image-56" src={image56} />
                </div>
                <div className="overlap-group-8">
                  <img className="rectangle-4-2" src="/img/rectangle-422@2x.svg" />
                  <div className="unbox valign-text-middle chakrapetch-semi-bold-white-28px">{unbox6}</div>
                  <img className="rectangle-4-3" src="/img/rectangle-419@2x.svg" />
                  <div className="price-2 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price6}</div>
                </div>
              </div>
              <div className="flex-col-19">
                <div className="overlap-group9-6">
                  <div className="nike-luxury-box valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-24px">
                    {nikeLuxuryBox}
                  </div>
                  <img className="offcl-boxnike5-5" src={offcl_Box_Nike_55} />
                </div>
                <div className="overlap-group-8">
                  <img className="rectangle-4-2" src="/img/rectangle-422@2x.svg" />
                  <div className="unbox valign-text-middle chakrapetch-semi-bold-white-28px">{unbox7}</div>
                  <img className="rectangle-4-3" src="/img/rectangle-419@2x.svg" />
                  <div className="price-2 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price7}</div>
                </div>
                <div className="overlap-group11-3">
                  <img className="hype-mix" src="/img/hype-mix@2x.svg" />
                  <img className="image-48" src={image48} />
                </div>
                <div className="overlap-group-9">
                  <img className="rectangle-43" src="/img/rectangle-430-1@2x.svg" />
                  <div className="unbox-1 valign-text-middle chakrapetch-semi-bold-white-28px">{unbox8}</div>
                  <img className="rectangle-43-1" src="/img/rectangle-434-1@2x.svg" />
                  <div className="price-3 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price8}</div>
                </div>
                <div className="overlap-group23-1">
                  <div className="yeezy-box valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-24px">
                    {yeezyBox}
                  </div>
                  <img className="image-61" src={image61} />
                </div>
                <div className="overlap-group-8">
                  <img className="rectangle-4-2" src="/img/rectangle-422@2x.svg" />
                  <div className="unbox valign-text-middle chakrapetch-semi-bold-white-28px">{unbox9}</div>
                  <img className="rectangle-4-3" src="/img/rectangle-419@2x.svg" />
                  <div className="price-2 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price9}</div>
                </div>
              </div>
            </div>
            <div className="flex-col-20">
              <div className="overlap-group15">
                <div className="kaws-box valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-24px">{kawsBox}</div>
                <img className="offcl-kaws-5" src={offcl_Kaws5} />
              </div>
              <div className="overlap-group-8">
                <img className="rectangle-4-2" src="/img/rectangle-422@2x.svg" />
                <div className="unbox valign-text-middle chakrapetch-semi-bold-white-28px">{unbox10}</div>
                <img className="rectangle-4-3" src="/img/rectangle-419@2x.svg" />
                <div className="price-2 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price10}</div>
              </div>
              <div className="overlap-group14">
                <img className="kith-box" src="/img/kith-box@2x.svg" />
                <img className="image-49" src={image49} />
              </div>
              <div className="overlap-group-9">
                <img className="rectangle-43" src="/img/rectangle-430-1@2x.svg" />
                <div className="unbox-1 valign-text-middle chakrapetch-semi-bold-white-28px">{unbox11}</div>
                <img className="rectangle-43-1" src="/img/rectangle-434-1@2x.svg" />
                <div className="price-3 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price11}</div>
              </div>
              <div className="overlap-group7-4">
                <div className="p-alace-box valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-24px">
                  {palaceBox}
                </div>
                <img className="image-57" src={image57} />
              </div>
              <div className="overlap-group-8">
                <img className="rectangle-4-2" src="/img/rectangle-422@2x.svg" />
                <div className="unbox valign-text-middle chakrapetch-semi-bold-white-28px">{unbox12}</div>
                <img className="rectangle-4-3" src="/img/rectangle-419@2x.svg" />
                <div className="price-2 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price12}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLimitedBox;
