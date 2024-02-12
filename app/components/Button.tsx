import React from "react";
import { PrismicNextLink } from "@prismicio/next";

interface ButtonProps {
  linkText: string;
  link: string;
}

export const Button: React.FC<ButtonProps> = ({ linkText, link }) => {
  return (
    <PrismicNextLink href={link} className="button rounded-full uppercase links pl-4 md:pl-0">
      {linkText}
    </PrismicNextLink>
  );
};
