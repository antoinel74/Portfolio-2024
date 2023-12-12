import React from "react";
import SectionTitle from "./SectionTitle";

export const Header = () => {
  return (
    <div className="relative min-h-screen">
      <SectionTitle
        title="Open to work !"
        busy={false}
        svg={false}
        className="absolute top-24 left-[5%]"
      />
      <div>
        <h1 className="absolute top-36 md:top-1/3 left-[10%] text-5xl md:text-6xl flex flex-col font-bold uppercase">
          Antoine Lansman
          <span> Front-end</span>
          <span> Developer</span>
        </h1>
        <div className="absolute flex flex-col gap-4 text-xl bottom-1/4 md:bottom-1/5 right-[10%] max-w-[250px] md:max-w-[400px]">
          <img
            src="/svg/darkmodeToggle.svg"
            className="hidden md:block h-6 w-12 ml-12"
          />
          <p>
            Hello world ! I’m a junior front-end developer with a passion for
            clean and visually appealing design.
          </p>
          <a className="text-sm bg-[#FE8A8A] text-black p-3 rounded-3xl w-[160px] text-center ml-auto hover:bg-[#FE6E6E] cursor-pointer">
            Explore my Works
          </a>
        </div>
      </div>
    </div>
  );
};
