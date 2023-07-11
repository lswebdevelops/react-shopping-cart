import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    
    <div className="Home-container">
      <h1 className="h1-home">
        Unlock Your Wealth Potential with Our Expert Brokerage Services
      </h1>
      <div className="home-div-container">
        <Link to={"/stocks"} className="home-link stocks-home">Stocks</Link>
        <Link to={"/bonds"} className="home-link bonds-home">Bonds</Link>
        <Link to={"/reits"} className="home-link reits-home">Reits</Link>
        <Link to={"/portfolio"} className="home-link portfolio-home">Portfolio</Link>
      </div>
      </div>     
  )    
  }

export default Home;
