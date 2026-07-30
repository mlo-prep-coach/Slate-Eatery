import { Clock, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-food.jpg";
import { hero, hours, restaurant } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function HeroSection() {
  const today = hours.schedule[new Date().getDay()];

  return (
    <section id="top" className="bg-secondary/60">
      <div className="container-content grid items-center gap-8 py-10 md:py-14 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <p className="font-display text-base font-bold uppercase tracking-wide text-primary">
            {hero.eyebrow}
          </p>
          <h1 className="mt-2 text-[2.5rem] leading-tight md:text-[3.25rem] lg:text-[4rem]">
            {hero.heading}
          </h1>
          <p className="mt-3 font-display text-xl font-bold text-primary">{restaurant.tagline}</p>
          <p className="mt-4 max-w-xl text-muted-foreground">{hero.subheading}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center rounded-2xl bg-primary px-6 py-3 font-display text-lg font-bold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lifted hover:brightness-110"
            >
              {hero.primaryCta}
            </a>
            <a
              href={restaurant.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary/25 bg-card px-6 py-3 font-display text-lg font-bold text-foreground transition-all duration-300 hover:bg-accent"
            >
              <MapPin className="h-5 w-5" />
              {hero.secondaryCta}
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-soft">
              <Clock className="h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-muted-foreground">
                  {hero.todayLabel} ({today.day})
                </p>
                <p className="truncate font-display font-extrabold">{today.time}</p>
              </div>
            </div>
            <a
              href={restaurant.phoneHref}
              className="flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-soft transition-all duration-300 hover:shadow-lifted"
            >
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-muted-foreground">Call us</p>
                <p className="truncate font-display font-extrabold">{restaurant.phone}</p>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <img
            src={heroImg}
            width={1600}
            height={1104}
            alt="Diner table with a cheeseburger, fries, pancakes and a milkshake"
            className="h-[46vh] w-full rounded-3xl object-cover shadow-lifted md:h-[60vh] lg:h-[75vh]"
          />
        </Reveal>
      </div>
    </section>
  );
}
