"use client";
import React, { useRef, useEffect } from "react";
import { MarqueeText } from "../components/Marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PrismicNextLink } from "@prismicio/next";
import { Scrambler } from "../components/Scrambler";

interface IContact {
  github?: any;
  linkedin?: any;
  spotify?: any;
  instagram?: any;
  email?: any;
}

gsap.registerPlugin(ScrollTrigger);

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
      className="min-h-[60vh] flex flex-col overflow-hidden py-12 lg:py-24 gap-6 lg:gap-12"
      id="contact"
      ref={sectionRef}
    >
      <MarqueeText content={"Let's connect"} />
      <div className="flex flex-col-reverse lg:flex-row w-full gap-8 py-8 px-4 lg:px-0">
        <ul className="w-full lg:w-1/2 flex flex-col lg:items-center text-lg">
          <li>
            <span className="opacity-60 font-ibm uppercase">Useful Links:</span>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Scrambler word="Github" link={data.github.url} />
              </li>
              <li>
                <Scrambler word="Linkedin" link={data.linkedin.url} />
              </li>
              <li>
                <Scrambler word="Spotify" link={data.spotify.url} />
              </li>
              <li>
                <Scrambler word="Instagram" link={data.instagram.url} />
              </li>
            </ul>
          </li>
        </ul>
        <div className="w-full md:w-1/2">
          <p className="flex flex-col text-3xl lg:text-4xl font-semibold">
            Let&apos;s Connect !<span>Write me a message</span>
          </p>
          <PrismicNextLink
            href={data.email.url}
            className="flex text-xl lg:text-2xl opacity-60 links block uppercase my-6"
            aria-label="Email Address"
          >
            antoine.lansman@gmail.com
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};
