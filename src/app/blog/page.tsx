import Link from "next/link";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionLabel } from "@/components/ui/section-label";
import { blogPosts, medicalDisclaimer } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "Educational dental and aesthetic content from Dental & Aesthetic Hub."
};

export default function BlogPage() {
  return (
    <main>
      <section className="page-shell bg-[linear-gradient(112deg,var(--porcelain-white)_0%,var(--porcelain-white)_50%,var(--warm-ivory)_50%,var(--warm-ivory)_100%)]">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="editorial-rule">
            <SectionLabel>Journal</SectionLabel>
            <h1 className="balanced mt-5 font-serif text-4xl font-semibold leading-tight text-deep-espresso sm:text-5xl md:text-8xl md:leading-none">
              Educational guidance for dental and aesthetic decisions.
            </h1>
          </div>
          <PremiumCard>
            <p className="pretty text-xl leading-9 text-deep-espresso">
              Articles are written for general education and trust-building. They are consultation-led and avoid unsafe instructions or treatment guarantees.
            </p>
          </PremiumCard>
        </div>
      </section>

      <section className="section">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={[
                "liquid-glass premium-lift group relative flex min-h-80 flex-col justify-between overflow-hidden p-6 transition-colors hover:bg-warm-ivory",
                index === 0 ? "lg:col-span-2" : ""
              ].join(" ")}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-champagne-gold/75" aria-hidden />
              <div>
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-gold">
                  <span>{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="balanced mt-6 font-serif text-2xl font-semibold leading-tight text-deep-espresso sm:text-3xl md:text-5xl md:leading-none">
                  {post.title}
                </h2>
                <p className="pretty mt-5 leading-7 text-muted-foreground">{post.intro}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <p className="text-sm font-semibold text-deep-espresso">Dental & Aesthetic Hub</p>
                <span className="text-sm font-semibold text-deep-espresso underline decoration-muted-gold underline-offset-4">
                  Read article
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section bg-pearl">
        <div className="container-shell">
          <PremiumCard className="bg-warm-ivory shadow-none">
            <SectionLabel>Medical disclaimer</SectionLabel>
            <p className="pretty mt-4 text-xl leading-9 text-deep-espresso">{medicalDisclaimer}</p>
          </PremiumCard>
        </div>
      </section>
    </main>
  );
}
