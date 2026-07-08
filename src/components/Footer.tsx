import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="container-site section-padding grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white p-1.5">
              <Image src="/logo/logo.svg" alt="" fill className="object-contain p-1" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold">{site.name}</p>
              <p className="text-sm text-gradient-gold">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/75">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-orange">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-orange">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/50 sm:px-8">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
