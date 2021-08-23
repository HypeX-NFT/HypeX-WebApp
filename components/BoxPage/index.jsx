import React from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import "./BoxPage.css";

function BoxPage(props) {
  const {
    offcl_Box_Supreme_21,
    profilePic,
    offcl_Box_Supreme_22,
    bandana,
    lvXSupremeBadana,
    text76,
    tnfHoodie,
    boxLogo,
    text77,
    loan,
    displayNfts,
    place,
    itemsInTheBox,
    text74,
    lvCardholder,
    text75,
    tnfJacket,
    text82,
    hype_X_Logo_EditedRemovebg1,
    fragmentFactory,
    stake,
    image62,
    image71,
    price,
    price2,
    price3,
    price4,
    price5,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    text78,
    image69,
    price6,
    spanText11,
    spanText12,
    text79,
    text80,
    text81,
    supremeBackpack,
    image65,
    image66,
    image67,
    image68,
    price7,
    price8,
    price9,
    price10,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    shoppingBagProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="box-page screen">
        <div className="flex-col-108">
          <div className="overlap-group5-21">
            <div className="overlap-group1-31">
              <img className="offcl-boxsupreme2-1-1" src={offcl_Box_Supreme_21} />
              <img className="profile-pic-24" src={profilePic} />
              <div className="ellipse-40-18 border-1px-neon-blue"></div>
              <div className="ellipse-42-12 border-4px-neon-blue"></div>
              <div className="ellipse-41-18 border-0-8px-neon-blue"></div>
              <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
                <div className="ellipse-43-12 border-0-5px-neon-blue"></div>
              </a>
              <img className="rectangle-454-4" src="/img/rectangle-454-4@1x.svg" />
              <img className="offcl-boxsupreme2-2-1" src={offcl_Box_Supreme_22} />
              <img className="bandana" src={bandana} />
              <div className="lv-x-supreme-badana valign-text-middle chakrapetch-semi-bold-white-20px">
                {lvXSupremeBadana}
              </div>
              <div className="text-76 valign-text-middle chakrapetch-semi-bold-white-20px">{text76}</div>
              <img className="tnf-hoodie" src={tnfHoodie} />
              <img className="box-logo" src={boxLogo} />
              <div className="text-77 valign-text-middle chakrapetch-semi-bold-white-20px">{text77}</div>
              <ShoppingBag className={shoppingBagProps.className} />
              <Link to="/loan">
                <div className="loan-14 valign-text-middle chakrapetch-medium-white-21px">{loan}</div>
              </Link>
              <Link to="/display-nfts">
                <div className="display-nf-ts-12 valign-text-middle chakrapetch-medium-white-21px">{displayNfts}</div>
              </Link>
            </div>
            <div className="flex-col-109">
              <div className="overlap-group-42">
                <a href="javascript:ShowOverlay('box-purchasing', 'animate-appear');">
                  <img className="union-34" src="/img/union-64@2x.svg" />
                </a>
                <img className="line-70-8" src="/img/line-70-9@2x.svg" />
                <img className="line-71-8" src="/img/line-71-9@2x.svg" />
                <img className="line-72-8" src="/img/line-72-9@2x.svg" />
                <img className="line-73-8" src="/img/line-73-9@2x.svg" />
                <div className="place-14 valign-text-middle chakrapetch-medium-bright-turquoise-24-4px">{place}</div>
              </div>
              <div className="flex-row-153">
                <div className="flex-col-110">
                  <div className="items-in-the-box valign-text-middle chakrapetch-bold-white-28px">{itemsInTheBox}</div>
                  <img className="line-106" src="/img/line-106@2x.svg" />
                  <div className="text-74 valign-text-middle chakrapetch-semi-bold-white-20px">{text74}</div>
                  <Link to="/merchandise-page">
                    <img className="lv-card-holder" src={lvCardholder} />
                  </Link>
                </div>
                <div className="flex-col-111">
                  <div className="text-75 valign-text-middle chakrapetch-semi-bold-white-20px">{text75}</div>
                  <img className="tnf-jacket" src={tnfJacket} />
                </div>
              </div>
            </div>
            <div className="text-82">{text82}</div>
            <div className="flex-col-112">
              <div className="flex-row-154">
                <div className="overlap-group3-29">
                  <Link to="/home-limited-box">
                    <img className="hypexlogoedited-removebg-1-18" src={hype_X_Logo_EditedRemovebg1} />
                  </Link>
                  <Link to="/fragment-factory">
                    <div className="fragment-factory-14 valign-text-middle chakrapetch-medium-white-21px">
                      {fragmentFactory}
                    </div>
                  </Link>
                </div>
                <Link to="/stake-info-page">
                  <div className="stake-14 valign-text-middle chakrapetch-medium-white-21px">{stake}</div>
                </Link>
              </div>
              <div className="overlap-group2-36">
                <img className="image-62-1" src={image62} />
                <img className="image-7-1-1" src={image71} />
              </div>
            </div>
          </div>
          <div className="flex-row-155">
            <div className="price-19 valign-text-middle chakrapetch-bold-white-24px">{price}</div>
            <div className="price-20 valign-text-middle chakrapetch-bold-white-24px">{price2}</div>
            <div className="price-21 valign-text-middle chakrapetch-bold-white-24px">{price3}</div>
            <div className="price-22 valign-text-middle chakrapetch-bold-white-24px">{price4}</div>
            <div className="price-23 valign-text-middle chakrapetch-bold-white-24px">{price5}</div>
          </div>
          <div className="flex-row-156">
            <div className="probability-012 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 chakrapetch-bold-white-18px-2">{spanText}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText2}</span>
              </span>
            </div>
            <div className="probability-1 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 chakrapetch-bold-white-18px-2">{spanText3}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText4}</span>
              </span>
            </div>
            <div className="probability-089 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 chakrapetch-bold-white-18px-2">{spanText5}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText6}</span>
              </span>
            </div>
            <div className="probability-139 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 chakrapetch-bold-white-18px-2">{spanText7}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText8}</span>
              </span>
            </div>
            <div className="probability-019 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 chakrapetch-bold-white-18px-2">{spanText9}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText10}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-row-157">
          <div className="flex-col-113">
            <div className="text-78 valign-text-middle chakrapetch-semi-bold-white-20px">{text78}</div>
            <img className="image-69-1" src={image69} />
            <div className="price-24 valign-text-middle chakrapetch-bold-white-24px">{price6}</div>
            <div className="probability-451 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 chakrapetch-bold-white-18px-2">{spanText11}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText12}</span>
              </span>
            </div>
          </div>
          <div className="flex-col-114">
            <div className="flex-row-158">
              <div className="text-79 valign-text-middle chakrapetch-semi-bold-white-20px">{text79}</div>
              <div className="text-80 valign-text-middle chakrapetch-semi-bold-white-20px">{text80}</div>
              <div className="text-81 valign-text-middle chakrapetch-semi-bold-white-20px">{text81}</div>
              <div className="supreme-backpack valign-text-middle chakrapetch-semi-bold-white-20px">
                {supremeBackpack}
              </div>
            </div>
            <div className="flex-row-159">
              <img className="image-65-2" src={image65} />
              <img className="image-66-1" src={image66} />
              <img className="image-67-1" src={image67} />
              <img className="image-68-1" src={image68} />
            </div>
            <div className="flex-row-160">
              <div className="price-25 valign-text-middle chakrapetch-bold-white-24px">{price7}</div>
              <div className="price-26 valign-text-middle chakrapetch-bold-white-24px">{price8}</div>
              <div className="price-27 valign-text-middle chakrapetch-bold-white-24px">{price9}</div>
              <div className="price-28 valign-text-middle chakrapetch-bold-white-24px">{price10}</div>
            </div>
            <div className="flex-row-161">
              <div className="probability-091 valign-text-middle chakrapetch-bold-white-18px">
                <span>
                  <span className="span-12 chakrapetch-bold-white-18px-2">{spanText13}</span>
                  <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText14}</span>
                </span>
              </div>
              <div className="probability-242 valign-text-middle chakrapetch-bold-white-18px">
                <span>
                  <span className="span-12 chakrapetch-bold-white-18px-2">{spanText15}</span>
                  <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText16}</span>
                </span>
              </div>
              <div className="probability-315 valign-text-middle chakrapetch-bold-white-18px">
                <span>
                  <span className="span-12 chakrapetch-bold-white-18px-2">{spanText17}</span>
                  <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText18}</span>
                </span>
              </div>
              <div className="probability-419 valign-text-middle chakrapetch-bold-white-18px">
                <span>
                  <span className="span-12 chakrapetch-bold-white-18px-2">{spanText19}</span>
                  <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText20}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxPage;