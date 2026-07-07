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
<!-- breadcrumb-area-start -->
<section class="breadcrumb-area tpbreadcrumb-overlay" data-background="assets/img/breadcrumb/breadcrumb-bg-1.html">
<div class="container">
<div class="row align-items-center">
<div class="col-12">
<div class="tpbreadcrumb text-center">
<h2 class="tpbreadcrumb-title">Cases Details</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- case-details-area-start -->
<section class="case-details-area pt-145 pb-105">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="case-details-thumb">
<img alt="" src="/demo-12/assets/img/portfolio/details/portfolio-details-1.html"/>
</div>
</div>
</div>
<div class="case-details-wrapper">
<div class="row">
<div class="col-lg-8">
<div class="case-details-content mb-105">
<h4 class="case-details-title">Make The Best First Impression</h4>
<p>Throughout history, the most important has been the division into surgical and internal medicine specialties. The surgical specialties are those in which an important part of diagnosis and treatment <br/> is achieved through major surgical techniques. The internal medicine specialties are the specialties <br/> in which the main diagnosis and treatment is never major surgery. In some countries, anesthesiology <br/> is classified as a surgical discipline, since it is vital in the surgical process, though anesthesiologists never perform major surgery themselves.</p>
<ul>
<li>Preparing for all type of surgeries and emergencies cases.</li>
<li>Always provide original and latest medicine for health care.</li>
<li>Doctors use advanced latest equipment for patient surgery.</li>
</ul>
</div>
</div>
<div class="col-lg-4">
<div class="case-details-info mb-40">
<ul>
<li>Services <span>Plastic Surgery</span></li>
<li>Clients <span>Watson Ferrari</span></li>
<li>Doctor <span>Michle Stiphen</span></li>
<li>Date <span>29 Sep, 2023</span></li>
<li>Share 
                                 <span>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
</span>
</li>
</ul>
</div>
</div>
</div>
</div>
<div class="case-details-gallery">
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="case-details-gallery-1 mb-40">
<img alt="" src="/demo-12/assets/img/portfolio/details/portfolio-details-2.html"/>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="case-details-gallery-1 mb-40">
<img alt="" src="/demo-12/assets/img/portfolio/details/portfolio-details-3.html"/>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="case-details-gallery-1 mb-40">
<img alt="" src="/demo-12/assets/img/portfolio/details/portfolio-details-4.html"/>
</div>
</div>
<div class="col-lg-12">
<div class="case-details-content mb-60">
<h4 class="case-details-title">Make The Best First Impression</h4>
<p>Throughout history, the most important has been the division into surgical and internal medicine specialties. The surgical specialties are those in which an important part of diagnosis and treatment is achieved through major surgical techniques. The internal medicine specialties are the specialties in which the main diagnosis and treatment is never major surgery. In some countries, anesthesiology is classified as a surgical discipline, since it is vital in the surgical process, though anesthesiologists never perform major surgery themselves.</p>
</div>
</div>
</div>
</div>
<div class="slider-post">
<div class="row">
<div class="col-lg-6 col-sm-6">
<div class="slider-post-prev mb-40">
<h4>
<a href="#">
<span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_326_651)"><path d="M35 13.9954H3.29442e-07" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path> <path d="M13.5547 0C13.5547 7.73574 7.49212 13.9953 -0.000121431 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path> <path d="M-0.000121431 13.9954C7.49212 13.9954 13.5547 20.255 13.5547 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></g><defs><clippath id="clip0_326_651"> <rect fill="white" height="28" transform="matrix(-1 0 0 1 35 0)" width="35"></rect></clippath> </defs>
</svg>
</span>
                                 Prev Case
                              </a>
</h4>
</div>
</div>
<div class="col-lg-6 col-sm-6">
<div class="slider-post-next text-end mb-40">
<h4>
<a href="#">
                                 Next Case
                                 <span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_326_645)"><path d="M0 13.9954H35" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></g><defs><clippath id="clip0_326_6451"><rect fill="white" height="28" width="35"></rect></clippath></defs>
</svg>
</span>
</a>
</h4>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- case-details-area-end -->
<!-- brand-slider-area-start -->
<section class="brand-slider-area">
<div class="brand-slider-wrap brand-slider-4">
<div class="brand-slide-active splide">
<div class="splide__track">
<div class="splide__list">
<div class="splide__slide">
<div class="brand-slider-item">
<h4 class="brand-slider-title"> <i><img alt="" src="/demo-12/assets/img/shape/brand-slider-icon-1.html"/></i> <a href="#">Get In Touch</a> </h4>
</div>
</div>
<div class="splide__slide">
<div class="brand-slider-item">
<h4 class="brand-slider-title"><i> <img alt="" src="/demo-12/assets/img/shape/brand-slider-icon-1.html"/></i> <a href="#">Healing Is Better</a></h4>
</div>
</div>
<div class="splide__slide">
<div class="brand-slider-item">
<h4 class="brand-slider-title"> <a href="#">Improving life</a></h4>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- brand-slider-area-end -->
</main>
<!-- footer-area-start -->

<!-- footer-area-end -->
<!-- JS here -->






















`}} />
  );
}
