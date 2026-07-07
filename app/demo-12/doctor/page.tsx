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
<h2 class="tpbreadcrumb-title">Doctors</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- team-area-start -->
<section class="team-area pt-145 pb-85">
<div class="container">
<div class="row">
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
<div class="team-3 p-relative text-center mb-55">
<div class="team-3-thumb mb-20">
<div class="team-3-thumb-main p-relative fix">
<img alt="" src="/demo-12/assets/img/team/team-3-thum-1.html"/>
<div class="team-3-shape">
<i>
<svg fill="none" height="189" viewbox="0 0 362 189" width="362" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V7.92377C0 107.931 81.04 189 181 189C280.96 189 362 107.921 362 7.91377V0L328.785 10.2766C232.513 40.0623 129.487 40.0624 33.2155 10.2766L0 0Z" fill="currentColor"></path>
</svg>
</i>
</div>
</div>
<div class="team-3-social">
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
</div>
</div>
<div class="team-3-content">
<h4 class="team-3-title"><a href="/demo-12/doctor-details">Dr. Farzana Leo</a></h4>
<span>Burn Plastic Surgeon</span>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
<div class="team-3 p-relative text-center mb-55">
<div class="team-3-thumb mb-20">
<div class="team-3-thumb-main p-relative fix">
<img alt="" src="/demo-12/assets/img/team/team-3-thum-2.html"/>
<div class="team-3-shape">
<i>
<svg fill="none" height="189" viewbox="0 0 362 189" width="362" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V7.92377C0 107.931 81.04 189 181 189C280.96 189 362 107.921 362 7.91377V0L328.785 10.2766C232.513 40.0623 129.487 40.0624 33.2155 10.2766L0 0Z" fill="currentColor"></path>
</svg>
</i>
</div>
</div>
<div class="team-3-social">
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
</div>
</div>
<div class="team-3-content">
<h4 class="team-3-title"><a href="/demo-12/doctor-details">Dr. Michle Jhon</a></h4>
<span>Eye Surgeon</span>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
<div class="team-3 p-relative text-center mb-55">
<div class="team-3-thumb mb-20">
<div class="team-3-thumb-main p-relative fix">
<img alt="" src="/demo-12/assets/img/team/team-3-thum-3.html"/>
<div class="team-3-shape">
<i>
<svg fill="none" height="189" viewbox="0 0 362 189" width="362" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V7.92377C0 107.931 81.04 189 181 189C280.96 189 362 107.921 362 7.91377V0L328.785 10.2766C232.513 40.0623 129.487 40.0624 33.2155 10.2766L0 0Z" fill="currentColor"></path>
</svg>
</i>
</div>
</div>
<div class="team-3-social">
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
</div>
</div>
<div class="team-3-content">
<h4 class="team-3-title"><a href="/demo-12/doctor-details">Dr. Jesifa Fardez</a></h4>
<span>Nose Surgeon</span>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
<div class="team-3 p-relative text-center mb-55">
<div class="team-3-thumb mb-20">
<div class="team-3-thumb-main p-relative fix">
<img alt="" src="/demo-12/assets/img/team/team-3-thum-4.html"/>
<div class="team-3-shape">
<i>
<svg fill="none" height="189" viewbox="0 0 362 189" width="362" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V7.92377C0 107.931 81.04 189 181 189C280.96 189 362 107.921 362 7.91377V0L328.785 10.2766C232.513 40.0623 129.487 40.0624 33.2155 10.2766L0 0Z" fill="currentColor"></path>
</svg>
</i>
</div>
</div>
<div class="team-3-social">
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
</div>
</div>
<div class="team-3-content">
<h4 class="team-3-title"><a href="/demo-12/doctor-details">Dr. Sonia Lopez</a></h4>
<span>Nose Surgeon</span>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
<div class="team-3 p-relative text-center mb-55">
<div class="team-3-thumb mb-20">
<div class="team-3-thumb-main p-relative fix">
<img alt="" src="/demo-12/assets/img/team/team-3-thum-5.html"/>
<div class="team-3-shape">
<i>
<svg fill="none" height="189" viewbox="0 0 362 189" width="362" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V7.92377C0 107.931 81.04 189 181 189C280.96 189 362 107.921 362 7.91377V0L328.785 10.2766C232.513 40.0623 129.487 40.0624 33.2155 10.2766L0 0Z" fill="currentColor"></path>
</svg>
</i>
</div>
</div>
<div class="team-3-social">
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
</div>
</div>
<div class="team-3-content">
<h4 class="team-3-title"><a href="/demo-12/doctor-details">Dr. Farandez Leo</a></h4>
<span>Lip Surgeon</span>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
<div class="team-3 p-relative text-center mb-55">
<div class="team-3-thumb mb-20">
<div class="team-3-thumb-main p-relative fix">
<img alt="" src="/demo-12/assets/img/team/team-3-thum-6.html"/>
<div class="team-3-shape">
<i>
<svg fill="none" height="189" viewbox="0 0 362 189" width="362" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V7.92377C0 107.931 81.04 189 181 189C280.96 189 362 107.921 362 7.91377V0L328.785 10.2766C232.513 40.0623 129.487 40.0624 33.2155 10.2766L0 0Z" fill="currentColor"></path>
</svg>
</i>
</div>
</div>
<div class="team-3-social">
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
</div>
</div>
<div class="team-3-content">
<h4 class="team-3-title"><a href="/demo-12/doctor-details">Dr. Jessica Chueo</a></h4>
<span>Skin Surgeon</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- team-area-end -->
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
