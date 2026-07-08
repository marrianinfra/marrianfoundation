"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-navy/10 bg-navy/95 shadow-lg shadow-navy/10 backdrop-blur-md"
          : "border-b border-neutral-200/60 bg-surface/90 backdrop-blur-md"
      }`}
    >
      <div className="container-site flex items-center justify-between gap-4 px-5 py-3 sm:px-8 md:px-12 lg:px-16">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-10 w-10 shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo/logo.svg"
              alt="Marrian Foundation"
              fill
              className={`object-contain transition-all ${scrolled ? "brightness-0 invert" : ""}`}
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? scrolled
                      ? "bg-orange text-white"
                      : "bg-navy text-white"
                    : scrolled
                      ? "text-white/80 hover:text-white"
                      : "text-muted hover:text-navy"
                }`}
              >
                {link.label}
                {!active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-orange transition-transform duration-300 group-hover:scale-x-100" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-dark hover:shadow-md hover:shadow-orange/25 lg:inline-flex"
        >
          Get Involved
        </Link>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
            scrolled ? "border-white/20 text-white" : "border-neutral-200 text-navy"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full transition-transform ${
                scrolled ? "bg-white" : "bg-navy"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full transition-opacity ${
                scrolled ? "bg-white" : "bg-navy"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full transition-transform ${
                scrolled ? "bg-white" : "bg-navy"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div
          className={`border-t px-5 py-4 lg:hidden ${
            scrolled ? "border-white/10 bg-navy" : "border-neutral-200 bg-surface"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base ${
                    active
                      ? "bg-orange text-white"
                      : scrolled
                        ? "text-white hover:bg-white/10"
                        : "text-navy hover:bg-surface-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
