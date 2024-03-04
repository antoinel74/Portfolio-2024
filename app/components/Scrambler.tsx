import { PrismicNextLink } from "@prismicio/next";
import React, { useState, useEffect } from "react";

export const Scrambler = (props: { word: string; link?: any }) => {
  const { word, link } = props;

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [scrambledText, setScrambledText] = useState<string>(word);

  const chars = "*?><[]&@#)(.%$-_:/;^?!".split("");

  const scrambleText = (text: string): string => {
    return text
      .split("")
      .map((x) => (Math.random() > 0.666 ? chars[Math.floor(Math.random() * chars.length)] : x))
      .join("");
  };

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;

    if (isHovered) {
      interval = setInterval(() => {
        setScrambledText(scrambleText(word));
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        setScrambledText(word);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isHovered, word]);

  return (
    <PrismicNextLink
      href={link}
      className="transition-all ease-in-out cursor-pointer hover:opacity-60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setScrambledText(word);
      }}
    >
      {scrambledText ? scrambledText : word}
    </PrismicNextLink>
  );
};
