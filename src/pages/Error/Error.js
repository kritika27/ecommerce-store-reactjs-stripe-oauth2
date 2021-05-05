import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <div className="err">
      <img
        style={{ height: "70vh", width: "35vw" }}
        src="images/Q2BAOd2.png"
        alt="404 error"
      />

      <h3>This Page Is Not On The Map.</h3>
      <Link to="/products">
        <button className="button">Back to Products</button>
      </Link>
    </div>
  );
}

export default Error;
