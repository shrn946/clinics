'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScriptInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-trigger theme plugins on navigation with a small delay for DOM updates
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        if ((window as any).initThemePlugins) {
          try {
            (window as any).initThemePlugins();
          } catch (e) {
            console.error("Failed to re-initialize theme plugins:", e);
          }
        }

        // Setup native scroll-reveal observer for text animations
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.05 });

        document.querySelectorAll('.text-anime-style-1, .text-anime-style-2, .text-anime-style-3').forEach((el) => {
          observer.observe(el);
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
