import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
};

export default Navbar;
