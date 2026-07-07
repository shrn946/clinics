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
<h2 class="tpbreadcrumb-title">Blog Grid</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- blog-area-start -->
<div class="blog-area pt-145 pb-110">
<div class="container">
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">Practicing The Art of Plastic Surgery For Skin</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-1.jpg"/>
</a>
</div>
<div class="blog-btn">
<a href="/demo-12/blog-details">Read More 
                              <span><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></span>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">The Surgeon General Says It Is Okay to Competition</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-2.jpg"/>
</a>
</div>
<div class="blog-btn">
<a href="/demo-12/blog-details">Read More 
                              <span><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></span>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">General Repairs High Quality At Great Prices</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-3.jpg"/>
</a>
</div>
<div class="blog-btn">
<a href="/demo-12/blog-details">Read More 
                              <span><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></span>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">Where Safety &amp; Skill Unite To Provide Natural Results</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-4.html"/>
</a>
</div>
<div class="blog-btn">
<a href="/demo-12/blog-details">Read More 
                              <span><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></span>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">Helping You Look And Feel Your Very Best</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-5.html"/>
</a>
</div>
<div class="blog-btn">
<a href="/demo-12/blog-details">Read More 
                              <span><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></span>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">A Meticulous Approach To Natural Results</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-6.html"/>
</a>
</div>
<div class="blog-btn">
<a href="/demo-12/blog-details">Read More 
                              <span><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></span>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">Making What's Good Even Better Surgery</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-7.html"/>
</a>
</div>
<div class="blog-btn">
<a href="/demo-12/blog-details">Read More 
                              <span><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></span>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">When You Feel Good We Feel Good Care</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-8.html"/>
</a>
</div>
<div class="blog-btn">
<a href="/demo-12/blog-details">Read More 
                              <span><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></span>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="blog-item mb-30">
<div class="blog-content">
<span class="blog-title under-line-theme"><a href="/demo-12/blog-details">The Delicate Art Of Blending Science &amp; Nature</a></span>
</div>
<div class="blog-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-sm-9.html"/>
</a>
</div>
<div class="blog-btn">
<a href="/demo-12/blog-details">Read More 
                              <span><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 10H15.8327" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></span>
</a>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-12">
<div class="blog-grid-btn text-center pt-35 mb-30">
<a class="tp-btn-theme" href="/demo-12/blog">Load More Blog</a>
</div>
</div>
</div>
</div>
</div>
<!-- blog-area-end -->
<!-- brand-slider-area-start -->
<section class="brand-slider-area">
<div class="brand-slider-wrap brand-slider-4">
<div class="brand-slide-active splide">
<div class="splide__track">
<div class="splide__list">
<div class="splide__slide">
<div class="brand-slider-item">
<h4 class="brand-slider-title"> <i><img alt="" src="/demo-12/assets/img/shape/brand-slider-icon-1.svg"/></i> <a href="#">Get In Touch</a> </h4>
</div>
</div>
<div class="splide__slide">
<div class="brand-slider-item">
<h4 class="brand-slider-title"><i> <img alt="" src="/demo-12/assets/img/shape/brand-slider-icon-1.svg"/></i> <a href="#">Healing Is Better</a></h4>
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
