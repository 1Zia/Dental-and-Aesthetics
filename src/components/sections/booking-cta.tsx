import { ArrowRight, MessageCircle } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { clinic, contactLinks } from "@/lib/constants";

export function BookingCta() {
  return (
    <section className="bg-deep-espresso text-pearl py-16 md:py-28 lg:py-36">
      <div className="container-shell flex flex-col gap-8 border-y border-pearl/10 py-8 md:py-12 md:flex-row md:items-end md:justify-between">
        <div className="editorial-rule">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-champagne-gold">{clinic.hours}</p>
          <h2 className="balanced mt-4 max-w-3xl font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-none">
            Begin with a private consultation.
          </h2>
          <p className="pretty mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg leading-relaxed sm:leading-8 text-pearl/72">
            Tell us what you are considering. The clinic team will guide you toward the right
            dental, skin, hair, laser, or aesthetic treatment after assessment.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col shrink-0 w-full md:w-auto">
          <PremiumButton href="/book" variant="gold" className="w-full md:w-auto">
            Book Consultation
            <ArrowRight className="size-4" aria-hidden />
          </PremiumButton>
          <PremiumButton href={contactLinks.whatsapp} variant="ivory" className="w-full md:w-auto">
            <MessageCircle className="size-4 text-[#25D366]" aria-hidden />
            WhatsApp {clinic.phone}
          </PremiumButton>
        </div>
      </div>
    </section>
  );
}
