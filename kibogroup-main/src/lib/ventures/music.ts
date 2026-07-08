import km from "@/assets/logos/km.jpeg";
import kmbg from "@/assets/bg/kmbg.webp";

import type { Venture } from "../ventures";
import {
  Music4,
  Headphones,
  Radio,
  Disc3,
} from "lucide-react";

const iconMap = {
    music: Music4,
    headphones: Headphones,
    radio: Radio,
    disc: Disc3,
};

export const music: Venture =  {
    
    // ============ music ===========
  
  
    slug: "Kibo Music",
    name: "Kibo Music",
    logo : km,
    background:kmbg,
    tagline: "Turning every beat into an unforgettable experience.",
    overview:
      "We are a dynamic music venture dedicated to producing, distributing, and championing fresh talent across all genres. Our mission is to bridge the gap between brilliant creators and passionate listeners worldwide. Explore our latest releases, artist roster, and upcoming studio projects.",
    services: ["IoT Platforms", "Smart Factory Solutions", "Asset Tracking", "Edge Analytics"],
    mission: "To create meaningful musical experiences that connect artists, audiences and communities.",
    vision: "To build a platform where music inspires creativity, collaboration and unforgettable moments.",
    companyOverview: {
  title: "Inspiring Through Music",
  description:
    "Kibo Music nurtures creativity by producing, promoting, and delivering exceptional musical experiences. We collaborate with artists, creators, and audiences to celebrate the power of music across genres and platforms.",
},

whyChooseUs: [
  "Professional music production services.",
  "Artist development and promotion.",
  "Modern recording and production facilities.",
  "Creative collaborations across multiple genres.",
],

glimpse :[
  {
    // time: "09:00 AM",
    title: "Planning",
    description:
      "Artists and producers discuss concepts & recording schedules.",
    icon: "music",
  },

  {
    // time: "11:00 AM",
    title: "Sessions",
    description:
      "Recording & production in professional studios.",
    icon: "headphones",
  },

  {
    // time: "03:00 PM",
    title: "Editing",
    description:
      "Audio engineers refine every track to professional standards.",
    icon: "radio",
  },

  {
    // time: "06:00 PM",
    title: "Release",
    description:
      "Music is prepared for streaming & promotional release.",
    icon: "disc",
  },
],

process: [
  {
    title: "Discovery",
    description: "Understanding the artist's style and vision.",
  },
  {
    title: "Production",
    description: "Recording, composing, and producing high-quality music.",
  },
  {
    title: "Distribution",
    description: "Publishing music across digital platforms.",
  },
  {
    title: "Promotion",
    description: "Helping artists reach wider audiences.",
  },
],

faqs: [
  {
    question: "Do you work with independent artists?",
    answer: "Yes, we collaborate with both emerging and established artists.",
  },
  {
    question: "Do you provide music production services?",
    answer: "Yes, including recording, mixing, mastering, and distribution.",
  },
//   {
//   question: "Do you work with independent artists?",
//   answer: "Yes, we collaborate with both emerging and established artists."
// },
{
  question: "Can you produce original music?",
  answer: "Yes, we offer recording, production, mixing, and mastering services."
},
{
  question: "Do you help distribute music digitally?",
  answer: "Yes, we assist with publishing music across major streaming platforms."
},
{
  question: "Can brands collaborate with Kibo Music?",
  answer: "Yes, we welcome partnerships for campaigns, events, and creative productions."
}
],

cta: {
  title: "Bring Your Music to the World",
  description:
    "Let's create, produce, and share music that inspires audiences everywhere.",
  button: "Start Your Journey",
},
    // industries: ["Manufacturing", "Oil & Gas", "Logistics", "Smart Cities"],
    // features: ["Edge-to-cloud architecture", "Real-time telemetry", "Predictive maintenance", "Digital twin support"],
    // technologies: ["MQTT", "AWS IoT", "Azure IoT", "Rust", "TimescaleDB"],
    contact: { email: "hr_tech@kibocompanies.com", phone: "9987732384", location: "Hyderabad" },
  }