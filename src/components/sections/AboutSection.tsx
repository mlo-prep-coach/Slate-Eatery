import aboutImg from "@/assets/about-dining-room.jpg";
import { about } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <div className="container-content grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <img
            src={aboutImg}
            width={1408}
            height={1104}
            loading="lazy"
            alt="Families eating in red booths while a server pours coffee"
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-soft transition-transform duration-300 hover:scale-[1.015]"
          />
        </Reveal>
        <Reveal delay={100}>
          <p className="font-display text-base font-bold uppercase tracking-wide text-primary">
            {about.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl">{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-muted-foreground">
              {p}
            </p>
          ))}
          <dl className="mt-7 grid grid-cols-3 gap-3">
            {about.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-secondary px-3 py-4 text-center">
                <dt className="font-display text-2xl font-extrabold text-primary">{s.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
