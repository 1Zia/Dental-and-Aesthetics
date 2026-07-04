import { SectionLabel } from "@/components/ui/section-label";

const panels = [
  {
    title: "Dental Care",
    copy: "From routine dental visits to cosmetic smile planning, the clinic focuses on oral health, comfort, and long-term confidence.",
    services: ["Scaling", "Whitening", "Fillings", "Root canal", "Smile design", "Implants"],
    className: "bg-pearl"
  },
  {
    title: "Aesthetic Care",
    copy: "Skin, hair, laser, PRP, Botox, and filler treatments are approached with subtlety, balance, and suitability-led planning.",
    services: ["Skin treatments", "PRP", "Botox", "Fillers", "Laser", "Hair treatments"],
    className: "bg-warm-ivory"
  }
];

export function DentalAestheticsSplit() {
  return (
    <section className="section bg-warm-ivory/70">
      <div className="container-shell">
        <div className="editorial-rule">
          <SectionLabel>Dental + aesthetics</SectionLabel>
          <h2 className="balanced mt-4 max-w-4xl font-serif text-5xl font-semibold leading-none text-deep-espresso md:text-7xl">
            Two kinds of care, one calm clinical standard.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {panels.map((panel, index) => (
            <article key={panel.title} className={`${panel.className} liquid-glass premium-lift p-8 md:p-11 ${index === 1 ? "lg:translate-y-10" : ""}`}>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-muted-gold">
                {index === 0 ? "Oral health + smile" : "Skin + facial balance"}
              </p>
              <h2 className="font-serif text-6xl font-semibold leading-none text-deep-espresso">{panel.title}</h2>
              <p className="pretty mt-6 text-lg leading-8 text-muted-foreground">{panel.copy}</p>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-6">
                {panel.services.map((service) => (
                  <p key={service} className="text-sm font-semibold text-deep-espresso">
                    {service}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
