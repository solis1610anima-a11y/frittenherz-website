import React from 'react';
import Link from 'next/link';

interface FooterProps {
  onOpenBooking: () => void;
}

const footerLinks = {
  navigation: [
    { label: 'Startseite', href: '#hero' },
    { label: 'Fuhrpark', href: '#fuhrpark' },
    { label: 'Manifest', href: '#manifesto' },
    { label: 'Speisekarte', href: '#speisekarte' },
    { label: 'Event-Rechner', href: '#calculator' },
    { label: 'Jobs', href: '#jobs' },
  ],
  services: [
    'Foodtruck-Catering',
    'Festival & Stadtfest',
    'Hochzeiten',
    'Firmenfeiern',
    'Polterabende',
    'Schützenfeste',
  ],
  legal: [
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
    { label: 'AGB', href: '#' },
  ],
};

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer id="contact" className="bg-[#0e0f12] border-t border-[#FBDDE7]/10">
      {/* Massive Typographic CTA */}
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-24 text-center">
        <p className="font-mono text-xs tracking-widest text-[#FBDDE7]/40 uppercase mb-6">
          BEREIT FÜR ETWAS LECKERES?
        </p>
        <h2 className="font-display text-5xl sm:text-7xl lg:text-[120px] text-[#FBDDE7] tracking-tight leading-[0.9] mb-8">
          LASS UNS DEIN{' '}
          <span className="font-editorial italic text-white lowercase">
            nächstes Event
          </span>{' '}
          PLANEN.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-full font-mono text-sm tracking-wider bg-[#FBDDE7] text-[#121316] font-semibold hover:bg-white transition-all shadow-[0_4px_30px_rgba(251,221,231,0.3)]"
          >
            JETZT CATERING ANFRAGEN ›
          </button>
          <a
            href="tel:+4924529539792"
            className="px-8 py-4 rounded-full font-mono text-sm tracking-wider border border-[#FBDDE7]/20 text-[#FBDDE7] hover:bg-[#FBDDE7]/10 transition-all"
          >
            ODER DIREKT ANRUFEN
          </a>
        </div>
      </div>

      {/* 4-Column Footer */}
      <div className="border-t border-[#FBDDE7]/10">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://www.frittenherz.de/images/frittenherz/logo/logo_frittenherz2025_oblinks.png"
                alt="FrittenHerz Logo"
                className="h-10 w-auto"
              />
              <span className="font-display text-lg text-[#FBDDE7] flex items-center gap-1">
                FRITTENHERZ <span className="text-[#FA0404]">♥</span>
              </span>
            </div>
            <p className="text-sm text-[#FBDDE7]/40 leading-relaxed">
              Mobiles Catering & Foodtruck-Service aus Heinsberg. Echtes
              Handwerk, echte Menschen, echter Geschmack — seit 2019.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.instagram.com/frittenherz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#FBDDE7]/15 bg-[#18191E] flex items-center justify-center text-[#FBDDE7]/50 hover:bg-[#FBDDE7] hover:text-[#121316] transition-all text-sm"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://www.facebook.com/frittenherz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#FBDDE7]/15 bg-[#18191E] flex items-center justify-center text-[#FBDDE7]/50 hover:bg-[#FBDDE7] hover:text-[#121316] transition-all text-sm"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://wa.me/4924529539792"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#FBDDE7]/15 bg-[#18191E] flex items-center justify-center text-[#FBDDE7]/50 hover:bg-[#FBDDE7] hover:text-[#121316] transition-all text-sm"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-[#FBDDE7]/40 uppercase mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FBDDE7]/50 hover:text-[#FBDDE7] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-[#FBDDE7]/40 uppercase mb-4">
              LEISTUNGEN
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-[#FBDDE7]/50">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-[#FBDDE7]/40 uppercase mb-4">
              KONTAKT
            </h4>
            <div className="space-y-3 text-sm text-[#FBDDE7]/50">
              <p>
                <span className="font-mono text-[10px] text-[#FBDDE7]/30 tracking-wider block mb-0.5">
                  BÜRO
                </span>
                Am Mühlenbach 34
                <br />
                52525 Heinsberg
              </p>
              <p>
                <span className="font-mono text-[10px] text-[#FBDDE7]/30 tracking-wider block mb-0.5">
                  TELEFON
                </span>
                <a
                  href="tel:+4924529539792"
                  className="hover:text-[#FBDDE7] transition-colors"
                >
                  +49 24 52 · 95 39 792
                </a>
              </p>
              <p>
                <span className="font-mono text-[10px] text-[#FBDDE7]/30 tracking-wider block mb-0.5">
                  E-MAIL
                </span>
                <a
                  href="mailto:kontakt@frittenherz.de"
                  className="hover:text-[#FBDDE7] transition-colors"
                >
                  kontakt@frittenherz.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FBDDE7]/8">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-[#FBDDE7]/25 tracking-wider">
            © {new Date().getFullYear()} FRITTENHERZ · ALLE RECHTE VORBEHALTEN
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[10px] text-[#FBDDE7]/25 tracking-wider hover:text-[#FBDDE7]/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="font-mono text-[10px] text-[#FBDDE7]/15 tracking-wider">
            DESIGNED WITH ♥ IN HEINSBERG
          </p>
        </div>
      </div>
    </footer>
  );
}
