import { specials } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function SpecialsSection() {
  const todayIndex = new Date().getDay();

  return (
    <section id="specials" className="section-pad">
      <div className="container-content">
        <Reveal className="text-center">
          <h2 className="text-3xl md:text-4xl">{specials.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{specials.intro}</p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specials.days.map((d, i) => {
            const isToday = (todayIndex + 6) % 7 === i;
            return (
              <Reveal key={d.day} delay={(i % 3) * 80}>
                <div
                  className={`h-full rounded-3xl p-6 transition-all duration-300 hover:shadow-lifted ${
                    isToday
                      ? "bg-accent text-accent-foreground shadow-soft"
                      : "bg-card shadow-soft"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-sm font-extrabold uppercase tracking-wide text-primary">
                      {d.day}
                    </span>
                    {isToday && (
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                        Today
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-xl">{d.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                  <p className="mt-4 font-display text-xl font-extrabold text-primary">{d.price}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
