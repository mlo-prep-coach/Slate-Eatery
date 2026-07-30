import { footer, nav, restaurant } from "@/content/site";

export function FooterSection() {
  return (
    <footer className="bg-secondary">
      <div className="container-content grid gap-8 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary font-display text-lg font-extrabold text-primary-foreground">
              R
            </span>
            <span className="font-display text-xl font-extrabold">{restaurant.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-base text-muted-foreground">{footer.blurb}</p>
        </div>

        <div>
          <h3 className="font-display text-lg">{footer.quickLinksTitle}</h3>
          <ul className="mt-3 space-y-1.5">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-base text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg">{footer.followTitle}</h3>
          <ul className="mt-3 space-y-1.5">
            {restaurant.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-base text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={restaurant.phoneHref}
            className="mt-4 inline-flex rounded-2xl bg-primary px-5 py-2.5 font-display font-bold text-primary-foreground transition-all duration-300 hover:brightness-110"
          >
            {restaurant.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="container-content py-5 text-center text-sm text-muted-foreground">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
