
import ke from "@/Assets/logos/ke.jpeg";
import kebg from "@/Assets/bg/kebg.webp";



import type { Venture } from "../ventures";
import {
  CalendarCheck,
  Mic2,
  Users,
  PartyPopper,
} from "lucide-react";

export const events: Venture = {
    
  // ============ events ===========
  

  
    slug: "Kibo Events",
    name: "Kibo Events",
    logo : ke,
    background:kebg,
    tagline: "Events & Experiences",
    overview:
      "From intimate gatherings to grand celebrations, we craft experiences that inspire, connect, and leave lasting memories.",
   services: [
  "Corporate Events",
  "Conferences & Summits",
  "Award Ceremonies",
  "Exhibitions & Expos",
  "End-to-End Event Management",
],
mission: "To create memorable events that bring people, businesses and ideas together through thoughtful planning and flawless execution.",
vision: "To become a preferred partner for impactful corporate, educational and cultural events.",
companyOverview: {
  title: "Creating Memorable Experiences",
  description:
    "Kibo Events specializes in planning, designing, and executing exceptional events that leave lasting impressions. From corporate conferences to luxury celebrations, we deliver seamless experiences through creativity, precision, and flawless execution.",
},

whyChooseUs: [
  "End-to-end event planning and management.",
  "Creative concepts tailored to every occasion.",
  "Experienced event professionals and vendors.",
  "Timely execution with attention to every detail.",
],

glimpse :[
    {
    // time: "09:00 AM",
    title: "Event Planning",
    description:
      "Teams coordinate schedules, venues for upcoming events.",
    icon: "calendarcheck",
  },

  {
    // time: "11:30 AM",
    title: "Vendor Coordination",
    description:
      "Suppliers, decorators and technical crews finalize preparations.",
    icon: "users",
  },

  {
    // time: "03:00 PM",
    title: "On-site Execution",
    description:
      "Our event managers supervise every detail to ensure flawless delivery.",
    icon: "mic",
  },

  {
    // time: "08:00 PM",
    title: "Celebrating Success",
    description:
      "We wrap up each event by ensuring client satisfaction.",
    icon: "partypopper",
  },
],

process: [
  {
    title: "Consultation",
    description: "Understanding your vision, goals, and event requirements.",
  },
  {
    title: "Planning",
    description: "Creating timelines, budgets, and event strategies.",
  },
  {
    title: "Execution",
    description: "Managing every aspect of the event seamlessly.",
  },
  {
    title: "Delivery",
    description: "Ensuring an unforgettable experience for every guest.",
  },
],

faqs: [
  {
    question: "What types of events do you manage?",
    answer: "Corporate events, weddings, product launches, exhibitions, concerts, and private celebrations.",
  },
  {
    question: "Do you provide complete event management?",
    answer: "Yes, we handle planning, coordination, execution, and post-event support.",
  },
  {
  question: "Do you organize corporate events?",
  answer: "Yes, we manage conferences, product launches, seminars, and corporate celebrations."
},
{
  question: "Can you customize event themes?",
  answer: "Absolutely. Every event is designed around the client's vision and objectives."
},
{
  question: "Do you handle venue selection?",
  answer: "Yes, we assist in selecting and coordinating suitable venues."
},
// {
//   question: "Do you provide complete event management?",
//   answer: "Yes, from planning and logistics to execution and post-event coordination."
// }
],

cta: {
  title: "Let's Create Something Extraordinary",
  description:
    "Partner with Kibo Events to bring your vision to life with creativity and excellence.",
  button: "Plan Your Event",
},
    // industries: ["Finance", "Energy", "Healthcare", "Public Sector"],
    // features: ["ISO 27001 aligned", "24/7 threat hunting", "Red & purple teaming", "Compliance advisory"],
    // technologies: ["Splunk", "CrowdStrike", "Palo Alto", "Wazuh", "Sentinel"],
    contact: { email: "events@kibocompanies.com", phone: "+9987732384", location: "Hyderabad" },
  }