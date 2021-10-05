import React, { useState, useEffect, useMemo } from "react";
import axois from "axios";
//import API_KEY from "./API";
import "./App.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import Table from "./components/Table.js";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    /* Get a Nomics API key and replace it below with the current key value
    axois
      .get(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}`)
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert("API error occurred!");
        console.log(err);
      });
      */
  }, [setLoading]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search)
  );

  const columns = useMemo(
    () => [
      {
        Header: "Logo",
        accessor: "logo_url",
        Cell: ({ value }) => (
          <>
            <img src={value} alt={"logo_image"} width="30" height="30" />
          </>
        ),
      },
      {
        Header: "Currency",
        accessor: "currency",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Market Cap.",
        accessor: "market_cap",
        Cell: ({ value }) => (value ? value : "N/A"),
      },
      {
        Header: "Circulating Supply",
        accessor: "circulating_supply",
        Cell: ({ value }) => (value ? value : "N/A"),
      },
      {
        Header: "Max Supply",
        accessor: "max_supply",
        Cell: ({ value }) => (value ? value : "N/A"),
      },
    ],
    []
  );

  return (
    <div className="app-container">
      <h1 className="app-title">Crypto Tracker</h1>
      <h2 className="app-source">Powered by Nomics</h2>
      <div className="app-context">
        <form>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </form>
        {loading === true ? (
          <div>
            <ScaleLoader color="#064A75" loading={loading} size={20} />
            <h3 className="app-loading-text">Loading all coins...</h3>
          </div>
        ) : (
          <Table columns={columns} data={filteredCoins} />
        )}
      </div>
    </div>
  );
}

export default App;
