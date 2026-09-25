import { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3.5 pointer-events-auto">
      
      {/* Official WhatsApp Floating Badge - Matched 56px Diameter */}
      <a
        href="https://wa.me/917997888869?text=Hello%20Hotel%20Adhitya%20Central,%20I%20would%20like%20to%20enquire%20about%20catering%20and%20banquet%20booking."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white group shrink-0"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75"></span>
        <WhatsAppIcon className="w-8 h-8 fill-white relative z-10" />
        {/* Tooltip on Desktop */}
        <span className="hidden sm:block absolute right-16 bg-emerald-950 text-emerald-100 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-bold shadow-xl border border-emerald-600 pointer-events-none">
          WhatsApp: +91 79978 88869
        </span>
      </a>

      {/* Direct Phone Call Badge - Matched 56px Diameter */}
      <a
        href="tel:7997888869"
        aria-label="Call Adithya Central"
        className="w-14 h-14 rounded-full bg-burgundy hover:bg-burgundy-deep text-gold flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-gold group shrink-0"
      >
        <Phone className="w-7 h-7 text-gold" />
        {/* Tooltip on Desktop */}
        <span className="hidden sm:block absolute right-16 bg-burgundy-dark text-gold text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-bold shadow-xl border border-gold/40 pointer-events-none">
          Call: +91 79978 88869
        </span>
      </a>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-ivory text-burgundy hover:bg-gold hover:text-burgundy-deep border border-gold/40 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
