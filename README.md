# 🍟 FrittenHerz — Next.js Redesign

Redesign der [frittenherz.de](https://www.frittenherz.de/) im Death-to-Robots-Designsystem.

## ⚡ Schnellstart (Lokal)

```bash
cd nextjs-frittenherz
npm install
npm run dev
```

Dann → [http://localhost:3000](http://localhost:3000)

## 🚀 Vercel Deployment

### Option 1: Über das Vercel Dashboard
1. Push diesen Ordner `nextjs-frittenherz/` in ein **GitHub-Repository**
2. Gehe zu [vercel.com/new](https://vercel.com/new)
3. Importiere das Repository
4. **Root Directory** auf `nextjs-frittenherz` setzen (falls es in einem Unterordner liegt)
5. **Framework Preset**: Next.js (wird automatisch erkannt)
6. Klick → **Deploy**

### Option 2: Vercel CLI
```bash
npm i -g vercel
cd nextjs-frittenherz
vercel
```

## 📁 Projektstruktur

```
nextjs-frittenherz/
├── app/
│   ├── globals.css          # Design Tokens, Marquee-Animationen, Slider-Styles
│   ├── layout.tsx           # Root Layout + Google Fonts via <link>
│   └── page.tsx             # Hauptseite mit allen Sektionen
├── components/
│   ├── Navbar.tsx            # Sticky Glassmorphism Navbar + Drawer
│   ├── HeroSlider.tsx        # Cinema-Stage Slider (100% Bright)
│   ├── Marquee.tsx           # Infinite Scroll Ticker
│   ├── Fuhrpark.tsx          # Foodtruck-Karten Slider
│   ├── Manifesto.tsx         # Editorial Quote Sektion
│   ├── Pillars.tsx           # 3-Säulen Bento Grid
│   ├── MenuSection.tsx       # Interaktive Speisekarte mit Filter
│   ├── CateringCalculator.tsx# Event-Kalkulator
│   ├── JobsSection.tsx       # Recruiting Card
│   ├── Footer.tsx            # Typographic CTA + 4-Spalten Footer
│   └── BookingModal.tsx      # Event-Anfrage Formular Modal
├── public/assets/            # Bilder, SVGs
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Design System

| Token | Wert |
|-------|------|
| Background | `#121316` |
| Surface | `#18191E` |
| Card | `#1F2027` |
| Pink Primary | `#FBDDE7` |
| Display Font | Faculty Glyphic |
| Editorial Font | Libre Caslon Text (italic) |
| Mono Font | Fragment Mono |
| Body Font | Inter |

## 📝 Hinweise

- **Schriften**: Faculty Glyphic, Libre Caslon Text und Fragment Mono werden über Google Fonts `<link>` Tags geladen (nicht via `next/font`), da `next/font` bei Faculty Glyphic Build-Fehler verursacht
- **Bilder**: Werden unoptimiert ausgeliefert (`images.unoptimized: true`) — für Produktion ggf. Next.js Image Optimization aktivieren
- **Externe Bilder**: Fuhrpark-Bilder werden direkt von frittenherz.de geladen
