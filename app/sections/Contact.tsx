import React from "react";
import Link from "next/link";
import { MarqueeText } from "../components/Marquee";

export const Contact = () => {
  return (
    <section className="min-h-[60vh] flex flex-col overflow-hidden px-4 py-12 gap-6 md:gap-12" id="contact">
      <MarqueeText content={"Let's connect"} />
      <div className="flex justify-end items-center flex-col-reverse md:flex-row w-full gap-8 py-6 mb-6">
        <ul className="w-full md:w-1/2 flex flex-col md:items-center">
          <li>
            <span className="font-semibold opacity-80">Useful Links:</span>
            <ul className="mt-4 flex flex-col gap-1">
              <li>
                <Link href="https://github.com/antoinel74">Github</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/antoinelsm/">Linkedin</Link>
              </li>
              <li>
                <Link href="https://spotify.com">Spotify Work Playlist</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/antoinelsm/">Instagram</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="w-full md:w-1/2">
          <p className="flex flex-col text-3xl md:text-4xl font-semibold">
            Let&apos;s Connect !<span>Write me a message</span>
          </p>
          <Link href="/" className="text-2xl md:text-3xl font-thin">
            antoine.lansman@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
};
