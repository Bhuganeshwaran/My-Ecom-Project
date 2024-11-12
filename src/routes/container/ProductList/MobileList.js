import React from "react";
import Apple from "../../../Images/Apple.jpeg";
import Oppo from "../../../Images/Oppo.jpeg";
import Poco from "../../../Images/Poco.jpeg";
import Realme from "../../../Images/Realme.jpeg";
import Redmi from "../../../Images/Redmi.jpeg";
import Samsung from "../../../Images/Samsung.jpeg";
import Vivo from "../../../Images/Vivo.jpeg";
import ProductCard from "../../components/ProductCard";

function MobileList() {
  const Mobiles = [
    {
      id: 1,
      name: "Apple",
      category: "Mobiles",
      price: 100000,
      img: Apple,
      desc: "Apple Iphone ",
      isStock: true,
    },
    {
      id: 2,
      name: "Oppo",
      category: "Mobiles",
      price: 30000,
      img: Oppo,
      desc: "Oppo is reasonable price",
      isStock: true,
    },
    {
      id: 3,
      name: "Poco",
      category: "Mobiles",
      price: 25000,
      img: Poco,
      desc: "Poco Good company",
      isStock: false,
    },
    {
      id: 4,
      name: "Realme",
      category: "Mobiles",
      price: 25000,
      img: Realme,
      desc: "Realme mobile is highly recommented",
      isStock: true,
    },
    {
      id: 5,
      name: "Redmi",
      category: "Mobiles",
      price: 20000,
      img: Redmi,
      desc: "Redmi price reasonable",
      isStock: false,
    },
    {
      id: 6,
      name: "Samsung",
      category: "Mobiles",
      price: 250,
      img: Samsung,
      desc: "Samsung is good picture clarity",
      isStock: true,
    },
    {
      id: 7,
      name: "Vivo",
      category: "Mobiles",
      price: 250,
      img: Vivo,
      desc: "Best choice in smart phones",
      isStock: true,
    },
  ];

  return (
    <div>
      <h1>Smart Phones</h1>
      <div className="d-flex flex-wrap">
        {Mobiles.map((item) => {
          return <ProductCard products={item} />;
        })}
      </div>
    </div>
  );
}
export default MobileList;
