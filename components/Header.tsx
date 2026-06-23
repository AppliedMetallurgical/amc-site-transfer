"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { LogoMark } from "@/components/LogoMark";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_PRIMARY = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
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

  const isHome = pathname === "/";
  const showBg = !isHome || scrolled || open;

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
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setOpen(false));
    return () => window.cancelAnimationFrame(frame);
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
          "fixed top-0 inset-x-0 z-50 text-light transition-[transform,background-color] duration-300 ease-out",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          showBg ? "bg-iron-deep/92 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="mx-auto grid h-16 max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 md:h-20 md:px-10 lg:px-16">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Applied Metallurgical Corp. — home"
            onClick={() => setOpen(false)}
          >
            <LogoMark />
          </Link>

          <nav className="hidden justify-center gap-12 md:flex" aria-label="Primary">
            {NAV_PRIMARY.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  aria-current={active ? "page" : undefined}
                  className="group relative flex items-center overflow-hidden px-1 py-2"
                >
                  <span className="relative overflow-hidden">
                    <span
                      aria-hidden
                      className={cn(
                        "block font-sans text-[15px] font-semibold tracking-[-0.005em] transition-transform duration-400 ease-out",
                        active ? "text-light" : "text-light/85 group-hover:-translate-y-full"
                      )}
                    >
                      {item.label}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-0 block font-sans text-[15px] font-semibold tracking-[-0.005em] text-ember-bright transition-transform duration-400 ease-out",
                        active ? "translate-y-full" : "translate-y-full group-hover:translate-y-0"
                      )}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-ember-bright transition-[transform,opacity] duration-400 ease-out",
                      active
                        ? "origin-left scale-x-100 opacity-100"
                        : "origin-left scale-x-0 opacity-0"
                    )}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 top-1 h-1.5 w-1.5 rounded-full bg-ember-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/rfq"
              aria-current={isActive("/rfq") ? "page" : undefined}
              className={cn(
                "group relative hidden items-center gap-2.5 overflow-hidden border px-5 py-2.5 font-sans text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors md:inline-flex",
                isActive("/rfq")
                  ? "border-ember-bright bg-ember-bright text-dark"
                  : "border-light/50 text-light hover:border-ember-bright"
              )}
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-ember-bright transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-dark">
                Send a print
              </span>
              <span
                aria-hidden
                className="relative z-10 transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:text-dark"
              >
                →
              </span>
            </Link>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="relative grid h-10 w-10 place-items-center text-light md:hidden"
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
          "fixed inset-0 z-40 bg-iron-deep transition-opacity duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col justify-center px-6 pt-32 pb-12" aria-label="Mobile">
          {NAV_FULL.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between border-b border-light/15 py-6 font-sans text-[40px] font-semibold leading-[0.95] tracking-[-0.01em] transition-colors",
                  active ? "text-light" : "text-light/70 hover:text-light"
                )}
              >
                <span>{item.label}</span>
                <span aria-hidden className="text-[24px] text-ember-bright">
                  →
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
