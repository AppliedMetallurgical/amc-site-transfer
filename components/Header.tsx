"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Case Study", href: "/case-study" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-foundry/85 backdrop-blur-md border-b border-mill/40"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="block h-8 w-8 rounded-sm bg-paper"
            aria-label="AMC mark — pending vectorized logo"
          />
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-paper">
            Applied Metallurgical
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.24em] uppercase text-cast transition-colors hover:text-pour"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/rfq"
          className="inline-flex items-center gap-2 border border-pour px-4 py-2 font-mono text-[11px] tracking-[0.24em] uppercase text-pour transition-colors hover:bg-pour hover:text-foundry"
        >
          Request a quote
          <svg
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
