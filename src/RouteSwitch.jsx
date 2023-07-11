import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Stocks from "./components/Stocks";
import Reits from "./components/Reits";
import Portfolio from "./components/Portfolio";
import Bonds from "./components/Bonds";
import Home from "./Home";
import { FaCartArrowDown } from "react-icons/fa6";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import "./styles/Home.css";


class RouteSwitch extends Component {
  constructor() {
    super();
    const stocksFromStorage = localStorage.getItem("stocks");
    const initialStocks = stocksFromStorage
      ? JSON.parse(stocksFromStorage)
      : [];
    this.state = {
      stock: {
        text: "",
      
      },
      stocks: initialStocks,
      cartItems: [],
      portfolioItems: [],
      cartCount: 0,
    };
  }
  addToPortfolio = (items) => {
    this.setState((prevState) => ({
      portfolioItems: [...prevState.portfolioItems, ...items],
    }));
  };


  onSubmitStock = (e) => {
    e.preventDefault();
    if (this.state.stock.text.trim() === " ") {
      return;
    }
    const newStock = {
      text: this.state.stock.text,
     
    };
    this.setState(
      (prevState) => ({
        stocks: [...prevState.stocks, newStock],
        stock: {
          text: "",
         
        },
      }),
      () => {
        localStorage.setItem("stocks", JSON.stringify(this.state.stocks));
      }
    );
  };
  resetCartCount = () => {
    this.setState({
      cartCount: 0,
      cartItems: [],
    })
  }
  // Function to add an item to the cart
  addToCart = (item) => {
    const { cartItems } = this.state;
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            price2023: cartItem.price2023 * 2,
          };
        }
        return cartItem;
      });
      this.setState({
        cartItems: updatedCartItems,
      });
    } else {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, item],
      }));
    }
    this.setState((prevState) => ({
      cartCount: prevState.cartCount + 1, // Increment cartCount by 1
    }));
  };

  render() {
    const { stocks, cartItems, cartCount, portfolioItems } = this.state;
    return (
      <BrowserRouter>
        <nav className="navbar-container">
          <Link className="home" to={"/"}>
            <span className="hovertext" data-hover="Home">
              <img
                className="image-home-icon"
                src={require(`./images/home_icon.jpg`)}
                alt="home icon"
              />
            </span>
          </Link>
          <div className="link-containers">
            <NavLink className="portfolio" to={"/portfolio"}>
              Portfolio
            </NavLink>
            <NavLink className="stocks" to={"/stocks"}>
              Stocks
            </NavLink>
            <NavLink className="reits" to={"/reits"}>
              REITs
            </NavLink>
            <NavLink className="bonds" to={"/bonds"}>
              Bonds
            </NavLink>
            <Link to="/cart" className="cart cart-icon">
  <FaCartArrowDown />
  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
</Link>
                
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio portfolioItems={portfolioItems}/>} />
          <Route
            path="/stocks"
            element={<Stocks stocks={stocks} addToCart={this.addToCart} />}
          />
          <Route path="/reits" element={<Reits />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} cartCount={cartCount} addToPortfolio={this.addToPortfolio} resetCartCount={this.resetCartCount}/>
          }
        />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default RouteSwitch;
