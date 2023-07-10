import React from "react";
import "../styles/Portfolio.css";

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
        <span>Net worth:</span>
        <span>${formatNumber(totalPrice)}</span>
      </div>

      <table className="portfolio-table">
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
          {portfolioItems.map((item) => {
            return (
              <tr key={item.id} className="portfolio-row">
                <td>
                  <img
                    src={require(`../images/stocks_images/${item.ticker}.png`)}
                    alt={item.name}
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
    </div>
  );
};

export default Portfolio;
