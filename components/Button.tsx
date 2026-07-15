import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-clay text-white hover:bg-clay-dark shadow-md shadow-clay/30 hover:shadow-lg hover:shadow-clay/40 hover:-translate-y-0.5",
  secondary:
    "border-2 border-line bg-card text-ink hover:border-clay hover:text-clay-dark hover:-translate-y-0.5",
};

function classesFor(variant: Variant, className: string) {
  return `${base} ${variants[variant]} ${className}`;
}

// Link-style button (internal or external).
export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: CommonProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = /^https?:|^mailto:|^tel:/.test(href);
  if (isExternal) {
    return (
      <a href={href} className={classesFor(variant, className)} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classesFor(variant, className)} {...rest}>
      {children}
    </Link>
  );
}

// Real <button> for forms and actions.
export function ActionButton({
  variant = "primary",
  className = "",
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classesFor(variant, className)} {...rest}>
      {children}
    </button>
  );
}
