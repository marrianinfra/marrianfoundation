import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "orange";
  className?: string;
};

const variants = {
  primary: "bg-orange text-white hover:bg-orange-dark shadow-sm shadow-orange/20",
  secondary: "bg-navy text-white hover:bg-navy-light",
  outline:
    "border border-navy/20 text-navy hover:border-orange hover:text-orange hover:bg-orange/5",
  orange: "bg-orange text-white hover:bg-orange-dark shadow-md shadow-orange/25",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
