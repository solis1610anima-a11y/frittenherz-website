'use client';

import React, { useState, useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    location: '',
    message: '',
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Vielen Dank, ${formData.name}! Ihre Anfrage wurde gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.`
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      guestCount: '',
      location: '',
      message: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-[#121316] border border-[#FBDDE7]/14 text-[#FBDDE7] font-mono text-sm placeholder:text-[#FBDDE7]/30 focus:outline-none focus:border-[#FBDDE7]/40 focus:ring-1 focus:ring-[#FBDDE7]/20 transition-all';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0e0f12]/90 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[640px] max-h-[90vh] overflow-y-auto bg-[#18191E] border border-[#FBDDE7]/14 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#18191E] border-b border-[#FBDDE7]/10 px-6 sm:px-8 py-5 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl text-[#FBDDE7]">
              Event-Anfrage
            </h2>
            <p className="font-mono text-xs text-[#FBDDE7]/40 tracking-wider mt-1">
              ANTWORT INNERHALB VON 24H
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[#FBDDE7]/15 bg-[#121316] text-[#FBDDE7] hover:bg-[#FBDDE7] hover:text-[#121316] flex items-center justify-center transition-all text-lg"
            aria-label="Schliessen"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 flex flex-col gap-4">
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[10px] tracking-widest text-[#FBDDE7]/40 uppercase mb-1.5 block">
                Ihr Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Max Mustermann"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest text-[#FBDDE7]/40 uppercase mb-1.5 block">
                E-Mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="max@beispiel.de"
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Phone & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[10px] tracking-widest text-[#FBDDE7]/40 uppercase mb-1.5 block">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+49 ..."
                className={inputClasses}
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest text-[#FBDDE7]/40 uppercase mb-1.5 block">
                Event-Datum *
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Event Type & Guest Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[10px] tracking-widest text-[#FBDDE7]/40 uppercase mb-1.5 block">
                Event-Art *
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="">Bitte wählen…</option>
                <option value="hochzeit">Hochzeit</option>
                <option value="firmenfeier">Firmenfeier</option>
                <option value="festival">Festival / Stadtfest</option>
                <option value="privatfeier">Privatfeier</option>
                <option value="polterabend">Polterabend</option>
                <option value="schuetzenfest">Schützenfest</option>
                <option value="jubilaeum">Jubiläum</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-widest text-[#FBDDE7]/40 uppercase mb-1.5 block">
                Gästeanzahl *
              </label>
              <input
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="z.B. 150"
                min="10"
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="font-mono text-[10px] tracking-widest text-[#FBDDE7]/40 uppercase mb-1.5 block">
              Veranstaltungsort
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Stadt / Adresse"
              className={inputClasses}
            />
          </div>

          {/* Message */}
          <div>
            <label className="font-mono text-[10px] tracking-widest text-[#FBDDE7]/40 uppercase mb-1.5 block">
              Ihre Nachricht
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Erzählen Sie uns von Ihrem Event…"
              rows={4}
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 px-6 py-3.5 rounded-full font-mono text-sm tracking-wider bg-[#FBDDE7] text-[#121316] font-semibold hover:bg-white transition-all shadow-[0_4px_20px_rgba(251,221,231,0.25)]"
          >
            ANFRAGE ABSENDEN ›
          </button>

          {/* Privacy note */}
          <p className="font-mono text-[10px] text-[#FBDDE7]/30 text-center leading-relaxed">
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäss unserer
            Datenschutzerklärung zu. Keine Weitergabe an Dritte.
          </p>
        </form>
      </div>
    </div>
  );
}
