import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { contactLinks } from "@/lib/constants";

const previewCategories = [
  {
    name: "Smile design",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    link: "/smile-gallery#dental"
  },
  {
    name: "Teeth whitening",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    link: "/smile-gallery#whitening"
  },
  {
    name: "Skin therapies",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
    link: "/smile-gallery#skin"
  },
  {
    name: "PRP treatment",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    link: "/smile-gallery#prp"
  },
  {
    name: "Laser clinic",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    link: "/smile-gallery#laser"
  },
  {
    name: "Facial aesthetics",
    image: "https://images.unsplash.com/photo-1514864350063-477db399d7f6?auto=format&fit=crop&w=600&q=80",
    link: "/smile-gallery#injectables"
  }
];

export function ResultsGalleryPreview() {
  return (
    <section className="section">
      <div className="container-shell">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="editorial-rule">
            <SectionLabel>Results & Cases</SectionLabel>
            <h2 className="balanced mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
              Realistic outcomes, carefully planned.
            </h2>
          </div>
          <div className="pretty text-lg leading-8 text-muted-foreground">
            <p>
              We prioritize patient privacy and clinical guidelines. High-definition case results, 
              before/after treatments, and daily clinic updates are shared directly with our community.
            </p>
            <p className="mt-3 text-sm font-semibold text-deep-espresso">
              Follow us on{" "}
              <a href={contactLinks.instagram} className="text-muted-gold underline hover:text-champagne-gold">Instagram</a>
              {" "}and{" "}
              <a href={contactLinks.facebook} className="text-muted-gold underline hover:text-champagne-gold">Facebook</a>
              {" "}to see actual patient photos.
            </p>
          </div>
        </div>
        
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {previewCategories.map((cat, index) => (
            <Link 
              key={cat.name} 
              href={cat.link}
              className="group liquid-glass premium-lift relative aspect-[4/3] overflow-hidden flex items-end p-6 rounded-2xl"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft dark wash at bottom to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/90 via-deep-espresso/20 to-transparent z-[1]" />
              
              <div className="relative z-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne-gold">Clinical Area {index + 1}</p>
                <h3 className="mt-1 font-serif text-2xl font-semibold text-pearl leading-none">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
