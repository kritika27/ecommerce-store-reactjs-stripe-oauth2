import React from "react";
import "./AmountButtons.css";

const AmountButtons = React.memo(function AmountButtons({ inc, dec, amount }) {
  return (
    <div className="amount-btns">
      <button type="button" className="amount-btn" onClick={dec}>
        <i className="fa fa-minus"></i>
      </button>
      <h3 className="amount">{amount}</h3>
      <button type="button" className="amount-btn" onClick={inc}>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
});

export default AmountButtons;
