import { motion } from "framer-motion";

import { iconMap } from "@/lib/iconMap";
import type { IconName } from "@/lib/iconMap";

interface GlimpseItem {
  // time: string;
  title: string;
  description: string;
  // icon: LucideIcon;
  icon: IconName;
}
interface GlimpseInsideProps {
  glimpse: GlimpseItem[];
}


export default function GlimpseInside({
  glimpse,
}: GlimpseInsideProps) {
  return (
    // <section className="py-20">
    //   <div className="container-page">
    <div className="card-elev p-5 rounded-3xl h-full flex flex-col">
        <div className="mb-12">
          {/* <p className="section-eyebrow">A GLIMPSE INSIDE</p> */}

          <h5 className="font-display text-xl font-bold mt-3">
            A Glimpse Inside
          </h5>

          <p className="mt-4 text-muted-foreground max-w-xl">
            Discover how our team collaborates, innovates and delivers
            excellence every single day.
          </p>
        </div>

        <div className="relative flex-1">
          {/* Timeline Line */}
          {/* <div className="absolute left-5 top-0 bottom-0 w-px bg-border" /> */}

          <div className="space-y-3">
            {glimpse.map((item, index) => {
              const Icon =  iconMap[item.icon];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-4"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Card */}
                  <div className="card-elev flex-1 px-4 py-2.5">
                    {/* <p className="text-sm font-semibold text-primary mb-2">
                      {item.time}
                    </p> */}

                    <h3 className="font-display text-lg font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-6">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
    </div>
     );
    
      {/* </div>
    </section> */}

}