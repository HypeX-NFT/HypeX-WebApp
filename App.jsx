import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ProfileDropDown from "./components/ProfileDropDown";
import ProfileDropDown2 from "./components/ProfileDropDown2";
import MorphPage from "./components/MorphPage";
import ProfileDropDown3 from "./components/ProfileDropDown3";
import ProfileDropDown4 from "./components/ProfileDropDown4";
import FragmentFactory from "./components/FragmentFactory";
import ProfileDropDown5 from "./components/ProfileDropDown5";
import ProfileDropDown6 from "./components/ProfileDropDown6";
import ProfileDropDown7 from "./components/ProfileDropDown7";
import HomeLimitedBox from "./components/HomeLimitedBox";
import StakeInfoPage from "./components/StakeInfoPage";
import HomeLimitedBox2 from "./components/HomeLimitedBox2";
import ForgePage from "./components/ForgePage";
import HomeLimitedBox3 from "./components/HomeLimitedBox3";
import Loan from "./components/Loan";
import Setting from "./components/Setting";
import Wallet from "./components/Wallet";
import MyInventory from "./components/MyInventory";
import MyBox from "./components/MyBox";
import Stake from "./components/Stake";
import MyStatus from "./components/MyStatus";
import MyFragments from "./components/MyFragments";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile-dropdown-6">
          <ProfileDropDown {...profileDropDownData} />
        </Route>
        <Route path="/profile-dropdown">
          <ProfileDropDown2 {...profileDropDown2Data} />
        </Route>
        <Route path="/morph-page">
          <MorphPage {...morphPageData} />
        </Route>
        <Route path="/profile-dropdown2">
          <ProfileDropDown3 {...profileDropDown3Data} />
        </Route>
        <Route path="/profile-dropdown3">
          <ProfileDropDown4 {...profileDropDown4Data} />
        </Route>
        <Route path="/fragment-factory">
          <FragmentFactory {...fragmentFactoryData} />
        </Route>
        <Route path="/profile-dropdown4">
          <ProfileDropDown5 {...profileDropDown5Data} />
        </Route>
        <Route path="/profile-dropdown5">
          <ProfileDropDown6 {...profileDropDown6Data} />
        </Route>
        <Route path="/profile-dropdown6">
          <ProfileDropDown7 {...profileDropDown7Data} />
        </Route>
        <Route path="/home-limited-box-2">
          <HomeLimitedBox {...homeLimitedBoxData} />
        </Route>
        <Route path="/stake-info-page">
          <StakeInfoPage {...stakeInfoPageData} />
        </Route>
        <Route path="/home-limited-box">
          <HomeLimitedBox2 {...homeLimitedBox2Data} />
        </Route>
        <Route path="/:path(|forge-page)">
          <ForgePage {...forgePageData} />
        </Route>
        <Route path="/home-limited-box2">
          <HomeLimitedBox3 {...homeLimitedBox3Data} />
        </Route>
        <Route path="/loan">
          <Loan {...loanData} />
        </Route>
        <Route path="/setting">
          <Setting {...settingData} />
        </Route>
        <Route path="/wallet">
          <Wallet {...walletData} />
        </Route>
        <Route path="/my-inventory">
          <MyInventory {...myInventoryData} />
        </Route>
        <Route path="/my-box">
          <MyBox {...myBoxData} />
        </Route>
        <Route path="/stake">
          <Stake {...stakeData} />
        </Route>
        <Route path="/my-status">
          <MyStatus {...myStatusData} />
        </Route>
        <Route path="/my-fragments">
          <MyFragments {...myFragmentsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const stateActiveData = {
    group1: "/img/group-1@2x.png",
    text15: "INSURANCE",
};

const fragmentFactoryData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
    stake: "STAKE",
    fragmentFactory: "FRAGMENT FACTORY",
    nftMoorph: "NFT MOORPH",
    nftForge: "NFT FORGE",
    union: "/img/union-23@2x.png",
    loan: "LOAN",
    fragmentFactory2: "/img/fragment-factory@2x.png",
    wechatImage_202109150120351: "/img/wechat-image-20210915012035-1@2x.png",
    desiredQuantity: "DESIRED QUANTITY",
    union2: "/img/union-16@2x.png",
    union3: "/img/union-18@2x.png",
    number: "1",
    text12: "-",
    text14: "+",
    spanText: "add to max: ",
    spanText2: "20",
    union4: "/img/union-21@2x.png",
    spanText3: "Cost: ",
    spanText4: "20",
    spanText5: " $HXC",
    compose: "COMPOSE",
    union5: "/img/union-20@2x.png",
    line74: "/img/line-74@2x.png",
    line75: "/img/line-75@2x.png",
    line76: "/img/line-76@2x.png",
    line77: "/img/line-76@2x.png",
    spanText6: "Cost: ",
    spanText7: "10",
    spanText8: " $HXC",
    spanText9: "50%",
    spanText10: " Success Rate",
    profilePic: "/img/profile-pic-1@2x.png",
    inventoryQuantity: "INVENTORY QUANTITY",
    wechatImage_202109150120311: "/img/wechat-image-20210915012031-1@2x.png",
    union6: "/img/union-16@2x.png",
    union7: "/img/union-18@2x.png",
    number2: "1",
    text11: "-",
    text13: "+",
    spanText11: "add to max: ",
    spanText12: "20",
    union8: "/img/union-21@2x.png",
    shopping_Bag: "/img/shopping-bag@2x.png",
    stateActiveProps: stateActiveData,
};

const stateDefault2Data = {
    className: "state-default-1",
};

const stateDefault3Data = {
    className: "state-default-2",
};

const stateDefault4Data = {
    className: "state-default-3",
};

const stateDefault5Data = {
    className: "state-default-4",
};

const stateDefault6Data = {
    className: "state-default-5",
};

const stateDefault7Data = {
    className: "state-default-6",
};

const stateDefault8Data = {
    className: "state-default-7",
};

const stateDefault22Data = {
    children: "SHIPPING INFO",
};

const stateDefault23Data = {
    children: "PASSWORD",
    className: "state-default-9",
};

const stateDefault24Data = {
    children: "LANGUAGE",
    className: "state-default-10",
};

const stateDefault25Data = {
    children: "NOTIFICATION",
    className: "state-default-11",
};

const stateDefault26Data = {
    children: "THEME",
    className: "state-default-12",
};

const stateDefault27Data = {
    children: "USER ID",
    className: "state-default-13",
};

const stateDefault28Data = {
    children: "CONTACT #",
    className: "state-default-14",
};

const stateDefault29Data = {
    children: "CONTACT @",
    className: "state-default-15",
};

const settingData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-7@2x.png",
    frame: "/img/frame-2@2x.png",
    myBoxes: "My Boxes",
    frame2: "/img/frame-1@2x.png",
    myInventory: "My Inventory",
    userStatus: "User Status",
    frame3: "/img/frame@2x.png",
    myFragments: "My Fragments",
    account_Balance_Wallet: "/img/account-balance-wallet@2x.png",
    wallet: "Wallet",
    rectangle462: "/img/rectangle-462@2x.png",
    settings: "Settings",
    vector2: "/img/vector-1@2x.png",
    setting: "SETTING",
    enterAddress: "Enter Address",
    enterPassword: "Enter Password",
    selectLanguage: "Select Language",
    text32: "Select Notification Preference",
    selectThemeColor: "Select Theme Color",
    enterId: "Enter ID",
    enterPhoneNumber: "Enter Phone Number",
    enterEmail: "Enter Email",
    rectangle426: "/img/rectangle-426-1@2x.png",
    rectangle430: "/img/rectangle-426-1@2x.png",
    rectangle431: "/img/rectangle-426-1@2x.png",
    rectangle432: "/img/rectangle-426-1@2x.png",
    rectangle433: "/img/rectangle-426-1@2x.png",
    rectangle427: "/img/rectangle-426-1@2x.png",
    rectangle428: "/img/rectangle-426-1@2x.png",
    rectangle429: "/img/rectangle-426-1@2x.png",
    line110: "/img/line-110-7@1x.png",
    line114: "/img/line-110-7@1x.png",
    line115: "/img/line-110-7@1x.png",
    line116: "/img/line-110-7@1x.png",
    line117: "/img/line-110-7@1x.png",
    line111: "/img/line-110-7@1x.png",
    line112: "/img/line-110-7@1x.png",
    line113: "/img/line-110-7@1x.png",
    vector31: "/img/vector-31@2x.png",
    vector23: "/img/vector-31@2x.png",
    vector25: "/img/vector-31@2x.png",
    vector27: "/img/vector-31@2x.png",
    vector29: "/img/vector-31@2x.png",
    vector17: "/img/vector-31@2x.png",
    vector19: "/img/vector-31@2x.png",
    vector21: "/img/vector-31@2x.png",
    vector16: "/img/vector-16@2x.png",
    vector24: "/img/vector-16@2x.png",
    vector26: "/img/vector-16@2x.png",
    vector28: "/img/vector-16@2x.png",
    vector30: "/img/vector-16@2x.png",
    vector18: "/img/vector-16@2x.png",
    vector20: "/img/vector-16@2x.png",
    vector22: "/img/vector-16@2x.png",
    surname: "Small Dash",
    profilePic: "/img/profile-pic-11@2x.png",
    stateDefaultProps: stateDefault2Data,
    stateDefault2Props: stateDefault3Data,
    stateDefault3Props: stateDefault4Data,
    stateDefault4Props: stateDefault5Data,
    stateDefault5Props: stateDefault6Data,
    stateDefault6Props: stateDefault7Data,
    stateDefault7Props: stateDefault8Data,
    stateDefault2Props2: stateDefault22Data,
    stateDefault22Props: stateDefault23Data,
    stateDefault23Props: stateDefault24Data,
    stateDefault24Props: stateDefault25Data,
    stateDefault25Props: stateDefault26Data,
    stateDefault26Props: stateDefault27Data,
    stateDefault27Props: stateDefault28Data,
    stateDefault28Props: stateDefault29Data,
};

const amountData = {
    icon: "/img/icon@2x.png",
    x289: "Shipped",
};

const group433Data = {
    lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
    lucasAmaetaInfoCo: "Size:9.5",
};

const amount2Data = {
    children: "$HXC",
};

const amount22Data = {
    children: "$3,000",
    className: "amount-24",
};

const iconData = {
    path2: "/img/path-7@2x.png",
    path3: "/img/path-8@2x.png",
};

const dateData = {
    iconProps: iconData,
};

const amount3Data = {
    children: "$330",
};

const amount32Data = {
    children: "$32.1",
    className: "amount-29",
};

const icon2Data = {
    path2: "/img/path-10@2x.png",
    path3: "/img/path-11@2x.png",
};

const date2Data = {
    className: "date-10",
    iconProps: icon2Data,
};

const icon3Data = {
    path2: "/img/path-13@2x.png",
    path3: "/img/path-14@2x.png",
};

const amount4Data = {
    icon: "/img/icon@2x.png",
    x289: "Sold",
    className: "amount-19",
};

const group4332Data = {
    lucasAmaeta: "Travis Scott Dunk SB",
    lucasAmaetaInfoCo: "Size:9.5",
    className: "group-432",
};

const group4333Data = {
    lucasAmaeta: "TNF x Supreme Jacket",
    lucasAmaetaInfoCo: <>Size:M<br />Color: Red</>,
    className: "group-431",
};

const merchandisesData = {
    path4: "/img/path-3@2x.png",
    maskGroup3: "/img/mask-group-1@2x.png",
    file_16010748630162: "/img/file-1601074863016-2@2x.png",
    file_16010789496712: "/img/file-1601078949671-2@2x.png",
    file_16010746003623: "/img/file-1601074600362-3@2x.png",
    amountProps: amountData,
    group433Props: group433Data,
    amount2Props: amount2Data,
    amount22Props: amount22Data,
    dateProps: dateData,
    amount3Props: amount3Data,
    amount32Props: amount32Data,
    date2Props: date2Data,
    iconProps: icon3Data,
    amount2Props2: amount4Data,
    group4332Props: group4332Data,
    group4333Props: group4333Data,
};

const myInventoryData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-7@2x.png",
    frame: "/img/frame-2@2x.png",
    myBoxes: "My Boxes",
    overlapGroup18: "/img/rectangle-462@2x.png",
    frame2: "/img/frame-7@2x.png",
    myInventory: "My Inventory",
    userStatus: "User Status",
    frame3: "/img/frame@2x.png",
    myFragments: "My Fragments",
    account_Balance_Wallet: "/img/account-balance-wallet-2@2x.png",
    wallet: "Wallet",
    vector2: "/img/vector-3@2x.png",
    settings: "Settings",
    myCollections: "MY COLLECTIONS",
    overlapGroup11: "/img/rectangle-458-8@2x.png",
    myItems: "MY ITEMS",
    totalItems: "Total Items",
    number: "15",
    redeemedItems: "Redeemed Items",
    number2: "2",
    marketValue: "Market Value",
    price: "$19,263",
    totalStaked: "Total Staked",
    number3: "10",
    search: "SEARCH...",
    search2: "/img/search-1@2x.png",
    marketValue2: "MARKET VALUE",
    number4: "5000",
    number5: "4000",
    number6: "3000",
    number7: "2000",
    number8: "1000",
    number9: "0",
    line79: "/img/line-74-1@1x.png",
    line75: "/img/line-74-1@1x.png",
    line78: "/img/line-74-1@1x.png",
    line76: "/img/line-74-1@1x.png",
    line77: "/img/line-74-1@1x.png",
    vector21: "/img/vector-21-3@1x.png",
    vector20: "/img/vector-20-3@1x.png",
    line74: "/img/line-74-1@1x.png",
    name: "Jan",
    feb: "Feb",
    place: "Mar",
    apr: "Apr",
    name2: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
    overlapGroup12: "/img/rectangle-464@1x.png",
    itemDistribution: "ITEM DISTRIBUTION",
    doughnut: "/img/doughnut@2x.png",
    lvApparel: "LV Apparel",
    airJordan: "Air Jordan",
    nike: "Nike",
    palace: "Palace",
    supreme: "Supreme",
    item: "ITEM",
    seeAll: "See All",
    arrow_Forward_Ios: "/img/arrow-forward-ios-4@2x.png",
    itemImage: "Item Image",
    itemName: "Item Name",
    collectionRate: "Collection Rate",
    marketValue3: "Market Value",
    action: "Action",
    line80: "/img/line-80-1@1x.png",
    file_16010746003623: "/img/file-1601074600362-3-1@2x.png",
    lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
    x289: "69.6%",
    x2892: "$1,210.98",
    arrow_Forward_Ios2: "/img/arrow-forward-ios-7@2x.png",
    x2893: "Melt",
    rectangle467: "/img/rectangle-467@2x.png",
    arrow_Forward_Ios3: "/img/arrow-forward-ios-8@2x.png",
    x2894: "59.5%",
    x2895: "Stake",
    x2896: "$702.32",
    lucasAmaeta2: "TNF x Supreme Jacket",
    file_16010748630163: "/img/file-1601074863016-3@2x.png",
    rectangle468: "/img/rectangle-468@2x.png",
    file_16010789496713: "/img/file-1601078949671-3-1@2x.png",
    lucasAmaeta3: "Travis Scott Dunk SB",
    x2897: "86.1%",
    x2898: "$2,103.21",
    arrow_Forward_Ios4: "/img/arrow-forward-ios-8@2x.png",
    x2899: "Loan",
    rectangle469: "/img/rectangle-468@2x.png",
    surname: "Small Dash",
    profilePic: "/img/profile-pic-11@2x.png",
    merchandisesProps: merchandisesData,
};

const amount5Data = {
    icon: "/img/icon-3@2x.png",
    x289: "Shipped",
};

const group4334Data = {
    lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
    lucasAmaetaInfoCo: "Size:9.5",
};

const amount23Data = {
    children: "$HXC",
};

const amount24Data = {
    children: "$3,000",
    className: "amount-26",
};

const icon4Data = {
    path2: "/img/path-7@2x.png",
    path3: "/img/path-8@2x.png",
};

const date3Data = {
    iconProps: icon4Data,
};

const amount33Data = {
    children: "$330",
};

const amount34Data = {
    children: "$32.1",
    className: "amount-31",
};

const icon5Data = {
    path2: "/img/path-10@2x.png",
    path3: "/img/path-11@2x.png",
};

const date4Data = {
    className: "date-12",
    iconProps: icon5Data,
};

const icon6Data = {
    path2: "/img/path-13@2x.png",
    path3: "/img/path-14@2x.png",
};

const amount6Data = {
    icon: "/img/icon@2x.png",
    x289: "Sold",
    className: "amount-21",
};

const group4335Data = {
    lucasAmaeta: "Travis Scott Dunk SB",
    lucasAmaetaInfoCo: "Size:9.5",
    className: "group-432-1",
};

const group4336Data = {
    lucasAmaeta: "TNF x Supreme Jacket",
    lucasAmaetaInfoCo: <>Size:M<br />Color: Red</>,
    className: "group-431-1",
};

const merchandises2Data = {
    path4: "/img/path-18@2x.png",
    maskGroup3: "/img/mask-group-4@2x.png",
    file_16010748630162: "/img/file-1601074863016-2-1@2x.png",
    file_16010789496712: "/img/file-1601078949671-2-1@2x.png",
    file_16010746003623: "/img/file-1601074600362-3-2@2x.png",
    amountProps: amount5Data,
    group433Props: group4334Data,
    amount2Props: amount23Data,
    amount22Props: amount24Data,
    dateProps: date3Data,
    amount3Props: amount33Data,
    amount32Props: amount34Data,
    date2Props: date4Data,
    iconProps: icon6Data,
    amount2Props2: amount6Data,
    group4332Props: group4335Data,
    group4333Props: group4336Data,
};

const myBoxData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-7@2x.png",
    rectangle462: "/img/rectangle-462@2x.png",
    myBoxes: "My Boxes",
    frame: "/img/frame-11@2x.png",
    frame2: "/img/frame-10@2x.png",
    myInventory: "My Inventory",
    userStatus: "User Status",
    frame3: "/img/frame@2x.png",
    myFragments: "My Fragments",
    account_Balance_Wallet: "/img/account-balance-wallet-2@2x.png",
    wallet: "Wallet",
    vector2: "/img/vector-3@2x.png",
    settings: "Settings",
    myMysteryBoxes: "MY MYSTERY BOXES",
    overlapGroup14: "/img/rectangle-458-8@2x.png",
    myBoxes2: "MY BOXES",
    totalBoxes: "Total Boxes",
    number: "30",
    openedBoxes: "Opened Boxes",
    number2: "20",
    marketValue: "Market Value",
    price: "$3,263",
    totalStaked: "Total Staked",
    number3: "5",
    search: "SEARCH...",
    search2: "/img/search-1@2x.png",
    profilePic: "/img/profile-pic-11@2x.png",
    surname: "Small Dash",
    marketValue2: "MARKET VALUE",
    number4: "5000",
    number5: "4000",
    number6: "3000",
    number7: "2000",
    number8: "1000",
    number9: "0",
    line79: "/img/line-74-1@1x.png",
    line75: "/img/line-74-1@1x.png",
    line78: "/img/line-74-1@1x.png",
    line76: "/img/line-74-1@1x.png",
    line77: "/img/line-74-1@1x.png",
    vector21: "/img/vector-21-3@1x.png",
    vector20: "/img/vector-20-3@1x.png",
    line74: "/img/line-74-1@1x.png",
    name: "Jan",
    feb: "Feb",
    place: "Mar",
    apr: "Apr",
    name2: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
    overlapGroup10: "/img/rectangle-464@1x.png",
    itemDistribution: "ITEM DISTRIBUTION",
    doughnut: "/img/doughnut-1@2x.png",
    opened: "Opened",
    listForSale: "List For Sale",
    stake: "Stake",
    inStock: "In Stock",
    line80: "/img/line-80-1@1x.png",
    item: "ITEM",
    itemImage: "Item Image",
    itemName: "Item Name",
    status: "Status",
    collection: "Collection #",
    merchandise: "Merchandise",
    cost: "Cost",
    action: "Action",
    seeAll: "See All",
    arrow_Forward_Ios: "/img/arrow-forward-ios-4@2x.png",
    arrow_Forward_Ios2: "/img/arrow-forward-ios-11@2x.png",
    arrow_Forward_Ios3: "/img/arrow-forward-ios-8@2x.png",
    arrow_Forward_Ios4: "/img/arrow-forward-ios-8@2x.png",
    x289: "Opened",
    x2892: "36/500",
    x2893: "436/500",
    x2894: "194/500",
    x2895: <>Supreme x LV<br />Wallet NFT</>,
    lucasAmaeta: "Base Box",
    x2896: "In Stock",
    text35: "-",
    lucasAmaeta2: "Base Box",
    x2897: "List for Sale",
    text36: "-",
    x2898: "$29.99",
    x2899: "Sale",
    x28910: "Stake",
    x28911: "Open",
    x28912: "$29.99",
    x28913: "$29.99",
    lucasAmaeta3: "Base Box",
    rectangle467: "/img/rectangle-467-1@2x.png",
    rectangle468: "/img/rectangle-468@2x.png",
    rectangle469: "/img/rectangle-468@2x.png",
    lucasAmaetaInfoCo: "Drop 0 | Series 1",
    lucasAmaetaInfoCo2: "Drop 1 | Series 0",
    lucasAmaetaInfoCo3: "Drop 1 | Series 2",
    wechatImage_202109131624261: "/img/wechat-image-20210913162426-1-1@2x.png",
    wechatImage_202109131624262: "/img/wechat-image-20210913162426-1-1@2x.png",
    wechatImage_202109131624263: "/img/wechat-image-20210913162426-1-1@2x.png",
    merchandisesProps: merchandises2Data,
};

const amount7Data = {
    icon: "/img/icon-3@2x.png",
    x289: "Shipped",
};

const group4337Data = {
    lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
    lucasAmaetaInfoCo: "Size:9.5",
};

const amount25Data = {
    children: "$HXC",
};

const amount26Data = {
    children: "$3,000",
    className: "amount-28",
};

const icon7Data = {
    path2: "/img/path-7@2x.png",
    path3: "/img/path-8@2x.png",
};

const date5Data = {
    iconProps: icon7Data,
};

const amount35Data = {
    children: "$330",
};

const amount36Data = {
    children: "$32.1",
    className: "amount-33",
};

const icon8Data = {
    path2: "/img/path-10@2x.png",
    path3: "/img/path-11@2x.png",
};

const date6Data = {
    className: "date-14",
    iconProps: icon8Data,
};

const icon9Data = {
    path2: "/img/path-13@2x.png",
    path3: "/img/path-14@2x.png",
};

const amount8Data = {
    icon: "/img/icon@2x.png",
    x289: "Sold",
    className: "amount-23",
};

const group4338Data = {
    lucasAmaeta: "Travis Scott Dunk SB",
    lucasAmaetaInfoCo: "Size:9.5",
    className: "group-432-2",
};

const group4339Data = {
    lucasAmaeta: "TNF x Supreme Jacket",
    lucasAmaetaInfoCo: <>Size:M<br />Color: Red</>,
    className: "group-431-2",
};

const merchandises3Data = {
    path4: "/img/path-18@2x.png",
    maskGroup3: "/img/mask-group-10@2x.png",
    file_16010748630162: "/img/file-1601074863016-2-2@2x.png",
    file_16010789496712: "/img/file-1601078949671-2-2@2x.png",
    file_16010746003623: "/img/file-1601074600362-3-3@2x.png",
    amountProps: amount7Data,
    group433Props: group4337Data,
    amount2Props: amount25Data,
    amount22Props: amount26Data,
    dateProps: date5Data,
    amount3Props: amount35Data,
    amount32Props: amount36Data,
    date2Props: date6Data,
    iconProps: icon9Data,
    amount2Props2: amount8Data,
    group4332Props: group4338Data,
    group4333Props: group4339Data,
};

const myFragmentsData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-12@2x.png",
    frame: "/img/frame-17@2x.png",
    myBoxes: "My Boxes",
    frame2: "/img/frame-16@2x.png",
    myInventory: "My Inventory",
    userStatus: "User Status",
    rectangle462: "/img/rectangle-462-4@2x.png",
    frame3: "/img/frame-15@2x.png",
    myFragments: "My Fragments",
    account_Balance_Wallet: "/img/account-balance-wallet-4@2x.png",
    wallet: "Wallet",
    vector2: "/img/vector-9@2x.png",
    settings: "Settings",
    text46: "MY FRICTIONAL NFT CARDS",
    overlapGroup12: "/img/rectangle-458-8@2x.png",
    myBoxes2: "MY BOXES",
    totalBoxes: "Total Boxes",
    number: "30",
    openedBoxes: "Opened Boxes",
    number2: "20",
    marketValue: "Market Value",
    price: "$3,263",
    totalStaked: "Total Staked",
    number3: "5",
    search: "SEARCH...",
    search2: "/img/search-4@2x.png",
    marketValue2: "MARKET VALUE",
    number4: "5000",
    number5: "4000",
    number6: "3000",
    number7: "2000",
    number8: "1000",
    number9: "0",
    line79: "/img/line-74-1@1x.png",
    line75: "/img/line-74-1@1x.png",
    line78: "/img/line-74-1@1x.png",
    line76: "/img/line-74-1@1x.png",
    line77: "/img/line-74-1@1x.png",
    vector21: "/img/vector-21-7@1x.png",
    vector20: "/img/vector-20-7@1x.png",
    line74: "/img/line-74-1@1x.png",
    name: "Jan",
    feb: "Feb",
    place: "Mar",
    apr: "Apr",
    name2: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
    overlapGroup14: "/img/rectangle-464@1x.png",
    itemDistribution: "ITEM DISTRIBUTION",
    doughnut: "/img/doughnut-2@2x.png",
    lvApparel: "LV Apparel",
    airJordan: "Air Jordan",
    nike: "Nike",
    palace: "Palace",
    supreme: "Supreme",
    item: "ITEM",
    seeAll: "See All",
    arrow_Forward_Ios: "/img/arrow-forward-ios-4@2x.png",
    itemImage: "Item Image",
    itemName: "Item Name",
    collectionRate: "Collection Rate",
    attributes: "Attributes",
    estMarketPrice: "Est. Market Price",
    action: "Action",
    line80: "/img/line-80-1@1x.png",
    wechatImage_202109150120353: "/img/wechat-image-20210915012035-3-1@2x.png",
    lucasAmaeta: <>Air Jordan 1 Retro<br />Travis Scott</>,
    x289: "40%",
    dimond1: "/img/dimond-1@2x.png",
    questionMark1: "/img/question-mark-1@2x.png",
    x2892: "$399",
    arrow_Forward_Ios2: "/img/arrow-forward-ios-8@2x.png",
    x2893: "Upgrade",
    rectangle467: "/img/rectangle-467-2@2x.png",
    arrow_Forward_Ios3: "/img/arrow-forward-ios-8@2x.png",
    x2894: "20%",
    x2895: "Stake",
    x2896: "$129",
    lucasAmaeta2: <>Air Jordan 1 Retro<br />Travis Scott</>,
    rectangle468: "/img/rectangle-467-2@2x.png",
    dice1: "/img/dice-1@2x.png",
    wechatImage_202109150120313: "/img/wechat-image-20210915012031-3@2x.png",
    wechatImage_202109150119241: "/img/wechat-image-20210915011924-1@2x.png",
    lucasAmaeta3: <>Air Jordan 1 Retro<br />Travis Scott</>,
    x2897: "5%",
    rocket1: "/img/rocket-1@2x.png",
    x2898: "$59",
    arrow_Forward_Ios4: "/img/arrow-forward-ios-8@2x.png",
    x2899: "Merge",
    rectangle469: "/img/rectangle-467-2@2x.png",
    surname: "Small Dash",
    profilePic: "/img/profile-pic-18@2x.png",
    merchandisesProps: merchandises3Data,
};

const profileDropDownData = {
    overlapGroup: "/img/rectangle-457@2x.png",
    line66: "/img/line-66@2x.png",
    line67: "/img/line-67@2x.png",
    line68: "/img/line-66@2x.png",
    line69: "/img/line-67@2x.png",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    vector19: "/img/vector-19@2x.png",
    line110: "/img/line-110@2x.png",
    rectangle458: "/img/rectangle-458@2x.png",
    text1: "View and Edit Profile",
    hxc: "$HXC",
    text2: "8882.06",
    union: "/img/union@2x.png",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    union2: "/img/union-1@2x.png",
    withdraw: "WITHDRAW",
    line112: "/img/line-112@1x.png",
    overlapGroup1: "/img/rectangle-409@1x.png",
    boxIcon: "/img/box-icon@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    myCollections: "My Collections",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myNftCards: "My NFT Cards",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const profileDropDown2Data = {
    overlapGroup1: "/img/rectangle-457@2x.png",
    line66: "/img/line-66@2x.png",
    line67: "/img/line-67@2x.png",
    line68: "/img/line-66@2x.png",
    line69: "/img/line-67@2x.png",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    vector19: "/img/vector-19@2x.png",
    line110: "/img/line-110@2x.png",
    rectangle458: "/img/rectangle-458@2x.png",
    text3: "View and Edit Profile",
    hxc: "$HXC",
    text4: "8882.06",
    union: "/img/union@2x.png",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    union2: "/img/union-1@2x.png",
    withdraw: "WITHDRAW",
    line5: "/img/line-5@1x.png",
    line111: "/img/line-112@1x.png",
    boxIcon: "/img/box-icon-1@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    myCollections: "My Collections",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myNftCards: "My NFT Cards",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon-1@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const morphPageData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
    stake: "STAKE",
    fragmentFactory: "FRAGMENT FACTORY",
    nftMoorph: "NFT MOORPH",
    nftForge: "NFT FORGE",
    union: "/img/union-25@2x.png",
    loan: "LOAN",
    profilePic: "/img/profile-pic-1@2x.png",
    shopping_Bag: "/img/shopping-bag@2x.png",
    vector21: "/img/vector-21@2x.png",
    vector22: "/img/vector-21@2x.png",
    x0857C7A77Ba118452F804605818D564D0E: "/img/0857c7a77ba118452f804605818d564d0e10ec77483fae717c170c85f231fbbb@2x.png",
    x0857C7A77Ba118452F804605818D564D0E2: "/img/0857c7a77ba118452f804605818d564d0e10ec77483fae717c170c85f231fbbb@2x.png",
    text5: "CHOOSE AN NFT TO MORPH",
    e29C9C180C6279B0B02Abd6A1801C7C0408: "/img/e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b@2x.png",
    text6: "CHOOSE AN NFT TO MORPH",
    f5Ca38F748A1D6Eaf726B8A42Fb575C3C71: "/img/f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b-1@2x.png",
    f5Ca38F748A1D6Eaf726B8A42Fb575C3C712: "/img/f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b@2x.png",
    wechatImage_202108291118591: "/img/wechat-image-20210829111859-1@2x.png",
    vector20: "/img/vector-20@2x.png",
    vector23: "/img/vector-20@2x.png",
    insurance: "INSURANCE",
    spanText: "Cost: ",
    spanText2: "20",
    spanText3: " $HXC",
    group1: "/img/group-1-1@2x.png",
    morph: "MORPH",
    union2: "/img/union-24@2x.png",
    line70: "/img/line-70@2x.png",
    line71: "/img/line-71@2x.png",
    line72: "/img/line-72@2x.png",
    line73: "/img/line-73@2x.png",
    spanText4: "Cost: ",
    spanText5: "40",
    spanText6: " $HXC",
    spanText7: "70%",
    spanText8: " Success Rate",
};

const profileDropDown3Data = {
    overlapGroup3: "/img/rectangle-457@2x.png",
    line66: "/img/line-66@2x.png",
    line67: "/img/line-67@2x.png",
    line68: "/img/line-66@2x.png",
    line69: "/img/line-67@2x.png",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    vector19: "/img/vector-19@2x.png",
    line110: "/img/line-110@2x.png",
    rectangle458: "/img/rectangle-458@2x.png",
    text7: "View and Edit Profile",
    hxc: "$HXC",
    text8: "8882.06",
    union: "/img/union@2x.png",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    union2: "/img/union-1@2x.png",
    withdraw: "WITHDRAW",
    line112: "/img/line-112@1x.png",
    boxIcon: "/img/box-icon-2@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    overlapGroup1: "/img/rectangle-409@1x.png",
    sneakerIcon: "/img/sneaker-icon-2@2x.png",
    myCollections: "My Collections",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myNftCards: "My NFT Cards",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon-2@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const profileDropDown4Data = {
    overlapGroup3: "/img/rectangle-457@2x.png",
    line66: "/img/line-66@2x.png",
    line67: "/img/line-67@2x.png",
    line68: "/img/line-66@2x.png",
    line69: "/img/line-67@2x.png",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    vector19: "/img/vector-19@2x.png",
    line110: "/img/line-110@2x.png",
    rectangle458: "/img/rectangle-458@2x.png",
    text9: "View and Edit Profile",
    hxc: "$HXC",
    text10: "8882.06",
    union: "/img/union@2x.png",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    union2: "/img/union-1@2x.png",
    withdraw: "WITHDRAW",
    line111: "/img/line-112@1x.png",
    boxIcon: "/img/box-icon-3@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    myCollections: "My Collections",
    overlapGroup2: "/img/rectangle-409@1x.png",
    puzzleIcon: "/img/puzzle-icon-3@2x.png",
    myNftCards: "My NFT Cards",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const profileDropDown5Data = {
    overlapGroup: "/img/rectangle-457@2x.png",
    line66: "/img/line-66@2x.png",
    line67: "/img/line-67@2x.png",
    line68: "/img/line-66@2x.png",
    line69: "/img/line-67@2x.png",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    vector19: "/img/vector-19@2x.png",
    line110: "/img/line-110@2x.png",
    rectangle458: "/img/rectangle-458@2x.png",
    text16: "View and Edit Profile",
    hxc: "$HXC",
    text17: "8882.06",
    place: "DEPOSIT",
    union: "/img/union@2x.png",
    usd: "$USD",
    phone: "3023.6",
    union2: "/img/union-1@2x.png",
    withdraw: "WITHDRAW",
    line111: "/img/line-112@1x.png",
    boxIcon: "/img/box-icon-3@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    myCollections: "My Collections",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myNftCards: "My NFT Cards",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    overlapGroup6: "/img/rectangle-409@1x.png",
    walletIcon: "/img/wallet-icon-4@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const profileDropDown6Data = {
    overlapGroup1: "/img/rectangle-457@2x.png",
    line66: "/img/line-66@2x.png",
    line67: "/img/line-67@2x.png",
    line68: "/img/line-66@2x.png",
    line69: "/img/line-67@2x.png",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    vector19: "/img/vector-19@2x.png",
    line110: "/img/line-110@2x.png",
    rectangle458: "/img/rectangle-458@2x.png",
    text18: "View and Edit Profile",
    hxc: "$HXC",
    text19: "8882.06",
    union: "/img/union@2x.png",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    union2: "/img/union-1@2x.png",
    withdraw: "WITHDRAW",
    line111: "/img/line-112@1x.png",
    boxIcon: "/img/box-icon-3@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    myCollections: "My Collections",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myNftCards: "My NFT Cards",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon@2x.png",
    myWallets: "My Wallets",
    overlapGroup2: "/img/rectangle-409@1x.png",
    settingIcon: "/img/setting-icon-5@2x.png",
    mySetting: "My Setting",
};

const profileDropDown7Data = {
    overlapGroup5: "/img/rectangle-457@2x.png",
    line66: "/img/line-66@2x.png",
    line67: "/img/line-67@2x.png",
    line68: "/img/line-66@2x.png",
    line69: "/img/line-67@2x.png",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    vector19: "/img/vector-19@2x.png",
    line110: "/img/line-110@2x.png",
    rectangle458: "/img/rectangle-458@2x.png",
    text20: "View and Edit Profile",
    hxc: "$HXC",
    text21: "8882.06",
    union: "/img/union@2x.png",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    union2: "/img/union-1@2x.png",
    withdraw: "WITHDRAW",
    line112: "/img/line-112@1x.png",
    boxIcon: "/img/box-icon-3@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    myCollections: "My Collections",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myNftCards: "My NFT Cards",
    overlapGroup6: "/img/rectangle-409@1x.png",
    affiliatesIcon: "/img/affiliates-icon-6@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const homeLimitedBoxData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
    stake: "STAKE",
    fragmentFactory: "FRAGMENT FACTORY",
    nftMoorph: "NFT MOORPH",
    nftForge: "NFT FORGE",
    loan: "LOAN",
    profilePic: "/img/profile-pic-1@2x.png",
    shopping_Bag: "/img/shopping-bag@2x.png",
    bannerVersion21: "/img/banner-version-2-1@1x.png",
    bannerVersion41: "/img/banner-version-4-1@1x.png",
    limitedBox: "LIMITED BOX",
    nftCards: "NFT CARDS",
    line79: "/img/line-79@1x.png",
    picture11: "/img/picture1-1@2x.png",
    drop0Series1: "DROP 0 | SERIES 1",
    x30100Left: "30/100 LEFT",
    wechatImage_202109131624261: "/img/wechat-image-20210913162426-1@2x.png",
    rectangle481: "/img/rectangle-422@2x.png",
    unbox: "UNBOX",
    rectangle482: "/img/rectangle-419@2x.png",
    price: "$29.99",
    picture12: "/img/picture1-1@2x.png",
    x0100Left: "0/100 LEFT",
    drop0Series0: "DROP 0 | SERIES 0",
    wechatImage_202109131624262: "/img/wechat-image-20210913162426-1@2x.png",
    title: "SOLD OUT",
    rectangle483: "/img/rectangle-422@2x.png",
    unbox2: "UNBOX",
    rectangle484: "/img/rectangle-419@2x.png",
    price2: "$29.99",
};

const stakeInfoPageData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-4@2x.png",
    stake: "STAKE",
    fragmentFactory: "FRAGMENT FACTORY",
    nftMoorph: "NFT MOORPH",
    nftForge: "NFT FORGE",
    union: "/img/union-36@2x.png",
    loan: "LOAN",
    profilePic: "/img/profile-pic-11@2x.png",
    shopping_Bag: "/img/shopping-bag@2x.png",
    text22: "WHAT IS HYPEX STAKE?",
    text23: <>Users can stake (deposit) Mystery Boxes, merchandise (NFTs), and fragments on HypeX. When users stake their NFTs on HypeX, our system will use Chainlink Price Feed to collect live market price from other platforms such as StockX to calculate an estimated value for the responding item. The yield will be generated based on the value of the staked NFT. Users can withdraw NFTs along with yield  after the minimal staking period, which is 7 days. If users would like to withdraw within 7 days, fees will be applied to early exits.<br />Users will gain more benefits with greater staking amounts. Such benefits include complimentary mystery boxes and fragments. Greater staking amount will be rewarded with more valuable mystery boxes and higher probabilities to draw rare fragments.</>,
    overlapGroup: "/img/union-37@2x.png",
    line70: "/img/line-70-1@2x.png",
    line72: "/img/line-72-1@2x.png",
    stakeNow: "STAKE NOW",
    line71: "/img/line-71-1@2x.png",
    line73: "/img/line-73-1@2x.png",
    image59: "/img/image-59@2x.png",
    rectangle453: "/img/rectangle-453@1x.png",
    file_16010746003624: "/img/file-1601074600362-4@2x.png",
    rectangle454: "/img/rectangle-454@2x.png",
    file_16010789496713: "/img/file-1601078949671-3@1x.png",
};

const homeLimitedBox2Data = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
    stake: "STAKE",
    fragmentFactory: "FRAGMENT FACTORY",
    nftMoorph: "NFT MOORPH",
    nftForge: "NFT FORGE",
    loan: "LOAN",
    profilePic: "/img/profile-pic-1@2x.png",
    shopping_Bag: "/img/shopping-bag@2x.png",
    bannerVersion21: "/img/banner-version-2-1@1x.png",
    bannerVersion41: "/img/banner-version-4-1@1x.png",
    limitedBox: "LIMITED BOX",
    nftCards: "NFT CARDS",
    line79: "/img/line-79@1x.png",
    picture11: "/img/picture1-1@2x.png",
    drop0Series1: "DROP 0 | SERIES 1",
    x30100Left: "30/100 LEFT",
    wechatImage_202109131624261: "/img/wechat-image-20210913162426-1@2x.png",
    rectangle481: "/img/rectangle-422@2x.png",
    unbox: "UNBOX",
    rectangle482: "/img/rectangle-419@2x.png",
    price: "$29.99",
    picture12: "/img/picture1-1@2x.png",
    x0100Left: "0/100 LEFT",
    drop0Series0: "DROP 0 | SERIES 0",
    wechatImage_202109131624262: "/img/wechat-image-20210913162426-1@2x.png",
    soldOut: "SOLD OUT",
    rectangle483: "/img/rectangle-422@2x.png",
    unbox2: "UNBOX",
    rectangle484: "/img/rectangle-419@2x.png",
    price2: "$29.99",
};

const forgePageData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-5@2x.png",
    stake: "STAKE",
    fragmentFactory: "FRAGMENT FACTORY",
    nftMoorph: "NFT MOORPH",
    nftForge: "NFT FORGE",
    union: "/img/union-25@2x.png",
    loan: "LOAN",
    profilePic: "/img/profile-pic-11@2x.png",
    shopping_Bag: "/img/shopping-bag@2x.png",
    text25: "CHOOSE AN NFT TO MORPH",
    x115: "/img/----1-15@2x.png",
    spanText: "60%",
    spanText2: " Success Rate",
    forge: "FORGE",
    union2: "/img/union-39@2x.png",
    line70: "/img/line-70-2@2x.png",
    line71: "/img/line-71-2@2x.png",
    line72: "/img/line-76@2x.png",
    line73: "/img/line-76@2x.png",
    rectangle3: "/img/rectangle-3@2x.png",
    spanText3: "Cost: ",
    spanText4: "40",
    spanText5: " $HXC",
    union3: "/img/union-38@2x.png",
    spanText6: "Cost: ",
    spanText7: "20",
    spanText8: " $HXC",
    insurance: "Insurance",
    spanText9: "103.63%",
    spanText10: " Collection  Rate",
};

const homeLimitedBox3Data = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
    stake: "STAKE",
    fragmentFactory: "FRAGMENT FACTORY",
    nftMoorph: "NFT MOORPH",
    nftForge: "NFT FORGE",
    loan: "LOAN",
    profilePic: "/img/profile-pic-1@2x.png",
    shopping_Bag: "/img/shopping-bag@2x.png",
    bannerVersion21: "/img/banner-version-2-1@1x.png",
    bannerVersion41: "/img/banner-version-4-1@1x.png",
    limitedBox: "LIMITED BOX",
    nftCards: "NFT CARDS",
    line79: "/img/line-79@1x.png",
    sortBy: "SORT BY",
    surname: "PRICE",
    arrow_Forward_Ios: "/img/arrow-forward-ios@2x.png",
    categories: "CATEGORIES",
    arrow_Forward_Ios2: "/img/arrow-forward-ios@2x.png",
    place: "BRAND",
    arrow_Forward_Ios3: "/img/arrow-forward-ios@2x.png",
    rarity: "RARITY",
    arrow_Forward_Ios4: "/img/arrow-forward-ios@2x.png",
    searchBoxes: "SEARCH BOXES...",
    search: "/img/search@2x.png",
    overlapGroup20: "/img/union-2@1x.png",
    x624B60C58C9D8Bfb6Ff1886C2Fd605D2Ad: "/img/624b60c58c9d8bfb6ff1886c2fd605d2adeb6ea4da576068201b6c6958ce93f4@2x.png",
    rectangle422: "/img/rectangle-422@2x.png",
    buy: "BUY",
    rectangle419: "/img/rectangle-419@2x.png",
    price: "$29.99",
    overlapGroup18: "/img/union-3@2x.png",
    x5F9C4Ab08Cac7457E9111A30E466492060: "/img/5f9c4ab08cac7457e9111a30e4664920607ea2c115a1433d7be98e97e64244ca@2x.png",
    rectangle430: "/img/rectangle-430@2x.png",
    buy2: "BUY",
    rectangle434: "/img/rectangle-434@2x.png",
    price2: "$29.99",
    overlapGroup13: "/img/union-3@2x.png",
    chunkyDunk: "CHUNKY DUNK",
    image50: "/img/image-50@2x.png",
    rectangle438: "/img/rectangle-422@2x.png",
    unbox: "UNBOX",
    rectangle442: "/img/rectangle-419@2x.png",
    price3: "$29.99",
    overlapGroup16: "/img/union-3@2x.png",
    x4523540F1504Cd17100C4835E85B7Eefd4: "/img/4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3@2x.png",
    rectangle423: "/img/rectangle-422@2x.png",
    buy3: "BUY",
    rectangle424: "/img/rectangle-419@2x.png",
    price4: "$29.99",
    overlapGroup21: "/img/union-3@2x.png",
    x2C624232Cdd221771294Dfbb310Aca000A: "/img/2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3@2x.png",
    rectangle432: "/img/rectangle-430@2x.png",
    buy4: "BUY",
    rectangle436: "/img/rectangle-434@2x.png",
    price5: "$29.99",
    overlapGroup11: "/img/union-3@2x.png",
    text26: "SUPREME X THE NORTH FACE",
    image56: "/img/image-56@2x.png",
    rectangle440: "/img/rectangle-422@2x.png",
    unbox2: "UNBOX",
    rectangle444: "/img/rectangle-419@2x.png",
    price6: "$29.99",
    overlapGroup23: "/img/union-3@2x.png",
    b17Ef6D19C7A5B1Ee83B907C595526Dcb1E: "/img/b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9@2x.png",
    rectangle425: "/img/rectangle-422@2x.png",
    buy5: "BUY",
    rectangle427: "/img/rectangle-419@2x.png",
    price7: "$29.99",
    overlapGroup12: "/img/union-3@2x.png",
    x35135Aaa6Cc23891B40Cb3F378C53A17A1: "/img/35135aaa6cc23891b40cb3f378c53a17a1127210ce60e125ccf03efcfdaec458@2x.png",
    rectangle431: "/img/rectangle-430@2x.png",
    buy6: "BUY",
    rectangle435: "/img/rectangle-434@2x.png",
    price8: "$29.99",
    overlapGroup22: "/img/union-3@2x.png",
    yeezyBox: "YEEZY BOX",
    image61: "/img/image-61@2x.png",
    rectangle439: "/img/rectangle-422@2x.png",
    unbox3: "UNBOX",
    rectangle443: "/img/rectangle-419@2x.png",
    price9: "$29.99",
    overlapGroup19: "/img/union-3@2x.png",
    e629Fa6598D732768F7C726B4B621285F9C: "/img/e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb@2x.png",
    rectangle426: "/img/rectangle-422@2x.png",
    buy7: "BUY",
    rectangle428: "/img/rectangle-419@2x.png",
    price10: "$29.99",
    overlapGroup8: "/img/union-3@2x.png",
    e55E1658E2Ba74E8Ce1B48C8604B674Ee90: "/img/e55e1658e2ba74e8ce1b48c8604b674ee90285b27c6b977a88d8ba32d9358b9b@2x.png",
    rectangle433: "/img/rectangle-430@2x.png",
    buy8: "BUY",
    rectangle437: "/img/rectangle-434@2x.png",
    price11: "$29.99",
    overlapGroup14: "/img/union-3@2x.png",
    palaceBox: "PALACE BOX",
    image57: "/img/image-57@2x.png",
    rectangle441: "/img/rectangle-422@2x.png",
    unbox4: "UNBOX",
    rectangle445: "/img/rectangle-419@2x.png",
    price12: "$29.99",
};

const loanData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-6@2x.png",
    stake: "STAKE",
    fragmentFactory: "FRAGMENT FACTORY",
    nftMoorph: "NFT MOORPH",
    nftForge: "NFT FORGE",
    union: "/img/union-36@2x.png",
    loan: "LOAN",
    profilePic: "/img/profile-pic-13@2x.png",
    shopping_Bag: "/img/shopping-bag-6@2x.png",
    text28: "CHOOSE A MERCHANDISE TO STAKE",
    x35135Aaa6Cc23891B40Cb3F378C53A17A1: "/img/35135aaa6cc23891b40cb3f378c53a17a1127210ce60e125ccf03efcfdaec458-1@2x.png",
    vector21: "/img/vector-21-1@2x.png",
    wechatImage_202109150120353: "/img/wechat-image-20210915012035-3@2x.png",
    vector20: "/img/vector-20-1@2x.png",
    name: "TRAVIS SCOTT DUNK SB",
    line109: "/img/line-109@2x.png",
    vector22: "/img/vector-22-1@2x.png",
    spanText: "in",
    spanText2: " ",
    spanText3: "UST/USD",
    number: "1",
    text29: "-",
    text30: "+",
    quantity: "QUANTITY",
    text31: "ESTIMATED STAKE VALUE",
    price: "$700",
    text27: "INTEREST RATE: 0.002%",
    overlapGroup3: "/img/union-41@2x.png",
    loan2: "LOAN",
    e55E1658E2Ba74E8Ce1B48C8604B674Ee90: "/img/e55e1658e2ba74e8ce1b48c8604b674ee90285b27c6b977a88d8ba32d9358b9b-1@2x.png",
    yourLoan: "YOUR LOAN",
    placeholder: "Placeholder",
    percent: "100%",
    rectangle431: "/img/rectangle-431-1@2x.png",
    totalLoanDebt: "Total Loan Debt",
    price2: "$6,520",
};

const walletData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-7@2x.png",
    frame: "/img/frame-2@2x.png",
    myBoxes: "My Boxes",
    frame2: "/img/frame-4@2x.png",
    myInventory: "My Inventory",
    userStatus: "User Status",
    frame3: "/img/frame@2x.png",
    myFragments: "My Fragments",
    overlapGroup11: "/img/rectangle-462@2x.png",
    account_Balance_Wallet: "/img/account-balance-wallet-1@2x.png",
    wallet: "Wallet",
    vector2: "/img/vector-3@2x.png",
    settings: "Settings",
    line80: "/img/line-80@1x.png",
    wallet2: "WALLET",
    overlapGroup4: "/img/rectangle-458-7@2x.png",
    totalAmount: "TOTAL AMOUNT",
    price: "USD",
    price2: "$600",
    hxc: "$HXC",
    text33: "7,600",
    line72: "/img/line-72-3@2x.png",
    line73: "/img/line-73-3@2x.png",
    union: "/img/union-43@2x.png",
    line70: "/img/line-70-3@2x.png",
    line71: "/img/line-71-3@2x.png",
    withdrawFunds: "WITHDRAW FUNDS",
    addFunds: "ADD FUNDS",
    enterAmount: "Enter Amount",
    line722: "/img/line-72-4@2x.png",
    line732: "/img/line-73-4@2x.png",
    union2: "/img/union-44@2x.png",
    line702: "/img/line-70-4@2x.png",
    line712: "/img/line-71-4@2x.png",
    addFunds2: "ADD FUNDS",
    search: "SEARCH...",
    search2: "/img/search-1@2x.png",
    connectWith: "CONNECT WITH",
    image21: "/img/image-21@2x.png",
    metamask: "MetaMask",
    image24: "/img/image-24@2x.png",
    dapper: "Dapper",
    image22: "/img/image-22@2x.png",
    coinbase: "Coinbase",
    image25: "/img/image-25@2x.png",
    fortmatic: "Fortmatic",
    image23: "/img/image-23@2x.png",
    bitski: "Bitski",
    image26: "/img/image-26@2x.png",
    torus: "Torus",
    transactions: "TRANSACTIONS",
    paymentMethod: "PAYMENT METHOD",
    edit: "Edit",
    arrow_Forward_Ios: "/img/arrow-forward-ios-4@2x.png",
    rectangle477: "/img/rectangle-477@2x.png",
    visaLogo: "/img/path14@2x.png",
    xxxxXxxxXxxx3456: "XXXX XXXX XXXX 3456",
    mohsinJaved: "Mohsin Javed",
    debitCard: "Debit Card",
    text34: "01/24",
    validThru: <>Valid <br />Thru</>,
    seeAll: "See All",
    arrow_Forward_Ios2: "/img/arrow-forward-ios-4@2x.png",
    place: "Date",
    transactionId: "Transaction ID",
    type: "Type",
    place2: "Name",
    value: "Value",
    xreturn: "Return",
    status: "Status",
    lucasAmaeta: "07/12/2021",
    x289: "12345678",
    x2892: "Visa",
    x2893: "USD",
    x2894: "$100",
    x2895: "#18000",
    x2896: "Complete",
    lucasAmaeta2: "07/5/2021",
    x2897: "12345678",
    x2898: "MetaMask",
    x2899: "HXC",
    x28910: "$100",
    x28911: "#18000",
    x28912: "Failed",
    lucasAmaeta3: "06/28/2021",
    x28913: "12345678",
    x28914: "CoinBase",
    x28915: "Bitcoin",
    x28916: "$100",
    x28917: "#18000",
    x28918: "In Progress",
    lucasAmaeta4: "06/10/2021",
    x28919: "12345678",
    x28920: "Bitski",
    x28921: "UST",
    x28922: "$100",
    x28923: "#18000",
    x28924: "Complete",
    surname: "Small Dash",
    profilePic: "/img/profile-pic-11@2x.png",
};

const stakeData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-11@2x.png",
    stake: "STAKE",
    fragmentFactory: "FRAGMENT FACTORY",
    nftMoorph: "NFT MOORPH",
    nftForge: "NFT FORGE",
    union: "/img/union-36@2x.png",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic-18@2x.png",
    shopping_Bag: "/img/shopping-bag-7@2x.png",
    text37: "CHOOSE A MERCHANDISE TO STAKE",
    image60: "/img/image-60@2x.png",
    rectangle454: "/img/rectangle-454-1@2x.png",
    vector21: "/img/vector-21-5@2x.png",
    file_16010789496713: "/img/file-1601078949671-3-2@2x.png",
    image59: "/img/image-59-1@2x.png",
    vector20: "/img/vector-20-5@2x.png",
    rectangle453: "/img/rectangle-453-1@2x.png",
    name: "TRAVIS SCOTT DUNK SB",
    line109: "/img/line-109@2x.png",
    number: "1",
    text42: "-",
    text43: "+",
    quantity: "QUANTITY",
    text38: "ESTIMATED STAKE VALUE",
    price: "$3,000",
    vector22: "/img/vector-22-1@2x.png",
    spanText: "Pairs:",
    spanText2: " UST - HXC",
    text41: "MINIMAL STAKE PERIOD: 7 DAYS",
    overlapGroup9: "/img/union-45@2x.png",
    stake2: "STAKE",
    yourStake: "YOUR STAKE",
    rectangle431: "/img/rectangle-431-3@2x.png",
    text39: "Total Value You Staked",
    price2: "$36,520",
    viewFullStatus: "View Full Status",
    x13480ToTier3: "$13,480 to Tier 3",
    arrow_Forward: "/img/arrow-forward@2x.png",
    totalPool: "TOTAL POOL",
    rectangle432: "/img/rectangle-432-2@2x.png",
    estimatedApy: "Estimated APY",
    percent: "56%",
    text40: "Cumulative total pool amount (USD)",
    price3: "$5,000,065",
};

const myStatusData = {
    union: "/img/union-47@1x.png",
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-12@2x.png",
    frame: "/img/frame-2@2x.png",
    myBoxes: "My Boxes",
    frame2: "/img/frame-13@2x.png",
    myInventory: "My Inventory",
    overlapGroup13: "/img/rectangle-462-4@2x.png",
    userStatus: "User Status",
    frame3: "/img/frame-12@2x.png",
    myFragments: "My Fragments",
    account_Balance_Wallet: "/img/account-balance-wallet-4@2x.png",
    wallet: "Wallet",
    vector2: "/img/vector-9@2x.png",
    settings: "Settings",
    userStatus2: "USER STATUS",
    totalStaked: "Total Staked",
    x45000Hxc: "45,000 $HXC",
    x368036Usd: "($3680.36 USD)",
    totalNftStaked: "Total NFT Staked",
    x30000Hxc: "30,000$HXC",
    x245357Usd: " ($2453.57USD)",
    totalHxcStaked: "Total $HXC Staked",
    x15000Hxc: "15,000$HXC",
    x122679Usd: "($1226.79 USD)",
    totalHxcEarned: "Total $HXC Earned",
    x5000Hxc: "5,000$HXC",
    x40893Usd: "($408.93 USD)",
    level2: "LEVEL 2",
    stakingAmount: "Staking Amount",
    x50000Hxc: "50,000$HXC",
    address: "1 Free Bronze Mystery Box Every 30 Days",
    address2: "1 Random Fragment",
    text45: "10% In-App Purchasing Discount",
    address3: "20 days to downgrade",
    search: "SEARCH...",
    search2: "/img/search-4@2x.png",
    profilePic: "/img/profile-pic-18@2x.png",
    surname: "Small Dash",
    referralHistory: "REFERRAL HISTORY",
    referralCode: "Referral Code",
    seeAll: "See All",
    arrow_Forward_Ios: "/img/arrow-forward-ios-4@2x.png",
    text44: "Refferral Purchasing Status",
    purchasing: "Purchasing",
    reward: "Reward",
    weekly: "Weekly",
    arrow_Forward_Ios2: "/img/arrow-forward-ios-14@2x.png",
    line80: "/img/line-80-3@1x.png",
    maskGroup: "/img/mask-group-6@2x.png",
    maskGroup2: "/img/mask-group-7@2x.png",
    maskGroup3: "/img/mask-group-8@2x.png",
    name: "Lucas Amaeta",
    lucasAmaetaInfoCo: "lucas.amaeta@info.com",
    lucasAmaeta: "Nil Matheu",
    lucasAmaetaInfoCo2: "nilmatheu789@info.com",
    lucasAmaeta2: "Anna Gristina",
    lucasAmaetaInfoCo3: "annagristina22@info.com",
    icon: "/img/icon-6@2x.png",
    price: "$289",
    x289: "$178",
    x2892: "$380",
    icon2: "/img/icon-6@2x.png",
    x2893: "$20",
    x2894: "$15",
    x2895: "$30",
    path2: "/img/path-31@2x.png",
    path3: "/img/path-32@2x.png",
    path4: "/img/path-36@2x.png",
    path5: "/img/path-37@2x.png",
    path6: "/img/path-38@2x.png",
    path7: "/img/path-30@2x.png",
    path8: "/img/path-31@2x.png",
    path9: "/img/path-32@2x.png",
    sep122019: "SEP 12, 2019",
    sep122020: "SEP 14, 2019",
    sep122021: "SEP 16, 2019",
    profitGraph: "PROFIT GRAPH",
    number: "5000",
    number2: "4000",
    number3: "3000",
    number4: "2000",
    number5: "1000",
    number6: "0",
    line79: "/img/line-74-3@1x.png",
    line74: "/img/line-74-3@1x.png",
    line75: "/img/line-74-3@1x.png",
    line78: "/img/line-74-3@1x.png",
    line76: "/img/line-74-3@1x.png",
    line77: "/img/line-74-3@1x.png",
    vector20: "/img/vector-20-6@1x.png",
    vector21: "/img/vector-21-6@1x.png",
    name2: "Jan",
    feb: "Feb",
    place: "Mar",
    apr: "Apr",
    name3: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
};

