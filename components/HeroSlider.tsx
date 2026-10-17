'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  src: string;
  tag: string;
  title: string;
  description: string;
  tabLabel: string;
}

const slides: Slide[] = [
  {
    src: '/assets/fh_slide1.jpg',
    tag: 'ORIGINAL STARTSEITEN-MOTIV · SEIT 2019',
    title: 'Echter Geschmack. Echtes Leben.',
    description:
      'Das vertraute Bild unserer Startseite: Der Duft von krossen belgischen Fritten, brutzelnden Grillwürsten und unserer hausgemachten Currysauce bringt Menschen auf Festen, Märkten und Feiern zusammen.',
    tabLabel: '01 ORIGINAL STARTSEITE',
  },
  {
    src: '/assets/foodtruck-night.jpg',
    tag: 'NOCTURNE EDITION · DIE FOODTRUCK-FLOTTE',
    title: 'Atmosphäre, die verbindet.',
    description:
      'Unser mattschwarzer Foodtrailer bei Dämmerung: Warmes goldenes Licht, feine Neontöne und unbeschwerte Festival-Stimmung für Hochzeiten, Polterabende und Firmenjubiläen.',
    tabLabel: '02 FOODTRUCK NACHT',
  },
  {
    src: '/assets/gourmet-fries.jpg',
    tag: 'SIGNATURE DISH · BELGISCHER SCHNITT',
    title: 'Goldbraun. Knusprig. Handgemacht.',
    description:
      'Ausgewählte Kartoffeln im dicken Schnitt, doppelt knusprig frittiert und serviert mit unserer hausgemachten Currysauce, feiner Mayo und frischen roten Zwiebeln.',
    tabLabel: '03 BELGISCHE FRITTEN',
  },
  {
    src: '/assets/currywurst-deluxe.jpg',
    tag: 'KULT-KLASSIKER · GEHEIMREZEPTUR',
    title: 'Die Meisterwurst mit Herz.',
    description:
      'Knackige Spitzen-Bratwurst, saftig vom Grill geschnitten und gebettet in heißer, würzig-fruchtiger Currysauce mit edlem Currypulver. Der Liebling aller Gäste.',
    tabLabel: '04 CURRYWURST',
  },
  {
    src: '/assets/fh_slide0.jpg',
    tag: 'EINSATZBEREIT · GANZ NRW',
    title: 'Mobiler Genuss ohne Grenzen.',
    description:
      'Zwei moderne Foodtrucks, ein engagiertes Team und autarke Versorgung: Wir kommen direkt zu deinem Fest nach Heinsberg, Aachen, Mönchengladbach und ganz Nordrhein-Westfalen.',
    tabLabel: '05 FUHRPARK',
  },
];

export default function HeroSlider({
  onOpenBooking,
}: {
  onOpenBooking: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(
    () => setCurrent((prev) => (prev + 1) % slides.length),
    [],
  );
  const goPrev = useCallback(
    () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 bg-[#121316] overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 flex flex-col gap-8">
        {/* ── Top Tags Row ── */}
        <div className="flex flex-wrap items-center gap-3">
          {[
            'EST. OKTOBER 2019',
            'HEINSBERG · AACHEN · NRW',
            null, // live-dot placeholder
            '100% ECHTES HANDWERK',
          ].map((label, i) =>
            label ? (
              <span
                key={i}
                className="font-mono text-[11px] tracking-widest text-[#FBDDE7]/80 uppercase px-3 py-1 rounded-full bg-[#FBDDE7]/5 border border-[#FBDDE7]/15"
              >
                {label}
              </span>
            ) : (
              <span
                key={i}
                className="font-mono text-[11px] tracking-widest text-[#FBDDE7]/80 uppercase px-3 py-1 rounded-full bg-[#FBDDE7]/5 border border-[#FBDDE7]/15 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                2X FOODTRUCKS EINSATZBEREIT
              </span>
            ),
          )}
        </div>

        {/* ── Big Display Headline ── */}
        <div className="max-w-[1100px] flex flex-col gap-4">
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.5rem)] tracking-tight uppercase leading-[0.95] text-[#FBDDE7]">
            STREET FOOD MIT DEM{' '}
            <span className="font-editorial not-italic font-normal text-white lowercase">
              Human Touch.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#FBDDE7]/70 leading-relaxed max-w-[860px] font-sans">
            Bei <strong>FrittenHerz</strong> wissen wir: Kein Roboter der Welt
            kann das ersetzen, was aus echter Leidenschaft und Liebe zum
            Handwerk entsteht. Das zischende Brutzeln auf dem Rost, der
            unverkennbare Duft knusprig frittierter Fritten und hausgemachte
            Currysaucen.
          </p>
        </div>

        {/* ── Bright Cinema Stage Showcase Slider ── */}
        <div
          className="relative w-full h-[420px] sm:h-[560px] lg:h-[680px] rounded-3xl overflow-hidden border border-[#FBDDE7]/30 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(251,221,231,0.08)] bg-[#17181D]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides */}
          {slides.map((slide, idx) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                style={{ filter: 'brightness(1) contrast(1.02)' }}
              />
            </div>
          ))}

          {/* Bottom gradient overlay (only bottom 35%) */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#121316]/95 via-[#121316]/50 to-transparent z-10 pointer-events-none" />

          {/* Floating Frosted Glass Caption */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-auto sm:max-w-[780px] z-20 bg-[#121316]/80 backdrop-blur-xl border border-[#FBDDE7]/25 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-3">
            <span className="font-mono text-[11px] tracking-wider text-[#FBDDE7] uppercase bg-[#FBDDE7]/10 border border-[#FBDDE7]/20 px-3 py-1 rounded-full w-fit">
              {slides[current].tag}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white">
              {slides[current].title}
            </h3>
            <p className="text-sm sm:text-base text-[#FBDDE7]/80 leading-relaxed font-sans">
              {slides[current].description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full font-mono text-[11px] tracking-wider bg-[#FBDDE7] text-[#121316] font-semibold hover:bg-white transition-all shadow-lg"
              >
                JETZT CATERING PLANEN ›
              </button>
              <Link
                href="#speisekarte"
                className="px-5 py-2.5 rounded-full font-mono text-[11px] tracking-wider border border-[#FBDDE7]/20 text-[#FBDDE7] hover:bg-[#FBDDE7]/10 transition-all"
              >
                SPEISEKARTE ANSEHEN
              </Link>
            </div>
          </div>
        </div>

        {/* ── Slider Controls Bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.tabLabel}
                onClick={() => setCurrent(idx)}
                className={`font-mono text-[11px] tracking-wider px-4 py-2 rounded-full border transition-all ${
                  idx === current
                    ? 'bg-[#FBDDE7] text-[#121316] border-[#FBDDE7] font-semibold shadow-[0_0_15px_rgba(251,221,231,0.3)]'
                    : 'bg-[#18191E]/80 text-[#FBDDE7]/60 border-[#FBDDE7]/15 hover:border-[#FBDDE7] hover:text-[#FBDDE7]'
                }`}
              >
                {s.tabLabel}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-[#FBDDE7]/20 bg-[#18191E]/80 text-[#FBDDE7] hover:bg-[#FBDDE7] hover:text-[#121316] flex items-center justify-center transition-all"
              aria-label="Vorheriges Bild"
            >
              ←
            </button>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-[#FBDDE7]/20 bg-[#18191E]/80 text-[#FBDDE7] hover:bg-[#FBDDE7] hover:text-[#121316] flex items-center justify-center transition-all"
              aria-label="Nächstes Bild"
            >
              →
            </button>
          </div>
        </div>

        {/* ── Quick Info Banner ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-[#18191E] border border-[#FBDDE7]/15 flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/fingerprint-heart.svg"
              alt="Tactile Heart"
              className="w-12 h-12 flex-shrink-0"
            />
            <div>
              <h4 className="font-display text-base text-[#FBDDE7] mb-0.5">
                100% Handwerk &amp; Frische
              </h4>
              <p className="font-mono text-[11px] text-[#FBDDE7]/50">
                Live-Cooking vor den Augen deiner Gäste – kein
                Convenience-Buffet.
              </p>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-[#18191E] border border-[#FBDDE7]/15 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FBDDE7]/10 border border-[#FBDDE7]/20 flex items-center justify-center text-[#FBDDE7] text-xl flex-shrink-0">
              ✦
            </div>
            <div>
              <h4 className="font-display text-base text-[#FBDDE7] mb-0.5">
                Autarke Foodtruck-Flotte
              </h4>
              <p className="font-mono text-[11px] text-[#FBDDE7]/50">
                Frittenherz I &amp; II: Flexibel einsetzbar von 50 bis 1.000+
                Gästen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
