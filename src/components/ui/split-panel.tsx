import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SplitPanel({
  children,
  aside,
  className
}: {
  children: ReactNode;
  aside: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center", className)}>
      <div>{children}</div>
      <div>{aside}</div>
    </section>
  );
}
