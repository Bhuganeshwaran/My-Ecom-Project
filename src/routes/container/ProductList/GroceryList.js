import React from 'react'
import Maharaja from "../../../Images/Maharaja.jpeg"
import Aashirvaad from "../../../Images/Aashirvaad.jpeg"
import GoldWinner from "../../../Images/Goldwinner.jpeg"
import ToorDal from "../../../Images/ToorDal.jpeg"
import ProductCard from "../../components/ProductCard"

function GroceryList() {
    const grocery = [
    {
      id: 1,
      name: "Maharaja",
      category: "Rice",
      price: 2000,
      img: Maharaja,
      desc: "Maharaja brand rice",
      isStock: true,
    },
    {
      id: 2,
      name: "Aashirvaad",
      category: "Wheat Atta",
      price: 1000,
      img: Aashirvaad,
      desc: "ITC Chakki Fresh Atta",
      isStock: false,
    },
    {
      id: 3,
      name: "GoldWinner",
      category: "Refined Oils",
      price: 1000,
      img: GoldWinner,
      desc: "Gold winner sun Flower oil",
      isStock: true,
    },
    {
      id: 4,
      name: "Tata Sampann",
      category: "Pulse",
      price: 500,
      img: ToorDal,
      desc: "ToorDal Available",
      isStock: true,
    },
  ];
  
  return (
    <div>
      <h1>Groceries</h1>
      <div className="d-flex flex-wrap">
      {grocery.map((item2) => {
        return <ProductCard foodProducts={item2} key={item2.id} />;
      })} 
      </div>
    </div>
  )
}

export default GroceryList
