import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingCta } from "@/components/sections/booking-cta";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionLabel } from "@/components/ui/section-label";
import { TreatmentCard } from "@/components/ui/treatment-card";
import { getRelatedTreatments, getTreatmentBySlug, treatments } from "@/data/treatments";
import { faqJsonLd, treatmentServiceJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  return {
    title: treatment?.title ?? "Treatment",
    description: treatment?.shortDescription
  };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) notFound();

  const relatedTreatments = getRelatedTreatments(treatment);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(treatmentServiceJsonLd(treatment)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(treatment.faqs)) }}
      />
      <section className="page-shell bg-[linear-gradient(112deg,var(--porcelain-white)_0%,var(--porcelain-white)_50%,var(--warm-ivory)_50%,var(--warm-ivory)_100%)]">
        <div className="container-shell">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-deep-espresso">
              Home
            </Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-deep-espresso">
              Treatments
            </Link>
            <span>/</span>
            <span className="text-deep-espresso">{treatment.title}</span>
          </nav>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="editorial-rule">
              <SectionLabel>{treatment.category}</SectionLabel>
              <h1 className="balanced mt-5 font-serif text-6xl font-semibold leading-none text-deep-espresso md:text-8xl">
                {treatment.title}
              </h1>
            </div>
            <PremiumCard>
              <p className="pretty text-2xl leading-10 text-deep-espresso">{treatment.shortDescription}</p>
              <p className="pretty mt-6 leading-8 text-muted-foreground">{treatment.longDescription}</p>
              <PremiumButton href="/book" className="mt-8">
                Book consultation
              </PremiumButton>
            </PremiumCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="editorial-rule">
            <SectionLabel>Overview</SectionLabel>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
              Consultation-led care.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <ListPanel title="Who it may be suitable for" items={treatment.idealFor} />
            <ListPanel title="Potential benefits" items={treatment.benefits} />
          </div>
        </div>
      </section>

      <section className="section bg-warm-ivory">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <StepPanel title="Process" items={treatment.process} />
          <StepPanel title="Aftercare" items={treatment.aftercare} />
        </div>
      </section>

      <section className="section">
        <div className="container-shell max-w-4xl">
          <SectionLabel>FAQs</SectionLabel>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {treatment.faqs.map((faq) => (
              <details key={faq.question} className="py-5">
                <summary className="cursor-pointer list-none font-serif text-3xl font-semibold text-deep-espresso">
                  {faq.question}
                </summary>
                <p className="pretty mt-4 leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pearl">
        <div className="container-shell">
          <PremiumCard className="bg-warm-ivory shadow-none">
            <SectionLabel>Suitability disclaimer</SectionLabel>
            <p className="pretty mt-4 text-xl leading-9 text-deep-espresso">{treatment.disclaimer}</p>
          </PremiumCard>
        </div>
      </section>

      {relatedTreatments.length > 0 ? (
        <section className="section">
          <div className="container-shell">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="editorial-rule">
                <SectionLabel>Related treatments</SectionLabel>
                <h2 className="mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
                  More {treatment.category.toLowerCase()} care.
                </h2>
              </div>
              <PremiumButton href="/treatments" variant="ivory">
                View all treatments
              </PremiumButton>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {relatedTreatments.map((related) => (
                <TreatmentCard key={related.slug} treatment={related} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <BookingCta />
    </main>
  );
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <PremiumCard className="premium-lift shadow-none">
      <h3 className="font-serif text-4xl font-semibold text-deep-espresso">{title}</h3>
      <ul className="mt-6 grid gap-3">
        {items.map((item) => (
          <li key={item} className="border-t border-border pt-3 leading-7 text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </PremiumCard>
  );
}

function StepPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <SectionLabel>{title}</SectionLabel>
      <div className="mt-6 grid gap-4">
        {items.map((item, index) => (
          <div key={item} className="premium-lift grid grid-cols-[auto_1fr] gap-5 border-t border-border pt-5">
            <span className="font-serif text-4xl font-semibold leading-none text-muted-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="pretty text-lg leading-8 text-deep-espresso">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
