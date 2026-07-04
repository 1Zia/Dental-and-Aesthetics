import { HeartPulse, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { clinic } from "@/lib/constants";

const items = [
  { icon: ShieldCheck, label: "Dentist-led aesthetic care" },
  { icon: Sparkles, label: "Dental, skin, hair & laser services" },
  { icon: HeartPulse, label: clinic.hours },
  { icon: MapPin, label: "B-17, Islamabad" }
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-warm-ivory/70">
      <div className="container-shell grid gap-4 py-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 text-sm font-medium text-deep-espresso">
            <item.icon className="size-4 text-muted-gold" aria-hidden />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
