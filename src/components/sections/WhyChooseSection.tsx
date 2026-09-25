import SectionHeading from '../ui/SectionHeading';
import { Award, ShieldCheck, Clock, Users, Utensils, Sparkles } from 'lucide-react';

export default function WhyChooseSection() {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-gold shrink-0" />,
      title: '12+ Years Hospitality Heritage',
      desc: 'Over a decade of trusted event execution, high-profile weddings, and corporate hospitality in Eluru.',
    },
    {
      icon: <Utensils className="w-6 h-6 text-gold shrink-0" />,
      title: '20,000+ Completed Caterings',
      desc: 'Proven track record of preparing traditional Andhra feasts, North Indian banquets, and live stall experiences.',
    },
    {
      icon: <Users className="w-6 h-6 text-gold shrink-0" />,
      title: '2 Luxury Kalyana Mandapams',
      desc: 'Featuring Aarna Banquets & Cuisines (grand weddings) and Achyutha Banquets & Cuisines (receptions & galas).',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold shrink-0" />,
      title: 'Hygienic & Fresh Ingredients',
      desc: 'Strict food safety standards, pure ghee preparations, and fresh morning ingredient sourcing.',
    },
    {
      icon: <Clock className="w-6 h-6 text-gold shrink-0" />,
      title: 'Punctual & Dedicated Staff',
      desc: 'Uniformed, polite service personnel and experienced event coordinators overseeing your function.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold shrink-0" />,
      title: 'Customized Menu Packages',
      desc: 'Tailored menu options to suit traditional rituals, budget constraints, and dietary preferences.',
    },
  ];

  return (
    <section className="py-24 bg-[#140407] text-ivory border-t border-gold/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="THE ADITHYA ADVANTAGE"
          title="Why Families & Corporate Clients Trust Us"
          align="center"
          theme="dark"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#21080E] border-2 border-gold/40 rounded-xl hover:border-gold hover:bg-[#2A0912] transition-all duration-300 shadow-2xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-full bg-gold/20 border-2 border-gold/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                  {pt.icon}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-gold font-bold mb-3 drop-shadow-sm">
                  {pt.title}
                </h3>
                <p className="text-sm sm:text-base text-ivory-cream leading-relaxed font-normal">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
