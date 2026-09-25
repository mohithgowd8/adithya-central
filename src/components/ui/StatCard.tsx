import { useEffect, useState, useRef } from 'react';

interface StatCardProps {
  value: number;
  suffix: string;
  sublabel: string;
  theme?: 'light' | 'dark';
}

export default function StatCard({ value, suffix, sublabel, theme = 'light' }: StatCardProps) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const isDark = theme === 'dark';

  return (
    <div
      ref={cardRef}
      className={`p-6 sm:p-8 rounded-sm border text-center transition-all duration-300 ${
        isDark
          ? 'bg-burgundy-deep/60 border-gold/20 text-ivory'
          : 'bg-ivory-cream/40 border-gold/30 text-burgundy-deep'
      } hover:border-gold hover-gold-glow`}
    >
      <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gold mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="h-px w-8 bg-gold/50 mx-auto my-3"></div>
      <div className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase ${isDark ? 'text-ivory-cream/90' : 'text-burgundy'}`}>
        {sublabel}
      </div>
    </div>
  );
}
