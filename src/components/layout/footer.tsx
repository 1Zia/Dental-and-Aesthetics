import Link from "next/link";
import { PremiumButton } from "@/components/ui/premium-button";
import { navigation } from "@/data/navigation";
import { treatments } from "@/data/treatments";
import { clinic, contactLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-deep-espresso py-16 text-pearl">
      <div className="container-shell border-y border-pearl/10 py-10">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.65fr_0.75fr_0.95fr]">
        <div className="editorial-rule">
          <p className="max-w-lg font-serif text-5xl font-semibold leading-[0.95] md:text-6xl">{clinic.fullName}</p>
          <p className="pretty mt-4 max-w-md leading-7 text-pearl/70">
            This website provides general information only and does not replace professional medical or dental consultation.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PremiumButton href="/book" variant="gold">
              Book Consultation
            </PremiumButton>
            <PremiumButton href={contactLinks.whatsapp} variant="ghost" className="border-pearl/30 text-pearl">
              WhatsApp
            </PremiumButton>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne-gold">Quick links</p>
          <div className="mt-4 grid gap-2.5 text-sm text-pearl/72">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-champagne-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne-gold">Treatments</p>
          <div className="mt-4 grid gap-2.5 text-sm text-pearl/72">
            {treatments.slice(0, 6).map((item) => (
              <Link key={item.slug} href={`/treatments/${item.slug}`} className="transition-colors hover:text-champagne-gold">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne-gold">Clinic</p>
          <div className="mt-4 grid gap-2.5 text-sm text-pearl/72">
            <a href={contactLinks.phone} className="transition-colors hover:text-champagne-gold">{clinic.phone}</a>
            <a href={contactLinks.whatsapp} className="transition-colors hover:text-champagne-gold">WhatsApp</a>
            <span>{clinic.address}</span>
            <span>{clinic.hours}</span>
            <span>Instagram: {clinic.instagramHandle}</span>
            <span>Facebook: {clinic.facebookPage}</span>
            <span>LinkedIn: {clinic.linkedinName}</span>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
