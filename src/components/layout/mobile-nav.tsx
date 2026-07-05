"use client";

import { Clock, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { clinic, contactLinks } from "@/lib/constants";
import { PremiumButton } from "@/components/ui/premium-button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="pressable grid size-11 place-items-center rounded-[var(--radius-sm)] border border-border bg-pearl/80 text-deep-espresso backdrop-blur-md"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open ? (
        <div className="watery-glass absolute inset-x-4 top-24 translate-y-0 p-5 opacity-100 transition-[opacity,transform] duration-200 shadow-2xl">
          <div className="grid gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-3 text-sm font-semibold text-deep-espresso"
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
          <PremiumButton href={contactLinks.whatsapp} variant="ivory" className="mt-3 w-full">
            WhatsApp booking
          </PremiumButton>
        </div>
      ) : null}
    </div>
  );
}
