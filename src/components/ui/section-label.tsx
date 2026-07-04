import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SectionLabel({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.22em] text-muted-gold",
        className
      )}
      {...props}
    />
  );
}
