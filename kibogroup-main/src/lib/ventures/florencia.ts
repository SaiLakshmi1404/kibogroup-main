import fp from "@/assets/logos/fp.png";
import fpbg from "@/assets/bg/fpbg.webp";



import { florenciaPerfume } from "@/lib/florenciaPerfume";


import type { Venture } from "../ventures";

import {
  ClipboardCheck,
  DraftingCompass,
  Building2,
  Handshake,
} from "lucide-react";


export const florencia: Venture = {

    // ============ florencia paris ===========
  

  
    slug: "Florencia Paris ",
    name: "Florencia Paris ",
    logo : fp,
    background:fpbg,
    tagline: "Luxury Perfume Brand",
  overview:
    "Florencia Paris is a fragrance brand offering luxury-inspired perfumes crafted with premium fragrance ingredients at accessible prices. The brand focuses on delivering elegant scents designed for everyday wear.",

  services: [
    "Luxury-inspired perfumes",
    "Eau de Parfum collections",
    "Perfume gift sets and combo collections",
    "Personal fragrance experiences",
    "Online perfume shopping",
    
  ],

  mission:
    "To make luxury fragrance experiences accessible to everyone by offering premium-inspired perfumes at honest and affordable prices.",

  vision:
    "To become a trusted fragrance brand known for quality, long-lasting scents, elegant products, and accessible luxury.",

featuredProjects:florenciaPerfume,

companyOverview: {
  title: "Florencia Paris Distribution",
  description:
    "Florencia Paris is a fragrance brand offering luxury-inspired perfumes. Our company serves as an authorized distributor of Florencia Paris products in Hyderabad, helping customers access the brand's fragrance collections locally.",
},

distribution: {
  title: "Our Distribution Partnership",
  description:
    "We are proud to distribute Florencia Paris products in Hyderabad, making the brand's fragrance collections accessible to customers in our local market.",
},

  whyChooseUs: [
    "Luxury-inspired fragrance collections",
    "Premium fragrance ingredients",
    "Long-lasting fragrance performance",
    "Cruelty-free and vegan products",
    "Affordable pricing",
    "Designed for Indian climate and preferences",
  ],

  process: [
    {
      title: "Sourced",
      description:
        "Premium fragrance oils are sourced from trusted global perfumery houses.",
    },
    {
      title: "Inspired",
      description:
        "In-house perfumers study iconic luxury scent profiles and develop original Florencia fragrances.",
    },
    {
      title: "Crafted",
      description:
        "Fragrances are developed with attention to scent character, quality, and everyday wearability.",
    },
    {
      title: "Delivered",
      description:
        "Products are made available through online shopping with delivery across India.",
    },
  ],




   
    contact: { email: "info_tech@kibocompanies.com", phone: "9987732384", location: "Hyderabad" },
  }
