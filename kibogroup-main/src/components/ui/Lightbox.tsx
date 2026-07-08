import { X, ChevronLeft, ChevronRight,  ZoomIn, ZoomOut,} from "lucide-react";
import { useState } from "react";

// interface LightboxProps {
//   open: boolean;
//   onClose: () => void;
//   images: string[];
//   currentIndex: number;
//   setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
// }

// export default function Lightbox({
//   open,
//   onClose,
//   images,
//   currentIndex,
//   setCurrentIndex,
// }: LightboxProps) {

//   // set zoom 
//   const [zoom, setZoom] = useState(1);

//   // Don't render anything if the lightbox is closed
//   if (!open) return null;

//   // Previous image
//   const prevImage = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   // Next image
//   const nextImage = () => {
//     setCurrentIndex((prev) =>
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

interface LightboxProps {
  open: boolean;
  onClose: () => void;
  images: string[];
  // Uncontrolled mode (gallery uses this)
  currentIndex?: number;
  setCurrentIndex?: React.Dispatch<React.SetStateAction<number>>;
  // Controlled mode (awards uses this)
  current?: number;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function Lightbox({
  open,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
  current,
  onPrev,
  onNext,
}: LightboxProps) {
  const [zoom, setZoom] = useState(1);

  if (!open) return null;

  // Resolve which index/handlers to actually use
  const index = current ?? currentIndex ?? 0;

  const prevImage =
    onPrev ??
    (() => setCurrentIndex?.((prev) => (prev === 0 ? images.length - 1 : prev - 1)));

  const nextImage =
    onNext ??
    (() => setCurrentIndex?.((prev) => (prev === images.length - 1 ? 0 : prev + 1)));

  // use `index`, `prevImage`, `nextImage` in the rest of the component

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-yellow-400 transition"
      >
        <X size={36} />
      </button>

      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-6 text-white hover:text-yellow-400 transition"
      >
        <ChevronLeft size={45} />
      </button>

      <div className="absolute top-6 left-6 flex gap-3">

 {/* on click function */}
 
  <button
    onClick={() =>
      setZoom((z) => Math.min(z + 0.25, 3))
    }
    className="text-white"
  >
    <ZoomIn size={30}/>
  </button>

  <button
    onClick={() =>
      setZoom((z) => Math.max(z - 0.25, 1))
    }
    className="text-white"
  >
    <ZoomOut size={30}/>
  </button>

</div>

      {/* Image */}
      <div className="overflow-hidden">
      <img
        src={images[index]}
        alt=""
        loading="lazy"
        decoding="async"
        className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain transition-transform duration-300"
        style={{
             transform: `scale(${zoom})`,
        }}
      />
      </div>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-6 text-white hover:text-yellow-400 transition"
      >
        <ChevronRight size={45} />
      </button>

      {/* Counter */}
      <div className="absolute bottom-8 text-white text-lg">
        {index + 1} / {images.length}
      </div>

    </div>
);

}
