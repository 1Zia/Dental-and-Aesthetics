import Link from "next/link";
import { PremiumButton } from "@/components/ui/premium-button";
import { treatmentCategories } from "@/data/treatments";

const categoryHelp: Record<(typeof treatmentCategories)[number], string> = {
  Dental: "Tooth pain, cleaning, whitening, smile planning",
  Skin: "Acne, pigmentation, glow, rejuvenation",
  Hair: "Hair fall concerns and PRP discussion",
  Laser: "Hair reduction and laser suitability",
  Injectables: "Botox, fillers, PRP face, facial balance"
};

export function TreatmentCategoryQuickLinks() {
  return (
    <section className="border-y border-border bg-pearl">
      <div className="container-shell py-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-gold">
              Not sure where to begin?
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight md:leading-none text-deep-espresso">
              Choose the area closest to your concern.
            </h2>
            <p className="pretty mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              Treatment recommendations are made after assessment. If you are unsure, start with a general consultation.
            </p>
          </div>
          <PremiumButton href="/book" variant="ivory">
            Book Consultation
          </PremiumButton>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {treatmentCategories.map((category) => (
            <Link
              key={category}
              href={`/treatments#${category.toLowerCase()}`}
              className="liquid-glass premium-lift p-5"
            >
              <span className="block font-serif text-2xl sm:text-3xl font-semibold leading-tight text-deep-espresso">
                {category}
              </span>
              <span className="pretty mt-3 block text-sm leading-6 text-muted-foreground">
                {categoryHelp[category]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
