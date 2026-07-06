import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ventures } from "@/lib/ventures";
import  kg1  from "@/Assets/logos/kg1.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  {
  label: "Awards & Recognition",
  to: "/awards",
},
];

const tailLinks = [
  // { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Get In Touch" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [venturesOpen, setVenturesOpen] = useState(false);
  const [mobileVenturesOpen, setMobileVenturesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-[80px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
        {/* {logo} */}
        <img src={kg1} alt="Logo" className="h-12 w-12 object-contain" />
        
          <div className="leading-tight">
            <div className="font-display font-bold text-lg md:text-xl tracking-tight">KIBO GROUP</div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary">of Companies</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavItem key={l.to} to={l.to} label={l.label} />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setVenturesOpen(true)}
            onMouseLeave={() => setVenturesOpen(false)}
          >
            <button
              className="flex items-center gap-2 px-4 py-2 text-[15px] text-muted-foreground hover:text-primary transition-colors"
              aria-expanded={venturesOpen}
            >
              Our Verticals
              <ChevronDown className={`h-4 w-4 transition-transform ${venturesOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`absolute  left-1/2 -translate-x-1/2 top-full transition-all duration-200 ${
                venturesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
             <div className="grid w-[180px] grid-cols-1 rounded-xl  border border-border bg-popover shadow-card overflow-hidden">
                {ventures.map((v) => (
                  <Link
                    key={v.slug}
                    to="/ventures/$slug"
                    params={{ slug: v.slug }}
                    className="block px-5 py-3 border-b border-border/60 last:border-0 hover:bg-[#0d2945] hover:text-primary transition-colors group"
                  >
                    <div className="font-medium text-sm">{v.name}</div>
                    {/* <div className="text-xs text-muted-foreground group-hover:text-muted-foreground/90">
                      {v.tagline}
                    </div> */}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* <NavItem to="/gallery" label="Gallery" /> */}

          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors shadow-gold"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 border-t border-border ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="container-page py-4 flex flex-col gap-1 bg-background/95 backdrop-blur-md">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-muted-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}

          <button
            onClick={() => setMobileVenturesOpen((v) => !v)}
            className="flex items-center justify-between py-2.5 text-sm text-muted-foreground hover:text-primary"
          >
            Our Verticals
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileVenturesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileVenturesOpen && (
            <div className="ml-3 border-l border-border pl-3 flex flex-col">
              {ventures.map((v) => (
                <Link
                  key={v.slug}
                  to="/ventures/$slug"
                  params={{ slug: v.slug }}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-muted-foreground hover:text-primary"
                >
                  {v.name}
                </Link>
              ))}
            </div>
          )}

          {tailLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-muted-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      activeProps={{ className: "px-4 py-2 text-sm text-primary font-medium" }}
      activeOptions={{ exact: to === "/" }}
    >
      {label}
    </Link>
  );
}
