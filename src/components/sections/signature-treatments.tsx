import { treatments } from "@/data/treatments";
import { SectionLabel } from "@/components/ui/section-label";
import Link from "next/link";

export function SignatureTreatments() {
  const featured = [
    "dental-consultation",
    "smile-design",
    "skin-consultation",
    "hair-prp",
    "laser-hair-reduction",
    "botox"
  ]
    .map((slug) => treatments.find((treatment) => treatment.slug === slug))
    .filter((treatment): treatment is (typeof treatments)[number] => Boolean(treatment));

  return (
    <section className="section bg-porcelain-white">
      <div className="container-shell">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="editorial-rule">
            <SectionLabel>Signature treatments</SectionLabel>
            <h2 className="balanced mt-4 font-serif text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight md:leading-none text-deep-espresso">
              Signature treatments for smiles, skin, and confidence.
            </h2>
          </div>
          <p className="pretty max-w-2xl text-lg leading-8 text-muted-foreground">
            Dental, skin, hair, laser, and injectable treatments are organized around calm
            consultation and suitability-led planning.
          </p>
        </div>
        <div className="mt-12 grid auto-rows-[minmax(220px,auto)] grid-flow-dense gap-5 lg:grid-cols-12">
          {featured.map((treatment, index) => (
            <Link
              key={treatment.slug}
              href={`/treatments/${treatment.slug}`}
              className={[
                "liquid-glass premium-lift group relative flex min-h-64 flex-col justify-between overflow-hidden p-6 transition-colors hover:bg-warm-ivory",
                index === 0 ? "lg:col-span-5 lg:row-span-2" : "",
                index === 1 ? "lg:col-span-4" : "",
                index === 2 ? "lg:col-span-3" : "",
                index === 3 ? "lg:col-span-3" : "",
                index === 4 ? "lg:col-span-4" : "",
                index === 5 ? "lg:col-span-5" : ""
              ].join(" ")}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-champagne-gold/80" />
              <div>
                <p className="inline-flex border border-border bg-pearl px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-gold">
                  {treatment.category}
                </p>
                <h3 className="mt-5 font-serif text-2xl sm:text-3xl font-semibold leading-tight text-deep-espresso">
                  {treatment.title}
                </h3>
                <p className="pretty mt-4 leading-7 text-muted-foreground">{treatment.shortDescription}</p>
              </div>
              <span className="text-action mt-8">
                View treatment
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm font-medium text-muted-foreground">
          Treatment suitability and expected outcomes are confirmed after consultation.
        </p>
      </div>
    </section>
  );
}
