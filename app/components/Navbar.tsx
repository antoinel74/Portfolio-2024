import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-10">
      <ul className="flex justify-end text-sm gap-12 py-4 mx-6">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>MENU</li>
      </ul>
    </nav>
  );
};
