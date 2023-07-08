import React from "react";
import stockData from "../stockData";
import "../styles/Stocks.css";

const Stocks = () => {
  return (
    <div className="stocks-container">
      <h1>Stocks</h1>
      <table className="stocks-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Ticker</th>
            <th>Company Name</th>
            <th>Last Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock) => (
            <tr className="stock-row" key={stock.ticker}>
              <td>
                <img
                  src={require(`../images/stock_images/${stock.ticker}.png`)}
                  alt={stock.name}
                  className="stock-logo"
                />
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
