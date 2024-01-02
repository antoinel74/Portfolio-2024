import React, { forwardRef, Ref } from "react";
import Image from "next/image";

export const TitleBlock = forwardRef<HTMLHeadingElement>((_, ref: Ref<HTMLHeadingElement>) => {
  return (
    <h1
      className="opacity-0 text-[clamp(1.9rem,3vw,3rem)] leading-tight flex flex-col w-full md:w-1/2 flex-wrap"
      ref={ref}
      id="main-title"
    >
      <span className="flex gap-1 items-center">
        Creative mind{" "}
        <Image
          src="/svg/and.svg"
          height={18}
          width={16}
          className="invert dark:invert-0 md:h-7 md:w-18 h-5 w-16"
          alt="and"
        />
      </span>
      <span>Front-end developer</span>
      <span>currently based in Belgium</span>
    </h1>
  );
});

TitleBlock.displayName = "TitleBlock";
