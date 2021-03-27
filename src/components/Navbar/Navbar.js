import React from "react";
import { Link } from "react-router-dom";
//import { FaBars } from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

export default function Navbar() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <div className="nav">
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && <h4>welcome</h4>}
      <div className="nav-container">
        <h1>Trends</h1>

        <ul className="links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>

          <Link to="/checkout">
            <li>Checkout</li>
          </Link>
          {isUser ? (
            <button
              className="login"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </button>
          ) : (
            <button className="login" onClick={loginWithRedirect}>
              Log in
            </button>
          )}
        </ul>

        <i className="fa fa-bars bar-toggle"></i>

        <Link to="/cart">
          <i className="fa fa-shopping-cart fa-2x cart-icon"></i>
        </Link>
      </div>
    </div>
  );
}
