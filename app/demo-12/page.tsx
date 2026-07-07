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
<div class="col-md-8 col-12 pt-100 pb-100">
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
<!-- main-area-start -->
<main>
<!-- banner-area-start -->
<section class="banner-area theme-bg-2 p-relative">
<div class="container">
<div class="row">
<div class="col-lg-6">
<div class="tpbanner">
<div class="tpbanner-content">
<h2 class="tpbanner-title">Plastic Surgery</h2>
<b></b>
<p>The better you look the more you. We’ll make <br/> mountains beauty.</p>
</div>
<ul class="tpbanner-list">
<li class="tpbanner-list-1"><span>01 - Reconstructive Surgery</span></li>
<li class="tpbanner-list-2"><span>02 - Leap Preparation</span></li>
<li class="tpbanner-list-3"><span>03 - Ear Reshaping</span></li>
<li class="tpbanner-list-4"><span>04 - Skin Care</span></li>
</ul>
</div>
</div>
<div class="col-lg-6">
<div class="tpbanner-shape p-relative">
<div class="tpbanner-shape-1 d-lg-none d-xl-block">
<img alt="" src="/demo-12/assets/img/banner/banner-1-img-1.png"/>
</div>
<div class="tpbanner-shape-2 d-none d-lg-block">
<img alt="" src="/demo-12/assets/img/banner/banner-1shape-1.svg"/>
</div>
<div class="tpbanner-shape-3">
<img alt="" src="/demo-12/assets/img/banner/banner-1shape-2.svg"/>
</div>
</div>
</div>
</div>
</div>
<div class="tpbanner-video wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s">
<div class="tpbanner-video-info">
<a class="tp-btn" href="/demo-12/appointment">Get Appointment</a>
</div>
<div class="tpbanner-video-thumb p-relative">
<img alt="" src="/demo-12/assets/img/banner/video-1-bg-1.jpg"/>
<div class="tpbanner-video-play">
<a class="popup-video" href="https://www.youtube.com/watch?v=TYYf8zYjP5k">
<i>
<svg fill="none" height="24" viewbox="0 0 21 24" width="21" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10.268C21.3333 11.0378 21.3333 12.9623 20 13.7321L3.5 23.2583C2.16666 24.0281 0.500001 23.0659 0.500001 21.5263L0.500002 2.47372C0.500002 0.934117 2.16667 -0.0281314 3.5 0.741669L20 10.268Z" fill="currentColor"></path>
</svg>
</i>
</a>
</div>
</div>
</div>
</section>
<!-- banner-area-end -->
<!-- about-area-start -->
<section class="about-area pt-130 pb-90">
<div class="container">
<div class="row">
<div class="col-lg-4">
<div class="tpsection mt-20">
<div class="tpsection-sub-title">
<span>Who We Are</span>
</div>
</div>
<div class="about-thumb mt-70 wow fadeInUp mb-30" data-wow-delay=".6s" data-wow-duration="1s">
<img alt="" src="/demo-12/assets/img/about/about-thumb-1.png"/>
</div>
</div>
<div class="col-lg-8">
<div class="about-wrapper">
<div class="tpsection about-left mb-45">
<h2 class="tpsection-title">Exceptional Care <span><img alt="" class="d-none d-md-block wow fadeInRight" data-wow-delay=".6s" data-wow-duration="1s" src="/demo-12/assets/img/about/about-1-shape-1.png"/> </span> Exceptional Technology</h2>
</div>
<div class="about-box">
<div class="row">
<div class="col-lg-6 col-md-6">
<div class="about-box-content p-relative mb-30">
<p>Advancing medicine that touches you minds to community stronger your most important.</p>
<h5 class="about-box-title">Our Mission</h5>
<div class="about-box-shape">
<img alt="" src="/demo-12/assets/img/about/about-1-shape-2.png"/>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="about-box-content about-box-2 p-relative mb-30">
<p>Advancing medicine that touches you minds to community stronger your most important.</p>
<h5 class="about-box-title">Our Vision</h5>
<div class="about-box-shape">
<img alt="" src="/demo-12/assets/img/about/about-1-shape-2.png"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- about-area-end -->
<!-- brand-area-start -->
<div class="brand-area pb-140">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="swiper-container brand-active">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="brand-item">
<a href="#">
<img alt="" src="/demo-12/assets/img/brand/sponsor-1.html"/>
</a>
</div>
</div>
<div class="swiper-slide">
<div class="brand-item">
<a href="#">
<img alt="" src="/demo-12/assets/img/brand/sponsor-2.html"/>
</a>
</div>
</div>
<div class="swiper-slide">
<div class="brand-item">
<a href="#">
<img alt="" src="/demo-12/assets/img/brand/sponsor-3.html"/>
</a>
</div>
</div>
<div class="swiper-slide">
<div class="brand-item">
<a href="#">
<img alt="" src="/demo-12/assets/img/brand/sponsor-4.html"/>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- brand-area-end -->
<!-- before-after-area-start -->
<div class="before-after-area pb-135">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="beforeAfter">
<img alt="" src="/demo-12/assets/img/before-after/before-after-1.html"/>
<img alt="" src="/demo-12/assets/img/before-after/before-after-2.html"/>
</div>
</div>
</div>
</div>
</div>
<!-- before-after-area-end -->
<!-- team-area-start -->
<section class="team-area mb-120">
<div class="container">
<div class="row">
<div class="col-lg-9">
<div class="tpsection mb-65">
<div class="tpsection-sub-title">
<span>Who We Are</span>
</div>
<h2 class="tpsection-title">Our Expert Surgeon</h2>
</div>
</div>
<div class="col-lg-3 align-self-end">
<div class="team-arrows mb-65 d-flex align-items-center justify-content-end">
<div class="team-single-arrow team-button-prev">
<span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_326_651)">
<path d="M35 13.9954H3.29442e-07" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M13.5547 0C13.5547 7.73574 7.49212 13.9953 -0.000121431 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M-0.000121431 13.9954C7.49212 13.9954 13.5547 20.255 13.5547 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
</g>
<defs>
<clippath id="clip0_326_651">
<rect fill="white" height="28" transform="matrix(-1 0 0 1 35 0)" width="35"></rect>
</clippath>
</defs>
</svg>
</span>
</div>
<div class="team-single-arrow team-button-next ml-25">
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
</div>
</div>
</div>
<div class="swiper-container team-active">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="team-item tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<div class="team-profile">
<img alt="" src="/demo-12/assets/img/team/team-1.html"/>
</div>
<div class="team-content text-center">
<div class="team-author-social pt-50 pb-20">
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
</div>
<h4 class="team-author-title under-line-white"><a href="/demo-12/doctor-details">Dr. Michle Jhon</a> </h4>
<span class="team-author-position">Brain Surgeon</span>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="team-item tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<div class="team-profile">
<img alt="" src="/demo-12/assets/img/team/team-2.html"/>
</div>
<div class="team-content text-center">
<div class="team-author-social pt-50 pb-20">
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
</div>
<h4 class="team-author-title under-line-white"> <a href="/demo-12/doctor-details">Dr. Farzana Leo</a> </h4>
<span class="team-author-position">Skin Surgeon</span>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="team-item tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<div class="team-profile">
<img alt="" src="/demo-12/assets/img/team/team-3.html"/>
</div>
<div class="team-content text-center">
<div class="team-author-social pt-50 pb-20">
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
</div>
<h4 class="team-author-title under-line-white"> <a href="/demo-12/doctor-details">Dr. Jesif</a> </h4>
<span class="team-author-position">Brain Surgeon</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- team-area-end -->
<!-- appoinment-form-area-start -->
<section class="appoinment-form-area theme-bg-2 p-relative mb-140 pt-150 pb-140">
<div class="container">
<div class="row">
<div class="col-xxl-5 col-xl-6 col-lg-5">
<div class="tpsection mb-30">
<div class="tpsection-sub-title">
<span>Get Appointment</span>
</div>
<h2 class="tpsection-title">Submit Your Details To <br/> Book Yourself</h2>
</div>
</div>
<div class="col-xxl-7 col-xl-6 col-lg-7">
<div class="form-wrap wow fadeInRight" data-wow-delay=".7s" data-wow-duration="1.8s">
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
<div class="col-lg-6">
<div class="appoinment-form-input mb-30">
<input placeholder="Email Address" type="email"/>
</div>
</div>
<div class="col-lg-6">
<div class="appoinment-form-input mb-30">
<select class="doctor-name wide">
<option>Category</option>
<option value="Cleaning Service">Brain Surgery</option>
<option value="Iron Service">Plastic Surgery</option>
<option value="Carpet Service">Ear Reshaping</option>
</select>
</div>
</div>
<div class="col-lg-6">
<div class="appoinment-form-input mb-30">
<select class="doctor-name wide">
<option>Choose Doctor</option>
<option value="Cleaning Service">Dr. Jhong</option>
<option value="Iron Service">Dr. Phongsuk</option>
<option value="Carpet Service">Dr. Wagdhu</option>
</select>
</div>
</div>
<div class="col-lg-6">
<div class="appoinment-form-input mb-30">
<input placeholder="Date" type="text"/>
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
<div class="appoinment-shape">
<div class="appoinment-shape-1">
<img alt="" src="/demo-12/assets/img/shape/form-shape-1.html"/>
</div>
<div class="appoinment-shape-2">
<img alt="" src="/demo-12/assets/img/shape/form-shape-2.html"/>
</div>
</div>
</section>
<!-- appoinment-form-area-end -->
<!-- testimonial-area-start -->
<section class="testimonial-area mb-60">
<div class="container">
<div class="row">
<div class="col-xl-7 col-lg-6">
<div class="testimonial-wrap p-relative mt-20 mb-60">
<div class="testimonial-main-bg">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-1-bg-1.html"/>
</div>
<div class="testimonial-shape">
<div class="testimonial-shape-1 wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-1-bg-2.html"/>
</div>
</div>
<div class="happy-client">
<h2 class="count"><span class="odometer" data-count="26"></span>K</h2>
<p>Happy <br/> Customers</p>
</div>
</div>
</div>
<div class="col-xl-5 col-lg-6">
<div class="testimonial-wrapper mb-60">
<div class="tpsection mb-25">
<div class="tpsection-sub-title mb-15">
<span>Testimonial</span>
</div>
<h2 class="tpsection-title">What Our Customers Says About Us</h2>
</div>
<div class="testimonial-box p-relative">
<div class="testimonial-1-thumb">
<div class="swiper-container swiper test-ava-active">
<div class="swiper-wrapper testi-avta-bottom pt-20 pb-30">
<div class="swiper-slide">
<div class="testimonial-author-thumb">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-author-1.html"/>
</div>
</div>
<div class="swiper-slide">
<div class="testimonial-author-thumb">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-author-2.html"/>
</div>
</div>
<div class="swiper-slide">
<div class="testimonial-author-thumb">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-author-3.html"/>
</div>
</div>
</div>
</div>
</div>
<div class="testimonial-content">
<div class="swiper-container swiper test-active">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="testimonial-content">
<p>“Fringilla utade morbi tincidunt augu interdum velit euismo. Nullam consequat volutpat donec urna lorem pellentesque.Fringilla amusb morbi tincidunt.”</p>
<div class="testimonial-author">
<span class="testimonial-author-name">Ferrora Decosta</span>
<span class="testimonial-author-position">CTO</span>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="testimonial-content">
<p>“Fringilla utade morbi tincidunt augu interdum velit euismo. Nullam consequat volutpat donec urna lorem pellentesque.Fringilla amusb morbi tincidunt augue interdum velit euismo.”</p>
<div class="testimonial-author">
<span class="testimonial-author-name">Ferrora Decosta</span>
<span class="testimonial-author-position">CEO &amp; Founder</span>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="testimonial-content">
<p>“Fringilla utade morbi tincidunt augu interdum velit euismo. Nullam consequat volutpat donec urna lorem pellentesque.Fringilla amusb morbi tincidunt augue interdum velit euismo.”</p>
<div class="testimonial-author">
<span class="testimonial-author-name">Ferrora Decosta</span>
<span class="testimonial-author-position">Founder</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="testimonial-arrows d-flex align-items-center justify-content-end">
<div class="testimonial-single-arrow testimonial-button-prev">
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
<div class="testimonial-single-arrow testimonial-button-next ml-25">
<span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_326_645)">
<path d="M0 13.9954H35" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
</g>
<defs>
<clippath id="clip0_326_6455">
<rect fill="white" height="28" width="35"></rect>
</clippath>
</defs>
</svg>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- testimonial-area-end -->
<!-- cta-area-start -->
<section class="cta-area mb-120">
<div class="container">
<div class="cta-bg" data-background="assets/img/banner/cta-bg.html">
<div class="row align-items-center">
<div class="col-lg-9 col-md-9">
<div class="tpsection">
<div class="tpsection-sub-title">
<span>Get Appointment</span>
</div>
<h2 class="tpsection-title">Consultation With <br/> Our Doctor</h2>
</div>
</div>
<div class="col-lg-3 col-md-3">
<div class="cta-phone text-center pl-10">
<a class="tp-ripple" href="tel:0123456789"><i class="fa-light fa-phone-volume"></i></a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- cta-area-end -->
<!-- blog-area-start -->
<section class="blog-area mb-110">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="tpsection text-center mb-80">
<div class="blog-sub-title tpsection-sub-title mb-10">
                           Get Appointment
                        </div>
<h2 class="tpsection-title">Latest From Blogs</h2>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">Practicing The Art of Plastic Surgery For Skin</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-1.html"/>
</a>
</div>
<div class="blog-btn">
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
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30 wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">The Surgeon General Says It Is Okay to Competition</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-2.html"/>
</a>
</div>
<div class="blog-btn">
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
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30 wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">General Repairs High Quality At Great Prices</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-3.html"/>
</a>
</div>
<div class="blog-btn">
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
</section>
<!-- blog-area-end -->
<!-- brand-slider-area-start -->
<section class="brand-slider-area">
<div class="brand-slider-wrap">
<div class="brand-slide-active splide">
<div class="splide__track">
<div class="splide__list">
<div class="splide__slide">
<div class="brand-slider-item">
<h4 class="brand-slider-title"> <i><img alt="" src="/demo-12/assets/img/shape/brand-slider-icon-1.html"/></i> <a href="#">Under Great Care</a> </h4>
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
<!-- main-area-end -->
<!-- footer-area-start -->

<!-- footer-area-end -->
<!-- JS here -->




















`}} />
  );
}
