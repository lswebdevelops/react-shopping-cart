import React from "react";
import stocksData from "../assets/stocksData";
import "../styles/Stocks.css";
import { FaCartArrowDown } from "react-icons/fa";

const Stocks = (props) => {

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
                  onClick={() => props.addToCart(stock)}>
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
}

export default Stocks;
