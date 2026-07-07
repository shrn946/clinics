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
<h2 class="tpbreadcrumb-title">Cart</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- cart area start -->
<section class="tp-cart-area pt-145 pb-145">
<div class="container">
<div class="row">
<div class="col-xl-9 col-lg-8">
<div class="tp-cart-list mb-25 mr-30">
<table class="table">
<thead>
<tr>
<th class="tp-cart-header-product" colspan="2">Product</th>
<th class="tp-cart-header-price">Price</th>
<th class="tp-cart-header-quantity">Quantity</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<!-- img -->
<td class="tp-cart-img"><a href="/demo-12/shop-details"> <img alt="" src="/demo-12/assets/img/product/product-1.html"/></a></td>
<!-- title -->
<td class="tp-cart-title"><a href="/demo-12/shop-details">Legendary Whitetails Wmen's.</a></td>
<!-- price -->
<td class="tp-cart-price"><span>\$76.00</span></td>
<!-- quantity -->
<td class="tp-cart-quantity">
<div class="tp-product-quantity">
<span class="tp-cart-minus">
<svg fill="none" height="2" viewbox="0 0 10 2" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
<input class="tp-cart-input" type="text" value="1"/>
<span class="tp-cart-plus">
<svg fill="none" height="10" viewbox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M1 5H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
</div>
</td>
<!-- action -->
<td class="tp-cart-action">
<button class="tp-cart-action-btn">
<svg fill="none" height="10" viewbox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span>Remove</span>
</button>
</td>
</tr>
<tr>
<!-- img -->
<td class="tp-cart-img"><a href="/demo-12/shop-details"> <img alt="" src="/demo-12/assets/img/product/product-2.html"/></a></td>
<!-- title -->
<td class="tp-cart-title"><a href="/demo-12/shop-details">Tommy Hilfiger Women’s Jaden</a></td>
<!-- price -->
<td class="tp-cart-price"><span>\$44.00</span></td>
<!-- quantity -->
<td class="tp-cart-quantity">
<div class="tp-product-quantity">
<span class="tp-cart-minus">
<svg fill="none" height="2" viewbox="0 0 10 2" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
<input class="tp-cart-input" type="text" value="1"/>
<span class="tp-cart-plus">
<svg fill="none" height="10" viewbox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M1 5H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
</div>
</td>
<!-- action -->
<td class="tp-cart-action">
<button class="tp-cart-action-btn">
<svg fill="none" height="10" viewbox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span>Remove</span>
</button>
</td>
</tr>
<tr>
<!-- img -->
<td class="tp-cart-img"><a href="/demo-12/shop-details"> <img alt="" src="/demo-12/assets/img/product/product-3.html"/></a></td>
<!-- title -->
<td class="tp-cart-title"><a href="/demo-12/shop-details">Siliceous Lifting Correcting</a></td>
<!-- price -->
<td class="tp-cart-price"><span>\$62.00</span></td>
<!-- quantity -->
<td class="tp-cart-quantity">
<div class="tp-product-quantity">
<span class="tp-cart-minus">
<svg fill="none" height="2" viewbox="0 0 10 2" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
<input class="tp-cart-input" type="text" value="1"/>
<span class="tp-cart-plus">
<svg fill="none" height="10" viewbox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M1 5H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
</div>
</td>
<!-- action -->
<td class="tp-cart-action">
<button class="tp-cart-action-btn">
<svg fill="none" height="10" viewbox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span>Remove</span>
</button>
</td>
</tr>
<tr>
<!-- img -->
<td class="tp-cart-img"><a href="/demo-12/shop-details"> <img alt="" src="/demo-12/assets/img/product/product-4.html"/></a></td>
<!-- title -->
<td class="tp-cart-title"><a href="/demo-12/shop-details">Best Multi-Tasking Face Mist</a></td>
<!-- price -->
<td class="tp-cart-price"><span>\$93.00</span></td>
<!-- quantity -->
<td class="tp-cart-quantity">
<div class="tp-product-quantity">
<span class="tp-cart-minus">
<svg fill="none" height="2" viewbox="0 0 10 2" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
<input class="tp-cart-input" type="text" value="1"/>
<span class="tp-cart-plus">
<svg fill="none" height="10" viewbox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M1 5H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg>
</span>
</div>
</td>
<!-- action -->
<td class="tp-cart-action">
<button class="tp-cart-action-btn">
<svg fill="none" height="10" viewbox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span>Remove</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div class="tp-cart-bottom">
<div class="row align-items-end">
<div class="col-xl-6 col-md-8">
<div class="tp-cart-coupon">
<form action="#">
<div class="tp-cart-coupon-input-box">
<label>Coupon Code:</label>
<div class="tp-cart-coupon-input d-flex align-items-center">
<input placeholder="Enter Coupon Code" type="text"/>
<button type="submit">Apply</button>
</div>
</div>
</form>
</div>
</div>
<div class="col-xl-6 col-md-4">
<div class="tp-cart-update text-md-end">
<button class="tp-cart-update-btn" type="button">Update Cart</button>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-3 col-lg-4 col-md-6">
<div class="tp-cart-checkout-wrapper">
<div class="tp-cart-checkout-top d-flex align-items-center justify-content-between">
<span class="tp-cart-checkout-top-title">Subtotal</span>
<span class="tp-cart-checkout-top-price">\$742</span>
</div>
<div class="tp-cart-checkout-shipping">
<h4 class="tp-cart-checkout-shipping-title">Shipping</h4>
<div class="tp-cart-checkout-shipping-option-wrapper">
<div class="tp-cart-checkout-shipping-option">
<input id="flat_rate" name="shipping" type="radio"/>
<label for="flat_rate">Flat rate: <span>\$20.00</span></label>
</div>
<div class="tp-cart-checkout-shipping-option">
<input id="local_pickup" name="shipping" type="radio"/>
<label for="local_pickup">Local pickup: <span> \$25.00</span></label>
</div>
<div class="tp-cart-checkout-shipping-option">
<input id="free_shipping" name="shipping" type="radio"/>
<label for="free_shipping">Free shipping</label>
</div>
</div>
</div>
<div class="tp-cart-checkout-total d-flex align-items-center justify-content-between">
<span>Total</span>
<span>\$724</span>
</div>
<div class="tp-cart-checkout-proceed">
<a class="tp-cart-checkout-btn w-100" href="#">Proceed to Checkout</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- cart area end -->
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
