import React from "react";
import { PrismicNextLink } from "@prismicio/next";

interface ButtonProps {
  linkText: string;
  link: string;
}

export const Button: React.FC<ButtonProps> = ({ linkText, link }) => {
  return (
    <PrismicNextLink href={link} className="button py-3 px-5 border-2 border-white rounded-full hover:opacity-80">
      {linkText}
    </PrismicNextLink>
  );
};
