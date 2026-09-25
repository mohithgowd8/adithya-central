import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export default function LightboxModal({ item, items, onClose, onSelect }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-burgundy-dark/95 backdrop-blur-md p-4 animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-ivory hover:text-gold transition-colors focus:outline-none z-10"
        aria-label="Close Lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-ivory/80 hover:text-gold hover:bg-white/10 rounded-full transition-all focus:outline-none z-10"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-ivory/80 hover:text-gold hover:bg-white/10 rounded-full transition-all focus:outline-none z-10"
        aria-label="Next Image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Image & Caption Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[75vh] w-auto object-contain rounded-sm shadow-2xl border border-gold/30"
        />
        <div className="mt-4 text-center">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">{item.category}</span>
          <h3 className="font-serif text-xl sm:text-2xl text-ivory mt-1">{item.title}</h3>
          <p className="text-xs text-ivory-cream/60 mt-1">
            Image {currentIndex + 1} of {items.length}
          </p>
        </div>
      </div>
    </div>
  );
}
