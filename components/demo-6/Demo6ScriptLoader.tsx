
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
        const w = window as any;
        w.themeFrontendConfig = {
          "environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},
          "i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},
          "is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},
          "responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":true},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":true},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":true}},"hasCustomBreakpoints":true},
          "version":"4.1.4","is_static":false,
          "experimentalFeatures":{"additional_custom_breakpoints":true,"container":true,"e_panel_promotions":true,"theme_builder_v2":true,"hello-theme-header-footer":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_atomic_form":true,"e_pro_variables":true,"e_pro_interactions":true},
          "urls":{"assets":"/demo-6/assets/plugins/theme/assets/","ajaxurl":"#","uploadUrl":"/demo-6/assets/uploads/sites/19"},
          "nonces":{"floatingButtonsClickTracking":"711591376e","atomicFormsSendForm":"d5cf2a9e9d"},
          "swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},
          "kit":{"viewport_mobile":767,"viewport_tablet":1024,"active_breakpoints":["viewport_mobile","viewport_mobile_extra","viewport_tablet","viewport_tablet_extra","viewport_laptop","viewport_widescreen"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},
          "post":{"id":135,"title":"Dental","excerpt":"","featuredImage":false}
        };
        w.ThemeProFrontendConfig = {
          "ajaxurl":"#","nonce":"234bda0f2b",
          "urls":{"assets":"/demo-6/assets/plugins/theme-pro/assets/","rest":"#"},
          "settings":{"lazy_load_background_images":true},
          "popup":{"hasPopUps":true},
          "shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},
          "facebook_sdk":{"lang":"en_US","app_id":""},
          "lottie":{"defaultAnimationUrl":"/demo-6/assets/plugins/theme-pro/modules/lottie/assets/animations/default.json"}
        };
        const scripts = [
          "/demo-6/assets/system/js/jquery/jquery.minf43b.js?ver=3.7.1",
          "/demo-6/assets/system/js/jquery/jquery-migrate.min5589.js?ver=3.4.1",
          "/demo-6/assets/plugins/template-kit-export/assets/public/template-kit-export-public982a.js?ver=1.0.23",
          "/demo-6/assets/system/js/jquery/ui/core.minb37e.js?ver=1.13.3", "/demo-6/assets/system/js/jquery/ui/mouse.minb37e.js?ver=1.13.3", "/demo-6/assets/system/js/jquery/ui/slider.minb37e.js?ver=1.13.3", "/demo-6/assets/plugins/the-plus-addons-for-theme-page-builder/assets/js/extra/jquery.waypoints.minc540.js?ver=1782242818", "/demo-6/assets/plugins/the-plus-addons-for-theme-page-builder/assets/js/main/progress-bar/plus-progress-bar.minc540.js?ver=1782242818", "/demo-6/assets/plugins/theme/assets/js/webpack.runtime.mineda1.js?ver=4.1.4", "/demo-6/assets/plugins/theme/assets/js/frontend-modules.mineda1.js?ver=4.1.4", "/demo-6/assets/plugins/theme/assets/js/frontend.mineda1.js?ver=4.1.4", "/demo-6/assets/plugins/theme-pro/assets/lib/smartmenus/jquery.smartmenus.min1576.js?ver=1.2.1", "/demo-6/assets/plugins/theme-pro/assets/lib/lottie/lottie.min3f90.js?ver=5.6.6", "/demo-6/assets/plugins/theme-pro/assets/js/webpack-pro.runtime.min8aee.js?ver=4.1.2", "/demo-6/assets/system/js/dist/hooks.min394d.js?ver=7496969728ca0f95732d", "/demo-6/assets/system/js/dist/i18n.mineca5.js?ver=781d11515ad3d91786ec", "/demo-6/assets/plugins/theme-pro/assets/js/frontend.min8aee.js?ver=4.1.2", "/demo-6/assets/plugins/theme-pro/assets/js/elements-handlers.min8aee.js?ver=4.1.2"
        ];
        for (const src of scripts) {
          await loadScript(src);
        }
        window.dispatchEvent(new Event('DOMContentLoaded'));
        window.dispatchEvent(new Event('load'));
      }
    };
    
    initScripts();
  }, []);

  return null;
}
