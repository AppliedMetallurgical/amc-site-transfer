import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://appliedmetallurgical.com"),
  title: {
    default: "Applied Metallurgical Corp. — Engineered Castings + CNC, Gilmer, TX",
    template: "%s | Applied Metallurgical Corp.",
  },
  description:
    "Cast iron and steel components, 10–1,000 lbs. V-process zero-draft sand casting, 3D-printed sand tooling, in-house CNC machining. Engineering partnership from concept to production.",
  applicationName: "Applied Metallurgical Corp.",
  authors: [{ name: "Applied Metallurgical Corp." }],
  keywords: [
    "cast iron foundry",
    "steel casting",
    "V-process casting",
    "3D-printed sand tooling",
    "CNC machining",
    "DFM consulting",
    "Texas foundry",
    "Gilmer Texas",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://appliedmetallurgical.com",
    siteName: "Applied Metallurgical Corp.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-foundry text-paper">
        <CustomCursor />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
