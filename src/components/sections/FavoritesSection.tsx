import { Star } from "lucide-react";
import burger from "@/assets/dish-burger.jpg";
import chicken from "@/assets/dish-chicken.jpg";
import pie from "@/assets/dish-pie.jpg";
import { favorites } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const images: Record<string, string> = { burger, chicken, pie };

export function FavoritesSection() {
  return (
    <section id="favorites" className="section-pad bg-secondary/50">
      <div className="container-content">
        <Reveal className="text-center">
          <h2 className="text-3xl md:text-4xl">{favorites.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{favorites.intro}</p>
        </Reveal>

        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {favorites.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-300 hover:shadow-lifted">
                <div className="relative overflow-hidden">
                  <img
                    src={images[item.image]}
                    width={900}
                    height={900}
                    loading="lazy"
                    alt={item.name}
                    className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 font-display text-sm font-extrabold text-accent-foreground shadow-soft">
                    <Star className="h-4 w-4 fill-current" />
                    {favorites.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <span className="shrink-0 font-display text-lg font-extrabold text-primary">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
