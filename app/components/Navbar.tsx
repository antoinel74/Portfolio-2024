"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    tl.set("nav", { y: -50 });

    tl.to("nav", {
      stagger: 0.1,
      y: scrollDirection === "down" ? -50 : 0,
    });
  }, [scrollDirection]);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll + 10) {
        setScrollDirection("down");
      } else if (currentScroll < lastScroll - 10) {
        setScrollDirection("up");
      }
      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full z-10 nav -translate-y-10">
      <ul className="flex justify-end text-sm gap-12 py-4 mx-6">
        <li>
          <Link href="/" className="relative links">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/projects/cogip" className="relative links">
            WORKS
          </Link>
        </li>
        <li>
          <Link href="/#contact" className="links">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};
