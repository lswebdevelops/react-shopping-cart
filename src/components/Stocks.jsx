import React, { useState } from "react";
import stocksData from "../assets/stocksData";
import "../styles/Stocks.css";
import { FaCartArrowDown } from "react-icons/fa6";

const Stocks = () => {
  const [addStockToCart, setAddStockToCart] = useState(0);

  function handleStockPurchase(ticker) {   
    const stock = stocksData.find((stock) => stock.ticker === ticker);
    if (stock) {
      setAddStockToCart(addStockToCart + stock.price2023);
      console.log(stock);
     
    }
  }

  return (
    <div className="stocks-container">
      <h1>Stocks</h1>
      <table className="stocks-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Buy Stock</th>
            <th>Ticker</th>
            <th>Company Name</th>
            <th>Last Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {stocksData.map((stock) => (
            <tr className="stock-row" key={stock.ticker}>
              <td>
                <img
                  src={require(`../images/stocks_images/${stock.ticker}.png`)}
                  alt={stock.name}
                  className="stock-logo"
                />
              </td>
              <td>
                <button
                  className="button-handleStockPurchase"
                  onClick={() => handleStockPurchase(stock.ticker)}
                >
                  <FaCartArrowDown />
                </button>
              </td>
              <td>{stock.ticker}</td>
              <td>{stock.name}</td>
              <td>{stock.price2023}</td>
              <td>${stock.size} billion</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stocks;
