import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobalContext } from "../../context/cart_context";
import "./Navbar.css";

export default function Navbar() {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const isUser = isAuthenticated && user;
  const { amount } = useGlobalContext();
  return (
    <div className="nav">
      <div className="nav-container">
        <h1>Trends</h1>

        <ul className="links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
        </ul>

        <div className="user">
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
          <Link to="/cart">
            <i className="fa fa-shopping-cart fa-2x cart-icon"></i>{" "}
          </Link>
          <div className="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
            </svg>
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
