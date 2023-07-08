import React from "react";
import { BrowserRouter, Routes, Route, NavLink,Link } from "react-router-dom";
import Cart from "./components/Cart";
import Stocks from "./components/Stocks";
import Reits from "./components/Reits";
import Portfolio from "./components/Portfolio";
import Bonds from "./components/Bonds";
import Home from "./Home";
import { FaCartArrowDown } from "react-icons/fa6";
import Footer from "./components/Footer";
import Payment from "./components/Payment";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <nav className="navbar-container">
        <NavLink className="home" to={"/"}><img className="image-home-icon" src={require(`./images/home_icon.jpg`)} alt="home icon"/></NavLink>

        <div className="link-containers">
        <NavLink className="portfolio" to={"/portfolio"}>Portfolio</NavLink>
        <NavLink className="stocks" to={"/stocks"}>Stocks</NavLink>
        <NavLink className="reits" to={"/reits"}>Reits</NavLink>
        <NavLink className="bonds" to={"/bonds"}>Bonds</NavLink>
        <Link className="cart" to={"/cart"}>  <FaCartArrowDown /></Link>
        </div>
      </nav>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/reits" element={<Reits />} />
        <Route path="/bonds" element={<Bonds />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />

        
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteSwitch;
