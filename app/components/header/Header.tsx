import React from "react";
import { NameBlock } from "./NameBlock";
import { DescriptionBlock } from "./DescriptionBlock";
import { ScrollDown } from "./ScrollDown";

export const Header = () => {
  return (
    <section className="relative min-h-[95vh] w-full">
      <div className="absolute top-1/4 md:top-1/2 w-full flex flex-col md:flex-row-reverse gap-6 md:gap-0 flex-wrap px-6">
        <NameBlock />
        <DescriptionBlock />
      </div>
      <ScrollDown />
    </section>
  );
};
