import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

// Awards

import a1 from "@/Assets/awards/a1.png"
// import a2 from "@/Assets/awards/a2.jpeg"
// import a3 from "@/Assets/awards/a3.jpeg"
import a4 from "@/Assets/awards/a4.jpeg"
import a5 from "@/Assets/awards/a5.jpeg"
import a6 from "@/Assets/awards/a6.jpeg"





// Magazines

import m1 from "@/Assets/mediacovearge/m1.jpeg"
import m2 from "@/Assets/mediacovearge/m2.jpeg"
import m3 from "@/Assets/mediacovearge/m3.jpeg"
import m4 from "@/Assets/mediacovearge/m4.jpeg"
import m5 from "@/Assets/mediacovearge/m5.jpeg"
import m6 from "@/Assets/mediacovearge/m6.jpeg"



const awards = [
  {
    title: "Global Icon Award",
    year: "2026",
    image:a1,
    description:
      "Recognized for excellence in innovation.",
  },
  // {
  //   title: "Innovation Excellence Award",
  //   year: "2024",
  //   image: a2,
  //   description:
  //     "Awarded for delivering cutting-edge enterprise solutions.",
  // },
  // {
  //   title: "Business Leadership Award",
  //   year: "2023",
  //   image:a3,
  //   description:
  //     "Honored for outstanding leadership and business growth.",
  // },
    {
    title: "Telangana & Andhra Achievers Award",
    year: "2026",
    image:a4,
    description:
      "Honored for outstanding leadership and business growth.",
  },
    {
    title: "Global Bussiness Convergence Summit",
    year: "2026",
    image: a5,
    description:
      "For Global Leader in AI innovation, Digital Boards & Sustainability",
  },
    {
    title: "Global Bussiness Convergence Summit",
    year: "2026",
    image: a6,
    description:
      "Cerfitied For the Global Leader in AI Innovation.",
  },
 
];

const mediaCoverage = [
  {
    title: "JJ Crowns",
    type: "Magazine",
    // date: "June 2025",
    image:m1,
  },
  {
    title: "JJ Crowns",
    type: "Magazine",
    // date: "March 2025",
    image: m2,
  },
  {
    title: "Prajavinikidi",
    type: "Newspaper",
    // date: "August 2024",
    image: m3,
  },
  {
    title: "DubaiPreneur",
    type: "Magazine",
    // date: "December 2024",
    image: m4,
  },
    {
    title: "Kibo Group",
    type: "Magazine",
    // date: "December 2024",
    image: m5,
  },
    {
    title: "Teluguprabha",
    type: "Newspaper",
    // date: "December 2024",
    image: m6,
  },
];

export const Route = createFileRoute("/awards")({
  component: Awards,
  head: () => ({
    meta: [
      {
        title: "Awards & Recognition | Kibo Group",
      },
    ],
  }),
});

function Awards() {

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] =useState(0);

    const mediaImages = mediaCoverage.map((m) => m.image);
  return (
  <>
    {/* Hero */}

    <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">

          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
            Awards & Recognition
          </p>

          <h1 className="font-display text-5xl font-bold">
            Celebrating
            <span className="text-gradient-gold">
              {" "}Excellence
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Every milestone reflects our commitment to innovation,
            leadership and delivering meaningful impact across industries.
          </p>

        </div>
    </section>

    {/* Awards */}

      <section className="section-y">

        <div className="container-page">

          <div className="mb-10">

            <p className="text-primary uppercase tracking-[0.25em] text-xs">
              Awards
            </p>

            <h2 className="font-display text-4xl font-bold mt-3">
              Honors we've earned
            </h2>

          </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">  

            {/*  card           */}

            {awards.map((award) => (
            <div
                key={award.title}
                className="card-elev overflow-hidden hover:-translate-y-2 transition-all duration-300"
                >
                <img
                    src={award.image}
                    alt={award.title}
                    className="h-60 w-full object-cover"
                />

                <div className="p-6">
                    <p className="text-primary text-sm">{award.year}</p>

                    <h3 className="mt-2 font-display text-2xl font-semibold">
                    {award.title}
                    </h3>

                    <p className="mt-3 text-muted-foreground">
                    {award.description}
                    </p>
                </div>
            </div>
            ))}
        </div>
    </div>
    </section>

  {/* Media Coverage */}

   <section className="section-y border-t border-border">

        <div className="container-page">

            <div className="mb-10">

                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                    Media Coverage
                </p>

                <h2 className="font-display text-4xl font-bold mt-3">
                    Featured In
                </h2>

                <p className="mt-4 text-muted-foreground">
                    Kibo Group has been featured in leading newspapers,
                    magazines and business publications.
                </p>

            
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {mediaCoverage.map((item, index) => (

                <div
                    key={item.title}
                    onClick={()=>{
                        setCurrentIndex(index);
                        setOpen(true);
                    }}
                    className="card-elev overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >

                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-72 w-full object-cover"
                    />

                    <div className="p-5">

                        <p className="text-xs uppercase tracking-widest text-primary">
                        {item.type}
                        </p>

                        <h3 className="mt-2 font-display text-xl font-semibold">
                        {item.title}
                        </h3>

                        {/* <p className="mt-2 text-sm text-muted-foreground">
                        {item.date}
                        </p> */}

                    </div>

            </div>

                ))}

            </div>

        </div>
   </section>

   
   {open && (
  <Lightbox
    open = {open}
    images={mediaImages}
    current={currentIndex}
    onClose={() => setOpen(false)}
    onPrev={() =>
      setCurrentIndex((prev) =>
        prev === 0 ? mediaImages.length - 1 : prev - 1
      )
    }
    onNext={() =>
      setCurrentIndex((prev) =>
        prev === mediaImages.length - 1 ? 0 : prev + 1
      )
    }
  />
)}
 </>
)};


