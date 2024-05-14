import Image from "next/image";
import React from "react";
import brand from "@/assets/brand.png";
const AboutUs = () => {
  return (
    <div className="container about__us">
      <div className="line"></div>
      <h3>about us</h3>
      <h1>
        If you’re looking for a Premium Quality Tempered Glass or Back-cover for
        your Device{" "}
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. 
      </p>
      <Image src={brand} />
    </div>
  );
};

export default AboutUs;
