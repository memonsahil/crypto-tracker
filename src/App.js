import React, { useState, useEffect } from "react";
import axois from "axios";
import "./App.css";
import apiURL from "./API.js";
import Coin from "./Coin.js";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axois
      .get(apiURL)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        alert("API error occurred!");
        console.log(err);
      });
  }, [coins]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) => coin.name.includes(search));

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search for a cryptocurrency</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
