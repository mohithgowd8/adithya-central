import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Heart, ExternalLink } from 'lucide-react';
import { RESTAURANT_HIGHLIGHTS } from '../../data/restaurant';

export default function Footer() {
  return (
    <footer className="bg-burgundy-dark text-ivory pt-16 pb-12 border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gold/20">
          
          {/* COLUMN 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-0.5 rounded-full bg-gradient-to-tr from-gold via-gold-light to-gold-dark shadow-md shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Adithya Central Logo"
                  className="w-12 h-12 object-contain rounded-full bg-white p-0.5 border border-ivory"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-ivory">
                  ADITHYA CENTRAL
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">
                  PARADISE IN YOUR DINE
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-ivory-cream/70 leading-relaxed">
              Adithya Central presents Hotel Adhitya Central (Restaurant & Catering) and our flagship Kalyana Mandapams — Aarna Banquets & Cuisines and Achyutha Banquets & Cuisines.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/adithya_central_elr?stkn=MXhibnc0ZGtlY25i"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-burgundy/60 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-burgundy-dark transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-gold font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-gold rounded-full"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ivory-cream/80">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/banquets" className="hover:text-gold transition-colors">Kalyana Mandapams</Link></li>
              <li><Link to="/catering" className="hover:text-gold transition-colors">Catering Services</Link></li>
              <li><Link to="/restaurant" className="hover:text-gold transition-colors">Restaurant</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Photo Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact & Enquiries</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Venues & Services */}
          <div>
            <h4 className="font-serif text-lg text-gold font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-gold rounded-full"></span>
              Kalyana Mandapams
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ivory-cream/80">
              <li><Link to="/banquets/arna-kalyana-vedhi" className="hover:text-gold transition-colors">Aarna Banquets & Cuisines</Link></li>
              <li><Link to="/banquets/achuta-banquet" className="hover:text-gold transition-colors">Achyutha Banquets & Cuisines</Link></li>
              <li><Link to="/catering" className="hover:text-gold transition-colors">Hotel Catering Services</Link></li>
              <li><Link to="/restaurant" className="hover:text-gold transition-colors">Hotel Fine Dining Restaurant</Link></li>
              <li><Link to="/catering" className="hover:text-gold transition-colors">Live Food Counters & Stalls</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Information */}
          <div>
            <h4 className="font-serif text-lg text-gold font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-gold rounded-full"></span>
              Contact Information
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-ivory-cream/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-ivory block">Hotel Adithya Central:</span>
                  <a
                    href={RESTAURANT_HIGHLIGHTS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors block text-xs mt-0.5 leading-relaxed"
                  >
                    Beside Balaji Theater, LIC Office Road, Eluru - 534001
                    <ExternalLink className="w-3 h-3 inline ml-1 text-gold" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-gold/15 pt-2">
                <MapPin className="w-4 h-4 text-gold/70 shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-ivory block">Aarna & Achyutha Banquets:</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Aarna+Banquets+Pathebada+Road+Ramachandra+Rao+Pet+Eluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors block text-xs mt-0.5 leading-relaxed"
                  >
                    5th & 2nd Fl., Central Plaza, Pathebada Rd, Ramachandra Rao Pet, Eluru
                    <ExternalLink className="w-3 h-3 inline ml-1 text-gold/70" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-gold/15 pt-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href="tel:7997888869" className="hover:text-gold transition-colors font-semibold">+91 79978 88869 (Catering)</a>
                  <a href="tel:9391253999" className="hover:text-gold transition-colors text-ivory-cream/70">+91 93912 53999 (Hotel Desk)</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-xs">Hotel: 24/7 • Restaurant: 7AM - 11PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-cream/60">
          <p>© 2026 Adithya Central. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-gold fill-gold" /> for authentic hospitality
          </p>
        </div>

      </div>
    </footer>
  );
}
