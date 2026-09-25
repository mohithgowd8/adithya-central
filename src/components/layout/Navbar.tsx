import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ChevronRight, MessageSquare } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes & lock body scroll when open
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Catering', path: '/catering' },
    { name: 'Banquets', path: '/banquets' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const useTransparentHeroNav = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          useTransparentHeroNav
            ? 'bg-gradient-to-b from-[#140407]/95 via-[#140407]/75 to-transparent py-4 text-ivory border-b border-gold/25 shadow-xl backdrop-blur-[6px]'
            : 'glass-nav-scrolled py-3 text-burgundy-deep border-b border-gold/30 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Official Logo Badge & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-gold via-gold-light to-gold-dark shadow-md transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo.png"
                alt="Adithya Central Logo"
                className="w-11 h-11 sm:w-13 sm:h-13 object-contain rounded-full bg-white p-0.5 border border-ivory"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg sm:text-2xl font-bold tracking-tight leading-tight ${
                  useTransparentHeroNav ? 'text-ivory drop-shadow-md' : 'text-burgundy-deep'
                }`}
              >
                ADITHYA CENTRAL
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-gold font-semibold drop-shadow-sm">
                PARADISE IN YOUR DINE
              </span>
            </div>
          </Link>

          {/* CENTER / RIGHT: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-xs uppercase tracking-[0.18em] font-semibold transition-colors py-1 ${
                    isActive
                      ? 'text-gold'
                      : useTransparentHeroNav
                      ? 'text-ivory-cream/90 hover:text-gold'
                      : 'text-charcoal-dark hover:text-burgundy'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full shadow-sm animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Primary Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                to="/contact"
                variant={useTransparentHeroNav ? 'gold' : 'primary'}
                size="sm"
              >
                ENQUIRE NOW
              </Button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-lg border focus:outline-none transition-all shadow-sm ${
                useTransparentHeroNav
                  ? 'bg-burgundy/80 text-gold border-gold/40 hover:bg-gold hover:text-burgundy-dark'
                  : 'bg-ivory-cream text-burgundy-deep border-gold/30 hover:bg-burgundy hover:text-gold'
              }`}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN SOLID ROYAL MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#150407] text-ivory flex flex-col justify-between overflow-y-auto animate-fade-in">
          {/* Mobile Header Bar */}
          <div className="px-5 py-4 border-b border-gold/30 flex items-center justify-between bg-[#1F070C] shadow-lg sticky top-0 z-10">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
              <div className="p-0.5 rounded-full bg-gradient-to-tr from-gold to-gold-dark shadow-md">
                <img
                  src="/images/logo.png"
                  alt="Adithya Central Logo"
                  className="w-10 h-10 object-contain rounded-full bg-white p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-tight text-ivory">
                  ADITHYA CENTRAL
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-gold font-semibold">
                  PARADISE IN YOUR DINE
                </span>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-gold/20 text-gold border border-gold/40 hover:bg-gold hover:text-burgundy-dark transition-all shadow-md"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="px-6 py-6 space-y-3 flex-1">
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold/70 font-semibold mb-2">
              MAIN NAVIGATION
            </div>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3.5 px-4 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-between border ${
                    isActive
                      ? 'bg-gold/20 text-gold border-gold shadow-lg font-bold'
                      : 'bg-[#210910] text-ivory-cream/90 border-gold/20 hover:bg-gold/10 hover:text-gold hover:border-gold/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-gold shadow-md' : 'bg-gold/40'}`}></span>
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-gold/50'}`} />
                </Link>
              );
            })}
          </div>

          {/* Bottom Actions & Contact Info */}
          <div className="p-6 border-t border-gold/30 bg-[#1A0509] space-y-3">
            <Button
              to="/contact"
              variant="gold"
              size="md"
              className="w-full justify-center shadow-xl text-sm tracking-widest font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              ENQUIRE & BOOK VENUE
            </Button>
            <a
              href="tel:7997888869"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold/10 border border-gold/30 text-gold text-xs font-semibold hover:bg-gold hover:text-burgundy-dark transition-all"
            >
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span>Call: +91 79978 88869</span>
            </a>
            <a
              href="https://wa.me/917997888869?text=Hello%20Hotel%20Adhitya%20Central,%20I%20would%20like%20to%20enquire."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold tracking-wider transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 shrink-0 fill-white" />
              <span>WhatsApp: +91 79978 88869</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
