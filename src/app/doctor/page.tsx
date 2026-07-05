import Image from "next/image";
import { BookingCta } from "@/components/sections/booking-cta";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionLabel } from "@/components/ui/section-label";
import { doctor } from "@/data/doctor";
import { treatments } from "@/data/treatments";
import { clinic } from "@/lib/constants";

export const metadata = {
  title: "Dr. Romana Afridi",
  description: "Dr. Romana Afridi, Aesthetic Physician & Dentist at Dental & Aesthetic Hub in Islamabad."
};

const associatedTreatmentSlugs = [
  "dental-consultation",
  "smile-design",
  "botox",
  "fillers",
  "hair-prp",
  "skin-consultation",
  "laser-hair-reduction",
  "prp-face"
];

const associatedTreatments = associatedTreatmentSlugs
  .map((slug) => treatments.find((treatment) => treatment.slug === slug))
  .filter((treatment): treatment is (typeof treatments)[number] => Boolean(treatment));

export default function DoctorPage() {
  return (
    <main>
      <section className="page-shell bg-[linear-gradient(112deg,var(--porcelain-white)_0%,var(--porcelain-white)_51%,var(--warm-ivory)_51%,var(--warm-ivory)_100%)]">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="editorial-rule">
            <SectionLabel>Doctor profile</SectionLabel>
            <h1 className="balanced mt-5 font-serif text-4xl sm:text-5xl md:text-8xl font-semibold leading-tight md:leading-none text-deep-espresso">
              Dr. Romana Afridi
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-gold">
              {doctor.title}
            </p>
            <p className="pretty mt-7 max-w-2xl text-xl leading-9 text-deep-espresso">{doctor.bio}</p>
            <PremiumButton href="/book" className="mt-9">
              Book a consultation with Dr. Romana
            </PremiumButton>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-full w-full border border-champagne-gold/60" />
            <div className="relative aspect-[4/5] bg-warm-ivory shadow-none overflow-hidden rounded-2xl">
              <Image
                src="/dr-romana.jpg"
                alt="Dr. Romana Afridi"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/60 via-transparent to-transparent z-[1]" />
              <div className="absolute inset-x-8 bottom-8 border border-border bg-pearl p-6 shadow-none z-10 rounded-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-gold">Credentials card</p>
                <p className="mt-3 font-serif text-3xl font-semibold leading-none text-deep-espresso">
                  {doctor.name}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{doctor.title}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Founder / lead doctor at {clinic.name}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Professional focus</SectionLabel>
            <h2 className="balanced mt-4 font-serif text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight md:leading-none text-deep-espresso">
              Dentistry and aesthetics, guided by assessment.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {doctor.focusAreas.map((area) => (
              <PremiumCard key={area} className="shadow-none">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-deep-espresso">{area}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-deep-espresso text-pearl">
        <div className="container-shell max-w-5xl">
          <SectionLabel className="text-champagne-gold">Treatment philosophy</SectionLabel>
          <blockquote className="balanced mt-6 font-serif text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight md:leading-none">
            &quot;{doctor.quote}&quot;
          </blockquote>
          <p className="pretty mt-8 max-w-3xl text-lg leading-8 text-pearl/72">{doctor.philosophy}</p>
        </div>
      </section>

      <section className="section bg-warm-ivory">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionLabel>Dental and aesthetic approach</SectionLabel>
            <h2 className="balanced mt-4 font-serif text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight md:leading-none text-deep-espresso">
              Clear planning before treatment begins.
            </h2>
          </div>
          <PremiumCard className="bg-pearl shadow-none">
            <p className="pretty text-xl leading-9 text-deep-espresso">{doctor.approach}</p>
            <div className="mt-8 grid gap-3">
              {doctor.principles.map((principle) => (
                <p key={principle} className="border-t border-border pt-4 text-sm font-semibold text-muted-foreground">
                  {principle}
                </p>
              ))}
            </div>
          </PremiumCard>
        </div>
      </section>

      <section className="section">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Associated services</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight md:leading-none text-deep-espresso">
                Services associated with Dr. Romana.
              </h2>
            </div>
            <PremiumButton href="/treatments" variant="ivory">
              View treatments
            </PremiumButton>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {associatedTreatments.map((treatment) => (
              <a
                key={treatment.slug}
                href={`/treatments/${treatment.slug}`}
                className="liquid-glass premium-lift group relative overflow-hidden p-6 transition-colors hover:bg-warm-ivory"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-champagne-gold/75" aria-hidden />
                <p className="inline-flex border border-border bg-pearl px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-gold">{treatment.category}</p>
                <h3 className="mt-4 font-serif text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-deep-espresso">
                  {treatment.title}
                </h3>
                <p className="pretty mt-4 text-sm leading-6 text-muted-foreground">{treatment.shortDescription}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pearl">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Consultation expectations</SectionLabel>
            <h2 className="balanced mt-4 font-serif text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight md:leading-none text-deep-espresso">
              What patients can expect.
            </h2>
          </div>
          <div className="grid gap-4">
            {doctor.consultationExpectations.map((item, index) => (
              <div key={item} className="grid grid-cols-[auto_1fr] gap-5 border-t border-border pt-5">
                <span className="font-serif text-4xl font-semibold leading-none text-muted-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pretty text-lg leading-8 text-deep-espresso">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCta />
    </main>
  );
}
