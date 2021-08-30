import React, { useEffect, useState } from "react";
import Frame from "../Frame";
import Frame2 from "../Frame2";
import Frame3 from "../Frame3";
import AccountBalanceWallet from "../AccountBalanceWallet";
import Search from "../Search";
import ArrowForwardIos2 from "../ArrowForwardIos2";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import payments from '../../api/payments';
import openpgp from '../../api/openpgp';
import "./Wallet.css";
import balances from "../../api/balances";

function Wallet(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    myBoxes,
    myInventory,
    userStatus,
    myFragments,
    wallet,
    settings,
    wallet2,
    totalAmount,
    price,
    withdrawFunds,
    addFunds,
    enterAmount,
    addFunds2,
    search,
    connectWith,
    image21,
    metamask,
    image24,
    dapper,
    image22,
    coinbase,
    image25,
    fortmatic,
    image23,
    bitski,
    image26,
    torus,
    transactions,
    paymentMethod,
    edit,
    xxxxXxxxXxxx3456,
    mohsinJaved,
    debitCard,
    text3,
    validThru,
    seeAll,
    place,
    transactionId,
    type,
    place2,
    value,
    xreturn,
    status,
    lucasAmaeta,
    x289,
    x2892,
    x2893,
    x2894,
    x2895,
    x2896,
    lucasAmaeta2,
    x2897,
    x2898,
    x2899,
    x28910,
    x28911,
    x28912,
    lucasAmaeta3,
    x28913,
    x28914,
    x28915,
    x28916,
    x28917,
    x28918,
    lucasAmaeta4,
    x28919,
    x28920,
    x28921,
    x28922,
    x28923,
    x28924,
    surname,
    profilePic,
    searchProps,
    arrowForwardIos2Props,
    card,
    incrementBalance,
    balance,
  } = props;

  const [amount, setAmount] = useState("")
  const [cvv, setCvv] = useState("")
  const [loading, setLoading] = useState(false)

  async function makeApiCall() {
    try {
      const amountDetail = {
        amount: amount,
        currency: 'USD',
      }
      const sourceDetails = {
        id: card.id,
        type: 'card',
      }
      const payload = {
        idempotencyKey: uuidv4(),
        amount: amountDetail,
        verification: 'cvv',
        source: sourceDetails,
        description: "payment",
        keyId: '',
        encryptedData: '',
        channel: '',
        metadata: {
          phoneNumber: "+17145523989",
          email: 'johndoe@gmail.com',
          sessionId: 'xxx',
          ipAddress: '172.33.222.1',
        },
      }

      const cardDetails = cvv

      const pciPublicKey = await payments.getPCIPublicKey()
      const publicKey = pciPublicKey['data']['data']
      const encryptedData = await openpgp.encrypt(cardDetails, publicKey)

      payload.encryptedData = encryptedData.encryptedMessage
      payload.keyId = encryptedData.keyId

      const payment = await payments.createPayment(payload);
      const balancesInfo = await balances.getBalances();
      const balanceAmount = balancesInfo['data']['data']['available'][0]['amount']
      incrementBalance(balanceAmount)
    } catch (error) {
      console.log('an error occurred during make payment')
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    makeApiCall()
  };

  return (
    <div className="container-center-horizontal">
      <div className="wallet screen">
        <div className="overlap-group1-1">
          <Link to="/home-limited-box">
            <img className="hypexlogoedited-removebg-1-1" src={hype_X_Logo_EditedRemovebg1} />
          </Link>
          <Link to="my-box">
            <div className="flex-row-4">
              <Frame />
              <div className="my-boxes valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">{myBoxes}</div>
            </div>
          </Link>
          <Link to="/my-inventory">
            <div className="flex-row-5">
              <Frame2 />
              <div className="my-inventory valign-text-middle chakrapetch-bold-blue-violet-22-1px">{myInventory}</div>
            </div>
          </Link>
          <Link to="/my-status">
            <div className="flex-row-6">
              <img className="vector-32" src="/img/vector-12@2x.svg" />
              <div className="user-status valign-text-middle chakrapetch-bold-rhino-22-1px">{userStatus}</div>
            </div>
          </Link>
          <Link to="/my-fragments">
            <div className="flex-row-7">
              <Frame3 />
              <div className="my-fragments valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">{myFragments}</div>
            </div>
          </Link>
          <div className="overlap-group2-2">
            <div className="rectangle-263"></div>
            <AccountBalanceWallet />
            <div className="wallet-1 valign-text-middle white-chakra-petch">{wallet}</div>
          </div>
          <Link to="/setting">
            <div className="flex-row-8">
              <img className="vector-33" src="/img/vector-13@2x.svg" />
              <div className="settings valign-text-middle chakrapetch-bold-butterfly-bush-22-1px">{settings}</div>
            </div>
          </Link>
        </div>
        <div className="overlap-group-2">
          <div className="rectangle-465"></div>
          <img className="line-80" src="/img/line-80@1x.svg" />
          <div className="rectangle-470"></div>
          <div className="rectangle-471"></div>
          <div className="frame-24-1">
            <div className="flex-col-4">
              <div className="wallet-2 valign-text-middle">{wallet2}</div>
              <div className="overlap-group2-3">
                <div className="flex-row-9">
                  <div className="flex-col-5">
                    <div className="total-amount white-chakra-petch-medium">
                      {totalAmount}
                    </div>
                    <div className="price valign-text-middle">{price}</div>
                    <h1 className="price-1 white-chakra-petch">{balance}</h1>
                  </div>
                </div>
                <div className="overlap-group9-2">
                  <div className="group-458">
                    <div className="overlap-group8-1">
                      <img className="line-72" src="/img/line-72@2x.svg" />
                      <img className="line-73" src="/img/line-73@2x.svg" />
                      <img className="union" src="/img/union-12@2x.svg" />
                      <img className="line-70" src="/img/line-70@2x.svg" />
                      <img className="line-71" src="/img/line-71@2x.svg" />
                    </div>
                  </div>
                  <div className="withdraw-funds valign-text-middle chakrapetch-semi-bold-bright-turquoise-18px">
                    {withdrawFunds}
                  </div>
                </div>
              </div>
              <div className="add-funds valign-text-middle white-chakra-petch-medium">{addFunds}</div>
              <form onSubmit={handleSubmit}>
              <input 
                className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                type="tel"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder={enterAmount}
                required>
              </input>
              <input 
                className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                type="tel"
                value={cvv}
                onChange={e => setCvv(e.target.value)}
                placeholder="666"
                required>
              </input>
              <button 
              className="overlap-group7-3 button" 
              type="submit"
              onClick={() => console.log(card)}
              disabled={loading}>
                <div className="group-461">
                  <div className="overlap-group8-2">
                    <img className="line-72-1" src="/img/line-72-1@2x.svg" />
                    <img className="line-73-1" src="/img/line-73-1@2x.svg" />
                    <img className="union-1" src="/img/union-13@2x.svg" />
                    <img className="line-70-1" src="/img/line-70-1@2x.svg" />
                    <img className="line-71-1" src="/img/line-71-1@2x.svg" />
                  </div>
                </div>
                <div className="add-funds-1 valign-text-middle chakrapetch-semi-bold-bright-turquoise-18px">
                  {addFunds2}
                </div>
              </button>
              </form>
            </div>
            <div className="flex-col-7">
              <div className="overlap-group4-3">
                <div className="search-7 valign-text-middle white-chakra-petch-small">{search}</div>
                <Search className={searchProps.className} />
              </div>
              <div className="flex-row-10">
                <div className="flex-col-8">
                  <div className="overlap-group3-1">
                    <div className="flex-row-11">
                      <div className="flex-col-9">
                        <div className="valign-text-middle white-chakra-petch-medium">
                          {connectWith}
                        </div>
                        <img className="image-21" src={image21} />
                        <div className="meta-mask chakrapetch-semi-bold-white-18px">{metamask}</div>
                        <img className="image-24" src={image24} />
                        <div className="dapper chakrapetch-semi-bold-white-18px">{dapper}</div>
                      </div>
                      <div className="flex-col-10">
                        <img className="image-22" src={image22} />
                        <div className="coinbase chakrapetch-semi-bold-white-18px">{coinbase}</div>
                        <img className="image-25" src={image25} />
                        <div className="fortmatic chakrapetch-semi-bold-white-18px">{fortmatic}</div>
                      </div>
                    </div>
                    <div className="flex-col-11">
                      <img className="image-23" src={image23} />
                      <div className="bitski chakrapetch-semi-bold-white-18px">{bitski}</div>
                      <img className="image-26" src={image26} />
                      <div className="torus chakrapetch-semi-bold-white-18px">{torus}</div>
                    </div>
                  </div>
                  <div className="transactions valign-text-middle white-chakra-petch-medium">{transactions}</div>
                </div>
                <div className="flex-col-12">
                  <div className="flex-row-12">
                    <Link to='/add-payment-method'>
                      <div className="payment-method valign-text-middle white-chakra-petch-medium">
                        {paymentMethod}
                      </div>
                      <div className="overlap-group5-3">
                        <div className="edit valign-text-middle white-chakra-petch-small">{edit}</div>
                        <ArrowForwardIos2 />
                      </div>
                    </Link>
                  </div>
                  <div className="overlap-group6-4">
                    <div className="rectangle-476"></div>
                    <img className="rectangle-477" src="/img/rectangle-477@2x.svg" />
                    <img className="path14" src="/img/path14@2x.svg" />
                    <div className="xxxx-xxxx-xxxx-3456 valign-text-middle">{xxxxXxxxXxxx3456}</div>
                    <div className="mohsin-javed valign-text-middle chakrapetch-semi-bold-white-18px">
                      {mohsinJaved}
                    </div>
                    <div className="debit-card valign-text-middle">{debitCard}</div>
                    <div className="text-3 valign-text-middle chakrapetch-semi-bold-white-18px">{text3}</div>
                    <div className="valid-thru valign-text-middle">{validThru}</div>
                  </div>
                  <div className="flex-row-13">
                    <div className="see-all valign-text-middle white-chakra-petch-small">{seeAll}</div>
                    <ArrowForwardIos2 className={arrowForwardIos2Props.className} />
                  </div>
                </div>
              </div>
              <div className="flex-row-14">
                <div className="place-1 valign-text-middle chakrapetch-normal-silver-16px">{place}</div>
                <div className="transaction-id valign-text-middle chakrapetch-normal-silver-16px">{transactionId}</div>
                <div className="type valign-text-middle chakrapetch-normal-silver-16px">{type}</div>
                <div className="place-2 valign-text-middle chakrapetch-normal-silver-16px">{place2}</div>
                <div className="value valign-text-middle chakrapetch-normal-silver-16px">{value}</div>
                <div className="return valign-text-middle chakrapetch-normal-silver-16px">{xreturn}</div>
                <div className="status valign-text-middle chakrapetch-normal-silver-16px">{status}</div>
              </div>
              <div className="flex-row-15">
                <div className="lucas-amaeta valign-text-middle chakrapetch-medium-white-16px">{lucasAmaeta}</div>
                <div className="x289-2 valign-text-middle chakrapetch-medium-white-16px">{x289}</div>
                <div className="x289-3 valign-text-middle chakrapetch-medium-white-16px">{x2892}</div>
                <div className="x289-4 valign-text-middle chakrapetch-medium-white-16px">{x2893}</div>
                <div className="x289-5 valign-text-middle chakrapetch-medium-white-16px">{x2894}</div>
                <div className="x289 valign-text-middle chakrapetch-medium-white-16px">{x2895}</div>
                <div className="x289-1 valign-text-middle chakrapetch-medium-eucalyptus-16px">{x2896}</div>
              </div>
              <div className="flex-row-16">
                <div className="lucas-amaeta-1 valign-text-middle chakrapetch-medium-white-16px">{lucasAmaeta2}</div>
                <div className="x289-6 valign-text-middle chakrapetch-medium-white-16px">{x2897}</div>
                <div className="x289-7 valign-text-middle chakrapetch-medium-white-16px">{x2898}</div>
                <div className="x289-8 valign-text-middle chakrapetch-medium-white-16px">{x2899}</div>
                <div className="x289-9 valign-text-middle chakrapetch-medium-white-16px">{x28910}</div>
                <div className="x289 valign-text-middle chakrapetch-medium-white-16px">{x28911}</div>
                <div className="x289-1 valign-text-middle chakrapetch-medium-orange-red-14-9px">{x28912}</div>
              </div>
              <div className="flex-row-17">
                <div className="lucas-amaeta-2 valign-text-middle chakrapetch-medium-white-16px">{lucasAmaeta3}</div>
                <div className="x289-10 valign-text-middle chakrapetch-medium-white-16px">{x28913}</div>
                <div className="x289-11 valign-text-middle chakrapetch-medium-white-16px">{x28914}</div>
                <div className="x289-12 valign-text-middle chakrapetch-medium-white-16px">{x28915}</div>
                <div className="x289-13 valign-text-middle chakrapetch-medium-white-16px">{x28916}</div>
                <div className="x289 valign-text-middle chakrapetch-medium-white-16px">{x28917}</div>
                <div className="x289-1 valign-text-middle chakrapetch-medium-bright-turquoise-16px">{x28918}</div>
              </div>
              <div className="flex-row-18">
                <div className="lucas-amaeta-3 valign-text-middle chakrapetch-medium-white-16px">{lucasAmaeta4}</div>
                <div className="x289-14 valign-text-middle chakrapetch-medium-white-16px">{x28919}</div>
                <div className="x289-15 valign-text-middle chakrapetch-medium-white-16px">{x28920}</div>
                <div className="x289-16 valign-text-middle chakrapetch-medium-white-16px">{x28921}</div>
                <div className="x289-17 valign-text-middle chakrapetch-medium-white-16px">{x28922}</div>
                <div className="x289 valign-text-middle chakrapetch-medium-white-16px">{x28923}</div>
                <div className="x289-1 valign-text-middle chakrapetch-medium-eucalyptus-16px">{x28924}</div>
              </div>
            </div>
          </div>
          <div className="surname-1 valign-text-middle white-chakra-petch-paragraph">{surname}</div>
          <img className="profile-pic-1" src={profilePic} />
          <div className="ellipse-40-1 border-1px-neon-blue"></div>
          <div className="ellipse-4 border-4px-neon-blue"></div>
          <div className="ellipse-41-1 border-0-8px-neon-blue"></div>
          <div className="ellipse-4 border-0-5px-neon-blue"></div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
