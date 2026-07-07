'use client';

import React, {useEffect} from 'react';

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = (window as any).jQuery;
      if ($) {
        $(window).trigger('resize');
        if (typeof (window as any).WOW !== 'undefined') {
          try {
            new (window as any).WOW().init();
          } catch (e) {}
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{__html: `
<!--[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
      <![endif]-->
<!-- pre loader area start -->

<!-- pre loader area end -->
<!-- back to top start -->

<!-- back to top end -->
<!-- header area start -->

<!-- header area end -->
<!-- offcanvas area start -->
<div class="offcanvas__area">
<div class="offcanvas__wrapper">
<div class="offcanvas__close">
<button class="offcanvas__close-btn offcanvas-close-btn">
<svg fill="none" height="12" viewbox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11 1L1 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M1 1L11 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</button>
</div>
<div class="offcanvas__content">
<div class="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
<div class="offcanvas__logo logo">
<a href="/demo-12/index2">
<img alt="logo" src="/demo-12/assets/img/logo/logo.png"/>
</a>
</div>
</div>
<div class="tp-main-menu-mobile"></div>
<div class="offcanvas__btn">
<a class="tp-btn-offcanvas" href="/demo-12/contact">Getting Started <i class="fa-regular fa-chevron-right"></i></a>
</div>
<div class="side-info-contact">
<span>we are here</span>
<p>1489 Langley Ave <br/> Grand Forks Afb, North.</p>
</div>
<div class="side-info-social">
<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
</div>
</div>
</div>
</div>
<div class="body-overlay"></div>
<!-- offcanvas area end -->
<!-- header-search -->
<div class="tpsearchbar tp-sidebar-area">
<button class="tpsearchbar__close"><i class="fal fa-times"></i></button>
<div class="search-wrap text-center">
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-8 col-md-12 col-12 pt-100 pb-100">
<h2 class="tpsearchbar__title">What Are You Looking For?</h2>
<div class="tpsearchbar__form">
<form action="#">
<input name="search" placeholder="Search Product..." type="text"/>
<button class="tpsearchbar__search-btn"><i class="fal fa-search"></i></button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="search-body-overlay"></div>
<!-- header-search-end -->
<main>
<!-- banner-area-start -->
<section class="banner-area">
<div class="swiper-container slider-6-active">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="tpbanner-6-bg" data-background="assets/img/slider/slider-6/slider-6-bg-1.html">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="tpbanner-6 text-center">
<div class="tpbanner-6-content">
<p>Real plastic surgeons. Real results.</p>
<h2 class="tpbanner-6-title">Plastic Surgery</h2>
</div>
<div class="tpbanner-6-btn">
<a class="tp-round-btn" href="/demo-12/appointment">Get Started Now</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="tpbanner-6-bg" data-background="assets/img/slider/slider-6/slider-6-bg-2.html">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="tpbanner-6 text-center">
<div class="tpbanner-6-content">
<p>Real plastic surgeons. Real results.</p>
<h2 class="tpbanner-6-title">Nose Surgery</h2>
</div>
<div class="tpbanner-6-btn">
<a class="tp-round-btn" href="/demo-12/appointment">Get Started Now</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="tpbanner-6-bg" data-background="assets/img/slider/slider-6/slider-6-bg-3.html">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="tpbanner-6 text-center">
<div class="tpbanner-6-content">
<p>Real plastic surgeons. Real results.</p>
<h2 class="tpbanner-6-title">Brain Surgery</h2>
</div>
<div class="tpbanner-6-btn">
<a class="tp-round-btn" href="/demo-12/appointment">Get Started Now</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="tpbanner-6-bg" data-background="assets/img/slider/slider-6/slider-6-bg-4.html">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="tpbanner-6 text-center">
<div class="tpbanner-6-content">
<p>Real plastic surgeons. Real results.</p>
<h2 class="tpbanner-6-title">Lip Surgery</h2>
</div>
<div class="tpbanner-6-btn">
<a class="tp-round-btn" href="/demo-12/appointment">Get Started Now</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="slider-6-arrow d-none d-md-block">
<div class="slider-6-next">
<span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_326_645)">
<path d="M0 13.9954H35" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
</g>
<defs>
<clippath id="clip0_326_645">
<rect fill="white" height="28" width="35"></rect>
</clippath>
</defs>
</svg>
</span>
</div>
<div class="slider-6-prev">
<span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_326_651)">
<path d="M35 13.9954H3.29442e-07" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M13.5547 0C13.5547 7.73574 7.49212 13.9953 -0.000121431 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M-0.000121431 13.9954C7.49212 13.9954 13.5547 20.255 13.5547 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
</g>
<defs>
<clippath id="clip0_326_6512">
<rect fill="white" height="28" transform="matrix(-1 0 0 1 35 0)" width="35"></rect>
</clippath>
</defs>
</svg>
</span>
</div>
</div>
</div>
</section>
<!-- banner-area-end -->
<!-- about-area-start -->
<section class="about-area pt-135 pb-45">
<div class="container">
<div class="about-6-border">
<div class="row align-items-center">
<div class="col-lg-6">
<div class="about-6">
<h4 class="about-6-title">Improving Looks</h4>
</div>
</div>
<div class="col-lg-6">
<div class="about-6-shape d-flex align-items-center justify-content-end">
<div class="about-6-shape-1">
<img alt="" src="/demo-12/assets/img/about/about-6/about-6-shape-1.html"/>
</div>
<div class="about-6-shape-2">
<img alt="" src="/demo-12/assets/img/about/about-6/about-6-thumb-1.html"/>
</div>
<div class="about-6-shape-3">
<img alt="" src="/demo-12/assets/img/about/about-6/about-6-shape-2.html"/>
</div>
</div>
</div>
</div>
<div class="row align-items-center">
<div class="coll-lg-12">
<div class="about-6-wrap d-flex align-items-center mb-45">
<div class="about-6-btn mb-30">
<a class="tp-round-btn" href="/demo-12/about">Learn More</a>
</div>
<h4 class="about-6-title-2 mb-30">Changing Lives</h4>
<p>The betters you looking the more you. We’ll make this is mountains beauty.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- about-area-end -->
<!-- brand-area-start -->
<section class="brand-area pt-15 pb-120">
<div class="container">
<div class="row">
<div class="col-lg-3 col-md-4 col-6">
<div class="brand-6-wrap">
<h4 class="brand-6-title">Our Partner</h4>
</div>
</div>
<div class="col-lg-9 col-md-8 col-6">
<div class="brand-6-wrapper">
<div class="swiper-container brand-6-active">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="brand-6-item">
<img alt="" src="/demo-12/assets/img/brand/sponsor-1.svg"/>
</div>
</div>
<div class="swiper-slide">
<div class="brand-6-item">
<img alt="" src="/demo-12/assets/img/brand/sponsor-2.svg"/>
</div>
</div>
<div class="swiper-slide">
<div class="brand-6-item">
<img alt="" src="/demo-12/assets/img/brand/sponsor-3.svg"/>
</div>
</div>
<div class="swiper-slide">
<div class="brand-6-item">
<img alt="" src="/demo-12/assets/img/brand/sponsor-4.svg"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- brand-area-end -->
<!-- services-area-start -->
<section class="services-area theme-bg-7 pt-145 pb-115">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="services-6-wrapper">
<div class="tpsection text-center mb-60">
<span class="tpsection-round-subtitle mb-10">Our Services</span>
<h2 class="tpsection-title">Our Goal Is To Better Products</h2>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="services-6 text-center mb-30 wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">
<div class="services-6-thumb mb-25">
<img alt="" src="/demo-12/assets/img/services/services-6/services-6-thumb-1.html"/>
</div>
<div class="services-6-content">
<h4 class="services-6-title"><a href="/demo-12/service-details">Ear Reshaping</a></h4>
<p>Recapture beauty confidence incredible possibilities youthful impression.</p>
<div class="services-6-btn">
<a href="/demo-12/service-details">
<span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_331_1622)">
<path d="M0 13.9954H35" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
</g>
<defs>
<clippath id="clip0_331_16223">
<rect fill="currentColor" height="28" width="35"></rect>
</clippath>
</defs>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="services-6 text-center mb-30 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
<div class="services-6-thumb mb-25">
<img alt="" src="/demo-12/assets/img/services/services-6/services-6-thumb-2.html"/>
</div>
<div class="services-6-content">
<h4 class="services-6-title"><a href="/demo-12/service-details">Plastic Surgery</a></h4>
<p>Recapture beauty confidence incredible possibilities youthful impression.</p>
<div class="services-6-btn">
<a href="/demo-12/service-details">
<span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_331_1622)">
<path d="M0 13.9954H35" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
</g>
<defs>
<clippath id="clip0_331_162245">
<rect fill="currentColor" height="28" width="35"></rect>
</clippath>
</defs>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="services-6 text-center mb-30 wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1s">
<div class="services-6-thumb mb-25">
<img alt="" src="/demo-12/assets/img/services/services-6/services-6-thumb-3.html"/>
</div>
<div class="services-6-content">
<h4 class="services-6-title"><a href="/demo-12/service-details">Lip Preparations</a></h4>
<p>Recapture beauty confidence incredible possibilities youthful impression.</p>
<div class="services-6-btn">
<a href="/demo-12/service-details">
<span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_331_1622)">
<path d="M0 13.9954H35" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
</g>
<defs>
<clippath id="clip0_331_16224">
<rect fill="currentColor" height="28" width="35"></rect>
</clippath>
</defs>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- services-area-end -->
<!-- story-area-start -->
<section class="story-area pt-145 pb-80">
<div class="container">
<div class="row">
<div class="col-lg-6">
<div class="story-6-img mb-60">
<div class="story-6-thumb">
<img alt="" src="/demo-12/assets/img/about/story-6-bg-1.html"/>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="story-6-wrapper mb-60">
<div class="tpsection mb-60">
<span class="tpsection-round-subtitle mb-10">Our Story</span>
<h2 class="tpsection-title">Affordable Service Provide By Us</h2>
<p>Lorem ipsum amet consectetur adipisicing elit, sedesd do eiusmod tempors incididunt  labore etshile dolore magna aliqua. Utased enim minim veniam quis nostrud autem vel eum.</p>
</div>
<div class="story-6-time mb-25">
<div class="row">
<div class="col-lg-6">
<div class="story-6-time-item">
<span>
                                       Mon - Tues ---- 8am - 5pm
                                    </span>
</div>
</div>
<div class="col-lg-6">
<div class="story-6-time-item">
<span>
                                       Mon - Tues ---- 8am - 5pm
                                    </span>
</div>
</div>
<div class="col-lg-6">
<div class="story-6-time-item">
<span>
                                       Mon - Tues ---- 8am - 5pm
                                    </span>
</div>
</div>
<div class="col-lg-6">
<div class="story-6-time-item">
<span>
                                       Mon - Tues ---- 8am - 5pm
                                    </span>
</div>
</div>
</div>
</div>
<div class="story-6-btn">
<a class="tp-round-btn" href="/demo-12/service-details">Get Started Now</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- story-area-end -->
<!-- portfolio-area-start -->
<section class="portfolio-area portfolio-6-bg pt-145 mt-10 pb-105">
<div class="portfolio-6-theme-bg"></div>
<div class="container">
<div class="row align-items-center">
<div class="col-lg-7">
<div class="whitesection mb-65">
<span class="whitesection-round-subtitle mb-10">Portfolio</span>
<h2 class="whitesection-title">Recent Case Studies</h2>
</div>
</div>
<div class="col-lg-5">
<div class="whitesection mb-65">
<p>Nullam consequatu aspatyus donec  pellentie squedasu. Vestibulum volutpat pretium libero. Integer tincidun tincidunt tincidunt erat.</p>
</div>
</div>
</div>
</div>
<div class="portfolio-6-wrap">
<div class="container-fluid">
<div class="row gx-6">
<div class="col-lg-3 col-md-6">
<div class="portfolio-6-item portfolio-6-item-bottom mb-40 wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">
<div class="portfolio-6-thumb">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-6/portfolio-6-thumb-1.html"/>
</div>
<div class="portfolio-6-content">
<h4 class="portfolio-6-title"><a href="/demo-12/project-details">Preparation</a></h4>
<div class="portfolio-6-details">
<span><a href="/demo-12/project-details">Discover <br/> Now</a></span>
</div>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6">
<div class="portfolio-6-item mb-40 wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">
<div class="portfolio-6-thumb">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-6/portfolio-6-thumb-2.html"/>
</div>
<div class="portfolio-6-content">
<h4 class="portfolio-6-title"><a href="/demo-12/project-details">Brain Treatment</a></h4>
<div class="portfolio-6-details">
<span><a href="/demo-12/project-details">Discover <br/> Now</a></span>
</div>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6">
<div class="portfolio-6-item portfolio-6-item-bottom mb-40 wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1s">
<div class="portfolio-6-thumb">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-6/portfolio-6-thumb-3.html"/>
</div>
<div class="portfolio-6-content">
<h4 class="portfolio-6-title"><a href="/demo-12/project-details">Lip Treatment</a></h4>
<div class="portfolio-6-details">
<span><a href="/demo-12/project-details">Discover <br/> Now</a></span>
</div>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6">
<div class="portfolio-6-item mb-40 wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1s">
<div class="portfolio-6-thumb">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-6/portfolio-6-thumb-4.html"/>
</div>
<div class="portfolio-6-content">
<h4 class="portfolio-6-title"><a href="/demo-12/project-details"> Facial Expression </a></h4>
<div class="portfolio-6-details">
<span><a href="/demo-12/project-details">Discover <br/> Now</a></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- portfolio-area-end -->
<!-- pricing-area-start -->
<section class="pricing-area pb-85">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="pricing-title">
<div class="tpsection text-center mb-60">
<span class="tpsection-round-subtitle mb-10">Pricing Plan</span>
<h2 class="tpsection-title">Chooses Your Plan</h2>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-6 col-md-12">
<div class="tppricing tppricing-actives mb-60">
<div class="tppricing-thumb text-center p-relative">
<img alt="" src="/demo-12/assets/img/banner/pricing-6-thumb-1.html"/>
<span>Surgery Plan</span>
</div>
<div class="tppricing-content">
<div class="tppricing-price">
<h4 class="tppricing-ammount">\$589.00</h4>
<span>(No Credit Card Required)</span>
</div>
<ul class="tppricing-list">
<li>Make the best first impression <span>\$345.00</span></li>
<li>The difference is in the touch <span>\$76.00</span></li>
<li>Where beautification begins <span>\$23.00</span></li>
</ul>
<div class="tppricing-btn">
<button>Purchase This Plan</button>
</div>
</div>
</div>
</div>
<div class="col-lg-6 col-md-12">
<div class="tppricing mb-60">
<div class="tppricing-thumb text-center p-relative">
<img alt="" src="/demo-12/assets/img/banner/pricing-6-thumb-2.html"/>
<span>Skin Care</span>
</div>
<div class="tppricing-content">
<div class="tppricing-price">
<h4 class="tppricing-ammount">\$827.00</h4>
<span>(No Credit Card Required)</span>
</div>
<ul class="tppricing-list">
<li>Your body, your choice <span>\$345.00</span></li>
<li>Designed with you in mind <span>\$76.00</span></li>
<li>The beauty of self-confidence <span>\$23.00</span></li>
</ul>
<div class="tppricing-btn">
<button>Purchase This Plan</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- pricing-area-end -->
<!-- cta-area-start -->
<section class="cta-area cta-6-bg pt-100 pb-100" data-background="assets/img/banner/cta-6-bg-1.html">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="cta-6-content text-center">
<div class="whitesection mb-25">
<h2 class="whitesection-title mb-40">Enhance Your Look, <br/> Enhance Beauty</h2>
</div>
<div class="cta-6-btn">
<a class="tp-round-btn" href="/demo-12/contact">Contact Our Support</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- cta-area-end -->
<!-- testimonial-area-start -->
<section class="testimoial-area pt-120 pb-80">
<div class="container">
<div class="row">
<div class="col-lg-7">
<div class="testimonial-6 theme-bg-7 mb-60">
<div class="tpsection text-center mb-70">
<span class="tpsection-round-subtitle mb-10">Testimonial</span>
<h2 class="tpsection-title">Client’s Feedback</h2>
</div>
<div class="swiper-container testimonial-6-active">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="testimonial-6-item">
<div class="testimonial-6-content">
<p>
                                          “ Real plastic surgeons. Real results. The delicate blending science &amp; nature. Enhance your look your life. Look how you feel. Love how you look. Shaping your dreams into reality. A meticulous approach to natural results.”
                                       </p>
</div>
<div class="testimonial-6-author justify-content-center d-flex align-items-center">
<div class="testimonial-6-author-img">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-5-author-1.html"/>
</div>
<div class="testimonial-6-author-info ml-25">
<h5 class="testimonial-6-author-title">Farzana Leo</h5>
<span>Teacher</span>
</div>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="testimonial-6-item">
<div class="testimonial-6-content">
<p>
                                          “You can also share uplifting quotes with your patients. Just be reminded that the quote that you are using is aligned with the goals of your plastic surgery practice and properly credit who said the quote or where you got the image.”
                                       </p>
</div>
<div class="testimonial-6-author justify-content-center d-flex align-items-center">
<div class="testimonial-6-author-img">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-5-author-2.html"/>
</div>
<div class="testimonial-6-author-info ml-25">
<h5 class="testimonial-6-author-title">Farzana Rio</h5>
<span>Teacher</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-5">
<div class="testimonial-6-wrapper mb-60">
<div class="testimonial-6-info">
<div class="row">
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="testimonial-6-client mb-30 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
<h5 class="testimonial-6-client-title">Clients</h5>
<span class="count">378+</span>
<p>Total Reviews</p>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="testimonial-6-client testimonial-6-rating mb-30 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
<h5 class="testimonial-6-client-title">Rating</h5>
<span>Average</span>
<div class="rating">
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-regular fa-star-sharp-half-stroke"></i>
</div>
</div>
</div>
</div>
</div>
<div class="testimonial-6-thumb tp-thumb-common">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-6-bg-1.html"/>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- testimonial-area-end -->
<!-- blog-area-start -->
<section class="blog-area mb-100">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="tpsection text-center mb-70">
<span class="tpsection-round-subtitle mb-10">Blog &amp; News</span>
<h2 class="tpsection-title">Latest From News</h2>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="blog-6-item mb-40 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
<div class="blog-6-thumb">
<img alt="" src="/demo-12/assets/img/blog/blog-6-thumb-1.html"/>
</div>
<div class="blog-6-content">
<h4 class="blog-6-title"><a href="/demo-12/blog-details">We’ll Get Mountain Out Of Molehills</a></h4>
<p>Nullam consequatu aspatyus donec  pellentie squedasu. Vestibulum volutpat pretium libero.</p>
<div class="blog-6-btn">
<a href="/demo-12/blog-details">Read More
                                 <span>
<svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="blog-6-item mb-40 wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
<div class="blog-6-thumb">
<img alt="" src="/demo-12/assets/img/blog/blog-6-thumb-1.html"/>
</div>
<div class="blog-6-content">
<h4 class="blog-6-title"><a href="/demo-12/blog-details">Safety &amp; Skill Unite to Natural Results</a></h4>
<p>Nullam consequatu aspatyus donec  pellentie squedasu. Vestibulum volutpat pretium libero.</p>
<div class="blog-6-btn">
<a href="/demo-12/blog-details">Read More
                                 <span>
<svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="blog-6-item mb-40 wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1s">
<div class="blog-6-thumb">
<img alt="" src="/demo-12/assets/img/blog/blog-6-thumb-1.html"/>
</div>
<div class="blog-6-content">
<h4 class="blog-6-title"><a href="/demo-12/blog-details">Helping You Every Step of The Way</a></h4>
<p>Nullam consequatu aspatyus donec  pellentie squedasu. Vestibulum volutpat pretium libero.</p>
<div class="blog-6-btn">
<a href="/demo-12/blog-details">Read More
                                 <span>
<svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- blog-area-end -->
</main>
<!-- footer-area-start -->

<!-- footer-area-end -->
<!-- JS here -->



















`}} />
  );
}
