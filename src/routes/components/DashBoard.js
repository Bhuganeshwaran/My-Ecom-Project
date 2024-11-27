import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";


function DashBoard({products}) {
  return (
    <div>
      <Header/>
      <div className="pt-2 d-flex justify-content-evenly">
        <Link to='/MobileList'><button >Mobiles</button></Link>
        <Link to='/DurableList'><button >Durables</button></Link>
        <Link to='/GroceryList'><button >Groceries</button></Link>
      </div>
        <h3 className="text-danger pt-5 pb-5">Welcome to Qtree Shop</h3>
        <h5 className="text-primary">Here Available Home Durables Groceries and Smart phones </h5>
    </div>
  );
}

export default DashBoard;
