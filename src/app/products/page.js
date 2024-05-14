import Image from "next/image";
import React from "react";
import { PRODUCTS } from "../static";

const About = () => {
  let card = PRODUCTS?.map((el) => (
    <div className="card" key={el.id}>
      <Image src={el.img} />
      <p>{el.title}</p>
    </div>
  ));
  return (
    <div className="container products">
      <h1>Shop All Products</h1>
      <div className="cards">{card}</div>
    </div>
  );
};

export default About;
