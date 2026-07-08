
import kf from "@/assets/logos/kf.webp";
import kfbg from "@/assets/bg/kfbg.webp";

import type { Venture } from "../ventures";
import {
  Shirt,
  Scissors,
  Ruler,
  ShoppingBag,
} from "lucide-react";

export const fashion: Venture = {
    
    // ============ fashion ===========
  
  
    slug: "Kibo Fashion",
    name: "Kibo Fashion",
    logo : kf,
    background:kfbg,
    // background:kf1bg,
    tagline: "Fashion & lifestyle",
    overview:
      "Kibo Fashion brings modern style, premium quality, and innovative design together to redefine everyday fashion. From casual wear to elegant collections, we create fashion that empowers individuality and confidence.",
    services: [
  "Fashion Apparel",
  "Designer Collections",
  "Lifestyle Accessories",
  "Seasonal Collections",
  "Custom Fashion Solutions",
],
mission: "To design fashion that combines contemporary style, comfort and individuality.",
vision: "To inspire confidence through clothing that reflects creativity and modern lifestyles.",
companyOverview: {
  title: "Style Designed for Every Generation",
  description:
    "Kibo Fashion blends creativity, quality, and craftsmanship to create modern fashion that reflects confidence, individuality, and timeless elegance for every lifestyle.",
},

whyChooseUs: [
  "Premium quality fabrics and craftsmanship.",
  "Contemporary and timeless designs.",
  "Customer-focused fashion collections.",
  "Commitment to sustainable fashion practices.",
],

glimpse :[
     {
    // time: "09:00 AM",
    title: "Trend Research",
    description:
      "Design teams explore trends, fabrics and seasonal collections.",
    icon: "shirt",
  },

  {
    // time: "11:00 AM",
    title: "Design Studio",
    description:
      "Designers sketch concepts and prepare prototypes.",
    icon: "scissors",
  },

  {
    // time: "03:00 PM",
    title: "Production Review",
    description:
      "Garments undergo fitting and quality inspection.",
    icon: "ruler",
  },

  {
    // time: "06:00 PM",
    title: "Collection Launch",
    description:
      "Products are prepared for retail and customer showcases.",
    icon: "shoppingbag",
  },
],

process: [
  {
    title: "Design",
    description: "Creating collections inspired by modern trends and timeless elegance.",
  },
  {
    title: "Production",
    description: "Crafting garments with premium materials and precision.",
  },
  {
    title: "Quality Assurance",
    description: "Ensuring every product meets the highest standards.",
  },
  {
    title: "Delivery",
    description: "Bringing fashion collections to customers worldwide.",
  },
],

faqs: [
  {
    question: "Do you offer custom fashion collections?",
    answer: "Yes, we provide customized solutions for selected collections and collaborations.",
  },
  {
    question: "Are your products sustainably made?",
    answer: "We continuously adopt responsible sourcing and sustainable manufacturing practices.",
  },
  {
  question: "Do you launch seasonal collections?",
  answer: "Yes, our collections are refreshed to reflect evolving trends and customer preferences."
},
{
  question: "Can businesses collaborate with Kibo Fashion?",
  answer: "Yes, we welcome retail, designer, and brand collaborations."
},
{
  question: "Are your products made with quality materials?",
  answer: "Quality craftsmanship and carefully selected fabrics are central to every collection."
},
// {
//   question: "Do you offer customized apparel?",
//   answer: "Selected customization services are available based on project requirements."
// }
],

cta: {
  title: "Discover Your Signature Style",
  description:
    "Explore fashion that combines elegance, comfort, and modern design.",
  button: "Explore Collection",
},
    // industries: ["Manufacturing", "Retail", "Real Estate", "Hospitality"],
    // features: ["Cloud-native modules", "Real-time dashboards", "Multi-entity & multi-currency", "Mobile-first UX"],
    // technologies: ["Node.js", "NestJS", "PostgreSQL", "React", "GraphQL"],
    contact: { email: "fashions@kibocompanies.com", phone: "9987732384", location: "Hyderabad" },
  }