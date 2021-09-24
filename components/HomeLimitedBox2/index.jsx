import React from "react";
import { Link } from "react-router-dom";
import "./HomeLimitedBox2.css";

function HomeLimitedBox2(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    stake,
    fragmentFactory,
    nftMoorph,
    nftForge,
    loan,
    profilePic,
    shopping_Bag,
    bannerVersion21,
    bannerVersion41,
    limitedBox,
    nftCards,
    line79,
    picture11,
    drop0Series1,
    x30100Left,
    wechatImage_202109131624261,
    rectangle481,
    unbox,
    rectangle482,
    price,
    picture12,
    x0100Left,
    drop0Series0,
    wechatImage_202109131624262,
    soldOut,
    rectangle483,
    unbox2,
    rectangle484,
    price2,
  } = props;

  const cards = ['https://bafybeiezxo35lnxg2fsczcifs7ii6gr27s25ikjqjf7k7ph24u5qu2ypry.ipfs.dweb.link/',
  'https://bafybeiaja2tgdskwzthuspedplomjtmkezsqq2q6s3s5f2celkw3bjruim.ipfs.dweb.link/',
  'https://bafybeiddmvstlg44zy3f75ddf4tqhp3ebtai75ch4uolqffut6nacydzyu.ipfs.dweb.link/',
  'https://bafybeibpjbfy4q3xfgmw4rlfxk7wlwi7u73krzqdgktjokabkxukdsq6ju.ipfs.dweb.link/',
  'https://bafybeifhxd3l4aalaqsatixjmbxir2mglj5lfm2homs6yz425uf6cyap3i.ipfs.dweb.link/',
  'https://bafybeiebyuylwsnsbbqctef2z26qh7l7pjaf3ozprn7yovzzdpoeflwmu4.ipfs.dweb.link/',
  'https://bafybeia6kuqx6tqm7tqjuh4thmdx2ojoe3u34eswkqmkeqoywue4sa2tbi.ipfs.dweb.link/',
  'https://bafybeigwtdaiwfioxmjlh3o45llhqwmdkeex5rps75mniory3ezjaqhvaq.ipfs.dweb.link/',
  'https://bafybeiewn3dyefla2ua5f3ejnou5um3ieusqu6vnqmdy4qvhq3wtkzgcmq.ipfs.dweb.link/',
  'https://bafybeih5fafaddk6qehvx6sjlsrww4y7iju36qj6uq6mssmnyj636z4qwa.ipfs.dweb.link/',
  'https://bafybeihvkowne5qzmmmc2l7bezhyzc5bj2wu4dygeiyst6taoq3vw45u6y.ipfs.dweb.link/',
  'https://bafybeihcsswourypysgejxu3z6hzre4drqk2xs6o4zqpk2npg7xg6xozzu.ipfs.dweb.link/',
  'https://bafybeiadz533untts3anto7u64a5slb455fzwnh5gojxownhfp3vdlbh5m.ipfs.dweb.link/',
  'https://bafybeifdjgwamhnbv7myq3jed4jqwg65mbhkrrgh2dtcgb6l6ddn66z4xy.ipfs.dweb.link/',
  'https://bafybeiebx6cxc6p3m6gkmw73idj2gbbwdihhapjk6gzqz4smriokxxed2m.ipfs.dweb.link/',
  'https://bafybeifiavqi3mbkazen6mivgpslz4xnhof2x7siyuylhpxhc4oc3rmkou.ipfs.dweb.link/',
  'https://bafybeifpjipvg5mvzrcmdutgjhxhiom5r4t3iqyzqm2glx7p2vr56bimla.ipfs.dweb.link/',
  'https://bafybeifvvzzynf4gk2fvjg4xbw5fhnr3gtuykqyzz3ienybj73gnsl2mom.ipfs.dweb.link/',
  'https://bafybeib4jmiwglrjdl43ejav3qll4skhzy4c462ynvveeanz37w65klugq.ipfs.dweb.link/',
  'https://bafybeibzorgyfcckndvbdmuc6aho4rlum5lcmbied27ftvt7ezcac2dq6a.ipfs.dweb.link/',
  'https://bafybeigitx55azvizp3xqxy2ekpnn5s6o3xc4zkxxtf2zazgsjtorrmfce.ipfs.dweb.link/',
  'https://bafybeibygq4wo26432eyymfb77p6chdfecu3nrviaba6gwakblorieflwm.ipfs.dweb.link/',
  'https://bafybeibq7uy7jxabrqoylahstcwdpalibiemanfebkeywtyzft3mitldaa.ipfs.dweb.link/',
  'https://bafybeicbdddsndziycnhwwvix6cv4c5kkwcjh4fa7bfyugkcar52fp6xiu.ipfs.dweb.link/',
  'https://bafybeiejzdhrtwex4udbplsls5vvdqu47ncnrfjknmyevn45wdwqbkhnha.ipfs.dweb.link/',
  'https://bafybeigul4kf5v7krklew254z6c5daucqs6rcqkmuvpipubyzbx23nyusu.ipfs.dweb.link/',
  'https://bafybeibzglzxx32jlktm5lijixyx252c7ya35pk4m5rgwsr6dnj2awspye.ipfs.dweb.link/',
  'https://bafybeie4vt5g4qqevw2cfm4473sodakeff747ny4tqfdbbqjpeivvahuae.ipfs.dweb.link/',
  'https://bafybeibmled2wsxwqheuxe3yq4ma2vkfyxfu4m7f4abqusrikmumxzexii.ipfs.dweb.link/',
  'https://bafybeibdjvf4pqs5ppjkp4cnxym6bu3u4tne5slhnbaw6torifk3h54qd4.ipfs.dweb.link/',
  'https://bafybeifx4euomwlg4p4rjcmhqi3dkcjcadhopt6yaiith7fivafyhymnoa.ipfs.dweb.link/',
  'https://bafybeibdpyjsai6y2gofo7fu7ivwq6nunyhtv77pmb4m67owldihgwm56q.ipfs.dweb.link/',
  'https://bafybeiau23vu6v6tfs6evcf3vjyub4fg52p34rgy2dwv3ydhjajtkrx234.ipfs.dweb.link/',
  'https://bafybeiabkr3dmxgkptnezlyuhk6mgnxxjqaixmzmxawiarwmrrefzhvfsi.ipfs.dweb.link/',
  'https://bafybeihrkewhvslf6pjt4icgewhjgc4ctjdvl5hbjg43cthtxzqf5skn6y.ipfs.dweb.link/',
  'https://bafybeie6lnaq2qpma7fdf4bzvu6seypnmgdr25giwfxbd7wbh45apvlqh4.ipfs.dweb.link/',
  'https://bafybeibp7xgydenmrz5bzygi7rgug7e4qiwjky5muzvhn6u3uhl63vmzzu.ipfs.dweb.link/',
  'https://bafybeia2xaz76bvcco2cttikq7b6rvj7utuorn3c345pamqwhwmu6yzk3m.ipfs.dweb.link/',
  ]
  var card = cards[Math.floor(Math.random() * cards.length)]


  return (
    <div className="container-center-horizontal">
      <div className="home-limited-box screen">
        <div className="flex-row-47">
          <div className="overlap-group6-9 chakrapetch-normal-white-25px">
            <img className="hypexlogoedited-removebg-1-4" src={hype_X_Logo_EditedRemovebg1} />
            <Link to="/stake-info-page">
              <div className="stake-4 valign-text-middle chakrapetch-normal-white-25px">{stake}</div>
            </Link>
            <Link to="/fragment-factory">
              <div className="fragment-factory-6 valign-text-middle chakrapetch-normal-white-25px">{fragmentFactory}</div>
            </Link>
            <Link to="/morph-page">
              <div className="nft-moorph-4 valign-text-middle chakrapetch-normal-white-25px">{nftMoorph}</div>
            </Link>
            <Link to="/forge-page">
              <div className="nft-forge-4 valign-text-middle chakrapetch-normal-white-25px">{nftForge}</div>
            </Link>
          </div>
          <Link to="/loan">
            <div className="loan-4 valign-text-middle chakrapetch-normal-white-25px">{loan}</div>
          </Link>
          <Link to="/my-box">
          <div className="overlap-group4-11">
            <img className="profile-pic-11" src={profilePic} />
            <div className="ellipse-40-4 border-1px-neon-blue"></div>
            <div className="ellipse-42-4 border-4px-neon-blue"></div>
            <div className="ellipse-41-4 border-0-8px-neon-blue"></div>
            <a href="javascript:ShowOverlay('profile-dropdown', 'animate-appear');">
              <div className="ellipse-43-4 border-0-5px-neon-blue"></div>
            </a>
          </div>
          </Link>
          <img className="shoppingbag-4" src={shopping_Bag} />
        </div>
        <div className="flex-col-25">
          <div className="overlap-group7-2">
            <img className="banner-version-2-1-1" src={bannerVersion21} />
            <div className="ellipse-36-1"></div>
            <div className="ellipse-37-1"></div>
            <div className="ellipse-38-1"></div>
            <img className="banner-version-4-1-1" src={bannerVersion41} />
          </div>
          <div className="overlap-group5-10">
            <div className="limited-box-1 valign-text-middle chakrapetch-bold-white-36px">{limitedBox}</div>
            <div className="nft-cards-1 valign-text-middle chakrapetch-bold-gun-powder-36px">{nftCards}</div>
            <div className="box-trigger-1"></div>
            <Link to='/home-limited-box2'>
              <div className="merchandise-trigger-1"></div>
            </Link>
            <img className="line-79-1" src={line79} />
          </div>
          <div className="flex-row-48">
            <div className="group-472-1">
              <img className="picture1-1-1" src={picture11} />
              <p className="drop-0-series-1-1 valign-text-middle chakrapetch-bold-mist-gray-16px">{drop0Series1}</p>
              <div className="x30100-l-eft-1 valign-text-middle chakrapetch-bold-mist-gray-16px">{x30100Left}</div>
              <img className="we-chat-image20210913162426-1-1" src={wechatImage_202109131624261} />
              <div className="overlap-group-11">
                <img className="rectangle-48-2" src={rectangle481} />
                <a href = {card}>
                  <div className="unbox-1 valign-text-middle chakrapetch-semi-bold-white-28px">{unbox}</div>
                </a>
                <img className="rectangle-48-3" src={rectangle482} />
                <div className="price-1 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price}</div>
              </div>
            </div>
            <div className="group-471-1">
              <img className="picture1-2-1" src={picture12} />
              <div className="overlap-group2-11 chakrapetch-bold-mist-gray-16px">
                <div className="x0100-l-eft-1 valign-text-middle">{x0100Left}</div>
                <p className="drop-0-series-0-1 valign-text-middle">{drop0Series0}</p>
              </div>
              <div className="overlap-group3-11">
                <img className="we-chat-image20210913162426-2-1" src={wechatImage_202109131624262} />
                <div className="rectangle-485-1"></div>
                <div className="sold-out valign-text-middle chakrapetch-bold-black-60px">{soldOut}</div>
              </div>
              <div className="overlap-group1-11">
                <img className="rectangle-48-2" src={rectangle483} />
                <div className="unbox-1 valign-text-middle chakrapetch-semi-bold-white-28px">{unbox2}</div>
                <img className="rectangle-48-3" src={rectangle484} />
                <div className="price-1 valign-text-middle chakrapetch-semi-bold-magenta--fuchsia-28px">{price2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLimitedBox2;
