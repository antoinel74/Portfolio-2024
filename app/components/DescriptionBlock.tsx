import React, { forwardRef, Ref } from "react";
import { BusyStatus } from "./BusyStatus";

export const DescriptionBlock = forwardRef<HTMLHeadingElement>((_, ref: Ref<HTMLHeadingElement>) => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-1/2 md:pl-12 opacity-0 y-0" ref={ref}>
      <p className="w-2/3 max-w-[500px]">
        Hey ! I&apos;m Antoine Lansman, a junior front end developer with a passion for clean and visually appealing
        design. I write code and have experience in web communication.
      </p>
      <BusyStatus title="open to work" busy={false} className="" />
    </div>
  );
});

DescriptionBlock.displayName = "DescriptionBlock";
