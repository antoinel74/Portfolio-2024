import React from "react";
import SectionTitle from "./SectionTitle";

export const Header = () => {
  return (
    <section className="flex flex-wrap flex-col relative min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <SectionTitle
        title="Open to work !"
        busy={false}
        svg={false}
        className="absolute top-24 left-[5%]"
      />
      <div className="flex flex-col w-full md:w-[1000px] px-4">
        <h1 className="text-4xl md:text-6xl flex flex-col font-bold uppercase text-left">
          Antoine Lansman
          <span> Front-end</span>
          <span> Developer</span>
        </h1>
        <div className="flex flex-wrap items-center gap-2 justify-end md:justify-end mt-6 md:mt-0 w-full">
          <img src="/svg/arrow-bottom-left-large.svg" className="h-16 w-16" />
          <div className="flex flex-col gap-4 text-sm md:text-xl max-w-[250px] md:max-w-[400px] text-right">
            <img
              src="/svg/darkmodeToggle.svg"
              className="hidden md:block h-6 w-12 ml-24"
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
    </section>
  );
};
