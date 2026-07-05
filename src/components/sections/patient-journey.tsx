import { SectionLabel } from "@/components/ui/section-label";

const steps = [
  {
    title: "Consultation",
    copy: "A private conversation about concerns, timing, medical history, and treatment goals."
  },
  {
    title: "Clinical assessment",
    copy: "Dental, skin, facial, or hair concerns are assessed before treatment is recommended."
  },
  {
    title: "Personalized treatment plan",
    copy: "Options are explained with realistic expectations, suitability, and aftercare needs."
  },
  {
    title: "Treatment and aftercare",
    copy: "Care is delivered with comfort in mind, followed by clear guidance for recovery or maintenance."
  }
];

export function PatientJourney() {
  return (
    <section className="section bg-pearl">
      <div className="container-shell">
        <div className="editorial-rule max-w-3xl">
          <SectionLabel>Patient journey</SectionLabel>
          <h2 className="balanced mt-4 font-serif text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight md:leading-none text-deep-espresso">
            A consultation-led path, from first question to aftercare.
          </h2>
        </div>
        <div className="mt-12 grid gap-0 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="premium-lift border-l border-border px-6 py-5 md:border-l-0 md:border-t">
              <span className="font-serif text-4xl font-semibold text-champagne-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-serif text-2xl sm:text-3xl font-semibold leading-tight text-deep-espresso">{step.title}</h3>
              <p className="pretty mt-3 leading-7 text-muted-foreground">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
