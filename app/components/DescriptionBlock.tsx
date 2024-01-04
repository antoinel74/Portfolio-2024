import React, { forwardRef, Ref, HTMLProps } from "react";
import { BusyStatus } from "./BusyStatus";

export interface DescriptionProps {
  description?: any;
}

export const DescriptionBlock = forwardRef<HTMLHeadingElement, DescriptionProps>(({ description, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-1/2 md:pl-12 opacity-0 y-0" ref={ref}>
      {description && <p className="w-2/3 max-w-[500px]">{description}</p>}
      <BusyStatus title="open to work" busy={false} className="" />
    </div>
  );
});

DescriptionBlock.displayName = "DescriptionBlock";
