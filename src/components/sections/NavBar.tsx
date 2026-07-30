import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, restaurant } from "@/content/site";

export function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-soft">
      <div className="container-content grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary font-display text-lg font-extrabold text-primary-foreground">
            R
          </span>
          <span className="truncate font-display text-lg font-extrabold sm:text-xl">
            {restaurant.name}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-base font-semibold text-foreground transition-colors duration-300 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={restaurant.phoneHref}
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2.5 font-display text-base font-bold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lifted hover:brightness-110"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">{nav.callLabel}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground transition-colors duration-300 hover:bg-accent lg:hidden"
          >
            {open ? <Menu className="h-5 w-5 hidden" /> : null}
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card lg:hidden">
          <ul className="container-content flex flex-col py-2">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 font-display text-lg font-bold transition-colors duration-300 hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
