import Image from "next/image";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionLabel } from "@/components/ui/section-label";
import { doctor } from "@/data/doctor";

export function DoctorProfileSection() {
  return (
    <section className="section bg-pearl">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative aspect-[4/5] bg-warm-ivory shadow-none overflow-hidden rounded-2xl">
          <Image
            src="/dr-romana.jpg"
            alt="Dr. Romana Afridi"
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/60 via-transparent to-transparent z-[1]" />
          <div className="absolute inset-x-8 bottom-8 border border-border bg-pearl p-6 shadow-none z-10 rounded-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-gold">Role</p>
            <p className="mt-2 font-serif text-3xl font-semibold leading-none text-deep-espresso">{doctor.title}</p>
          </div>
        </div>
        <div className="editorial-rule">
          <SectionLabel>Doctor-led practice</SectionLabel>
          <h2 className="balanced mt-4 font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
            Led by Dr. Romana Afridi
          </h2>
          <p className="mt-3 text-sm font-semibold text-muted-gold">{doctor.title}</p>
          <p className="pretty mt-6 text-xl leading-9 text-deep-espresso">{doctor.bio}</p>
          <PremiumCard className="mt-8 bg-porcelain-white shadow-none">
            <div className="grid gap-3 sm:grid-cols-2">
              {doctor.principles.map((principle) => (
                <div key={principle} className="border-t border-border pt-4 text-sm font-semibold text-muted-foreground">
                  {principle}
                </div>
              ))}
            </div>
          </PremiumCard>
          <PremiumButton href="/book" className="mt-8">
            Book with Dr. Romana
          </PremiumButton>
        </div>
      </div>
    </section>
  );
}
