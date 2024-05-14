import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="container navbar">
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/products"}>Shop All</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
      </ul>
      <Link href={"/"}>
        <Image src={logo} />
      </Link>
      <ul>
        <li>
          <Link href={"/about"}>About Us</Link>
        </li>
        <li>
          <input type="text" placeholder="Search Product" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
