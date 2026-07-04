import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionLabel } from "@/components/ui/section-label";
import { clinic, contactLinks } from "@/lib/constants";

export const metadata = {
  title: "Contact",
  description: `Contact ${clinic.fullName} in B-17 Islamabad.`
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-shell bg-[linear-gradient(112deg,var(--porcelain-white)_0%,var(--porcelain-white)_50%,var(--warm-ivory)_50%,var(--warm-ivory)_100%)]">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="editorial-rule">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="balanced mt-5 font-serif text-6xl font-semibold leading-none text-deep-espresso md:text-8xl">
              Visit or message the clinic.
            </h1>
          </div>
          <PremiumCard>
            <p className="font-serif text-4xl font-semibold leading-none text-deep-espresso">{clinic.fullName}</p>
            <p className="pretty mt-5 leading-8 text-muted-foreground">
              For appointment requests, treatment questions, or location guidance, contact the clinic directly.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="/book">Book Consultation</PremiumButton>
              <PremiumButton href={contactLinks.whatsapp} variant="ivory">
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp
              </PremiumButton>
            </div>
          </PremiumCard>
        </div>
      </section>

      <section className="section">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <ContactCard icon={<MapPin className="size-5" />} title="Address" body={clinic.address} />
          <ContactCard icon={<Phone className="size-5" />} title="Call clinic" body={clinic.phone} href={contactLinks.phone} />
          <ContactCard icon={<MessageCircle className="size-5" />} title="WhatsApp" body="Message for availability and appointment requests." href={contactLinks.whatsapp} />
          <ContactCard icon={<Clock className="size-5" />} title="Opening hours" body={clinic.hours} />
        </div>
        <div className="container-shell mt-6 border border-border bg-warm-ivory p-5">
          <p className="pretty text-sm font-medium leading-6 text-deep-espresso">
            Our team will contact you to confirm availability. For urgent dental concerns, please call the clinic directly.
          </p>
        </div>
      </section>

      <section className="section bg-warm-ivory">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="editorial-rule">
            <SectionLabel>Location</SectionLabel>
            <h2 className="balanced mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
              B-17, Islamabad.
            </h2>
            <p className="pretty mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Google Maps embed placeholder. The exact map embed can be added once the final clinic map link is provided.
            </p>
          </div>
          <div className="liquid-glass premium-lift flex min-h-96 items-end p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-gold">Google Maps placeholder</p>
              <p className="mt-3 font-serif text-5xl font-semibold leading-none text-deep-espresso/45">
                {clinic.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-shell grid gap-5 lg:grid-cols-[1fr_1fr]">
          <PremiumCard>
            <SectionLabel>Social handles</SectionLabel>
            <div className="mt-6 grid gap-3 text-lg leading-8 text-deep-espresso">
              <a href={contactLinks.instagram}>Instagram: {clinic.instagramHandle}</a>
              <a href={contactLinks.facebook}>Facebook: {clinic.facebookPage}</a>
              <a href={contactLinks.linkedin}>LinkedIn: {clinic.linkedinName}</a>
            </div>
          </PremiumCard>
          <PremiumCard className="bg-warm-ivory shadow-none">
            <SectionLabel>Urgent concerns</SectionLabel>
            <p className="pretty mt-4 text-xl leading-9 text-deep-espresso">
              For urgent dental concerns, please call the clinic directly.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href={contactLinks.phone}>
                <Phone className="size-4" aria-hidden />
                Call clinic
              </PremiumButton>
              <PremiumButton href={contactLinks.whatsapp} variant="ivory">
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp
              </PremiumButton>
            </div>
          </PremiumCard>
        </div>
      </section>

      <section className="section bg-deep-espresso text-pearl">
        <div className="container-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-champagne-gold">Appointments</p>
            <h2 className="balanced mt-4 max-w-3xl font-serif text-5xl font-semibold leading-none md:text-7xl">
              Ready to request a consultation?
            </h2>
          </div>
          <PremiumButton href="/book" variant="gold">
            Book appointment
          </PremiumButton>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  body,
  href
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid size-11 place-items-center rounded-full bg-warm-ivory text-muted-gold">{icon}</span>
      <span>
        <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-muted-gold">{title}</span>
        <span className="pretty mt-3 block text-lg leading-8 text-deep-espresso">{body}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="liquid-glass premium-lift grid gap-5 p-7">
        {content}
      </a>
    );
  }

  return <PremiumCard>{content}</PremiumCard>;
}
