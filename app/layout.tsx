import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
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

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://appliedmetallurgical.com"),
  title: {
    default: "Applied Metallurgical Corp. — Cast Iron, Steel, CNC. Gilmer, TX.",
    template: "%s | Applied Metallurgical Corp.",
  },
  description:
    "Sixteen-person ferrous foundry and CNC machine shop. Cast iron and steel, 10 to 1,000 lbs. V-process zero-draft sand casting, 3D-printed sand tooling, in-house horizontal CNC. Gilmer, Texas.",
  applicationName: "Applied Metallurgical Corp.",
  authors: [{ name: "Applied Metallurgical Corp." }],
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
  const fouc = `(function(){try{var t=localStorage.getItem('amc-theme');if(t!=='dark'&&t!=='light')t='light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: fouc }} />
      </head>
      <body className="min-h-full bg-paper text-ink">
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
