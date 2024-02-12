import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface IMarquee {
  content?: string;
}

export const MarqueeText: React.FC<IMarquee> = ({ content }) => {
  const repeatCount = 3;

  return (
    <Marquee>
      <div className="flex gap-4 py-4">
        {Array.from({ length: repeatCount }, (_, index) => (
          <React.Fragment key={index}>
            <p className="text-8xl uppercase ml-3">{content}</p>
            <Image
              src="/svg/asterisk.svg"
              width={55}
              height={55}
              alt="asterisk svg"
              className="invert dark:invert-0 animate-spin-slow"
            />
          </React.Fragment>
        ))}
      </div>
    </Marquee>
  );
};
