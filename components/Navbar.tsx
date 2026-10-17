'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { href: '#hero', idx: '01', label: 'STARTSEITE & SLIDER' },
  { href: '#fuhrpark', idx: '02', label: 'UNSER FUHRPARK' },
  { href: '#manifesto', idx: '03', label: 'DAS MANIFEST' },
  { href: '#speisekarte', idx: '04', label: 'SPEISEKARTE' },
  { href: '#calculator', idx: '05', label: 'EVENT-RECHNER' },
  { href: '#jobs', idx: '06', label: 'JOBS & TEAM' },
  { href: '#contact', idx: '07', label: 'KONTAKT & ANFRAGE' },
];

export default function Navbar({
  onOpenBooking,
}: {
  onOpenBooking: () => void;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#121316]/80 backdrop-blur-xl border-b border-[#FBDDE7]/10 transition-all">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="#top" className="flex items-center gap-3.5 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.frittenherz.de/images/frittenherz/logo/logo_frittenherz2025_oblinks.png"
              alt="FrittenHerz Logo"
              className="h-11 w-auto object-contain transition-transform group-hover:scale-105 group-hover:-rotate-2"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-tight text-[#FBDDE7] font-semibold flex items-center gap-1.5">
                FRITTENHERZ{' '}
                <span className="text-[#FA0404] text-base">♥</span>
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#FBDDE7]/50 uppercase">
                MOBILES CATERING · HEINSBERG
              </span>
            </div>
          </Link>

          {/* Status Badge */}
          <div className="hidden lg:flex items-center">
            <div className="font-mono text-[11px] tracking-wider uppercase text-[#FBDDE7] flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBDDE7]/5 border border-[#FBDDE7]/15">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]" />
              BUCHUNGEN 2026 / 2027 FREIGESCHALTET
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full font-mono text-[11px] tracking-wider bg-[#FBDDE7] text-[#121316] font-semibold hover:bg-white transition-all shadow-[0_4px_20px_rgba(251,221,231,0.25)]"
            >
              TERMIN ANFRAGEN
            </button>
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="px-4 py-2 rounded-full font-mono text-[11px] tracking-wider border border-[#FBDDE7]/15 bg-[#18191E] text-[#FBDDE7] hover:border-[#FBDDE7] hover:bg-[#FBDDE7]/10 transition-all flex items-center gap-2"
              aria-label="Navigation öffnen"
            >
              <span>{drawerOpen ? 'SCHLIESSEN' : 'MENÜ'}</span>
              <div className="w-4 h-3 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-[#FBDDE7] transition-all ${drawerOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                />
                <span
                  className={`h-0.5 w-full bg-[#FBDDE7] transition-all ${drawerOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`h-0.5 w-full bg-[#FBDDE7] transition-all ${drawerOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Drawer */}
      <div
        className={`fixed inset-0 bg-[#0e0f12]/95 backdrop-blur-3xl z-40 flex flex-col justify-between p-8 sm:p-16 transition-opacity duration-500 ${
          drawerOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[1380px] w-full mx-auto my-auto flex flex-col gap-6 pt-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="font-display text-4xl sm:text-6xl text-[#FBDDE7] hover:text-white hover:translate-x-3 transition-all flex items-center gap-6"
            >
              <span className="font-mono text-sm border border-[#FBDDE7]/20 px-3 py-1 rounded-full text-[#FBDDE7]/50">
                {item.idx}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="max-w-[1380px] w-full mx-auto pt-6 border-t border-[#FBDDE7]/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#FBDDE7]/60">
          <span>BÜRO: Am Mühlenbach 34, 52525 Heinsberg</span>
          <div className="flex gap-4">
            <a
              href="tel:+4924529539792"
              className="hover:text-[#FBDDE7] transition-colors"
            >
              TEL: +49 24 52 . 95 39 792
            </a>
            <a
              href="mailto:kontakt@frittenherz.de"
              className="hover:text-[#FBDDE7] transition-colors"
            >
              KONTAKT@FRITTENHERZ.DE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
