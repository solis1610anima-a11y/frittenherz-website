import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

/* ──────────────────────────────────────────────
   Only Inter is loaded via next/font/google.
   Faculty Glyphic, Libre Caslon Text & Fragment Mono
   are loaded via <link> tags to avoid the
   next/font build-time weight-validation errors
   and the font-overlap bug where Faculty Glyphic
   was being applied to body text.
   ────────────────────────────────────────────── */

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FrittenHerz | Street Food mit dem Human Touch',
  description:
    'FrittenHerz – Fritten mit Herz! Der Premium Foodtruck & Imbiss-Catering Service aus Heinsberg für Festivals, Firmenfeiern und Hochzeiten.',
  icons: {
    icon: 'https://www.frittenherz.de/images/favicon-16x16.ico',
  },
  openGraph: {
    title: 'FrittenHerz | Street Food mit dem Human Touch',
    description:
      'Authentisches Imbiss-Catering auf Rädern mit belgischen Fritten, Currywurst & holländischen Spezialitäten.',
    images: ['/assets/fh_slide1.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* Google Fonts loaded via <link> to avoid next/font build errors
            with Faculty Glyphic (only weight 400) and Libre Caslon Text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&family=Fragment+Mono&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} bg-[#121316] text-[#FBDDE7] antialiased selection:bg-[#FBDDE7] selection:text-[#121316]`}
      >
        {children}
      </body>
    </html>
  );
}
