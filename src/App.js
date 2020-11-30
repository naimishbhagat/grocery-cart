import React from "react";
import GroceryCart from "./components/GroceryCart";
import GroceryItems from "./components/GroceryItems";
import History from "./components/History";
import "./App.css";

function App() {
  //const [cart, setCart] = useState([]);
  return (
    <div id="app-container">
      <h1>Grocery Cart</h1>
      <p>Welcome to my React app template</p>
      <History />
      <div id="grocery-container">
        <GroceryItems />
        <GroceryCart />
      </div>
    </div>
  );
}

export default App;
