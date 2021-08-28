import React from "react";
import { useState, useEffect } from 'react';
import StateDefault2 from "../StateDefault2";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import cards from '../../api/cards';
import openpgp from '../../api/openpgp';
import "babel-polyfill";
import Select from 'react-select';
import "./AddPaymentMethod.css";

function AddPaymentMethod(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    addCard,
    titleAddCard,
    titlePickCard,
    enterAddress,
    profilePic,
    surname,
    cardNumber,
    stateDefault24Props,
    addCardDataProps,
    expiryDate,
    cvv,
    cardHolderName,
    email,
    selectCard,
    submit,
    saveCardSelection,
    storedCards,
    pickCard,
    changeCardFunc,
  } = props;

  const [successful, setSuccessful] = useState(false)
  const [storedCardsLocal, setStoredCardsLocal] = useState([])
  const [availableCards, setAvailableCards] = useState([])
  const [showTitle, setShowTitle] = useState(titleAddCard)

  useEffect(() => {
    const formatted = []
    storedCards.forEach(function (item, index) {
      formatted.push({label: item.last4, value: index})
    });
    setAvailableCards(formatted)
  }, [storedCardsLocal]);

  useEffect(() => {
    if (successful) {
      setShowTitle(titlePickCard)
    } else {
      setShowTitle(titleAddCard)
    }
  }, [successful]);

  const [loading, setLoading] = useState(false)
  const [loadingPart1, setLoadingPart1] = useState(false)
  const [loadingPart2, setLoadingPart2] = useState(false)
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("1 Light");
  const [contact, setContact] = useState("johndoe@gmail.com");
  const [cardNum, setCardNumber] = useState("4007400000003456");
  const [expiry, setExpiry] = useState("05/2024");
  const [CVV, setCvv] = useState("666");
  const [selectedCard, setSelectedCard] = useState()

  async function makeApiCall() {
    const expiryParsed = expiry.split('/')
    const billingDetails = {
      city: 'City of Light',
      country: 'US',
      district: 'CA',
      line1: address,
      line2: "2 Light",
      name: name,
      postalCode: "99999"
    }
    const phoneNumber = "+19999999999"
    const payload = {
      idempotencyKey: uuidv4(),
      expMonth: parseInt(expiryParsed[0]),
      expYear: parseInt(expiryParsed[1]),
      keyId: '',
      encryptedData: '',
      billingDetails,
      metadata: {
        email: contact,
        phoneNumber,
        sessionId: 'xxx',
        ipAddress: '172.33.222.1',
      },
    }

    const cardDetails = {
      number: cardNum.trim().replace(/\D/g, ''),
      cvv: CVV,
    }

    try {
      const pciPublicKey = await cards.getPCIPublicKey()
      const publicKey = pciPublicKey['data']['data']
      const encryptedData = await openpgp.encrypt(cardDetails, publicKey)
      const { encryptedMessage, keyId } = encryptedData

      payload.keyId = keyId
      payload.encryptedData = encryptedMessage

      const card = await cards.createCard(payload)
      const cardInfo = card['data']['data']
      const cardId = cardInfo.id
      const cardLast4 = cardInfo.last4
      if (cardId) {
        const cardToAdd = {id: cardId, last4: cardLast4, cvvRequired: false};
        storedCards.push(cardToAdd);
        setStoredCardsLocal(storedCardsLocal => [...storedCardsLocal, cardToAdd]);
        console.log(cardToAdd)
      }
    } catch (error) {
      console.log('error during add card')
    } finally {
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(1000);
      setLoadingPart1(false)
      setLoadingPart2(true)
      await delay(4000)
      setLoadingPart2(false)
      setLoading(false);
      setSuccessful(true);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    setLoadingPart1(true)
    makeApiCall()
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="container-center-horizontal">
      <div className="setting screen">
        <div className="overlap-group4-8">
          <Link to="/home-limited-box">
           <img className="hypexlogoedited-removebg-1-6" src={hype_X_Logo_EditedRemovebg1} />
          </Link>
          {!successful && (<div className="overlap-group18-1">
            <div className="settings-2 valign-text-middle">{addCard}</div>
            <div className="rectangle-263-2"></div>
          </div>)}
          {successful && (<div className="flex-row-49" onClick={e => setSuccessful(false)}>
            <div className="my-fragments-2 valign-text-middle">{addCard}</div>
          </div>)}
          
          {!successful && (<div className="flex-row-49" onClick={e => {if (!loading) {setSuccessful(true)}}}>
            <div className="my-fragments-2 valign-text-middle">{pickCard}</div>
          </div>)}
          {successful && (<div className="overlap-group18-1">
            <div className="settings-2 valign-text-middle">{pickCard}</div>
            <div className="rectangle-263-2"></div>
          </div>)}
        </div>
        {loading && loadingPart1 && (<div className="loading">{"Processing. Please wait."}</div>)}
        {loading && loadingPart2 && (<div className="loading">{"You will be redirected to choose a card once this process is successful."}</div>)}
        {!loading && (<div className="flex-col-37">
          {!loading && (<div className="s-etting valign-text-middle">{showTitle}</div>)}
          {!successful && (<div className="overlap-group20-2">
            <div className="overlap-group-13">
                <input 
                    className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                    type="tel"
                    placeholder={cardHolderName}
                    value={name}
                    onChange={e => setName(e.target.value)}>
                </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.name}</StateDefault2>
            </div>
          </div>)}
          {successful && (<div><div className="overlap-group20-2">
            <div className="overlap-group-13">
              <Select
                className="select-cards"
                options={availableCards} 
                onChange={(selected) => {setSelectedCard(selected)}}/>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{selectCard}</StateDefault2>
            </div>
          </div>
          <button 
            className="overlap-group8-2 button"
            onClick={changeCardFunc(selectedCard)}
            disabled={loading}>
          <img className="line-72-1" src="/img/line-72-1@2x.svg" />
          <img className="line-73-1" src="/img/line-73-1@2x.svg" />
          <img className="union-1" src="/img/union-13@2x.svg" />
          <img className="line-70-1" src="/img/line-70-1@2x.svg" />
          <img className="line-71-1" src="/img/line-71-1@2x.svg" />
          <div className="submit valign-text-middle">
            {saveCardSelection}
          </div>
        </button></div>)}
          {!successful && (<div className="overlap-group2-12">
            <div className="overlap-group-13">
                <input 
                    className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                    type="tel"
                    placeholder={enterAddress}
                    value={address}
                    onChange={e => setAddress(e.target.value)}>
                </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.address}</StateDefault2>
            </div>
          </div>)}
          {!successful && (<div className="overlap-group2-11">
            <div className="overlap-group-13">
              <input 
                  className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                  type="tel"
                  placeholder={email}
                  value={contact}
                  onChange={e => setContact(e.target.value)}>
              </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault24Props.children}</StateDefault2>
            </div>
          </div>)}
          {!successful && (<div className="overlap-group2-11">
            <div className="group-461">
              <button className="overlap-group8-2 button" type="submit" disabled={loading}>
                <img className="line-72-1" src="/img/line-72-1@2x.svg" />
                <img className="line-73-1" src="/img/line-73-1@2x.svg" />
                <img className="union-1" src="/img/union-13@2x.svg" />
                <img className="line-70-1" src="/img/line-70-1@2x.svg" />
                <img className="line-71-1" src="/img/line-71-1@2x.svg" />
                <div className="submit valign-text-middle">
                  {submit}
                </div>
              </button>
            </div>
          </div>)}
        </div>)}
        {!loading && (<div className="flex-col-38">
          <Link to="/wallet">
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
          </Link>
          {!successful && (<div className="overlap-group21-1">
            <div className="overlap-group-13">
                <input 
                    className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                    type="tel"
                    placeholder={cardNumber}
                    value={cardNum}
                    onChange={e => setCardNumber(e.target.value)}>
                </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.cardNumber}</StateDefault2>
            </div>
          </div>)}
          {!successful && (<div className="overlap-group22-1">
            <div className="overlap-group-13">
            <input 
                className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                type="tel"
                placeholder={expiryDate}
                value={expiry}
                onChange={e => setExpiry(e.target.value)}>
            </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.expiry}</StateDefault2>
            </div>
          </div>)}
          {!successful && (<div className="overlap-group2-12">
            <div className="overlap-group-13">
              <input 
                  className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                  type="tel"
                  placeholder={cvv}
                  value={CVV}
                  onChange={e => setCvv(e.target.value)}>
              </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.cvv}</StateDefault2>
            </div>
          </div>)}
        </div>)}
      </div>
    </div>
    </form>
  );
}

export default AddPaymentMethod;
