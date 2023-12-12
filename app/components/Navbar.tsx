import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed">
      <ul className="w-full flex justify-center gap-4 py-4 font-light">
        <li>HOME</li>
        <li>WORKS</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};
