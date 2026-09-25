import Button from '../ui/Button';

export default function FinalCTASection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/aarna/aarna-banner-2.jpg"
          alt="Adithya Central Booking Banner"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/50 to-[#140407]/65"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-ivory space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
          READY TO PLAN YOUR EVENT?
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ivory leading-tight">
          Let’s Make Your Celebration Unforgettable.
        </h2>

        <p className="text-sm sm:text-base text-ivory-cream/80 max-w-2xl mx-auto font-light leading-relaxed">
          Contact our team to check venue dates for Aarna Banquets & Cuisines or Achyutha Banquets & Cuisines, or to request custom catering estimates.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/contact" variant="gold" size="lg">
            SCHEDULE A VENUE VISIT
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            REQUEST CATERING QUOTE
          </Button>
        </div>
      </div>
    </section>
  );
}
