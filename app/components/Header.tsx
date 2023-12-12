import React from "react";

export const Header = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="absolute top-1/3 left-[10%] text-4xl md:text-6xl flex flex-col font-bold uppercase">
          Antoine Lansman
          <span> Front-end</span>
          <span> Developer</span>
        </h1>
        <div className="absolute flex flex-col gap-4 text-xl bottom-1/5 right-[10%] max-w-[400px]">
          <img src="/svg/darkmodeToggle.svg" className="h-6 w-12 ml-12" />
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
