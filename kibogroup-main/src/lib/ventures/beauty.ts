import kb from "@/assets/logos/kb.webp";
import kbbg from "@/assets/bg/kbbg.jpg";

import type { Venture } from "../ventures";
import {
  Sparkles,
  Palette,
  PackageCheck,
  HeartHandshake,
} from "lucide-react";

export const beauty: Venture =  {
    
    // ============ beauty ===========
  
  
    slug: "Kibo Beauty",
    name: "Kibo Beauty",
    logo : kb,
    background:kbbg,
    tagline: "Beauty & Skincare",
    overview:
      "Kibo Beauty brings together luxurious skincare, high-performance cosmetics, and clean beauty innovations to help you look and feel your absolute best. From everyday essentials to indulgent treatments, we celebrate beauty in every form.",
    services: [
  "Beauty Products",
  "Skincare Solutions",
  "Hair Care",
  "Cosmetics",
  "Personal Care Essentials",
],
mission: "To offer beauty and skincare products that promote confidence through quality and everyday care.",
vision: "To become a trusted beauty brand focused on simplicity, wellness and self-expression.",
companyOverview: {
  title: "Beauty Backed by Care",
  description:
    "Kibo Beauty delivers premium beauty and wellness services designed to enhance confidence, comfort, and self-care.",
},

whyChooseUs: [
  "Certified professionals.",
  "Premium beauty products.",
  "Personalized treatments.",
  "Modern equipment.",
],

glimpse :[
    {
    // time: "09:00 AM",
    title: "Product Research",
    description:
      "Our specialists evaluate ingredients, trends and customer needs.",
    icon: "sparkles",
  },

  {
    // time: "11:30 AM",
    title: "Product Development",
    description:
      "Teams refine formulations and packaging for premium quality.",
    icon: "palette",
  },

  {
    // time: "03:00 PM",
    title: "Quality Inspection",
    description:
      "Every product is checked to meet safety and performance standards.",
    icon: "packagecheck",
  },

  {
    // time: "05:30 PM",
    title: "Customer Experience",
    description:
      "Support teams ensure every customer receives exceptional service.",
    icon: "hearthandshake",
  },
],

process: [
  {
    title: "Browse Products",
    description: "Explore a curated collection of premium beauty and skincare products.",
  },
  {
    title: "Select Your Favorites",
    description: "Compare products and add your preferred items to the cart.",
  },
  {
    title: "Secure Checkout",
    description: "Complete your purchase through a fast and secure checkout experience.",
  },
  {
    title: "Fast Delivery",
    description: "Your order is carefully packed and delivered right to your doorstep.",
  },
],

faqs: [
  // {
  //   question: "Are treatments customized?",
  //   answer: "Yes, services are tailored to individual needs.",
  // },
  {
    question: "Do you use premium products?",
    answer: "Absolutely. We use trusted brands only.",
  },
//   {
//   question: "Are your treatments suitable for all skin types?",
//   answer: "Yes, every treatment is customized after an initial consultation."
// },
{
  question: "Do you use premium beauty products?",
  answer: "We use carefully selected professional-grade beauty products."
},
// {
//   question: "Can appointments be booked online?",
//   answer: "Yes, appointments can be scheduled through our contact channels."
// },
{
  question: "Do you offer bridal packages?",
  answer: "Yes, customized beauty packages are available for special occasions."
}
],

cta: {
  title: "Feel Your Best Every Day",
  description:
    "Experience beauty services designed around your unique needs.",
  button: "Book Appointment",
},
    // industries: ["E-Commerce", "Travel", "Media", "Lifestyle Brands"],
    // features: ["Design systems", "App Store / Play Store launches", "A/B experimentation", "Accessibility-first"],
    // technologies: ["React", "Next.js", "Swift", "Kotlin", "Shopify", "Figma"],
    contact: { email: "beautyproducts@kibocompanies.com", phone: "9987732384", location: "Hyderabad" },
  }
