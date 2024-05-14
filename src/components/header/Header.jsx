import Image from "next/image";
import React from "react";
import header from "@/assets/header.png";
const Header = () => {
  return (
    <div className="container header">
      <div className="left">
        <h3>Mobile</h3>
        <h2>Backcover</h2>
        <h1>Tempered Glass</h1>
        <button>Shop all !</button>
      </div>
      <div className="right">
        <Image src={header} />
      </div>
    </div>
  );
};

export default Header;
