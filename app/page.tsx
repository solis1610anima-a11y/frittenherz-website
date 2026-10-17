'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Marquee from '@/components/Marquee';
import Fuhrpark from '@/components/Fuhrpark';
import Manifesto from '@/components/Manifesto';
import Pillars from '@/components/Pillars';
import MenuSection from '@/components/MenuSection';
import CateringCalculator from '@/components/CateringCalculator';
import JobsSection from '@/components/JobsSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <Navbar onOpenBooking={openBooking} />
      <main>
        <HeroSlider onOpenBooking={openBooking} />
        <Marquee />
        <Fuhrpark />
        <Manifesto />
        <Pillars />
        <MenuSection />
        <CateringCalculator onOpenBooking={openBooking} />
        <JobsSection />
      </main>
      <Footer onOpenBooking={openBooking} />
      <BookingModal isOpen={bookingOpen} onClose={closeBooking} />
    </>
  );
}
