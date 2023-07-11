import React from "react";
import bondsData from "../assets/bondsData";
import "../styles/Stocks.css";
import { FaCartArrowDown } from "react-icons/fa";


const Bonds = () => {
  return (
    <div className="stocks-container">
      <h1>Bond Options</h1>
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
          {bondsData.map((item) => (
            <tr className="stock-row" key={item.ticker}>
              <td>
                <img
                  src={require(`../images/bonds_images/${item.ticker}.png`)}
                  alt={item.name}
                  className="stock-logo"
                />
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
};

export default Bonds;
