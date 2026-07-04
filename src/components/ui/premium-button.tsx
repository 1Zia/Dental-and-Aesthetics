import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PremiumButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "espresso" | "ivory" | "gold" | "ghost";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  espresso: "btn-espresso",
  ivory: "btn-ivory",
  gold: "btn-gold",
  ghost: "btn-ghost"
};

export function PremiumButton({
  children,
  href,
  variant = "espresso",
  className,
  ...buttonProps
}: PremiumButtonProps) {
  const classes = cn(
    "btn-premium pressable",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
