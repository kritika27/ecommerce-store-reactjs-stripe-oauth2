import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Checkout,
  Error,
  Home,
  Products,
  SingleProduct,
} from "./pages/index.js";
import ProductList from "./pages/ProductList";
//import CartItem from "./components/cart/CartItem";
import CartItems from "./components/cart/CartItems";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/cart" component={CartItems}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
        <Route exact path="/products" component={ProductList}></Route>
        <Route exact path="/products/:id" children={<SingleProduct />}></Route>
        <Route exact path="*" component={Error}></Route>
      </Switch>
    </Router>
  );
}
