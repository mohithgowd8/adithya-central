import { useEffect } from 'react';

interface MetaSEOProps {
  title: string;
  description: string;
}

export default function MetaSEO({ title, description }: MetaSEOProps) {
  useEffect(() => {
    document.title = title;
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);

  return null;
}
