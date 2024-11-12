import React from "react";

function Cart({products}) {

  const removeCart = ()=>{
    
  }
  return (
    <div>
      <div>
        <img src={products.img} alt="text" />
        <h5>{products.name}</h5>
        <h6>{products.price}</h6>
        <h6>{products.desc}</h6>
        <h3>Cart:{}</h3>
        <h3>Tot Amt:{}</h3>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default Cart;
