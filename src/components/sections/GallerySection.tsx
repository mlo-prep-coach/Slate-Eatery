import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero-food.jpg";
import about from "@/assets/about-dining-room.jpg";
import burger from "@/assets/dish-burger.jpg";
import chicken from "@/assets/dish-chicken.jpg";
import pancakes from "@/assets/gallery-pancakes.jpg";
import pie from "@/assets/dish-pie.jpg";
import meatloaf from "@/assets/gallery-meatloaf.jpg";
import exterior from "@/assets/gallery-exterior.jpg";

/* Add or remove photos here. */
const photos = [
  { src: hero, alt: "Burger, fries, pancakes and a milkshake on a diner table" },
  { src: about, alt: "Families in red booths in a busy diner" },
  { src: burger, alt: "Double cheeseburger with fries" },
  { src: pancakes, alt: "Stack of pancakes with syrup" },
  { src: chicken, alt: "Fried chicken with mashed potatoes and a biscuit" },
  { src: meatloaf, alt: "Meatloaf dinner with mashed potatoes and green beans" },
  { src: pie, alt: "Apple pie with vanilla ice cream" },
  { src: exterior, alt: "Diner storefront at dusk with a striped awning" },
];

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="section-pad">
      <div className="container-content">
        <Reveal className="text-center">
          <h2 className="text-3xl md:text-4xl">{gallery.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{gallery.intro}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {photos.map((p, i) => (
            <Reveal key={p.alt} delay={(i % 4) * 70}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="block w-full overflow-hidden rounded-2xl shadow-soft transition-all duration-300 hover:shadow-lifted"
                aria-label={`View photo: ${p.alt}`}
              >
                <img
                  src={p.src}
                  loading="lazy"
                  alt={p.alt}
                  className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-cocoa/85 p-4"
        >
          <button
            type="button"
            aria-label="Close photo"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-card text-foreground shadow-soft"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={photos[active].src}
            alt={photos[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-auto max-w-full rounded-3xl object-contain shadow-lifted"
          />
        </div>
      )}
    </section>
  );
}
