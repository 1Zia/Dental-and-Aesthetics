import { TreatmentCard } from "@/components/ui/treatment-card";
import { BookingCta } from "@/components/sections/booking-cta";
import { TreatmentCategoryQuickLinks } from "@/components/sections/treatment-category-quick-links";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionLabel } from "@/components/ui/section-label";
import { treatmentCategories, treatments, type TreatmentCategory } from "@/data/treatments";

export const metadata = {
  title: "Treatments",
  description: "Dental, skin, hair, laser, Botox, fillers, PRP, and aesthetic treatments in Islamabad."
};

export default function TreatmentsPage() {
  return (
    <main>
      <section className="page-shell bg-[linear-gradient(112deg,var(--porcelain-white)_0%,var(--porcelain-white)_50%,var(--warm-ivory)_50%,var(--warm-ivory)_100%)]">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="editorial-rule">
            <SectionLabel>Treatments</SectionLabel>
            <h1 className="balanced mt-5 max-w-5xl font-serif text-6xl font-semibold leading-none text-deep-espresso md:text-8xl">
              Dental and aesthetic treatment planning, guided by suitability.
            </h1>
          </div>
          <p className="pretty max-w-2xl text-lg leading-8 text-muted-foreground">
            Explore dental, skin, hair, laser, and injectable consultations. Every treatment path
            begins with professional assessment, realistic expectations, and care instructions.
          </p>
        </div>
        <div className="container-shell mt-10 flex flex-wrap gap-3">
          <a className="pressable border border-deep-espresso bg-deep-espresso px-5 py-3 text-sm font-bold text-pearl shadow-[0_8px_16px_rgb(37_29_24_/_0.12)]" href="#all">
            All
          </a>
          {treatmentCategories.map((category) => (
            <a key={category} className="pressable border border-deep-espresso/20 bg-pearl px-5 py-3 text-sm font-bold text-deep-espresso shadow-[0_6px_14px_rgb(37_29_24_/_0.06)] hover:border-muted-gold hover:bg-warm-ivory hover:text-deep-espresso" href={`#${category.toLowerCase()}`}>
              {category}
            </a>
          ))}
        </div>
      </section>

      <TreatmentCategoryQuickLinks />

      <section className="section" id="all">
        <div className="container-shell">
          <SectionLabel>All treatments</SectionLabel>
          <div className="mt-8 grid auto-rows-[minmax(240px,auto)] grid-flow-dense gap-5 md:grid-cols-2 lg:grid-cols-12">
            {treatments.slice(0, 8).map((treatment, index) => (
              <div
                key={treatment.slug}
                className={index === 0 || index === 5 ? "lg:col-span-6" : "lg:col-span-3"}
              >
                <TreatmentCard treatment={treatment} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {treatmentCategories.map((category) => (
        <TreatmentCategorySection key={category} category={category} />
      ))}

      <BookingCta />
    </main>
  );
}

function TreatmentCategorySection({ category }: { category: TreatmentCategory }) {
  const categoryTreatments = treatments.filter((treatment) => treatment.category === category);

  return (
    <section className="section border-t border-border" id={category.toLowerCase()}>
      <div className="container-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>{category}</SectionLabel>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
              {category} treatments
            </h2>
          </div>
          <PremiumButton href="/book" variant="ivory">
            Ask about {category.toLowerCase()} care
          </PremiumButton>
        </div>
        <div className="mt-10 grid auto-rows-[minmax(240px,auto)] grid-flow-dense gap-5 md:grid-cols-2 lg:grid-cols-12">
          {categoryTreatments.map((treatment, index) => (
            <div
              key={treatment.slug}
              className={index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-4" : "lg:col-span-3"}
            >
              <TreatmentCard treatment={treatment} />
            </div>
          ))}
        </div>
        <div className="mt-8 border border-border bg-warm-ivory p-6 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-8">
          <p className="pretty text-lg leading-8 text-deep-espresso">
            Not sure where to begin? A consultation can support safer treatment selection after
            professional assessment. Results vary by individual.
          </p>
          <PremiumButton href="/book" className="mt-5">
            Book consultation
          </PremiumButton>
        </div>
      </div>
    </section>
  );
}
