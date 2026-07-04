import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function PremiumCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "liquid-glass p-7 md:p-9",
        "rounded-[calc(var(--radius)*1.5)]",
        className
      )}
      {...props}
    />
  );
}
