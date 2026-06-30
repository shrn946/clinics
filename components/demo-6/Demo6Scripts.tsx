'use client';
import { useEffect } from 'react';

export default function Demo6Scripts() {
  useEffect(() => {
    // Progress Bar Animation
    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll('.theme-progress-bar');
      progressBars.forEach((bar) => {
        const progress = bar.getAttribute('data-max') || '100';
        // Add a small delay for the animation to be visible
        setTimeout(() => {
          (bar as HTMLElement).style.width = `${progress}%`;
        }, 100);
      });
      
      // Also check The Plus Addons progress bars if any
      const ptbProgressBars = document.querySelectorAll('.ptb-progress-bar-filled, .progress_bar-skill-bar-filled');
      ptbProgressBars.forEach((bar) => {
        const progress = bar.parentElement?.getAttribute('data-percent-value') || '100';
        setTimeout(() => {
          (bar as HTMLElement).style.width = `${progress}%`;
        }, 100);
      });
    };

    // Use Intersection Observer to animate only when scrolled into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgressBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const progressWrappers = document.querySelectorAll('.theme-widget-progress, .plus-progress-bar');
    progressWrappers.forEach(wrapper => {
      observer.observe(wrapper);
    });
    
    // In case no observer targets were found, fallback
    if (progressWrappers.length === 0) {
      animateProgressBars();
    }
    
    // Fix mobile menu / icons if they were dependent on JS
    // Some themes use FontAwesome JS which we removed, so ensure standard FontAwesome is initialized
    
    return () => observer.disconnect();
  }, []);

  return null;
}
