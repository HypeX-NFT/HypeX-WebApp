import React from "react";
import "./AccountBalanceWallet.css";

function AccountBalanceWallet(props) {
  const { className } = props;

  return (
    <div className={`accountbalancewallet ${className || ""}`}>
      <div className="overlap-group3-2">
        <img className="vector-54" src="/img/vector@2x.png" />
        <img className="vector-55" src="/img/vector-16@2x.svg" />
        <img className="vector-56" src="/img/vector-17@2x.svg" />
      </div>
    </div>
  );
}

export default AccountBalanceWallet;
