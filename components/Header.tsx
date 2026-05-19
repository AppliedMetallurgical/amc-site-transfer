"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { LOGO } from "@/lib/media";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_PRIMARY = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

const NAV_FULL = [...NAV_PRIMARY, { label: "Request a quote", href: "/rfq" }];

const SCROLL_HIDE_THRESHOLD = 100;
const SCROLL_DELTA = 6;

export function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        if (y < SCROLL_HIDE_THRESHOLD) {
          setHidden(false);
        } else if (delta > SCROLL_DELTA) {
          setHidden(true);
        } else if (delta < -SCROLL_DELTA) {
          setHidden(false);
        }
        setScrolled(y > 24);
        lastY = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("drawer-lock");
    } else {
      document.body.classList.remove("drawer-lock");
    }
    return () => document.body.classList.remove("drawer-lock");
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-[transform,background-color] duration-300 ease-out",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          scrolled || open ? "bg-paper/95 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="mx-auto grid h-32 max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 pt-6 md:px-10 lg:px-16">
          <Link
            href="/"
            className="flex items-center text-ink"
            aria-label="Applied Metallurgical Corp. — home"
            onClick={() => setOpen(false)}
          >
            <Image
              src={LOGO.src}
              alt={LOGO.alt}
              width={LOGO.width}
              height={LOGO.height}
              priority
              className="h-20 w-auto md:h-28 lg:h-32 dark:invert"
            />
          </Link>

          <nav className="hidden justify-center gap-10 md:flex" aria-label="Primary">
            {NAV_PRIMARY.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative font-sans text-[14px] tracking-[0.02em] transition-colors",
                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 bg-ember transition-all duration-300",
                      active ? "w-6 opacity-100" : "w-0 opacity-0"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href="/rfq"
              aria-current={isActive("/rfq") ? "page" : undefined}
              className={cn(
                "relative hidden font-sans text-[14px] tracking-[0.02em] transition-colors md:inline-block",
                isActive("/rfq") ? "text-ink" : "text-ink-soft hover:text-ink"
              )}
            >
              Request a quote
              <span
                aria-hidden
                className={cn(
                  "absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 bg-ember transition-all duration-300",
                  isActive("/rfq") ? "w-6 opacity-100" : "w-0 opacity-0"
                )}
              />
            </Link>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="relative grid h-10 w-10 place-items-center text-ink md:hidden"
            >
              <span
                aria-hidden
                className={cn(
                  "absolute h-[1.5px] w-6 bg-current transition-transform duration-300",
                  open ? "rotate-45" : "-translate-y-2"
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute h-[1.5px] w-6 bg-current transition-opacity duration-200",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute h-[1.5px] w-6 bg-current transition-transform duration-300",
                  open ? "-rotate-45" : "translate-y-2"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 bg-paper transition-opacity duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col justify-center px-6 pt-32 pb-12" aria-label="Mobile">
          {NAV_FULL.map((item, i) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-baseline gap-5 border-b border-rule/50 py-6 font-serif text-[44px] leading-[0.95] tracking-[-0.01em] transition-colors",
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                )}
              >
                <span className="font-mono text-[11px] tracking-[0.24em] uppercase text-ember">
                  {String(i + 1).padStart(2, "0")} /
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
