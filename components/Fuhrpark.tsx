'use client';

import React, { useRef } from 'react';
import Link from 'next/link';

interface FuhrparkCard {
  title: string;
  subtitle: string;
  image: string;
  unit: string;
  description: string;
  tags: string[];
  link?: { label: string; href: string };
  status: string;
  statusColor: string;
}

const cards: FuhrparkCard[] = [
  {
    title: 'Frittenherz I',
    subtitle: 'FLAGGSCHIFF-TRAILER',
    image:
      'https://www.frittenherz.de/images/frittenherz/fuhrpark/frittenherz1/fuhrpark_frittenherz_I.png',
    unit: 'EINHEIT 01 | 50–400 GÄSTE',
    description:
      'Unser Premium-Trailer für Hochzeiten, Firmenfeiern und private Events. Kompakte Stellmasse, autarke Versorgung und High-Speed-Ausgabe für bis zu 400 Gäste.',
    tags: ['Starkstrom 16A/32A', 'Kompakte Stellmasse', 'High-Speed Ausgabe'],
    link: { label: 'TRAILER ANFRAGEN', href: '#calculator' },
    status: 'EINSATZBEREIT',
    statusColor: 'bg-emerald-400',
  },
  {
    title: 'Frittenherz II',
    subtitle: 'FESTIVAL & GROSSEVENTS',
    image:
      'https://www.frittenherz.de/images/frittenherz/fuhrpark/frittenherz2/fuhrpark_frittenherz_ii.png',
    unit: 'EINHEIT 02 | 200–1000+ GÄSTE',
    description:
      'Unsere Grossraum-Einheit für Stadtfeste, Festivals und Grossveranstaltungen. Doppelte Ausgabe-Kapazität mit Industrie-Fritteusen für höchste Taktung.',
    tags: ['Doppel-Ausgabe', 'Industrie-Fritteusen', 'Festival-Taktung'],
    status: 'EINSATZBEREIT',
    statusColor: 'bg-emerald-400',
  },
  {
    title: 'Catering mit Herz',
    subtitle: 'FULL-SERVICE EVENT',
    image:
      'https://www.frittenherz.de/images/frittenherz/catering/frittenherz_Catering.png',
    unit: 'CATERING-KONZEPT | ALL-INCLUSIVE',
    description:
      'Live-Cooking direkt bei euch vor Ort. Wir bringen alles mit: Equipment, Personal, frische Zutaten und das unverwechselbare FrittenHerz-Erlebnis. Fliessendes Servieren ohne Geschirrstapel.',
    tags: ['Live-Cooking', 'Fliessendes Servieren', 'Kein Geschirrstapel'],
    status: 'BELIEBT',
    statusColor: 'bg-amber-400',
  },
  {
    title: 'Signature Dishes',
    subtitle: 'DIE KLASSIKER',
    image:
      'https://www.frittenherz.de/images/frittenherz/slider/currywurst_pommes_n.jpg',
    unit: 'GESCHMACK | HAUSGEMACHT',
    description:
      'Unsere hausgemachte Currysauce, belgische Fritten im dicken Schnitt und knackige Bratwürste vom Grill — die Klassiker, die unsere Gäste lieben.',
    tags: ['Original Saucen', 'Belgischer Schnitt', 'Frisch & Knusprig'],
    link: { label: 'SPEISEKARTE', href: '#speisekarte' },
    status: 'SIGNATURE',
    statusColor: 'bg-[#FBDDE7]',
  },
];

export default function Fuhrpark() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 440;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="fuhrpark" className="py-24 bg-[#121316]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        {/* Section Tag */}
        <div className="flex mb-6">
          <span className="font-mono text-xs tracking-widest text-[#FBDDE7]/50 uppercase px-4 py-1.5 rounded-full border border-[#FBDDE7]/10 bg-[#18191E]/60">
            [ 01 — DER FUHRPARK & CATERING ]
          </span>
        </div>

        {/* Title + Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FBDDE7] tracking-tight">
              Unsere Einheiten im Einsatz.
            </h2>
            <p className="text-base text-[#FBDDE7]/50 mt-3 max-w-[600px]">
              Zwei voll ausgestattete Foodtrucks und ein maßgeschneidertes
              Catering-Konzept — einsatzbereit für Events von 50 bis 1.000+ Gästen
              in ganz NRW.
            </p>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-[#FBDDE7]/20 bg-[#18191E] text-[#FBDDE7] hover:bg-[#FBDDE7] hover:text-[#121316] flex items-center justify-center transition-all"
              aria-label="Zurück scrollen"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-[#FBDDE7]/20 bg-[#18191E] text-[#FBDDE7] hover:bg-[#FBDDE7] hover:text-[#121316] flex items-center justify-center transition-all"
              aria-label="Weiter scrollen"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin"
          style={{ scrollbarWidth: 'thin' }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="min-w-[340px] sm:min-w-[420px] flex-shrink-0 snap-start bg-[#1F2027] border border-[#FBDDE7]/14 rounded-2xl overflow-hidden group hover:border-[#FBDDE7]/30 transition-all"
            >
              {/* Image */}
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Status badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121316]/80 backdrop-blur-md border border-[#FBDDE7]/15">
                  <span
                    className={`w-2 h-2 rounded-full ${card.statusColor} ${
                      card.status === 'EINSATZBEREIT' ? 'animate-pulse' : ''
                    }`}
                  />
                  <span className="font-mono text-[10px] tracking-wider text-[#FBDDE7]">
                    {card.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                {/* Subtitle */}
                <span className="font-mono text-[10px] tracking-widest text-[#FBDDE7]/40 uppercase">
                  {card.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-display text-2xl text-white">
                  {card.title}
                </h3>

                {/* Unit */}
                <span className="font-mono text-xs tracking-wider text-[#FBDDE7]/50">
                  {card.unit}
                </span>

                {/* Description */}
                <p className="text-sm text-[#FBDDE7]/50 leading-relaxed">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider text-[#FBDDE7]/50 px-2.5 py-1 rounded-full border border-[#FBDDE7]/10 bg-[#121316]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {card.link && (
                  <Link
                    href={card.link.href}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-[#FBDDE7] hover:text-white mt-2 transition-colors"
                  >
                    {card.link.label}
                    <span>→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
