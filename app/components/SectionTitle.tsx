import React, { FC } from "react";

interface SectionTitleProps {
  title: string;
  svg: boolean;
  busy: boolean;
  className: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, svg, busy, className }) => {
  return (
    <div className={`flex items-center gap-2 text-sm font-light ${className}`}>
      {svg ? (
        <img src="/svg/share-white.svg" alt="svg" className="h-4 w-4" />
      ) : (
        <div className={`h-2 w-2 rounded-full ${busy ? "bg-red-500" : "bg-green-400"}`}></div>
      )}
      <h2 className="uppercase">{title}</h2>
    </div>
  );
};
