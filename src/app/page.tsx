import { BookingCta } from "@/components/sections/booking-cta";
import { DentalAestheticsSplit } from "@/components/sections/dental-aesthetics-split";
import { DoctorProfileSection } from "@/components/sections/doctor-profile-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PatientJourney } from "@/components/sections/patient-journey";
import { ResultsGalleryPreview } from "@/components/sections/results-gallery-preview";
import { SignatureTreatments } from "@/components/sections/signature-treatments";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TreatmentCategoryQuickLinks } from "@/components/sections/treatment-category-quick-links";
import { clinicJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd()) }} />
      <HeroSection />
      <TreatmentCategoryQuickLinks />
      <SignatureTreatments />
      <DentalAestheticsSplit />
      <DoctorProfileSection />
      <PatientJourney />
      <ResultsGalleryPreview />
      <TestimonialsSection />
      <FaqSection />
      <BookingCta />
    </main>
  );
}
