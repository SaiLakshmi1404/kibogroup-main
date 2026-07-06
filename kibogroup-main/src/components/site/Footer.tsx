import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { ventures } from "@/lib/ventures";
import  kg1  from "@/Assets/logos/kg1.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--surface)]">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
                    {/* {logo} */}
        <img src={kg1} alt="Logo" className="h-8 w-8 object-contain" />
            {/* <div className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-primary to-primary-hover text-primary-foreground font-bold text-lg">
              K
            </div> */}
            <div className="leading-tight">
              <div className="font-display font-bold">KIBO GROUP</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary">of Companies</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Building tomorrow. Engineering trust. A diversified technology group delivering enterprise-grade software across industries.
          </p>
          {/* <div className="mt-5 flex gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div> */}
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About US</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-4">Our Verticles</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {ventures.map((v) => (
              <li key={v.slug}>
                <Link to="/ventures/$slug" params={{ slug: v.slug }} className="hover:text-primary">
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> hr@kibocompanies.com</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 9987732384</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Old MLA Quarters Rd, opposite Niloufer Cafe, AP State Housing Board, Himayatnagar, Hyderabad, Telangana 500029</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Kibo Group of Companies. All rights reserved.</p>
          {/* <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Use</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
