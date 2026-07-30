import { Mail, MapPin, Phone } from "lucide-react";
import { contact, restaurant } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  const items = [
    { icon: Phone, label: "Phone", value: restaurant.phone, href: restaurant.phoneHref },
    { icon: Mail, label: "Email", value: restaurant.email, href: `mailto:${restaurant.email}` },
    { icon: MapPin, label: "Address", value: restaurant.address, href: restaurant.directionsUrl },
  ];

  return (
    <section id="contact" className="section-pad bg-cocoa text-cream">
      <div className="container-content">
        <Reveal className="text-center">
          <h2 className="text-3xl text-cream md:text-4xl">{contact.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-cream/80">{contact.intro}</p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <a
                href={item.href}
                className="flex h-full items-start gap-3 rounded-3xl bg-cream/10 p-6 transition-colors duration-300 hover:bg-cream/20"
              >
                <item.icon className="mt-1 h-5 w-5 shrink-0 text-butter" />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-cream/70">{item.label}</span>
                  <span className="block break-words font-display text-lg font-bold text-cream">
                    {item.value}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <a
            href={restaurant.phoneHref}
            className="inline-flex items-center gap-2 rounded-2xl bg-butter px-8 py-4 font-display text-xl font-extrabold text-cocoa shadow-lifted transition-all duration-300 hover:brightness-105"
          >
            <Phone className="h-5 w-5" />
            {contact.callCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
