import { Star } from "lucide-react";
import { reviews } from "@/content/site";
import { Reveal } from "@/components/Reveal";

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-2.8-.4-4.1H24v7.5h12.1c-.2 2-1.6 5-4.5 7l6.9 5.3c4.1-3.8 6.6-9.4 6.6-15.7z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.3c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.4-9.1l-7.1 5.5C8.1 41.1 15.5 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.6 28.5c-.5-1.3-.7-2.7-.7-4.5s.3-3.2.7-4.5l-7.1-5.5C2.9 17 2 20.4 2 24s.9 7 2.5 10z"
      />
      <path
        fill="#EA4335"
        d="M24 10.6c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.4 29.9 2 24 2 15.5 2 8.1 6.9 4.5 14l7.1 5.5c1.7-5.3 6.6-8.9 12.4-8.9z"
      />
    </svg>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad bg-secondary/50">
      <div className="container-content">
        <Reveal className="text-center">
          <h2 className="text-3xl md:text-4xl">{reviews.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{reviews.intro}</p>
        </Reveal>

        <div
          className={`mt-9 grid gap-5 md:grid-cols-2 ${
            reviews.items.length > 2 ? "lg:grid-cols-3" : ""
          }`}
        >
          {reviews.items.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 80}>
              <article className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-lifted">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`h-5 w-5 ${s < r.rating ? "fill-current" : "text-border"}`}
                    />
                  ))}
                </div>
                <p className="mt-3 flex-1 break-words text-base leading-relaxed text-foreground">
                  “{r.text}”
                </p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="min-w-0 truncate font-display font-bold">{r.name}</span>
                  <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
                    <GoogleMark />
                    {reviews.googleLabel}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
