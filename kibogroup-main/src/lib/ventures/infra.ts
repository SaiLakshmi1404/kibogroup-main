import ki from "@/Assets/logos/ki.png";
import kibg from "@/Assets/bg/kibg.png";


import { infraProjects } from ".././infraProjects";


import type { Venture } from "../ventures";

import {
  ClipboardCheck,
  DraftingCompass,
  Building2,
  Handshake,
} from "lucide-react";


export const infra: Venture = {

    // ============ infra ===========
  

  
    slug: "KiboInfra",
    name: "KiboInfra",
    logo : ki,
    background:kibg,
    tagline: "Infrastructure & Architecture",
    overview:
      "Creating architectural masterpieces that stand the test of time, combining luxury, sustainability, and innovative design.",
    services: [
  "Infrastructure Development",
  "Architecture & Design",
  "Project Management",
  "Construction Consulting",
  "Facility Planning",
],
mission: "To deliver reliable infrastructure and architectural solutions built on quality, safety and long-term value.",
vision: "To create spaces and infrastructure that contribute to sustainable development and stronger communities.",

featuredProjects:infraProjects,
    // industries: ["Retail Banking", "Investment", "Insurance", "Fintech Startups"],
    companyOverview: {
  title: "Building the Infrastructure of Tomorrow",
  description:
    "Kibo Infra delivers high-quality infrastructure, construction, and architectural solutions for commercial, residential, and industrial developments. We combine engineering expertise with modern technologies to create projects that stand the test of time.",
},

whyChooseUs: [
  "Experienced engineering and construction professionals.",
  "Commitment to quality, safety, and timely delivery.",
  "Modern project management practices.",
  "Sustainable and future-ready infrastructure solutions.",
],

glimpse :[
     {
    // time: "09:00 AM",
    title: "Project Planning",
    description:
      "Our architects, engineers gathers all requirements before work begins.",
    icon: "clipboardcheck",
  },

  {
    // time: "11:30 AM",
    title: "Design & Engineering",
    description:
      "Teams collaborate on drawings, reviews to ensure every project meets quality standards.",
    icon: "draftingcompass",
  },

  {
    // time: "03:00 PM",
    title: "Site Coordination",
    description:
      "Engineers coordinate with contractors & suppliers to keep construction moving efficiently.",
    icon: "building",
  },

  {
    // time: "05:30 PM",
    title: "Client Progress Review",
    description:
      "Daily progress is documented,updates are shared with stakeholders.",
    icon: "handshake",
  },
],

process: [
  {
    title: "Consultation",
    description: "Understanding project goals and client requirements.",
  },
  {
    title: "Planning",
    description: "Developing detailed project strategies and timelines.",
  },
  {
    title: "Design",
    description: "Creating innovative architectural and engineering designs.",
  },
  {
    title: "Execution",
    description: "Delivering projects with precision and quality.",
  },
],

faqs: [
  {
    question: "What industries do you serve?",
    answer: "Commercial, residential, industrial, hospitality, and public infrastructure.",
  },
  {
    question: "Do you handle turnkey projects?",
    answer: "Yes, from planning and design to execution and completion.",
  },
  {
  question: "Do you undertake residential construction projects?",
  answer: "Yes, we provide solutions for residential, commercial, industrial, and mixed-use developments."
},
{
  question: "Can you manage projects from design to completion?",
  answer: "Absolutely. We offer end-to-end project planning, design, execution, and delivery."
},
{
  question: "Do you follow sustainable construction practices?",
  answer: "Yes, sustainability and efficient resource management are integrated into our projects wherever possible."
},
{
  question: "How do I request a project consultation?",
  answer: "Simply contact our team through the website and we'll schedule an initial consultation."
}
],

cta: {
  title: "Let's Build Your Next Landmark",
  description:
    "Partner with Kibo Infra to transform your vision into world-class infrastructure.",
  button: "Start Your Project",
},
    // features: ["PCI-DSS certified", "Real-time fraud detection", "Open Banking APIs", "Regulatory reporting"],
    // technologies: ["Java", "Kotlin", "Spring", "Kafka", "PostgreSQL", "React"],
    contact: { email: "infra@kibocompanies.com", phone: "9987732384", location: "Hyderabad" },
  }
