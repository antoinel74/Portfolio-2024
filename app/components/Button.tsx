import React from "react";
import { PrismicNextLink } from "@prismicio/next";

interface ButtonProps {
  linkText: string;
  link: string;
}

export const Button: React.FC<ButtonProps> = ({ linkText, link }) => {
  return (
    <PrismicNextLink
      href={link}
      className="button rounded-full px-4 border border-white border-opacity-60 hover:border-opacity-100 py-3 uppercase transition-all"
    >
      {linkText}
    </PrismicNextLink>
  );
};
