"use client";
import React, { useRef, useEffect } from "react";
import { MarqueeText } from "../components/Marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PrismicNextLink } from "@prismicio/next";

interface IContact {
  github?: any;
  linkedin?: any;
  spotify?: any;
  instagram?: any;
  email?: any;
}

gsap.registerPlugin(ScrollTrigger);

const CustomLink = ({ href, text }: { href: any; text: string }) => (
  <a href={href} className="hover:opacity-60 links">
    {text}
  </a>
);

export const Contact: React.FC<IContact> = (data) => {
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
      className="min-h-[60vh] flex flex-col overflow-hidden py-12 md:py-24 gap-6 md:gap-12"
      id="contact"
      ref={sectionRef}
    >
      <MarqueeText content={"Let's connect"} />
      <div className="flex flex-col-reverse md:flex-row w-full gap-8 py-8 px-4 md:px-0">
        <ul className="w-full md:w-1/2 flex flex-col md:items-center text-lg">
          <li>
            <span className="opacity-60 font-ibm uppercase">Useful Links:</span>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <CustomLink href={data.github.url} text="Github" />
              </li>
              <li>
                <CustomLink href={data.linkedin.url} text="Linkedin" />
              </li>
              <li>
                <CustomLink href={data.spotify.url} text="Spotify Work Playlist" />
              </li>
              <li>
                <CustomLink href={data.instagram.url} text="Instagram" />
              </li>
            </ul>
          </li>
        </ul>
        <div className="w-full md:w-1/2">
          <p className="flex flex-col text-3xl md:text-4xl font-semibold">
            Let&apos;s Connect !<span>Write me a message</span>
          </p>
          <PrismicNextLink
            href={data.email.url}
            className="flex text-2xl md:text-3xl opacity-60 links block my-6"
            aria-label="Email Address"
          >
            antoine.lansman@gmail.com
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};
