import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { ProjectNavProps } from "@/customtypes/type";

export const ProjectNav: React.FC<ProjectNavProps> = ({ prevUID, currentIndex, maxItems, nextUID }) => {
  return (
    <div className="absolute top-4 left-4 flex items-center bg-black rounded-full py-1 px-2 opacity-75 z-20">
      <PrismicNextLink href={`/projects/${prevUID}`} className="hover:scale-105">
        PREV
      </PrismicNextLink>
      <span className="mx-1 flex inline-block">&#124; {`${currentIndex}/${maxItems}`} &#124;</span>
      <PrismicNextLink href={`/projects/${nextUID}`} className="hover:scale-105">
        NEXT
      </PrismicNextLink>
    </div>
  );
};
