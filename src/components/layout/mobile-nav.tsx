"use client";

import { Clock, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { clinic, contactLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { PremiumButton } from "@/components/ui/premium-button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="pressable grid size-11 place-items-center rounded-[var(--radius-sm)] border border-deep-espresso/12 bg-pearl/90 text-deep-espresso shadow-[0_8px_18px_rgb(37_29_24_/_0.08)] backdrop-blur-md"
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <button
        type="button"
        aria-label="Close navigation"
        className={cn(
          "!fixed inset-0 z-40 bg-deep-espresso/12 backdrop-blur-[2px] transition-opacity duration-200",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />
      
      <div 
        id="mobile-navigation"
        className={cn(
          "watery-glass !fixed inset-x-4 top-[calc(env(safe-area-inset-top)+4.75rem)] z-50 max-h-[calc(100dvh-8.5rem)] overflow-y-auto p-4 shadow-2xl transition-all duration-300 ease-out md:hidden",
          open 
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
        )}
      >
        <div className="grid gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius-sm)] px-3 py-3 text-sm font-semibold text-deep-espresso transition-colors hover:bg-warm-ivory/70 focus-visible:bg-warm-ivory/70"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-4 border-y border-border py-4 text-sm leading-6 text-muted-foreground">
          <p className="flex gap-2">
            <Clock className="mt-1 size-4 shrink-0 text-muted-gold" aria-hidden />
            {clinic.hours}
          </p>
          <p className="mt-2 flex gap-2">
            <Phone className="mt-1 size-4 shrink-0 text-muted-gold" aria-hidden />
            {clinic.phone}
          </p>
        </div>
        <PremiumButton href="/book" className="mt-4 w-full" onClick={() => setOpen(false)}>
          Book Consultation
        </PremiumButton>
        <PremiumButton href={contactLinks.whatsapp} variant="ivory" className="mt-3 w-full" onClick={() => setOpen(false)}>
          WhatsApp booking
        </PremiumButton>
      </div>
    </div>
  );
}
