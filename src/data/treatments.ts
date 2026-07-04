export type TreatmentCategory = "Dental" | "Skin" | "Hair" | "Laser" | "Injectables";

export type TreatmentFaq = {
  question: string;
  answer: string;
};

export type Treatment = {
  slug: string;
  category: TreatmentCategory;
  title: string;
  shortDescription: string;
  longDescription: string;
  idealFor: string[];
  benefits: string[];
  process: string[];
  aftercare: string[];
  faqs: TreatmentFaq[];
  disclaimer: string;
};

const consultationDisclaimer =
  "Treatment suitability, timing, expected outcomes, and aftercare are confirmed after professional assessment. Results vary by individual.";

const standardFaqs = (title: string): TreatmentFaq[] => [
  {
    question: `Do I need a consultation before ${title.toLowerCase()}?`,
    answer:
      "Yes. A consultation helps the doctor assess suitability, discuss expectations, and explain the safest available options for your concern."
  },
  {
    question: "Are results guaranteed?",
    answer:
      "No. Results vary by individual and depend on clinical suitability, baseline condition, treatment plan, and aftercare."
  },
  {
    question: "How is aftercare handled?",
    answer:
      "Aftercare is explained according to the treatment performed, your clinical assessment, and the doctor's instructions."
  }
];

export const treatments: Treatment[] = [
  {
    slug: "dental-consultation",
    category: "Dental",
    title: "Dental Consultation",
    shortDescription: "A measured first visit for dental concerns, oral health review, and treatment planning.",
    longDescription:
      "A dental consultation helps identify oral health concerns, review symptoms, and outline appropriate treatment options after clinical examination. It can support clearer decision-making before restorative, cosmetic, or preventive dental care.",
    idealFor: ["New dental concerns", "Routine oral health review", "Second opinion discussions", "Smile or bite concerns"],
    benefits: ["Can clarify treatment options", "May identify concerns early", "Supports informed planning", "Creates a baseline for future care"],
    process: ["Discuss symptoms and goals", "Clinical oral examination", "Review possible treatment pathways", "Plan next steps depending on suitability"],
    aftercare: ["Follow prescribed oral hygiene advice", "Schedule recommended follow-up", "Monitor symptoms and contact the clinic if they change"],
    faqs: standardFaqs("Dental Consultation"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "scaling-polishing",
    category: "Dental",
    title: "Scaling & Polishing",
    shortDescription: "Professional cleaning that may support gum health and a smoother tooth surface.",
    longDescription:
      "Scaling and polishing removes plaque, tartar, and surface deposits that regular brushing may not fully clear. It may support gum comfort, fresher breath, and preventive oral care when performed after assessment.",
    idealFor: ["Plaque or tartar buildup", "Bleeding gums assessment", "Routine preventive care", "Surface staining concerns"],
    benefits: ["May support gum health", "Can help reduce surface deposits", "Supports fresher breath", "Creates a cleaner foundation for oral care"],
    process: ["Gum and tooth assessment", "Scaling of deposits", "Polishing where suitable", "Oral hygiene guidance"],
    aftercare: ["Use advised brushing and flossing routine", "Avoid heavy staining foods briefly if advised", "Attend follow-up if gum concerns remain"],
    faqs: standardFaqs("Scaling & Polishing"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "teeth-whitening",
    category: "Dental",
    title: "Teeth Whitening",
    shortDescription: "Consultation-led whitening options for suitable patients seeking a brighter smile.",
    longDescription:
      "Teeth whitening may help improve tooth brightness when stains and tooth condition are suitable. The clinic assesses sensitivity, existing restorations, oral health, and expectations before recommending an option.",
    idealFor: ["Suitable external staining", "Dull smile appearance", "Patients seeking conservative cosmetic enhancement", "Pre-event smile planning after assessment"],
    benefits: ["May improve perceived brightness", "Can support smile confidence", "Conservative aesthetic option", "Planned around sensitivity and suitability"],
    process: ["Assess oral health and shade concerns", "Discuss whitening options", "Proceed only if suitable", "Review sensitivity and maintenance advice"],
    aftercare: ["Follow diet and sensitivity advice", "Maintain oral hygiene", "Avoid unsupervised whitening products unless approved"],
    faqs: standardFaqs("Teeth Whitening"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "dental-fillings",
    category: "Dental",
    title: "Dental Fillings",
    shortDescription: "Restorative care for cavities or damaged tooth structure after diagnosis.",
    longDescription:
      "Dental fillings can restore areas affected by decay, wear, or minor damage depending on diagnosis. Material choice and treatment timing are discussed after clinical assessment.",
    idealFor: ["Cavities diagnosed by a dentist", "Minor tooth damage", "Replacement filling assessment", "Sensitivity linked to tooth structure concerns"],
    benefits: ["Can restore tooth form", "May support chewing comfort", "Helps manage diagnosed decay", "Can reduce progression when treated appropriately"],
    process: ["Examination and diagnosis", "Discuss material and plan", "Prepare and restore tooth where suitable", "Check bite and comfort"],
    aftercare: ["Avoid chewing until numbness wears off if applicable", "Maintain oral hygiene", "Report persistent discomfort or bite changes"],
    faqs: standardFaqs("Dental Fillings"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "root-canal-treatment",
    category: "Dental",
    title: "Root Canal Treatment",
    shortDescription: "Tooth-saving treatment planning for infected or inflamed tooth pulp where suitable.",
    longDescription:
      "Root canal treatment may help manage infection or inflammation inside a tooth when clinically indicated. The dentist assesses symptoms, tooth structure, and restorative needs before recommending treatment.",
    idealFor: ["Tooth pain assessment", "Pulp infection or inflammation", "Deep decay concerns", "Tooth-saving discussions"],
    benefits: ["May help preserve a tooth", "Can address internal infection when indicated", "Supports restorative planning", "May reduce dental discomfort after treatment"],
    process: ["Diagnosis and imaging if needed", "Discuss prognosis and alternatives", "Clean and treat canal system", "Plan restoration after treatment"],
    aftercare: ["Follow medication guidance if prescribed", "Avoid heavy chewing until restored", "Return for crown or filling if advised"],
    faqs: standardFaqs("Root Canal Treatment"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "smile-design",
    category: "Dental",
    title: "Smile Design",
    shortDescription: "Aesthetic smile planning based on tooth display, proportion, facial balance, and suitability.",
    longDescription:
      "Smile design is a consultation-led planning process for patients considering cosmetic dental improvements. It can include whitening, reshaping discussions, veneers, alignment referral, or restorative planning depending on assessment.",
    idealFor: ["Smile proportion concerns", "Tooth color or shape concerns", "Pre-veneer planning", "Patients seeking a conservative aesthetic plan"],
    benefits: ["Can clarify aesthetic options", "Supports facially balanced planning", "May combine dental treatments thoughtfully", "Helps set realistic expectations"],
    process: ["Discuss smile goals", "Assess teeth, gums, and facial proportions", "Map suitable treatment options", "Create phased recommendations"],
    aftercare: ["Follow treatment-specific advice", "Maintain hygiene and review visits", "Protect restorations if advised"],
    faqs: standardFaqs("Smile Design"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "veneers",
    category: "Dental",
    title: "Veneers",
    shortDescription: "Cosmetic veneer consultation for suitable cases involving tooth shape, shade, or proportion.",
    longDescription:
      "Veneers may help improve selected cosmetic concerns when teeth and gums are suitable. The dentist reviews tooth structure, bite, oral health, expectations, and maintenance before recommending any veneer plan.",
    idealFor: ["Selected tooth shape concerns", "Smile proportion planning", "Suitable cosmetic shade concerns", "Patients ready for maintenance commitments"],
    benefits: ["May support smile symmetry", "Can address selected cosmetic concerns", "Planned around tooth preservation", "Supports personalized smile aesthetics"],
    process: ["Assess oral health and bite", "Discuss veneer options and alternatives", "Plan design and preparation where appropriate", "Review maintenance and aftercare"],
    aftercare: ["Avoid using teeth as tools", "Maintain regular dental reviews", "Use protection if grinding is identified"],
    faqs: standardFaqs("Veneers"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "dental-implants",
    category: "Dental",
    title: "Dental Implants",
    shortDescription: "Implant consultation and planning for tooth replacement options after assessment.",
    longDescription:
      "Dental implant consultation helps determine whether implant-based tooth replacement may be suitable. Bone condition, oral health, medical history, expectations, and referral needs are reviewed before planning.",
    idealFor: ["Missing tooth discussions", "Denture alternative consultation", "Tooth replacement planning", "Patients seeking suitability assessment"],
    benefits: ["Can support tooth replacement planning", "May improve chewing confidence in suitable cases", "Supports long-range dental planning", "Clarifies options and referrals"],
    process: ["Review medical and dental history", "Assess oral condition", "Discuss imaging or referral needs", "Explain staged treatment options"],
    aftercare: ["Follow surgical or referral instructions if applicable", "Maintain excellent hygiene", "Attend maintenance reviews"],
    faqs: standardFaqs("Dental Implants"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "orthodontic-aligners-consultation",
    category: "Dental",
    title: "Orthodontic / Aligners Consultation",
    shortDescription: "Guidance for alignment concerns, bite questions, and clear aligner suitability.",
    longDescription:
      "An orthodontic or aligner consultation reviews tooth alignment, bite concerns, oral health, and treatment expectations. It can support referral decisions or suitability discussions for aligner pathways.",
    idealFor: ["Crowding concerns", "Spacing concerns", "Bite questions", "Clear aligner suitability discussions"],
    benefits: ["Can clarify alignment options", "Supports realistic timing discussions", "May identify dental preparation needs", "Helps plan next steps"],
    process: ["Discuss alignment goals", "Assess teeth and bite", "Review possible pathways", "Discuss referral or records if needed"],
    aftercare: ["Follow hygiene guidance", "Complete recommended records if advised", "Use retainers only as clinically directed after treatment"],
    faqs: standardFaqs("Orthodontic / Aligners Consultation"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "skin-consultation",
    category: "Skin",
    title: "Skin Consultation",
    shortDescription: "A doctor-led review of skin concerns, routine, suitability, and treatment options.",
    longDescription:
      "A skin consultation reviews concerns such as texture, acne, pigmentation, dullness, or sensitivity. The doctor considers skin type, history, lifestyle, and goals before recommending care.",
    idealFor: ["New skin concerns", "Routine planning", "Sensitive skin questions", "Treatment suitability assessment"],
    benefits: ["Can clarify skin priorities", "Supports safer treatment selection", "May improve routine consistency", "Helps set realistic expectations"],
    process: ["Discuss skin history and goals", "Assess skin condition", "Review possible treatments or routine changes", "Plan follow-up if needed"],
    aftercare: ["Use recommended products as advised", "Apply sun protection if recommended", "Avoid adding multiple active products without guidance"],
    faqs: standardFaqs("Skin Consultation"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "acne-treatment-consultation",
    category: "Skin",
    title: "Acne Treatment Consultation",
    shortDescription: "Assessment-led acne guidance for breakouts, marks, routines, and treatment options.",
    longDescription:
      "Acne consultation can support patients dealing with breakouts, congestion, marks, or recurring flare-ups. Treatment direction depends on skin assessment, history, triggers, and suitability.",
    idealFor: ["Active breakouts", "Post-acne marks", "Congestion concerns", "Routine confusion"],
    benefits: ["May support clearer treatment direction", "Can reduce trial-and-error routines", "Supports skin-barrier awareness", "Helps plan follow-up care"],
    process: ["Review acne history and products", "Assess skin condition", "Discuss treatment or routine options", "Set review timeline"],
    aftercare: ["Avoid picking lesions", "Use products as directed", "Keep follow-up appointments for adjustment"],
    faqs: standardFaqs("Acne Treatment Consultation"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "pigmentation-treatment-consultation",
    category: "Skin",
    title: "Pigmentation Treatment Consultation",
    shortDescription: "Consultation for uneven tone, dark spots, melasma-type concerns, and safe care planning.",
    longDescription:
      "Pigmentation consultation reviews uneven tone, patches, marks, and skin sensitivity before recommending treatment. Care is planned cautiously because causes and responses vary by individual.",
    idealFor: ["Uneven tone concerns", "Post-acne pigmentation", "Sun-related spots", "Melasma-type concerns"],
    benefits: ["Can identify likely contributing factors", "Supports cautious treatment selection", "May improve routine consistency", "Encourages sun-protection planning"],
    process: ["Review history and triggers", "Assess skin tone and sensitivity", "Discuss treatment options if suitable", "Plan maintenance and review"],
    aftercare: ["Use sun protection as advised", "Avoid harsh unsupervised actives", "Follow the review schedule"],
    faqs: standardFaqs("Pigmentation Treatment Consultation"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "skin-rejuvenation",
    category: "Skin",
    title: "Skin Rejuvenation",
    shortDescription: "Suitability-led care that may support texture, glow, and skin freshness.",
    longDescription:
      "Skin rejuvenation refers to treatment planning that may help with dullness, texture, and overall skin appearance depending on assessment. Options are selected based on skin condition and tolerance.",
    idealFor: ["Dull-looking skin", "Texture concerns", "Pre-event skin planning", "Maintenance-focused patients"],
    benefits: ["May support smoother-looking skin", "Can improve glow depending on suitability", "Supports a structured care plan", "Encourages aftercare discipline"],
    process: ["Assess skin and goals", "Select suitable treatment approach", "Perform treatment if appropriate", "Explain recovery and maintenance"],
    aftercare: ["Avoid harsh exfoliation until advised", "Use sun protection", "Follow hydration and product guidance"],
    faqs: standardFaqs("Skin Rejuvenation"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "hydration-glow-treatment",
    category: "Skin",
    title: "Hydration / Glow Treatment",
    shortDescription: "A gentle treatment direction that may support temporary freshness and hydration.",
    longDescription:
      "Hydration or glow-focused treatments may support a fresher-looking skin surface when suitable. The doctor considers sensitivity, active skin issues, and timing before recommending a treatment.",
    idealFor: ["Dry-looking skin", "Dullness concerns", "Pre-event planning", "Skin maintenance after assessment"],
    benefits: ["May support temporary glow", "Can support skin comfort", "Encourages routine consistency", "Can be planned around sensitivity"],
    process: ["Assess skin condition", "Discuss timing and goals", "Perform suitable treatment", "Explain maintenance and product use"],
    aftercare: ["Keep skin hydrated", "Use sun protection", "Avoid new active products unless advised"],
    faqs: standardFaqs("Hydration / Glow Treatment"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "hair-prp",
    category: "Hair",
    title: "Hair PRP",
    shortDescription: "PRP consultation and treatment planning for suitable hair fall or thinning concerns.",
    longDescription:
      "Hair PRP may support selected hair concerns depending on diagnosis and suitability. The doctor reviews hair fall pattern, history, expectations, and possible contributing factors before treatment planning.",
    idealFor: ["Hair fall concerns", "Early thinning discussions", "PRP suitability assessment", "Maintenance planning after evaluation"],
    benefits: ["May support hair health in suitable cases", "Can complement a broader hair plan", "Uses suitability-led planning", "Encourages follow-up assessment"],
    process: ["Review hair history", "Assess pattern and possible triggers", "Discuss PRP suitability", "Plan sessions and follow-up if appropriate"],
    aftercare: ["Follow scalp care instructions", "Avoid harsh scalp products briefly if advised", "Attend recommended review visits"],
    faqs: standardFaqs("Hair PRP"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "hair-fall-consultation",
    category: "Hair",
    title: "Hair Fall Consultation",
    shortDescription: "A focused consultation for hair shedding, thinning, triggers, and next-step planning.",
    longDescription:
      "Hair fall consultation reviews shedding patterns, scalp concerns, health history, stress, routines, and possible contributing factors. Recommendations depend on assessment and may include treatment, tests, referral, or maintenance advice.",
    idealFor: ["Increased shedding", "Thinning concerns", "Scalp questions", "PRP or treatment suitability discussion"],
    benefits: ["Can clarify likely contributors", "Supports realistic planning", "May identify when referral or tests are needed", "Helps avoid unsuitable treatments"],
    process: ["Discuss history and timeline", "Assess scalp and hair pattern", "Review possible contributors", "Recommend suitable next steps"],
    aftercare: ["Follow advised routine", "Avoid self-prescribing strong treatments", "Return for review if shedding continues"],
    faqs: standardFaqs("Hair Fall Consultation"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "laser-hair-reduction",
    category: "Laser",
    title: "Laser Hair Reduction",
    shortDescription: "Laser hair reduction planning based on skin type, hair type, and suitability.",
    longDescription:
      "Laser hair reduction can support gradual hair reduction in suitable patients, but response varies. The clinic assesses skin type, hair color, treatment area, medical history, and aftercare needs first.",
    idealFor: ["Unwanted hair concerns", "Suitable skin and hair type", "Patients able to follow aftercare", "Maintenance-minded patients"],
    benefits: ["May reduce hair growth over sessions", "Can support grooming comfort", "Treatment areas are planned individually", "Encourages structured aftercare"],
    process: ["Assess skin and hair type", "Discuss suitability and expectations", "Plan treatment area and schedule", "Review aftercare and maintenance"],
    aftercare: ["Avoid sun exposure as advised", "Use soothing care if recommended", "Do not wax between sessions unless approved"],
    faqs: standardFaqs("Laser Hair Reduction"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "laser-skin-consultation",
    category: "Laser",
    title: "Laser Skin Consultation",
    shortDescription: "Assessment for laser suitability, skin goals, sensitivity, and treatment timing.",
    longDescription:
      "Laser skin consultation reviews whether laser-based care may be appropriate for a concern. Skin type, history, pigmentation tendency, recent treatments, and expectations are assessed before planning.",
    idealFor: ["Laser suitability questions", "Texture or pigmentation discussions", "Sensitive skin concerns", "Patients comparing treatment options"],
    benefits: ["Can reduce unsuitable treatment choices", "Supports safer planning", "Clarifies aftercare requirements", "Helps set realistic expectations"],
    process: ["Review skin history", "Assess concern and skin type", "Discuss suitable options or alternatives", "Plan timing and aftercare if appropriate"],
    aftercare: ["Follow sun-protection advice", "Avoid irritating products as directed", "Report unexpected reactions promptly"],
    faqs: standardFaqs("Laser Skin Consultation"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "botox",
    category: "Injectables",
    title: "Botox",
    shortDescription: "Expression-line consultation and treatment planning focused on subtle, suitable outcomes.",
    longDescription:
      "Botox consultations assess facial movement, goals, medical history, and suitability before treatment. The aim is a measured plan that may soften selected expression lines while preserving natural expression where appropriate.",
    idealFor: ["Expression line concerns", "Preventive consultation in suitable adults", "Facial movement assessment", "Subtle aesthetic planning"],
    benefits: ["May soften selected lines", "Can support refreshed appearance", "Planned around facial movement", "Uses conservative consultation-led dosing"],
    process: ["Discuss goals and medical history", "Assess facial movement", "Explain suitability and expectations", "Provide treatment and aftercare if appropriate"],
    aftercare: ["Follow activity restrictions if advised", "Avoid rubbing treated areas initially", "Attend review if recommended"],
    faqs: standardFaqs("Botox"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "fillers",
    category: "Injectables",
    title: "Fillers",
    shortDescription: "Facial volume and contour consultation guided by anatomy, balance, and restraint.",
    longDescription:
      "Filler consultations review facial proportions, skin quality, anatomy, goals, and suitability. Treatment may support volume or contour in selected areas, depending on assessment and safety considerations.",
    idealFor: ["Volume concerns", "Facial contour discussions", "Lip or cheek consultation", "Patients seeking subtle balancing"],
    benefits: ["May support facial harmony", "Can address selected volume concerns", "Planned around anatomy", "Encourages conservative treatment decisions"],
    process: ["Discuss goals and history", "Assess facial proportions", "Explain options, risks, and suitability", "Treat only if appropriate"],
    aftercare: ["Avoid pressure on treated areas initially", "Follow swelling and bruising guidance", "Contact the clinic for unexpected symptoms"],
    faqs: standardFaqs("Fillers"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "under-eye-tear-trough-consultation",
    category: "Injectables",
    title: "Under Eye / Tear Trough Consultation",
    shortDescription: "A careful assessment for under-eye concerns and whether injectable care is suitable.",
    longDescription:
      "Under-eye concerns can have several causes, including anatomy, pigmentation, hollowing, or lifestyle factors. This consultation reviews whether tear trough or alternative care may be suitable.",
    idealFor: ["Under-eye hollowing concerns", "Dark circle discussions", "Facial assessment before injectables", "Patients seeking conservative guidance"],
    benefits: ["Can clarify likely causes", "May identify non-filler alternatives", "Supports safer injectable decisions", "Encourages realistic expectations"],
    process: ["Review history and concerns", "Assess under-eye anatomy", "Discuss suitability and alternatives", "Plan treatment only if appropriate"],
    aftercare: ["Follow treatment-specific advice if treated", "Avoid pressure if advised", "Report unusual swelling or discomfort promptly"],
    faqs: standardFaqs("Under Eye / Tear Trough Consultation"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "facial-balancing-consultation",
    category: "Injectables",
    title: "Facial Balancing Consultation",
    shortDescription: "Aesthetic consultation for proportion, harmony, and subtle treatment planning.",
    longDescription:
      "Facial balancing consultation reviews facial proportions, expression, volume distribution, and patient goals. Recommendations may include no treatment, staged treatment, skin care, injectables, or referral depending on suitability.",
    idealFor: ["Facial harmony concerns", "Profile or proportion discussions", "Patients considering injectables", "Subtle aesthetic planning"],
    benefits: ["Can support a balanced plan", "May prevent over-treatment", "Encourages staged decisions", "Focuses on suitability and restraint"],
    process: ["Discuss aesthetic goals", "Assess facial proportions", "Review treatment and non-treatment options", "Plan staged care if suitable"],
    aftercare: ["Follow any treatment-specific advice", "Allow review time before adding more treatment", "Maintain realistic expectations"],
    faqs: standardFaqs("Facial Balancing Consultation"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "prp-face",
    category: "Injectables",
    title: "PRP Face",
    shortDescription: "PRP facial consultation that may support skin quality in suitable patients.",
    longDescription:
      "PRP face treatments may support skin quality and glow for selected patients. Suitability depends on skin condition, health history, expectations, and the doctor's assessment.",
    idealFor: ["Skin quality concerns", "Glow and texture discussions", "Patients considering PRP", "Suitability-led aesthetic planning"],
    benefits: ["May support skin freshness", "Can complement skin care planning", "Uses assessment-led suitability", "Encourages follow-up and maintenance"],
    process: ["Review health and skin history", "Assess skin goals", "Discuss PRP suitability", "Perform treatment and explain aftercare if appropriate"],
    aftercare: ["Follow skin-care restrictions if advised", "Use sun protection", "Avoid harsh products until cleared"],
    faqs: standardFaqs("PRP Face"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "dental-extraction",
    category: "Dental",
    title: "Dental Extraction",
    shortDescription: "Gentle tooth removal under local anesthesia, focused on comfort and socket preservation.",
    longDescription:
      "Dental extraction is the removal of a tooth from its socket in the bone. It is recommended for severely decayed teeth, advanced gum disease, or crowding, always guided by a thorough suitability check.",
    idealFor: ["Severely decayed teeth", "Advanced gum disease", "Crowding or orthodontic prep", "Fractured or non-restorable teeth"],
    benefits: ["Relieves dental pain from infection", "Prevents spread of decay", "Prepares mouth for orthodontic alignment", "Supports restorative health"],
    process: ["Clinical examination and X-ray", "Local anesthesia administration", "Gentle tooth loosening and removal", "Aftercare guidance and healing monitor"],
    aftercare: ["Bite on gauze pad for 30-45 minutes", "Avoid spitting, sucking, or hot drinks for 24 hours", "Eat soft foods and maintain gentle oral hygiene"],
    faqs: standardFaqs("Dental Extraction"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "impacted-tooth-extraction",
    category: "Dental",
    title: "Impacted Tooth Extraction",
    shortDescription: "Surgical removal of impacted wisdom teeth with clinical precision and post-op care.",
    longDescription:
      "Impacted teeth (especially wisdom teeth) fail to emerge fully through the gums, causing pain, infection, or damage to adjacent teeth. Surgical extraction is planned carefully after diagnostic X-rays.",
    idealFor: ["Painful wisdom teeth", "Partially erupted or trapped teeth", "Preventing damage to adjacent teeth", "Recurrent gum inflammation at back of mouth"],
    benefits: ["Eliminates pressure and pain", "Prevents crowding of adjacent teeth", "Reduces risk of localized cyst or decay", "Clears chronic gum pocket infections"],
    process: ["Diagnostic panoramic X-ray review", "Local anesthesia and sedation discussion", "Surgical tooth sectioning and removal", "Suturing and aftercare planning"],
    aftercare: ["Apply cold compress to manage swelling", "Follow prescribed pain and antibiotic protocols", "Avoid hard or crunchy foods for a few days"],
    faqs: standardFaqs("Impacted Tooth Extraction"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "dentures",
    category: "Dental",
    title: "Dentures",
    shortDescription: "Custom-crafted removable appliances to restore chewing function and smile fullness.",
    longDescription:
      "Dentures are removable replacements for missing teeth and surrounding tissues. Available as complete or partial dentures, they are custom-designed to match your facial proportions and restore bite functionality.",
    idealFor: ["Multiple missing teeth", "Complete tooth loss on an arch", "Restoring facial volume and lip support", "Non-surgical tooth replacement options"],
    benefits: ["Restores chewing and speaking ability", "Improves aesthetic facial profile", "Durable and custom-shaded", "Provides a natural-looking smile restoration"],
    process: ["Bite and jaw alignment assessment", "Precision dental impressions", "Wax trial fitting for aesthetics", "Final denture placement and adjustments"],
    aftercare: ["Clean dentures daily with a soft brush", "Remove dentures at night to rest gums", "Schedule annual adjustments for proper fit"],
    faqs: standardFaqs("Dentures"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "crown-bridges",
    category: "Dental",
    title: "Crown & Bridges",
    shortDescription: "Durable porcelain or zirconia restorations to repair or replace damaged teeth.",
    longDescription:
      "Crowns encase heavily damaged teeth to restore strength, while bridges span the gap created by one or more missing teeth, anchored to adjacent healthy teeth or implants for stability.",
    idealFor: ["Weakened, cracked, or root-canal treated teeth", "Missing teeth replacement", "Restoring bite functionality", "Large worn fillings replacement"],
    benefits: ["Restores structural tooth strength", "Blends seamlessly with natural teeth", "Prevents shifts in adjacent teeth", "Durable, long-term restorative solution"],
    process: ["Tooth preparation and shaping", "Precision digital or physical impressions", "Temporary crown/bridge placement", "Final restoration bonding"],
    aftercare: ["Avoid biting very hard objects", "Floss carefully around bridge anchors", "Maintain regular dental review visits"],
    faqs: standardFaqs("Crown & Bridges"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "dental-jewellery",
    category: "Dental",
    title: "Dental Jewellery",
    shortDescription: "Safe, non-invasive crystal bonding to add a subtle sparkle to your smile.",
    longDescription:
      "Dental jewellery involves bonding tiny, certified crystals or gems onto the enamel of natural teeth. It is completely safe, non-invasive, requires no drilling, and can be removed easily without leaving marks.",
    idealFor: ["Adding a unique aesthetic touch to your smile", "Special occasions or events", "Healthy, clean natural tooth enamel", "Patients seeking non-destructive cosmetics"],
    benefits: ["100% non-invasive (no drilling)", "Temporary and easily removable", "Uses biocompatible clinical adhesives", "Fun, sparkling smile highlight"],
    process: ["Enamel cleansing and polishing", "Apply clinical bonding resin", "Position and cure the tooth crystal", "Verify bond stability and comfort"],
    aftercare: ["Avoid hard brushing directly over the gem", "Skip sticky foods on the jewelled tooth", "Maintain regular routine oral hygiene"],
    faqs: standardFaqs("Dental Jewellery"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "hydrafacial",
    category: "Skin",
    title: "Hydrafacial",
    shortDescription: "Multi-step medical facial utilizing vortex extraction and hydration technology.",
    longDescription:
      "Hydrafacial is a patented clinical treatment that cleanses, exfoliates, extracts impurities, and infuses customized nourishing serums to deliver an instant, radiant skin glow.",
    idealFor: ["Clogged pores and congestion", "Dull skin or uneven texture", "Fine lines and mild hydration loss", "Monthly skin maintenance and glow"],
    benefits: ["Provides instant skin hydration and radiance", "Deep cleanses pores without manual picking", "Gentle, soothing, and zero downtime", "Suitable for all skin types"],
    process: ["Vortex cleansing and exfoliation", "Gentle salicylic/glycolic acid peel", "Automated vacuum extraction", "Antioxidant and hyaluronic acid infusion"],
    aftercare: ["Avoid direct sun and makeup for 24 hours", "Use gentle hydrating cleanser and moisturizer", "Apply SPF 30+ daily"],
    faqs: standardFaqs("Hydrafacial"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "oxygeneo-facial",
    category: "Skin",
    title: "Oxygeneo Facial",
    shortDescription: "3-in-1 facial therapy that exfoliates, infuses nutrients, and oxygenates skin.",
    longDescription:
      "Oxygeneo is an advanced facial treatment that triggers natural oxygenation from within (the Bohr Effect), exfoliates the outer skin layer, and infuses active ingredients for a bright, plump complexion.",
    idealFor: ["Dull or tired-looking skin", "Uneven skin tone and pigmentation", "Fine lines and texture refinement", "Natural oxygenation seekers"],
    benefits: ["Oxygenates skin tissues from within", "Gently refines skin texture", "Maximizes absorption of infused active serums", "Provides immediate plumping and brightening"],
    process: ["Exfoliation with specialized capsule", "Infusion of customized active serums", "Bohr Effect skin oxygenation", "Soothing ultrasound massage"],
    aftercare: ["Keep skin hydrated and protected with SPF", "Avoid exfoliating acids for 48 hours", "Avoid intense sweating or saunas for 24 hours"],
    faqs: standardFaqs("Oxygeneo Facial"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "mesotherapy",
    category: "Skin",
    title: "Mesotherapy",
    shortDescription: "Micro-injections of custom vitamins and hyaluronic acid for skin revitalization.",
    longDescription:
      "Mesotherapy delivers a customized cocktail of vitamins, minerals, amino acids, and hyaluronic acid directly into the mesoderm (middle skin layer) to trigger cellular rejuvenation and hydration.",
    idealFor: ["Dehydrated or dull skin", "Loss of elasticity or mild sagging", "Fine superficial lines", "Overall skin fatigue and revitalization"],
    benefits: ["Deeply nourishes and hydrates skin cells", "Stimulates cellular metabolism", "Improves overall radiance and tone", "Supports collagen synthesis"],
    process: ["Skin cleansing and topical numbing", "Custom nutrient cocktail formulation", "Targeted micro-injections", "Calming recovery mask"],
    aftercare: ["Avoid touch or makeup for 12 hours", "Use soothing, non-comedogenic hydration", "Avoid direct sun exposure and wear SPF"],
    faqs: standardFaqs("Mesotherapy"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "microneedling",
    category: "Skin",
    title: "Microneedling",
    shortDescription: "Collagen induction therapy to improve texture, pores, and acne scars.",
    longDescription:
      "Microneedling creates controlled micro-channels in the skin using sterile fine needles. This triggers the body's natural wound-healing cascade, stimulating fresh collagen and elastin production.",
    idealFor: ["Acne scars and texture irregularities", "Enlarged pores", "Fine lines and early skin laxity", "Improving serum absorption"],
    benefits: ["Stimulates natural collagen production", "Softens acne scars and fine lines", "Refines pores and skin texture", "Minimal downtime skin renewal"],
    process: ["Thorough skin prep and numbing cream", "Apply hyaluronic acid serum", "Perform microneedling at controlled depths", "Apply soothing recovery gel"],
    aftercare: ["Skin will be red like a mild sunburn for 24-48 hours", "Use only clean fingers and gentle recovery creams", "Avoid makeup and direct sun for 48 hours"],
    faqs: standardFaqs("Microneedling"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "chemical-peel",
    category: "Skin",
    title: "Chemical Peel",
    shortDescription: "Controlled exfoliation using clinical acids to reveal brighter, smoother skin.",
    longDescription:
      "Chemical peeling utilizes custom chemical solutions (AHAs, BHAs, or TCA) to safely peel away damaged top layers of skin. This process stimulates cell turnover and improves skin clarity.",
    idealFor: ["Congested or acne-prone skin", "Surface pigmentation and dark spots", "Fine lines and dull texture", "Improving overall skin brightness"],
    benefits: ["Accelerates cell turnover", "Fades dark marks and pigmentation", "Deeply exfoliates and refines pores", "Reveals smoother and brighter skin"],
    process: ["Skin degreasing and prep", "Controlled application of peel solution", "Neutralization if required", "Apply sun protection and barrier repair"],
    aftercare: ["Do not pick or pull peeling skin", "Moisturize heavily and use SPF 50+", "Avoid active serums (retinoids, vitamin C) for 5-7 days"],
    faqs: standardFaqs("Chemical Peel"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "carbon-facial",
    category: "Skin",
    title: "Carbon Facial",
    shortDescription: "Laser-assisted deep pore cleansing and skin brightening (Hollywood Peel).",
    longDescription:
      "Also known as the Hollywood Peel, this treatment uses a layer of liquid carbon applied to the face. The carbon penetrates pores and is then blasted away by a Q-switched laser, clearing debris and stimulating collagen.",
    idealFor: ["Oily skin and congested pores", "Enlarged pores", "Dull skin seeking an instant glow", "Uneven skin tone"],
    benefits: ["Deeply purifies and minimizes pores", "Reduces excess sebum production", "Exfoliates dead skin cells", "No downtime and instant brightening"],
    process: ["Cleanse and apply medical carbon paste", "Allow carbon to dry in pores", "Laser treatment to blast away carbon", "Hydrating mask application"],
    aftercare: ["Apply gentle moisturizer", "Use SPF 30+ daily", "Avoid harsh scrubs or exfoliants for 48 hours"],
    faqs: standardFaqs("Carbon Facial"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "scar-removal",
    category: "Skin",
    title: "Scar Removal",
    shortDescription: "Targeted treatment planning to reduce the appearance of scars and marks.",
    longDescription:
      "Our scar treatments combine laser, chemical peels, subcision, or microneedling to break down fibrous scar tissue and stimulate fresh, flat collagen growth in its place.",
    idealFor: ["Acne scars (boxcar, rolling, icepick)", "Post-traumatic or surgical scars", "Uneven skin indentations", "Raised scar texture (after clinical review)"],
    benefits: ["Softens and smooths scar boundaries", "Triggers fresh collagen filling", "Improves overall skin texture", "Customized to scar type and depth"],
    process: ["Clinical scar profiling and depth review", "Selection of treatment combination", "Sterile procedural execution", "Healing tracking and barrier support"],
    aftercare: ["Apply recommended healing ointments", "Protect treated area from direct sunlight", "Avoid scratching or pulling dry skin flakes"],
    faqs: standardFaqs("Scar Removal"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "milia-removal",
    category: "Skin",
    title: "Milia Removal",
    shortDescription: "Safe, sterile extraction of keratin-filled micro-cysts (milia).",
    longDescription:
      "Milia are tiny, hard white bumps trapped under the skin surface. We use a sterile micro-needle to make a tiny incision in the follicle wall, extracting the keratin pearl safely without scarring.",
    idealFor: ["Hard white bumps around eyes/cheeks", "Stubborn Milia that do not exfoliate", "Smooth skin texture restoration", "Safe clinical extractions"],
    benefits: ["Instant removal of the keratin cyst", "Zero scarring when clinically extracted", "Restores smooth skin texture", "Quick and virtually painless"],
    process: ["Skin cleansing and sanitization", "Sterile micro-lancing of the milia bubble", "Extraction of the keratin contents", "Apply antiseptic soothing gel"],
    aftercare: ["Keep the area clean and untouched", "Avoid makeup on the extraction points for 24 hours", "Use gentle sun protection"],
    faqs: standardFaqs("Milia Removal"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "tattoo-removal",
    category: "Skin",
    title: "Tattoo Removal",
    shortDescription: "Laser-based breakdown of ink pigments to fade unwanted tattoos safely.",
    longDescription:
      "Tattoo removal utilizes advanced laser technology to send high-intensity light pulses through the skin to target and shatter ink particles, which are then naturally cleared by the immune system.",
    idealFor: ["Unwanted cosmetic or body tattoos", "Fading ink before a cover-up tattoo", "Dark ink pigments (black/blue)", "Patients seeking safe ink clearance"],
    benefits: ["Fades and clears tattoo ink gradually", "Minimizes risk of skin scarring", "Targeted pigment destruction", "Safe, medical-grade procedure"],
    process: ["Tattoo assessment and skin profiling", "Apply topical numbing cream", "Laser pulse delivery over ink lines", "Soothing barrier cream and dressing"],
    aftercare: ["Keep area dry and clean for 24 hours", "Apply ointment and keep covered as advised", "Do not scratch blisters or scabs if they form"],
    faqs: standardFaqs("Tattoo Removal"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "tags-warts-mole-removal",
    category: "Skin",
    title: "Tags, Warts & Mole Removal",
    shortDescription: "Clean radiofrequency or cautery extraction of benign skin lesions.",
    longDescription:
      "Benign skin lesions like moles, warts, and skin tags are removed safely using cauterization or radiofrequency. The clinic ensures a sterile technique and aesthetic margin closure to minimize scarring.",
    idealFor: ["Bothering skin tags", "Benign moles (after clinical clearance)", "Warts or skin growth concerns", "Improving smooth skin aesthetic profile"],
    benefits: ["Instant removal of the skin growth", "Minimal risk of bleeding or infection", "Precise margin removal to minimize scars", "Quick, localized procedure"],
    process: ["Inspect lesion characteristics", "Administer local anesthetic if needed", "Radiofrequency or cautery removal", "Apply protective barrier dressing"],
    aftercare: ["Keep the wound dry for 24 hours", "Apply antibiotic ointment as directed", "Do not pick the scab; let it fall off naturally"],
    faqs: standardFaqs("Tags, Warts & Mole Removal"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "vitamin-drips",
    category: "Skin",
    title: "Vitamin Drips",
    shortDescription: "Intravenous infusion of essential vitamins to boost vitality and hydration.",
    longDescription:
      "Intravenous vitamin therapy delivers fluids, vitamins, and minerals directly into the bloodstream. This bypasses the digestive system for 100% absorption, boosting energy, hydration, and cellular health.",
    idealFor: ["Chronic fatigue and dehydration", "Immune system support", "Post-travel recovery or wellness boost", "Supporting skin nutrient baselines"],
    benefits: ["100% immediate nutrient absorption", "Rehydrates the body at a cellular level", "Boosts energy and recovery speeds", "Supports healthy hair, skin, and immune function"],
    process: ["Review health history and vitals", "Formulate custom vitamin infusion", "Establish sterile IV access", "Infuse slowly over 30-45 minutes"],
    aftercare: ["Drink plenty of water", "Monitor the IV insertion point for any bruising", "Resume normal activities immediately"],
    faqs: standardFaqs("Vitamin Drips"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "glutathione-drips",
    category: "Skin",
    title: "Glutathione Drips",
    shortDescription: "Antioxidant drips to support cellular health and skin tone brightness.",
    longDescription:
      "Glutathione is a powerful master antioxidant. Infused intravenously alongside Vitamin C, it supports liver detoxification, neutralizes free radicals, and helps promote a brighter, more even skin tone.",
    idealFor: ["Hyperpigmentation or uneven skin tone", "Detoxification and antioxidant support", "Boosting overall skin radiance", "Anti-aging cellular care"],
    benefits: ["Suppresses melanin production to brighten skin", "Powerful systemic antioxidant and detoxifier", "Improves skin texture and clarity", "Promotes overall immune health"],
    process: ["Medical consultation and dosage check", "Formulate glutathione and vitamin mix", "Sterile IV administration", "Infusion over 45 minutes"],
    aftercare: ["Avoid smoking and heavy alcohol to preserve antioxidant levels", "Wear sun protection daily", "Stay well-hydrated"],
    faqs: standardFaqs("Glutathione Drips"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "thread-lift",
    category: "Injectables",
    title: "Thread-Lift",
    shortDescription: "Minimally invasive lifting of sagging facial tissues using absorbable threads.",
    longDescription:
      "A thread-lift utilizes absorbable PDO or PLLA suture threads inserted into subcutaneous facial layers. The threads lift sagging tissues mechanically and stimulate localized collagen over time.",
    idealFor: ["Mild to moderate jowls or sagging cheeks", "Loss of jawline definition", "Non-surgical face lift candidates", "Aesthetic facial contour support"],
    benefits: ["Immediate mechanical lifting effect", "Stimulates long-term collagen support", "Minimally invasive with low downtime", "Absorbable, biocompatible threads"],
    process: ["Facial mapping and local anesthesia", "Insertion of threads via fine cannulas", "Tension adjustment and trimming", "Sterile recovery prep"],
    aftercare: ["Avoid facial massage or dental visits for 3 weeks", "Sleep on your back to avoid thread pressure", "Eat soft foods for 3-5 days"],
    faqs: standardFaqs("Thread-Lift"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "polynucleotide-under-eye",
    category: "Injectables",
    title: "Polynucleotide Under Eye",
    shortDescription: "Salmon DNA bio-revitalization to improve under-eye skin elasticity.",
    longDescription:
      "Polynucleotides are natural salmon DNA fractions that stimulate fibroblasts. Injected under the eyes, they regenerate skin cells, boost hydration, increase collagen, and soften dark circles and hollows.",
    idealFor: ["Dark circles and under-eye hollows", "Crepey skin and fine lines under eyes", "Tired-looking eyes", "Patients seeking non-filler eye rejuvenation"],
    benefits: ["Regenerates thinning under-eye skin", "Reduces dark circles and fine lines", "Biocompatible and highly safe", "Restores natural under-eye firmness"],
    process: ["Cleansing and topical numbing cream", "Mapping of the delicate under-eye area", "Micro-papule injections using fine needles", "Apply cooling recovery gel"],
    aftercare: ["Small papules will resolve in 24-48 hours", "Avoid rubbing or touching eyes", "Do not apply makeup for 24 hours"],
    faqs: standardFaqs("Polynucleotide Under Eye"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "stem-cell-therapy",
    category: "Injectables",
    title: "Stem Cell Therapy",
    shortDescription: "Regenerative aesthetic care using cellular factors to promote tissue repair.",
    longDescription:
      "Stem cell therapy in aesthetics utilizes active cellular factors and growth factors to trigger tissue regeneration, helping repair thinning hair, improve skin elasticity, and support healing.",
    idealFor: ["Hair thinning and hair loss", "Skin laxity and deep wrinkles", "Regenerative cellular care", "Improving skin texture and health"],
    benefits: ["Triggers natural tissue repair pathways", "Boosts follicle density and skin collagen", "Highly advanced regenerative procedure", "Promotes cell renewal and healing"],
    process: ["Medical eligibility screening", "Topical or local anesthesia", "Precise injection of cellular factors", "Apply post-treatment barrier balm"],
    aftercare: ["Avoid washing the treated area for 12 hours", "Keep the area clean and protected from sun", "Do not apply active products for 48 hours"],
    faqs: standardFaqs("Stem Cell Therapy"),
    disclaimer: consultationDisclaimer
  },
  {
    slug: "exosomes-therapy",
    category: "Injectables",
    title: "Exosomes Therapy",
    shortDescription: "Advanced cellular therapy utilizing exosome nanoparticles for hair and skin repair.",
    longDescription:
      "Exosomes are cellular messengers containing RNA, proteins, and growth factors. Applied or injected after microneedling, they send signals directly to target cells to trigger collagen and elastin repair.",
    idealFor: ["Severe acne scarring or texture issues", "Advanced hair thinning and shedding", "Skin rejuvenation and anti-aging", "Accelerating clinical healing"],
    benefits: ["Speeds up post-procedure healing exponentially", "Boosts collagen and elastin production", "Highly targeted cellular messenger action", "Improves both skin quality and hair density"],
    process: ["Select area and cleanse", "Microneedling to open micro-channels", "Apply and massage exosome serum", "Apply sterile calming sheet mask"],
    aftercare: ["Do not wash face or scalp for 24 hours", "Avoid sun exposure and makeup for 48 hours", "Use only recommended barrier moisturizers"],
    faqs: standardFaqs("Exosomes Therapy"),
    disclaimer: consultationDisclaimer
  },
];

export const treatmentCategories: TreatmentCategory[] = ["Dental", "Skin", "Hair", "Laser", "Injectables"];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export function getRelatedTreatments(treatment: Treatment, limit = 3) {
  return treatments
    .filter((item) => item.category === treatment.category && item.slug !== treatment.slug)
    .slice(0, limit);
}
