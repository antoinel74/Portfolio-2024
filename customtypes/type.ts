import { KeyTextField } from "@prismicio/client";

export interface ProjectDetailsProps {
  title: KeyTextField;
  description: any;
  year: KeyTextField;
  img: any;
  link: any;
  stacks: any[];
  prevUID: string;
  nextUID: string;
  maxItems: number;
  currentIndex: number;
}

export interface ProjectCardProps {
  year: string;
  title: string;
  img: any;
  uid: any;
}
