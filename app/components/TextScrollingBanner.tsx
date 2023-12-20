import React from "react";
import Image from "next/image";

export const TextScrollingBanner = () => {
  return (
    <div className="flex text-7xl uppercase overflow-hidden py-12">
      <div className="flex items-center space-x-2 overflow-hidden -translate-x-4">
        <span className="whitespace-nowrap">Let's Connect !</span>
        <Image src="/svg/asterisk.svg" width={48} height={48} alt="asterisk svg" />
        <span className="whitespace-nowrap">Let's Connect !</span>
        <Image src="/svg/asterisk.svg" width={48} height={48} alt="asterisk svg" />
        <span className="whitespace-nowrap">Let's Connect !</span>
        <Image src="/svg/asterisk.svg" width={48} height={48} alt="asterisk svg" />
      </div>
    </div>
  );
};
