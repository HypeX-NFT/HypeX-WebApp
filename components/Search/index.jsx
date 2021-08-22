import React from "react";
import "./Search.css";

function Search(props) {
  const { className } = props;

  return (
    <div className={`search ${className || ""}`}>
      <div className="overlap-group6-2">
        <img className="vector-30" src="/img/vector@2x.png" />
        <img className="vector-31" src="/img/vector-1@2x.svg" />
      </div>
    </div>
  );
}

export default Search;
