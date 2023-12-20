import React from "react";
import Link from "next/link";
import { TextScrollingBanner } from "../TextScrollingBanner";

export const Contact = () => {
  return (
    <section className="min-h-[60vh] flex flex-col  overflow-hidden px-4 md:px-0 pt-6 pb-12">
      <TextScrollingBanner />
      <div className="flex justify-end items-center flex-col-reverse md:flex-row w-full gap-8 py-6">
        <ul className="w-full md:w-1/2 flex flex-col md:items-center">
          <li>
            <span className="font-semibold opacity-80">Useful Links:</span>
            <ul className="mt-4 flex flex-col gap-1">
              <li>
                <a href="https://github.com/antoinel74">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/antoinelsm/">Linkedin</a>
              </li>
              <li>
                <a href="https://spotify.com">Spotify Work Playlist</a>
              </li>
              <li>
                <a href="https://www.instagram.com/antoinelsm/">Instagram</a>
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
