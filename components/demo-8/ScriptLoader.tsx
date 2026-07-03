'use client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const scripts = [
  "/demo-8/assets/js/jquery-3.7.1.min.js",
  "/demo-8/assets/js/bootstrap.bundle.min.js",
  "/demo-8/assets/js/gsap.min.js",
  "/demo-8/assets/js/ScrollTrigger.min.js",
  "/demo-8/assets/js/ScrollSmoother.min.js",
  "/demo-8/assets/js/ScrollToPlugin.min.js",
  "/demo-8/assets/js/SplitText.min.js",
  "/demo-8/assets/js/TextPlugin.js",
  "/demo-8/assets/js/chroma.min.js",
  "/demo-8/assets/js/three.js",
  "/demo-8/assets/js/webgl.js",
  "/demo-8/assets/js/jquery.nice-select.min.js",
  "/demo-8/assets/js/bootstrap-datepicker.js",
  "/demo-8/assets/js/swiper-bundle.min.js",
  "/demo-8/assets/js/jquery.magnific-popup.min.js",
  "/demo-8/assets/js/matter.js",
  "/demo-8/assets/js/throwable.js",
  "/demo-8/assets/js/main.js"
];

export default function ScriptLoader() {
  useEffect(() => {
    // Only load if scripts haven't been injected yet
    if (!document.querySelector('script[src="/demo-8/assets/js/main.js"]')) {
      let currentIdx = 0;
      
      const loadNext = () => {
        if (currentIdx >= scripts.length) {
          const modScript = document.createElement('script');
          modScript.src = "/demo-8/assets/js/distortion-img.js";
          modScript.type = "module";
          document.body.appendChild(modScript);
          return;
        }
        
        const script = document.createElement('script');
        script.src = scripts[currentIdx];
        script.async = false;
        script.onload = () => {
          currentIdx++;
          loadNext();
        };
        document.body.appendChild(script);
      };
      
      // Delay to ensure React has fully hydrated before scripts mess with DOM
      setTimeout(loadNext, 100);
    }
  }, []);
  
  const pathname = usePathname();
  useEffect(() => {
    // Re-initialize scripts on route change if they exist
    if (typeof window !== 'undefined' && window.jQuery) {
      setTimeout(() => {
        if (window.jQuery.fn.tThrowable) {
          window.jQuery("[data-t-throwable-scene]").tThrowable();
        }
      }, 500);
    }
  }, [pathname]);

  return null;
}
