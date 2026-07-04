import { ArrowRight, MessageCircle } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { clinic, contactLinks } from "@/lib/constants";

export function BookingCta() {
  return (
    <section className="section bg-deep-espresso text-pearl">
      <div className="container-shell flex flex-col gap-8 border-y border-pearl/10 py-12 md:flex-row md:items-end md:justify-between">
        <div className="editorial-rule">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-champagne-gold">{clinic.hours}</p>
          <h2 className="balanced mt-4 max-w-3xl font-serif text-5xl font-semibold leading-none md:text-7xl">
            Begin with a private consultation.
          </h2>
          <p className="pretty mt-5 max-w-2xl text-lg leading-8 text-pearl/72">
            Tell us what you are considering. The clinic team will guide you toward the right
            dental, skin, hair, laser, or aesthetic treatment after assessment.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <PremiumButton href="/book" variant="gold">
            Book Consultation
            <ArrowRight className="size-4" aria-hidden />
          </PremiumButton>
          <PremiumButton href={contactLinks.whatsapp} variant="ivory">
            <MessageCircle className="size-4" aria-hidden />
            WhatsApp {clinic.phone}
          </PremiumButton>
        </div>
      </div>
    </section>
  );
}
