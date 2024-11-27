import React, { useState } from "react";

function ProductCard(props) {
  const [count, setCount] = useState(0);
  const { products, appliances, foodProducts } = props;

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <div className="card m-2">
      <div>
        <img src={products?.img || ""} alt={products?.name || "Product"} />
        <h5>{products?.name || ""}</h5>
        <h6>{products?.price || ""}</h6>
        <h6>{products?.desc || ""}</h6>
        <h6>{products?.isStock === true ? "Available" : "-Out of Stock"}</h6>
        <button
          disabled={!products?.isStock}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <h3>Cart:{count}</h3>
        <h3>Tot Amt:{count * products?.price}</h3>
        <button
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1);
            }
          }}
        >
          Reduce
        </button>
      </div>
      <br/>
      <div>
        <h1>Home Appliances</h1>
        <img src={appliances?.img || ""} alt={appliances?.name || "Product"}/>
        <h5>{appliances?.name || "Not Available"}</h5>
        <h5>{appliances?.category || "Not Available"}</h5>
        <h6>{appliances?.price || "Not Available"}</h6>
        <h6>{appliances?.desc || "Not Available"}</h6>
        <h6>{appliances?.isStock === true ? "Available" : "-Out of Stock"}</h6>
        <button
          disabled={!appliances?.isStock}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <h3>Cart:{count}</h3>
        <h3>Tot Amt:{count * appliances?.price}</h3>
        <button
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1);
            }
          }}
        >
          Reduce
        </button>
      </div>
      <br/>
      <div>
        <h1>Home Groceries</h1>
        <img src={foodProducts?.img || ""} alt={foodProducts?.name || "Image Not Available"} />
        <h5>{foodProducts?.name || "Not Available"}</h5>
        <h5>{foodProducts?.category || "Not Available"}</h5>
        <h6>{foodProducts?.price || "Not Available"}</h6>
        <h6>{foodProducts?.desc || "Not Available"}</h6>
        <h6>{foodProducts?.isStock === true ? "Available" : "-Out of Stock"}</h6>
        <button
          disabled={!foodProducts?.isStock}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <h3>Cart:{count}</h3>
        <h3>Tot Amt:{count * foodProducts?.price}</h3>
        <button
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1);
            }
          }}
        >
          Reduce
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
