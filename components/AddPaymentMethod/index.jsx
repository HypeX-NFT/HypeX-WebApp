import React from "react";
import { useState } from 'react';
import StateDefault2 from "../StateDefault2";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { getPCIPublicKey, createCard } from '../../api/cards';
import { encrypt } from '../../api/openpgp';
import "babel-polyfill";
import "./AddPaymentMethod.css";

function AddPaymentMethod(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    addCard,
    manageCards,
    title,
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
    submit
  } = props;

  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [cardNum, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [CVV, setCvv] = useState("");

  async function makeApiCall() {
    const expiryParsed = expiry.split('/')
    const billingDetails = {
      city: 'Irvine',
      country: 'US',
      district: 'CA',
      line1: address,
      line2: "",
      name: name,
      postalCode: "92620"
    }
    console.log(billingDetails)
    const phoneNumber = "+19999999999"
    const payload = {
      idempotencyKey: uuidv4(),
      expMonth: parseInt(expiryParsed[0]),
      expYear: parseInt(expiryParsed[1]),
      keyId: '',
      encryptedData: '',
      billingDetails,
      metadata: {
        contact,
        phoneNumber,
        sessionId: 'xxx',
        ipAddress: '172.33.222.1',
      },
    }

    const cardDetails = {
      number: cardNum.trim().replace(/\D/g, ''),
      CVV,
    }

    console.log(payload)
    console.log(cardDetails)

    try {
      const publicKey = await getPCIPublicKey()
      const encryptedData = await encrypt(cardDetails, publicKey)
      const { encryptedMessage, keyId } = encryptedData

      payload.keyId = keyId
      payload.encryptedData = encryptedMessage

      const card = await createCard(payload)
      setLoading(false)
      // if (card) {
      //   this.$store.dispatch('setCard', {
      //     id: card.id,
      //   })
      // }
      // this.$emit('success', card)
    } catch (error) {
      console.log('error during add card')
    } finally {
      setLoading(false)
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
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
          <Link to="/edit-payment-method">
            <div className="flex-row-49">
                <div className="my-fragments-2 valign-text-middle">
                {manageCards}
                </div>
            </div>
          </Link>
          <div className="overlap-group18-1">
            <div className="settings-2 valign-text-middle">{addCard}</div>
            <div className="rectangle-263-2"></div>
          </div>
        </div>
        <div className="flex-col-37">
          <div className="s-etting valign-text-middle">{title}</div>
          <div className="overlap-group20-2">
            <div className="overlap-group-13">
                <input 
                    className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                    type="tel"
                    placeholder={cardHolderName}
                    onChange={e => setName(e.target.value)}>
                </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.name}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-12">
            <div className="overlap-group-13">
                <input 
                    className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                    type="tel"
                    placeholder={enterAddress}
                    onChange={e => setAddress(e.target.value)}>
                </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.address}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-11">
            <div className="overlap-group-13">
              <input 
                  className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                  type="tel"
                  placeholder={email}
                  onChange={e => setContact(e.target.value)}>
              </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault24Props.children}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-11">
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
          </div>
        </div>
        <div className="flex-col-38">
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
          <div className="overlap-group21-1">
            <div className="overlap-group-13">
                <input 
                    className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                    type="tel"
                    placeholder={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}>
                </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.cardNumber}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group22-1">
            <div className="overlap-group-13">
            <input 
                className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                type="tel"
                placeholder={expiryDate}
                onChange={e => setExpiry(e.target.value)}>
            </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.expiry}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-12">
          <div className="overlap-group-13">
            <input 
                className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                type="tel"
                placeholder={cvv}
                onChange={e => setCvv(e.target.value)}>
            </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.cvv}</StateDefault2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default AddPaymentMethod;
