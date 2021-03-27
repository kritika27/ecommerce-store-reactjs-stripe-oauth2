import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <div className="err">
      <img
        style={{ height: "400px", width: "400px" }}
        src="images/Q2BAOd2.png"
        alt="Used to show error"
      />

      <h3>This Page Is Not On The Map.</h3>
      <Link to="/product">
        <button className="button">Back to Products</button>
      </Link>
    </div>
  );
}

export default Error;
