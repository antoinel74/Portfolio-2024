"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { MarqueeText } from "../components/Marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CustomLink = ({ href, text }: { href: string; text: string }) => (
  <Link href={href} className="hover:opacity-80">
    {text}
  </Link>
);

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    gsap.fromTo(
      sectionEl,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionEl,
        },
      }
    );
  }, []);

  return (
    <section
      className="min-h-[60vh] flex flex-col overflow-hidden px-4 py-12 gap-6 md:gap-12"
      id="contact"
      ref={sectionRef}
    >
      <MarqueeText content={"Let's connect"} />
      <div className="flex justify-end items-center flex-col-reverse md:flex-row w-full gap-8 py-6 mb-6">
        <ul className="w-full md:w-1/2 flex flex-col md:items-center">
          <li>
            <span className="font-semibold opacity-80">Useful Links:</span>
            <ul className="mt-4 flex flex-col gap-1">
              <li>
                <CustomLink href="https://github.com/antoinel74" text="Github" />
              </li>
              <li>
                <CustomLink href="https://www.linkedin.com/in/antoinelsm/" text="Linkedin" />
              </li>
              <li>
                <CustomLink href="https://spotify.com" text="Spotify Work Playlist" />
              </li>
              <li>
                <CustomLink href="https://www.instagram.com/antoinelsm/" text="Instagram" />
              </li>
            </ul>
          </li>
        </ul>
        <div className="w-full md:w-1/2">
          <p className="flex flex-col text-3xl md:text-4xl font-semibold">
            Let&apos;s Connect !<span>Write me a message</span>
          </p>
          <a
            href="mailto:antoinelansman@gmail.com"
            className="text-2xl md:text-3xl font-thin links"
            aria-label="Email Address"
          >
            antoine.lansman@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
