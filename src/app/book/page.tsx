import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { ConsultationForm } from "@/components/ui/consultation-form";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionLabel } from "@/components/ui/section-label";
import { clinic, contactLinks } from "@/lib/constants";

export const metadata = {
  title: "Book",
  description: `Book an appointment with ${clinic.doctorName}.`
};

export default function BookPage() {
  return (
    <main className="page-shell bg-[linear-gradient(112deg,var(--porcelain-white)_0%,var(--porcelain-white)_49%,var(--warm-ivory)_49%,var(--warm-ivory)_100%)]">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="editorial-rule lg:sticky lg:top-28">
          <SectionLabel>Appointments</SectionLabel>
          <h1 className="balanced mt-5 font-serif text-6xl font-semibold leading-none text-deep-espresso md:text-8xl">
            Request a private consultation.
          </h1>
          <p className="pretty mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Tell us what you are considering. The clinic team will contact you to confirm
            availability, treatment category, and the appropriate next step.
          </p>

          <PremiumCard className="mt-8 bg-pearl shadow-none">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-gold">Clinic hours</p>
            <p className="mt-3 font-serif text-3xl font-semibold leading-none text-deep-espresso">{clinic.hours}</p>
            <p className="pretty mt-4 leading-7 text-muted-foreground">
              Form submissions are enquiry requests only and do not provide medical or dental advice.
            </p>
          </PremiumCard>

          <div className="mt-5 grid gap-3">
            {[
              "Our team will contact you to confirm availability.",
              "Treatment recommendations are made after assessment.",
              "For urgent dental concerns, please call directly."
            ].map((item) => (
              <div key={item} className="flex gap-3 border-t border-border pt-3 text-sm font-medium text-deep-espresso">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-muted-gold" aria-hidden />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="premium-lift mt-6 rounded-[calc(var(--radius)*1.5)] border border-pearl/20 bg-deep-espresso/94 p-6 text-pearl shadow-[var(--shadow-tight)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne-gold">
              Prefer WhatsApp?
            </p>
            <p className="mt-3 font-serif text-3xl font-semibold leading-none">Message {clinic.phone}</p>
            <PremiumButton href={contactLinks.whatsapp} variant="gold" className="mt-5">
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp now
            </PremiumButton>
            <PremiumButton href={contactLinks.phone} variant="ghost" className="mt-3 border-pearl/30 text-pearl hover:bg-pearl/10">
              <Phone className="size-4" aria-hidden />
              Call clinic
            </PremiumButton>
          </div>
        </div>

        <PremiumCard className="quiet-panel border-champagne-gold/30 shadow-none">
          <div className="mb-6 border-b border-border pb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-gold">
              Consultation request
            </p>
            <p className="pretty mt-3 text-sm leading-6 text-muted-foreground">
              Share the concern in your own words. The clinic will help confirm the right category before booking.
            </p>
          </div>
          <ConsultationForm />
        </PremiumCard>
      </div>
    </main>
  );
}
