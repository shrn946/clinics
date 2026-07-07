"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    const scripts = [
      "/demo-13/assets/js/jquery.js",
      "/demo-13/assets/js/popper.min.js",
      "/demo-13/assets/js/bootstrap.min.js",
      "/demo-13/assets/js/owl.js",
      "/demo-13/assets/js/wow.js",
      "/demo-13/assets/js/validation.js",
      "/demo-13/assets/js/jquery.fancybox.js",
      "/demo-13/assets/js/appear.js",
      "/demo-13/assets/js/scrollbar.js",
      "/demo-13/assets/js/nav-tool.js",
      "/demo-13/assets/js/script.js",
    ];

    const loadScript = (index: number) => {
      if (index >= scripts.length) {
        // Trigger initialization
        setTimeout(() => {
          if (typeof window !== "undefined" && (window as any).initResoxAnimations) {
            (window as any).initResoxAnimations();
          }
        }, 200);
        return;
      }

      const src = scripts[index];
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        loadScript(index + 1);
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = () => {
        loadScript(index + 1);
      };
      script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
        loadScript(index + 1); // proceed anyway
      };
      document.body.appendChild(script);
    };

    loadScript(0);
  }, [pathname]);

  return null;
}
