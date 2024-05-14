import Image from "next/image";
import React from "react";
import logo from "@/assets/logo1.png";
const Footer = () => {
  return (
    <div className="foot">
      <div className="container footer">
        <ul className="uk">
          <h2>
            <Image src={logo} />
          </h2>
          <li>Lorem ipsum dolor sit amet </li>
          <li>consectetur adipiscing elit</li>
          <li>sed do eiusmod tempor incididunt ut</li>
          <li>labore et dolore magna aliqua</li>
        </ul>
        <ul>
          <h2>Contact us</h2>
          <li className="li"> E:info@example.com</li>
          <li>P:+947670000000</li>
          <li>A:123 Hospital rd</li>
          <li>Kalubowila, Dehiwela</li>
        </ul>
        <ul>
          <h2> Useful links</h2>
          <li className="li"> Shop All</li>
          <li> Tempered Glass </li>
          <li> Back-cover</li>
          <li> About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
