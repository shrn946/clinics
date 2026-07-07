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
<h2 class="tpbreadcrumb-title">Cases Studies</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- portfolio-area-start -->
<section class="portfolio-area grey-bg-2 pb-75 pt-145">
<div class="container">
<div class="portfolio-wrap">
<div class="row gx-8 portfolio-active">
<div class="col-lg-6 col-md-6 portfolio-item-active wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
<div class="portfolio-2">
<div class="portfolio-2-thumb tp-thumb-common p-relative fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-1.html"/>
<div class="portfolio-2-badge">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/>
</div>
</div>
<div class="portfolio-2-content">
<span>Non Surgical</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">The Art of Plastic Surgery</a></h5>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 portfolio-item-active wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
<div class="portfolio-2">
<div class="portfolio-2-thumb tp-thumb-common p-relative fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-2.html"/>
<div class="portfolio-2-badge">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/>
</div>
</div>
<div class="portfolio-2-content">
<span>Liposaction</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">Caring for Our Patients</a></h5>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 portfolio-item-active wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
<div class="portfolio-2">
<div class="portfolio-2-thumb tp-thumb-common p-relative fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-3.html"/>
<div class="portfolio-2-badge">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/>
</div>
</div>
<div class="portfolio-2-content">
<span>Implants</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">Just Imagine The Difference</a></h5>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 portfolio-item-active wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
<div class="portfolio-2">
<div class="portfolio-2-thumb tp-thumb-common p-relative fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-4.html"/>
<div class="portfolio-2-badge">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/>
</div>
</div>
<div class="portfolio-2-content">
<span>Pender Unity</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">Love Yourself Inside And Out</a></h5>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 portfolio-item-active wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
<div class="portfolio-2">
<div class="portfolio-2-thumb tp-thumb-common p-relative fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-5.html"/>
<div class="portfolio-2-badge">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/>
</div>
</div>
<div class="portfolio-2-content">
<span>Surgery</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">Enhance Looks And Beauty</a></h5>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 portfolio-item-active wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
<div class="portfolio-2">
<div class="portfolio-2-thumb tp-thumb-common p-relative fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-6.html"/>
<div class="portfolio-2-badge">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/>
</div>
</div>
<div class="portfolio-2-content">
<span>Implants</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">Real Results With Expert Care</a></h5>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 portfolio-item-active wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
<div class="portfolio-2">
<div class="portfolio-2-thumb tp-thumb-common p-relative fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-7.html"/>
<div class="portfolio-2-badge">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/>
</div>
</div>
<div class="portfolio-2-content">
<span>Lippsaction</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">Make The Best Impression</a></h5>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 portfolio-item-active wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
<div class="portfolio-2">
<div class="portfolio-2-thumb tp-thumb-common p-relative fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-8.html"/>
<div class="portfolio-2-badge">
<img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/>
</div>
</div>
<div class="portfolio-2-content">
<span>Pender Unity</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">The Difference Is In The Touch</a></h5>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- portfolio-area-end -->
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
