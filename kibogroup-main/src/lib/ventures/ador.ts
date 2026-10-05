import ablogo from "@/assets/logos/ablogo.webp";
import abbg from "@/assets/bg/abbg.webp";



import { adorBeauty } from "@/lib/adorBeauty";


import type { Venture } from "../ventures";

import {
  ClipboardCheck,
  DraftingCompass,
  Building2,
  Handshake,
} from "lucide-react";


export const ador: Venture = {

    // ============ florencia paris ===========
  

  
    slug: "Ador Beauty",
    name: "Ador Beauty",
    logo : ablogo,
    background:abbg,
    tagline: "Healthy Skin. Thoughtful Care",
    overview:
"    ADOR BEAUTY COSMETIC is a unisex body-skincare brand focused on healthy, well-cared-for skin. The brand offers a range of body-care products designed for different skin types and concerns, combining skincare, luxury, efficacy, and sustainability.",

services: [
"Body skincare products",
"Body washes and cleansers",
"Body scrubs and exfoliators",
"Body lotions and sun protection",
"Body oils and serums",
"Body masks and treatments",
"Complete body skincare routines and kits",
],

mission:
"To promote healthy skin by giving body skincare the same attention as facial skincare, while creating products suitable for different skin tones and types.",

vision:
"To redefine body care through inclusive, effective, luxurious, and sustainable skincare solutions that encourage people to care for and embrace their natural skin.",

featuredProjects:adorBeauty,

companyOverview: {
  title: "ADOR BEAUTY COSMETIC",
  description:
    "ADOR BEAUTY COSMETIC is a body-skincare brand within our company portfolio, focused on delivering effective, inclusive, and thoughtful skincare solutions. Following its acquisition by our company, we continue to build and develop the brand while expanding its range of quality body-care products for diverse skin types and concerns.",
},



whyChooseUs: [
"Comprehensive body skincare range",
"Products designed for different skin types and tones",
"Focus on skin health rather than changing natural skin colour",
"Paraben-free, sulfate-free, and alcohol-free formulations",
"Cruelty-free products",
"Non-comedogenic formulations",
"GMP certified and CDSCO approved products",
"Sustainability-focused initiatives",
],

process: [
{
title: "Understand",
description:
"The brand focuses on understanding different body-skin concerns and the need for better care beyond facial skincare.",
},

{
title: "Formulate",
description:
"Products are developed using high-quality ingredients with an emphasis on safety, skin health, and effective body care.",
},

{
title: "Care",
description:
"The product range addresses different skincare needs including dryness, acne, pigmentation, uneven tone, and ageing.",
},

{
title: "Sustain",
description:
"ADOR incorporates sustainability into its approach, including its seed-ball initiative that encourages customers to contribute to the environment.",
},
],

contact: { email: "info_tech@kibocompanies.com", phone: "9987732384", location: "Hyderabad" },
}
