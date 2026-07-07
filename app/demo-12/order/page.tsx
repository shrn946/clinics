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
<h2 class="tpbreadcrumb-title">Track your order</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- order area start -->
<section class="tp-order-area pt-145 pb-145">
<div class="container">
<div class="tp-order-inner">
<div class="row gx-0">
<div class="col-lg-6">
<div class="tp-order-details" data-bg-color="#CD5F37">
<div class="tp-order-details-top text-center mb-70">
<div class="tp-order-details-icon">
<span>
<svg fill="none" height="52" viewbox="0 0 52 52" width="52" xmlns="http://www.w3.org/2000/svg">
<path d="M46 26V51H6V26" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M51 13.5H1V26H51V13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M26 51V13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M26 13.5H14.75C13.0924 13.5 11.5027 12.8415 10.3306 11.6694C9.15848 10.4973 8.5 8.9076 8.5 7.25C8.5 5.5924 9.15848 4.00269 10.3306 2.83058C11.5027 1.65848 13.0924 1 14.75 1C23.5 1 26 13.5 26 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M26 13.5H37.25C38.9076 13.5 40.4973 12.8415 41.6694 11.6694C42.8415 10.4973 43.5 8.9076 43.5 7.25C43.5 5.5924 42.8415 4.00269 41.6694 2.83058C40.4973 1.65848 38.9076 1 37.25 1C28.5 1 26 13.5 26 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</span>
</div>
<div class="tp-order-details-content">
<h3 class="tp-order-details-title">Your Order Confirmed</h3>
<p>We will send you a shipping confirmation email as soon <br/> as your order ships</p>
</div>
</div>
<div class="tp-order-details-item-wrapper">
<div class="row">
<div class="col-sm-6">
<div class="tp-order-details-item">
<h4>Order Date:</h4>
<p>April 10, 2023</p>
</div>
</div>
<div class="col-sm-6">
<div class="tp-order-details-item">
<h4>Expected Delivery: </h4>
<p>April 16, 2023</p>
</div>
</div>
<div class="col-sm-6">
<div class="tp-order-details-item">
<h4>Order Number:</h4>
<p>#9641</p>
</div>
</div>
<div class="col-sm-6">
<div class="tp-order-details-item">
<h4>Payment Method:</h4>
<p>Credit Card</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="tp-order-info-wrapper">
<h4 class="tp-order-info-title">Order Details</h4>
<div class="tp-order-info-list">
<ul>
<!-- header -->
<li class="tp-order-info-list-header">
<h4>Product</h4>
<h4>Total</h4>
</li>
<!-- item list -->
<li class="tp-order-info-list-desc">
<p>Protini Polypeptide Cream <span> x 2</span></p>
<span>\$274:00</span>
</li>
<li class="tp-order-info-list-desc">
<p>Black Rose Cream Mask <span> x 1</span></p>
<span>\$74:00</span>
</li>
<li class="tp-order-info-list-desc">
<p>Glow Screen Sunscreen  <span> x 3</span></p>
<span>\$362:00</span>
</li>
<li class="tp-order-info-list-desc">
<p>Body Works Mens Collection <span> x 1</span></p>
<span>\$145:00</span>
</li>
<!-- subtotal -->
<li class="tp-order-info-list-subtotal">
<span>Subtotal</span>
<span>\$507.00</span>
</li>
<!-- shipping -->
<!-- shipping -->
<li class="tp-order-info-list-shipping">
<span>Shipping</span>
<div class="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
<span>
<input id="shipping_info" type="checkbox"/>
<label for="shipping_info">Flat rate: <span>\$20.00</span></label>
</span>
</div>
</li>
<!-- total -->
<li class="tp-order-info-list-total">
<span>Total</span>
<span>\$1,476.00</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- order area end -->
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
