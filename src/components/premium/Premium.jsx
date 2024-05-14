import React from "react";
import premium from "@/assets/premium.png";
import Image from "next/image";
const Premium = () => {
  return (
    <div className="container premium">
      <div className="left">
        <h1>Shop Premium Tempered Glass in wholesale Price !</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.  LKR : 299
        </p>
        <button>Shop Tempered Glass </button>
      </div>
      <div className="right">
        <Image src={premium} />
      </div>
    </div>
  );
};

export default Premium;
