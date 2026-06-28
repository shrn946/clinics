'use client';

import { useEffect } from 'react';

const SCRIPTS = [
  "/js/jquery-3.7.1.min.js",
  "/js/bootstrap.min.js",
  "/js/validator.min.js",
  "/js/jquery.slicknav.js",
  "/js/swiper-bundle.min.js",
  "/js/jquery.waypoints.min.js",
  "/js/jquery.counterup.min.js",
  "/js/jquery.magnific-popup.min.js",
  "/js/SmoothScroll.js",
  "/js/parallaxie.js",
  "/js/jquery.event.move.js",
  "/js/jquery.twentytwenty.js",
  "/js/gsap.min.js",
  "/js/magiccursor.js",
  "/js/SplitText.js",
  "/js/ScrollTrigger.min.js",
  "/js/jquery.mb.YTPlayer.min.js",
  "/js/wow.js",
  "/js/function.js"
];

export default function ScriptLoader() {
  useEffect(() => {
    let index = 0;
    let isMounted = true;

    function loadNextScript() {
      if (!isMounted) return;
      if (index >= SCRIPTS.length) {
        // Trigger initial theme plugins setup when all scripts are ready
        if (typeof window !== 'undefined' && (window as any).initThemePlugins) {
          try {
            (window as any).initThemePlugins();
          } catch (e) {
            console.error("Initial plugin activation failed:", e);
          }
        }
        return;
      }

      const src = SCRIPTS[index];
      
      // If script is already loaded/injected, move to next
      if (document.querySelector(`script[src="${src}"]`)) {
        index++;
        loadNextScript();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = () => {
        index++;
        loadNextScript();
      };
      script.onerror = () => {
        console.error(`Failed to load theme script: ${src}`);
        index++;
        loadNextScript();
      };
      document.body.appendChild(script);
    }

    loadNextScript();

    return () => {
      isMounted = false;
    };
  }, []);

  return null;
}
