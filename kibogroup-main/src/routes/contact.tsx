import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import getintouch from "@/Assets/bg/getintouchbg.jpg"

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get In Touch — Kibo Group" },
      { name: "description", content: "Talk to Kibo Group about your next project. Reach our global teams across the Middle East, UK and Asia." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — our team will be in touch within one business day.");
    }, 800);
  };

  return (
    <>
      <section className=" relative border-b border-border overflow-hidden">
     <div className="container-page relative z-10 py-16 md:py-20">
           <img src={getintouch} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20"  />
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let's build <span className="text-gradient-gold">what's next.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
            Tell us about your project. Our team will get back within one business day.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Mail, label: "Business email", value: "hr@kibocompanies.com" },
              { icon: Phone, label: "Phone", value: "9987732384" },
              { icon: MapPin, label: "Headquarters", value: "Hyderabad" },
            ].map((c) => (
              <div key={c.label} className="card-elev p-5 flex items-start gap-4">
                <div className="h-11 w-11 rounded-md bg-primary/10 text-primary grid place-items-center shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </div>
            ))}
            {/* <div className="card-elev p-5">
              <div className="text-xs uppercase tracking-wider text-primary">Global Offices</div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>Dubai · UAE</div><div>Abu Dhabi · UAE</div>
                <div>Riyadh · KSA</div><div>Doha · Qatar</div>
                <div>London · UK</div><div>Mumbai · India</div>
              </div>
            </div> */}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 card-elev p-6 md:p-8 grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required />
              <Field label="Work email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Company" name="company" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Subject" name="subject" required />
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">How can we help?</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-md bg-[color:var(--surface)] border border-border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors shadow-gold disabled:opacity-70"
            >
              {sending ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md bg-[color:var(--surface)] border border-border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}
