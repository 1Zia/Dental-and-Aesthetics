import { BookingCta } from "@/components/sections/booking-cta";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionLabel } from "@/components/ui/section-label";
import { clinic } from "@/lib/constants";

export const metadata = {
  title: "About",
  description: `About ${clinic.fullName}, a dental and aesthetic clinic in ${clinic.city}.`
};

const values = [
  "Clinical clarity",
  "Natural-looking outcomes",
  "Patient comfort",
  "Honest consultation",
  "Personalized treatment planning",
  "Aftercare awareness"
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-shell bg-[linear-gradient(112deg,var(--porcelain-white)_0%,var(--porcelain-white)_51%,var(--warm-ivory)_51%,var(--warm-ivory)_100%)]">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="editorial-rule">
            <SectionLabel>About the clinic</SectionLabel>
            <h1 className="balanced mt-5 font-serif text-6xl font-semibold leading-none text-deep-espresso md:text-8xl">
              Calm dental and aesthetic care in Islamabad.
            </h1>
          </div>
          <PremiumCard>
            <p className="pretty text-xl leading-9 text-deep-espresso">
              Dental & Aesthetic Hub by Dr. Romana is a dental and aesthetic clinic in Islamabad
              offering dental care, skin treatments, hair treatments, laser procedures, and
              aesthetic consultations in a calm clinical environment.
            </p>
          </PremiumCard>
        </div>
      </section>

      <section className="section">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="editorial-rule">
            <SectionLabel>Clinic philosophy</SectionLabel>
            <h2 className="balanced mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
              Clear advice before treatment decisions.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <PremiumCard className="shadow-none">
              <h3 className="font-serif text-4xl font-semibold text-deep-espresso">Suitability first</h3>
              <p className="pretty mt-4 leading-7 text-muted-foreground">
                Treatment recommendations are guided by assessment, patient concerns, health history,
                and realistic expectations.
              </p>
            </PremiumCard>
            <PremiumCard className="shadow-none">
              <h3 className="font-serif text-4xl font-semibold text-deep-espresso">Measured outcomes</h3>
              <p className="pretty mt-4 leading-7 text-muted-foreground">
                The clinic&apos;s aesthetic direction favors natural-looking results, balance, and
                thoughtful planning rather than over-treatment.
              </p>
            </PremiumCard>
          </div>
        </div>
      </section>

      <section className="section bg-warm-ivory">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <CarePanel
            title="Dental + aesthetic care under one roof"
            copy="Patients can discuss oral health, smile aesthetics, skin, hair, laser, PRP, Botox, fillers, and facial aesthetic concerns within one doctor-led clinic setting."
          />
          <CarePanel
            title="Patient comfort and privacy"
            copy="The clinic experience is designed to feel calm, respectful, and private, with time for questions before treatment choices are made."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionLabel>Treatment planning and aftercare</SectionLabel>
            <h2 className="balanced mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
              Planning does not end when treatment begins.
            </h2>
          </div>
          <PremiumCard>
            <p className="pretty text-xl leading-9 text-deep-espresso">
              Each treatment path should include an explanation of suitability, possible limitations,
              preparation, aftercare, and when follow-up may be needed. Outcomes vary by individual,
              so guidance is kept specific to the patient rather than generic promises.
            </p>
          </PremiumCard>
        </div>
      </section>

      <section className="section bg-pearl">
        <div className="container-shell">
          <SectionLabel>Clinic values</SectionLabel>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="border-t border-border pt-5">
                <h3 className="font-serif text-4xl font-semibold leading-none text-deep-espresso">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-shell flex flex-col gap-6 border-y border-border py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>Start with consultation</SectionLabel>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso">
              Talk through your concerns first.
            </h2>
          </div>
          <PremiumButton href="/book">Book consultation</PremiumButton>
        </div>
      </section>

      <BookingCta />
    </main>
  );
}

function CarePanel({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="liquid-glass premium-lift p-8 md:p-11">
      <h2 className="font-serif text-5xl font-semibold leading-none text-deep-espresso">{title}</h2>
      <p className="pretty mt-6 text-lg leading-8 text-muted-foreground">{copy}</p>
    </article>
  );
}
