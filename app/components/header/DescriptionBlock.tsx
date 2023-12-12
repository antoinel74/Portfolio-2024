import React from "react";

export const DescriptionBlock = () => {
  return (
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
  );
};
