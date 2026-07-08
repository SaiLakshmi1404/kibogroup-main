import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Gem, Users, ArrowRight } from "lucide-react";

import ab from "@/assets/bg/ab.png";
import c from "@/assets/team/c.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kibo Group of Companies" },
      { name: "description", content: "Learn about Kibo Group — our mission, vision, values and the leadership building the next chapter of enterprise technology." },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Target, title: "Our Mission", desc: "To create value across technology, infrastructure, retail, lifestyle, and services by building scalable solutions, empowering teams, and maintaining uncompromised quality standards" },

  { icon: Eye, title: "Our Vision", desc: "To emerge as a globally recognized multi-industry brand known for transforming everyday experiences into premium standards of living." },

  { icon: Gem, title: "Our Values", desc: "Driven by excellence & innovation, we uphold integrity prioritize our customers, and build reliable, future-ready businesses." },
  // { icon: Users, title: "Our People", desc: "We invest in extraordinary engineers, designers and operators — and we build a culture where they thrive." },
];

const industries = [
  {
    title: "Technology",
    description:
      "Creating intelligent software solutions that help businesses innovate and scale.",
  },
  {
    title: "Infrastructure",
    description:
      "Building sustainable spaces and engineering solutions for tomorrow.",
  },
  {
    title: "Retail",
    description:
      "Delivering trusted products and exceptional shopping experiences.",
  },
  {
    title: "Events",
    description:
      "Creating impactful conferences, exhibitions, and business experiences.",
  },
  {
    title: "Fashion",
    description:
      "Celebrating creativity through contemporary fashion and lifestyle.",
  },
  {
    title: "Beauty",
    description:
      "Providing thoughtfully curated beauty and personal care solutions.",
  },

   {
    title: "Music",
    description:
      "We are a dynamic music venture dedicated to producing, distributing, and championing fresh talent across all genres.",
  },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
<div className="absolute inset-0">
  <img
    src={ab}
    alt=""
       loading="lazy"
       decoding="async"
    className="h-full w-full object-cover opacity-55 brightness-110 contrast-105"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-background/20 to-background/55" />
</div>
        <div className="container-page relative py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">About Kibo Group</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
            A diversified technology group <span className="text-gradient-gold">building tomorrow.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
            We design, build and operate enterprise-grade software for the world's most ambitious organizations.
          </p>
        </div>
      </section>

    {/* ourstory */}

      <section className="section-y border-t border-border">
  <div className="container-page">

    <div className="max-w-4xl mx-auto text-center">
      
      <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
        Our Story
      </p>
         {/* divider */}

       <div className="h-1 w-16 rounded-full bg-primary mx-auto mb-4"></div>

      <h2 className="font-display text-3xl md:text-4xl font-bold">
        Building businesses with purpose.
      </h2>

      <p className="mt-6 text-lg text-muted-foreground leading-8">
        Every great journey begins with a belief. Kibo Group was founded with
        a simple yet powerful vision: to build businesses that solve meaningful
        problems while creating opportunities for people and communities.
      </p>

      <p className="mt-6 text-muted-foreground leading-8">
        What started as a single ambition has evolved into a diversified group
        spanning technology, infrastructure, retail, fashion, beauty, and
        events. Although each vertical serves a different industry, they all
        share the same foundation of innovation, integrity, and excellence.
      </p>

      {/* <p className="mt-6 text-muted-foreground leading-8 mb-8">
        At Kibo Group, success is measured not only by growth but by the value
        we create for customers, partners, employees, and society. Every
        milestone inspires us to think bigger, build smarter, and lead with
        purpose.
      </p> */}
    </div>

  </div>
</section>

{/* chairman message */}
<section className="relative border-y border-white/10 bg-[#06182d]">



  <div className="container-page pt-4 pb-0 lg:pt-4 lg:pb-0 relative">

    <div className="grid lg:grid-cols-[3fr_2fr] gap-4 lg:gap-6 items-end">

      {/* LEFT */}
      <div className="pb-8 lg:pb-12">
  

              
        <div className="max-w-3xl"> 
         

        <p className="text-6xl text-primary font-serif leading-none">“</p>

        <blockquote className="text-xl md:text-3xl font-display leading-tight mb-1">
          At Kibo Group, our purpose is to build businesses that create
          meaning, deliver value, and shape a better tomorrow for people and
          communities. 
            <span className="inline-block text-6xl ml-3 text-primary font-serif align-top">
                ”
              </span>
        </blockquote>

      
    

          <div className="mt-5">
            <h3 className="text-2xl font-display font-bold">
              Syed Rashid Shuttari
            </h3>
            <p className="text-primary text-xl mt-2">
              Chairman, Kibo Group
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT — photo bleeds off top & right edge, no box/glow */}
<div className="relative flex justify-end h-full">

    {/* Highlight glow directly behind the photo */}
      {/* Highlight glow — explicit size + z-index, not reliant on parent height */}


    <div
    className="absolute z-0"
    style={{
      right: "-40px",
      bottom: "20px",
      width: "460px",
      height: "460px",
      borderRadius: "9999px",
      background: "radial-gradient(circle, rgba(212,160,86,.55) 0%, rgba(212,160,86,0) 70%)",
      filter: "blur(70px)",
    }}
  />
  <img
    src={c}
    alt="Chairman"
       loading="lazy"
       decoding="async"
    className="
      relative z-10
      lg:absolute
      lg:right-0
      lg:bottom-0
      h-[420px]
      lg:h-[125%]
      w-auto
      object-contain
      object-bottom
    "
  />
</div>

    </div>
  </div>

</section>

     {/* mission and vision */}

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Engineering excellence, made enduring.</h2>
            <p className="mt-5 text-muted-foreground">
              Kibo Group brings together seven specialized verticals spanning infra, tech, events, mart, beauty products, fashion and music. Each company is a leader in its discipline — together, they form an integrated capability that can take any digital ambition from concept to operations.
            </p>
            <p className="mt-3 text-muted-foreground">
              We work the way enterprise should: deep accountability, and a long-term mindset. We build software that earns trust — and keeps it.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors shadow-gold">
              Partner with Kibo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, index) => (
              < div key={p.title}     
              className={`card-elev p-6 hover:-translate-y-1 hover:border-primary transition-all ${
              index === 2 ? "sm:col-span-2" : ""
              }`} >
                <div className="h-11 w-11 rounded-md bg-primary/10 text-primary grid place-items-center mb-4">
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="font-display font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


       {/* Industries We Serve */}

          <section className="section-y border-t border-border">
      <div className="container-page">

        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Industries We Empower
          </p>

          <h2 className="font-display text-4xl font-bold mt-3">
            One vision. Multiple industries.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {industries.map((item) => (

            <div
              key={item.title}
              className="card-elev p-7 hover:border-primary transition"
            >
              <h3 className="font-display text-2xl mb-4">
                {item.title}
              </h3>

              <p className="text-muted-foreground leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>
       

      </div>
    </section>

    {/* CTA  */}
       <section className="section-y border-t border-border bg-[color:var(--surface)]/50">
        <div className="container-page">
          <div className="card-elev p-8 md:p-12 text-center max-w-3xl mx-auto">
           
         
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Questions? Let's
                <br />
                talk.
              </h2>

              <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
                Contact our team to get the assistance
                <br />
                and answers you're looking for.
              </p>
         
  
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors shadow-gold">
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
