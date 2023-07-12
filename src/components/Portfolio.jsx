import React from "react";
import "../styles/Portfolio.css";
import stocksData from "../assets/stocksData";
import { Link } from "react-router-dom";
import bondsData from "../assets/bondsData";
import reitsData from "../assets/reitsData";

const Portfolio = (props) => {
  const { portfolioItems } = props;
  const formatNumber = (number) => {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatSize = (size) => {
    const billions = size / 1000;
    return `${formatNumber(billions)}B`;
  };
  const totalPrice = portfolioItems.reduce((total, item) => {
    return total + item.price2023;
  }, 0);

  return (
    <div className="portfolio-container">
      <div className="total-price-portfolio">
        <h1 className="h1-portfolio">Portfolio</h1>
        <div>
        <span>Net worth: </span>
        <span>${formatNumber(totalPrice)}</span>
        </div>
      </div>

      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Ticker</th>
            <th>Type</th>
            <th>Company Name</th>
            <th>Last Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {portfolioItems.map((item, index) => {
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
              <tr key={index} className="portfolio-row">
                <td
                  
                  >
                  {imageSource && (
                    <img
                      src={imageSource}
                      alt={data?.name}
                      className="stock-logo"
                    />
                  )}
                </td>
                <td>{item.ticker}</td>
                <td 
                ><span
                style={{
                  color: "white",
                  backgroundColor:
                  item.type.toLowerCase() === "stocks"
                  ? "gray"
                  : item.type.toLowerCase() === "reits"
                  ? "#4681f4"
                  : item.type.toLowerCase() === "bonds"
                  ? "#dd7973"
                  : "orange",                  
                  borderRadius: "4px",
                  padding: "4px 14px 4px 14px",
                  minWidth: "140",
                 }}
                  >{
                      item.type === "stocks" ? "stock"
                      :item.type === "reits" ? "reit"
                      : item.type === "bonds" ? "bond"
                      : null
                  }</span></td>
                <td>{item.name}</td>
                <td>${formatNumber(item.price2023)}</td>
                <td>{formatSize(item.size)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
