
'use client';
import { useEffect } from 'react';

export default function Demo6ScriptLoader() {
  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.body.appendChild(script);
      });
    };

    const initScripts = async () => {
      if (typeof window !== 'undefined') {
        const scripts = [
          "/demo-6/assets/system/js/jquery/jquery.minf43b.js?ver=3.7.1",
          "/demo-6/assets/system/js/jquery/jquery-migrate.min5589.js?ver=3.4.1",
          "/demo-6/assets/plugins/template-kit-export/assets/public/template-kit-export-public982a.js?ver=1.0.23",
          "/demo-6/assets/system/js/jquery/ui/core.minb37e.js?ver=1.13.3", "/demo-6/assets/system/js/jquery/ui/mouse.minb37e.js?ver=1.13.3", "/demo-6/assets/system/js/jquery/ui/slider.minb37e.js?ver=1.13.3", "/demo-6/assets/plugins/the-plus-addons-for-theme-page-builder/assets/js/extra/jquery.waypoints.minc540.js?ver=1782242818", "/demo-6/assets/plugins/the-plus-addons-for-theme-page-builder/assets/js/main/progress-bar/plus-progress-bar.minc540.js?ver=1782242818", "/demo-6/assets/plugins/theme/assets/js/webpack.runtime.mineda1.js?ver=4.1.4", "/demo-6/assets/plugins/theme/assets/js/frontend-modules.mineda1.js?ver=4.1.4", "/demo-6/assets/plugins/theme/assets/js/frontend.mineda1.js?ver=4.1.4", "/demo-6/assets/plugins/theme-pro/assets/lib/smartmenus/jquery.smartmenus.min1576.js?ver=1.2.1", "/demo-6/assets/plugins/theme-pro/assets/lib/lottie/lottie.min3f90.js?ver=5.6.6", "/demo-6/assets/plugins/theme-pro/assets/js/webpack-pro.runtime.min8aee.js?ver=4.1.2", "/demo-6/assets/system/js/dist/hooks.min394d.js?ver=7496969728ca0f95732d", "/demo-6/assets/system/js/dist/i18n.mineca5.js?ver=781d11515ad3d91786ec", "/demo-6/assets/plugins/theme-pro/assets/js/frontend.min8aee.js?ver=4.1.2", "/demo-6/assets/plugins/theme-pro/assets/js/elements-handlers.min8aee.js?ver=4.1.2"
        ];
        for (const src of scripts) {
          await loadScript(src);
        }
      }
    };
    
    initScripts();
  }, []);

  return null;
}
