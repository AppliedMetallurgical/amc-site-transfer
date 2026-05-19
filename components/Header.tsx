"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { LOGO } from "@/lib/media";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
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
        "fixed top-0 inset-x-0 z-50 transition-colors duration-200",
        scrolled ? "bg-paper/95 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto grid h-32 max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 pt-6 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center text-ink" aria-label="Applied Metallurgical Corp. — home">
          <Image
            src={LOGO.src}
            alt={LOGO.alt}
            width={LOGO.width}
            height={LOGO.height}
            priority
            className="h-20 w-auto md:h-28 lg:h-32 dark:invert"
          />
        </Link>

        <nav className="hidden justify-center gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[14px] tracking-[0.02em] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/rfq"
            className="font-sans text-[14px] tracking-[0.02em] text-ink-soft transition-colors hover:text-ink"
          >
            Request a quote
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
