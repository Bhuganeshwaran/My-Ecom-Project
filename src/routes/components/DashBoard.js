import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import MobileList from "../container/ProductList/MobileList";
import DurableList from "../container/ProductList/DurableList";
import GroceryList from "../container/ProductList/GroceryList";


function DashBoard({products}) {
  const searchItem = [products.name[1]]
  return (
    <div>
      <Header/>
      <div className="pt-2 d-flex justify-content-evenly">
        <Link to='/MobileList'><button >Mobiles</button></Link>
        <Link to='/DurableList'><button >Durables</button></Link>
        <Link to='/GroceryList'><button >Groceries</button></Link>
        <button >Mobiles</button>
        <button>Durables</button>
        <button>Groceries</button>
      </div>
        <h3 className="text-danger pt-5 pb-5">Welcome to Qtree Shop</h3>
        <h5 className="text-primary">Here Available Home Durables Groceries and Smart phones </h5>
        <datalist id="data">{searchItem.map((item, index)=>(<option key={index} value={item}/>))}</datalist>
      <MobileList />
       <DurableList/>
      <GroceryList/>
    </div>
  );
}

export default DashBoard;
