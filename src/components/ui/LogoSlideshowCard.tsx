import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Building2, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface LogoSlide {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  logo: string;
  link: string;
  bgImage: string;
}

const LOGO_SLIDES: LogoSlide[] = [
  {
    id: 'adhitya',
    title: 'Hotel Adhitya Central',
    subtitle: 'Fine Dining & Event Catering • Beside Balaji Theater, Eluru',
    tag: 'RESTAURANT & CATERING',
    logo: '/images/logo.png',
    link: '/restaurant',
    bgImage: '/images/home-entrance.jpg'
  },
  {
    id: 'aarna',
    title: 'Aarna Banquets & Cuisines',
    subtitle: 'Grand Kalyana Mandapam • 5th Fl. Central Plaza, Pathebada Rd, Eluru',
    tag: 'KALYANA MANDAPAM (5TH FLOOR)',
    logo: '/images/aarna-logo.png',
    link: '/banquets/arna-kalyana-vedhi',
    bgImage: '/images/aarna/aarna-hall-stage-front.jpg'
  },
  {
    id: 'achyutha',
    title: 'Achyutha Banquets & Cuisines',
    subtitle: 'Premium Kalyana Mandapam • 2nd Fl. Central Plaza, Pathebada Rd, Eluru',
    tag: 'KALYANA MANDAPAM (2ND FLOOR)',
    logo: '/images/achyutha-logo.png',
    link: '/banquets/achuta-banquet',
    bgImage: '/images/achuta/achuta-glass-entrance-view.jpg'
  }
];

export default function LogoSlideshowCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide slow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LOGO_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + LOGO_SLIDES.length) % LOGO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % LOGO_SLIDES.length);
  };

  const current = LOGO_SLIDES[currentIndex];

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/50 bg-[#150407] group">
      
      {/* BACKGROUND SLIDES */}
      {LOGO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.bgImage}
            alt={slide.title}
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Royal Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#150407] via-[#150407]/70 to-[#150407]/40"></div>
        </div>
      ))}

      {/* CONTENT OVERLAY (Z-20) */}
      <div className="relative z-20 h-full flex flex-col justify-between p-6 sm:p-10 text-center text-ivory">
        
        {/* Top Tag */}
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1D060C]/90 text-gold border border-gold/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>{current.tag}</span>
          </span>
        </div>

        {/* Center Animated Logo Emblem & Titles */}
        <div className="my-auto space-y-4 flex flex-col items-center">
          {/* Animated Logo Container */}
          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-gold via-gold-light to-gold-dark shadow-2xl transition-all duration-700 hover:scale-105">
            <img
              key={current.id}
              src={current.logo}
              alt={current.title}
              className="w-28 h-28 sm:w-36 sm:h-36 object-contain rounded-full bg-white p-2 border-2 border-ivory shadow-inner animate-fade-in"
            />
          </div>

          {/* Titles */}
          <div className="space-y-1 max-w-md">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory drop-shadow-md">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-gold-light font-medium drop-shadow-sm">
              {current.subtitle}
            </p>
          </div>

          {/* Button Link */}
          <Link
            to={current.link}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gold hover:bg-gold-light text-burgundy-dark font-extrabold text-xs uppercase tracking-wider shadow-xl transition-all hover:scale-105 mt-2"
          >
            {current.id === 'adhitya' ? <Utensils className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
            <span>EXPLORE {current.title.toUpperCase()}</span>
          </Link>
        </div>

        {/* Bottom Slide Dots & Controls */}
        <div className="flex items-center justify-between pt-2 border-t border-gold/30">
          <button
            onClick={handlePrev}
            aria-label="Previous logo"
            className="p-2 rounded-full bg-burgundy/80 hover:bg-gold text-gold hover:text-burgundy-dark border border-gold/40 transition-all shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {LOGO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-gold/40 hover:bg-gold/70'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next logo"
            className="p-2 rounded-full bg-burgundy/80 hover:bg-gold text-gold hover:text-burgundy-dark border border-gold/40 transition-all shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </div>
  );
}
