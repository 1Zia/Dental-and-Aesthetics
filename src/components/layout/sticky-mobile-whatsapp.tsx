import { MessageCircle } from "lucide-react";
import { clinic, contactLinks } from "@/lib/constants";

export function StickyMobileWhatsapp() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-pearl/20 bg-deep-espresso/96 px-4 py-3 text-pearl shadow-[0_-10px_28px_rgb(37_29_24_/_0.16)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold uppercase tracking-[0.16em] text-champagne-gold">
            Prefer WhatsApp?
          </p>
          <p className="text-xs sm:text-sm text-pearl/78 leading-normal">Message {clinic.phone} for availability</p>
        </div>
        <a
          href={contactLinks.whatsapp}
          className="pressable inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-champagne-gold px-4 text-xs sm:text-sm font-semibold text-deep-espresso shrink-0"
          aria-label={`Message ${clinic.fullName} on WhatsApp`}
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
