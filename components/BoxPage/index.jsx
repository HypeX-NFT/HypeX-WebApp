import React, { useState, useRef, useEffect }  from "react";
import Close from "../Close";
import { Link } from "react-router-dom";
import ShoppingBag from "../ShoppingBag";
import "./BoxPage.css";
import regeneratorRuntime from "regenerator-runtime";
// import fs from 'fs'
// import * as fs from 'fs';
import * as path from 'path';
import { NFTStorage, File } from 'nft.storage';
// https://ipfs-shipyard.github.io/nft.storage/client/
import { Contract, providers } from "ethers";
// import path from 'path';
import axios from 'axios';
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

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
    text69, 
    open, 
    closeProps,
    balance,
    updateBalance,
  } = props;

  async function store() {
    const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYzRkFiYjc1MTU4NmZkQmIzQzQ0N2ZmYmI3NDAxOTdmNzAwNTREZDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyOTY1MDg0NTU2MCwibmFtZSI6Ikh5cGVYIn0.mFmSn8T1D0qPhDTARx1h8HypjjEY07nZbDM11xJqEGE" })
    const fs = require('fs');
    console.log("path")
    console.log(path.join(__dirname, '../../cards/card1.jpg'))
    const metadata = await client.store({
      name: 'Card 1',
      description: 'card 1!',
      // img.src = 'https://raw.githubusercontent.com/HypeX-NFT/Web-App/hugo/implement-rarible/cards/card1.png'
      // image: new File([await fs.promises.readFile(path.join(__dirname, '../../cards/card1.jpg'))],
      // image: new File([fs.readFileSync(path.join(__dirname, '../../cards/card1.jpg'))],
      image: new File([fs.readFileSync(path.join(__dirname, '../../cards/card1.jpg'))],
        'card1.jpg',
        { type: 'image/jpg' }
      ),
    })
    console.log(metadata.url)
  }

  const web3Modal = new Web3Modal({
    // network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "INFURA_ID",
        },
      },
    },
  });

  
  async function mintNow(uri) {
    const contractAddress = "0x6ede7f3c26975aad32a475e1021d8f6f39c89d82"

    // Get a token id
    const instance = axios.create({
      baseURL: "https://api-dev.rarible.com",
    })

    function getTokenId() {
      const url = "/protocol/v0.1/ethereum/nft/collections/" + contractAddress + "/generate_token_id?minter=" + contractAddress;
      return instance.get(url)
    }
    const payload = await getTokenId();
    const tokenId = payload.data.tokenId
    console.log(tokenId)

    // Instantiate the contract
    const provider = new providers.Web3Provider(await web3Modal.connect());
    const signer = provider.getSigner();
    const contract = new Contract(contractAddress, "abi", signer);

    // Call the function
    const tx = await contract.mintAndTransfer(
      [
        tokenId.tokenId,
        uri,
        [[creator, 5000], [creator2, 5000]], // You can assign one or add multiple creators, but the value must total 10000
        [[creator, 1000], [creator2, 1000]], // Royalties are set as basis point, so 1000 = 10%. 
        ["0x"]
      ],
      "minter",
    );

    const receipt = await tx.wait();
    console.log('Minting Success', receipt);
  }

  async function purchasedClicked() {
    console.log("start storage")
    // const uri = await store()
    console.log("after storage")
    setDisplay(true)
    console.log(display)
    console.log(balance)
    const newBalance = parseInt(balance) - 29.99
    console.log(newBalance)
    updateBalance(newBalance)
    // mintNow(uri)
  }

  const [display, setDisplay] = useState(false);
  const background = {opacity: 0.3}

  // useEffect(() => {
  //   if (!display) {
  //     background.current = "dimmed-box-page"
  //   } else {
  //     background.current = "box-page"
  //   }
  // }, [display])

  return (
    <div className="container-center-horizontal">
      <div className="box-page">
        <div className="flex-col-108">
          <div className="overlap-group5-21">
            <div className="overlap-group1-31">
              <img className="offcl-boxsupreme2-1-1" src={offcl_Box_Supreme_21} />
              <img className="profile-pic-24" src={profilePic} />
              <div className="ellipse-40-18 border-1px-neon-blue"></div>
              <div className="ellipse-42-12 border-4px-neon-blue"></div>
              <div className="ellipse-41-18 border-0-8px-neon-blue"></div>
              <Link to="/wallet">
                <a href="javascript:ShowOverlay('profile-dropdown-5', 'animate-appear');">
                  <div className="ellipse-43-12 border-0-5px-neon-blue"></div>
                </a>
              </Link>
              <img className="rectangle-454-4" src="/img/rectangle-454-4@1x.svg" />
              <img className="offcl-boxsupreme2-2-1" src={offcl_Box_Supreme_22} />
              <img className="bandana" src={bandana} />
              <div className="lv-x-supreme-badana valign-text-middle white-chakra-petch-paragraph">
                {lvXSupremeBadana}
              </div>
              <div className="text-76 valign-text-middle white-chakra-petch-paragraph">{text76}</div>
              <img className="tnf-hoodie" src={tnfHoodie} />
              <img className="box-logo" src={boxLogo} />
              <div className="text-77 valign-text-middle white-chakra-petch-paragraph">{text77}</div>
              <ShoppingBag className={shoppingBagProps.className} />
              <Link to="/loan"> {/* Link to Loan */}
                <div className="loan-14 valign-text-middle white-chakra-petch">{loan}</div>
              </Link>
              <Link to="/display-nfts"> {/* Link to Display NFTs */}
                <div className="display-nf-ts-12 valign-text-middle white-chakra-petch">{displayNfts}</div>
              </Link>
            </div>
            
            {display &&
            (<div className="container-center-horizontal-boxpurchasing">
              <div className="box-purchasing screen" onClick={() => setDisplay(false)}>
                <div className="overlap-group-40">
                  <img className="line-75-6" src="/img/line-77-3@2x.svg" />
                  <img className="line-76-6" src="/img/line-78-3@2x.svg" />
                </div>
                <div className="flex-col-105">
                  {/* Congratulations */}
                  <div className="text-69 white-chakra-petch-big">{text69}</div>
                  {/* Supreme */}
                  <img className="image-6-2" src={image62} />
                  <div className="overlap-group1-29">
                    {/* Value Box */}
                    <img className="image-7-1" src={image71}/>
                    {/* Box Image */}
                    <img className="offcl-boxsupreme2-1" src={"/img/official_box.png"} /> 
                  </div>
                  <div className="overlap-group2-34">
                    <a href = "https://bafybeickrplmt2y64twwipxjzajpigx52vtzz5mn4hwmwficevip6xsgly.ipfs.dweb.link/">
                    <div className="open-3 valign-text-middle white-chakra-petch-medium" >{open}</div>
                    </a>
                  </div>
                </div>
                <Close className={closeProps.className} />
              </div>
            </div>)}


            <div className="flex-col-109">
              <div className="overlap-group-42">
                {/* <Link to="/box-purchasing"> */}
                  <img className="union-34" src="/img/union-64@2x.svg" onClick={ purchasedClicked }/>
                {/* </Link> */}
                <img className="line-70-8" src="/img/line-70-9@2x.svg" />
                <img className="line-71-8" src="/img/line-71-9@2x.svg" />
                <img className="line-72-8" src="/img/line-72-9@2x.svg" />
                <img className="line-73-8" src="/img/line-73-9@2x.svg" />
                <div className="place-14 valign-text-middle chakrapetch-medium-bright-turquoise-24-4px" onClick={ purchasedClicked }>{place}</div>
              </div>
              <div className="flex-row-153">
                <div className="flex-col-110">
                  <div className="items-in-the-box valign-text-middle white-chakra-petch-medium">{itemsInTheBox}</div>
                  <img className="line-106" src="/img/line-106@2x.svg" />
                  <div className="text-74 valign-text-middle white-chakra-petch-paragraph">{text74}</div>
                  <Link to="/merchandise-page">
                    <img className="lv-card-holder" src={lvCardholder} />
                  </Link>
                </div>
                <div className="flex-col-111">
                  <div className="text-75 valign-text-middle white-chakra-petch-paragraph">{text75}</div>
                  <img className="tnf-jacket" src={tnfJacket} />
                </div>
              </div>
            </div>
            <div className="text-82 white-chakra-petch-paragraph">{text82}</div>
            <div className="flex-col-112">
              <div className="flex-row-154">
                <div className="overlap-group3-29">
                  <Link to="/home-limited-box">
                    <img className="hypexlogoedited-removebg-1-18" src={hype_X_Logo_EditedRemovebg1} />
                  </Link>
                  <Link to="/fragment-factory">
                    <div className="fragment-factory-14 valign-text-middle white-chakra-petch">
                      {fragmentFactory} {/*Link to Fragment Factory*/}
                    </div>
                  </Link>
                </div>
                <Link to="/stake-info-page">
                  <div className="stake-14 valign-text-middle white-chakra-petch">{stake}</div>
                  {/*Link to Stake*/}
                </Link>
              </div>
              <div className="overlap-group2-36">
                <img className="image-62-1" src={image62} />
                <img className="image-7-1-1" src={image71} />
              </div>
            </div>
          </div>
          <div className="flex-row-155">
            <div className="price-19 valign-text-middle white-chakra-petch-paragraph">{price}</div>
            <div className="price-20 valign-text-middle white-chakra-petch-paragraph">{price2}</div>
            <div className="price-21 valign-text-middle white-chakra-petch-paragraph">{price3}</div>
            <div className="price-22 valign-text-middle white-chakra-petch-paragraph">{price4}</div>
            <div className="price-23 valign-text-middle white-chakra-petch-paragraph">{price5}</div>
          </div>
          <div className="flex-row-156">
            <div className="probability-012 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 white-chakra-petch-small">{spanText}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText2}</span>
              </span>
            </div>
            <div className="probability-1 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 white-chakra-petch-small">{spanText3}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText4}</span>
              </span>
            </div>
            <div className="probability-089 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 white-chakra-petch-small">{spanText5}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText6}</span>
              </span>
            </div>
            <div className="probability-139 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 white-chakra-petch-small">{spanText7}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText8}</span>
              </span>
            </div>
            <div className="probability-019 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 white-chakra-petch-small">{spanText9}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText10}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-row-157">
          <div className="flex-col-113">
            <div className="text-78 valign-text-middle white-chakra-petch-paragraph">{text78}</div>
            <img className="image-69-1" src={image69} />
            <div className="price-24 valign-text-middle white-chakra-petch-paragraph">{price6}</div>
            <div className="probability-451 valign-text-middle chakrapetch-bold-white-18px">
              <span>
                <span className="span-12 white-chakra-petch-small">{spanText11}</span>
                <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText12}</span>
              </span>
            </div>
          </div>
          <div className="flex-col-114">
            <div className="flex-row-158">
              <div className="text-79 valign-text-middle white-chakra-petch-paragraph">{text79}</div>
              <div className="text-80 valign-text-middle white-chakra-petch-paragraph">{text80}</div>
              <div className="text-81 valign-text-middle white-chakra-petch-paragraph">{text81}</div>
              <div className="supreme-backpack valign-text-middle white-chakra-petch-paragraph">
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
              <div className="price-25 valign-text-middle white-chakra-petch-paragraph">{price7}</div>
              <div className="price-26 valign-text-middle white-chakra-petch-paragraph">{price8}</div>
              <div className="price-27 valign-text-middle white-chakra-petch-paragraph">{price9}</div>
              <div className="price-28 valign-text-middle white-chakra-petch-paragraph">{price10}</div>
            </div>
            <div className="flex-row-161">
              <div className="probability-091 valign-text-middle chakrapetch-bold-white-18px">
                <span>
                  <span className="span-12 white-chakra-petch-small">{spanText13}</span>
                  <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText14}</span>
                </span>
              </div>
              <div className="probability-242 valign-text-middle chakrapetch-bold-white-18px">
                <span>
                  <span className="span-12 white-chakra-petch-small">{spanText15}</span>
                  <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText16}</span>
                </span>
              </div>
              <div className="probability-315 valign-text-middle chakrapetch-bold-white-18px">
                <span>
                  <span className="span-12 white-chakra-petch-small">{spanText17}</span>
                  <span className="span-12 chakrapetch-bold-bright-turquoise-18px">{spanText18}</span>
                </span>
              </div>
              <div className="probability-419 valign-text-middle chakrapetch-bold-white-18px">
                <span>
                  <span className="span-12 white-chakra-petch-small">{spanText19}</span>
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
