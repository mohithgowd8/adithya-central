export interface Venue {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  label: string;
  logo?: string;
  capacityPlaceholder: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  suitableEvents: string[];
  locationPlaceholder: string;
  address?: string;
  timings?: string;
  contactPhone?: string;
  googleMapsUrl?: string;
  googleMapsEmbed?: string;
  facilities: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'VENUES' | 'WEDDINGS' | 'CATERING' | 'FOOD' | 'RESTAURANT' | 'EVENTS';
  image: string;
  aspectRatio?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  eventType: string;
  venueOrService: string;
  quote: string;
  rating: number;
  date: string;
}

export interface Occasion {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  preferredVenue: string;
  message: string;
}
