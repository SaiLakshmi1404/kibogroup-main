import { createFileRoute, Link } from "@tanstack/react-router";

import { ArrowRight,  Rocket,
  Handshake, Cloud, ShieldCheck, Cpu, Smartphone, Database, Bot, Workflow, Award, Globe2, Users, Briefcase, Quote } from "lucide-react";
import heroCity from "@/assets/hero-city.jpg";
import { ventures } from "@/lib/ventures";
import chairman from "@/Assets/team/chairman.png"
import pm from "@/Assets/team/pm.png"
import md from "@/Assets/team/md.jpeg"
import oh from "@/Assets/team/oh.png"
import as from "@/Assets/team/as.png"
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kibo Group — Enterprise Software & Technology" },
      { name: "description", content: "A diversified global group delivering enterprise software, cloud, AI, fintech and digital solutions across industries." },
    ],
  }),
  component: Home,
});

// const services = [
//   { icon: Cloud, title: "Cloud & DevOps", desc: "Multi-cloud architectures, Kubernetes platforms and 24/7 managed operations." },
//   { icon: ShieldCheck, title: "Cybersecurity", desc: "Managed SOC, zero-trust architectures and proactive threat intelligence." },
//   { icon: Bot, title: "AI & Data", desc: "Generative AI, predictive analytics and production-grade MLOps." },
//   { icon: Database, title: "Enterprise Software", desc: "ERP, CRM and bespoke platforms that unify operations at scale." },
//   { icon: Smartphone, title: "Digital Products", desc: "Award-winning web, mobile and commerce experiences." },
//   { icon: Cpu, title: "Industrial IoT", desc: "Smart factories, asset tracking and edge analytics for industry." },
// ];

// const stats = [
//   { value: "10+", label: "Years of Experience", icon: Award },
//   { value: "5+", label: "Countries Served", icon: Globe2 },
//   { value: "500+", label: "Experts Worldwide", icon: Users },
//   { value: "200+", label: "Enterprise Clients", icon: Briefcase },
// ];

const team = [
  { name: "Syed Rashid Shuttari", 
    role: "Kibo Group Chairman",
    photo: chairman, 
    quote:
      "A visionary entrepreneur and technologist,Oversees operations and partnerships,to empower businesses through technology.",},

  { name: "Altamash", 
    role: "Project Manager", 
    photo: pm,    
    quote:
      "Strategic leader driving innovation and expansion.I ensure teams deliver on time and above expectation.Let's collaborate to streamline your workflows, mitigate risks, and successfully bring your next big lifestyle project to life.",},

  { name: "Syed Nasreen Shuttari", 
    role: "Managing Director", 
    photo:md,   
    quote:
      "Driving innovation across tech, events, music, and beauty, we transform visionary ideas into seamless, high-impact realities.Together, we are engineering a bolder, more inspiring future for modern lifestyle brands.",},

  { name: "Shafiha Masarrat", 
    role: "Operations & Administration Head",
    photo: oh,    
    quote:
      "Oversees human resources and operations, ensuring smooth coordination, efficient workflows, and a positive organizational culture within the team.",},

  { name: "SaiLakshmi Chekuru", 
    role: "Software Engineer",
    photo:as,    
    quote:
      "Contributes to front-end design and development using Next.js and Tailwind CSS, bringing creativity and precision to every interface she builds.",},
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCity} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
        </div>

        <div className="container-page relative pt-24 pb-16 md:pt-32 md:pb-20 max-w-3xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary mb-5">Kibo Group of Companies</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Building Tomorrow.<br />
            <span className="text-gradient-gold">Engineering Trust.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            A diversified global technology group delivering enterprise-grade software, cloud, AI and digital solutions that move industries forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors shadow-gold">
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
              Discover Kibo
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-y border-t border-border">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">About Kibo Group</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              A Legacy of Growth. A Vision for the Future.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Founded on strong values and a commitment to engineering excellence, Kibo Group has grown into a global organization with a people-first approach and a long-term perspective.
            </p>
            <p className="mt-3 text-muted-foreground mb-6">
              We partner with ambitious organizations to design, build and operate the technology that powers their next chapter — from cloud platforms and AI systems to mission-critical enterprise software.
            </p>
                      
        <h2 className="font-display text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
          What Defines Kibo Group.
      </h2>

      <p className="mt-5 text-lg text-muted-foreground">
        Every vetical we build is guided by the same principles. These values
        shape our decisions, strengthen our partnerships and inspire everything
        we create.
      </p>
          


            {/* <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Our Mission", d: "Empower progress by delivering innovative, lasting technology." },
                { t: "Our Vision", d: "Be a global leader recognized for excellence, integrity and impact." },
                { t: "Our Values", d: "Integrity. Excellence. Collaboration. Respect." },
                { t: "Our People", d: "Our greatest strength — engineers, designers and operators." },
              ].map((v) => (
                <div key={v.t} className="card-elev p-5">
                  <div className="text-primary text-sm font-semibold">{v.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div> */}
          </div>


          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl border border-border overflow-hidden bg-[color:var(--surface)]">
              <img src={heroCity} alt="Kibo Group" className="h-full w-full object-cover" loading="lazy" width={1920} height={1080} />
            </div>
            {/* <div className="absolute -bottom-6 -left-6 hidden md:block card-elev px-6 py-4 shadow-gold">
              <div className="text-3xl font-display font-bold text-gradient-gold">20+</div>
              <div className="text-xs text-muted-foreground">years engineering excellence</div>
            </div> */}
          </div>
        </div>
      </section>

      {/* VErticals */}
      <section className="section-y border-t border-border bg-[color:var(--surface)]/50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Our Verticals</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">Diverse Businesses. Shared Purpose.</h2>
            <p className="mt-4 text-muted-foreground">Seven specialized companies, one engineering standard.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ventures.map((v) => (
              <Link
                key={v.slug}
                to="/ventures/$slug"
                params={{ slug: v.slug }}
                className="group card-elev p-6 flex flex-col hover:-translate-y-1 hover:border-primary hover:shadow-2xl transition-all"
              >
                <div className="h-12 w-12 rounded-md bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Workflow className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{v.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{v.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {/* <section className="section-y border-t border-border">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">Engineering across the stack.</h2>
            <p className="mt-4 text-muted-foreground">From strategy to operations, we deliver outcomes — not just deliverables.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group card-elev p-7 h-full hover:-translate-y-1 hover:border-primary hover:shadow-2xl transition-all">
                <div className="h-12 w-12 rounded-md bg-primary/10 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* WHY CHOOSE US / STATS */}
      <section className="section-y border-t border-border bg-[color:var(--surface)]/50">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1.3fr_0.9fr]  gap-5 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Why Choose Kibo</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">A partner built for the long term.</h2>
              <p className="mt-4 text-muted-foreground max-w-lg">
                We combine deep engineering, industry expertise and operational rigor to deliver technology that performs — and keeps performing.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  // "Senior engineering teams with deep domain expertise",
                  "Outcome-driven delivery, not staff augmentation",
                  "Security, compliance and reliability built in",
                  "Global presence with local accountability",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card-elev p-7 text-center">
                  <s.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div> */}
             {/* Cards */}

<div className="mt-10 grid grid-cols-2 gap-5 lg:max-w-[520px] ml-auto">

  {/* Innovation */}
  <div className="card-elev p-6 min-h-[220px] hover:-translate-y-1 transition-all">
    <div className="mb-4">
      <Rocket className="h-8 w-8 text-primary" />
    </div>

    <h3 className="font-display text-xl font-semibold mb-3">
      Innovation
    </h3>

    <p className="text-sm text-muted-foreground leading-7">
      Building solutions that solve real-world challenges through creativity,
      technology and continuous improvement.
    </p>
  </div>

  {/* Trust */}
  <div className="card-elev p-6 min-h-[220px] hover:-translate-y-1 transition-all">
    <div className="mb-4">
      <Handshake className="h-8 w-8 text-primary" />
    </div>

    <h3 className="font-display text-xl font-semibold mb-3">
      Trust
    </h3>

    <p className="text-sm text-muted-foreground leading-7">
      We believe lasting relationships are built through integrity,
      transparency and keeping every promise we make.
    </p>
  </div>

  {/* Excellence */}
  <div className="card-elev p-6 min-h-[220px] hover:-translate-y-1 transition-all">
    <div className="mb-4">
      <Award className="h-8 w-8 text-primary" />
    </div>

    <h3 className="font-display text-xl font-semibold mb-3">
      Excellence
    </h3>

    <p className="text-sm text-muted-foreground leading-7">
      We pursue quality in everything we do, always learning,
      improving and raising our own standards.
    </p>
  </div>

  {/* Impact */}
  <div className="card-elev p-6 min-h-[220px] hover:-translate-y-1 transition-all">
    <div className="mb-4">
      <Globe2 className="h-8 w-8 text-primary" />
    </div>

    <h3 className="font-display text-xl font-semibold mb-3">
      Impact
    </h3>

    <p className="text-sm text-muted-foreground leading-7">
      Every venture is created with a purpose: to deliver meaningful value
      for people, businesses and communities.
    </p>
  </div>

</div>
</div>
 </div>
</section>

      {/* TEAM */}
      <section className="section-y border-t border-border">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Leadership</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">Led by builders and operators.</h2>
            <p className="mt-4 text-muted-foreground">A leadership team that's been on every side of the table.</p>
          </div>
          {/* <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"> */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
              {team.map((m) => (
                      <div
                        key={m.name}
                        className="card-elev p-6 rounded-2xl hover:-translate-y-1 hover:border-primary transition-all"
                      >
                        {/* Portrait */}
                        <img
                          src={m.photo}
                          alt={m.name}
                          className="mx-auto h-60 w-44 object-cover rounded-xl border-4 border-primary shadow-lg"
                        />

                        {/* Name */}
                        <h3 className="mt-6 text-xl font-display font-semibold text-center">
                          {m.name}
                        </h3>

                        {/* Role */}
                        <p className="text-primary text-center text-sm mt-2">
                          {m.role}
                        </p>

                        {/* Quote */}
                        <p className="mt-5 text-center text-muted-foreground italic leading-7">
                          "{m.quote}"
                        </p>
                      </div>
                    ))}
            
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section className="section-y border-t border-border bg-[color:var(--surface)]/50">
        <div className="container-page">
          <div className="card-elev p-8 md:p-12 text-center max-w-3xl mx-auto">
            <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="font-display text-xl md:text-2xl leading-relaxed">
              "Kibo Group delivered a platform our engineering team could be proud of — secure, scalable, and on time. They've become our trusted long-term partner."
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
