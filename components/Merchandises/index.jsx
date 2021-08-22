import React from "react";
import Amount from "../Amount";
import Group433 from "../Group433";
import Icon2 from "../Icon2";
import Date from "../Date";
import "./Merchandises.css";

function Merchandises(props) {
  const {
    file_16010748630162,
    file_16010789496712,
    amountProps,
    group433Props,
    dateProps,
    date2Props,
    icon2Props,
    amount2Props,
    group4332Props,
    group4333Props,
  } = props;

  return (
    <div className="merchandises">
      <div className="overlap-group2-14">
        <div className="transaction">
          <div className="background"></div>
          <div className="overlap-group3-8">
            <div className="grid">
              <div className="grid-01">
                <div className="overlap-group4-10">
                  <Amount x289={amountProps.x289} />
                  <Group433
                    lucasAmaeta={group433Props.lucasAmaeta}
                    lucasAmaetaInfoCo={group433Props.lucasAmaetaInfoCo}
                  />
                </div>
                <div className="x289-33 poppins-medium-fuscous-gray-14-9px">Mystery Box</div>
                <div className="x289-34 poppins-medium-fuscous-gray-14-9px">$7,000</div>
                <div className="date">
                  <Icon2 />
                  <div className="sep-12-2019-1 poppins-medium-fuscous-gray-14-9px">SEP 12, 2019</div>
                </div>
              </div>
              <div className="overlap-group9-10">
                <div className="grid-02">
                  <div className="x178 poppins-medium-fuscous-gray-14-9px">Fractions</div>
                  <div className="x178-1 poppins-medium-fuscous-gray-14-9px">$1,500</div>
                  <div className="date-1">
                    <div className="icon-3">
                      <div className="overlap-group4-11">
                        <div className="rectangle-2 border-1-9px-regent-gray"></div>
                        <img className="path-8" src="/img/path-15@2x.svg" />
                        <img className="path-9" src="/img/path-16@2x.svg" />
                        <img className="path-10" src="/img/path-17@2x.svg" />
                      </div>
                    </div>
                    <div className="sep-14-2019 poppins-medium-fuscous-gray-14-9px">SEP 14, 2019</div>
                  </div>
                </div>
                <div className="grid-03">
                  <div className="x380 poppins-medium-fuscous-gray-14-9px">$HXC</div>
                  <div className="x380-1 poppins-medium-fuscous-gray-14-9px">$3,000</div>
                  <Date icon2Props={dateProps.icon2Props} />
                </div>
              </div>
              <div className="overlap-group10-6">
                <div className="grid-04">
                  <div className="overlap-group6-8">
                    <div className="add-image-here"></div>
                    <div className="overlap-group4-12">
                      <div className="cris-hanstrang poppins-medium-azure-radiance-14-9px">Cris Hanstrang</div>
                      <div className="crishanstrang4899in poppins-normal-regent-gray-9-3px">
                        crishanstrang4899@info.com
                      </div>
                    </div>
                    <div className="price-6 poppins-medium-fuscous-gray-14-9px">$330</div>
                    <div className="x330 poppins-medium-fuscous-gray-14-9px">$32.1</div>
                    <Date className={date2Props.className} icon2Props={date2Props.icon2Props} />
                  </div>
                </div>
                <div className="grid-05">
                  <div className="overlap-group7-7">
                    <div className="profile"></div>
                    <div className="overlap-group4-13">
                      <div className="name-14 poppins-medium-azure-radiance-14-9px">Sarah Taylor</div>
                      <div className="sarahtaylor99info poppins-normal-regent-gray-9-3px">sarah.taylor99@info.com</div>
                    </div>
                    <div className="amount">
                      <div className="price-7 poppins-medium-fuscous-gray-14-9px">$289</div>
                      <div className="x289-35 poppins-medium-fuscous-gray-14-9px">$29.6</div>
                    </div>
                    <div className="date-2">
                      <Icon2 className={icon2Props.className} />
                      <div className="sep-17-2019 poppins-medium-fuscous-gray-14-9px">SEP 17, 2019</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-text">
              <div className="flex-row-65">
                <div className="transaction-1 poppins-medium-fuscous-gray-24px">Name</div>
                <div className="transaction-2 poppins-medium-fuscous-gray-24px">Status</div>
                <div className="transaction-3 poppins-medium-fuscous-gray-24px">Method</div>
                <div className="transaction-4 poppins-medium-fuscous-gray-24px">Market Value</div>
                <div className="weekly-dropdown">
                  <div className="overlap-group4-14 border-0-9px-regent-gray-2">
                    <div className="weekly-1 poppins-normal-fuscous-gray-12-1px">Weekly</div>
                    <img className="down-arrow" src="/img/down-arrow@2x.svg" />
                  </div>
                </div>
                <div className="quick-action border-0-9px-regent-gray-2">
                  <img className="combined-shape" src="/img/combined-shape@2x.svg" />
                </div>
              </div>
              <img className="line-2" src="/img/line@1x.svg" />
              <img className="mask-group-3" src="/img/mask-group@2x.png" />
              <div className="overlap-group8-6">
                <div className="mask-group-4"></div>
                <img className="mask-group-5" src="/img/mask-group-5@2x.svg" />
              </div>
              <img className="mask-group-6" src="/img/mask-group-4@2x.svg" />
            </div>
          </div>
        </div>
        <img className="file1601074863016-2-1" src={file_16010748630162} />
        <img className="file1601078949671-2" src={file_16010789496712} />
        <img className="file1601074600362-3-2" src="/img/file-1601074600362-3-1@2x.png" />
        <div className="amount-1">
          <img className="path-11" src="/img/path-27@2x.svg" />
          <div className="x289-36 poppins-medium-fuscous-gray-14-9px">In Inventory</div>
        </div>
        <Amount x289={amount2Props.x289} className={amount2Props.className} />
        <Group433
          lucasAmaeta={group4332Props.lucasAmaeta}
          lucasAmaetaInfoCo={group4332Props.lucasAmaetaInfoCo}
          className={group4332Props.className}
        />
        <Group433
          lucasAmaeta={group4333Props.lucasAmaeta}
          lucasAmaetaInfoCo={group4333Props.lucasAmaetaInfoCo}
          className={group4333Props.className}
        />
      </div>
    </div>
  );
}

export default Merchandises;
