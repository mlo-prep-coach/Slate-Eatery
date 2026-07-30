import { menu } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function MenuSection() {
  return (
    <section id="menu" className="section-pad bg-secondary/50">
      <div className="container-content">
        <Reveal className="text-center">
          <h2 className="text-3xl md:text-4xl">{menu.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{menu.intro}</p>
        </Reveal>

        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {menu.categories.map((cat, i) => (
            <Reveal key={cat.name} delay={(i % 2) * 90}>
              <div className="h-full rounded-3xl bg-card p-6 shadow-soft md:p-7">
                <h3 className="font-display text-2xl text-primary">{cat.name}</h3>
                <div className="mt-2 h-1 w-14 rounded-full bg-accent" />
                <ul className="mt-5 space-y-5">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-lg font-bold">{item.name}</span>
                        <span
                          aria-hidden
                          className="h-px min-w-4 flex-1 self-end border-b-2 border-dotted border-border"
                        />
                        <span className="shrink-0 font-display text-lg font-extrabold text-primary">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">{menu.note}</p>
      </div>
    </section>
  );
}
