'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const scripts = [
  "/demo-10/assets/js/jquery-3.7.1.min.js",
  "/demo-10/assets/js/viewport.jquery.js",
  "/demo-10/assets/js/bootstrap.bundle.min.js",
  "/demo-10/assets/js/jquery.nice-select.min.js",
  "/demo-10/assets/js/jquery.waypoints.js",
  "/demo-10/assets/js/jquery.counterup.min.js",
  "/demo-10/assets/js/swiper-bundle.min.js",
  "/demo-10/assets/js/jquery.meanmenu.min.js",
  "/demo-10/assets/js/jquery.magnific-popup.min.js",
  "/demo-10/assets/js/wow.min.js",
  "/demo-10/assets/js/gsap.min.js",
  "/demo-10/assets/js/lenis.min.js",
  "/demo-10/assets/js/scrollSmoother.js",
  "/demo-10/assets/js/ScrollTrigger.min.js",
  "/demo-10/assets/js/spilitext-gsap.js",
  "/demo-10/assets/js/vanilla-tilt.min.js",
  "/demo-10/assets/js/main.js"
];

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    // Only load if scripts haven't been injected yet
    if (!document.querySelector('script[src="/demo-10/assets/js/main.js"]')) {
      let currentIdx = 0;
      
      const loadNext = () => {
        if (currentIdx >= scripts.length) {
          // Trigger custom initialization event once all scripts are loaded
          if (typeof window !== 'undefined') {
            const event = new Event('scriptsLoaded');
            window.dispatchEvent(event);
          }
          return;
        }
        
        const script = document.createElement('script');
        script.src = scripts[currentIdx];
        script.async = false;
        script.onload = () => {
          currentIdx++;
          loadNext();
        };
        script.onerror = () => {
          // If a script fails to load, skip to next to avoid blocking
          currentIdx++;
          loadNext();
        };
        document.body.appendChild(script);
      };
      
      // Delay to ensure React has fully hydrated before scripts mess with DOM
      setTimeout(loadNext, 100);
    }
  }, []);

  useEffect(() => {
    // Re-initialize scripts/animations on route changes if jQuery and WOW are loaded
    if (typeof window !== 'undefined') {
      const $ = (window as any).jQuery;
      const WOW = (window as any).WOW;
      const Swiper = (window as any).Swiper;

      // Force-hide preloader on page navigation to ensure instant loading
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('loaded');
        if ($) {
          $(preloader).fadeOut(100);
        } else {
          (preloader as HTMLElement).style.display = 'none';
        }
      }

      // Kill previous ScrollTriggers to prevent memory leaks and duplicate trigger registrations
      if ((window as any).ScrollTrigger) {
        try {
          (window as any).ScrollTrigger.getAll().forEach((t: any) => t.kill());
        } catch (e) {
          console.error("Failed to clear ScrollTriggers: ", e);
        }
      }

      setTimeout(() => {
        // Re-initialize WOW animations
        if (WOW) {
          try {
            new WOW().init();
          } catch (e) {
            console.error("Failed to re-initialize WOW: ", e);
          }
        }

        // Re-initialize Swiper sliders if they are defined on elements on this page
        if (Swiper) {
          // Hero slider
          if (document.querySelector('.hero-slider')) {
            new Swiper('.hero-slider', {
              loop: true,
              slidesPerView: 1,
              effect: "fade",
              speed: 2000,
              autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
              pagination: {
                el: ".dot",
                clickable: true,
              },
            });
          }

          // Testimonial slider
          if (document.querySelector('.testimonial-slider')) {
            new Swiper('.testimonial-slider', {
              spaceBetween: 30,
              speed: 500,
              loop: true,
              pagination: {
                el: ".dot",
                clickable: true,
              },
              navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
              },
            });
          }

          if (document.querySelector('.testimonial-slider1')) {
            new Swiper('.testimonial-slider1', {
              spaceBetween: 30,
              speed: 500,
              loop: true,
              pagination: {
                el: ".dot",
                clickable: true,
              },
              navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
              },
            });
          }

          if (document.querySelector('.testimonial-slider3')) {
            new Swiper('.testimonial-slider3', {
              spaceBetween: 30,
              speed: 500,
              loop: true,
              pagination: {
                el: ".dot",
                clickable: true,
              },
              navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
              },
            });
          }

          // Projects slider (Home 1 / Standard)
          if (document.querySelector('.lastes-project__wrapper')) {
            new Swiper('.lastes-project__wrapper', {
              spaceBetween: 24,
              speed: 500,
              loop: true,
              pagination: {
                el: ".dot",
                clickable: true,
              },
              navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
              },
              breakpoints: {
                1199: { slidesPerView: 3 },
                767: { slidesPerView: 3, spaceBetween: 14 },
                500: { slidesPerView: 2, spaceBetween: 14 },
                0: { slidesPerView: 1, spaceBetween: 14 },
              },
            });
          }

          // Projects slider (Home 3 version)
          if (document.querySelector('.latest-project3__wrapper')) {
            new Swiper('.latest-project3__wrapper', {
              spaceBetween: 24,
              speed: 500,
              loop: true,
              pagination: {
                el: ".dot",
                clickable: true,
              },
              navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
              },
              breakpoints: {
                1199: { slidesPerView: 4 },
                767: { slidesPerView: 2, spaceBetween: 14 },
                500: { slidesPerView: 2, spaceBetween: 14 },
                0: { slidesPerView: 1, spaceBetween: 14 },
              },
            });
          }

          // Text marquee/sponsor slider
          if (document.querySelector('.sponsor-text-slide')) {
            new Swiper('.sponsor-text-slide', {
              speed: 6000,
              loop: true,
              slidesPerView: "auto",
              centeredSlides: true,
              autoplay: {
                delay: 1,
                disableOnInteraction: false,
              },
              spaceBetween: 30,
            });
          }
        }

        // Re-initialize nice-select on forms
        if ($ && $.fn.niceSelect) {
          $('select').niceSelect();
        }

        // Re-initialize counter up
        if ($ && $.fn.counterUp) {
          $('.count').counterUp({
            delay: 15,
            time: 4000,
          });
        }

        // Trigger GSAP animations to re-bind triggers to the new React DOM elements
        if ((window as any).initMedizenAnimations) {
          try {
            (window as any).initMedizenAnimations();
          } catch (e) {
            console.error("Failed to re-initialize GSAP animations: ", e);
          }
        }
      }, 500);
    }
  }, [pathname]);

  return null;
}
