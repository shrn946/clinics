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
<section class="banner-area theme-bg-8">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-7 order-2 order-lg-1">
<div class="tpbanner-7">
<div class="tpbanner-7-content">
<p>Best Selling Products</p>
<h2 class="tpbanner-7-title">Best Surgery Products</h2>
</div>
<div class="tpbanner-7-btn">
<a class="tp-btn" href="/demo-12/shop">Explore Our Shop</a>
</div>
</div>
</div>
<div class="col-lg-5 order-1 order-lg-2">
<div class="tpbanner-7-thumb">
<img alt="" src="/demo-12/assets/img/banner/banner-7-bg-1.html"/>
</div>
</div>
</div>
</div>
</section>
<!-- banner-area-end -->
<!-- category-area-start -->
<section class="category-area pt-130 pb-140">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="tpsection text-center mb-65">
<h2 class="tpsection-title">Popular Categories</h2>
</div>
</div>
</div>
<div class="category-7-slider">
<div class="swiper-container category-7-active">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="category-7 mb-20">
<div class="category-7-thumb tp-thumb-common">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/category/category-thumb-1.html"/>
</div>
<div class="category-7-content">
<a href="/demo-12/shop-details">Medical Equipments</a>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="category-7 mb-20">
<div class="category-7-thumb tp-thumb-common">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/category/category-thumb-2.html"/>
</div>
<div class="category-7-content">
<a href="/demo-12/shop-details">Surgery Products</a>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="category-7 mb-20">
<div class="category-7-thumb tp-thumb-common">
<div class="tp-thumb-common-overlay wow"></div>
<img alt="" src="/demo-12/assets/img/category/category-thumb-3.html"/>
</div>
<div class="category-7-content">
<a href="/demo-12/shop-details">Skin Care Cosmetics</a>
</div>
</div>
</div>
</div>
<div class="category-7-arrow d-flex align-items-center justify-content-center">
<div class="category-7-single-arrow category-7-button-prev">
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
<div class="category-7-single-arrow category-7-button-next ml-25">
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
</div>
</section>
<!-- category-area-end -->
<!-- banner-offer-area-start -->
<section class="banner-offer mb-130">
<div class="container">
<div class="banner-offer-bg p-relative">
<div class="row">
<div class="col-xxl-6 col-xl-7 col-lg-8">
<div class="banner-offer-wrapper">
<div class="tpsection mb-40">
<span>30% OFF ON FIRST ORDER</span>
<h2 class="tpsection-title mb-25">Let Eyes Reflect Your Beauty</h2>
<p>Let nature nourish your beauty</p>
</div>
<div class="banner-offer-btn">
<a class="tp-btn-theme" href="/demo-12/shop-details">Shop Now</a>
</div>
</div>
</div>
<div class="col-xxl-6 col-xl-5 col-lg-4">
<div class="banner-offer-thumb text-end wow fadeInRight" data-wow-delay=".2s" data-wow-duration="1s">
<img alt="" src="/demo-12/assets/img/banner/banner-offer-1.html"/>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- banner-offer-area-end -->
<!-- top-product-area-start -->
<section class="top-product-area pb-110">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="tpsection text-center mb-65">
<h2 class="tpsection-title">Top Rated Products</h2>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-12">
<div class="top-product-nav mb-90">
<nav>
<div class="nav nav-tabs" id="nav-tab" role="tablist">
<button aria-controls="nav-all" aria-selected="true" class="nav-link active" data-bs-target="#nav-all" data-bs-toggle="tab" id="nav-all-tab" role="tab" type="button"><span>All Products</span></button>
<button aria-controls="nav-popular" aria-selected="false" class="nav-link" data-bs-target="#nav-popular" data-bs-toggle="tab" id="nav-popular-tab" role="tab" type="button"><span>Medical Equipment</span></button>
<button aria-controls="nav-sale" aria-selected="false" class="nav-link" data-bs-target="#nav-sale" data-bs-toggle="tab" id="nav-sale-tab" role="tab" type="button"><span>Surgery Products</span></button>
<button aria-controls="nav-rate" aria-selected="false" class="nav-link" data-bs-target="#nav-rate" data-bs-toggle="tab" id="nav-rate-tab" role="tab" type="button"><span>Skin Care Cosmetics</span></button>
</div>
</nav>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-12">
<div class="tab-content" id="nav-tabContent">
<div aria-labelledby="nav-all-tab" class="tab-pane fade show active" id="nav-all" role="tabpanel">
<div class="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-1.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Skin Care</span>
<a href="/demo-12/shop-details">Vante - Agua De Arroz</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$39</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-2.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Body</span>
<a href="/demo-12/shop-details">Davines - Oi All in One Milk</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$12</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-3.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Lip Care</span>
<a href="/demo-12/shop-details">Romi - Elderflower</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$29</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-4.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Body</span>
<a href="/demo-12/shop-details">Cocooil - Body Oil</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$39</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-5.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Health</span>
<a href="/demo-12/shop-details">Marshol - Vitamin Sanitizer</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$59</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-6.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Skin Care</span>
<a href="/demo-12/shop-details">Laneige - Fresh Calming</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$32</h4>
</div>
</div>
</div>
</div>
</div>
</div>
<div aria-labelledby="nav-popular-tab" class="tab-pane fade" id="nav-popular" role="tabpanel">
<div class="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-4.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Body</span>
<a href="/demo-12/shop-details">Cocooil - Body Oil</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$39</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-5.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Health</span>
<a href="/demo-12/shop-details">Marshol - Vitamin Sanitizer</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$59</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-6.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Skin Care</span>
<a href="/demo-12/shop-details">Laneige - Fresh Calming</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$32</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-1.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Skin Care</span>
<a href="/demo-12/shop-details">Vante - Agua De Arroz</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$39</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-2.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Body</span>
<a href="/demo-12/shop-details">Davines - Oi All in One Milk</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$12</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-3.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Lip Care</span>
<a href="/demo-12/shop-details">Romi - Elderflower</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$29</h4>
</div>
</div>
</div>
</div>
</div>
</div>
<div aria-labelledby="nav-sale-tab" class="tab-pane fade" id="nav-sale" role="tabpanel">
<div class="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-6.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Skin Care</span>
<a href="/demo-12/shop-details">Laneige - Fresh Calming</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$32</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-1.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Skin Care</span>
<a href="/demo-12/shop-details">Vante - Agua De Arroz</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$39</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-2.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Body</span>
<a href="/demo-12/shop-details">Davines - Oi All in One Milk</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$12</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-3.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Lip Care</span>
<a href="/demo-12/shop-details">Romi - Elderflower</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$29</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-4.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Body</span>
<a href="/demo-12/shop-details">Cocooil - Body Oil</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$39</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-5.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Health</span>
<a href="/demo-12/shop-details">Marshol - Vitamin Sanitizer</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$59</h4>
</div>
</div>
</div>
</div>
</div>
</div>
<div aria-labelledby="nav-rate-tab" class="tab-pane fade" id="nav-rate" role="tabpanel">
<div class="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-2.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Body</span>
<a href="/demo-12/shop-details">Davines - Oi All in One Milk</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$12</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-3.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Lip Care</span>
<a href="/demo-12/shop-details">Romi - Elderflower</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$29</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-4.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Body</span>
<a href="/demo-12/shop-details">Cocooil - Body Oil</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$39</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-1.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Skin Care</span>
<a href="/demo-12/shop-details">Vante - Agua De Arroz</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$39</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-2.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Body</span>
<a href="/demo-12/shop-details">Davines - Oi All in One Milk</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$12</h4>
</div>
</div>
</div>
</div>
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-6.html"/></a>
<div class="product-action-2 d-flex flex-column flex-wrap">
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM9 6V8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V6H17V8C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8V6H9Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.04999L9.364 3.46399L6.828 5.99999H20V7.99999H6.828L9.364 10.536L7.95 11.95L3 6.99999L7.95 2.04999Z" fill="currentColor"></path>
</svg>
</button>
<button class="product-action-btn" type="button">
<svg fill="none" height="19" viewbox="0 0 20 19" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div class="product-7-content d-flex align-items-center justify-content-between">
<div class="product-4-info">
<span>Skin Care</span>
<a href="/demo-12/shop-details">Laneige - Fresh Calming</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$32</h4>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-12">
<div class="top-product-all text-center pt-35 mb-30">
<a class="tp-btn-theme" href="/demo-12/shop">Brose Product Page</a>
</div>
</div>
</div>
</div>
</section>
<!-- top-product-area-end -->
<!-- choose-area-start -->
<section class="choose-area choose-7-bottom p-relative pb-120">
<div class="choose-7-bg"></div>
<div class="container">
<div class="choose-7-box pt-145">
<div class="row">
<div class="col-lg-6 col-md-6">
<div class="choose-7-thumb wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1s">
<img alt="" src="/demo-12/assets/img/choose/choose-7-thumb-1.html"/>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="choose-7-wrapper">
<div class="tpsection mb-55">
<h2 class="tpsection-title">Be Beautiful With Your Choice</h2>
<p>Lorem ipsum amet consectetur adipisicing elit, sedesd do eiusmod tempors incididunt  labore etshile dolore magna aliqua. Utased enim minim veniam quis nostrud autem vel eum.</p>
</div>
<div class="choose-7-btn">
<a class="tp-btn" href="/demo-12/shop">Explore Our Shop</a>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-xl-3 col-lg-4 col-md-6">
<div class="choose-7-item pt-170 mb-30">
<div class="choose-7-icon">
<span>
<svg fill="none" height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M21.332 4H1.33203V21.3333H21.332V4Z" stroke="#CD5F37" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M21.332 10.667H26.6654L30.6654 14.667V21.3337H21.332V10.667Z" stroke="#CD5F37" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M7.33333 27.9997C9.17428 27.9997 10.6667 26.5073 10.6667 24.6663C10.6667 22.8254 9.17428 21.333 7.33333 21.333C5.49238 21.333 4 22.8254 4 24.6663C4 26.5073 5.49238 27.9997 7.33333 27.9997Z" stroke="#CD5F37" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M24.6654 27.9997C26.5063 27.9997 27.9987 26.5073 27.9987 24.6663C27.9987 22.8254 26.5063 21.333 24.6654 21.333C22.8244 21.333 21.332 22.8254 21.332 24.6663C21.332 26.5073 22.8244 27.9997 24.6654 27.9997Z" stroke="#CD5F37" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</span>
</div>
<div class="choose-7-content">
<h4 class="choose-7-title">Free Delivery</h4>
<span>Recapture beauty confidence incredible possibilities.</span>
</div>
</div>
</div>
<div class="col-xl-3 col-lg-4 col-md-6">
<div class="choose-7-item pt-170 mb-30">
<div class="choose-7-icon">
<span>
<svg fill="none" height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12.5333L10 5.61328" stroke="#CD5F37" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M28 21.3329V10.6662C27.9995 10.1986 27.8761 9.73929 27.6421 9.33443C27.408 8.92956 27.0717 8.59336 26.6667 8.35954L17.3333 3.02621C16.9279 2.79216 16.4681 2.66895 16 2.66895C15.5319 2.66895 15.0721 2.79216 14.6667 3.02621L5.33333 8.35954C4.92835 8.59336 4.59197 8.92956 4.35795 9.33443C4.12392 9.73929 4.00048 10.1986 4 10.6662V21.3329C4.00048 21.8005 4.12392 22.2598 4.35795 22.6647C4.59197 23.0695 4.92835 23.4057 5.33333 23.6395L14.6667 28.9729C15.0721 29.2069 15.5319 29.3301 16 29.3301C16.4681 29.3301 16.9279 29.2069 17.3333 28.9729L26.6667 23.6395C27.0717 23.4057 27.408 23.0695 27.6421 22.6647C27.8761 22.2598 27.9995 21.8005 28 21.3329Z" stroke="#CD5F37" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M4.35938 9.28027L15.9994 16.0136L27.6394 9.28027" stroke="#CD5F37" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M16 29.44V16" stroke="#CD5F37" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</span>
</div>
<div class="choose-7-content">
<h4 class="choose-7-title">100% Quality</h4>
<span>Recapture beauty confidence incredible possibilities.</span>
</div>
</div>
</div>
<div class="col-xl-5 offset-xl-1 col-lg-4 col-md-12">
<div class="choose-7-thumb-2 wow fadeInRight" data-wow-delay=".2s" data-wow-duration="1s">
<img alt="" src="/demo-12/assets/img/choose/choose-7-thumb-2.html"/>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- choose-area-end -->
<!-- testimonial-area-start -->
<section class="testimonial-area pb-120">
<div class="container">
<div class="swiper-container theme-bg-7 testimonial-7-active p-relative">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="row justify-content-center">
<div class="col-lg-8">
<div class="testimonial-7">
<div class="testimonial-7-rating text-center">
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
</div>
<div class="testimonial-7-content text-center pl-10 pr-10">
<h4 class="testimonial-7-title">“ Real plastic surgeons. Real results. The delicate blending science &amp; nature. Enhance your look your life. Look how you feel. Love how you look. Shaping your dreams into reality. A meticulous approach to natural results.”</h4>
</div>
<div class="testimonial-6-author d-flex align-items-center justify-content-center">
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
</div>
</div>
<div class="swiper-slide">
<div class="row justify-content-center">
<div class="col-lg-8">
<div class="testimonial-7">
<div class="testimonial-7-rating text-center">
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-sharp fa-solid fa-star-sharp"></i>
<i class="fa-regular fa-star-sharp-half-stroke"></i>
</div>
<div class="testimonial-7-content text-center pl-10 pr-10">
<h4 class="testimonial-7-title">“ Real plastic surgeons. Real results. The delicate blending science &amp; nature. Enhance your look your life. Love how you look. Shaping your dreams into reality. A meticulous approach to natural results.”</h4>
</div>
<div class="testimonial-6-author d-flex align-items-center justify-content-center">
<div class="testimonial-6-author-img">
<img alt="" src="/demo-12/assets/img/testimonial/testimonial-5-author-2.html"/>
</div>
<div class="testimonial-6-author-info ml-25">
<h5 class="testimonial-6-author-title">Farzana Leo</h5>
<span>Teacher</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="d-none d-lg-block">
<div class="testimonial-7-arrow d-flex align-items-center">
<div class="testimonial-7-button-prev">
<span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_326_651)">
<path d="M35 13.9954H3.29442e-07" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M13.5547 0C13.5547 7.73574 7.49212 13.9953 -0.000121431 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M-0.000121431 13.9954C7.49212 13.9954 13.5547 20.255 13.5547 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
</g>
<defs>
<clippath id="clip0_326_6513">
<rect fill="white" height="28" transform="matrix(-1 0 0 1 35 0)" width="35"></rect>
</clippath>
</defs>
</svg>
</span>
</div>
<div class="testimonial-7-button-next ml-25">
<span>
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_326_645)">
<path d="M0 13.9954H35" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
</g>
<defs>
<clippath id="clip0_326_6456">
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
</section>
<!-- testimonial-area-end -->
<!-- offer-area-start -->
<section class="offer-area pb-95">
<div class="container">
<div class="row">
<div class="col-lg-6">
<div class="offer-7-item mb-50">
<div class="offer-7-content">
<span>Get 15% OFF</span>
<h4 class="offer-7-title">For The Change <br/> In You</h4>
<div class="offer-7-btn">
<a href="/demo-12/shop-details">Shop Now</a>
</div>
</div>
<div class="offer-7-thumb wow fadeInRight" data-wow-delay=".2s" data-wow-duration="1s">
<img alt="" src="/demo-12/assets/img/banner/banner-offer-2.html"/>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="offer-7-item offer-7-item-2 mb-50">
<div class="offer-7-content">
<span>Splash Into Winter</span>
<h4 class="offer-7-title">For Protect <br/> Oily Skin</h4>
<div class="offer-7-btn">
<a href="/demo-12/shop-details">Shop Now</a>
</div>
</div>
<div class="offer-7-thumb wow fadeInRight" data-wow-delay=".2s" data-wow-duration="1s">
<img alt="" src="/demo-12/assets/img/banner/banner-offer-3.html"/>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- offer-area-end -->
<!-- blog-area-start -->
<section class="blog-area pb-85">
<div class="container">
<div class="row">
<div class="col-xl-6 col-lg-8">
<div class="blog-7-wrapper mb-65">
<div class="tpsection">
<h2 class="tpsection-title">Insights &amp; Article</h2>
</div>
</div>
</div>
<div class="col-xl-6 col-lg-4 align-self-end">
<div class="blog-7-all mb-60 text-end">
<a class="tp-btn" href="/demo-12/blog-grid">Read All Blogs</a>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="blog-7-item mb-50 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
<div class="blog-7-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-7-thumb-1.html"/>
</a>
</div>
<div class="blog-7-content">
<span>21 December, 2023</span>
<h4 class="blog-7-title"><a href="/demo-12/blog-details">We’ll Get Mountain Out Of Molehills</a></h4>
<div class="blog-7-btn">
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
<div class="blog-7-item mb-50 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
<div class="blog-7-thumb tp-thumb-common fix">
<div class="tp-thumb-common-overlay wow"></div>
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-7-thumb-2.html"/>
</a>
</div>
<div class="blog-7-content">
<span>21 December, 2023</span>
<h4 class="blog-7-title"><a href="/demo-12/blog-details">Safety &amp; Skill Unite to Natural Results</a></h4>
<div class="blog-7-btn">
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
<div class="col-lg-4 col-md-12">
<div class="blog-7-banner mb-50 wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
<h4 class="blog-7-banner-title text-center">“Matte or Gloss, come to us and we will tell you!
                           You will love the beauty you will see the mirror.”</h4>
</div>
</div>
</div>
</div>
</section>
<!-- blog-area-end -->
<!-- instagram-area-start -->
<section class="instagram-area">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="instagram-title text-center mb-75">
<div class="tpsection">
<h2 class="tpsection-title">Instagram Shop</h2>
</div>
</div>
</div>
</div>
</div>
<div class="instagram-7-wrapper">
<div class="container-fluid">
<div class="row gx-7">
<div class="col-lg-4 col-md-12">
<div class="row gx-7">
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="instagram-7-thumb mb-10 wow fadeInUp">
<a class="popup-image" href="/demo-12/assets/img/instagram/insta-7/insta-1.html"><img alt="" src="/demo-12/assets/img/instagram/insta-7/insta-1.html"/></a>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="instagram-7-thumb mb-10 wow fadeInUp">
<a class="popup-image" href="/demo-12/assets/img/instagram/insta-7/insta-2.html"><img alt="" src="/demo-12/assets/img/instagram/insta-7/insta-2.html"/></a>
</div>
</div>
</div>
<div class="row gx-7">
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="instagram-7-thumb mb-10 wow fadeInDown">
<a class="popup-image" href="/demo-12/assets/img/instagram/insta-7/insta-3.html"><img alt="" src="/demo-12/assets/img/instagram/insta-7/insta-3.html"/></a>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="instagram-7-thumb mb-10 wow fadeInDown">
<a class="popup-image" href="/demo-12/assets/img/instagram/insta-7/insta-4.html"><img alt="" src="/demo-12/assets/img/instagram/insta-7/insta-4.html"/></a>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-12">
<div class="instagram-7-thumb mb-10">
<a class="popup-image" href="/demo-12/assets/img/instagram/insta-7/insta-5.html"><img alt="" src="/demo-12/assets/img/instagram/insta-7/insta-5.html"/></a>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="instagram-7-wrapper">
<div class="row gx-7">
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="instagram-7-thumb mb-10 wow fadeInUp">
<a class="popup-image" href="/demo-12/assets/img/instagram/insta-7/insta-6.html"><img alt="" src="/demo-12/assets/img/instagram/insta-7/insta-6.html"/></a>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="instagram-7-thumb mb-10 wow fadeInUp">
<a class="popup-image" href="/demo-12/assets/img/instagram/insta-7/insta-7.html"><img alt="" src="/demo-12/assets/img/instagram/insta-7/insta-7.html"/></a>
</div>
</div>
</div>
<div class="row gx-7">
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="instagram-7-thumb mb-10 wow fadeInDown">
<a class="popup-image" href="/demo-12/assets/img/instagram/insta-7/insta-8.html"><img alt="" src="/demo-12/assets/img/instagram/insta-7/insta-8.html"/></a>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6">
<div class="instagram-7-thumb mb-10 wow fadeInDown">
<a class="popup-image" href="/demo-12/assets/img/instagram/insta-7/insta-9.html"><img alt="" src="/demo-12/assets/img/instagram/insta-7/insta-9.html"/></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- instagram-area-end -->
</main>
<!-- footer-area-start -->

<!-- footer-area-end -->
<!-- JS here -->



















`}} />
  );
}
