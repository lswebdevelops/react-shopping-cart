import "./App.css";
import Cart from "./components/Cart";
import Stocks from "./components/Stocks";
import Reits from "./components/Reits";
import Portfolio from "./components/Portfolio";
import Bonds from "./components/Bonds";

function App() {
  return (
    <div className="App">
      <Cart />
      <Stocks />
      <Reits />
      <Portfolio />
      <Bonds />
    </div>
  );
}

export default App;
