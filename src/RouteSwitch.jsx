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
import "./styles/Home.css";
import StockDetail from "./components/StockDetail";
import ReitDetail from "./components/ReitDetail";
import BondDetail from "./components/BondDetail";


class RouteSwitch extends Component {
  constructor() {
    super();

    const stocksFromStorage = localStorage.getItem("stocks");
    const bondsFromStorage = localStorage.getItem("bonds");
    const reitsFromStorage = localStorage.getItem("reits");

    const initialStocks = stocksFromStorage
      ? JSON.parse(stocksFromStorage)
      : [];
    const initialBonds = bondsFromStorage ? JSON.parse(bondsFromStorage) : [];
    const initialReits = reitsFromStorage ? JSON.parse(reitsFromStorage) : [];

    this.state = {
      bond: {
        text: "",
      },
      reits: initialReits,
      reit: {
        text: "",
      },
      bonds: initialBonds,
      stock: {
        text: "",
      },
      stocks: initialStocks,
      cartItems: [],
      portfolioItems: [],
      cartCount: 0,
    };
  }

  onSubmitReit = (e) => {
    e.preventDefault();
    if (this.state.reit.text.trim() === " ") {
      return;
    }
    const newReit = {
      text: this.state.reit.text,
    };
    this.setState(
      (prevState) => ({
        reits: [...prevState.reits, newReit],
        reit: {
          text: "",
        },
      }),
      () => {
        localStorage.setItem("reits", JSON.stringify(this.state.reits));
      }
    );
  };

  onSubmitBond = (e) => {
    e.preventDefault();
    if (this.state.bond.text.trim() === " ") {
      return;
    }
    const newBond = {
      text: this.state.bond.text,
    };
    this.setState(
      (prevState) => ({
        bonds: [...prevState.bonds, newBond],
        bond: {
          text: "",
        },
      }),
      () => {
        localStorage.setItem("bonds", JSON.stringify(this.state.bonds));
      }
    );
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
    });
  };
  addToPortfolio = (items) => {
    const { portfolioItems } = this.state;
    let updatedPortfolioItems = [...portfolioItems];
    items.forEach((item) => {
      const existingItem = updatedPortfolioItems.find(
        (portfolioItem) => portfolioItem.id === item.id
      );
      if (existingItem) {
        updatedPortfolioItems = updatedPortfolioItems.map((portfolioItem) => {
          if (portfolioItem.id === item.id) {
            return {
              ...portfolioItem,
              price2023: portfolioItem.price2023 + item.price2023,
            };
          }
          return portfolioItem;
        });
      } else {
        updatedPortfolioItems.push(item);
      }
    });
    this.setState({
      portfolioItems: updatedPortfolioItems,
      cartItems: [],
      cartCount: 0,
    });
  };

  // Function to add an item to the cart
  addToCart = (item) => {
    const { cartItems } = this.state;
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            price2023: cartItem.price2023 + item.price2023,
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
    const { stocks, bonds, reits, cartItems, cartCount, portfolioItems } =
      this.state;
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
          <Route
            path="/portfolio"
            element={<Portfolio portfolioItems={portfolioItems} />}
          />


          {/* stocks */}
          <Route path="/stocks">
            <Route
              index
              element={<Stocks stocks={stocks} addToCart={this.addToCart} />}
            />
            <Route
              path=":id"
              element={<StockDetail addToCart={this.addToCart} />}
            />
          </Route>



          {/* Reits */}

          <Route path="/reits">
            <Route
              index
              element={<Reits stocks={reits} addToCart={this.addToCart} />}
            />
            <Route
              path=":id"
              element={<ReitDetail addToCart={this.addToCart} />}
            />
          </Route>

      {/* Ronds */}
          {/* <Route
            path="/bonds"
            element={<Bonds bonds={bonds} addToCart={this.addToCart} />}
          /> */}
          <Route path="/bonds">
            <Route
              index
              element={<Bonds stocks={bonds} addToCart={this.addToCart} />}
            />
            <Route
              path=":id"
              element={<BondDetail addToCart={this.addToCart} />}
            />
          </Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                cartCount={cartCount}
                addToPortfolio={this.addToPortfolio}
                resetCartCount={this.resetCartCount}
              />
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default RouteSwitch;
