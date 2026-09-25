import React, { useState } from 'react';
import { Calculator, Users, MessageSquare, Check } from 'lucide-react';
import Button from '../ui/Button';

export default function CostEstimator() {
  const [guests, setGuests] = useState(300);
  const [eventType, setEventType] = useState('Wedding / Muhurtham');
  const [menuType, setMenuType] = useState('Royal South Indian Feast');
  const [venueChoice, setVenueChoice] = useState('Aarna Banquets & Cuisines');

  const menuOptions = [
    {
      name: 'Royal South Indian Feast',
      tag: 'Traditional Banana Leaf / Grand Buffet',
      highlights: ['Authentic Sweets & Savories', 'Multi-Course Rice & Gravies', 'Live South Tiffin Counter']
    },
    {
      name: 'Grand Multi-Cuisine Buffet',
      tag: 'South + North + Fusion Counters',
      highlights: ['Starters & Mocktails', 'Tandoori & Paneer Tikka', 'Dessert & Ice Cream Bar']
    },
    {
      name: 'Executive Luncheon / High Tea',
      tag: 'Corporate & Light Celebrations',
      highlights: ['Custom Snack Box / Buffet', 'Live Chaat & Beverages', 'Freshly Prepared Desserts']
    }
  ];

  const handleWhatsAppQuote = () => {
    const message = `Hello Adithya Central,%0A%0AI would like a formal quote for my upcoming event:%0A- Event Type: ${eventType}%0A- Guest Count: ${guests} Guests%0A- Menu Package: ${menuType}%0A- Venue / Location: ${venueChoice}%0A%0APlease share menu details and date availability.`;
    window.open(`https://wa.me/917997888869?text=${message}`, '_blank');
  };

  return (
    <div className="bg-ivory-cream/80 border-2 border-gold/40 rounded-sm p-6 sm:p-10 shadow-2xl">
      <div className="flex items-center gap-3 border-b border-gold/30 pb-4 mb-6">
        <div className="w-10 h-10 rounded-sm bg-burgundy text-gold flex items-center justify-center border border-gold/40">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-widest text-burgundy font-semibold block">INSTANT PLANNER</span>
          <h3 className="font-serif text-2xl text-burgundy-deep font-normal">Catering & Event Estimator</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Controls */}
        <div className="space-y-6">
          
          {/* Guest Count Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-burgundy flex items-center gap-2">
                <Users className="w-4 h-4 text-gold" />
                Expected Guests:
              </label>
              <span className="font-serif text-xl text-gold-dark font-bold px-3 py-1 bg-burgundy text-gold rounded-sm border border-gold/30">
                {guests} Guests
              </span>
            </div>
            <input
              type="range"
              min={50}
              max={2500}
              step={50}
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full h-2 bg-ivory border border-gold/40 rounded-lg appearance-none cursor-pointer accent-burgundy"
            />
            <div className="flex justify-between text-[10px] text-charcoal/60 mt-1">
              <span>50 Guests</span>
              <span>500 Guests</span>
              <span>1000 Guests</span>
              <span>2500+ Guests</span>
            </div>
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-burgundy-deep mb-2">
              Event Type:
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full px-4 py-3 bg-white text-[#150407] font-semibold text-sm sm:text-base border border-gold/60 focus:border-burgundy rounded-lg cursor-pointer shadow-sm"
            >
              <option value="Wedding / Muhurtham">Grand Wedding / Muhurtham</option>
              <option value="Reception Gala">Evening Reception Gala</option>
              <option value="Engagement Ceremony">Engagement Ceremony</option>
              <option value="Traditional Family Function">Traditional Family Function (Housewarming / Seemantham)</option>
              <option value="Corporate Conclave">Corporate Conclave / Luncheon</option>
              <option value="Birthday & Milestone Party">Birthday & Milestone Party</option>
            </select>
          </div>

          {/* Preferred Venue / Service */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-burgundy-deep mb-2">
              Venue / Location:
            </label>
            <select
              value={venueChoice}
              onChange={(e) => setVenueChoice(e.target.value)}
              className="w-full px-4 py-3 bg-white text-[#150407] font-semibold text-sm sm:text-base border border-gold/60 focus:border-burgundy rounded-lg cursor-pointer shadow-sm"
            >
              <option value="Aarna Banquets & Cuisines (Eluru)">Aarna Banquets & Cuisines (5th Floor, Central Plaza)</option>
              <option value="Achyutha Banquets & Cuisines (Eluru)">Achyutha Banquets & Cuisines (2nd Floor, Central Plaza)</option>
              <option value="Outdoor Catering at Client Venue">Adithya Outdoor Catering (At Your Venue)</option>
            </select>
          </div>

        </div>

        {/* Right Column: Menu Package Options & Direct WhatsApp Trigger */}
        <div className="space-y-6 flex flex-col justify-between">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-burgundy mb-2">
              Select Menu Package:
            </label>
            <div className="space-y-3">
              {menuOptions.map((opt) => (
                <div
                  key={opt.name}
                  onClick={() => setMenuType(opt.name)}
                  className={`p-4 rounded-sm border cursor-pointer transition-all ${
                    menuType === opt.name
                      ? 'bg-burgundy text-ivory border-gold shadow-md'
                      : 'bg-ivory text-charcoal border-gold/30 hover:border-gold'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-base font-medium">{opt.name}</span>
                    {menuType === opt.name && <Check className="w-5 h-5 text-gold" />}
                  </div>
                  <span className={`text-[11px] block mt-0.5 ${menuType === opt.name ? 'text-gold-light' : 'text-burgundy'}`}>
                    {opt.tag}
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {opt.highlights.map((h, i) => (
                      <span
                        key={i}
                        className={`text-[10px] px-2 py-0.5 rounded-sm ${
                          menuType === opt.name ? 'bg-burgundy-deep text-ivory-cream' : 'bg-ivory-cream text-charcoal/80'
                        }`}
                      >
                        • {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gold/30 flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleWhatsAppQuote}
              variant="gold"
              size="md"
              className="flex-1 shadow-lg"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 fill-current" /> GET WHATSAPP QUOTE NOW
              </span>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
