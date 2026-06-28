(function ($) {
    "use strict";

    window.initThemePlugins = function() {
        var $window = $(window); 
        var $body = $('body'); 

        /* Preloader Effect */
        $(".preloader").fadeOut(600);

        /* Sticky Header */
        $window.off("scroll.theme resize.theme");
        
        // Always set header height and sticky behavior if sticky exists
        if($('.header-sticky').length){
            $window.on('resize.theme', function(){
                setHeaderHeight();
            });

            function setHeaderHeight(){
                $("header.main-header").css("height", $('header .header-sticky').outerHeight());
            }    
            
            setHeaderHeight();
        
            $window.on("scroll.theme", function() {
                var fromTop = $window.scrollTop();
                setHeaderHeight();
                var headerHeight = $('header .header-sticky').outerHeight();
                $("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
                $("header .header-sticky").toggleClass("active", (fromTop > 600));
            });
        }    
        
        /* Slick Menu JS (Now handled natively by Header.tsx in React) */
        /*
        $('.responsive-menu').empty();
        $('.navbar-toggle').empty();
        $('#menu').slicknav({
            label : '',
            prependTo : '.responsive-menu'
        });
        
        // Auto-close menu when a mobile menu item is clicked
        $(document).off('click.slicknav', '.slicknav_nav a').on('click.slicknav', '.slicknav_nav a', function() {
            $('#menu').slicknav('close');
        });
        */

        if($("a[href='#top']").length){
            $("a[href='#top']").off('click').click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        }
        
        /* Image Comparison JS */
        if ($('.transformation_image').length) {
            $(".transformation_image").twentytwenty({
                no_overlay: true,
            });
        }

        /* Hero Slider Layout JS */
        if ($('.hero-slider-layout .swiper').length) {
            const hero_slider_layout = new Swiper('.hero-slider-layout .swiper', {
                slidesPerView : 1,
                speed: 1000,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 4000,
                },
                pagination: {
                    el: '.hero-pagination',
                    clickable: true,
                },
            });
        }
        
        /* testimonial Slider JS */
        if ($('.testimonial-slider').length) {
            const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
                slidesPerView : 1,
                speed: 1000,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.testimonial-button-next',
                    prevEl: '.testimonial-button-prev',
                },
                breakpoints: {
                    768:{
                        slidesPerView: 1,
                    },
                    991:{
                        slidesPerView: 1,
                    }
                }
            });
        }

        /* Service Single Image Carousel JS */
        if ($('.service-single-slider').length) {
            const service_single_slider = new Swiper('.service-single-slider .swiper', {
                slidesPerView : 1,
                speed: 1000,
                spaceBetween: 10,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.service-single-button-next',
                    prevEl: '.service-single-button-prev',
                },
            });
        }

        /* Skill Bar */
        if ($('.skills-progress-bar').length) {
            $('.skills-progress-bar').waypoint(function() {
                $('.skillbar').each(function() {
                    $(this).find('.count-bar').animate({
                    width:$(this).attr('data-percent')
                    },2000);
                });
            },{
                offset: '50%'
            });
        }

        /* Youtube Background Video JS */
        if ($('#herovideo').length) {
            var myPlayer = $("#herovideo").YTPlayer();
        }

        /* Init Counter */
        if ($('.counter').length) {
            $('.counter').counterUp({ delay: 6, time: 3000 });
        }

        // Clean up GSAP and ScrollTriggers before starting
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.getAll().forEach(t => t.kill());
            gsap.registerPlugin(ScrollTrigger);

            /* Image Reveal Animation */
            if ($('.reveal').length) {
                let revealContainers = document.querySelectorAll(".reveal");
                revealContainers.forEach((container) => {
                    let image = container.querySelector("img");
                    if (!image) return;
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: container,
                            toggleActions: "play none none none"
                        }
                    });
                    tl.set(container, {
                        autoAlpha: 1
                    });
                    tl.from(container, 1, {
                        xPercent: -100,
                        ease: Power2.out
                    });
                    tl.from(image, 1, {
                        xPercent: 100,
                        scale: 1,
                        delay: -1,
                        ease: Power2.out
                    });
                });
            }

            /* Text Effect Animation (Now handled natively by CSS animations to avoid React hydration issues) */
            /*
            if (typeof SplitText !== 'undefined') {
                if ($('.text-anime-style-1').length) {
                    let staggerAmount     = 0.05,
                        delayValue         = 0.5,
                        animatedTextElements = document.querySelectorAll('.text-anime-style-1');
                    
                    animatedTextElements.forEach((element) => {
                        let animationSplitText = new SplitText(element, { type: "chars, words" });
                        gsap.from(animationSplitText.words, {
                            duration: 1,
                            delay: delayValue,
                            x: 20,
                            autoAlpha: 0,
                            stagger: staggerAmount,
                            scrollTrigger: { trigger: element, start: "top 85%" },
                        });
                    });        
                }
                
                if ($('.text-anime-style-2').length) {                
                    let    staggerAmount         = 0.03,
                         translateXValue    = 20,
                         delayValue         = 0.1,
                         easeType             = "power2.out",
                         animatedTextElements = document.querySelectorAll('.text-anime-style-2');
                    
                    animatedTextElements.forEach((element) => {
                        let animationSplitText = new SplitText(element, { type: "chars, words" });
                        gsap.from(animationSplitText.chars, {
                            duration: 1,
                            delay: delayValue,
                            x: translateXValue,
                            autoAlpha: 0,
                            stagger: staggerAmount,
                            ease: easeType,
                            scrollTrigger: { trigger: element, start: "top 85%"},
                        });
                    });        
                }
                
                if ($('.text-anime-style-3').length) {        
                    let    animatedTextElements = document.querySelectorAll('.text-anime-style-3');
                    
                    animatedTextElements.forEach((element) => {
                        element.split = new SplitText(element, {
                            type: "lines,words,chars",
                            linesClass: "split-line",
                        });
                        gsap.set(element, { perspective: 400 });
 
                        gsap.set(element.split.chars, {
                            opacity: 0,
                            x: "50",
                        });
 
                        gsap.to(element.split.chars, {
                            scrollTrigger: { trigger: element,    start: "top 90%" },
                            x: "0",
                            y: "0",
                            rotateX: "0",
                            opacity: 1,
                            duration: 1,
                            ease: Back.easeOut,
                            stagger: 0.02,
                        });
                    });        
                }
            }
            */
        }

        /* Parallaxie js */
        var $parallaxie = $('.parallaxie');
        if($parallaxie.length && ($window.width() > 991))
        {
            if ($window.width() > 768) {
                $parallaxie.parallaxie({
                    speed: 0.55,
                    offset: 0,
                });
            }
        }

        /* Zoom Gallery screenshot */
        if ($('.gallery-items').length) {
            $('.gallery-items').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom',
                image: {
                    verticalFit: true,
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    opener: function(element) {
                      return element.find('img');
                    }
                }
            });
        }

        /* Animated Wow Js */    
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }
    };

    $(document).ready(function() {
        window.initThemePlugins();
    });
})(jQuery);