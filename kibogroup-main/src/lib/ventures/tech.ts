import kt from "@/assets/logos/kt.jpg";
import ktbg from "@/assets/bg/ktbg.jpeg";



import type { Venture } from "../ventures";
import {
  Laptop,
  Code2,
  Database,
  Rocket,
} from "lucide-react";


export const tech: Venture =  {
    
    // ============ tech===========

  
    slug: "Kibotech",
    name: "Kibotech",
    logo : kt,
    background:ktbg,
    tagline:"Pioneering Digital Transformation",
    overview:
   
        "Empowering enterprises with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth in the digital age.",

    services: ["Cloud Migration", "DevOps & SRE", "Kubernetes Platforms", "Cloud Cost Optimization", "24/7 Managed Services"],
    mission: "To help businesses embrace modern technology through practical software solutions, cloud services and digital innovation.",
    vision: "To become a trusted technology partner that enables organizations to grow confidently in the digital era.",
companyOverview: {
  title: "Driving Digital Transformation",
  description:
    "Kibo Technologies develops modern software solutions that help businesses improve efficiency, automate operations, and accelerate growth through innovation.",
},

whyChooseUs: [
  "Scalable software solutions.",
  "Agile development methodology.",
  "Experienced development team.",
  "Latest cloud and AI technologies.",
],

glimpse :[
     {
    // time: "09:00 AM",
    title: "Sprint Planning",
    description:
      "Developers and product teams align on client deliverables.",
    icon: "laptop",
  },

  {
    // time: "11:00 AM",
    title: "Development",
    description:
      "Engineers build APIs and enterprise software solutions.",
    icon: "code",
  },

  {
    // time: "03:00 PM",
    title: "Testing & QA",
    description:
      "Quality assurance teams validate features, performance and security.",
    icon: "database",
  },

  {
    // time: "06:00 PM",
    title: "Deployment",
    description:
      "Solutions are deployed with monitoring and client support.",
    icon: "rocket",
  },
],

process: [
  {
    title: "Discovery",
    description: "Understanding business goals.",
  },
  {
    title: "Design",
    description: "Creating intuitive UI/UX experiences.",
  },
  {
    title: "Development",
    description: "Building secure and scalable applications.",
  },
  {
    title: "Deployment",
    description: "Launching and supporting your product.",
  },
],

faqs: [
  {
    question: "Do you build custom software?",
    answer: "Yes. Every solution is tailored to your business needs.",
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes, we offer continuous support and updates.",
  },
  {
  question: "What software solutions do you develop?",
  answer: "We build custom web applications, enterprise software, cloud solutions, and AI-powered platforms."
},
{
  question: "Can existing software be upgraded?",
  answer: "Yes, we modernize and enhance legacy systems with the latest technologies."
},
{
  question: "Do you provide cloud deployment?",
  answer: "Yes, we support deployment on leading cloud platforms."
},
{
  question: "Is post-launch support available?",
  answer: "Yes, we provide maintenance, updates, and technical support after deployment."
}
],

cta: {
  title: "Transform Your Business Digitally",
  description:
    "Let's build technology that helps your business grow faster.",
  button: "Talk to Our Experts",
},
    
    // industries: ["Banking", "Telecom", "Healthcare", "Government"],
    // features: ["99.99% SLA", "Zero-downtime deployments", "Compliance-ready architectures", "Multi-cloud orchestration"],
    // technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "ArgoCD"],
    contact: { email: "info_tech@kibocompanies.com", phone: "9987732384", location: "Hyderabad" },
  }