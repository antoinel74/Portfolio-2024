import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed w-full">
      <ul className="flex justify-end gap-4 py-4 font-light mx-6">
        <li>HOME</li>
        <li>WORKS</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};
