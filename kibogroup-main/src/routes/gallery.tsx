import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Lightbox from "@/components/ui/Lightbox";


// Finds every image inside Assets/kibo-photos
// This creates a map of { filepath: loaderFunction } — NOT the actual images yet.
// Each loaderFunction is like a buzzer — calling it later fetches the real image.
const imageLoaders = import.meta.glob(
  "@/assets/kibo-photos/**/*.{jpg,jpeg,png,webp}",
  {
    // eager: true,
    import: "default",
  }
) as Record<string, () => Promise<string>>;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Kibo Group" },
      { name: "description", content: "Moments from Kibo Group events, summits and milestones." },
    ],
  }),
  component: Gallery,
});


const items = [
  {
    title: "Ace2.0_NMIMS",
    location: "Mumbai",
    folder: "Ace2.0_NMIMS",
    slug: "ace2.0nmims",
  },
  {
    title: "AtSt.Pauls_DegreeCollege",
   location: "Hyderabad",
    folder: "AtSt.Pauls_DegreeCollege",
    slug: "atst.paulsdegreecollege",
  },
  {
    title: "Azad ITExpo",
    location: "Hyderabad",
    folder: "AzadITExpo",
    slug: "azaditexpo",
  },
  {
    title: "Bollywoodnight",
    location:"Hyderabad",
    folder:"Bollywoodnight",
    slug: "bollywoodnight",
  },
  {
    title: "Press Conference",
    location: "Hyderabad",
    folder: "PressConference",
    slug: "pressconference",
  },
  {
    title: "The4i's Seminar",
    location: "Hyderabad",
    folder: "The4i'sSeminar",
    slug: "the4i'sseminar",
  },
   {
    title: "DEET1",
    location: "Hyderabad",
    folder:"DEET1",
    slug: "deet1",
  },
   {
    title: "Glam Connect Summit",
    location: "Mumbai",
    folder:"GC",
    slug: "gc",
  },
   {
    title: "Star Awards",
    location: "Mumbai",
    folder:"Star",
    slug: "star",

  },

   {
    title: "Billionaire Conclave",
    location: "Hyderabad",
    folder:"BillionaireNetwork",
    slug: "billionairenetwork",
  },
];

// Returns the cover image for an event
// function getCoverImage(folder: string) {
//   const path = Object.keys(images).find((img) =>
//     img.includes(`${folder}/cover`)
//   );

//   return path ? images[path] : "";
// }

// Returns every photo inside the selected event folder
// function getEventImages(folder: string) {
//   return Object.entries(images)
//     .filter(([path]) => path.includes(`${folder}/`))
//     .filter(([path]) => !path.includes("cover"))
//     .map(([, image]) => image);
// }

// Finds the loader function for a folder's cover image, then "pushes the buzzer"
// (calls it) to actually get the image. Returns a Promise, so callers must await it.
async function loadCoverImage(folder: string): Promise<string> {
  const path = Object.keys(imageLoaders).find((p) => p.includes(`${folder}/cover`));
  if (!path) return "";
  return await imageLoaders[path](); // "await" = wait for the buzzer, then get the food
}

// Loads ALL photos for one folder (only called when that folder is actually clicked)
async function loadEventImages(folder: string): Promise<string[]> {
  const matchingPaths = Object.keys(imageLoaders).filter(
    (p) => p.includes(`${folder}/`) && !p.includes("cover")
  );
  // Promise.all = "wait for ALL these buzzers at once", instead of one at a time
  return await Promise.all(matchingPaths.map((p) => imageLoaders[p]()));
}

function Gallery(){
    const [open, setOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

// Added newly after putting eager :false or removing it 

    const [covers, setCovers] = useState<Record<string, string>>({});
  const [loadingFolder, setLoadingFolder] = useState<string | null>(null);
    
    // function openGallery(folder: string) {
    //   const photos = getEventImages(folder);

    //   setSelectedImages(photos);
    //   setCurrentIndex(0);
    //   setOpen(true);
    // }


  // useEffect = "run this code once, when the component first appears on screen"
  // We only need to load the 10 COVER images upfront — much lighter than all photos.
  useEffect(() => {
    async function loadAllCovers() {
      const entries = await Promise.all(
        items.map(async (it) => {
          const src = await loadCoverImage(it.folder);
          return [it.folder, src] as const;
        })
      );
      setCovers(Object.fromEntries(entries));
    }
    loadAllCovers();
  }, []); // empty [] means "only run this once"

  // Called when user clicks an event tile
  async function openGallery(folder: string) {
    setLoadingFolder(folder); // (optional: you could show a spinner using this)
    const photos = await loadEventImages(folder); // NOW we fetch that folder's photos
    setSelectedImages(photos);
    setCurrentIndex(0);
    setOpen(true);
    setLoadingFolder(null);
  }

  return (
    <>
           <section className="border-b border-border">
        <div className="container-page py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Gallery</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Moments that <span className="text-gradient-gold">define us.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
            From global summits to team milestones — a glimpse into the people and events behind Kibo Group.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px]">
            {items.map((it, i) => (
              <div
                key={it.title}
                onClick={() => openGallery(it.folder)}

                className={`relative overflow-hidden rounded-xl border border-border group cursor-pointer ${
                  i === 0 ? "col-span-2 row-span-2" : i === 3 ? "md:col-span-2" : ""
                }`}
              >
                {covers[it.folder] && (
                  <img
                      // src={getCoverImage(it.folder)}
                      src={covers[it.folder]}
                      loading="lazy"
                      decoding="async"
                      alt={it.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    )}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, rgba(212,160,86,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(232,184,108,0.25) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary">{it.location}</div>
                  <div className="font-display font-semibold text-lg mt-1">{it.title}</div>
                </div>
                <div className="absolute inset-0 ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/60 transition-all rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        images={selectedImages}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
     />

    </>
  );
}