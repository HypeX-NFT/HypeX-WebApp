import React from "react";
import "./ShoppingBag.css";

function ShoppingBag(props) {
  const { className } = props;

  return (
    <div className={`shoppingbag ${className || ""}`}>
      <div className="overlap-group31">
        <img className="vector" src="/img/vector@2x.png" />
        <img className="vector-1" src="/img/vector-11@2x.svg" />
      </div>
    </div>
  );
}

export default ShoppingBag;
