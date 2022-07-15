import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripePay = React.memo(function StripePay({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51HsoAjDW9ZmubhRmS7JqNrP6ZNf8qx9DcNyUYfb7QTZmruBucwvItOEPhaUvOyuddJbLe3KeEbZYNTminM2X5pP600VZshyn1S";

  const onToken = (token) => {
    console.log(token);
    alert("Payment is successful! Your order has been placed.");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Trends Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
});

export default StripePay;
