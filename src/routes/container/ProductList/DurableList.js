import React from 'react'
import Whirlpool from "../../../Images/Whirlpool.jpeg"
import Haier from "../../../Images/Haier.jpeg"
import Sony from "../../../Images/Sony.jpeg"
import BlueStar from "../../../Images/BlueStar.jpeg"
import VGuard from "../../../Images/VGuard.jpeg"
import ProductCard from "../../components/ProductCard";

function DurableList() {

  const durables = [
    {
      id: 1,
      name: "Whirlpool",
      category: "Refridgerator",
      price: 30000,
      img: Whirlpool,
      desc: "Whirlpool Frost Free ",
      isStock: false,
    },
    {
      id: 2,
      name: "Haier",
      category: "Washing machine",
      price: 20000,
      img: Haier,
      desc: "Haier FrontLoad ",
      isStock: true,
    },
    {
      id: 3,
      name: "Sony",
      category: "Color Television",
      price: 80000,
      img: Sony,
      desc: "Sony 64 Led",
      isStock: true,
    },
    {
      id: 4,
      name: "BlueStar",
      category: "Air Conditioner",
      price: 40000,
      img: BlueStar,
      desc: "BlueStar 2Ton Split ",
      isStock: false,
    },
    {
      id: 5,
      name: "VGuard",
      category: "Water Heater",
      price: 10000,
      img: VGuard,
      desc: "VGuard 20Ltrs ",
      isStock: true,
    },
  ];
  
  return (
    <div>
      <h1>Durables</h1>
      <div className="d-flex flex-wrap">
       {durables.map((item1) => {
          return <ProductCard appliances={item1} key={item1.id} />;
      })}
      </div>
    </div>
  )
}

export default DurableList
