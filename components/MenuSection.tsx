'use client';

import React, { useState } from 'react';

/* ── Data Types ─────────────────────────────────────────────── */
interface MenuItem {
  name: string;
  price: string;
  description: string;
  category: string;
  allergens?: string;
  popular?: boolean;
}

/* ── Menu Items ─────────────────────────────────────────────── */
const categories = [
  'ALLE',
  'FRITTEN',
  'WURST',
  'BURGER',
  'HOLLÄNDISCH',
  'SAUCEN & EXTRAS',
  'GETRÄNKE',
];

const menuItems: MenuItem[] = [
  {
    name: 'Belgische Fritten',
    price: '4,50 €',
    description:
      'Dicke Pommes im belgischen Schnitt, doppelt frittiert bis zur goldbraunen Perfektion. Mit einer Sauce nach Wahl.',
    category: 'FRITTEN',
    allergens: 'Glutenfrei, kann Spuren von Senf enthalten',
    popular: true,
  },
  {
    name: 'Loaded Chili Cheese Fries',
    price: '7,90 €',
    description:
      'Unsere knusprigen Fritten getoppt mit heisser Käsesauce, Jalapeños, Chili con Carne und frischen Frühlingszwiebeln.',
    category: 'FRITTEN',
    allergens: 'Enthält Milch, Gluten, kann Spuren von Sellerie enthalten',
  },
  {
    name: 'Currywurst Classic',
    price: '5,50 €',
    description:
      'Knackige Bratwurst vom Grill, geschnitten und serviert mit unserer hausgemachten, würzig-fruchtigen Currysauce und edlem Currypulver.',
    category: 'WURST',
    allergens: 'Enthält Gluten, Senf',
    popular: true,
  },
  {
    name: 'Krakauer Spezial',
    price: '5,90 €',
    description:
      'Herzhafte Krakauer Wurst vom Rost, dazu unsere Signature-Sauce und frische Zwiebeln.',
    category: 'WURST',
    allergens: 'Enthält Gluten, Senf, Sellerie',
  },
  {
    name: 'Schaschlik Hausgemacht',
    price: '6,90 €',
    description:
      'Zartes Schweinefleisch am Spiess mit Paprika und Zwiebeln, serviert mit unserer hauseigenen Schaschlik-Sauce.',
    category: 'WURST',
    allergens: 'Enthält Sellerie, Senf, Gluten',
  },
  {
    name: 'Gourmet Cheeseburger',
    price: '8,50 €',
    description:
      'Saftiges 180g Rindfleisch-Patty, Cheddar, Eisbergsalat, Tomate, rote Zwiebel, Gurke und unsere spezielle Burger-Sauce im Brioche-Bun.',
    category: 'BURGER',
    allergens: 'Enthält Gluten, Milch, Ei, Sesam, Senf',
    popular: true,
  },
  {
    name: 'Veggie Burger Deluxe',
    price: '8,50 €',
    description:
      'Knuspriges Plant-Based Patty, veganer Käse, Rucola, gegrillte Paprika, Avocado-Creme und BBQ-Sauce im Vollkorn-Bun.',
    category: 'BURGER',
    allergens: 'Enthält Gluten, Soja, Sesam',
  },
  {
    name: 'Frikandel Speciaal',
    price: '4,90 €',
    description:
      'Original holländische Frikandel mit Mayo, Curry-Ketchup und fein gehackten Zwiebeln. Ein Klassiker aus den Niederlanden.',
    category: 'HOLLÄNDISCH',
    allergens: 'Enthält Gluten, Ei, Milch, Sellerie',
  },
  {
    name: 'Bami Scheibe',
    price: '4,50 €',
    description:
      'Knusprig gebackene Bami-Scheibe — die holländische Spezialität mit würzigem Nudel-Gemüse-Kern.',
    category: 'HOLLÄNDISCH',
    allergens: 'Enthält Gluten, Ei, Soja, Sellerie',
  },
  {
    name: 'Hausgemachte Currysauce',
    price: '1,50 €',
    description:
      'Unsere Geheimrezeptur — würzig-fruchtig mit einer leichten Schärfe. Perfekt zu allem.',
    category: 'SAUCEN & EXTRAS',
    allergens: 'Kann Spuren von Sellerie und Senf enthalten',
  },
  {
    name: 'Sauce nach Wahl',
    price: '0,80 €',
    description:
      'Mayo, Ketchup, Andalouse, Joppie, Samurai, Knoblauch oder Trueffel-Mayo.',
    category: 'SAUCEN & EXTRAS',
    allergens: 'Enthält Ei (Mayo-Varianten), Senf',
  },
  {
    name: 'Softdrinks',
    price: '2,50 €',
    description:
      'Cola, Fanta, Sprite, Wasser (still/medium) — gut gekühlt, 0,33L Dose.',
    category: 'GETRÄNKE',
  },
  {
    name: 'Fritz-Kola / Fritz-Limo',
    price: '3,00 €',
    description:
      'Die Kultmarke aus Hamburg — Fritz-Kola, Zitrone oder Apfel-Kirsch-Holunder. 0,33L Glasflasche.',
    category: 'GETRÄNKE',
  },
];

/* ── Allergen Info ──────────────────────────────────────────── */
const allergenInfo = [
  'Glutenhaltiges Getreide (Weizen, Roggen, Gerste)',
  'Milch und Milcherzeugnisse (einschl. Laktose)',
  'Eier und Eierzeugnisse',
  'Soja und Sojaerzeugnisse',
  'Senf und Senferzeugnisse',
  'Sellerie und Sellerieerzeugnisse',
  'Sesamsamen und Sesamerzeugnisse',
];

export default function MenuSection() {
  const [activeFilter, setActiveFilter] = useState('ALLE');
  const [allergenOpen, setAllergenOpen] = useState(false);

  const filtered =
    activeFilter === 'ALLE'
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <section id="speisekarte" className="py-24 bg-[#121316]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        {/* Section Tag */}
        <div className="flex mb-6">
          <span className="font-mono text-xs tracking-widest text-[#FBDDE7]/50 uppercase px-4 py-1.5 rounded-full border border-[#FBDDE7]/10 bg-[#18191E]/60">
            [ 04 — SPEISEKARTE ]
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FBDDE7] tracking-tight mb-4">
          Was auf den Teller kommt.
        </h2>
        <p className="text-base text-[#FBDDE7]/50 mb-10 max-w-[600px]">
          Alle Gerichte werden frisch vor Ort zubereitet. Preise sind Event-Richtpreise
          und können je nach Veranstaltungsgrösse variieren.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-xs tracking-wider px-4 py-2 rounded-full border transition-all ${
                activeFilter === cat
                  ? 'bg-[#FBDDE7] text-[#121316] border-[#FBDDE7] font-semibold shadow-[0_0_15px_rgba(251,221,231,0.2)]'
                  : 'bg-[#18191E] text-[#FBDDE7]/60 border-[#FBDDE7]/15 hover:border-[#FBDDE7] hover:text-[#FBDDE7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="bg-[#1F2027] border border-[#FBDDE7]/14 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#FBDDE7]/30 transition-all group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {item.popular && (
                      <span className="font-mono text-[10px] tracking-wider text-amber-400 px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                        BELIEBT
                      </span>
                    )}
                    <span className="font-mono text-[10px] tracking-wider text-[#FBDDE7]/30 uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-white group-hover:text-[#FBDDE7] transition-colors">
                    {item.name}
                  </h3>
                </div>
                <span className="font-mono text-sm text-[#FBDDE7] font-semibold flex-shrink-0 px-3 py-1 rounded-full bg-[#FBDDE7]/10 border border-[#FBDDE7]/15">
                  {item.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#FBDDE7]/50 leading-relaxed">
                {item.description}
              </p>

              {/* Allergens */}
              {item.allergens && (
                <p className="font-mono text-[10px] text-[#FBDDE7]/25 leading-relaxed pt-1 border-t border-[#FBDDE7]/8">
                  ⚠ {item.allergens}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Allergen Accordion */}
        <div className="mt-10 bg-[#18191E] border border-[#FBDDE7]/14 rounded-2xl overflow-hidden">
          <button
            onClick={() => setAllergenOpen(!allergenOpen)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#1F2027] transition-colors"
          >
            <span className="font-mono text-xs tracking-widest text-[#FBDDE7]/50 uppercase">
              ALLERGEN-INFORMATIONEN & HINWEISE
            </span>
            <span
              className={`text-[#FBDDE7]/50 transition-transform ${
                allergenOpen ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
          {allergenOpen && (
            <div className="px-6 pb-5 border-t border-[#FBDDE7]/10">
              <p className="text-sm text-[#FBDDE7]/40 mt-4 mb-3">
                Folgende Allergene können in unseren Speisen enthalten sein:
              </p>
              <ul className="space-y-2">
                {allergenInfo.map((info, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-mono text-xs text-[#FBDDE7]/40"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#1F2027] border border-[#FBDDE7]/10 flex items-center justify-center text-[10px] text-[#FBDDE7]/30 flex-shrink-0">
                      {i + 1}
                    </span>
                    {info}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-[10px] text-[#FBDDE7]/25 mt-4 leading-relaxed">
                Alle Angaben ohne Gewähr. Bitte sprechen Sie uns bei Allergien oder
                Unverträglichkeiten direkt an — wir beraten Sie gerne persönlich.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
