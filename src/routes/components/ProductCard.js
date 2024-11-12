import React, { useState } from "react";

function ProductCard() {
  const [count, setCount] = useState(0);
  const { products, appliances, foodProducts } = props;

  const handleClick = () => {
    setCount(count + 1);
    console.log("hi");
  };

  console.log(products);

  return (
    <div className="card m-2">
      <div>
        <img src={products.img} alt="text" />
        <h5>{products.name}</h5>
        <h6>{products.price}</h6>
        <h6>{products.desc}</h6>
        <h6>{products.isStock === true ? "Available" : "-Out of Stock"}</h6>
        <button
          disabled={!products.isStock}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <h3>Cart:{count}</h3>
        <h3>Tot Amt:{count * products.price}</h3>
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
      <div>
        <h1>Home Appliances</h1>
        <img src={appliances.img} alt="t" />
        <h5>{appliances.name}</h5>
        <h5>{appliances.category}</h5>
        <h6>{appliances.price}</h6>
        <h6>{appliances.desc}</h6>
        <h6>{products.isStock === true ? "Available" : "-Out of Stock"}</h6>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <button
          disabled={!products.isStock}
          onClick={() => {
            handleClick(products);
          }}
        >
          Add
        </button>
        <h3>Cart:{count}</h3>
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
      <div>
        <h1>Home Groceries</h1>
        <img src={foodProducts.img} alt="te" />
        <h5>{foodProducts.name}</h5>
        <h5>{foodProducts.category}</h5>
        <h6>{foodProducts.price}</h6>
        <h6>{appliances.desc}</h6>
        <h6>{products.isStock === true ? "Available" : "-Out of Stock"}</h6>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <button
          disabled={!products.isStock}
          onClick={() => {
            handleClick(products);
          }}
        >
          Add
        </button>
        <h3>Cart:{count}</h3>
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
