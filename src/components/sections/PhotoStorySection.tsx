import { Instagram } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function PhotoStorySection() {
  const photos = [
    {
      url: '/images/achuta/achuta-royal-arch-mural.jpg',
      label: 'Royal Arch Mural'
    },
    {
      url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
      label: 'Grand Catering Feast'
    },
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      label: 'Restaurant Dining'
    },
    {
      url: '/images/aarna/aarna-hall-stage-front.jpg',
      label: 'Arna Wedding Stage'
    },
    {
      url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      label: 'Authentic Flavours'
    },
    {
      url: '/images/achuta/achuta-grand-hall-overview.jpg',
      label: 'Achuta Banquet'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="MOMENTS AT ADITHYA CENTRAL"
          title="Celebrations In Pictures."
          description="Follow our visual journey of wedding transformations, gourmet banquets, and daily dining experiences."
          align="center"
        />

        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/adithya_central_elr?stkn=MXhibnc0ZGtlY25i"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-burgundy text-ivory border border-gold text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold hover:text-burgundy-deep transition-all shadow-md"
          >
            <Instagram className="w-4 h-4 text-gold group-hover:text-burgundy-deep" />
            <span>@ADITHYA_CENTRAL_ELR</span>
          </a>
        </div>

        {/* Instagram Visual Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {photos.map((p, idx) => (
            <div
              key={idx}
              className="group relative h-48 sm:h-64 rounded-sm overflow-hidden border border-gold/30 cursor-pointer shadow-sm"
            >
              <img
                src={p.url}
                alt={p.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-burgundy-deep/75 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold font-serif">
                  {p.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
