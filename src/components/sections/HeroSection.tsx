import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { Award, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      
      {/* BACKGROUND IMAGE WITH SLOW PARALLAX & DARK BURGUNDY OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home-entrance.jpg"
          alt="Adithya Central Royal Entrance & Banquet Experience"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Balanced Dark Gradient Overlay for high image visibility & clean text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/45 to-[#140407]/60"></div>
      </div>

      {/* HERO MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-ivory flex flex-col items-center">
        
        {/* OFFICIAL ROYAL LOGO EMBLEM */}
        <div className="mb-5 p-1.5 rounded-full bg-gradient-to-tr from-gold via-gold-light to-gold-dark shadow-2xl animate-fade-in hover:scale-105 transition-transform duration-500">
          <img
            src="/images/logo.png"
            alt="Adithya Central Official Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-full bg-ivory p-1 border-2 border-gold shadow-inner"
          />
        </div>

        {/* SMALL GOLD EYEBROW TEXT */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1D060C]/90 border border-gold/60 text-gold text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 animate-fade-in shadow-2xl backdrop-blur-md">
          <Award className="w-4 h-4 text-gold shrink-0" />
          <span>12+ YEARS OF HOSPITALITY & 20,000+ CATERINGS</span>
        </div>

        {/* MAIN HEADING */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ivory drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] animate-fade-up leading-tight">
          Celebrations Designed With <br />
          <span className="italic text-gold font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Taste & Distinction.</span>
        </h1>

        {/* SUPPORTING TEXT */}
        <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-ivory-cream font-normal leading-relaxed mt-6 mb-8 animate-fade-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Adithya Central delivers premier hospitality with <strong className="text-gold font-semibold">Hotel Adhitya Central</strong> (Restaurant & Catering), alongside our luxury Kalyana Mandapams — <strong className="text-gold font-semibold">Aarna Banquets & Cuisines</strong> and <strong className="text-gold font-semibold">Achyutha Banquets & Cuisines</strong>.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md animate-fade-up">
          <Button
            to="/banquets"
            variant="gold"
            size="lg"
            showArrow
            className="w-full sm:w-auto shadow-2xl"
          >
            EXPLORE VENUES
          </Button>
          <Button
            to="/catering"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            CATERING SERVICES
          </Button>
        </div>

      </div>

      {/* SCROLL DOWN INDICATOR */}
      <a
        href="#about-preview"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/70 hover:text-gold transition-colors p-2 animate-bounce hidden sm:block"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>

    </section>
  );
}
