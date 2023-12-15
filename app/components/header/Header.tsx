import React from "react";
import { SectionTitle } from "../SectionTitle";
import { NameBlock } from "./NameBlock";
import { DescriptionBlock } from "./DescriptionBlock";
import { ScrollDown } from "./ScrollDown";

export const Header = () => {
  return (
    <section className="flex flex-wrap flex-col relative min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <SectionTitle title="Open to work !" busy={false} svg={false} className="absolute top-24 left-[5%]" />
      <div className="flex flex-col w-full lg:w-[1000px] px-4">
        <NameBlock />
        <DescriptionBlock />
      </div>
      <ScrollDown />
    </section>
  );
};
