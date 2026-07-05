import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingCta } from "@/components/sections/booking-cta";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionLabel } from "@/components/ui/section-label";
import { blogPosts, getBlogPostBySlug, medicalDisclaimer } from "@/data/blog";
import { blogArticleJsonLd, faqJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  return {
    title: post?.title ?? "Blog",
    description: post?.intro ?? "Dental and aesthetic medicine education by Dental & Aesthetic Hub."
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogArticleJsonLd(post)) }}
      />
      {post.faqs?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(post.faqs)) }}
        />
      ) : null}
      <article>
        <section className="page-shell bg-[linear-gradient(112deg,var(--porcelain-white)_0%,var(--porcelain-white)_50%,var(--warm-ivory)_50%,var(--warm-ivory)_100%)]">
          <div className="container-shell editorial-rule max-w-4xl">
            <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-deep-espresso">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-deep-espresso">
                Blog
              </Link>
              <span>/</span>
              <span className="text-deep-espresso">{post.category}</span>
            </nav>
            <SectionLabel className="mt-12">{post.category}</SectionLabel>
            <h1 className="balanced mt-5 font-serif text-4xl sm:text-5xl md:text-8xl font-semibold leading-tight md:leading-none text-deep-espresso">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-muted-foreground">
              <span>{post.readingTime}</span>
              <span>Author: {post.author}</span>
            </div>
            <p className="pretty mt-8 text-xl leading-9 text-deep-espresso">{post.intro}</p>
          </div>
        </section>

        <section className="section">
          <div className="container-shell max-w-3xl">
            <div className="grid gap-12">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight md:leading-none text-deep-espresso">
                    {section.heading}
                  </h2>
                  <p className="pretty mt-5 text-lg leading-8 text-muted-foreground">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        {post.faqs?.length ? (
          <section className="section bg-pearl">
            <div className="container-shell max-w-4xl">
              <SectionLabel>Patient questions</SectionLabel>
              <div className="mt-8 divide-y divide-border border-y border-border">
                {post.faqs.map((faq) => (
                  <details key={faq.question} className="py-5">
                    <summary className="cursor-pointer list-none font-serif text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-deep-espresso">
                      {faq.question}
                    </summary>
                    <p className="pretty mt-4 leading-7 text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="container-shell max-w-4xl">
            <PremiumCard className="bg-warm-ivory shadow-none">
              <SectionLabel>Disclaimer</SectionLabel>
              <p className="pretty mt-4 text-xl leading-9 text-deep-espresso">{medicalDisclaimer}</p>
              <PremiumButton href="/book" className="mt-8">
                Book a consultation
              </PremiumButton>
            </PremiumCard>
          </div>
        </section>
      </article>

      <BookingCta />
    </main>
  );
}
