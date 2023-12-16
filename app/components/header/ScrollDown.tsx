import React from "react";

export const ScrollDown = () => {
  return (
    <div className="absolute bottom-[5%] right-2 flex gap-4 flex-col justify-center items-center">
      <p className="rotate-90">scroll</p>
      <div className="h-12">
        <div className="scrollDownAnimation bg-white w-[1px]"></div>
      </div>
    </div>
  );
};
