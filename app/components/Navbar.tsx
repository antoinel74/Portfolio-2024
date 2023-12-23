"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export const Navbar = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    tl.set("nav", { opacity: 0, y: -100 });

    tl.to("nav", {
      opacity: 1,
      stagger: { each: 0.06 },
      y: 0,
      delay: 0.8,
    });
  }, []);

  return (
    <nav className="fixed w-full z-10 nav">
      <ul className="flex justify-end text-sm gap-12 py-4 mx-6">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>MENU</li>
        <li>
          <Link href="#contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};
