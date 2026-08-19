import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:bg-accent",
  secondary: "bg-transparent text-foreground border border-border hover:border-foreground",
  ghost: "bg-surface text-foreground hover:bg-border",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
  download?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  external,
  download,
}: Props) {
  const classes = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`;

  if (download) {
    return (
      <a href={href} download className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
