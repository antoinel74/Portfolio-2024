import React, { FC } from "react";

interface SectionTitleProps {
  title: string;
  svg: boolean;
  busy: boolean;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, svg, busy }) => {
  return (
    <div className="flex items-center gap-2 font-thin">
      {svg ? (
        <img src="#" alt="blabla" />
      ) : (
        <div
          className={`h-2 w-2 rounded-full blink ${
            busy ? "bg-red-500" : "bg-green-400"
          }`}
        ></div>
      )}
      <h2 className="uppercase">{title}</h2>
    </div>
  );
};

export default SectionTitle;
