import React from "react";
import { PrismicNextLink } from "@prismicio/next";

export const Button = (props: { linkText: string; link: string }) => {
  const { linkText, link } = props;

  return (
    <PrismicNextLink href={link} className="button px-4 md:px-0 uppercase links invert dark:invert-0">
      {linkText}
    </PrismicNextLink>
  );
};
