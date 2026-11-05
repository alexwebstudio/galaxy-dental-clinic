import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { BookingModal } from "@/components/layout/BookingModal";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";
import { fontVariables } from "@/lib/fonts";
import { clinicSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.brand} — стоматология, ${site.city}`,
    template: `%s · ${site.brand}`,
  },
  description: "Galaxy Dental Clinic в Астане: ортодонтия, терапия, хирургия и имплантация. Запись по телефону и WhatsApp.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/galaxy-mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#163C8C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={fontVariables}>
      <body>
        <noscript>
          <style>{`[data-reveal],[data-reveal-group]>[data-reveal-item],[data-split] .char{opacity:1;transform:none;filter:none}`}</style>
        </noscript>
        <Preloader />
        <a href="#main" className="skip-link">
          Перейти к содержимому
        </a>
        <JsonLd data={clinicSchema()} />
        <SmoothScroll>
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <BookingModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
