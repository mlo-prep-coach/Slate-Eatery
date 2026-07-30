import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/content/site";
import { NavBar } from "@/components/sections/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { SpecialsSection } from "@/components/sections/SpecialsSection";
import { FavoritesSection } from "@/components/sections/FavoritesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { HoursSection } from "@/components/sections/HoursSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <SpecialsSection />
        <FavoritesSection />
        <GallerySection />
        <ReviewsSection />
        <HoursSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
