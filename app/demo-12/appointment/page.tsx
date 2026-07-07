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
<h2 class="tpbreadcrumb-title">Appointment</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- appoinment-area-start -->
<div class="form-area grey-bg-2 pt-140">
<div class="container">
<div class="row align-items-center">
<div class="col-xl-6 col-lg-6 align-self-end">
<div class="appoinment-2-thumb">
<div class="appoinment-2-thumb-main">
<img alt="" class="wow slideInLeft" data-wow-delay=".1s" data-wow-duration="1s" src="/demo-12/assets/img/banner/form-2-bg-1.html"/>
</div>
</div>
</div>
<div class="col-xl-6 col-lg-6">
<div class="appoinment-calender pb-60">
<a class="calendar" href="#"></a>
</div>
</div>
</div>
</div>
</div>
<!-- appoionment-area-end -->
<!-- appoinment-area-start -->
<section class="form-area pt-135 pb-65">
<div class="container">
<div class="row">
<div class="col-xl-6 col-lg-5">
<div class="schedules mb-60">
<div class="tpsection">
<h2 class="tpsection-title mb-35">Weekly Schedule</h2>
</div>
<div class="schedules-list">
<span>Satarday --------------------------------8am - 5pm</span>
<span>Sunday ---------------------------------8am - 5pm</span>
<span>Monday -------------------------------- 8am - 5pm</span>
<span>Tuesday --------------------------------8am - 5pm</span>
<span>Wednesday -----------------------------8am - 5pm</span>
<span>Thurshday ------------------------------8am - 5pm</span>
</div>
</div>
</div>
<div class="col-xl-6 col-lg-7">
<div class="appoinment-2 appoinment-3 mb-50">
<div class="appoinment-2">
<form action="#">
<div class="row">
<div class="col-lg-6">
<div class="appoinment-form-input mb-30">
<input placeholder="Your Name" type="text"/>
</div>
</div>
<div class="col-lg-6">
<div class="appoinment-form-input mb-30">
<input placeholder="Phone" type="text"/>
</div>
</div>
<div class="col-lg-12">
<div class="appoinment-form-input mb-30">
<input placeholder="Email Address" type="email"/>
</div>
</div>
<div class="col-lg-6">
<div class="appoinment-form-input">
<select class="doctor-name wide mb-30">
<option>Choose Doctor</option>
<option value="Cleaning Service">Dr. Jhong</option>
<option value="Iron Service">Dr. Phongsuk</option>
<option value="Carpet Service">Dr. Wagdhu</option>
</select>
</div>
</div>
<div class="col-lg-6">
<div class="appoinment-form-input">
<select class="doctor-name wide mb-30">
<option>Category</option>
<option value="Cleaning Service">Brain Surgery</option>
<option value="Iron Service">Plastic Surgery</option>
<option value="Carpet Service">Ear Reshaping</option>
</select>
</div>
</div>
<div class="col-lg-12">
<div class="appoinment-form-submit mb-30">
<button class="tp-btn">Get Appointment</button>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- appoionment-area-end -->
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
<a class="tp-round-btn" href="#">Contact Our Support</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- cta-area-end -->
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
