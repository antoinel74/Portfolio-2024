import React from "react";
import { PrismicNextLink } from "@prismicio/next";

interface ButtonProps {
  linkText: string;
  link: string;
}

export const Button: React.FC<ButtonProps> = ({ linkText, link }) => {
  return (
    <PrismicNextLink href={link} className="button px-4 md:px-0 uppercase links invert dark:invert-0">
      {linkText}
    </PrismicNextLink>
  );
};
