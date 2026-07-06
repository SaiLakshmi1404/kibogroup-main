import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ServicesOfferedProps {
  services: string[];
}

export default function ServicesOffered({
  services,
}: ServicesOfferedProps) {
  return (
    <div className="card-elev  px-6 py-4 rounded-3xl h-full flex flex-col">
      <div className="mb-12">
          <h5 className="font-display text-xl font-bold mt-3">Services Offered</h5>
          <p className= "mt-4 text-muted-foreground max-w-xl">
            Discover the expertise and solutions that help businesses grow, innovate, and succeed.
          </p>
      </div>

      <div className="space-y-4 flex-1">
        {services.map((service, index) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card-elev flex items-center gap-4 p-4"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CheckCircle2 className="h-4 w-4" />
            </div>

            <h3 className="font-display text-lg font-semibold">
              {service}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}