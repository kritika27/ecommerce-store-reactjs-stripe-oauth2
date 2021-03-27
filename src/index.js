import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
//import { ProductsProvider } from "./context/products_context";
import Checkout from "./pages/Checkout";

import { Auth0Provider } from "@auth0/auth0-react";
//import Navbar from "./components/Navbar/Navbar";
import App from "./App";
import { CartProvider } from "./components/cart/cart_context";
import { ProductsProvider } from "./pages/products_context";
//dev-wt6m55wd.us.auth0.com
//QynzIDzE9EBhVPMhOiWj8yNdI5jiZUhd
ReactDOM.render(
  <Auth0Provider
    domain="dev-wt6m55wd.us.auth0.com"
    clientId="QynzIDzE9EBhVPMhOiWj8yNdI5jiZUhd"
    redirectUri={window.location.origin}
  >
    <CartProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </CartProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
