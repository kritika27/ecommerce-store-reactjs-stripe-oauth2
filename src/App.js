import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Spinner from "./components/Spinner/Spinner";

const Cart = lazy(() => import("./pages/CartContent/CartItems"));
const Homepage = lazy(() => import("./pages/Home/Home"));
const Errorpage = lazy(() => import("./pages/Error/Error"));
const Productlist = lazy(() => import("./pages/Products/ProductList"));
const ProductDetails = lazy(() =>
  import("./pages/SingleProduct/SingleProduct")
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/products" component={Productlist}></Route>
          <Route
            exact
            path="/products/:id"
            children={<ProductDetails />}
          ></Route>
          <Route exact path="*" component={Errorpage}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
