import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  CartItems,
  Error,
  Home,
  ProductList,
  SingleProduct,
} from "./pages/index.js";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/cart" component={CartItems}></Route>
        <Route exact path="/products" component={ProductList}></Route>
        <Route exact path="/products/:id" children={<SingleProduct />}></Route>
        <Route exact path="*" component={Error}></Route>
      </Switch>
    </Router>
  );
}
