'use client';

import React, { useState, useMemo } from 'react';

/* ── Types ──────────────────────────────────────────────────── */
interface CateringCalculatorProps {
  onOpenBooking: () => void;
}

interface EventTypeOption {
  id: string;
  label: string;
  icon: string;
  pricePerGuest: number;
}

/* ── Event Types ────────────────────────────────────────────── */
const eventTypes: EventTypeOption[] = [
  { id: 'hochzeit', label: 'Hochzeit', icon: '💒', pricePerGuest: 18 },
  { id: 'firmenfeier', label: 'Firmenfeier', icon: '🏢', pricePerGuest: 16 },
  { id: 'festival', label: 'Festival', icon: '🎪', pricePerGuest: 12 },
  { id: 'privatfeier', label: 'Privatfeier', icon: '🎉', pricePerGuest: 15 },
  { id: 'polterabend', label: 'Polterabend', icon: '🥂', pricePerGuest: 14 },
  { id: 'schuetzenfest', label: 'Schützenfest', icon: '🎯', pricePerGuest: 13 },
];

export default function CateringCalculator({
  onOpenBooking,
}: CateringCalculatorProps) {
  const [selectedType, setSelectedType] = useState<string>('hochzeit');
  const [guestCount, setGuestCount] = useState(150);

  const selectedEvent = eventTypes.find((e) => e.id === selectedType)!;

  const calculation = useMemo(() => {
    const pricePerGuest = selectedEvent.pricePerGuest;
    const totalEstimate = pricePerGuest * guestCount;
    const serviceHours = guestCount <= 100 ? 4 : guestCount <= 300 ? 5 : 6;
    const recommendedUnit =
      guestCount <= 400 ? 'Frittenherz I' : 'Frittenherz I + II';
    const crewSize = guestCount <= 100 ? 2 : guestCount <= 300 ? 3 : guestCount <= 500 ? 4 : 5;

    return {
      pricePerGuest,
      totalEstimate,
      serviceHours,
      recommendedUnit,
      crewSize,
    };
  }, [selectedEvent, guestCount]);

  return (
    <section id="calculator" className="py-24 bg-[#121316]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        {/* Section Tag */}
        <div className="flex mb-6">
          <span className="font-mono text-xs tracking-widest text-[#FBDDE7]/50 uppercase px-4 py-1.5 rounded-full border border-[#FBDDE7]/10 bg-[#18191E]/60">
            [ 05 — EVENT-KALKULATOR ]
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FBDDE7] tracking-tight mb-4">
          Was kostet dein Event?
        </h2>
        <p className="text-base text-[#FBDDE7]/50 mb-12 max-w-[600px]">
          Erhalte eine unverbindliche Sofort-Schätzung für dein Catering. Wähle
          Event-Art und Gästeanzahl — wir rechnen den Rest.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Controls (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Event Type Pills */}
            <div>
              <h3 className="font-mono text-xs tracking-widest text-[#FBDDE7]/40 uppercase mb-4">
                EVENT-ART WÄHLEN
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {eventTypes.map((evt) => (
                  <button
                    key={evt.id}
                    onClick={() => setSelectedType(evt.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-left ${
                      selectedType === evt.id
                        ? 'bg-[#FBDDE7]/10 border-[#FBDDE7]/30 shadow-[0_0_20px_rgba(251,221,231,0.08)]'
                        : 'bg-[#18191E] border-[#FBDDE7]/10 hover:border-[#FBDDE7]/20'
                    }`}
                  >
                    <span className="text-2xl">{evt.icon}</span>
                    <div>
                      <span
                        className={`text-sm font-medium block ${
                          selectedType === evt.id
                            ? 'text-[#FBDDE7]'
                            : 'text-[#FBDDE7]/60'
                        }`}
                      >
                        {evt.label}
                      </span>
                      <span className="font-mono text-[10px] text-[#FBDDE7]/30">
                        AB {evt.pricePerGuest}€ / GAST
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Range Slider */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-xs tracking-widest text-[#FBDDE7]/40 uppercase">
                  GÄSTEANZAHL
                </h3>
                <span className="font-mono text-2xl text-[#FBDDE7] font-semibold">
                  {guestCount}
                </span>
              </div>
              <input
                type="range"
                min={30}
                max={1000}
                step={10}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 rounded-full bg-[#18191E] appearance-none cursor-pointer accent-[#FBDDE7] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FBDDE7] [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(251,221,231,0.4)] [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between mt-2 font-mono text-[10px] text-[#FBDDE7]/30">
                <span>30 Gäste</span>
                <span>500</span>
                <span>1.000 Gäste</span>
              </div>
            </div>
          </div>

          {/* Right: Summary Card (2 cols) */}
          <div className="lg:col-span-2">
            <div className="bg-[#18191E] border border-[#FBDDE7]/14 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 sticky top-28">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#FBDDE7] animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-[#FBDDE7]/50 uppercase">
                  SOFORT-SCHÄTZUNG
                </span>
              </div>

              {/* Price */}
              <div className="border-b border-[#FBDDE7]/10 pb-5">
                <p className="font-mono text-xs text-[#FBDDE7]/30 mb-1 tracking-wider">
                  GESCHÄTZTES GESAMTBUDGET
                </p>
                <p className="font-display text-4xl sm:text-5xl text-white tracking-tight">
                  {calculation.totalEstimate.toLocaleString('de-DE')} €
                </p>
                <p className="font-mono text-xs text-[#FBDDE7]/40 mt-1">
                  ≈ {calculation.pricePerGuest} € pro Gast
                </p>
              </div>

              {/* Details */}
              <div className="space-y-3">
                {[
                  { label: 'EVENT-ART', value: selectedEvent.label },
                  { label: 'GÄSTEANZAHL', value: `${guestCount} Personen` },
                  {
                    label: 'EMPF. EINHEIT',
                    value: calculation.recommendedUnit,
                  },
                  {
                    label: 'SERVICE-DAUER',
                    value: `ca. ${calculation.serviceHours} Stunden`,
                  },
                  {
                    label: 'TEAM-STÄRKE',
                    value: `${calculation.crewSize} Personen`,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between"
                  >
                    <span className="font-mono text-[10px] tracking-wider text-[#FBDDE7]/30 uppercase">
                      {row.label}
                    </span>
                    <span className="font-mono text-sm text-[#FBDDE7]">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={onOpenBooking}
                className="w-full mt-3 px-6 py-3.5 rounded-full font-mono text-sm tracking-wider bg-[#FBDDE7] text-[#121316] font-semibold hover:bg-white transition-all shadow-[0_4px_20px_rgba(251,221,231,0.25)]"
              >
                UNVERBINDLICH ANFRAGEN ›
              </button>

              <p className="font-mono text-[10px] text-[#FBDDE7]/25 text-center leading-relaxed">
                * Richtpreise inkl. Anfahrt bis 50km. Individuelle Angebote auf
                Anfrage. Keine Bindung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
