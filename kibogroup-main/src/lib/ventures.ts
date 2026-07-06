
import { LucideIcon } from "lucide-react";


// import { infraProjects } from "./infraProjects";
import type { Project } from "./infraProjects";


import { tech } from "./ventures/tech";
import { infra } from "./ventures/infra";
import { beauty } from "./ventures/beauty";
import { mart } from "./ventures/mart";
import { fashion } from "./ventures/fashion";
import { music } from "./ventures/music";
import { events } from "./ventures/events";

import type { IconName } from "./iconMap";


export interface GlimpseItem {
  // time: string;
  title: string;
  description: string;
  // icon: LucideIcon;
  icon: IconName;
}

export const ventures: Venture[] = [
  tech,
  infra,
  beauty,
  mart,
  fashion,
  music,
  events,
];



export type Venture = {
  slug: string;
  name: string;
  logo: string;
  background : string;
  tagline: string;
  overview: string;
  services: string[];
//    services:   {
//     title: string;
//   description: string;
// }[];
  mission: string;
  vision: string;
 featuredProjects?: Project[];
  companyOverview: {
  title: string;
  description: string;
};

glimpse?: GlimpseItem[];

whyChooseUs: string[];

process: {
  title: string;
  description: string;
}[];

faqs: {
  question: string;
  answer: string;
}[];

cta: {
  title: string;
  description: string;
  button: string;
};

  // industries: string[];
  // features: string[];
  // technologies: string[];
  contact: { email: string; phone: string; location: string };
};










export const getVenture = (slug: string) => ventures.find((v) => v.slug === slug);
