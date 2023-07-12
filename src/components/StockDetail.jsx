import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import stocksData from "../assets/stocksData";
import '../styles/Stockdetails.css'

const StockDetail = () => {
  // access the stock ID from data
  const [stocks, setStocks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setStocks(stocksData);
  }, []);

  const stock = stocks.find((stock) => stock.id === Number(id));

  return (
    <div className="stock-details-container">
      <h1> Stock Details</h1>
      <Link className="stock-details-back-button" to={"/stocks"}>
        Back to Stocks
      </Link>
      {stock ? (
        <div>
          <h2 className="name-stock-details">{stock.name}</h2>            
          <h2 className="image-stock-details">{stock.image}</h2>
          <h3 className="stock-details-details">{stock.description}</h3>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default StockDetail;
