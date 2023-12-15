import React, { FC } from "react";

interface SectionTitleProps {
  title: string;
  svg: boolean;
  busy: boolean;
  className: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, svg, busy, className }) => {
  return (
    <div className={`flex items-center gap-2 text-sm font-thin ${className}`}>
      {svg ? (
        <img src="#" alt="blabla" />
      ) : (
        <div className={`h-2 w-2 rounded-full blink ${busy ? "bg-red-500" : "bg-green-400"}`}></div>
      )}
      <h2 className="uppercase">{title}</h2>
    </div>
  );
};
