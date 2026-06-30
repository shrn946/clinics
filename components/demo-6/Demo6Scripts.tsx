'use client';
import { useEffect } from 'react';

export default function Demo6Scripts() {
  useEffect(() => {
    // Use Intersection Observer to animate elements when scrolled into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          // Progress Bars
          if (target.classList.contains('theme-widget-progress') || target.classList.contains('plus-progress-bar')) {
            const bars = target.querySelectorAll('.theme-progress-bar, .ptb-progress-bar-filled, .progress_bar-skill-bar-filled');
            bars.forEach((bar) => {
              const b = bar as HTMLElement;
              const progress = b.getAttribute('data-max') || b.parentElement?.getAttribute('data-percent-value') || '100';
              setTimeout(() => {
                b.style.width = `${progress}%`;
              }, 100);
            });
            observer.unobserve(target);
          }
          
          // Animations (theme-invisible)
          if (target.classList.contains('theme-invisible')) {
             try {
               const settingsStr = target.getAttribute('data-settings');
               if (settingsStr) {
                 const settings = JSON.parse(settingsStr);
                 const animationName = settings.animation || settings._animation;
                 if (animationName) {
                   target.classList.remove('theme-invisible');
                   target.classList.add('animated', animationName);
                   const delay = settings.animation_delay || settings._animation_delay;
                   if (delay) {
                     target.style.animationDelay = `${delay}ms`;
                   }
                 } else {
                   target.classList.remove('theme-invisible');
                 }
               } else {
                 target.classList.remove('theme-invisible');
               }
             } catch (e) {
               target.classList.remove('theme-invisible');
             }
             observer.unobserve(target);
          }
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.theme-invisible, .theme-widget-progress, .plus-progress-bar');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return null;
}
