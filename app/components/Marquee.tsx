import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface IMarquee {
  content?: string;
}

export const MarqueeText: React.FC<IMarquee> = ({ content }) => {
  return (
    <Marquee>
      <div className="flex gap-4 py-4">
        <p className="text-7xl uppercase ml-4">{content}</p>
        <Image src="/svg/asterisk.svg" width={46} height={46} alt="asterisk svg" className="invert dark:invert-0" />
        <p className="text-7xl uppercase">{content}</p>
        <Image src="/svg/asterisk.svg" width={46} height={46} alt="asterisk svg" />
        <p className="text-7xl uppercase">{content}</p>
        <Image src="/svg/asterisk.svg" width={46} height={46} alt="asterisk svg" />
      </div>
    </Marquee>
  );
};
