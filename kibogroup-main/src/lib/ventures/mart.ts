import kmart from "@/assets/logos/mart1.webp";
import kmartbg from "@/assets/bg/kmartbg.webp";

import type { Venture } from "../ventures";
import {
  ShoppingCart,
  PackageSearch,
  Truck,
  Store,
} from "lucide-react";

export const mart: Venture = {
    
    // ============ mart ===========
  

  
    slug: "KiboMart",
    name: "KiboMart",
    logo : kmart,
    background:kmartbg,
    tagline: "Retail & commerce",
    overview:
      "Your trusted neighborhood store bringing quality products, fresh produce, and everyday essentials right to your doorstep.",
    services: [
  "Retail & Wholesale",
  "Online Marketplace",
  "Electronics & Lifestyle Products",
  "Fast Delivery Services",
  "Customer Support",
],
mission: "To make quality products easily accessible through a convenient and customer-focused shopping experience.",
vision: "To build a modern retail ecosystem that combines trust, affordability and convenience.",
companyOverview: {
  title: "Retail Solutions Built Around Customers",
  description:
    "Kibo Mart offers a seamless retail experience through carefully curated products, modern shopping environments, and customer-first service.",
},

whyChooseUs: [
  "Wide product selection.",
  "Affordable pricing.",
  "Reliable customer service.",
  "Modern retail experience.",
],

glimpse :[
      {
    // time: "09:00 AM",
    title: "Inventory Planning",
    description:
      "Inventory levels, supplier updates, and customer demand are monitored continuously.",
    icon: "shoppingcart",
  },

  {
    // time: "11:30 AM",
    title: "Order Processing",
    description:
      "Orders are verified, packed , ensuring every customer receives the right products on time.",
    icon: "packagesearch",
  },

  {
    // time: "03:00 PM",
    title: "Logistics & Delivery",
    description:
      "Dispatches and deliveries are coordinated for a seamless shopping experience.",
    icon: "truck",
  },

  {
    // time: "06:00 PM",
    title: "Customer Experience",
    description:
      "We review customer feedback & continuously improve our retail experience.",
    icon: "store",
  },
],

process: [
  {
    title: "Product Selection",
    description: "Choosing quality products from trusted suppliers.",
  },
  {
    title: "Inventory Management",
    description: "Ensuring product availability.",
  },
  {
    title: "Customer Experience",
    description: "Providing smooth shopping experiences.",
  },
  {
    title: "Support",
    description: "Helping customers before and after purchase.",
  },
],

faqs: [
  {
    question: "Do you offer online shopping?",
    answer: "Yes, customers can conveniently shop online.",
  },
  // {
  //   question: "Do you offer home delivery?",
  //   answer: "Yes, selected locations are covered.",
  // },
  {
  question: "What products are available?",
  answer: "We offer a growing range of quality products across multiple everyday categories."
},
{
  question: "Can businesses place bulk orders?",
  answer: "Yes, we support bulk purchasing for businesses and institutions."
},
{
  question: "Do you provide home delivery?",
  answer: "Delivery services are available in selected service areas."
},
{
  question: "How can I track my order?",
  answer: "Once the order is confirmed, we can call you with the orderid"
}
],

cta: {
  title: "Experience Smarter Shopping",
  description:
    "Discover quality products with exceptional customer service.",
  button: "Shop Now",
},
    // industries: ["Retail", "Manufacturing", "Healthcare", "Logistics"],
    // features: ["Custom LLM fine-tuning", "Enterprise RAG pipelines", "Edge AI deployment", "Bias & safety auditing"],
    // technologies: ["Python", "PyTorch", "TensorFlow", "LangChain", "Vector DBs", "CUDA"],
    contact: { email: "kmart@kibocompanies.com", phone: "9987732384", location: "GOA" },
  }