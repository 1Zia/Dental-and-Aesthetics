import { BookingCta } from "@/components/sections/booking-cta";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata = {
  title: "Pricing",
  description: "Consultation-led placeholder pricing for dental and aesthetic treatments."
};

const pricingCards = [
  {
    category: "Dental",
    treatment: "Dental Consultation",
    price: "Price to be confirmed",
    note: "Consultation pricing will be confirmed by the clinic team."
  },
  {
    category: "Dental",
    treatment: "Scaling & Polishing",
    price: "Starting from [PRICE]",
    note: "Final fee depends on oral condition and treatment needs."
  },
  {
    category: "Dental",
    treatment: "Teeth Whitening",
    price: "Starting from [PRICE]",
    note: "Suitability, sensitivity, and whitening plan affect pricing."
  },
  {
    category: "Skin",
    treatment: "Skin Consultation",
    price: "Price to be confirmed",
    note: "Consultation pricing will be confirmed before booking."
  },
  {
    category: "Hair / Skin",
    treatment: "PRP",
    price: "Starting from [PRICE]",
    note: "Pricing depends on treatment area, sessions, and suitability."
  },
  {
    category: "Laser",
    treatment: "Laser Hair Reduction",
    price: "Area-based pricing",
    note: "Treatment area, hair type, skin type, and session plan affect pricing."
  },
  {
    category: "Injectables",
    treatment: "Botox / Fillers",
    price: "Consultation-based pricing",
    note: "Product quantity, treatment area, and treatment plan affect pricing."
  }
];

const categories = [
  "Dental consultations and procedures",
  "Skin consultations and treatments",
  "Hair and PRP planning",
  "Laser procedures",
  "Botox, fillers, and facial aesthetic consultations"
];

const assessmentReasons = [
  "Clinical suitability must be checked before treatment.",
  "Treatment area and case complexity can change the plan.",
  "Product quantity or number of sessions may vary.",
  "Aftercare and follow-up needs can affect the final treatment pathway."
];

const pricingDisclaimer =
  "Final pricing depends on clinical assessment, treatment area, product quantity, case complexity, and treatment plan.";

export default function PricingPage() {
  return (
    <main>
      <section className="page-shell bg-[linear-gradient(112deg,var(--porcelain-white)_0%,var(--porcelain-white)_50%,var(--warm-ivory)_50%,var(--warm-ivory)_100%)]">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="editorial-rule">
            <SectionLabel>Pricing guidance</SectionLabel>
            <h1 className="balanced mt-5 max-w-5xl font-serif text-6xl font-semibold leading-none text-deep-espresso md:text-8xl">
              Consultation-led pricing without misleading fixed promises.
            </h1>
          </div>
          <PremiumCard>
            <p className="pretty text-xl leading-9 text-deep-espresso">
              Pricing is listed as placeholders until the client provides official clinic rates.
              The clinic confirms fees after assessment, treatment selection, and planning.
            </p>
          </PremiumCard>
        </div>
      </section>

      <section className="section">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Pricing explanation</SectionLabel>
            <h2 className="balanced mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
              Why prices are confirmed after consultation.
            </h2>
          </div>
          <PremiumCard className="shadow-none">
            <p className="pretty text-xl leading-9 text-deep-espresso">{pricingDisclaimer}</p>
            <p className="pretty mt-5 leading-7 text-muted-foreground">
              This approach keeps pricing honest and avoids quoting a fee that may not match the
              patient&apos;s clinical needs, treatment area, or expected treatment plan.
            </p>
          </PremiumCard>
        </div>
      </section>

      <section className="section bg-warm-ivory">
        <div className="container-shell">
          <SectionLabel>Treatment categories</SectionLabel>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <div key={category} className="border-t border-border pt-5">
                <p className="pretty font-serif text-3xl font-semibold leading-none text-deep-espresso">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="editorial-rule">
              <SectionLabel>Starting-from placeholders</SectionLabel>
              <h2 className="mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
                Placeholder pricing cards.
              </h2>
            </div>
            <PremiumButton href="/book" variant="ivory">
              Confirm pricing
            </PremiumButton>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pricingCards.map((card) => (
              <PremiumCard key={card.treatment} className="premium-lift relative overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-1 bg-champagne-gold/75" aria-hidden />
                <p className="inline-flex border border-border bg-pearl px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-gold">{card.category}</p>
                <h3 className="mt-4 font-serif text-4xl font-semibold leading-none text-deep-espresso">
                  {card.treatment}
                </h3>
                <p className="mt-6 border-y border-border py-4 text-lg font-semibold text-deep-espresso">
                  {card.price}
                </p>
                <p className="pretty mt-4 leading-7 text-muted-foreground">{card.note}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pearl">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Why assessment matters</SectionLabel>
            <h2 className="balanced mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
              A quote should match the real plan.
            </h2>
          </div>
          <div className="grid gap-4">
            {assessmentReasons.map((reason, index) => (
              <div key={reason} className="grid grid-cols-[auto_1fr] gap-5 border-t border-border pt-5">
                <span className="font-serif text-4xl font-semibold leading-none text-muted-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pretty text-lg leading-8 text-deep-espresso">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-deep-espresso text-pearl">
        <div className="container-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-champagne-gold">Pricing CTA</p>
            <h2 className="balanced mt-4 max-w-3xl font-serif text-5xl font-semibold leading-none md:text-7xl">
              Ask the clinic to confirm the right estimate.
            </h2>
          </div>
          <PremiumButton href="/book" variant="gold">
            Book consultation
          </PremiumButton>
        </div>
      </section>

      <BookingCta />
    </main>
  );
}
