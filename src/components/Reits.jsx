import React from "react";
import reitsData from "../assets/reitsData";
import { Link } from "react-router-dom";
import "../styles/Stocks.css";
import { FaCartArrowDown } from "react-icons/fa";

const Reits = (props) => {
  return (
    <div className="stocks-container">
      <h1>REIT Options</h1>
      <table className="stocks-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Add to Cart</th>
            <th>Ticker</th>
            <th>Company Name</th>
            <th>Last Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {reitsData.map((item) => (
            <tr className="stock-row" key={item.ticker}>
              <td>
                {" "}
                <Link to={`/reits/${item.id}`}>
                  <img
                    src={require(`../images/reits_images/${item.ticker}.png`)}
                    alt={item.name}
                    className="stock-logo"
                  />
                </Link>
              </td>
              <td>
                <button
                  className="button-handleStockPurchase"
                  onClick={() => props.addToCart(item)}
                >
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
};

export default Reits;
