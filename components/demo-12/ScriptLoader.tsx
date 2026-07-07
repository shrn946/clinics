"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && !(window as any).jQuery) {
      const scripts = [
        "/demo-12/assets/js/vendor/jquery.js",
        "/demo-12/assets/js/vendor/waypoints.js",
        "/demo-12/assets/js/bootstrap-bundle.js",
        "/demo-12/assets/js/meanmenu.js",
        "/demo-12/assets/js/swiper-bundle.js",
        "/demo-12/assets/js/slick.js",
        "/demo-12/assets/js/nouislider.js",
        "/demo-12/assets/js/magnific-popup.js",
        "/demo-12/assets/js/parallax.js",
        "/demo-12/assets/js/nice-select.js",
        "/demo-12/assets/js/wow.js",
        "/demo-12/assets/js/isotope-pkgd.js",
        "/demo-12/assets/js/imagesloaded-pkgd.js",
        "/demo-12/assets/js/jquery.appear.js",
        "/demo-12/assets/js/odometer.min.js",
        "/demo-12/assets/js/beforeafter.jquery-1.0.0.min.js",
        "/demo-12/assets/js/splide.js",
        "/demo-12/assets/js/pignose.calendar.full.min.js",
        "/demo-12/assets/js/ajax-form.js",
        "/demo-12/assets/js/countdown.js",
        "/demo-12/assets/js/counterup.js",
        "/demo-12/assets/js/hover-reveal.js",
        "/demo-12/assets/js/tween-max.js",
        "/demo-12/assets/js/main.js",
      ];

      let currentIdx = 0;
      const loadNext = () => {
        if (currentIdx >= scripts.length) return;
        const script = document.createElement("script");
        script.src = scripts[currentIdx];
        script.async = false;
        script.onload = () => {
          currentIdx++;
          loadNext();
        };
        script.onerror = () => {
          currentIdx++;
          loadNext();
        };
        document.body.appendChild(script);
      };

      setTimeout(loadNext, 100);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const $ = (window as any).jQuery;
      const ScrollTrigger = (window as any).ScrollTrigger;

      // Force-hide loading screen on transitions
      const preloader = document.getElementById('loading');
      if (preloader) {
        if ($) {
          $(preloader).fadeOut(150);
        } else {
          preloader.style.display = 'none';
        }
      }

      // Clear ScrollTriggers to prevent memory leak and duplication
      if (ScrollTrigger) {
        try {
          ScrollTrigger.getAll().forEach((t: any) => t.kill());
        } catch (e) {
          console.error("Failed to clear ScrollTriggers: ", e);
        }
      }

      setTimeout(() => {
        if ((window as any).initVamaryAnimations) {
          try {
            (window as any).initVamaryAnimations();
          } catch (e) {
            console.error("Failed to re-initialize Vamary animations: ", e);
          }
        }
      }, 400);
    }
  }, [pathname]);

  return null;
}
