import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const quotes = [
    {
      id: 1,
      text: "You can have anything you want in life if you dress for it.",
    },
    {
      id: 2,
      text: "Style is a way to say who you are without having to speak",
    },
    {
      id: 3,
      text: "Fashion is the armor to survive the reality of everyday life.",
    },
    {
      id: 4,
      text: "I don't design clothes. I design dreams.",
    },
    {
      id: 5,
      text: "People will stare. Make it worth their while.",
    },
    {
      id: 6,
      text: "Elegance is not standing out, but being remembered.",
    },
    {
      id: 7,
      text: "The joy of dressing is an art.",
    },
  ];

  let num = Math.floor(Math.random() * quotes.length);
  let arr = quotes[num].text;
  console.log(arr);
  return (
    <>
      <h3>{arr}</h3>
      <div className="footer bg-dark">
        <div className="social">
          <Link to="/">
            <i className="fa fa-facebook fa-2x"></i>
          </Link>
          <a href="#">
            <i className="fa fa-twitter fa-2x"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube fa-2x"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin fa-2x"></i>
          </a>
        </div>
        <p>Copyright &copy; 2021 Trends</p>
      </div>
    </>
  );
};
export default Footer;
