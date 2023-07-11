import React from "react";
import "../styles/Cart.css";
import stocksData from "../assets/stocksData";

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
            const stock = stocksData.find(
              (stock) => stock.ticker === item.ticker
            );

            return (
              <tr key={index} className="cart-row">
                <td>
                  <img
                    src={require(`../images/stocks_images/${stock.ticker}.png`)}
                    alt={stock.name}
                    className="stock-logo"
                  />
                </td>
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
      <button className="clear-cart-button" onClick={props.resetCartCount}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
