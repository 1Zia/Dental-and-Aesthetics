"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PremiumButton } from "@/components/ui/premium-button";
import { navigation } from "@/data/navigation";
import { clinic, contactLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;

    function onScroll() {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const currentY = Math.max(0, window.scrollY);
        const diff = currentY - lastY;

        if (currentY <= 24) {
          setHidden(false);
          lastY = currentY;
        } else if (Math.abs(diff) > 10) {
          const movingDown = diff > 0;
          setHidden(movingDown && currentY > 140);
          lastY = currentY;
        }

        ticking = false;
      });

      ticking = true;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 px-4 py-2.5 transition-all duration-300 ease-out-quint",
        hidden ? "-translate-y-[120%]" : "translate-y-0"
      )}
      style={{
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), translate 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      <nav
        className="site-header-glass pointer-events-auto mx-auto grid w-full max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-2 lg:px-5 text-deep-espresso"
      >
        {/* Left Column: Logo (aligned to start, prevented from wrapping) */}
        <Link 
          href="/" 
          className="flex min-w-0 items-center gap-3 justify-self-start whitespace-nowrap" 
          aria-label={`${clinic.fullName} home`}
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-deep-espresso font-serif text-base font-semibold text-pearl shadow-none">
            R
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-tight text-deep-espresso whitespace-nowrap">
              {clinic.name}
            </span>
            <span className="block text-[11px] leading-none text-muted-foreground mt-0.5">by Dr. Romana</span>
          </span>
        </Link>

        {/* Middle Column: Nav Links Capsule (centered, slim paddings) */}
        <div 
          className="hidden min-w-0 items-center justify-self-center gap-1 rounded-[var(--radius-sm)] border border-deep-espresso/10 bg-pearl/45 p-1 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "rounded-[var(--radius-sm)] px-3 py-1.5 text-xs font-semibold text-deep-espresso/70 transition-colors hover:bg-warm-ivory/80 hover:text-deep-espresso xl:px-4 xl:text-sm",
                pathname === item.href ? "bg-warm-ivory text-deep-espresso" : ""
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Column: Timings, Action Button & Mobile Nav Trigger (aligned to end, prevented from wrapping) */}
        <div className="flex items-center justify-self-end gap-3 whitespace-nowrap">
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={contactLinks.phone}
              className="hidden border-r border-deep-espresso/12 pr-3 text-right text-xs font-semibold leading-4 text-deep-espresso/72 xl:block whitespace-nowrap"
            >
              <span className="block text-muted-gold text-[10px] uppercase tracking-wider whitespace-nowrap">Mon-Sat / 4 PM-10 PM</span>
              <span className="text-deep-espresso whitespace-nowrap">{clinic.phone}</span>
            </a>
            <a
              href={contactLinks.phone}
              className="hidden text-sm font-semibold text-deep-espresso/78 transition-colors hover:text-muted-gold lg:block xl:hidden whitespace-nowrap"
            >
              {clinic.phone}
            </a>
            <PremiumButton 
              href="/book" 
              variant="gold" 
              className="min-h-0 h-9 px-4 text-xs py-0 flex items-center justify-center whitespace-nowrap"
            >
              Book Consultation
            </PremiumButton>
          </div>
          
          {/* Mobile nav trigger aligns on the far right within the 3rd column */}
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
