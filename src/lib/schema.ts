import { clinic, siteUrl } from "@/lib/constants";
import type { BlogPost } from "@/data/blog";
import type { Treatment } from "@/data/treatments";

export function clinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic"],
    name: clinic.fullName,
    alternateName: clinic.alternateName,
    url: siteUrl,
    telephone: `+92${clinic.phone.replace(/\D/g, "").slice(1)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "HNo. 760, Street 38, Block B, B-17",
      addressLocality: clinic.city,
      addressCountry: "PK"
    },
    founder: {
      "@type": "Person",
      name: clinic.doctorName,
      jobTitle: clinic.doctorTitle
    },
    medicalSpecialty: ["Dentistry", "CosmeticMedicine", "Dermatology"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "16:00",
        closes: "22:00"
      }
    ]
  };
}

export function treatmentServiceJsonLd(treatment: Treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.title,
    description: treatment.shortDescription,
    procedureType: treatment.category,
    provider: {
      "@type": "MedicalClinic",
      name: clinic.fullName,
      url: siteUrl,
      telephone: `+92${clinic.phone.replace(/\D/g, "").slice(1)}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "HNo. 760, Street 38, Block B, B-17",
        addressLocality: clinic.city,
        addressCountry: "PK"
      }
    },
    medicalSpecialty: treatment.category === "Dental" ? "Dentistry" : "CosmeticMedicine",
    url: `${siteUrl}/treatments/${treatment.slug}`
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function blogArticleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.intro,
    author: {
      "@type": "Organization",
      name: post.author
    },
    publisher: {
      "@type": "MedicalClinic",
      name: clinic.fullName
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`
  };
}
