import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-36">
      <div className="flex flex-col justify-center items-center gap-4 min-h-[60vh] border border-gray-400 rounded-xl uppercase tracking-widest opacity-80 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-400 via-black to-black">
        <h2>Let's connect ! </h2>
        <p className="text-2xl lg:text-4xl font-bold">Write me a message </p>
        <figure className="flex items-center justify-center border rounded-full h-20 w-20 mt-12">
          <Image src="/svg/arrow-bottom-left-large.svg" alt="svg" height={40} width={40} />
        </figure>
      </div>
      <div className="w-full flex justify-between pt-4 uppercase text-sm px-1">
        <span>A. Lansman - 2023</span>
        <ul className="flex gap-6">
          <li>
            <Link href="https://linkedin.com">Linkedin</Link>
          </li>
          <li>
            <Link href="https://github.com">Github</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
