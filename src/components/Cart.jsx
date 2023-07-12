import React from "react";
import "../styles/Cart.css";
import { Link } from "react-router-dom";
import stocksData from "../assets/stocksData";
import bondsData from "../assets/bondsData";
import reitsData from "../assets/reitsData";

const Cart = (props) => {
  const { cartItems, addToPortfolio } = props;

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price2023;
  }, 0);

  const formatNumber = (number) => {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatSize = (size) => {
    const billions = size / 1000;
    return `${formatNumber(billions)}B`;
  };
  const handleAddToPortfolio = () => {
    addToPortfolio(cartItems);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <table className="cart-table">
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
          {cartItems.map((item, index) => {
            let data, imageSource, imagePrefix;
            if (item.type === "stocks") {
              data = stocksData.find((stock) => stock.ticker === item.ticker);
              imagePrefix = "stocks_images";
            } else if (item.type === "bonds") {
              data = bondsData.find((bond) => bond.ticker === item.ticker);
              imagePrefix = "bonds_images";
            } else if (item.type === "reits") {
              data = reitsData.find((reit) => reit.ticker === item.ticker);
              imagePrefix = "reits_images";
            }
            if (data) {
              imageSource = require(`../images/${imagePrefix}/${item.ticker}.png`);
            }
            return (
              <tr key={index} className="cart-row">
                <Link to={"/individual"}>
                  <td>
                    {imageSource && (
                      <img
                        src={imageSource}
                        alt={data?.name}
                        className="stock-logo"
                      />
                    )}
                  </td>
                </Link>

                <td>{item.ticker}</td>
                <td>{item.name}</td>
                <td>${formatNumber(item.price2023)}</td>
                <td>{formatSize(item.size)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total-price">
        <span>TOTAL:</span>
        <span>${formatNumber(totalPrice)}</span>
      </div>
      <div className="div-add-portfolio-clear-cart-container">
        {props.cartCount > 0 && (
          <div>
            <div className="div-add-portfolio-clear-cart">
              <button
                className="add-portfolio-button"
                onClick={handleAddToPortfolio}
              >
                <span>Add to portfolio</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
