import React from "react";
import stocksData from "../assets/stocksData";
import "../styles/Stocks.css";
import { FaCartArrowDown } from "react-icons/fa";

const Stocks = (props) => {

    return (
    <div className="stocks-container">
      <h1>Stock Options</h1>
      <table className="stocks-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Buy Item</th>
            <th>Ticker</th>
            <th>Company Name</th>
            <th>Last Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {stocksData.map((item) => (
            <tr className="stock-row" key={item.ticker}>
              <td>
                <img
                  src={require(`../images/stocks_images/${item.ticker}.png`)}
                  alt={item.name}
                  className="stock-logo"
                />
              </td>
              <td>
                <button
                  className="button-handleStockPurchase"
                  onClick={() => props.addToCart(item)}>
                  <FaCartArrowDown />
                </button>
              </td>
              <td>{item.ticker}</td>
              <td>{item.name}</td>
              <td>{item.price2023}</td>
              <td>${item.size} billion</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stocks;
