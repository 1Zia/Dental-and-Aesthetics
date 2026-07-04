export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  intro: string;
  category: "Dental" | "Aesthetics" | "Skin & Hair" | "Laser" | "Clinic Guide";
  readingTime: string;
  author: "Dental & Aesthetic Hub";
  sections: BlogSection[];
  faqs?: BlogFaq[];
};

export const medicalDisclaimer =
  "This article is for general education only and does not replace professional consultation.";

export const blogPosts: BlogPost[] = [
  {
    slug: "when-should-you-visit-a-dentist-for-scaling",
    title: "When should you visit a dentist for scaling?",
    category: "Dental",
    readingTime: "4 min read",
    author: "Dental & Aesthetic Hub",
    intro:
      "Scaling is a professional dental cleaning procedure that may support gum health when plaque or tartar buildup is present. The right timing depends on oral hygiene, gum condition, and professional assessment.",
    sections: [
      {
        heading: "What scaling is meant to address",
        body:
          "Scaling removes deposits that can collect around teeth and gums. These deposits are not always removable with routine brushing, so a dentist may recommend scaling after examining gum health and buildup."
      },
      {
        heading: "Signs you should book a dental review",
        body:
          "Bleeding gums, persistent bad breath, visible tartar, sensitivity, or a long gap since your last dental visit can be reasons to schedule a consultation. These signs do not confirm one diagnosis, but they do deserve a professional look."
      },
      {
        heading: "How often scaling may be needed",
        body:
          "Some patients may need cleaning more often than others depending on gum condition, oral hygiene, and risk factors. Your dentist can suggest an interval after assessment."
      }
    ],
    faqs: [
      {
        question: "Can scaling damage teeth?",
        answer:
          "When performed appropriately by a dental professional, scaling is intended to clean deposits from tooth surfaces. Suitability and technique should be assessed by the dentist."
      },
      {
        question: "Do I need polishing too?",
        answer:
          "Polishing may be recommended after scaling depending on staining, surface texture, and your dentist's assessment."
      }
    ]
  },
  {
    slug: "teeth-whitening-what-to-know-before-treatment",
    title: "Teeth whitening: what to know before treatment",
    category: "Dental",
    readingTime: "5 min read",
    author: "Dental & Aesthetic Hub",
    intro:
      "Teeth whitening may help improve brightness for suitable patients, but it should be planned after checking oral health, sensitivity, and existing dental work.",
    sections: [
      {
        heading: "Whitening is suitability-led",
        body:
          "Not every type of discoloration responds the same way. Existing fillings, veneers, crowns, sensitivity, and enamel condition can influence whether whitening is appropriate."
      },
      {
        heading: "Expectations should be realistic",
        body:
          "Whitening response varies by individual. A consultation helps explain likely limitations, sensitivity risk, and how maintenance may work."
      },
      {
        heading: "Avoid unsupervised overuse",
        body:
          "Using whitening products too frequently or without guidance can increase sensitivity or irritation. Professional advice helps keep the plan more controlled."
      }
    ],
    faqs: [
      {
        question: "Will whitening work on crowns or veneers?",
        answer:
          "Dental restorations usually do not whiten like natural teeth. A dentist can explain what that means for your smile plan."
      }
    ]
  },
  {
    slug: "botox-and-fillers-consultation-first-aesthetic-care",
    title: "Botox and fillers: consultation-first aesthetic care",
    category: "Aesthetics",
    readingTime: "5 min read",
    author: "Dental & Aesthetic Hub",
    intro:
      "Botox and fillers should begin with facial assessment, medical history, and a clear discussion about suitability, limitations, and natural-looking goals.",
    sections: [
      {
        heading: "Botox and fillers are different",
        body:
          "Botox is typically discussed for selected expression lines, while fillers are usually discussed for volume or contour concerns. Which option is suitable depends on anatomy and goals."
      },
      {
        heading: "Subtle planning matters",
        body:
          "A consultation-first approach helps avoid over-treatment and supports a plan that considers facial balance, expression, and realistic outcome."
      },
      {
        heading: "Safety starts before treatment",
        body:
          "Medical history, contraindications, product choice, treatment area, and aftercare should be reviewed before any injectable treatment."
      }
    ],
    faqs: [
      {
        question: "Are injectables suitable for everyone?",
        answer:
          "No. Suitability depends on assessment, medical history, treatment goals, and the specific area being considered."
      }
    ]
  },
  {
    slug: "prp-for-skin-and-hair-what-patients-usually-ask",
    title: "PRP for skin and hair: what patients usually ask",
    category: "Skin & Hair",
    readingTime: "5 min read",
    author: "Dental & Aesthetic Hub",
    intro:
      "PRP is often discussed for selected skin and hair concerns, but suitability and expectations should be reviewed carefully before planning treatment.",
    sections: [
      {
        heading: "What patients usually want to know",
        body:
          "Patients often ask about suitability, number of sessions, comfort, aftercare, and when they may notice changes. These answers vary based on the concern and assessment."
      },
      {
        heading: "PRP is not a one-size-fits-all option",
        body:
          "Hair fall, skin texture, and skin quality concerns can have different causes. A consultation helps decide whether PRP may be appropriate or whether another plan is better."
      },
      {
        heading: "Follow-up matters",
        body:
          "PRP planning may include review visits, maintenance discussions, or supportive care depending on the individual case."
      }
    ],
    faqs: [
      {
        question: "Does PRP guarantee hair growth?",
        answer:
          "No. Results vary by individual, and suitability depends on the cause and pattern of hair concern."
      }
    ]
  },
  {
    slug: "laser-hair-reduction-what-to-expect",
    title: "Laser hair reduction: what to expect",
    category: "Laser",
    readingTime: "4 min read",
    author: "Dental & Aesthetic Hub",
    intro:
      "Laser hair reduction may support gradual hair reduction for suitable patients, but planning depends on skin type, hair type, treatment area, and aftercare.",
    sections: [
      {
        heading: "Assessment comes first",
        body:
          "Skin type, hair color, treatment area, medical history, and recent sun exposure can all affect suitability and planning."
      },
      {
        heading: "Multiple sessions may be discussed",
        body:
          "Laser hair reduction is usually planned as a course rather than a single visit, but the exact plan varies by individual and area."
      },
      {
        heading: "Aftercare affects the plan",
        body:
          "Sun protection, avoiding certain hair removal methods, and following clinic guidance can be important parts of the treatment plan."
      }
    ],
    faqs: [
      {
        question: "Is laser hair reduction permanent?",
        answer:
          "Hair reduction responses vary, and maintenance may be needed. The clinic can explain realistic expectations after assessment."
      }
    ]
  },
  {
    slug: "how-to-choose-the-right-dental-and-aesthetic-clinic-in-islamabad",
    title: "How to choose the right dental and aesthetic clinic in Islamabad",
    category: "Clinic Guide",
    readingTime: "6 min read",
    author: "Dental & Aesthetic Hub",
    intro:
      "Choosing a clinic is about trust, communication, suitability-led planning, and feeling comfortable asking questions before treatment.",
    sections: [
      {
        heading: "Look for clear consultation",
        body:
          "A good consultation should explain options, limitations, aftercare, and why a treatment may or may not be suitable."
      },
      {
        heading: "Avoid pressure-based decisions",
        body:
          "Dental and aesthetic care should not feel rushed. Patients should have space to understand the plan and ask practical questions."
      },
      {
        heading: "Check the range of care",
        body:
          "If you are considering dental, skin, hair, laser, or injectable treatments, it can help to choose a clinic that communicates clearly across these services."
      }
    ],
    faqs: [
      {
        question: "What should I ask during consultation?",
        answer:
          "Ask about suitability, alternatives, expected outcomes, aftercare, pricing factors, and when follow-up may be needed."
      }
    ]
  }
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
