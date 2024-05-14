import { CHOOSE } from "@/app/static";
import Image from "next/image";
import React from "react";

const Choose = () => {
  let card = CHOOSE?.map((el) => (
    <div key={el.id}>
      <Image src={el.img} />
      <h2>{el.title}</h2>
      <p>{el.paragh}</p>
    </div>
  ));
  return (
    <div className="container choose">
      <div className="line"></div>
      <h3>Why Choose US</h3>
      <div className="cards">{card}</div>
    </div>
  );
};

export default Choose;
