import React, { useState } from 'react';
import { AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import Button from '../ui/Button';
import { EnquiryFormData } from '../../types';

interface ContactFormProps {
  initialVenue?: string;
  className?: string;
}

export default function ContactForm({ initialVenue = '', className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding / Muhurtham',
    eventDate: '',
    guestCount: '',
    preferredVenue: initialVenue || 'Arna Kalyana Vedhi (Grand Hall)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [formattedMsg, setFormattedMsg] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMsg = (data: EnquiryFormData) => {
    const messageLines = [
      `✨ *NEW EVENT ENQUIRY - ADITHYA CENTRAL* ✨`,
      `-----------------------------------------`,
      ``,
      `👤 *1. CUSTOMER DETAILS*`,
      `• *Full Name:* ${data.name.trim()}`,
      `• *Phone Number:* ${data.phone.trim()}`,
      `• *Email:* ${data.email.trim() || 'Not Provided'}`,
      ``,
      `🎉 *2. EVENT DETAILS*`,
      `• *Event Type:* ${data.eventType}`,
      `• *Preferred Venue/Service:* ${data.preferredVenue}`,
      `• *Event Date:* ${data.eventDate}`,
      `• *Expected Guests:* ${data.guestCount.trim() || 'To be confirmed'}`,
      ``,
      `📝 *3. SPECIAL REQUESTS & NOTES*`,
      `• ${data.message.trim() || 'No additional requirements specified.'}`,
      ``,
      `-----------------------------------------`,
      `📱 *Sent via Adithya Central Official Web Portal*`
    ];

    const rawText = messageLines.join('\n');
    const encoded = encodeURIComponent(rawText);
    return {
      rawText,
      url: `https://wa.me/917997888869?text=${encoded}`
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const { rawText, url } = constructWhatsAppMsg(formData);
    setFormattedMsg(rawText);
    setWhatsappUrl(url);
    setSubmitted(true);

    // Open WhatsApp directly with full pre-formatted sectioned text
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className={`p-8 sm:p-10 bg-ivory-cream border-2 border-emerald-600/40 rounded-xl text-center shadow-2xl ${className}`}>
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-400">
          <MessageSquare className="w-9 h-9 fill-emerald-600 text-emerald-600" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy-deep mb-2">
          WhatsApp Enquiry Formatted!
        </h3>
        <p className="text-sm text-charcoal/80 max-w-lg mx-auto mb-6 leading-relaxed">
          Thank you, <strong className="text-burgundy">{formData.name}</strong>. Your enquiry details have been generated section-by-section and sent to WhatsApp.
        </p>

        {/* WhatsApp Formatted Message Preview Card */}
        <div className="p-4 bg-emerald-950 text-emerald-100 text-left rounded-xl border border-emerald-700 text-xs font-mono max-w-lg mx-auto mb-6 whitespace-pre-wrap leading-relaxed overflow-x-auto shadow-inner">
          {formattedMsg}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            OPEN IN WHATSAPP AGAIN
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                eventType: 'Wedding / Muhurtham',
                eventDate: '',
                guestCount: '',
                preferredVenue: 'Arna Kalyana Vedhi (Grand Hall)',
                message: '',
              });
            }}
            className="text-xs uppercase tracking-widest text-burgundy hover:text-gold font-bold underline underline-offset-4 py-2"
          >
            SEND ANOTHER ENQUIRY
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`p-6 sm:p-10 bg-ivory-cream/80 border border-gold/40 rounded-xl shadow-2xl ${className}`}>
      {/* Header Banner */}
      <div className="mb-8 pb-6 border-b border-gold/30">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
          <span>INSTANT WHATSAPP ENQUIRY SYSTEM</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-burgundy-deep font-bold">Plan Your Celebration</h3>
        <p className="text-xs sm:text-sm text-charcoal/80 mt-1 font-medium">
          Fill in your event details below to launch a fully typed section-wise enquiry directly to our WhatsApp team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-wider font-bold text-burgundy-deep mb-1.5">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ananth Kumar"
            className={`w-full px-4 py-3 bg-white text-[#150407] font-semibold text-sm sm:text-base border ${
              errors.name ? 'border-red-500' : 'border-gold/60 focus:border-burgundy'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30 transition-colors shadow-sm`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-bold text-burgundy-deep mb-1.5">
            WhatsApp Phone Number <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 98765 43210"
            className={`w-full px-4 py-3 bg-white text-[#150407] font-semibold text-sm sm:text-base border ${
              errors.phone ? 'border-red-500' : 'border-gold/60 focus:border-burgundy'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30 transition-colors shadow-sm`}
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-wider font-bold text-burgundy-deep mb-1.5">
            Email Address <span className="text-charcoal/60 font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className="w-full px-4 py-3 bg-white text-[#150407] font-semibold text-sm sm:text-base border border-gold/60 focus:border-burgundy rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30 transition-colors shadow-sm"
          />
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className="block text-xs uppercase tracking-wider font-bold text-burgundy-deep mb-1.5">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white text-[#150407] font-semibold text-sm sm:text-base border border-gold/60 focus:border-burgundy rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30 shadow-sm cursor-pointer"
          >
            <option value="Wedding / Muhurtham">Wedding / Muhurtham</option>
            <option value="Reception">Reception Gala</option>
            <option value="Engagement Ceremony">Engagement Ceremony</option>
            <option value="Outdoor Catering Only">Outdoor Catering Only</option>
            <option value="Corporate Event / Conference">Corporate Event / Conference</option>
            <option value="Birthday / Anniversary Gala">Birthday / Anniversary Gala</option>
            <option value="Traditional Family Function">Traditional Family Function</option>
            <option value="Restaurant Dining Reservation">Restaurant Dining Reservation</option>
          </select>
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="block text-xs uppercase tracking-wider font-bold text-burgundy-deep mb-1.5">
            Event Date <span className="text-gold">*</span>
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white text-[#150407] font-semibold text-sm sm:text-base border ${
              errors.eventDate ? 'border-red-500' : 'border-gold/60 focus:border-burgundy'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30 transition-colors shadow-sm`}
          />
          {errors.eventDate && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3 h-3" /> {errors.eventDate}
            </p>
          )}
        </div>

        {/* Guest Count */}
        <div>
          <label htmlFor="guestCount" className="block text-xs uppercase tracking-wider font-bold text-burgundy-deep mb-1.5">
            Expected Guests
          </label>
          <input
            type="text"
            id="guestCount"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            placeholder="e.g. 500 Guests"
            className="w-full px-4 py-3 bg-white text-[#150407] font-semibold text-sm sm:text-base border border-gold/60 focus:border-burgundy rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30 shadow-sm"
          />
        </div>

        {/* Preferred Venue */}
        <div className="sm:col-span-2">
          <label htmlFor="preferredVenue" className="block text-xs uppercase tracking-wider font-bold text-burgundy-deep mb-1.5">
            Preferred Venue / Service
          </label>
          <select
            id="preferredVenue"
            name="preferredVenue"
            value={formData.preferredVenue}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white text-[#150407] font-semibold text-sm sm:text-base border border-gold/60 focus:border-burgundy rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30 shadow-sm cursor-pointer"
          >
            <option value="Aarna Banquets & Cuisines">Aarna Banquets & Cuisines (5th Floor, Central Plaza)</option>
            <option value="Achyutha Banquets & Cuisines">Achyutha Banquets & Cuisines (2nd Floor, Central Plaza)</option>
            <option value="Adithya Central Fine Dining Restaurant">Adithya Central Fine Dining Restaurant</option>
            <option value="Adithya Outdoor Catering Service">Adithya Outdoor Catering Service</option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-xs uppercase tracking-wider font-bold text-burgundy-deep mb-1.5">
            Additional Requirements / Special Notes
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Specify any food menu items, seating arrangements, decoration themes, or timing preferences..."
            className="w-full px-4 py-3 bg-white text-[#150407] font-semibold text-sm sm:text-base border border-gold/60 focus:border-burgundy rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy/30 shadow-sm"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 pt-4 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105"
        >
          <WhatsAppIcon className="w-5 h-5 fill-white" />
          <span>SEND ENQUIRY VIA WHATSAPP</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-charcoal/70">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>Opens WhatsApp directly with pre-filled details</span>
        </div>
      </div>
    </form>
  );
}
