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
<h2 class="tpbreadcrumb-title">Shop</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- shop-area-start -->
<section class="shop-area pt-145 pb-110">
<div class="container">
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
<div class="col">
<div class="product-7 mb-30">
<div class="product-7-thumb text-center p-relative">
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-7.html"/></a>
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
<span>Pender Unity</span>
<a href="/demo-12/shop-details">Black Rose Cream Mask</a>
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
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-8.jpg"/></a>
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
<span>Breast Implants</span>
<a href="/demo-12/shop-details">Glow Screen Sunscreen</a>
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
<a href="/demo-12/shop-details"><img alt="" src="/demo-12/assets/img/product/product-7/product-9.html"/></a>
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
<span>Non Surgical</span>
<a href="/demo-12/shop-details">Rapid Response Masque</a>
</div>
<div class="product-7-price">
<h4 class="pricing">\$32</h4>
</div>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-12">
<div class="top-product-all text-center pt-35 mb-30">
<a class="tp-btn-theme" href="/demo-12/shop">Load More Products</a>
</div>
</div>
</div>
</div>
</section>
<!-- shop-area-end -->
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
