"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { HeroScrollAnimation } from "@/components/sections/hero-scroll-animation";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionLabel } from "@/components/ui/section-label";
import { contactLinks } from "@/lib/constants";

const frameCount = 133;

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    let ticking = false;

    function updateFrame() {
      const element = sectionRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const travel = rect.height - viewport;
      const progress = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;
      const nextFrame = Math.min(frameCount, Math.max(1, Math.round(progress * (frameCount - 1)) + 1));

      setFrame((current) => (current === nextFrame ? current : nextFrame));
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateFrame);
        ticking = true;
      }
    }

    updateFrame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="grain relative min-h-[160vh] lg:min-h-[180vh] w-full bg-pearl"
    >
      {/* Sticky background animation container */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden z-0">
        <HeroScrollAnimation frame={frame} />
        
        {/* Balanced premium gradient overlays for flawless text contrast (reduced opacity & stops for higher video visibility) */}
        {/* Desktop Gradient Overlay (Left-to-Right) */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(90deg,var(--pearl)_5%,color-mix(in_srgb,var(--pearl)_70%,transparent)_28%,color-mix(in_srgb,var(--pearl)_15%,transparent)_60%,transparent_90%)] z-[1] pointer-events-none hidden md:block" 
        />
        {/* Mobile Gradient Overlay (Bottom-to-Top / Solid wash for legibility) */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(0deg,var(--pearl)_25%,color-mix(in_srgb,var(--pearl)_75%,transparent)_55%,color-mix(in_srgb,var(--pearl)_30%,transparent)_90%,transparent_100%)] z-[1] pointer-events-none md:hidden" 
        />
      </div>

      {/* Scrollable text content overlay */}
      <div className="relative z-10 -mt-[100dvh] w-full">
        <div className="container-shell min-h-dvh grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start lg:items-center">
          <AnimatedReveal>
            <div className="pt-28 pb-16 lg:py-32 flex flex-col justify-center max-w-2xl relative">
              <div className="absolute top-0 left-0 w-24 h-[1px] bg-champagne-gold/60 md:block hidden" />
              
              <SectionLabel className="text-muted-gold font-semibold uppercase tracking-[0.2em] text-xs">
                Dental, Skin, Hair & Laser Clinic
              </SectionLabel>
              
              <h1 className="balanced mt-5 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-deep-espresso">
                A calmer way to plan your smile and confidence.
              </h1>
              
              <p className="pretty mt-6 text-base md:text-lg leading-relaxed text-deep-espresso/85 max-w-xl">
                Dr. Romana Afridi brings dental care, skin treatments, hair therapies, laser
                procedures, Botox, fillers and PRP into one consultation-led clinic experience in B-17,
                Islamabad.
              </p>
              
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PremiumButton href="/book" className="min-h-12 px-6">
                  Book a Consultation
                  <ArrowRight className="size-4" aria-hidden />
                </PremiumButton>
                <PremiumButton 
                  href={contactLinks.whatsapp} 
                  variant="ivory" 
                  className="min-h-12 px-6 flex items-center gap-2 border border-deep-espresso/15 hover:border-deep-espresso/30 bg-pearl/40 backdrop-blur-sm"
                >
                  <MessageCircle className="size-4 text-emerald-600" aria-hidden />
                  WhatsApp Clinic
                </PremiumButton>
              </div>
              
              <div className="mt-10 grid gap-4 border-t border-deep-espresso/12 pt-6 text-xs md:text-sm font-semibold text-deep-espresso/90 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-champagne-gold" />
                  <span>Suitability-led plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-champagne-gold" />
                  <span>Natural aesthetics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-champagne-gold" />
                  <span>Dental + skin in one</span>
                </div>
              </div>
            </div>
          </AnimatedReveal>
          
          {/* Empty right column on desktop to leave the operating light animation fully visible */}
          <div className="hidden lg:block h-full" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
