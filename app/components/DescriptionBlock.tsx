import React from "react";
import { BusyStatus } from "./BusyStatus";

export const DescriptionBlock = () => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-1/2 md:pl-12">
      <p className="w-2/3">
        Hey ! I’m Antoine Lansman, a junior front end developer with a passion for clean and visually appealing design.
        I write code and have experience in web communication.
      </p>
      <BusyStatus title="open to work" busy={false} className="" />
    </div>
  );
};
