import { MapPin } from "lucide-react";
import { hours, restaurant } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function HoursSection() {
  const today = new Date().getDay();

  return (
    <section id="hours" className="section-pad">
      <div className="container-content">
        <Reveal className="text-center">
          <h2 className="text-3xl md:text-4xl">{hours.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{hours.intro}</p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-card p-6 shadow-soft md:p-8">
              <h3 className="font-display text-2xl">Hours</h3>
              <ul className="mt-5 space-y-1">
                {hours.schedule.map((s, i) => (
                  <li
                    key={s.day}
                    className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl px-4 py-3 ${
                      i === today ? "bg-accent text-accent-foreground" : ""
                    }`}
                  >
                    <span className="font-display text-lg font-bold">
                      {s.day}
                      {i === today && (
                        <span className="ml-2 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                          Today
                        </span>
                      )}
                    </span>
                    <span className="font-display text-lg font-extrabold">{s.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-3xl bg-card p-6 shadow-soft">
                <h3 className="font-display text-2xl">Find Us</h3>
                <p className="mt-3 flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{restaurant.address}</span>
                </p>
                <a
                  href={restaurant.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-2xl bg-primary px-5 py-3 font-display font-bold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lifted hover:brightness-110"
                >
                  Get Directions
                </a>
              </div>
              <div className="grid min-h-56 flex-1 place-items-center rounded-3xl border-2 border-dashed border-border bg-secondary/70 p-6 text-center">
                <p className="font-display font-bold text-muted-foreground">{hours.mapNote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
