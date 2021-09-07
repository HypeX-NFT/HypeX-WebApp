import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomeMerchandise from "./components/HomeMerchandise";
import Wallet from "./components/Wallet";
import ForgePage from "./components/ForgePage";
import HomeLimitedBox from "./components/HomeLimitedBox";
import MyStatus from "./components/MyStatus";
import MeltPage from "./components/MeltPage";
import Setting from "./components/Setting";
import MyInventory from "./components/MyInventory";
import DisplayNFTs from "./components/DisplayNFTs";
import MyBox from "./components/MyBox";
import ConnectedDecentraland from "./components/ConnectedDecentraland";
import StakeInfoPage from "./components/StakeInfoPage";
import MeltPage2 from "./components/MeltPage2";
import FragmentFactory from "./components/FragmentFactory";
import Loan from "./components/Loan";
import ProfileDropDown from "./components/ProfileDropDown";
import ProfileDropDown2 from "./components/ProfileDropDown2";
import ProfileDropDown3 from "./components/ProfileDropDown3";
import ProfileDropDown4 from "./components/ProfileDropDown4";
import ProfileDropDown5 from "./components/ProfileDropDown5";
import LoanSuccess from "./components/LoanSuccess";
import MyFragments from "./components/MyFragments";
import ProfileDropDown6 from "./components/ProfileDropDown6";
import Preview from "./components/Preview";
import StakeSuccess from "./components/StakeSuccess";
import Stake from "./components/Stake";
import MeltPage3 from "./components/MeltPage3";
import CoinlistForStake from "./components/CoinlistForStake";
import BoxPurchasing from "./components/BoxPurchasing";
import MerchandisePage from "./components/MerchandisePage";
import BoxPage from "./components/BoxPage";
import balances from './api/balances';
import AddPaymentMethod from "./components/AddPaymentMethod";

function App() {
    const [cards, setCards] = useState([])

    const [cardInUse, setCardInUse] = useState()
    const changeCard = (card) => {
        setCardInUse(card);
    }

    const pushCards = (card) => {
        setCards((old) => [...old, card])
    }

    const [balance, setBalance] = useState(0)

    useEffect(() => {
        fetchBalance();
      }, [])

    async function fetchBalance() {
        const balanceInfo = await balances.getBalances();
        const intermediate = balanceInfo['data']['data'];
        setBalance(parseFloat(intermediate['available'][0]['amount']))
    };

    const updateBalance = (amt) => {
        setBalance(old => old + amt);
    }

    const homeMerchandiseData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        bannerVersion21: "/img/banner-version-2-1@1x.png",
        bannerVersion41: "/img/banner-version-4-1@1x.png",
        limitedBox: "LIMITED BOX",
        merchandise: "MERCHANDISE",
        sortBy: "SORT BY",
        surname: "PRICE",
        categories: "CATEGORIES",
        place: "BRAND",
        rarity: "RARITY",
        text1: "SEARCH MERCHANDISE...",
        name: <>JORDAN 5 RETRO<br />RAGING BULL RED (2021)</>,
        wechat_Image_20210805201052Removebg: "/img/wechat-image-20210805201052-removebg-preview-1@2x.png",
        redeem: "REDEEM",
        number: "5",
        x16: "/img/----1-3@2x.png",
        name2: "JORDAN 1",
        image51: "/img/image-51@2x.png",
        redeem2: "REDEEM",
        number2: "5",
        x110: "/img/----1-3@2x.png",
        airYeezy2Octopus: "AIR YEEZY 2 OCTOPUS",
        image55: "/img/image-55@2x.png",
        redeem3: "REDEEM",
        number3: "5",
        x114: "/img/----1-3@2x.png",
        name3: "JORDAN 1 MID SE LAKES",
        wechat_Image_20210805201221Removebg: "/img/wechat-image-20210805201221-removebg-preview-2@2x.png",
        redeem4: "REDEEM",
        number4: "5",
        x15: "/img/----1-3@2x.png",
        name4: "JORDAN 5",
        image52: "/img/image-52@2x.png",
        redeem5: "REDEEM",
        number5: "5",
        x19: "/img/----1-3@2x.png",
        yeezy350: "YEEZY 350",
        image58: "/img/image-58@2x.png",
        redeem6: "REDEEM",
        number6: "5",
        x113: "/img/----1-3@2x.png",
        name5: <>JORDAN 6 RETRO <br />TRAVIS SCOTT</>,
        wechat_Image_20210805201403Removebg: "/img/wechat-image-20210805201403-removebg-preview-2@2x.png",
        redeem7: "REDEEM",
        number7: "5",
        x14: "/img/----1-3@2x.png",
        name6: "JORDAN 4 X UNION",
        image53: "/img/image-53@2x.png",
        redeem8: "REDEEM",
        number8: "5",
        x18: "/img/----1-3@2x.png",
        name7: <>JORDAN 1 RETRO HIGH<br />X DIOR</>,
        image59: "/img/image-59@2x.png",
        redeem9: "REDEEM",
        number9: "5",
        x112: "/img/----1-3@2x.png",
        name8: <>JORDAN 1 RETRO HIGH<br />TRAVIS SCOTT</>,
        wechat_Image_20210805201725Removebg: "/img/wechat-image-20210805201725-removebg-preview-2@2x.png",
        redeem10: "REDEEM",
        number10: "5",
        x13: "/img/----1-3@2x.png",
        yeezy500Stone: "YEEZY 500 STONE",
        image54: "/img/image-54@2x.png",
        redeem11: "REDEEM",
        number11: "5",
        x17: "/img/----1-3@2x.png",
        name9: "JORDAN 1 X OFFWHITE",
        image60: "/img/image-60@2x.png",
        redeem12: "REDEEM",
        number12: "5",
        x111: "/img/----1-3@2x.png",
    };

    const search2Data = {
        className: "search-1",
    };

    const arrowForwardIos23Data = {
        className: "arrowforwardios-3",
    };

    const walletData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
        myBoxes: "My Boxes",
        myInventory: "My Inventory",
        userStatus: "User Status",
        myFragments: "My Fragments",
        wallet: "Wallet",
        settings: "Settings",
        wallet2: "WALLET",
        totalAmount: "TOTAL AMOUNT",
        price: "USD",
        usdc: "USDC",
        withdrawFunds: "WITHDRAW FUNDS",
        addFunds: "ADD FUNDS",
        enterAmount: "0.00",
        addFunds2: "ADD FUNDS",
        search: "SEARCH...",
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
        xxxxXxxxXxxx3456: "XXXX XXXX XXXX 3456",
        mohsinJaved: "Mohsin Javed",
        debitCard: "Debit Card",
        text3: "01/24",
        validThru: <>Valid <br />Thru</>,
        seeAll: "See All",
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
        profilePic: "/img/profile-pic@2x.png",
        searchProps: search2Data,
        arrowForwardIos2Props: arrowForwardIos23Data,
        card: cardInUse,
        incrementBalance: updateBalance,
        balance: balance,
    };

    const arrowForwardIos24Data = {
        className: "arrowforwardios-4",
    };

    const arrowForwardIos25Data = {
        className: "arrowforwardios-5",
    };

    const forgePageData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        airJordanFragment: "Air Jordan Fragment",
        forgingFactory: "FORGING FACTORY",
        x12: "/img/----1-2@2x.png",
        lv32: "/img/lv3-2@2x.png",
        yeezy2: "/img/yeezy-2@2x.png",
        spanText: "60%",
        spanText2: " Success Rate",
        forge: "FORGE",
        spanText3: "Cost: ",
        spanText4: "40",
        spanText5: " $HXC",
        spanText6: "Cost: ",
        spanText7: "20",
        spanText8: " $HXC",
        insurance: "Insurance",
        text4: <>LV1 Stone Furnave <br />Tier 1</>,
        x30Hxc: "30 $HXC",
        spanText9: "80%",
        spanText10: " Durability",
        upgradeToLv2: "UPGRADE TO LV2",
        text5: "Upgrade to increase success rate!",
        arrowForwardIos2Props: arrowForwardIos24Data,
        arrowForwardIos22Props: arrowForwardIos25Data,
    };

    const search3Data = {
        className: "search-2",
    };

    const homeLimitedBoxData = {
        fragmentFactory: "FRAGMENT FACTORY",
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        bannerVersion21: "/img/banner-version-2-1@1x.png",
        bannerVersion41: "/img/banner-version-4-1@1x.png",
        limitedBox: "LIMITED BOX",
        merchandise: "MERCHANDISE",
        sortBy: "SORT BY",
        surname: "PRICE",
        categories: "CATEGORIES",
        place: "BRAND",
        rarity: "RARITY",
        searchBoxes: "SEARCH BOXES...",
        text6: "SUPREME X LOUIS VUITTON",
        offcl_Lv_Supreme7: "/img/offcl-lv-supreme-7@2x.png",
        unbox: "UNBOX",
        price: "$29.99",
        image46: "/img/image-46@2x.png",
        unbox2: "UNBOX",
        price2: "$29.99",
        chunkyDunk: "CHUNKY DUNK",
        image50: "/img/image-50@2x.png",
        unbox3: "UNBOX",
        price3: "$29.99",
        supremeValueBox: "SUPREME VALUE BOX",
        offcl_Box_Supreme_25: "/img/offcl-box-supreme-2-5@2x.png",
        unbox4: "UNBOX",
        price4: "$29.99",
        image47: "/img/image-47@2x.png",
        unbox5: "UNBOX",
        price5: "$29.99",
        text7: "SUPREME X THE NORTH FACE",
        image56: "/img/image-56@2x.png",
        unbox6: "UNBOX",
        price6: "$29.99",
        nikeLuxuryBox: "NIKE LUXURY BOX",
        offcl_Box_Nike_55: "/img/offcl-box-nike-5-5@2x.png",
        unbox7: "UNBOX",
        price7: "$29.99",
        image48: "/img/image-48@2x.png",
        unbox8: "UNBOX",
        price8: "$29.99",
        yeezyBox: "YEEZY BOX",
        image61: "/img/image-61@2x.png",
        unbox9: "UNBOX",
        price9: "$29.99",
        kawsBox: "KAWS BOX",
        offcl_Kaws5: "/img/offcl-kaws-5@2x.png",
        unbox10: "UNBOX",
        price10: "$29.99",
        image49: "/img/image-49@2x.png",
        unbox11: "UNBOX",
        price11: "$29.99",
        palaceBox: "PALACE BOX",
        image57: "/img/image-57@2x.png",
        unbox12: "UNBOX",
        price12: "$29.99",
        searchProps: search3Data,
    };

    const accountBalanceWallet2Data = {
        className: "accountbalancewallet-1",
    };

    const search4Data = {
        className: "search-3",
    };

    const arrowForwardIos26Data = {
        className: "arrowforwardios-6",
    };

    const arrowForwardIos27Data = {
        className: "arrowforwardios-7",
    };

    const icon2Data = {
        className: "icon-2",
    };

    const myStatusData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
        myBoxes: "My Boxes",
        myInventory: "My Inventory",
        userStatus: "User Status",
        myFragments: "My Fragments",
        wallet: "Wallet",
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
        text9: "10% In-App Purchasing Discount",
        address3: "20 days to downgrade",
        search: "SEARCH...",
        profilePic: "/img/profile-pic@2x.png",
        surname: "Small Dash",
        referralHistory: "REFERRAL HISTORY",
        referralCode: "Referral Code",
        seeAll: "See All",
        text8: "Refferral Purchasing Status",
        purchasing: "Purchasing",
        reward: "Reward",
        weekly: "Weekly",
        name: "Lucas Amaeta",
        lucasAmaetaInfoCo: "lucas.amaeta@info.com",
        lucasAmaeta: "Nil Matheu",
        lucasAmaetaInfoCo2: "nilmatheu789@info.com",
        lucasAmaeta2: "Anna Gristina",
        lucasAmaetaInfoCo3: "annagristina22@info.com",
        price: "$289",
        x289: "$178",
        x2892: "$380",
        x2893: "$20",
        x2894: "$15",
        x2895: "$30",
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
        accountBalanceWalletProps: accountBalanceWallet2Data,
        searchProps: search4Data,
        arrowForwardIos2Props: arrowForwardIos26Data,
        arrowForwardIos22Props: arrowForwardIos27Data,
        iconProps: icon2Data,
    };

    const arrowForwardIos28Data = {
        className: "arrowforwardios-8",
    };

    const arrowForwardIos29Data = {
        className: "arrowforwardios-9",
    };

    const group4612Data = {
        className: "group-461-2",
    };

    const meltPageData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        text11: "CHOOSE A ITEM TO MELT",
        text12: <>LV1 Stone Smelter <br />Tier 1</>,
        file_16010746003623: "/img/file-1601074600362-3@2x.png",
        file_16010748630162: "/img/file-1601074863016-2@2x.png",
        lvCardholder: "/img/lv-cardholder@2x.png",
        x30Hxc: "30 $HXC",
        spanText: "80%",
        spanText2: " Durability",
        upgradeToLv2: "UPGRADE TO LV2",
        text13: "Upgrade to increase success rate!",
        supremeJacket: "Supreme Jacket",
        spanText3: "Up to ",
        spanText4: "5",
        spanText5: " LV Fragments",
        spanText6: "60%",
        spanText7: " Success Rate",
        melt: "MELT",
        spanText8: "Cost: ",
        spanText9: "40",
        spanText10: " $HXC",
        arrowForwardIos2Props: arrowForwardIos28Data,
        arrowForwardIos22Props: arrowForwardIos29Data,
        group461Props: group4612Data,
    };

    const accountBalanceWallet3Data = {
        className: "accountbalancewallet-2",
    };

    const stateDefault2Data = {
        children: "SHIPPING INFO",
    };

    const stateDefault22Data = {
        children: "USER ID",
    };

    const stateDefault23Data = {
        children: "CONTACT #",
    };

    const stateDefault24Data = {
        children: "CONTACT @",
    };

    const stateDefault25Data = {
        children: "PASSWORD",
    };

    const stateDefault26Data = {
        children: "LANGUAGE",
    };

    const stateDefault27Data = {
        children: "NOTIFICATION",
    };

    const stateDefault28Data = {
        children: "THEME",
    };

    const addCardData = {
        cardNumber: 'CARD NUMBER',
        cvv: 'CVV',
        expiry: 'EXPIRY',
        name: 'FULL NAME',
        address: 'ADDRESS',
    }

    const settingData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
        myBoxes: "My Boxes",
        myInventory: "My Inventory",
        userStatus: "User Status",
        myFragments: "My Fragments",
        wallet: "Wallet",
        settings: "Settings",
        setting: "SETTING",
        enterAddress: "Enter Address",
        enterId: "Enter ID",
        enterPhoneNumber: "Enter Phone Number",
        enterEmail: "Enter Email",
        profilePic: "/img/profile-pic@2x.png",
        surname: "Small Dash",
        enterPassword: "Enter Password",
        selectLanguage: "Select Language",
        text14: "Select Notification Preference",
        selectThemeColor: "Select Theme Color",
        accountBalanceWalletProps: accountBalanceWallet3Data,
        stateDefault2Props: stateDefault2Data,
        stateDefault22Props: stateDefault22Data,
        stateDefault23Props: stateDefault23Data,
        stateDefault24Props: stateDefault24Data,
        stateDefault25Props: stateDefault25Data,
        stateDefault26Props: stateDefault26Data,
        stateDefault27Props: stateDefault27Data,
        stateDefault28Props: stateDefault28Data,
    };

    const frame24Data = {
        className: "frame-6",
    };

    const accountBalanceWallet4Data = {
        className: "accountbalancewallet-3",
    };

    const search5Data = {
        className: "search-4",
    };

    const arrowForwardIos210Data = {
        className: "arrowforwardios-10",
    };

    const arrowForwardIos211Data = {
        className: "arrowforwardios-11",
    };

    const arrowForwardIos212Data = {
        className: "arrowforwardios-12",
    };

    const arrowForwardIos213Data = {
        className: "arrowforwardios-13",
    };

    const amountData = {
        x289: "Shipped",
    };

    const group433Data = {
        lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
        lucasAmaetaInfoCo: "Size:9.5",
    };

    const icon23Data = {
        className: "icon-6",
    };

    const dateData = {
        icon2Props: icon23Data,
    };

    const icon24Data = {
        className: "icon-6",
    };

    const date2Data = {
        className: "date-10",
        icon2Props: icon24Data,
    };

    const icon25Data = {
        className: "icon-6",
    };

    const amount2Data = {
        x289: "Sold",
        className: "amount-7",
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
        file_16010748630162: "/img/file-1601074863016-2-1@2x.png",
        file_16010789496712: "/img/file-1601078949671-2@2x.png",
        amountProps: amountData,
        group433Props: group433Data,
        dateProps: dateData,
        date2Props: date2Data,
        icon2Props: icon25Data,
        amount2Props: amount2Data,
        group4332Props: group4332Data,
        group4333Props: group4333Data,
    };

    const myInventoryData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
        myBoxes: "My Boxes",
        myInventory: "My Inventory",
        userStatus: "User Status",
        myFragments: "My Fragments",
        wallet: "Wallet",
        settings: "Settings",
        myInventory2: "MY INVENTORY",
        myItems: "MY ITEMS",
        totalItems: "Total Items",
        number: "15",
        redeemedItems: "Redeemed Items",
        number2: "5",
        marketValue: "Market Value",
        price: "$19,263",
        totalStaked: "Total Staked",
        number3: "10",
        search: "SEARCH...",
        marketValue2: "MARKET VALUE",
        number4: "5000",
        number5: "4000",
        number6: "3000",
        number7: "2000",
        number8: "1000",
        number9: "0",
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
        itemDistribution: "ITEM DISTRIBUTION",
        lvApparel: "LV Apparel",
        airJordan: "Air Jordan",
        nike: "Nike",
        palace: "Palace",
        supreme: "Supreme",
        item: "ITEM",
        seeAll: "See All",
        itemImage: "Item Image",
        itemName: "Item Name",
        status: "Status",
        method: "Method",
        marketValue3: "Market Value",
        action: "Action",
        file_16010746003623: "/img/file-1601074600362-3-2@2x.png",
        lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
        lucasAmaetaInfoCo: "Size: 9.5",
        x289: "Shipped",
        x2892: "Mystery Box",
        x2893: "$7,000",
        x2894: "Melt",
        x2895: "Staking",
        x2896: "Fractions",
        x2897: "Stake",
        x2898: "$1,500",
        lucasAmaeta2: "TNF x Supreme Jacket",
        lucasAmaetaInfoCo2: "Size: M",
        lucasAmaetaInfoCo3: "Color: Red",
        file_16010748630163: "/img/file-1601074863016-3@2x.png",
        file_16010789496713: "/img/file-1601078949671-3@2x.png",
        lucasAmaeta3: "Travis Scott Dunk SB",
        lucasAmaetaInfoCo4: "Size: 9.5",
        x2899: "In Stock",
        x28910: "Mystery Box",
        x28911: "$3,000",
        x28912: "Loan",
        surname: "Small Dash",
        profilePic: "/img/profile-pic@2x.png",
        frame2Props: frame24Data,
        accountBalanceWalletProps: accountBalanceWallet4Data,
        searchProps: search5Data,
        arrowForwardIos2Props: arrowForwardIos210Data,
        arrowForwardIos22Props: arrowForwardIos211Data,
        arrowForwardIos23Props: arrowForwardIos212Data,
        arrowForwardIos24Props: arrowForwardIos213Data,
        merchandisesProps: merchandisesData,
    };

    const displayNFTsData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        text16: "CHOOSE YOUR NFTS DISPLAYING IN DECENTRALAND",
        image60: "/img/image-60-1@2x.png",
        file_16010789496713: "/img/file-1601078949671-3-1@2x.png",
        image59: "/img/image-59-1@2x.png",
        name: "TRAVIS SCOTT DUNK SB",
        text15: "CONNET TO DECENTRALAND",
    };

    const frame7Data = {
        className: "frame-4",
    };

    const accountBalanceWallet5Data = {
        className: "accountbalancewallet-4",
    };

    const search6Data = {
        className: "search-5",
    };

    const arrowForwardIos214Data = {
        className: "arrowforwardios-14",
    };

    const arrowForwardIos215Data = {
        className: "arrowforwardios-15",
    };

    const arrowForwardIos216Data = {
        className: "arrowforwardios-16",
    };

    const arrowForwardIos217Data = {
        className: "arrowforwardios-17",
    };

    const amount3Data = {
        x289: "Shipped",
    };

    const group4334Data = {
        lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
        lucasAmaetaInfoCo: "Size:9.5",
    };

    const icon27Data = {
        className: "icon-7",
    };

    const date3Data = {
        icon2Props: icon27Data,
    };

    const icon28Data = {
        className: "icon-7",
    };

    const date4Data = {
        className: "date-12",
        icon2Props: icon28Data,
    };

    const icon29Data = {
        className: "icon-7",
    };

    const amount4Data = {
        x289: "Sold",
        className: "amount-9",
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
        file_16010748630162: "/img/file-1601074863016-2-2@2x.png",
        file_16010789496712: "/img/file-1601078949671-2-1@2x.png",
        amountProps: amount3Data,
        group433Props: group4334Data,
        dateProps: date3Data,
        date2Props: date4Data,
        icon2Props: icon29Data,
        amount2Props: amount4Data,
        group4332Props: group4335Data,
        group4333Props: group4336Data,
    };

    const myBoxData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-9@2x.png",
        myBoxes: "My Boxes",
        myInventory: "My Inventory",
        userStatus: "User Status",
        myFragments: "My Fragments",
        wallet: "Wallet",
        settings: "Settings",
        myMysteryBoxes: "MY MYSTERY BOXES",
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
        marketValue2: "MARKET VALUE",
        number4: "5000",
        number5: "4000",
        number6: "3000",
        number7: "2000",
        number8: "1000",
        number9: "0",
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
        itemDistribution: "ITEM DISTRIBUTION",
        lvApparel: "LV Apparel",
        airJordan: "Air Jordan",
        nike: "Nike",
        palace: "Palace",
        supreme: "Supreme",
        item: "ITEM",
        seeAll: "See All",
        itemImage: "Item Image",
        itemName: "Item Name",
        status: "Status",
        merchandise: "Merchandise",
        cost: "Cost",
        action: "Action",
        offcl_Lv_Supreme3: "/img/offcl-lv-supreme-3@2x.png",
        lucasAmaeta: "Supreme x LV Box",
        x289: "Opened",
        x2892: <>Supreme x LV<br />Wallet</>,
        x2893: "$99",
        x2894: "Stake",
        x2895: "Staking",
        text18: "-",
        x2896: "Stake",
        x2897: "$39",
        lucasAmaeta2: "Supreme Value Box",
        lucasAmaeta3: "Kaws Box",
        x2898: "In Stock",
        text17: "-",
        x2899: "$59",
        x28910: "Loan",
        offcl_Box_Supreme_22: "/img/offcl-box-supreme-2-2@2x.png",
        image48: "/img/image-48-1@2x.png",
        surname: "Small Dash",
        profilePic: "/img/profile-pic@2x.png",
        frameProps: frame7Data,
        accountBalanceWalletProps: accountBalanceWallet5Data,
        searchProps: search6Data,
        arrowForwardIos2Props: arrowForwardIos214Data,
        arrowForwardIos22Props: arrowForwardIos215Data,
        arrowForwardIos23Props: arrowForwardIos216Data,
        arrowForwardIos24Props: arrowForwardIos217Data,
        merchandisesProps: merchandises2Data,
    };

    const stakeInfoPageData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        text20: "WHAT IS HYPEX STAKE?",
        text21: <>Users can stake (deposit) Mystery Boxes, merchandise (NFTs), and fragments on HypeX. When users stake their NFTs on HypeX, our system will use Chainlink Price Feed to collect live market price from other platforms such as StockX to calculate an estimated value for the responding item. The yield will be generated based on the value of the staked NFT. Users can withdraw NFTs along with yield  after the minimal staking period, which is 7 days. If users would like to withdraw within 7 days, fees will be applied to early exits.<br />Users will gain more benefits with greater staking amounts. Such benefits include complimentary mystery boxes and fragments. Greater staking amount will be rewarded with more valuable mystery boxes and higher probabilities to draw rare fragments.</>,
        stakeNow: "STAKE NOW",
        image59: "/img/image-59-2@2x.png",
        file_16010746003624: "/img/file-1601074600362-4@2x.png",
        file_16010789496713: "/img/file-1601078949671-3-2@1x.png",
    };

    const arrowForwardIos218Data = {
        className: "arrowforwardios-18",
    };

    const arrowForwardIos219Data = {
        className: "arrowforwardios-19",
    };

    const group4613Data = {
        className: "group-461-3",
    };

    const meltPage2Data = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        text23: "CHOOSE A ITEM TO MELT",
        lvCardholder: "/img/lv-cardholder@2x.png",
        file_16010746003623: "/img/file-1601074600362-3-4@2x.png",
        file_16010748630162: "/img/file-1601074863016-2-3@2x.png",
        name: "Jordan 1 x offwhite",
        spanText: "Up to ",
        spanText2: "5",
        spanText3: " LV Fragments",
        spanText4: "60%",
        spanText5: " Success Rate",
        melt: "MELT",
        spanText6: "Cost: ",
        spanText7: "40",
        spanText8: " $HXC",
        text24: <>LV1 Stone Smelter <br />Tier 1</>,
        x30Hxc: "30 $HXC",
        spanText9: "80%",
        spanText10: " Durability",
        upgradeToLv2: "UPGRADE TO LV2",
        text25: "Upgrade to increase success rate!",
        arrowForwardIos2Props: arrowForwardIos218Data,
        arrowForwardIos22Props: arrowForwardIos219Data,
        group461Props: group4613Data,
    };

    const stateActiveData = {
        text30: "INSURANCE",
    };

    const fragmentFactoryData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        fragmentFactory2: "FRAGMENT FACTORY",
        yeezy3: "/img/yeezy-3@2x.png",
        lv32: "/img/lv3-2-1@1x.png",
        fragmentQuantity: "FRAGMENT QUANTITY",
        number: "1",
        text27: "-",
        text29: "+",
        x13: "/img/----1-3-1@2x.png",
        spanText: "add to max: ",
        spanText2: "20",
        spanText3: "Cost: ",
        spanText4: "20",
        spanText5: " USDC",
        compose: "COMPOSE",
        spanText6: "Cost: ",
        spanText7: "10",
        spanText8: " USDC",
        spanText9: "50%",
        spanText10: " Success Rate",
        center1: "/img/center-1@2x.png",
        lv31: "/img/lv3-1@2x.png",
        expectedQuantity: "EXPECTED QUANTITY",
        number2: "1",
        text26: "-",
        text28: "+",
        stateActiveProps: stateActiveData,
    };

    const loanData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        text35: "CHOOSE A MERCHANDISE TO LOAN",
        yourLoan: "YOUR LOAN",
        image60: "/img/image-60-1@2x.png",
        file_16010789496713: "/img/file-1601078949671-3-1@2x.png",
        image59: "/img/image-59-1@2x.png",
        placeholder: "Placeholder",
        percent: "100%",
        totalLoanDebt: "Total Loan Debt",
        price: "$6,520",
        name: "TRAVIS SCOTT DUNK SB",
        number: "1",
        text33: "-",
        text34: "+",
        quantity: "QUANTITY",
        text31: "ESTIMATED LOAN AMOUNT",
        price2: "$2,000",
        spanText: "in",
        spanText2: " ",
        spanText3: "USDC",
        text32: "INTEREST RATE: 0.002%",
        loan2: "LOAN",
    };

    const close2Data = {
        className: "close-1",
    };

    const loanSuccessData = {
        congratulations: "Congratulations!",
        youDeposited: "You Deposited",
        open: "OPEN",
        file_16010789496715: "/img/file-1601078949671-5@2x.png",
        spanText: "You Got: ",
        spanText2: "$2,000",
        spanText3: " In your Wallet",
        image142: "/img/image--14--2@2x.png",
        image162: "/img/image--16--2@2x.png",
        closeProps: close2Data,
    };

    const frame36Data = {
        className: "frame-10",
    };

    const accountBalanceWallet6Data = {
        className: "accountbalancewallet-5",
    };

    const search7Data = {
        className: "search-6",
    };

    const arrowForwardIos220Data = {
        className: "arrowforwardios-20",
    };

    const arrowForwardIos221Data = {
        className: "arrowforwardios-21",
    };

    const arrowForwardIos222Data = {
        className: "arrowforwardios-22",
    };

    const arrowForwardIos223Data = {
        className: "arrowforwardios-23",
    };

    const amount5Data = {
        x289: "Shipped",
    };

    const group4337Data = {
        lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
        lucasAmaetaInfoCo: "Size:9.5",
    };

    const icon211Data = {
        className: "icon-8",
    };

    const date5Data = {
        icon2Props: icon211Data,
    };

    const icon212Data = {
        className: "icon-8",
    };

    const date6Data = {
        className: "date-14",
        icon2Props: icon212Data,
    };

    const icon213Data = {
        className: "icon-8",
    };

    const amount6Data = {
        x289: "Sold",
        className: "amount-11",
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
        file_16010748630162: "/img/file-1601074863016-2-2@2x.png",
        file_16010789496712: "/img/file-1601078949671-2-1@2x.png",
        amountProps: amount5Data,
        group433Props: group4337Data,
        dateProps: date5Data,
        date2Props: date6Data,
        icon2Props: icon213Data,
        amount2Props: amount6Data,
        group4332Props: group4338Data,
        group4333Props: group4339Data,
    };

    const myFragmentsData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-9@2x.png",
        myBoxes: "My Boxes",
        myInventory: "My Inventory",
        userStatus: "User Status",
        myFragments: "My Fragments",
        wallet: "Wallet",
        settings: "Settings",
        myMysteryBoxes: "MY MYSTERY BOXES",
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
        marketValue2: "MARKET VALUE",
        number4: "5000",
        number5: "4000",
        number6: "3000",
        number7: "2000",
        number8: "1000",
        number9: "0",
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
        itemDistribution: "ITEM DISTRIBUTION",
        lvApparel: "LV Apparel",
        airJordan: "Air Jordan",
        nike: "Nike",
        palace: "Palace",
        supreme: "Supreme",
        item: "ITEM",
        seeAll: "See All",
        itemImage: "Item Image",
        itemName: "Item Name",
        quantity: "Quantity",
        stakedLoan: "Staked/Loan",
        cost: "Cost",
        action: "Action",
        lucasAmaeta: "Air Jordan Fragment",
        x289: "30",
        x2892: "20/30",
        x2893: "$99",
        x2894: "Forge",
        x2895: "20",
        x2896: "20/20",
        x2897: "Stake",
        x2898: "$39",
        lucasAmaeta2: "LV Fragment",
        lucasAmaeta3: "Supreme Fragment",
        x2899: "15",
        x28910: "15/15",
        x28911: "$59",
        x28912: "Loan",
        x12: "/img/----1-2-1@2x.png",
        lv31: "/img/lv3-1-1@2x.png",
        supreme1: "/img/supreme-1@2x.png",
        surname: "Small Dash",
        profilePic: "/img/profile-pic@2x.png",
        frame3Props: frame36Data,
        accountBalanceWalletProps: accountBalanceWallet6Data,
        searchProps: search7Data,
        arrowForwardIos2Props: arrowForwardIos220Data,
        arrowForwardIos22Props: arrowForwardIos221Data,
        arrowForwardIos23Props: arrowForwardIos222Data,
        arrowForwardIos24Props: arrowForwardIos223Data,
        merchandisesProps: merchandises3Data,
    };

    const close3Data = {
        className: "close-2",
    };

    const stakeSuccessData = {
        text55: <>Congratulations!<br />You Staked</>,
        open: "OPEN",
        file_16010789496714: "/img/file-1601078949671-5@2x.png",
        spanText: <>$3,000<br />Stake Period: </>,
        spanText2: "7",
        spanText3: <> Days<br />APY: </>,
        spanText4: "56",
        spanText5: "%",
        image141: "/img/image--14--2@2x.png",
        image161: "/img/image--16--2@2x.png",
        closeProps: close3Data,
    };

    const stakeData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        text57: "CHOOSE A MERCHANDISE TO STAKE",
        image60: "/img/image-60-1@2x.png",
        file_16010789496713: "/img/file-1601078949671-3-1@2x.png",
        image59: "/img/image-59-1@2x.png",
        name: "TRAVIS SCOTT DUNK SB",
        number: "1",
        text62: "-",
        text63: "+",
        quantity: "QUANTITY",
        text58: "ESTIMATED STAKE VALUE",
        price: "$3,000",
        spanText: "Pairs:",
        spanText2: " UST - HXC",
        text61: "MINIMAL STAKE PERIOD: 7 DAYS",
        stake2: "STAKE",
        yourStake: "YOUR STAKE",
        text59: "Total Value You Staked",
        price2: "$36,520",
        viewFullStatus: "View Full Status",
        x13480ToTier3: "$13,480 to Tier 3",
        totalPool: "TOTAL POOL",
        estimatedApy: "Estimated APY",
        percent: "56%",
        text60: "Cumulative total pool amount (USD)",
        price3: "$5,000,065",
    };

    const group4614Data = {
        className: "group-461-4",
    };

    const meltPage3Data = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        text65: "CHOOSE A ITEM TO MELT",
        text66: <>LV1 Stone Smelter <br />Tier 1</>,
        file_16010748630162: "/img/file-1601074863016-2-3@2x.png",
        lvCardholder: "/img/lv-cardholder-2@2x.png",
        file_16010746003623: "/img/file-1601074600362-3@2x.png",
        x30Hxc: "30 $HXC",
        spanText: "80%",
        spanText2: " Durability",
        upgradeToLv2: "UPGRADE TO LV2",
        text67: "Upgrade to increase success rate!",
        supremeCardholder: "Supreme Cardholder",
        spanText3: "Up to ",
        spanText4: "5",
        spanText5: " LV Fragments",
        spanText6: "60%",
        spanText7: " Success Rate",
        melt: "MELT",
        spanText8: "Cost: ",
        spanText9: "40",
        spanText10: " $HXC",
        group461Props: group4614Data,
    };

    const close4Data = {
        className: "close-3",
    };

    const boxPurchasingData = {
        closeProps: close4Data,
    };

    const merchandisePageData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        profilePic: "/img/profile-pic@2x.png",
        image63: "/img/image-63-2@2x.png",
        x: "X",
        image62: "/img/image-62@2x.png",
        text71: "MARKET PRICE: $1,650",
        lvCardholder: "/img/lv-cardholder-3@2x.png",
        name: "LOUIS VUITTON X SUPREME CARD HOLDER",
        text70: "Crafted from Louis Vuitton's iconic Monogram canvas, the Card Holder is a smart, simple accessory that is ideal for active lifestyles. Notable for its slim design, it contains three card slots: a large one in the center and two on either side. Its grained-leather lining adds a touch of refinement.",
        youHave: "YOU HAVE",
        lvCardholder2: "/img/lv-cardholder-4@2x.png",
        spanText: "lv x supreme card holder ",
        spanText2: "x1",
        lvFragment: "/img/lv-fragment@2x.png",
        spanText3: "lv fragments ",
        spanText4: "x10",
        melt: "MELT",
        forge: "FORGE",
        text72: "Up to 5 LV Fragments",
        with5LvFragments: "With 5 LV Fragments",
    };

    const shoppingBag13Data = {
        className: "shoppingbag-12",
    };

    const boxPageData = {
        offcl_Box_Supreme_21: "/img/offcl-box-supreme-2-1-1@1x.png",
        profilePic: "/img/profile-pic@2x.png",
        offcl_Box_Supreme_22: "/img/offcl-box-supreme-2-2-1@1x.png",
        bandana: "/img/bandana@2x.png",
        lvXSupremeBadana: "LV X SUPREME BADANA",
        text76: "TNF X SUPREME HOODIE",
        tnfHoodie: "/img/tnf-hoodie@2x.png",
        boxLogo: "/img/box-logo@2x.png",
        text77: "SUPREME BOX LOGO HOODIE",
        loan: "LOAN",
        displayNfts: "DISPLAY NFTS",
        place: "PURCHASE",
        itemsInTheBox: "ITEMS IN THE BOX",
        text74: "LV X SUPREME CARD HOLDER",
        lvCardholder: "/img/lv-cardholder-5@2x.png",
        text75: "TNF X SUPREME JACKET",
        tnfJacket: "/img/tnf-jacket@2x.png",
        text82: <>This Box contains some dope Supreme shit. <br />And some awesome Fragments.</>,
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
        fragmentFactory: "FRAGMENT FACTORY",
        stake: "STAKE",
        image62: "/img/image-62-1@1x.png",
        image71: "/img/image--7--1-1@2x.png",
        price: "$2,399",
        price2: "$1,399",
        price3: "$899",
        price4: "$1,569",
        price5: "$6,399",
        spanText: "Probability: ",
        spanText2: "0.12%",
        spanText3: "Probability: ",
        spanText4: "1%",
        spanText5: "Probability: ",
        spanText6: "0.89%",
        spanText7: "Probability: ",
        spanText8: "1.39%",
        spanText9: "Probability: ",
        spanText10: "0.19%",
        text78: <>SUPREME X TNF<br />DUFFLE BAG</>,
        image69: "/img/image-69-1@2x.png",
        price6: "$420",
        spanText11: "Probability: ",
        spanText12: "4.51%",
        text79: <>SUPREME BANDANA<br />BOX LOGO</>,
        text80: <>SUPREME NIKE<br />STRIP HOODIE</>,
        text81: "SUPREME S LOGO HODDIE",
        supremeBackpack: "SUPREME BACKPACK",
        image65: "/img/image-65-2@2x.png",
        image66: "/img/image-66-1@2x.png",
        image67: "/img/image-67-1@2x.png",
        image68: "/img/image-68-1@2x.png",
        price7: "$891",
        price8: "$586",
        price9: "$463",
        price10: "$456",
        spanText13: "Probability: ",
        spanText14: "0.91%",
        spanText15: "Probability: ",
        spanText16: "2.42%",
        spanText17: "Probability: ",
        spanText18: "3.15%",
        spanText19: "Probability: ",
        spanText20: "4.19%",
        shoppingBagProps: shoppingBag13Data,
        text69:
            <>
              Congratulations!!!
              <br />
              You got
            </>
          ,
        open: "OPEN",
        closeProps: close4Data,
        balance: balance,
        updateBalance: updateBalance,
        };

    const profileDropDownData = {
        profilePic: "/img/profile-pic-14@2x.png",
        surname: "Small Dash",
        text37: "View and Edit Profile",
        hxc: "$HXC",
        text38: "8882.06",
        place: "DEPOSIT",
        usd: "$USD",
        phone: "3023.6",
        withdraw: "WITHDRAW",
        boxIcon: "/img/box-icon@2x.png",
        myMysteryBoxes: "My Mystery Boxes",
        sneakerIcon: "/img/sneaker-icon@2x.png",
        text36: "My Merchandise Inventory",
        puzzleIcon: "/img/puzzle-icon@2x.png",
        myFragments: "My Fragments",
        affiliatesIcon: "/img/affiliates-icon@2x.png",
        myStatus: "My Status",
        walletIcon: "/img/wallet-icon@2x.png",
        myWallets: "My Wallets",
        settingIcon: "/img/setting-icon@2x.png",
        mySetting: "My Setting",
    };

    const profileDropDown2Data = {
        profilePic: "/img/profile-pic-14@2x.png",
        surname: "Small Dash",
        text40: "View and Edit Profile",
        hxc: "$HXC",
        text41: "8882.06",
        place: "DEPOSIT",
        usd: "$USD",
        phone: "3023.6",
        withdraw: "WITHDRAW",
        boxIcon: "/img/box-icon@2x.png",
        myMysteryBoxes: "My Mystery Boxes",
        sneakerIcon: "/img/sneaker-icon@2x.png",
        text39: "My Merchandise Inventory",
        puzzleIcon: "/img/puzzle-icon@2x.png",
        myFragments: "My Fragments",
        affiliatesIcon: "/img/affiliates-icon@2x.png",
        myStatus: "My Status",
        walletIcon: "/img/wallet-icon-1@2x.png",
        myWallets: "My Wallets",
        settingIcon: "/img/setting-icon-1@2x.png",
        mySetting: "My Setting",
    };

    const profileDropDown3Data = {
        profilePic: "/img/profile-pic-14@2x.png",
        surname: "Small Dash",
        text43: "View and Edit Profile",
        hxc: "$HXC",
        text44: "8882.06",
        place: "DEPOSIT",
        usd: "$USD",
        phone: "3023.6",
        withdraw: "WITHDRAW",
        boxIcon: "/img/box-icon@2x.png",
        myMysteryBoxes: "My Mystery Boxes",
        sneakerIcon: "/img/sneaker-icon@2x.png",
        text42: "My Merchandise Inventory",
        puzzleIcon: "/img/puzzle-icon@2x.png",
        myFragments: "My Fragments",
        affiliatesIcon: "/img/affiliates-icon@2x.png",
        myStatus: "My Status",
        walletIcon: "/img/wallet-icon-2@2x.png",
        myWallets: "My Wallets",
        settingIcon: "/img/setting-icon@2x.png",
        mySetting: "My Setting",
    };

    const profileDropDown4Data = {
        profilePic: "/img/profile-pic-14@2x.png",
        surname: "Small Dash",
        text46: "View and Edit Profile",
        hxc: "$HXC",
        text47: "8882.06",
        place: "DEPOSIT",
        usd: "$USD",
        phone: "3023.6",
        withdraw: "WITHDRAW",
        boxIcon: "/img/box-icon@2x.png",
        myMysteryBoxes: "My Mystery Boxes",
        sneakerIcon: "/img/sneaker-icon@2x.png",
        text45: "My Merchandise Inventory",
        puzzleIcon: "/img/puzzle-icon-3@2x.png",
        myFragments: "My Fragments",
        affiliatesIcon: "/img/affiliates-icon@2x.png",
        myStatus: "My Status",
        walletIcon: "/img/wallet-icon-1@2x.png",
        myWallets: "My Wallets",
        settingIcon: "/img/setting-icon@2x.png",
        mySetting: "My Setting",
    };

    const profileDropDown5Data = {
        profilePic: "/img/profile-pic-14@2x.png",
        surname: "Small Dash",
        text49: "View and Edit Profile",
        hxc: "$HXC",
        text50: "8882.06",
        place: "DEPOSIT",
        usd: "$USD",
        phone: "3023.6",
        withdraw: "WITHDRAW",
        boxIcon: "/img/box-icon-4@2x.png",
        myMysteryBoxes: "My Mystery Boxes",
        sneakerIcon: "/img/sneaker-icon-4@2x.png",
        text48: "My Merchandise Inventory",
        puzzleIcon: "/img/puzzle-icon@2x.png",
        myFragments: "My Fragments",
        affiliatesIcon: "/img/affiliates-icon@2x.png",
        myStatus: "My Status",
        walletIcon: "/img/wallet-icon-4@2x.png",
        myWallets: "My Wallets",
        settingIcon: "/img/setting-icon@2x.png",
        mySetting: "My Setting",
    };

    const profileDropDown6Data = {
        profilePic: "/img/profile-pic-14@2x.png",
        surname: "Small Dash",
        text53: "View and Edit Profile",
        hxc: "$HXC",
        text54: "8882.06",
        place: "DEPOSIT",
        usd: "$USD",
        phone: "3023.6",
        withdraw: "WITHDRAW",
        boxIcon: "/img/box-icon-5@2x.png",
        myMysteryBoxes: "My Mystery Boxes",
        sneakerIcon: "/img/sneaker-icon@2x.png",
        text52: "My Merchandise Inventory",
        puzzleIcon: "/img/puzzle-icon@2x.png",
        myFragments: "My Fragments",
        affiliatesIcon: "/img/affiliates-icon@2x.png",
        myStatus: "My Status",
        walletIcon: "/img/wallet-icon-1@2x.png",
        myWallets: "My Wallets",
        settingIcon: "/img/setting-icon@2x.png",
        mySetting: "My Setting",
    };

    const coinlistForStakeData = {
        terraUstUsdHxc: "Terra UST(USD)/HXC",
        percent: "56%",
        pairs: "Pairs",
        apy: "APY",
        maticHxc: "MATIC - HXC",
        percent2: "78%",
        nearHxc: "NEAR - HXC",
        percent3: "102%",
        xdbHxc: "XDB - HXC",
        percent4: "132%",
        solHxc: "SOL - HXC",
        percent5: "138%",
        text68: "HXC - Terra UST(USD)",
        percent6: "856%",
        hxcMatic: "HXC - MATIC",
        percent7: "1236%",
        hxcNear: "HXC - NEAR",
        percent8: "1456%",
        hxcXbd: "HXC - XBD",
        percent9: "1563%",
        hxcSol: "HXC - SOL",
        percent10: "1583%",
        image63: "/img/image-63@2x.png",
        hype_X_Logo_EditedRemovebg_Smaller_: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
        hype_X_Logo_EditedRemovebg_Smaller_2: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
        hype_X_Logo_EditedRemovebg_Smaller_3: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
        hype_X_Logo_EditedRemovebg_Smaller_4: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
        hype_X_Logo_EditedRemovebg_Smaller_5: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
        hype_X_Logo_EditedRemovebg_Smaller_6: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
        hype_X_Logo_EditedRemovebg_Smaller_7: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
        hype_X_Logo_EditedRemovebg_Smaller_8: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
        image65: "/img/image-65@2x.png",
        hype_X_Logo_EditedRemovebg_Smaller_9: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
        hype_X_Logo_EditedRemovebg_Smaller_10: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
        image64: "/img/image-64@2x.png",
        image652: "/img/image-65@2x.png",
        image66: "/img/image-66@2x.png",
        image67: "/img/image-67@2x.png",
        image632: "/img/image-63@2x.png",
        image642: "/img/image-64@2x.png",
        image68: "/img/image-66@2x.png",
        image69: "/img/image-67@2x.png",
    };

    const addPaymentMethodData = {
        hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
        myBoxes: "My Boxes",
        myInventory: "My Inventory",
        userStatus: "User Status",
        addCard: "Add Card",
        wallet: "Wallet",
        manageCards: "Cards",
        titleAddCard: "ADD PAYMENT METHOD",
        titlePickCard: "PICK PAYMENT METHOD",
        enterAddress: "Enter Address",
        enterId: "Enter ID",
        enterPhoneNumber: "Enter Phone Number",
        enterEmail: "Enter Email",
        profilePic: "/img/profile-pic@2x.png",
        surname: "Small Dash",
        cardNumber: "Card Number",
        selectLanguage: "Select Language",
        text14: "Select Notification Preference",
        selectThemeColor: "Select Theme Color",
        accountBalanceWalletProps: accountBalanceWallet3Data,
        stateDefault2Props: stateDefault2Data,
        stateDefault22Props: stateDefault22Data,
        stateDefault23Props: stateDefault23Data,
        stateDefault24Props: stateDefault24Data,
        stateDefault25Props: stateDefault25Data,
        stateDefault26Props: stateDefault26Data,
        stateDefault27Props: stateDefault27Data,
        stateDefault28Props: stateDefault28Data,
        addCardDataProps: addCardData,
        expiryDate: "01/2023",
        cvv: '123',
        cardHolderName: 'Card Holder Name',
        email: 'Email',
        selectCard: 'Select Card',
        submit: 'Add Card',
        saveCardSelection: 'Save',
        storedCards: cards,
        pushStoredCards: pushCards,
        pickCard: 'Pick Card',
        changeCardFunc: changeCard,
    };

  return (
    <Router>
      <Switch>
        <Route path="/home-merchandise">
          <HomeMerchandise {...homeMerchandiseData} />
        </Route>
        <Route path="/wallet">
          <Wallet {...walletData} />
        </Route>
        <Route path="/forge-page">
          <ForgePage {...forgePageData} />
        </Route>
        <Route path="/:path(|home-limited-box)">
          <HomeLimitedBox {...homeLimitedBoxData} />
        </Route>
        <Route path="/my-status">
          <MyStatus {...myStatusData} />
        </Route>
        <Route path="/melt-page-2">
          <MeltPage {...meltPageData} />
        </Route>
        <Route path="/setting">
          <Setting {...settingData} />
        </Route>
        <Route path="/my-inventory">
          <MyInventory {...myInventoryData} />
        </Route>
        <Route path="/display-nfts">
          <DisplayNFTs {...displayNFTsData} />
        </Route>
        <Route path="/my-box">
          <MyBox {...myBoxData} />
        </Route>
        <Route path="/connected-decentraland">
          <ConnectedDecentraland
            congratulations="Congratulations!"
            text19="You Connected to Decentraland!"
            image32="/img/image-32@2x.png"
            open="OPEN"
          />
        </Route>
        <Route path="/stake-info-page">
          <StakeInfoPage {...stakeInfoPageData} />
        </Route>
        <Route path="/melt-page">
          <MeltPage2 {...meltPage2Data} />
        </Route>
        <Route path="/fragment-factory">
          <FragmentFactory {...fragmentFactoryData} />
        </Route>
        <Route path="/loan">
          <Loan {...loanData} />
        </Route>
        <Route path="/profile-dropdown-5">
          <ProfileDropDown {...profileDropDownData} />
        </Route>
        <Route path="/profile-dropdown">
          <ProfileDropDown2 {...profileDropDown2Data} />
        </Route>
        <Route path="/profile-dropdown2">
          <ProfileDropDown3 {...profileDropDown3Data} />
        </Route>
        <Route path="/profile-dropdown3">
          <ProfileDropDown4 {...profileDropDown4Data} />
        </Route>
        <Route path="/profile-dropdown4">
          <ProfileDropDown5 {...profileDropDown5Data} />
        </Route>
        <Route path="/loan-success">
          <LoanSuccess {...loanSuccessData} />
        </Route>
        <Route path="/my-fragments">
          <MyFragments {...myFragmentsData} />
        </Route>
        <Route path="/profile-dropdown5">
          <ProfileDropDown6 {...profileDropDown6Data} />
        </Route>
        <Route path="/preview">
          <Preview
            file_16010748630161="/img/file-1601074863016-1@2x.png"
            file_16010758285291="/img/file-1601075828529-1@2x.png"
            file_16010766079571="/img/file-1601076607957-1@2x.png"
          />
        </Route>
        <Route path="/stake-success">
          <StakeSuccess {...stakeSuccessData} />
        </Route>
        <Route path="/stake">
          <Stake {...stakeData} />
        </Route>
        <Route path="/melt-page2">
          <MeltPage3 {...meltPage3Data} />
        </Route>
        <Route path="/coinlist-for-stake">
          <CoinlistForStake {...coinlistForStakeData} />
        </Route>
        <Route path="/box-purchasing">
          <BoxPurchasing
            text69={
              <>
                Congratulations!!!
                <br />
                You got
              </>
            }
            image62="/img/image--6--2@2x.png"
            image71="/img/image--7--1@2x.png"
            offcl_Box_Supreme_21="/img/offcl-box-supreme-2-1@2x.png"
            open="OPEN"
            closeProps={boxPurchasingData.closeProps}
          />
        </Route>
        <Route path="/merchandise-page">
          <MerchandisePage {...merchandisePageData} />
        </Route>
        <Route path="/box-page">
          <BoxPage {...boxPageData} />
        </Route>
        <Route path="/add-payment-method">
            <AddPaymentMethod {...addPaymentMethodData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const homeMerchandiseData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    bannerVersion21: "/img/banner-version-2-1@1x.png",
    bannerVersion41: "/img/banner-version-4-1@1x.png",
    limitedBox: "LIMITED BOX",
    merchandise: "MERCHANDISE",
    sortBy: "SORT BY",
    surname: "PRICE",
    categories: "CATEGORIES",
    place: "BRAND",
    rarity: "RARITY",
    text1: "SEARCH MERCHANDISE...",
    name: <>JORDAN 5 RETRO<br />RAGING BULL RED (2021)</>,
    wechat_Image_20210805201052Removebg: "/img/wechat-image-20210805201052-removebg-preview-1@2x.png",
    redeem: "REDEEM",
    number: "5",
    x16: "/img/----1-3@2x.png",
    name2: "JORDAN 1",
    image51: "/img/image-51@2x.png",
    redeem2: "REDEEM",
    number2: "5",
    x110: "/img/----1-3@2x.png",
    airYeezy2Octopus: "AIR YEEZY 2 OCTOPUS",
    image55: "/img/image-55@2x.png",
    redeem3: "REDEEM",
    number3: "5",
    x114: "/img/----1-3@2x.png",
    name3: "JORDAN 1 MID SE LAKES",
    wechat_Image_20210805201221Removebg: "/img/wechat-image-20210805201221-removebg-preview-2@2x.png",
    redeem4: "REDEEM",
    number4: "5",
    x15: "/img/----1-3@2x.png",
    name4: "JORDAN 5",
    image52: "/img/image-52@2x.png",
    redeem5: "REDEEM",
    number5: "5",
    x19: "/img/----1-3@2x.png",
    yeezy350: "YEEZY 350",
    image58: "/img/image-58@2x.png",
    redeem6: "REDEEM",
    number6: "5",
    x113: "/img/----1-3@2x.png",
    name5: <>JORDAN 6 RETRO <br />TRAVIS SCOTT</>,
    wechat_Image_20210805201403Removebg: "/img/wechat-image-20210805201403-removebg-preview-2@2x.png",
    redeem7: "REDEEM",
    number7: "5",
    x14: "/img/----1-3@2x.png",
    name6: "JORDAN 4 X UNION",
    image53: "/img/image-53@2x.png",
    redeem8: "REDEEM",
    number8: "5",
    x18: "/img/----1-3@2x.png",
    name7: <>JORDAN 1 RETRO HIGH<br />X DIOR</>,
    image59: "/img/image-59@2x.png",
    redeem9: "REDEEM",
    number9: "5",
    x112: "/img/----1-3@2x.png",
    name8: <>JORDAN 1 RETRO HIGH<br />TRAVIS SCOTT</>,
    wechat_Image_20210805201725Removebg: "/img/wechat-image-20210805201725-removebg-preview-2@2x.png",
    redeem10: "REDEEM",
    number10: "5",
    x13: "/img/----1-3@2x.png",
    yeezy500Stone: "YEEZY 500 STONE",
    image54: "/img/image-54@2x.png",
    redeem11: "REDEEM",
    number11: "5",
    x17: "/img/----1-3@2x.png",
    name9: "JORDAN 1 X OFFWHITE",
    image60: "/img/image-60@2x.png",
    redeem12: "REDEEM",
    number12: "5",
    x111: "/img/----1-3@2x.png",
};

const search2Data = {
    className: "search-1",
};

const arrowForwardIos23Data = {
    className: "arrowforwardios-3",
};

const walletData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
    myBoxes: "My Boxes",
    myInventory: "My Inventory",
    userStatus: "User Status",
    myFragments: "My Fragments",
    wallet: "Wallet",
    settings: "Settings",
    wallet2: "WALLET",
    totalAmount: "TOTAL AMOUNT",
    price: "USD",
    price2: "$600",
    hxc: "$HXC",
    text2: "7,600",
    withdrawFunds: "WITHDRAW FUNDS",
    addFunds: "ADD FUNDS",
    enterAmount: "Enter Amount",
    addFunds2: "ADD FUNDS",
    search: "SEARCH...",
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
    xxxxXxxxXxxx3456: "XXXX XXXX XXXX 3456",
    mohsinJaved: "Mohsin Javed",
    debitCard: "Debit Card",
    text3: "01/24",
    validThru: <>Valid <br />Thru</>,
    seeAll: "See All",
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
    profilePic: "/img/profile-pic@2x.png",
    searchProps: search2Data,
    arrowForwardIos2Props: arrowForwardIos23Data,
};

const arrowForwardIos24Data = {
    className: "arrowforwardios-4",
};

const arrowForwardIos25Data = {
    className: "arrowforwardios-5",
};

const forgePageData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    airJordanFragment: "Air Jordan Fragment",
    forgingFactory: "FORGING FACTORY",
    x12: "/img/----1-2@2x.png",
    lv32: "/img/lv3-2@2x.png",
    yeezy2: "/img/yeezy-2@2x.png",
    spanText: "60%",
    spanText2: " Success Rate",
    forge: "FORGE",
    spanText3: "Cost: ",
    spanText4: "40",
    spanText5: " $HXC",
    spanText6: "Cost: ",
    spanText7: "20",
    spanText8: " $HXC",
    insurance: "Insurance",
    text4: <>LV1 Stone Furnave <br />Tier 1</>,
    x30Hxc: "30 $HXC",
    spanText9: "80%",
    spanText10: " Durability",
    upgradeToLv2: "UPGRADE TO LV2",
    text5: "Upgrade to increase success rate!",
    arrowForwardIos2Props: arrowForwardIos24Data,
    arrowForwardIos22Props: arrowForwardIos25Data,
};

const search3Data = {
    className: "search-2",
};

const homeLimitedBoxData = {
    fragmentFactory: "FRAGMENT FACTORY",
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    bannerVersion21: "/img/banner-version-2-1@1x.png",
    bannerVersion41: "/img/banner-version-4-1@1x.png",
    limitedBox: "LIMITED BOX",
    merchandise: "MERCHANDISE",
    sortBy: "SORT BY",
    surname: "PRICE",
    categories: "CATEGORIES",
    place: "BRAND",
    rarity: "RARITY",
    searchBoxes: "SEARCH BOXES...",
    text6: "SUPREME X LOUIS VUITTON",
    offcl_Lv_Supreme7: "/img/offcl-lv-supreme-7@2x.png",
    unbox: "UNBOX",
    price: "$29.99",
    image46: "/img/image-46@2x.png",
    unbox2: "UNBOX",
    price2: "$29.99",
    chunkyDunk: "CHUNKY DUNK",
    image50: "/img/image-50@2x.png",
    unbox3: "UNBOX",
    price3: "$29.99",
    supremeValueBox: "SUPREME VALUE BOX",
    offcl_Box_Supreme_25: "/img/offcl-box-supreme-2-5@2x.png",
    unbox4: "UNBOX",
    price4: "$29.99",
    image47: "/img/image-47@2x.png",
    unbox5: "UNBOX",
    price5: "$29.99",
    text7: "SUPREME X THE NORTH FACE",
    image56: "/img/image-56@2x.png",
    unbox6: "UNBOX",
    price6: "$29.99",
    nikeLuxuryBox: "NIKE LUXURY BOX",
    offcl_Box_Nike_55: "/img/offcl-box-nike-5-5@2x.png",
    unbox7: "UNBOX",
    price7: "$29.99",
    image48: "/img/image-48@2x.png",
    unbox8: "UNBOX",
    price8: "$29.99",
    yeezyBox: "YEEZY BOX",
    image61: "/img/image-61@2x.png",
    unbox9: "UNBOX",
    price9: "$29.99",
    kawsBox: "KAWS BOX",
    offcl_Kaws5: "/img/offcl-kaws-5@2x.png",
    unbox10: "UNBOX",
    price10: "$29.99",
    image49: "/img/image-49@2x.png",
    unbox11: "UNBOX",
    price11: "$29.99",
    palaceBox: "PALACE BOX",
    image57: "/img/image-57@2x.png",
    unbox12: "UNBOX",
    price12: "$29.99",
    searchProps: search3Data,
};

const accountBalanceWallet2Data = {
    className: "accountbalancewallet-1",
};

const search4Data = {
    className: "search-3",
};

const arrowForwardIos26Data = {
    className: "arrowforwardios-6",
};

const arrowForwardIos27Data = {
    className: "arrowforwardios-7",
};

const icon2Data = {
    className: "icon-2",
};

const myStatusData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
    myBoxes: "My Boxes",
    myInventory: "My Inventory",
    userStatus: "User Status",
    myFragments: "My Fragments",
    wallet: "Wallet",
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
    text9: "10% In-App Purchasing Discount",
    address3: "20 days to downgrade",
    search: "SEARCH...",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    referralHistory: "REFERRAL HISTORY",
    referralCode: "Referral Code",
    seeAll: "See All",
    text8: "Refferral Purchasing Status",
    purchasing: "Purchasing",
    reward: "Reward",
    weekly: "Weekly",
    name: "Lucas Amaeta",
    lucasAmaetaInfoCo: "lucas.amaeta@info.com",
    lucasAmaeta: "Nil Matheu",
    lucasAmaetaInfoCo2: "nilmatheu789@info.com",
    lucasAmaeta2: "Anna Gristina",
    lucasAmaetaInfoCo3: "annagristina22@info.com",
    price: "$289",
    x289: "$178",
    x2892: "$380",
    x2893: "$20",
    x2894: "$15",
    x2895: "$30",
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
    accountBalanceWalletProps: accountBalanceWallet2Data,
    searchProps: search4Data,
    arrowForwardIos2Props: arrowForwardIos26Data,
    arrowForwardIos22Props: arrowForwardIos27Data,
    iconProps: icon2Data,
};

const arrowForwardIos28Data = {
    className: "arrowforwardios-8",
};

const arrowForwardIos29Data = {
    className: "arrowforwardios-9",
};

const group4612Data = {
    className: "group-461-2",
};

const meltPageData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    text11: "CHOOSE A ITEM TO MELT",
    text12: <>LV1 Stone Smelter <br />Tier 1</>,
    file_16010746003623: "/img/file-1601074600362-3@2x.png",
    file_16010748630162: "/img/file-1601074863016-2@2x.png",
    lvCardholder: "/img/lv-cardholder@2x.png",
    x30Hxc: "30 $HXC",
    spanText: "80%",
    spanText2: " Durability",
    upgradeToLv2: "UPGRADE TO LV2",
    text13: "Upgrade to increase success rate!",
    supremeJacket: "Supreme Jacket",
    spanText3: "Up to ",
    spanText4: "5",
    spanText5: " LV Fragments",
    spanText6: "60%",
    spanText7: " Success Rate",
    melt: "MELT",
    spanText8: "Cost: ",
    spanText9: "40",
    spanText10: " $HXC",
    arrowForwardIos2Props: arrowForwardIos28Data,
    arrowForwardIos22Props: arrowForwardIos29Data,
    group461Props: group4612Data,
};

const accountBalanceWallet3Data = {
    className: "accountbalancewallet-2",
};

const stateDefault2Data = {
    children: "SHIPPING INFO",
};

const stateDefault22Data = {
    children: "USER ID",
};

const stateDefault23Data = {
    children: "CONTACT #",
};

const stateDefault24Data = {
    children: "CONTACT @",
};

const stateDefault25Data = {
    children: "PASSWORD",
};

const stateDefault26Data = {
    children: "LANGUAGE",
};

const stateDefault27Data = {
    children: "NOTIFICATION",
};

const stateDefault28Data = {
    children: "THEME",
};

const addCardData = {
    cardNumber: 'CARD NUMBER',
    cvv: 'CVV',
    expiry: 'EXPIRY',
    name: 'FULL NAME',
    address: 'ADDRESS',
}

const settingData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
    myBoxes: "My Boxes",
    myInventory: "My Inventory",
    userStatus: "User Status",
    myFragments: "My Fragments",
    wallet: "Wallet",
    settings: "Settings",
    setting: "SETTING",
    enterAddress: "Enter Address",
    enterId: "Enter ID",
    enterPhoneNumber: "Enter Phone Number",
    enterEmail: "Enter Email",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    enterPassword: "Enter Password",
    selectLanguage: "Select Language",
    text14: "Select Notification Preference",
    selectThemeColor: "Select Theme Color",
    accountBalanceWalletProps: accountBalanceWallet3Data,
    stateDefault2Props: stateDefault2Data,
    stateDefault22Props: stateDefault22Data,
    stateDefault23Props: stateDefault23Data,
    stateDefault24Props: stateDefault24Data,
    stateDefault25Props: stateDefault25Data,
    stateDefault26Props: stateDefault26Data,
    stateDefault27Props: stateDefault27Data,
    stateDefault28Props: stateDefault28Data,
};

const frame24Data = {
    className: "frame-6",
};

const accountBalanceWallet4Data = {
    className: "accountbalancewallet-3",
};

const search5Data = {
    className: "search-4",
};

const arrowForwardIos210Data = {
    className: "arrowforwardios-10",
};

const arrowForwardIos211Data = {
    className: "arrowforwardios-11",
};

const arrowForwardIos212Data = {
    className: "arrowforwardios-12",
};

const arrowForwardIos213Data = {
    className: "arrowforwardios-13",
};

const amountData = {
    x289: "Shipped",
};

const group433Data = {
    lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
    lucasAmaetaInfoCo: "Size:9.5",
};

const icon23Data = {
    className: "icon-6",
};

const dateData = {
    icon2Props: icon23Data,
};

const icon24Data = {
    className: "icon-6",
};

const date2Data = {
    className: "date-10",
    icon2Props: icon24Data,
};

const icon25Data = {
    className: "icon-6",
};

const amount2Data = {
    x289: "Sold",
    className: "amount-7",
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
    file_16010748630162: "/img/file-1601074863016-2-1@2x.png",
    file_16010789496712: "/img/file-1601078949671-2@2x.png",
    amountProps: amountData,
    group433Props: group433Data,
    dateProps: dateData,
    date2Props: date2Data,
    icon2Props: icon25Data,
    amount2Props: amount2Data,
    group4332Props: group4332Data,
    group4333Props: group4333Data,
};

const myInventoryData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
    myBoxes: "My Boxes",
    myInventory: "My Inventory",
    userStatus: "User Status",
    myFragments: "My Fragments",
    wallet: "Wallet",
    settings: "Settings",
    myInventory2: "MY INVENTORY",
    myItems: "MY ITEMS",
    totalItems: "Total Items",
    number: "15",
    redeemedItems: "Redeemed Items",
    number2: "5",
    marketValue: "Market Value",
    price: "$19,263",
    totalStaked: "Total Staked",
    number3: "10",
    search: "SEARCH...",
    marketValue2: "MARKET VALUE",
    number4: "5000",
    number5: "4000",
    number6: "3000",
    number7: "2000",
    number8: "1000",
    number9: "0",
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
    itemDistribution: "ITEM DISTRIBUTION",
    lvApparel: "LV Apparel",
    airJordan: "Air Jordan",
    nike: "Nike",
    palace: "Palace",
    supreme: "Supreme",
    item: "ITEM",
    seeAll: "See All",
    itemImage: "Item Image",
    itemName: "Item Name",
    status: "Status",
    method: "Method",
    marketValue3: "Market Value",
    action: "Action",
    file_16010746003623: "/img/file-1601074600362-3-2@2x.png",
    lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
    lucasAmaetaInfoCo: "Size: 9.5",
    x289: "Shipped",
    x2892: "Mystery Box",
    x2893: "$7,000",
    x2894: "Melt",
    x2895: "Staking",
    x2896: "Fractions",
    x2897: "Stake",
    x2898: "$1,500",
    lucasAmaeta2: "TNF x Supreme Jacket",
    lucasAmaetaInfoCo2: "Size: M",
    lucasAmaetaInfoCo3: "Color: Red",
    file_16010748630163: "/img/file-1601074863016-3@2x.png",
    file_16010789496713: "/img/file-1601078949671-3@2x.png",
    lucasAmaeta3: "Travis Scott Dunk SB",
    lucasAmaetaInfoCo4: "Size: 9.5",
    x2899: "In Stock",
    x28910: "Mystery Box",
    x28911: "$3,000",
    x28912: "Loan",
    surname: "Small Dash",
    profilePic: "/img/profile-pic@2x.png",
    frame2Props: frame24Data,
    accountBalanceWalletProps: accountBalanceWallet4Data,
    searchProps: search5Data,
    arrowForwardIos2Props: arrowForwardIos210Data,
    arrowForwardIos22Props: arrowForwardIos211Data,
    arrowForwardIos23Props: arrowForwardIos212Data,
    arrowForwardIos24Props: arrowForwardIos213Data,
    merchandisesProps: merchandisesData,
};

const displayNFTsData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    text16: "CHOOSE YOUR NFTS DISPLAYING IN DECENTRALAND",
    image60: "/img/image-60-1@2x.png",
    file_16010789496713: "/img/file-1601078949671-3-1@2x.png",
    image59: "/img/image-59-1@2x.png",
    name: "TRAVIS SCOTT DUNK SB",
    text15: "CONNET TO DECENTRALAND",
};

const frame7Data = {
    className: "frame-4",
};

const accountBalanceWallet5Data = {
    className: "accountbalancewallet-4",
};

const search6Data = {
    className: "search-5",
};

const arrowForwardIos214Data = {
    className: "arrowforwardios-14",
};

const arrowForwardIos215Data = {
    className: "arrowforwardios-15",
};

const arrowForwardIos216Data = {
    className: "arrowforwardios-16",
};

const arrowForwardIos217Data = {
    className: "arrowforwardios-17",
};

const amount3Data = {
    x289: "Shipped",
};

const group4334Data = {
    lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
    lucasAmaetaInfoCo: "Size:9.5",
};

const icon27Data = {
    className: "icon-7",
};

const date3Data = {
    icon2Props: icon27Data,
};

const icon28Data = {
    className: "icon-7",
};

const date4Data = {
    className: "date-12",
    icon2Props: icon28Data,
};

const icon29Data = {
    className: "icon-7",
};

const amount4Data = {
    x289: "Sold",
    className: "amount-9",
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
    file_16010748630162: "/img/file-1601074863016-2-2@2x.png",
    file_16010789496712: "/img/file-1601078949671-2-1@2x.png",
    amountProps: amount3Data,
    group433Props: group4334Data,
    dateProps: date3Data,
    date2Props: date4Data,
    icon2Props: icon29Data,
    amount2Props: amount4Data,
    group4332Props: group4335Data,
    group4333Props: group4336Data,
};

const myBoxData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-9@2x.png",
    myBoxes: "My Boxes",
    myInventory: "My Inventory",
    userStatus: "User Status",
    myFragments: "My Fragments",
    wallet: "Wallet",
    settings: "Settings",
    myMysteryBoxes: "MY MYSTERY BOXES",
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
    marketValue2: "MARKET VALUE",
    number4: "5000",
    number5: "4000",
    number6: "3000",
    number7: "2000",
    number8: "1000",
    number9: "0",
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
    itemDistribution: "ITEM DISTRIBUTION",
    lvApparel: "LV Apparel",
    airJordan: "Air Jordan",
    nike: "Nike",
    palace: "Palace",
    supreme: "Supreme",
    item: "ITEM",
    seeAll: "See All",
    itemImage: "Item Image",
    itemName: "Item Name",
    status: "Status",
    merchandise: "Merchandise",
    cost: "Cost",
    action: "Action",
    offcl_Lv_Supreme3: "/img/offcl-lv-supreme-3@2x.png",
    lucasAmaeta: "Supreme x LV Box",
    x289: "Shipped",
    x2892: <>Supreme x LV<br />Wallet</>,
    x2893: "$7,000",
    x2894: "Melt",
    x2895: "Staking",
    text18: "-",
    x2896: "Stake",
    x2897: "$1,500",
    lucasAmaeta2: "Supreme Value Box",
    lucasAmaeta3: "Kaws Box",
    x2898: "In Stock",
    text17: "-",
    x2899: "$3,000",
    x28910: "Loan",
    offcl_Box_Supreme_22: "/img/offcl-box-supreme-2-2@2x.png",
    image48: "/img/image-48-1@2x.png",
    surname: "Small Dash",
    profilePic: "/img/profile-pic@2x.png",
    frameProps: frame7Data,
    accountBalanceWalletProps: accountBalanceWallet5Data,
    searchProps: search6Data,
    arrowForwardIos2Props: arrowForwardIos214Data,
    arrowForwardIos22Props: arrowForwardIos215Data,
    arrowForwardIos23Props: arrowForwardIos216Data,
    arrowForwardIos24Props: arrowForwardIos217Data,
    merchandisesProps: merchandises2Data,
};

const stakeInfoPageData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    text20: "WHAT IS HYPEX STAKE?",
    text21: <>Users can stake (deposit) Mystery Boxes, merchandise (NFTs), and fragments on HypeX. When users stake their NFTs on HypeX, our system will use Chainlink Price Feed to collect live market price from other platforms such as StockX to calculate an estimated value for the responding item. The yield will be generated based on the value of the staked NFT. Users can withdraw NFTs along with yield  after the minimal staking period, which is 7 days. If users would like to withdraw within 7 days, fees will be applied to early exits.<br />Users will gain more benefits with greater staking amounts. Such benefits include complimentary mystery boxes and fragments. Greater staking amount will be rewarded with more valuable mystery boxes and higher probabilities to draw rare fragments.</>,
    stakeNow: "STAKE NOW",
    image59: "/img/image-59-2@2x.png",
    file_16010746003624: "/img/file-1601074600362-4@2x.png",
    file_16010789496713: "/img/file-1601078949671-3-2@1x.png",
};

const arrowForwardIos218Data = {
    className: "arrowforwardios-18",
};

const arrowForwardIos219Data = {
    className: "arrowforwardios-19",
};

const group4613Data = {
    className: "group-461-3",
};

const meltPage2Data = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    text23: "CHOOSE A ITEM TO MELT",
    lvCardholder: "/img/lv-cardholder@2x.png",
    file_16010746003623: "/img/file-1601074600362-3-4@2x.png",
    file_16010748630162: "/img/file-1601074863016-2-3@2x.png",
    name: "Jordan 1 x offwhite",
    spanText: "Up to ",
    spanText2: "5",
    spanText3: " LV Fragments",
    spanText4: "60%",
    spanText5: " Success Rate",
    melt: "MELT",
    spanText6: "Cost: ",
    spanText7: "40",
    spanText8: " $HXC",
    text24: <>LV1 Stone Smelter <br />Tier 1</>,
    x30Hxc: "30 $HXC",
    spanText9: "80%",
    spanText10: " Durability",
    upgradeToLv2: "UPGRADE TO LV2",
    text25: "Upgrade to increase success rate!",
    arrowForwardIos2Props: arrowForwardIos218Data,
    arrowForwardIos22Props: arrowForwardIos219Data,
    group461Props: group4613Data,
};

const stateActiveData = {
    text30: "INSURANCE",
};

const fragmentFactoryData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    fragmentFactory2: "FRAGMENT FACTORY",
    yeezy3: "/img/yeezy-3@2x.png",
    lv32: "/img/lv3-2-1@1x.png",
    fragmentQuantity: "FRAGMENT QUANTITY",
    number: "1",
    text27: "-",
    text29: "+",
    x13: "/img/----1-3-1@2x.png",
    spanText: "add to max: ",
    spanText2: "20",
    spanText3: "Cost: ",
    spanText4: "20",
    spanText5: " $HXC",
    compose: "COMPOSE",
    spanText6: "Cost: ",
    spanText7: "10",
    spanText8: " $HXC",
    spanText9: "50%",
    spanText10: " Success Rate",
    center1: "/img/center-1@2x.png",
    lv31: "/img/lv3-1@2x.png",
    expectedQuantity: "EXPECTED QUANTITY",
    number2: "1",
    text26: "-",
    text28: "+",
    stateActiveProps: stateActiveData,
};

const loanData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    text35: "CHOOSE A MERCHANDISE TO LOAN",
    yourLoan: "YOUR LOAN",
    image60: "/img/image-60-1@2x.png",
    file_16010789496713: "/img/file-1601078949671-3-1@2x.png",
    image59: "/img/image-59-1@2x.png",
    placeholder: "Placeholder",
    percent: "100%",
    totalLoanDebt: "Total Loan Debt",
    price: "$6,520",
    name: "TRAVIS SCOTT DUNK SB",
    number: "1",
    text33: "-",
    text34: "+",
    quantity: "QUANTITY",
    text31: "ESTIMATED LOAN AMOUNT",
    price2: "$2,000",
    spanText: "in",
    spanText2: " ",
    spanText3: "UST/USD",
    text32: "INTEREST RATE: 0.002%",
    loan2: "LOAN",
};

const close2Data = {
    className: "close-1",
};

const loanSuccessData = {
    congratulations: "Congratulations!",
    youDeposited: "You Deposited",
    open: "OPEN",
    file_16010789496715: "/img/file-1601078949671-5@2x.png",
    spanText: "You Got: ",
    spanText2: "$2,000",
    spanText3: " In your Wallet",
    image142: "/img/image--14--2@2x.png",
    image162: "/img/image--16--2@2x.png",
    closeProps: close2Data,
};

const frame36Data = {
    className: "frame-10",
};

const accountBalanceWallet6Data = {
    className: "accountbalancewallet-5",
};

const search7Data = {
    className: "search-6",
};

const arrowForwardIos220Data = {
    className: "arrowforwardios-20",
};

const arrowForwardIos221Data = {
    className: "arrowforwardios-21",
};

const arrowForwardIos222Data = {
    className: "arrowforwardios-22",
};

const arrowForwardIos223Data = {
    className: "arrowforwardios-23",
};

const amount5Data = {
    x289: "Shipped",
};

const group4337Data = {
    lucasAmaeta: "AJ1 OFF-WHITE CHICAGO",
    lucasAmaetaInfoCo: "Size:9.5",
};

const icon211Data = {
    className: "icon-8",
};

const date5Data = {
    icon2Props: icon211Data,
};

const icon212Data = {
    className: "icon-8",
};

const date6Data = {
    className: "date-14",
    icon2Props: icon212Data,
};

const icon213Data = {
    className: "icon-8",
};

const amount6Data = {
    x289: "Sold",
    className: "amount-11",
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
    file_16010748630162: "/img/file-1601074863016-2-2@2x.png",
    file_16010789496712: "/img/file-1601078949671-2-1@2x.png",
    amountProps: amount5Data,
    group433Props: group4337Data,
    dateProps: date5Data,
    date2Props: date6Data,
    icon2Props: icon213Data,
    amount2Props: amount6Data,
    group4332Props: group4338Data,
    group4333Props: group4339Data,
};

const myFragmentsData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-9@2x.png",
    myBoxes: "My Boxes",
    myInventory: "My Inventory",
    userStatus: "User Status",
    myFragments: "My Fragments",
    wallet: "Wallet",
    settings: "Settings",
    myMysteryBoxes: "MY MYSTERY BOXES",
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
    marketValue2: "MARKET VALUE",
    number4: "5000",
    number5: "4000",
    number6: "3000",
    number7: "2000",
    number8: "1000",
    number9: "0",
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
    itemDistribution: "ITEM DISTRIBUTION",
    lvApparel: "LV Apparel",
    airJordan: "Air Jordan",
    nike: "Nike",
    palace: "Palace",
    supreme: "Supreme",
    item: "ITEM",
    seeAll: "See All",
    itemImage: "Item Image",
    itemName: "Item Name",
    quantity: "Quantity",
    stakedLoan: "Staked/Loan",
    cost: "Cost",
    action: "Action",
    lucasAmaeta: "Air Jordan Fragment",
    x289: "30",
    x2892: "20/30",
    x2893: "$99",
    x2894: "Forge",
    x2895: "20",
    x2896: "20/20",
    x2897: "Stake",
    x2898: "$39",
    lucasAmaeta2: "LV Fragment",
    lucasAmaeta3: "Supreme Fragment",
    x2899: "15",
    x28910: "15/15",
    x28911: "$59",
    x28912: "Loan",
    x12: "/img/----1-2-1@2x.png",
    lv31: "/img/lv3-1-1@2x.png",
    supreme1: "/img/supreme-1@2x.png",
    surname: "Small Dash",
    profilePic: "/img/profile-pic@2x.png",
    frame3Props: frame36Data,
    accountBalanceWalletProps: accountBalanceWallet6Data,
    searchProps: search7Data,
    arrowForwardIos2Props: arrowForwardIos220Data,
    arrowForwardIos22Props: arrowForwardIos221Data,
    arrowForwardIos23Props: arrowForwardIos222Data,
    arrowForwardIos24Props: arrowForwardIos223Data,
    merchandisesProps: merchandises3Data,
};

const close3Data = {
    className: "close-2",
};

const stakeSuccessData = {
    text55: <>Congratulations!<br />You Staked</>,
    open: "OPEN",
    file_16010789496714: "/img/file-1601078949671-5@2x.png",
    spanText: <>$3,000<br />Stake Period: </>,
    spanText2: "7",
    spanText3: <> Days<br />APY: </>,
    spanText4: "56",
    spanText5: "%",
    image141: "/img/image--14--2@2x.png",
    image161: "/img/image--16--2@2x.png",
    closeProps: close3Data,
};

const stakeData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    text57: "CHOOSE A MERCHANDISE TO STAKE",
    image60: "/img/image-60-1@2x.png",
    file_16010789496713: "/img/file-1601078949671-3-1@2x.png",
    image59: "/img/image-59-1@2x.png",
    name: "TRAVIS SCOTT DUNK SB",
    number: "1",
    text62: "-",
    text63: "+",
    quantity: "QUANTITY",
    text58: "ESTIMATED STAKE VALUE",
    price: "$3,000",
    spanText: "Pairs:",
    spanText2: " UST - HXC",
    text61: "MINIMAL STAKE PERIOD: 7 DAYS",
    stake2: "STAKE",
    yourStake: "YOUR STAKE",
    text59: "Total Value You Staked",
    price2: "$36,520",
    viewFullStatus: "View Full Status",
    x13480ToTier3: "$13,480 to Tier 3",
    totalPool: "TOTAL POOL",
    estimatedApy: "Estimated APY",
    percent: "56%",
    text60: "Cumulative total pool amount (USD)",
    price3: "$5,000,065",
};

const group4614Data = {
    className: "group-461-4",
};

const meltPage3Data = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    text65: "CHOOSE A ITEM TO MELT",
    text66: <>LV1 Stone Smelter <br />Tier 1</>,
    file_16010748630162: "/img/file-1601074863016-2-3@2x.png",
    lvCardholder: "/img/lv-cardholder-2@2x.png",
    file_16010746003623: "/img/file-1601074600362-3@2x.png",
    x30Hxc: "30 $HXC",
    spanText: "80%",
    spanText2: " Durability",
    upgradeToLv2: "UPGRADE TO LV2",
    text67: "Upgrade to increase success rate!",
    supremeCardholder: "Supreme Cardholder",
    spanText3: "Up to ",
    spanText4: "5",
    spanText5: " LV Fragments",
    spanText6: "60%",
    spanText7: " Success Rate",
    melt: "MELT",
    spanText8: "Cost: ",
    spanText9: "40",
    spanText10: " $HXC",
    group461Props: group4614Data,
};

const close4Data = {
    className: "close-3",
};

const boxPurchasingData = {
    closeProps: close4Data,
};

const merchandisePageData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    profilePic: "/img/profile-pic@2x.png",
    image63: "/img/image-63-2@2x.png",
    x: "X",
    image62: "/img/image-62@2x.png",
    text71: "MARKET PRICE: $1,650",
    lvCardholder: "/img/lv-cardholder-3@2x.png",
    name: "LOUIS VUITTON X SUPREME CARD HOLDER",
    text70: "Crafted from Louis Vuitton's iconic Monogram canvas, the Card Holder is a smart, simple accessory that is ideal for active lifestyles. Notable for its slim design, it contains three card slots: a large one in the center and two on either side. Its grained-leather lining adds a touch of refinement.",
    youHave: "YOU HAVE",
    lvCardholder2: "/img/lv-cardholder-4@2x.png",
    spanText: "lv x supreme card holder ",
    spanText2: "x1",
    lvFragment: "/img/lv-fragment@2x.png",
    spanText3: "lv fragments ",
    spanText4: "x10",
    melt: "MELT",
    forge: "FORGE",
    text72: "Up to 5 LV Fragments",
    with5LvFragments: "With 5 LV Fragments",
};

const shoppingBag13Data = {
    className: "shoppingbag-12",
};

const boxPageData = {
    offcl_Box_Supreme_21: "/img/offcl-box-supreme-2-1-1@1x.png",
    profilePic: "/img/profile-pic@2x.png",
    offcl_Box_Supreme_22: "/img/offcl-box-supreme-2-2-1@1x.png",
    bandana: "/img/bandana@2x.png",
    lvXSupremeBadana: "LV X SUPREME BADANA",
    text76: "TNF X SUPREME HOODIE",
    tnfHoodie: "/img/tnf-hoodie@2x.png",
    boxLogo: "/img/box-logo@2x.png",
    text77: "SUPREME BOX LOGO HOODIE",
    loan: "LOAN",
    displayNfts: "DISPLAY NFTS",
    place: "PURCHASE",
    itemsInTheBox: "ITEMS IN THE BOX",
    text74: "LV X SUPREME CARD HOLDER",
    lvCardholder: "/img/lv-cardholder-5@2x.png",
    text75: "TNF X SUPREME JACKET",
    tnfJacket: "/img/tnf-jacket@2x.png",
    text82: <>This Box contains some dope Supreme shit. <br />And some awesome Fragments.</>,
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-8@2x.png",
    fragmentFactory: "FRAGMENT FACTORY",
    stake: "STAKE",
    image62: "/img/image-62-1@1x.png",
    image71: "/img/image--7--1-1@2x.png",
    price: "$2,399",
    price2: "$1,399",
    price3: "$899",
    price4: "$1,569",
    price5: "$6,399",
    spanText: "Probability: ",
    spanText2: "0.12%",
    spanText3: "Probability: ",
    spanText4: "1%",
    spanText5: "Probability: ",
    spanText6: "0.89%",
    spanText7: "Probability: ",
    spanText8: "1.39%",
    spanText9: "Probability: ",
    spanText10: "0.19%",
    text78: <>SUPREME X TNF<br />DUFFLE BAG</>,
    image69: "/img/image-69-1@2x.png",
    price6: "$420",
    spanText11: "Probability: ",
    spanText12: "4.51%",
    text79: <>SUPREME BANDANA<br />BOX LOGO</>,
    text80: <>SUPREME NIKE<br />STRIP HOODIE</>,
    text81: "SUPREME S LOGO HODDIE",
    supremeBackpack: "SUPREME BACKPACK",
    image65: "/img/image-65-2@2x.png",
    image66: "/img/image-66-1@2x.png",
    image67: "/img/image-67-1@2x.png",
    image68: "/img/image-68-1@2x.png",
    price7: "$891",
    price8: "$586",
    price9: "$463",
    price10: "$456",
    spanText13: "Probability: ",
    spanText14: "0.91%",
    spanText15: "Probability: ",
    spanText16: "2.42%",
    spanText17: "Probability: ",
    spanText18: "3.15%",
    spanText19: "Probability: ",
    spanText20: "4.19%",
    shoppingBagProps: shoppingBag13Data,
};

const profileDropDownData = {
    profilePic: "/img/profile-pic-14@2x.png",
    surname: "Small Dash",
    text37: "View and Edit Profile",
    hxc: "$HXC",
    text38: "8882.06",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    withdraw: "WITHDRAW",
    boxIcon: "/img/box-icon@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    text36: "My Merchandise Inventory",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myFragments: "My Fragments",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const profileDropDown2Data = {
    profilePic: "/img/profile-pic-14@2x.png",
    surname: "Small Dash",
    text40: "View and Edit Profile",
    hxc: "$HXC",
    text41: "8882.06",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    withdraw: "WITHDRAW",
    boxIcon: "/img/box-icon@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    text39: "My Merchandise Inventory",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myFragments: "My Fragments",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon-1@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon-1@2x.png",
    mySetting: "My Setting",
};

const profileDropDown3Data = {
    profilePic: "/img/profile-pic-14@2x.png",
    surname: "Small Dash",
    text43: "View and Edit Profile",
    hxc: "$HXC",
    text44: "8882.06",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    withdraw: "WITHDRAW",
    boxIcon: "/img/box-icon@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    text42: "My Merchandise Inventory",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myFragments: "My Fragments",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon-2@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const profileDropDown4Data = {
    profilePic: "/img/profile-pic-14@2x.png",
    surname: "Small Dash",
    text46: "View and Edit Profile",
    hxc: "$HXC",
    text47: "8882.06",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    withdraw: "WITHDRAW",
    boxIcon: "/img/box-icon@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    text45: "My Merchandise Inventory",
    puzzleIcon: "/img/puzzle-icon-3@2x.png",
    myFragments: "My Fragments",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon-1@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const profileDropDown5Data = {
    profilePic: "/img/profile-pic-14@2x.png",
    surname: "Small Dash",
    text49: "View and Edit Profile",
    hxc: "$HXC",
    text50: "8882.06",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    withdraw: "WITHDRAW",
    boxIcon: "/img/box-icon-4@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon-4@2x.png",
    text48: "My Merchandise Inventory",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myFragments: "My Fragments",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon-4@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const profileDropDown6Data = {
    profilePic: "/img/profile-pic-14@2x.png",
    surname: "Small Dash",
    text53: "View and Edit Profile",
    hxc: "$HXC",
    text54: "8882.06",
    place: "DEPOSIT",
    usd: "$USD",
    phone: "3023.6",
    withdraw: "WITHDRAW",
    boxIcon: "/img/box-icon-5@2x.png",
    myMysteryBoxes: "My Mystery Boxes",
    sneakerIcon: "/img/sneaker-icon@2x.png",
    text52: "My Merchandise Inventory",
    puzzleIcon: "/img/puzzle-icon@2x.png",
    myFragments: "My Fragments",
    affiliatesIcon: "/img/affiliates-icon@2x.png",
    myStatus: "My Status",
    walletIcon: "/img/wallet-icon-1@2x.png",
    myWallets: "My Wallets",
    settingIcon: "/img/setting-icon@2x.png",
    mySetting: "My Setting",
};

const coinlistForStakeData = {
    terraUstUsdHxc: "Terra UST(USD)/HXC",
    percent: "56%",
    pairs: "Pairs",
    apy: "APY",
    maticHxc: "MATIC - HXC",
    percent2: "78%",
    nearHxc: "NEAR - HXC",
    percent3: "102%",
    xdbHxc: "XDB - HXC",
    percent4: "132%",
    solHxc: "SOL - HXC",
    percent5: "138%",
    text68: "HXC - Terra UST(USD)",
    percent6: "856%",
    hxcMatic: "HXC - MATIC",
    percent7: "1236%",
    hxcNear: "HXC - NEAR",
    percent8: "1456%",
    hxcXbd: "HXC - XBD",
    percent9: "1563%",
    hxcSol: "HXC - SOL",
    percent10: "1583%",
    image63: "/img/image-63@2x.png",
    hype_X_Logo_EditedRemovebg_Smaller_: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
    hype_X_Logo_EditedRemovebg_Smaller_2: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
    hype_X_Logo_EditedRemovebg_Smaller_3: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
    hype_X_Logo_EditedRemovebg_Smaller_4: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
    hype_X_Logo_EditedRemovebg_Smaller_5: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
    hype_X_Logo_EditedRemovebg_Smaller_6: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
    hype_X_Logo_EditedRemovebg_Smaller_7: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
    hype_X_Logo_EditedRemovebg_Smaller_8: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
    image65: "/img/image-65@2x.png",
    hype_X_Logo_EditedRemovebg_Smaller_9: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
    hype_X_Logo_EditedRemovebg_Smaller_10: "/img/hype-x-logo-edited-removebg-smaller-l-1@2x.png",
    image64: "/img/image-64@2x.png",
    image652: "/img/image-65@2x.png",
    image66: "/img/image-66@2x.png",
    image67: "/img/image-67@2x.png",
    image632: "/img/image-63@2x.png",
    image642: "/img/image-64@2x.png",
    image68: "/img/image-66@2x.png",
    image69: "/img/image-67@2x.png",
};

const editPaymentMethodData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
    myBoxes: "My Boxes",
    myInventory: "My Inventory",
    userStatus: "User Status",
    addCard: "Add Card",
    wallet: "Wallet",
    manageCards: "Cards",
    title: "EDIT PAYMENT METHODS",
    enterAddress: "Enter Address",
    enterId: "Enter ID",
    enterPhoneNumber: "Enter Phone Number",
    enterEmail: "Enter Email",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    enterPassword: "Enter Password",
    selectLanguage: "Select Language",
    text14: "Select Notification Preference",
    selectThemeColor: "Select Theme Color",
    accountBalanceWalletProps: accountBalanceWallet3Data,
    stateDefault2Props: stateDefault2Data,
    stateDefault22Props: stateDefault22Data,
    stateDefault23Props: stateDefault23Data,
    stateDefault24Props: stateDefault24Data,
    stateDefault25Props: stateDefault25Data,
    stateDefault26Props: stateDefault26Data,
    stateDefault27Props: stateDefault27Data,
    stateDefault28Props: stateDefault28Data,
};

const addPaymentMethodData = {
    hype_X_Logo_EditedRemovebg1: "/img/hype-x-logo-edited-removebg-1-1@2x.png",
    myBoxes: "My Boxes",
    myInventory: "My Inventory",
    userStatus: "User Status",
    addCard: "Add Card",
    wallet: "Wallet",
    manageCards: "Cards",
    title: "ADD PAYMENT METHOD",
    enterAddress: "Enter Address",
    enterId: "Enter ID",
    enterPhoneNumber: "Enter Phone Number",
    enterEmail: "Enter Email",
    profilePic: "/img/profile-pic@2x.png",
    surname: "Small Dash",
    cardNumber: "Card Number",
    selectLanguage: "Select Language",
    text14: "Select Notification Preference",
    selectThemeColor: "Select Theme Color",
    accountBalanceWalletProps: accountBalanceWallet3Data,
    stateDefault2Props: stateDefault2Data,
    stateDefault22Props: stateDefault22Data,
    stateDefault23Props: stateDefault23Data,
    stateDefault24Props: stateDefault24Data,
    stateDefault25Props: stateDefault25Data,
    stateDefault26Props: stateDefault26Data,
    stateDefault27Props: stateDefault27Data,
    stateDefault28Props: stateDefault28Data,
    addCardDataProps: addCardData,
    expiryDate: "01/2023",
    cvv: '123',
    cardHolderName: 'Card Holder Name',
    email: 'Email',
    submit: 'Add Card',
};
