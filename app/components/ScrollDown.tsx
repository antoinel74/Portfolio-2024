import React, { forwardRef, Ref } from "react";

export const ScrollDown = forwardRef<HTMLHeadingElement>((_, ref: Ref<HTMLHeadingElement>) => {
  return (
    <div className="absolute bottom-[5%] right-2 flex gap-4 flex-col justify-center items-center opacity-0" ref={ref}>
      <p className="rotate-90">scroll</p>
      <div className="h-12">
        <div className="scrollDownAnimation bg-black dark:bg-white w-[1px]"></div>
      </div>
    </div>
  );
});

ScrollDown.displayName = "ScrollDown";
