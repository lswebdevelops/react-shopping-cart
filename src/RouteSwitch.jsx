import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Cart from "./components/Cart";
import Stocks from "./components/Stocks";
import Reits from "./components/Reits";
import Portfolio from "./components/Portfolio";
import Bonds from "./components/Bonds";
import Home from "./Home";
import { FaCartArrowDown } from "react-icons/fa6";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <nav className="navbar-container">
        <NavLink className="home" to={"/"}><img className="image-home-icon" src={require(`./images/home_icon.jpg`)} alt="home icon"/></NavLink>
        <NavLink className="portfolio" to={"/portfolio"}>Portfolio</NavLink>
        <NavLink className="stocks" to={"/stocks"}>Stocks</NavLink>
        <NavLink className="reits" to={"/reits"}>Reits</NavLink>
        <NavLink className="bonds" to={"/bonds"}>Bonds</NavLink>
        <NavLink className="cart" to={"/cart"}>  <FaCartArrowDown /></NavLink>
      </nav>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/reits" element={<Reits />} />
        <Route path="/bonds" element={<Bonds />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
