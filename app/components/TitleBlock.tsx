import React from "react";

export const TitleBlock = () => {
  return (
    <h1 className="text-4xl md:text-5xl flex flex-col w-full md:w-1/2 gap-2">
      <span className="flex gap-2 items-center">
        Creative mind <img src="/svg/and.svg" className="md:h-7 md:w-18 h-5 w-16" />
      </span>
      <span>Front-end developer</span>
      <span>currently based in Belgium</span>
    </h1>
  );
};
