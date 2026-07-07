"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if scripts are already loaded
    if (typeof window !== 'undefined' && !(window as any).jQuery) {
      const scripts = [
        "/demo-11/assets/js/jquery-3.7.1.min.js",
        "/demo-11/assets/js/bootstrap.min.js",
        "/demo-11/assets/js/gsap.min.js",
        "/demo-11/assets/js/ScrollTrigger.min.js",
        "/demo-11/assets/js/SplitText.min.js",
        "/demo-11/assets/js/swiper-bundle.min.js",
        "/demo-11/assets/js/jquery.waypoints.min.js",
        "/demo-11/assets/js/jquery.counterup.min.js",
        "/demo-11/assets/js/jquery.magnific-popup.min.js",
        "/demo-11/assets/js/circle-progress.min.js",
        "/demo-11/assets/js/jquery.slicknav.js",
        "/demo-11/assets/js/SmoothScroll.js",
        "/demo-11/assets/js/parallaxie.js",
        "/demo-11/assets/js/jquery.mb.YTPlayer.min.js",
        "/demo-11/assets/js/validator.min.js",
        "/demo-11/assets/js/magiccursor.js",
        "/demo-11/assets/js/wow.min.js",
        "/demo-11/assets/js/function.js",
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

      // Delay slightly to allow React hydration
      setTimeout(loadNext, 100);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const $ = (window as any).jQuery;
      const ScrollTrigger = (window as any).ScrollTrigger;

      // Force-hide preloader immediately on page transition
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('loaded');
        if ($) {
          $(preloader).fadeOut(150);
        } else {
          (preloader as HTMLElement).style.display = 'none';
        }
      }

      // Kill previous ScrollTriggers to prevent memory leaks and animations collision
      if (ScrollTrigger) {
        try {
          ScrollTrigger.getAll().forEach((t: any) => t.kill());
        } catch (e) {
          console.error("Failed to clear ScrollTriggers: ", e);
        }
      }

      setTimeout(() => {
        // Re-run animations on route transition
        if ((window as any).initPluxesAnimations) {
          try {
            (window as any).initPluxesAnimations();
          } catch (e) {
            console.error("Failed to re-initialize Pluxes animations: ", e);
          }
        }
      }, 400);
    }
  }, [pathname]);

  return null;
}
