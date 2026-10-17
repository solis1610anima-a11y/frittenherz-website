'use client';

import React from 'react';

const foodItems = [
  'BELGISCHE FRITTEN SPEZIAL',
  'HAUSGEMACHTE CURRYSAUCE',
  'KRAKAUER & BRATWURST',
  'CHILLI CHEESE SPECIALS',
  'HOLLAENDISCHE FRIKANDELLEN & BAMI',
  'GOURMET CHEESEBURGER',
  'VEGGIE BURGER SPECIALS',
  'HAUSGEMACHTES SCHASCHLIK',
];

const referenceItems = [
  'REFERENZEN: VERDI AACHEN',
  'FEUERWEHR AACHEN',
  'JUNGENSPIEL MARKT-PRECK',
  'JUNGENSPIEL WEIDEN',
  'DIVERSES SCHUETZENFESTE NRW',
  'HOCHZEITEN & POLTERABENDE',
  'BETRIEBSFEIERN & JUBILAEEN',
];

function MarqueeRow({
  items,
  separator,
  reverse = false,
  muted = false,
  bgClass = 'bg-[#121316]',
}: {
  items: string[];
  separator: string;
  reverse?: boolean;
  muted?: boolean;
  bgClass?: string;
}) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-6 whitespace-nowrap">
      <span
        className={`font-display text-sm sm:text-base tracking-widest uppercase ${
          muted ? 'text-[#FBDDE7]/30' : 'text-[#FBDDE7]/70'
        }`}
      >
        {item}
      </span>
      <span
        className={`text-xs ${muted ? 'text-[#FBDDE7]/20' : 'text-[#FBDDE7]/40'}`}
      >
        {separator}
      </span>
    </span>
  ));

  return (
    <div
      className={`w-full overflow-hidden border-t border-[#FBDDE7]/10 ${bgClass}`}
    >
      <div
        className={`py-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        <div className="flex items-center gap-6 pr-6">
          {content}
        </div>
        <div className="flex items-center gap-6 pr-6">
          {content}
        </div>
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div>
      <MarqueeRow items={foodItems} separator="✦" />
      <MarqueeRow
        items={referenceItems}
        separator="★"
        reverse
        muted
        bgClass="bg-[#0e0f12]"
      />
    </div>
  );
}
