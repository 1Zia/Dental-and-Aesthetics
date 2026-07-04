import { faqs } from "@/data/faqs";
import { SectionLabel } from "@/components/ui/section-label";

export function FaqSection() {
  return (
    <section className="section">
      <div className="container-shell max-w-4xl">
        <SectionLabel>FAQ preview</SectionLabel>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer list-none font-serif text-3xl font-semibold text-deep-espresso">
                {faq.question}
              </summary>
              <p className="pretty mt-4 leading-7 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
