import ContactForm from '../form/ContactForm';
import SectionHeading from '../ui/SectionHeading';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_HIGHLIGHTS } from '../../data/restaurant';

export default function ContactSection() {
  return (
    <section className="py-20 sm:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="GET IN TOUCH"
          title="Connect With Adithya Central"
          description="Our event management & catering team is at your service 7 days a week."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8 bg-burgundy-dark text-ivory p-8 sm:p-10 rounded-sm border border-gold/30 shadow-xl">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">HEADQUARTERS & HOTEL</span>
              <h3 className="font-serif text-2xl text-ivory">Hotel Adithya Central</h3>
              <p className="text-xs text-gold-light mt-1">Catering • Banquets • Restaurant • Hotel</p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-ivory-cream/80 font-light">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-burgundy border border-gold/40 flex items-center justify-center text-gold shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-gold text-sm font-normal">Hotel & Restaurant Address</h4>
                  <p className="mt-0.5 leading-relaxed">
                    {RESTAURANT_HIGHLIGHTS.address}
                  </p>
                  <a
                    href={RESTAURANT_HIGHLIGHTS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light text-xs font-semibold mt-1.5 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <p className="text-[11px] text-ivory-cream/60 mt-2 border-t border-gold/15 pt-2">
                    <strong className="text-gold-light font-normal">Aarna & Achyutha Banquets:</strong> 5th & 2nd Floor, Central Plaza, Pathebada Road, Ramachandra Rao Pet, Eluru
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-burgundy border border-gold/40 flex items-center justify-center text-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-gold text-sm font-normal">Direct Phone</h4>
                  <p className="mt-0.5 font-medium">+91 79978 88869</p>
                  <p className="text-xs text-ivory-cream/70 mt-0.5">Hotel Desk: +91 93912 53999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-burgundy border border-gold/40 flex items-center justify-center text-gold shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-gold text-sm font-normal">Email</h4>
                  <p className="mt-0.5">info@adithyacentral.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-burgundy border border-gold/40 flex items-center justify-center text-gold shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-gold text-sm font-normal">Office Hours</h4>
                  <p className="mt-0.5">Open 7 Days (9:00 AM - 9:00 PM)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}
