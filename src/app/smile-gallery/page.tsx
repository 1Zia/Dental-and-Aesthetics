import Image from "next/image";
import { BookingCta } from "@/components/sections/booking-cta";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionLabel } from "@/components/ui/section-label";
import { contactLinks } from "@/lib/constants";

export const metadata = {
  title: "Smile & Aesthetic Gallery",
  description: "Explore clinical results, case studies, and suitability assessments at Dental & Aesthetic Hub."
};

type CaseCard = {
  category: string;
  title: string;
  concern: string;
  treatmentType: string;
  note: string;
  image: string;
};

const categories = ["Dental", "Whitening", "Skin", "PRP", "Laser", "Injectables"];

const cases: CaseCard[] = [
  {
    category: "Dental",
    title: "Smile design consultation",
    concern: "Smile proportion and dental aesthetic planning",
    treatmentType: "Dental consultation / smile design",
    note: "Consultation covers smile lines, incisal edges, and custom restorative pathways.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Whitening",
    title: "Brightness consultation",
    concern: "Dullness and external staining discussion",
    treatmentType: "Teeth whitening assessment",
    note: "Whitening suitability, sensitivity, and expected shade response require clinical review.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Skin",
    title: "Skin clarity planning",
    concern: "Texture, glow, or pigmentation-related questions",
    treatmentType: "Skin consultation",
    note: "Skin response varies by individual, routine, history, and treatment suitability.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "PRP",
    title: "PRP suitability review",
    concern: "Hair or skin quality concerns",
    treatmentType: "PRP consultation",
    note: "PRP planning depends on assessment, indication, and realistic expectations.",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Laser",
    title: "Laser care planning",
    concern: "Hair reduction or skin laser suitability",
    treatmentType: "Laser consultation",
    note: "Laser plans depend on skin type, treatment area, hair type, and aftercare ability.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Injectables",
    title: "Facial balance assessment",
    concern: "Expression lines, volume, or proportion concerns",
    treatmentType: "Botox / filler consultation",
    note: "Injectable treatments require medical history, facial assessment, and suitability review.",
    image: "https://images.unsplash.com/photo-1514864350063-477db399d7f6?auto=format&fit=crop&w=800&q=80"
  }
];

const disclaimer =
  "Gallery images are professional representations of clinical cases. Real patient-approved clinical before/after photography is subject to privacy guidelines and is shared regularly on our official social media channels. A consultation is required to understand your treatment suitability and realistic individual expectations.";

export default function SmileGalleryPage() {
  return (
    <main>
      <section className="page-shell bg-[linear-gradient(112deg,var(--porcelain-white)_0%,var(--porcelain-white)_50%,var(--warm-ivory)_50%,var(--warm-ivory)_100%)]">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="editorial-rule">
            <SectionLabel>Smile & Aesthetic Gallery</SectionLabel>
            <h1 className="balanced mt-5 font-serif text-5xl font-semibold leading-tight text-deep-espresso md:text-7xl">
              Clinical case studies & patient results.
            </h1>
          </div>
          <PremiumCard className="bg-pearl/80 border border-white/50 backdrop-blur-md p-8 rounded-3xl shadow-xl">
            <p className="pretty text-lg leading-relaxed text-deep-espresso">
              To respect patient confidentiality and clinical advertising guidelines, we host our actual, 
              consented before/after patient case files on Facebook and Instagram. Follow our channels to 
              see daily transformations.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <PremiumButton href={contactLinks.instagram} className="min-h-10 h-10 px-5 text-xs">
                Instagram Results
              </PremiumButton>
              <PremiumButton href={contactLinks.facebook} variant="ivory" className="min-h-10 h-10 px-5 text-xs border border-deep-espresso/15">
                Facebook Gallery
              </PremiumButton>
            </div>
          </PremiumCard>
        </div>
      </section>

      <section className="section">
        <div className="container-shell">
          <SectionLabel>Select Treatment Area</SectionLabel>
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase()}`}
                className="pressable border border-border bg-pearl px-5 py-3 text-sm font-semibold text-deep-espresso hover:border-muted-gold hover:text-muted-gold rounded-lg shadow-sm"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pearl/50">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((caseItem) => (
              <CaseStudyCard key={caseItem.category} caseItem={caseItem} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-shell">
          <PremiumCard className="bg-warm-ivory border border-deep-espresso/5 shadow-none p-8 rounded-3xl">
            <SectionLabel>Gallery Notice</SectionLabel>
            <p className="pretty mt-4 text-base md:text-lg leading-relaxed text-deep-espresso">{disclaimer}</p>
          </PremiumCard>
        </div>
      </section>

      <section className="section bg-deep-espresso text-pearl">
        <div className="container-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-champagne-gold">Assessment first</p>
            <h2 className="balanced mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
              Understand what may be suitable for you.
            </h2>
          </div>
          <PremiumButton href="/book" variant="gold">
            Book an assessment
          </PremiumButton>
        </div>
      </section>

      <BookingCta />
    </main>
  );
}

function CaseStudyCard({ caseItem }: { caseItem: CaseCard }) {
  return (
    <article id={caseItem.category.toLowerCase()} className="liquid-glass premium-lift overflow-hidden rounded-2xl flex flex-col h-full bg-pearl border border-deep-espresso/5">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={caseItem.image}
          alt={caseItem.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-pearl/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/40 text-[10px] font-bold uppercase tracking-wider text-muted-gold z-10 shadow-sm">
          Clinical Visual
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-gold">{caseItem.category}</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-deep-espresso">{caseItem.title}</h2>
        <dl className="mt-5 grid gap-4 text-sm flex-grow">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-deep-espresso/50">Concern</dt>
            <dd className="pretty mt-1 leading-relaxed text-muted-foreground">{caseItem.concern}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-deep-espresso/50">Treatment type</dt>
            <dd className="pretty mt-1 leading-relaxed text-muted-foreground">{caseItem.treatmentType}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-deep-espresso/50">Note</dt>
            <dd className="pretty mt-1 leading-relaxed text-muted-foreground">{caseItem.note}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
