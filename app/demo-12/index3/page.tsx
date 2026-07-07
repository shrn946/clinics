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
<div class="offcanvas__content d-xl-none">
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
<div class="side-info d-none d-xl-block">
<div class="side-info-wrapper">
<div class="side-info-logo mb-30">
<a href="/demo-12/index2"><img alt="" src="/demo-12/assets/img/logo/logo.png"/></a>
</div>
<div class="side-info-content mb-45">
<h4 class="side-info-title">Your body LOVE IT. GET THE BEST FOR YOURSELF</h4>
</div>
<div class="side-info-gallery mb-55">
<a class="popup-image" href="/demo-12/assets/img/gallery/gallery-thumb-1.html"><img alt="" src="/demo-12/assets/img/gallery/gallery-thumb-1.html"/></a>
<a class="popup-image" href="/demo-12/assets/img/gallery/gallery-thumb-2.html"><img alt="" src="/demo-12/assets/img/gallery/gallery-thumb-2.html"/></a>
<a class="popup-image" href="/demo-12/assets/img/gallery/gallery-thumb-3.html"><img alt="" src="/demo-12/assets/img/gallery/gallery-thumb-3.html"/></a>
<a class="popup-image" href="/demo-12/assets/img/gallery/gallery-thumb-4.html"><img alt="" src="/demo-12/assets/img/gallery/gallery-thumb-4.html"/></a>
<a class="popup-image" href="/demo-12/assets/img/gallery/gallery-thumb-5.html"><img alt="" src="/demo-12/assets/img/gallery/gallery-thumb-5.html"/></a>
<a class="popup-image" href="/demo-12/assets/img/gallery/gallery-thumb-6.html"><img alt="" src="/demo-12/assets/img/gallery/gallery-thumb-6.html"/></a>
</div>
<div class="side-info-contact text-center">
<span>we are here</span>
<p>1489 Langley Ave <br/> Grand Forks Afb, North.</p>
</div>
<div class="side-info-social text-center">
<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
<a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a href="#"><i class="fa-solid fa-paper-plane"></i></a>
</div>
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
<section class="banner-area tpbanner-2-wrapper theme-bg-4 p-relative z-index-1 fix">
<div class="tpbanner-2-bg"></div>
<div class="container">
<div class="row">
<div class="order-2 order-lg-1 col-lg-6 align-self-end col-md-12">
<div class="tpbanner-2 p-relative">
<div class="tpbanner-2-thumb">
<img alt="" src="/demo-12/assets/img/banner/banner-2-img-1.html"/>
</div>
<div class="tpbanner-2-shape d-none d-md-block">
<div class="tpbanner-2-shape-1">
<img alt="" src="/demo-12/assets/img/banner/banner-2-shape-1.html"/>
</div>
<div class="tpbanner-2-shape-2">
<img alt="" src="/demo-12/assets/img/banner/banner-2-shape-2.html"/>
</div>
</div>
</div>
</div>
<div class="order-1 order-lg-2 col-lg-6 col-md-12">
<div class="tpbanner-2-content-2">
<h4 class="tpbanner-2-title-2">
                           Because Your <a class="tpbanner-2-btn" href="/demo-12/about">Explore Now</a> Precious
                        </h4>
<p>Recapture the beauty of self-confidence better you look, <br/> the more you see difference is in the touch.</p>
</div>
</div>
</div>
</div>
</section>
<!-- banner-area-end -->
<!-- about-area-start -->
<section class="about-area tpsection-top grey-bg-2 pt-100 pb-20">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6 col-md-8">
<div class="about-2-wrap mb-40 mt-40">
<div class="tpsection">
<h2 class="tpsection-title">Our Mission is to
                              Improve Skin</h2>
</div>
</div>
</div>
<div class="col-lg-2 col-md-4">
<div class="about-2-shape">
<div class="about-2-shape-1">
<img alt="" src="/demo-12/assets/img/shape/badge-round-1.html"/>
</div>
</div>
</div>
<div class="col-lg-4 col-md-12">
<div class="tpsection mb-40">
<p>
                           Lorem ipsum amet consectetur adipisicing elit, sedesd do eiusmod tempor incididunt  labore et dolore magna aliqua. Utased enim minim veniam quis nostrud.
                        </p>
</div>
</div>
</div>
<div class="row wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
<div class="col-lg-12">
<ul class="about-2-thumb mt-20">
<li>
<div class="about-2-thumb-item mb-30">
<img alt="" src="/demo-12/assets/img/about/about-2-thumb-1.html"/>
</div>
</li>
<li>
<div class="about-2-thumb-item mb-30">
<img alt="" src="/demo-12/assets/img/about/about-2-thumb-2.html"/>
</div>
</li>
<li>
<div class="about-2-thumb-item mb-30">
<img alt="" src="/demo-12/assets/img/about/about-2-thumb-3.html"/>
</div>
</li>
<li>
<div class="about-2-thumb-item mb-30">
<img alt="" src="/demo-12/assets/img/about/about-2-thumb-4.html"/>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>
<!-- about-area-end -->
<!-- counter-area-start -->
<section class="counter-area grey-bg-2 pb-100">
<div class="container">
<div class="row">
<div class="col-lg-3 col-md-6">
<div class="counter-item text-center mb-40">
<div class="counter-content">
<h2 class="count"><span class="odometer" data-count="5"></span>K</h2>
<p>Satisfied Customers</p>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6">
<div class="counter-item text-center mb-40">
<div class="counter-content">
<i class="count"><span class="odometer" data-count="23"></span></i>
<p>Professional Sergeon</p>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6">
<div class="counter-item text-center mb-40">
<div class="counter-content">
<i class="count"><span class="odometer" data-count="4.5"></span></i>
<p>Successful Cases</p>
</div>
</div>
</div>
<div class="col-lg-3 col-md-6">
<div class="counter-item text-center mb-40">
<div class="counter-content">
<h2 class="count"><span class="odometer" data-count="68"></span>K</h2>
<p>Branch In World</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- counter-area-end -->
<!-- before-after-area-start -->
<section class="before-after-area theme-bg-4 pt-140 pb-90">
<div class="container">
<div class="row">
<div class="col-lg-6">
<div class="before-after-2 mb-50">
<div class="tpsection">
<h2 class="tpsection-title mb-50">Our Goal Is To Better Products</h2>
<p>
                              Lorem ipsum amet consectetur adipisicing elit, sedesd do <br/> eiusmod tempor incididunt  labore et dolore magna aliqua. <br/> Utased enim minim veniam quis nostrud.
                           </p>
</div>
<div class="before-after-2-btn">
<a class="tp-btn-2" href="/demo-12/about">How Does It Works</a>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="before-after-2-thumb mb-50 wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
<div class="beforeAfter">
<img alt="" src="/demo-12/assets/img/before-after/before-after-2-thumb-1.html"/>
<img alt="" src="/demo-12/assets/img/before-after/before-after-2-thumb-2.html"/>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- before-after-area-end -->
<!-- services-area-start -->
<section class="services-area grey-bg-2 pt-140 pb-110">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="tpsection mb-65">
<h2 class="tpsection-title text-center">Our Services Field</h2>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="services-2 text-center mb-35 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
<div class="services-2-icon mb-30">
<i><img alt="" src="/demo-12/assets/img/services/services-icon-1.html"/></i>
</div>
<div class="services-2-content">
<h4 class="services-2-title mb-15"><a href="/demo-12/service-details">Plastic Surgery</a></h4>
<p>Lorem ipsum amet do consectetur adipisicing labor dolore. Recapture the beauty of confidence.</p>
</div>
<div class="services-2-btn">
<a href="/demo-12/service-details">Explore Now <i><svg fill="none" height="10" viewbox="0 0 12 10" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.166 4.81712L1.16602 4.81712" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M7.13281 0.800859L11.1661 4.81686L7.13281 8.83353" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></i></a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="services-2 text-center mb-35 wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
<div class="services-2-icon mb-30">
<i><img alt="" src="/demo-12/assets/img/services/services-icon-2.html"/></i>
</div>
<div class="services-2-content">
<h4 class="services-2-title mb-15"><a href="/demo-12/service-details">Ear Reshaping</a></h4>
<p>Lorem ipsum amet do consectetur adipisicing labor dolore. Recapture the beauty of confidence.</p>
</div>
<div class="services-2-btn">
<a href="/demo-12/service-details">Explore Now <i><svg fill="none" height="10" viewbox="0 0 12 10" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.166 4.81712L1.16602 4.81712" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M7.13281 0.800859L11.1661 4.81686L7.13281 8.83353" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></i></a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="services-2 text-center mb-35 wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
<div class="services-2-icon mb-30">
<i><img alt="" src="/demo-12/assets/img/services/services-icon-3.html"/></i>
</div>
<div class="services-2-content">
<h4 class="services-2-title mb-15"><a href="/demo-12/service-details">Lip Preparation</a></h4>
<p>Lorem ipsum amet do consectetur adipisicing labor dolore. Recapture the beauty of confidence.</p>
</div>
<div class="services-2-btn">
<a href="/demo-12/service-details">Explore Now <i><svg fill="none" height="10" viewbox="0 0 12 10" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.166 4.81712L1.16602 4.81712" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M7.13281 0.800859L11.1661 4.81686L7.13281 8.83353" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></i></a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- services-area-end -->
<!-- cta-area-start -->
<section class="cta-area cta-2-bg-2" data-background="assets/img/banner/cta-bg-2.html">
<div class="container">
<div class="row">
<div class="offset-xxl-5 offset-xl-3 col-xxl-7 col-xl-9">
<div class="cta-2-content">
<div class="tpsection">
<h2 class="tpsection-title mb-35">Have Any Questions? Get Free Consultation</h2>
</div>
<div class="cta-2-btn">
<a class="tp-btn-2" href="/demo-12/appointment">Get Appointment</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- cta-area-end -->
<!-- portfolio-area-start -->
<section class="portfolio-area grey-bg-2 pb-135 pt-140">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="tpsection text-center">
<h2 class="tpsection-title mb-65">Our Goal Is To Better <br/> Products</h2>
</div>
</div>
</div>
<div class="portfolio-wrap">
<div class="row gx-8 portfolio-active">
<div class="col-lg-6 col-md-6 portfolio-item-active">
<div class="portfolio-2 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
<div class="portfolio-2-thumb p-relative tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-1.html"/>
<div class="portfolio-2-badge">
<a href="/demo-12/project-details"><img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/></a>
</div>
</div>
<div class="portfolio-2-content">
<span>Non Surgical</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">The Art of Plastic Surgery</a></h5>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 portfolio-item-active">
<div class="portfolio-2 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
<div class="portfolio-2-thumb tp-thumb-common p-relative fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-2.html"/>
<div class="portfolio-2-badge">
<a href="/demo-12/project-details"><img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/></a>
</div>
</div>
<div class="portfolio-2-content">
<span>Liposaction</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">Caring for Our Patients</a></h5>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 portfolio-item-active">
<div class="portfolio-2 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
<div class="portfolio-2-thumb p-relative tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-3.html"/>
<div class="portfolio-2-badge">
<a href="/demo-12/project-details"><img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/></a>
</div>
</div>
<div class="portfolio-2-content">
<span>Implants</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">Just Imagine The Difference</a></h5>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 portfolio-item-active">
<div class="portfolio-2 wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
<div class="portfolio-2-thumb p-relative tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/portfolio/portfolio-4.html"/>
<div class="portfolio-2-badge">
<a href="/demo-12/project-details"><img alt="" src="/demo-12/assets/img/portfolio/portfolio--2-badge.html"/></a>
</div>
</div>
<div class="portfolio-2-content">
<span>Pender Unity</span>
<h5 class="portfolio-2-title"><a href="/demo-12/project-details">Love Yourself Inside And Out</a></h5>
</div>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-12">
<div class="portfolio-2-btn text-center">
<a class="tp-btn-2" href="/demo-12/project">View All Case Studies</a>
</div>
</div>
</div>
</div>
</section>
<!-- portfolio-area-end -->
<!-- sponsor-area-start -->
<section class="sponsore-area theme-bg pt-140 pb-70">
<div class="container">
<div class="row">
<div class="col-xxl-5 col-xl-4">
<div class="sponsore-2 mb-30">
<div class="tpsection">
<h2 class="tpsection-title mb-35"> Become A <br/> Partner</h2>
<p>Lorem ipsum amet does a consectetur <br/> adipisicing labor dolore. Recapture the <br/> beauty of confidence.</p>
</div>
<div class="sponsore-2-btn">
<a class="tp-btn-2" href="/demo-12/contact">Contact Us</a>
</div>
</div>
</div>
<div class="col-xxl-7 col-xl-8">
<div class="sponsore-2-thumb mb-30">
<div class="row">
<div class="col-lg-4 col-md-4 col-sm-6">
<div class="sponsore-2-item mb-40 wow fadeInRight" data-wow-delay=".6s" data-wow-duration="1s">
<i>
<img alt="" src="/demo-12/assets/img/shape/sponsore-2-icon-1.html"/>
</i>
</div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6">
<div class="sponsore-2-item mb-40 wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
<i>
<img alt="" src="/demo-12/assets/img/shape/sponsore-2-icon-2.html"/>
</i>
</div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6">
<div class="sponsore-2-item mb-40 wow fadeInLeft" data-wow-delay=".6s" data-wow-duration="1s">
<i>
<img alt="" src="/demo-12/assets/img/shape/sponsore-2-icon-3.html"/>
</i>
</div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6">
<div class="sponsore-2-item mb-40 wow fadeInRight" data-wow-delay=".6s" data-wow-duration="1s">
<i>
<img alt="" src="/demo-12/assets/img/shape/sponsore-2-icon-4.html"/>
</i>
</div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6">
<div class="sponsore-2-item mb-40 wow fadeInDown" data-wow-delay=".6s" data-wow-duration="1s">
<i>
<img alt="" src="/demo-12/assets/img/shape/sponsore-2-icon-5.html"/>
</i>
</div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6">
<div class="sponsore-2-item mb-40 wow fadeInLeft" data-wow-delay=".6s" data-wow-duration="1s">
<i>
<img alt="" src="/demo-12/assets/img/shape/sponsore-2-icon-6.html"/>
</i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- sponsor-area-end -->
<!-- testimonial-area-start -->
<section class="testimonial-area testimonial-2-wrapper theme-bg-4 pt-140">
<div class="container">
<div class="row justify-content-center">
<div class="col-xxl-8 col-lg-12">
<div class="tpsection">
<h2 class="tpsection-title text-center mb-65">What Says Our Client’s Says About Vamary</h2>
</div>
</div>
</div>
<div class="testimonial-2-active splide">
<div class="splide__track">
<div class="splide__list">
<div class="splide__slide">
<div class="testimonial-2 p-relative">
<div class="testimonial-2-rating">
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-regular fa-star-sharp-half-stroke"></i>
</div>
<div class="testimonial-2-content">
<p>“Fringilla utadeda mors tincidunt plastic surgery interdu euismo. Nullam consequatu volutpatyus donec  pellentie squedasu. Frin augue interdum euismo first impression.”</p>
<div class="testimonial-2-author">
<h4 class="testimonial-2-author-title">Michle Jhon</h4>
<span>Designer</span>
</div>
</div>
<div class="testimonial-2-shape">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-2-quote-1.html"/>
</div>
</div>
</div>
<div class="splide__slide">
<div class="testimonial-2 p-relative">
<div class="testimonial-2-rating">
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-regular fa-star-sharp-half-stroke"></i>
</div>
<div class="testimonial-2-content">
<p>I first saw Dr Jansen to replace breast implants from 30 years due to Cancer. He was kind,and explained the process .His staff was great. His work was the best decision I made.</p>
<div class="testimonial-2-author">
<h4 class="testimonial-2-author-title">Harvey D. Free</h4>
<span>Teacher</span>
</div>
</div>
<div class="testimonial-2-shape">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-2-quote-1.html"/>
</div>
</div>
</div>
<div class="splide__slide">
<div class="testimonial-2 p-relative">
<div class="testimonial-2-rating">
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-regular fa-star-sharp-half-stroke"></i>
</div>
<div class="testimonial-2-content">
<p>I first saw Dr Jansen to replace breast implants from 30 years due to Cancer. He was kind,and explained the process .His staff was great. His work was the best decision I made.</p>
<div class="testimonial-2-author">
<h4 class="testimonial-2-author-title">Harvey D. Free</h4>
<span>Doctor</span>
</div>
</div>
<div class="testimonial-2-shape">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-2-quote-1.html"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- testimonial-area-end -->
<!-- appoinment-area-start -->
<section class="form-area grey-bg-2 pt-140">
<div class="container">
<div class="row">
<div class="col-xl-6 col-lg-5 align-self-end">
<div class="appoinment-2-thumb">
<div class="appoinment-2-thumb-main">
<img alt="" class="wow slideInLeft" data-wow-delay=".1s" data-wow-duration="1s" src="/demo-12/assets/img/banner/form-2-bg-1.html"/>
</div>
</div>
</div>
<div class="col-xl-6 col-lg-7">
<div class="appoinment-2">
<div class="tpsection">
<h2 class="tpsection-title mb-65">Get Appointment From Our Experts</h2>
</div>
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
</div>
</section>
<!-- appoionment-area-end -->
</main>
<!-- footer-area-start -->

<!-- footer-area-end -->
<!-- JS here -->





















`}} />
  );
}
