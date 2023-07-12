import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import reitsData from "../assets/reitsData";
import '../styles/Stockdetails.css'

const ReitDetail = ({ addToCart }) => {
  const [stocks, setStocks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setStocks(reitsData);
  }, []);

  const stock = stocks.find((stock) => stock.id === Number(id));

  const handleAddToCart = () => {
    if (stock) {
      addToCart(stock);
    }
  };

  return (
    <div className="stock-details-container">
      <h1 className="stock-details-title">REITs Details</h1>
      <Link className="stock-details-back-button" to={"/reits"}>
        Back to REITs
      </Link>
      {stock ? (
        <div>
          <h2 className="name-stock-details">{stock.name}</h2>            
          <div className="cart-button-website-container">
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <Link to={stock.website} className="website-stock-details">Company Website</Link>
          </div>

          <h3 className="stock-details-details">{stock.description}</h3>
          
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ReitDetail;
