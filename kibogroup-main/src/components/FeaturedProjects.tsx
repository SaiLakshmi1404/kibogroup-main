import { ArrowRight } from "lucide-react";


interface Project {
  // title: string;
  image: string;
  // category: string;
}

interface FeaturedProjectsProps {
  title?: string;
  subtitle?: string;
  projects: Project[];
}

export default function FeaturedProjects({
  title = "Featured Projects",
  subtitle = "A glimpse into some of our recent work.",
  projects,
}: FeaturedProjectsProps) {
  return (
    <section className="section-y border-t border-border">
      <div className="container-page">

        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
            Portfolio
          </p>

          <h2 className="font-display text-4xl font-bold">
            {title}
          </h2>

          <p className="mt-4 text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              // key={project.title}
              // className="group overflow-hidden rounded-2xl border border-border bg-card hover:border-primary transition-all"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  // alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                {/* <p className="text-xs uppercase tracking-widest text-primary">
                  {project.category}
                </p> */}

                {/* <h3 className="mt-2 text-xl font-semibold">
                  {project.title}
                </h3> */}

                {/* <button className="mt-5 inline-flex items-center gap-2 text-primary font-medium">
                  View Project
                  <ArrowRight size={16}/>
                </button> */}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}