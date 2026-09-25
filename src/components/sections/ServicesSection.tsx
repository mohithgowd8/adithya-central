import { SERVICES_DATA } from '../../data/services';
import Button from '../ui/Button';

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-ivory-cream/50 text-charcoal relative overflow-hidden border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-burgundy">
            OUR CORE OFFERINGS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-burgundy-deep">
            Comprehensive Hospitality & Event Services
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          <p className="text-sm sm:text-base text-charcoal/70 font-light leading-relaxed">
            Whether you require a grand wedding hall, authentic event catering, or fine dining, Adithya Central offers complete solutions.
          </p>
        </div>

        {/* 3 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-ivory rounded-sm border border-gold/30 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden img-zoom-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-burgundy-deep group-hover:text-gold transition-colors font-medium">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 mt-2 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Button to={service.link} variant="outline" size="sm" showArrow className="w-full text-center">
                    EXPLORE DETAILS
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
