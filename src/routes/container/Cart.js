import React from "react";

function Cart({products}) {

  return (
    <div>
      <div>
        <img src={products?.img || ""} alt={products?.name || "Image Not Available"} />
        <h5>{products?.name || "Not Available"}</h5>
        <h6>{products?.price || "Not Available"}</h6>
        <h6>{products?.desc || "Not Available"}</h6>
        <h3>Cart:{}</h3>
        <h3>Tot Amt:{}</h3>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default Cart;
