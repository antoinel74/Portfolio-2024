import React from "react";
import Link from "next/link";

interface ButtonProps {
  linkText: string;
  link: string;
}

export const Button: React.FC<ButtonProps> = ({ linkText, link }) => {
  return (
    <Link href={link} className="button py-3 px-5 bg-fadeGray rounded-full hover:opacity-80">
      {linkText}
    </Link>
  );
};
