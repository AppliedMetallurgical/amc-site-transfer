"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const HIDDEN_ROUTES = new Set(["/rfq"]);

export function FloatingCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (HIDDEN_ROUTES.has(pathname)) {
      setVisible(false);
      return;
    }
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight * 0.7);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  if (HIDDEN_ROUTES.has(pathname)) return null;

  return (
    <Link
      href="/rfq"
      aria-label="Send us your print"
      className={cn(
        "group fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 overflow-hidden border border-ink bg-paper px-5 py-3 font-mono text-[11px] tracking-[0.22em] uppercase text-ink shadow-[0_8px_28px_-12px_rgba(15,15,18,0.45)] transition-[opacity,transform] duration-500 ease-out md:bottom-8 md:right-8",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <span
        aria-hidden
        className="relative inline-flex h-[8px] w-[8px] shrink-0 items-center justify-center"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-ember/60" />
        <span className="relative inline-block h-[6px] w-[6px] rounded-full bg-ember" />
      </span>
      Send your print
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
