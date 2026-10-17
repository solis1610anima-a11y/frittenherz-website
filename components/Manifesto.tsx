import React from 'react';

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-24 bg-[#121316] overflow-hidden"
    >
      {/* Fingerprint Heart Watermark */}
      <img
        src="/assets/fingerprint-heart.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] pointer-events-none select-none"
      />

      <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center relative z-10">
        {/* Section Tag */}
        <div className="flex justify-center mb-10">
          <span className="font-mono text-xs tracking-widest text-[#FBDDE7]/50 uppercase px-4 py-1.5 rounded-full border border-[#FBDDE7]/10 bg-[#18191E]/60">
            [ 02 — DAS MANIFEST ]
          </span>
        </div>

        {/* Blockquote */}
        <blockquote className="mb-10">
          <p className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-white/90 leading-relaxed">
            &bdquo;Kein Roboter der Welt kann das ersetzen, was aus echter
            Leidenschaft und Liebe zum Handwerk entsteht. Das zischende Brutzeln
            auf dem Rost, der unverkennbare Duft knusprig frittierter Fritten
            und der Moment, wenn unsere hausgemachte Currysauce über eine
            perfekt gegrillte Wurst fliesst.&ldquo;
          </p>
        </blockquote>

        {/* Dialogue */}
        <p className="text-base sm:text-lg text-[#FBDDE7]/60 leading-relaxed max-w-[720px] mx-auto">
          Ein Roboter kennt keine Leidenschaft. Er kennt keine schlaflose Nacht
          vor dem Grossevent, keinen Stolz, wenn hunderte Gäste begeistert
          applaudieren, und keinen Ehrgeiz, die perfekte Sauce zu kreieren.
          FrittenHerz steht für echtes Handwerk, für Menschen die anpacken,
          die schmecken und fühlen — und die wissen, dass der beste Geschmack
          aus dem Herzen kommt.
        </p>

        {/* Decorative divider */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-[#FBDDE7]/20" />
          <span className="text-[#FBDDE7]/30 text-sm">♥</span>
          <span className="w-8 h-px bg-[#FBDDE7]/20" />
        </div>
      </div>
    </section>
  );
}
