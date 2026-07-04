import { patientExperienceNotes } from "@/data/testimonials";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionLabel } from "@/components/ui/section-label";

export function TestimonialsSection() {
  return (
    <section className="section bg-warm-ivory">
      <div className="container-shell">
        <div className="editorial-rule max-w-3xl">
          <SectionLabel>Patient experience</SectionLabel>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {patientExperienceNotes.map((item) => (
            <PremiumCard key={item.title} className="premium-lift bg-pearl">
              <p className="font-serif text-3xl font-semibold leading-tight text-deep-espresso">
                {item.title}
              </p>
              <p className="pretty mt-5 leading-7 text-muted-foreground">{item.note}</p>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
