import React, { FC } from "react";

interface IBusyStatus {
  title: string;
  busy: boolean;
  className: string;
}

export const BusyStatus: FC<IBusyStatus> = ({ title, busy, className }) => {
  return (
    <div className={`flex items-center gap-2 text-xl font-light ${className}`}>
      <span className={`h-2 w-2 rounded-full ${busy ? "bg-red-500" : "bg-green-400"}`}></span>
      <p className="uppercase text-xs">{title}</p>
    </div>
  );
};
