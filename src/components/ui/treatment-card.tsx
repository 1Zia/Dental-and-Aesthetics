import Link from "next/link";
import type { Treatment } from "@/data/treatments";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <Link
      href={`/treatments/${treatment.slug}`}
      className="liquid-glass premium-lift group relative flex min-h-72 flex-col justify-between overflow-hidden p-6 transition-colors hover:bg-warm-ivory"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-champagne-gold/75" aria-hidden />
      <div>
        <p className="mb-4 inline-flex border border-border bg-pearl px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-gold">
          {treatment.category}
        </p>
        <h3 className="font-serif text-3xl font-semibold leading-none text-deep-espresso">
          {treatment.title}
        </h3>
        <p className="pretty mt-4 leading-7 text-muted-foreground">{treatment.shortDescription}</p>
      </div>
      <span className="text-action mt-8">
        View treatment
      </span>
    </Link>
  );
}
