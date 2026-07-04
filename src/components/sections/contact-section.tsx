import { MapPin, Phone } from "lucide-react";
import { PremiumCard } from "@/components/ui/premium-card";
import { clinic, contactLinks } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="section">
      <div className="container-shell grid gap-5 md:grid-cols-2">
        <PremiumCard>
          <MapPin className="size-5 text-muted-gold" aria-hidden />
          <h2 className="mt-5 font-serif text-4xl font-semibold text-deep-espresso">Visit</h2>
          <p className="mt-3 leading-7 text-muted-foreground">{clinic.address}</p>
        </PremiumCard>
        <PremiumCard>
          <Phone className="size-5 text-muted-gold" aria-hidden />
          <h2 className="mt-5 font-serif text-4xl font-semibold text-deep-espresso">Call or WhatsApp</h2>
          <a href={contactLinks.phone} className="mt-3 block leading-7 text-muted-foreground">
            {clinic.phone}
          </a>
        </PremiumCard>
      </div>
    </section>
  );
}
