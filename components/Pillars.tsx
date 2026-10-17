import React from 'react';

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  formula: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'HANDWERK',
    subtitle: 'Erfahrung & Leidenschaft',
    formula: 'FRISCHE ZUTATEN × BELGISCHER SCHNITT = KNUSPRIGE PERFEKTION',
    description:
      'Seit 2019 perfektionieren wir das Frittier-Handwerk. Jede Portion wird live vor den Augen unserer Gäste zubereitet — mit ausgewählten Kartoffeln, hauseigenen Saucen und dem unverwechselbaren FrittenHerz-Schnitt.',
  },
  {
    number: '02',
    title: 'ORGANISATION',
    subtitle: 'Perfekte Regie',
    formula: 'LOGISTIK + ERFAHRUNG + TIMING = REIBUNGSLOSER ABLAUF',
    description:
      'Vom ersten Beratungsgespräch bis zur letzten Portion: Wir planen jedes Event minutiös. Autarke Stromversorgung, optimierte Laufwege und ein eingespieltes Team garantieren einen stressfreien Ablauf für jeden Gastgeber.',
  },
  {
    number: '03',
    title: 'MENSCHLICHKEIT',
    subtitle: 'Echte Verbindung',
    formula: 'HERZ + HUMOR + HINGABE = UNVERGESSLICHE MOMENTE',
    description:
      'Wir sind mehr als ein Catering-Service. Wir sind Gastgeber mit Herz. Unser Team bringt Wärme, Humor und echte Begeisterung mit — denn die beste Zutat ist immer der menschliche Touch.',
  },
];

export default function Pillars() {
  return (
    <section className="py-24 bg-[#121316]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        {/* Section Tag */}
        <div className="flex mb-6">
          <span className="font-mono text-xs tracking-widest text-[#FBDDE7]/50 uppercase px-4 py-1.5 rounded-full border border-[#FBDDE7]/10 bg-[#18191E]/60">
            [ 03 — UNSERE DREI GRUNDSAETZE ]
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FBDDE7] tracking-tight mb-16">
          Wie wir Geschmack definieren.
        </h2>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#18191E] border border-[#FBDDE7]/14 rounded-2xl p-8 min-h-[380px] flex flex-col justify-between group hover:border-[#FBDDE7]/30 transition-all"
            >
              <div>
                {/* Number + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#FBDDE7]/40 px-2.5 py-1 rounded-full border border-[#FBDDE7]/10 bg-[#121316]/60">
                    {pillar.number}
                  </span>
                  <span className="font-display text-lg tracking-wider text-[#FBDDE7]">
                    {pillar.title}
                  </span>
                </div>

                {/* Subtitle */}
                <h3 className="font-display text-2xl text-white mb-4">
                  {pillar.subtitle}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#FBDDE7]/60 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Formula */}
              <div className="pt-4 border-t border-[#FBDDE7]/10">
                <p className="font-mono text-[10px] sm:text-xs tracking-wider text-[#FBDDE7]/30 uppercase leading-relaxed">
                  {pillar.formula}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
