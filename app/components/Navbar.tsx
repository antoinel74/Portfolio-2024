"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export const Navbar = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "power3.out" } });
    tl.set("nav", { opacity: 0, y: -50 });

    tl.to("nav", {
      opacity: 1,
      stagger: { each: 0.06 },
      y: 0,
    });
  }, []);

  return (
    <nav className="fixed w-full z-10 nav">
      <ul className="flex justify-end text-sm gap-12 py-4 mx-6">
        <li>
          <Link href="/" className="relative links">
            HOME
          </Link>
        </li>
        <li>MENU</li>
        <li>
          <Link href="#contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};
