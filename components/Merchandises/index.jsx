import React from "react";
import Amount from "../Amount";
import Group433 from "../Group433";
import Amount2 from "../Amount2";
import Date from "../Date";
import Amount3 from "../Amount3";
import Icon from "../Icon";
import "./Merchandises.css";

function Merchandises(props) {
  const {
    path4,
    maskGroup3,
    file_16010748630162,
    file_16010789496712,
    file_16010746003623,
    amountProps,
    group433Props,
    amount2Props,
    amount22Props,
    dateProps,
    amount3Props,
    amount32Props,
    date2Props,
    iconProps,
    amount2Props2,
    group4332Props,
    group4333Props,
  } = props;

  return (
    <div className="merchandises">
      <div className="overlap-group8-3">
        <div className="transaction">
          <img className="background" src="/img/background@2x.png" />
          <div className="overlap-group7-4">
            <div className="grid">
              <div className="flex-col-56">
                <div className="grid-01">
                  <div className="overlap-group1-16">
                    <Amount icon={amountProps.icon} x289={amountProps.x289} />
                    <Group433
                      lucasAmaeta={group433Props.lucasAmaeta}
                      lucasAmaetaInfoCo={group433Props.lucasAmaetaInfoCo}
                    />
                  </div>
                  <div className="amount">
                    <div className="x289-27 poppins-medium-fuscous-gray-14-9px">Mystery Box</div>
                  </div>
                  <div className="amount-1">
                    <div className="x289-28 poppins-medium-fuscous-gray-14-9px">$7,000</div>
                  </div>
                  <div className="date">
                    <div className="icon">
                      <div className="overlap-group-22">
                        <div className="rectangle border-1-9px-regent-gray"></div>
                        <img className="path" src="/img/path@2x.png" />
                        <img className="path-1" src="/img/path-1@2x.png" />
                        <img className="path-2" src="/img/path-2@2x.png" />
                      </div>
                    </div>
                    <div className="sep-12-2019 poppins-medium-fuscous-gray-14-9px">SEP 12, 2019</div>
                  </div>
                </div>
                <div className="overlap-group-19">
                  <div className="grid-02">
                    <div className="amount-2">
                      <div className="x178 poppins-medium-fuscous-gray-14-9px">Fractions</div>
                    </div>
                    <div className="amount-3">
                      <div className="x178-1 poppins-medium-fuscous-gray-14-9px">$1,500</div>
                    </div>
                    <div className="date-1">
                      <div className="icon-1">
                        <div className="overlap-group-23">
                          <div className="rectangle-1 border-1-9px-regent-gray"></div>
                          <img className="path-3" src={path4} />
                          <img className="path-4" src="/img/path-4@2x.png" />
                          <img className="path-5" src="/img/path-5@2x.png" />
                        </div>
                      </div>
                      <div className="sep-14-2019 poppins-medium-fuscous-gray-14-9px">SEP 14, 2019</div>
                    </div>
                  </div>
                  <div className="grid-03">
                    <Amount2>{amount2Props.children}</Amount2>
                    <Amount2 className={amount22Props.className}>{amount22Props.children}</Amount2>
                    <Date iconProps={dateProps.iconProps} />
                  </div>
                </div>
              </div>
              <div className="overlap-group-19">
                <div className="overlap-group2-16">
                  <div className="add-image-here"></div>
                  <div className="overlap-group1-17">
                    <div className="cris-hanstrang poppins-medium-azure-radiance-14-9px">Cris Hanstrang</div>
                    <div className="crishanstrang4899in poppins-normal-regent-gray-9-3px">
                      crishanstrang4899@info.com
                    </div>
                  </div>
                  <Amount3>{amount3Props.children}</Amount3>
                  <Amount3 className={amount32Props.className}>{amount32Props.children}</Amount3>
                  <Date className={date2Props.className} iconProps={date2Props.iconProps} />
                </div>
                <div className="overlap-group3-15">
                  <div className="profile"></div>
                  <div className="overlap-group1-18">
                    <div className="name-3 poppins-medium-azure-radiance-14-9px">Sarah Taylor</div>
                    <div className="sarahtaylor99info poppins-normal-regent-gray-9-3px">sarah.taylor99@info.com</div>
                  </div>
                  <div className="amount-4 poppins-medium-fuscous-gray-14-9px">
                    <div className="price-9">$289</div>
                    <div className="x289-29">$29.6</div>
                  </div>
                  <div className="date-2">
                    <Icon path2={iconProps.path2} path3={iconProps.path3} />
                    <div className="sep-17-2019 poppins-medium-fuscous-gray-14-9px">SEP 17, 2019</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-text">
              <div className="flex-row-92">
                <div className="transaction-1 poppins-medium-fuscous-gray-24px">Name</div>
                <div className="transaction-2 poppins-medium-fuscous-gray-24px">Status</div>
                <div className="transaction-3 poppins-medium-fuscous-gray-24px">Method</div>
                <div className="transaction-4 poppins-medium-fuscous-gray-24px">Market Value</div>
                <div className="weekly-dropdown">
                  <div className="weekly-dropdown-1">
                    <div className="overlap-group-24 border-0-9px-regent-gray-2">
                      <div className="weekly poppins-normal-fuscous-gray-12-1px">Weekly</div>
                      <img className="down-arrow" src="/img/down-arrow@2x.png" />
                    </div>
                  </div>
                </div>
                <div className="quick-action border-0-9px-regent-gray-2">
                  <img className="combined-shape" src="/img/combined-shape@2x.png" />
                </div>
              </div>
              <img className="line" src="/img/line@1x.png" />
              <img className="mask-group" src="/img/mask-group@2x.png" />
              <div className="overlap-group6-11">
                <div className="mask-group-1"></div>
                <img className="mask-group-2" src="/img/mask-group-2@2x.png" />
              </div>
              <img className="mask-group-3" src={maskGroup3} />
            </div>
          </div>
        </div>
        <img className="file1601074863016-2" src={file_16010748630162} />
        <img className="file1601078949671-2" src={file_16010789496712} />
        <img className="file1601074600362-3-1" src={file_16010746003623} />
        <div className="amount-5">
          <img className="icon-2" src="/img/icon-1@2x.png" />
          <div className="x289-30 poppins-medium-fuscous-gray-14-9px">In Inventory</div>
        </div>
        <Amount icon={amount2Props2.icon} x289={amount2Props2.x289} className={amount2Props2.className} />
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
