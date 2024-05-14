import React from "react";
import { SALE } from "@/app/static";
import Image from "next/image";
const Sale = () => {
  let card = SALE?.map((el) => (
    <div key={el.id} className="card">
      <Image src={el.img} />
      <p>{el.title}</p>
    </div>
  ));
  return <div className="container sale">{card}</div>;
};

export default Sale;
