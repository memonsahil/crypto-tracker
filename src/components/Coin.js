import React from "react";
import "./Coin.css";

const Coin = ({
  image,
  name,
  symbol,
  price,
  priceChange,
  volume,
  marketCap,
}) => {
  return (
    <div className="coin-row">
      <div className="coin">
        <img className="coin-image" src={image} alt="crypto" />
        <p className="coin-name">{name}</p>
        <p className="coin-symbol">{symbol}</p>
      </div>
      <div className="coin-data">
        <p className="coin-price">£{price}</p>
        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange}%</p>
        ) : (
          <p className="coin-percent green">{priceChange}%</p>
        )}
        <p className="coin-volume">£{volume.toLocaleString()}</p>
        <p className="coin-marketcap">£{marketCap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coin;
