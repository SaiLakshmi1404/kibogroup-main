import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, Layers, Building2, Sparkles, Cpu } from "lucide-react";
import { getVenture, ventures } from "@/lib/ventures";
import FeaturedProjects from "@/components/FeaturedProjects";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
// import type { Venture } from "@lib/ventures";
import GlimpseInside from "@/components/GlimpseInside";
import ServicesOffered from "@/components/ServicesOffered";





export const Route = createFileRoute("/ventures/$slug")({
  loader: ({ params }) => {
    const venture = getVenture(params.slug);
    if (!venture) throw notFound();
    return { venture };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.venture.name} — Kibo Group` },
          { name: "description", content: loaderData.venture.overview },
          { property: "og:title", content: `${loaderData.venture.name} — Kibo Group` },
          { property: "og:description", content: loaderData.venture.tagline },
        ]
      : [],
  }),
  component: VenturePage,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Verticle not found</h1>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary">Return home <ArrowRight className="h-4 w-4" /></Link>
    </div>
  ),
});

function VenturePage() {
  const { venture } = Route.useLoaderData();
  // const others= ventures.filter((v) => v.slug !== venture.slug).slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number | null>(null);



  return (
    <>


<section className="relative border-b border-border overflow-hidden">

  {/* Background */}


   <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${venture.background})`,
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Existing golden glow */}
  <div
    className="absolute inset-0 opacity-20"
    style={{
      backgroundImage:
        "radial-gradient(circle at 80% 20%, rgba(212,160,86,.4) 0%, transparent 50%)",
    }}
  />


  <div className="container-page relative py-10 md:py-14">

    {/* Back Link */}
    <Link
      to="/"
      className="text-xs uppercase tracking-[0.25em] text-primary hover:text-primary-hover"
    >
      ← Kibo Vertical
    </Link>

    {/* Small Label */}
    <p className="mt-8 text-xs uppercase tracking-[0.3em] text-primary font-semibold">
      Vertical
    </p>

    {/* Logo + Name */}
    <div className="mt-3 flex items-center gap-5">

      <img
        src={venture.logo}
        alt={venture.name}
          
          decoding="async"
   className="h-14 w-14 object-contain"
      />

      <div className="border-l-2 border-primary pl-5">

        <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight">
          {venture.name}
        </h1>

        <p className="mt-1 text-lg text-primary font-medium">
          {venture.tagline}
        </p>

      </div>

    </div>

    {/* Divider */}
    <div className="mt-8 h-px w-24 bg-primary/40" />

    {/* Overview */}
    <p className="mt-6 max-w-3xl text-muted-foreground leading-8">
      {venture.overview}
    </p>

    {/* Button */}
    <div className="mt-8">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
      >
        Start a Conversation
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

  </div>

</section>

{/* Company Overview */}
<section className="section-y">
  <div className="container-page max-w-5xl">

    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
        Company Overview
      </p>

      <h2 className="font-display text-3xl md:text-5xl font-bold">
        {venture.companyOverview.title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {venture.companyOverview.description}
      </p>
    </div>

  </div>
</section>

      {/* ================= Mission & Vision ================= */}

      <section className="section-y border-t border-border">
    <div className="container-page py-8">
<div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* Mission */}

      <div className="rounded-3xl border border-border bg-card/40 backdrop-blur-sm p-10 hover:border-primary/50 transition-all duration-300">
      <div className="h-1 w-16 rounded-full bg-primary mb-6"></div>
      <p className="text-xs uppercase tracking-[0.28em] text-primary mb-5">
      OUR MISSION
      </p>

      <h3 className="font-display text-3xl font-bold mb-6">
      Building Reliable Infrastructure
      </h3>

      <p className="text-muted-foreground leading-8">
      {venture.mission}
      </p>

      </div>

      {/* Vision */}

      <div className="rounded-3xl border border-border bg-card/40 backdrop-blur-sm p-10 hover:border-primary/50 transition-all duration-300">
      <div className="h-1 w-16 rounded-full bg-primary mb-6"></div>
      <p className="text-xs uppercase tracking-[0.28em] text-primary mb-5">
      OUR VISION
      </p>

      <h3 className="font-display text-3xl font-bold mb-6">
      Creating Tomorrow's Foundations
      </h3>

      <p className="text-muted-foreground leading-8">
      {venture.vision}
      </p>

      </div>

      </div>

      </div>

      </section>

{/* divider */}

<div className="container-page">
    <div className="h-px bg-border mt-4"></div>
</div>

      <section className="section-y">
        <div className="container-page grid gap-6 lg:grid-cols-2 items-stretch">
          {/* <Block icon={Layers} title="Services Offered" items={venture.services} /> */}
          {/* <Block icon={Building2} title="Industry Focus" items={venture.industries} />
          <Block icon={Sparkles} title="Key Features" items={venture.features} />
          <Block icon={Cpu} title="Technologies Used" items={venture.technologies} pill /> */}
            <ServicesOffered services={venture.services} />


                  {/* GlimpseInside */}
                      {venture.glimpse && (

                        <GlimpseInside

                        glimpse={venture.glimpse}

                        />

                        )}
        </div>
      </section>

      <div className="container-page">
    <div className="h-px bg-border mt-8"></div>
    </div>


    

{/* Why Choose Us */}

<section className="section-y bg-secondary/30 border-y border-border">

  <div className="container-page">

    <div className="text-center max-w-3xl mx-auto">

      <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
        Why Choose Us
      </p>

      <h2 className="font-display text-4xl font-bold">
        Why Businesses Choose {venture.name}
      </h2>

      <p className="mt-5 text-muted-foreground leading-8">
        Our commitment to quality, innovation, and customer satisfaction
        drives everything we do.
      </p>

    </div>

    <div className="mt-14 grid md:grid-cols-2 gap-6">

      {venture.whyChooseUs.map((item) => (

        <div
          key={item}
          className="card-elev p-6 flex gap-4 items-start"
        >

          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg">
            ✓
          </div>

          <p className="leading-7 text-muted-foreground">
            {item}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

 {/* featured projects */}
              
        {venture.featuredProjects && (
            <FeaturedProjects
                projects={venture.featuredProjects}
            />
        )}
        
 {/* divider */}
  <div className="container-page">
    <div className="h-px bg-border mt-4"></div>
</div>




{/* Our Process */}
<section className="section-y">

  <div className="container-page">

    <div className="text-center max-w-3xl mx-auto">

      <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
        Our Process
      </p>

      <h2 className="font-display text-4xl font-bold">
        How We Work
      </h2>

    </div>

    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {venture.process.map((step, index) => (

        <div
          key={step.title}
          className="card-elev p-7 text-center"
        >

          <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
            {index + 1}
          </div>

          <h3 className="font-display text-2xl font-semibold">
            {step.title}
          </h3>

          <p className="mt-4 text-muted-foreground leading-7">
            {step.description}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* FAQ */}
<section className="section-y bg-secondary/30 border-y border-border">

  <div className="container-page max-w-4xl">

    <div className="text-center">

      <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
        Frequently Asked Questions
      </p>

      <h2 className="font-display text-4xl font-bold">
        Everything You Need to Know
      </h2>

      <p className="mt-5 text-muted-foreground">
        Find answers to the most common questions about {venture.name}.
      </p>

    </div>

    <div className="mt-14 space-y-5">

      {venture.faqs.map((faq, index) => (

        <div
          key={faq.question}
          className="rounded-2xl border border-border bg-card overflow-hidden"
        >

          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="w-full flex items-center justify-between px-7 py-6 text-left hover:bg-secondary transition-colors"
          >

            <span className="font-semibold text-lg">
              {faq.question}
            </span>

            {openFaq === index ? (
              <Minus className="h-5 w-5 text-primary" />
            ) : (
              <Plus className="h-5 w-5 text-primary" />
            )}

          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openFaq === index
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-7 pb-6 leading-8 text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          </div>

        </div>

      ))}

    </div>

  </div>

</section>


      {/* <section className="section-y border-t border-border">
        <div className="container-page">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Other Kibo Ventures</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((v) => (
              <Link
                key={v.slug}
                to="/ventures/$slug"
                params={{ slug: v.slug }}
                className="card-elev p-6 hover:-translate-y-1 hover:border-primary transition-all group"
              >
                <h3 className="font-display font-semibold text-lg">{v.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                  Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section> */}




{/* contact */}

      <section className="section-y border-t border-border bg-[color:var(--surface)]/50">
        <div className="container-page grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Get in touch with {venture.name}.</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Speak directly to the {venture.name} team about your project, partnership or careers.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { icon: Mail, label: "Email", v: venture.contact.email },
              { icon: Phone, label: "Phone", v: venture.contact.phone },
              { icon: MapPin, label: "Office", v: venture.contact.location },
            ].map((c) => (
              <div key={c.label} className="card-elev p-5 flex items-center gap-4">
                <div className="h-11 w-11 rounded-md bg-primary/10 text-primary grid place-items-center shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* CTA */}

<section className="section-y">

  <div className="container-page">

    <div className="rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-secondary/40 to-primary/10 p-12 text-center">

      <h2 className="font-display text-4xl md:text-5xl font-bold">
        {venture.cta.title}
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
        {venture.cta.description}
      </p>

      <Link
        to="/contact"
        className="mt-10 inline-flex items-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors shadow-gold"
      >
        {venture.cta.button}
      </Link>

    </div>

  </div>

</section>
</>

  );
}

function Block({
  icon: Icon,
  title,
  items,
  pill,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
  pill?: boolean;
}) {
  return (
    <div className="card-elev p-7">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-11 w-11 rounded-md bg-primary/10 text-primary grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display font-semibold text-lg">{title}</h3>
      </div>
      {pill ? (
        <div className="flex flex-wrap gap-2">
          {items.map((i) => (
            <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
              {i}
            </span>
          ))}
        </div>
      ) : (
        <ul className="space-y-2.5">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
