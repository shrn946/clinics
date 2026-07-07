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
<h2 class="tpbreadcrumb-title">Service Details</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- services-details-area-start -->
<section class="services-details pt-145 pb-95">
<div class="container">
<div class="row">
<div class="col-lg-4">
<div class="services-details-left mr-10">
<div class="services-details-others mb-40">
<span>Others Services</span>
<ul class="list">
<li>
<a href="#">Plustic Surgery
                                    <span>
<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4766 6.16689L6.00658 1.69689L7.18492 0.518555L13.6666 7.00022L7.18492 13.4819L6.00658 12.3036L10.4766 7.83355H0.333252V6.16689H10.4766Z" fill="currentColor"></path>
</svg>
</span>
</a>
</li>
<li>
<a href="#">Liposaction
                                    <span>
<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4766 6.16689L6.00658 1.69689L7.18492 0.518555L13.6666 7.00022L7.18492 13.4819L6.00658 12.3036L10.4766 7.83355H0.333252V6.16689H10.4766Z" fill="currentColor"></path>
</svg>
</span>
</a>
</li>
<li>
<a href="#">Breast Implant
                                    <span>
<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4766 6.16689L6.00658 1.69689L7.18492 0.518555L13.6666 7.00022L7.18492 13.4819L6.00658 12.3036L10.4766 7.83355H0.333252V6.16689H10.4766Z" fill="currentColor"></path>
</svg>
</span>
</a>
</li>
<li>
<a href="#">Pender Unity
                                    <span>
<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4766 6.16689L6.00658 1.69689L7.18492 0.518555L13.6666 7.00022L7.18492 13.4819L6.00658 12.3036L10.4766 7.83355H0.333252V6.16689H10.4766Z" fill="currentColor"></path>
</svg>
</span>
</a>
</li>
<li>
<a href="#">Non Surgical
                                    <span>
<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4766 6.16689L6.00658 1.69689L7.18492 0.518555L13.6666 7.00022L7.18492 13.4819L6.00658 12.3036L10.4766 7.83355H0.333252V6.16689H10.4766Z" fill="currentColor"></path>
</svg>
</span>
</a>
</li>
<li>
<a href="#">Nose Reshaping
                                    <span>
<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4766 6.16689L6.00658 1.69689L7.18492 0.518555L13.6666 7.00022L7.18492 13.4819L6.00658 12.3036L10.4766 7.83355H0.333252V6.16689H10.4766Z" fill="currentColor"></path>
</svg>
</span>
</a>
</li>
</ul>
</div>
<div class="services-details-cta mb-40">
<div class="services-details-cta-thumb">
<img alt="" src="/demo-12/assets/img/services/service-details/service-details-1.html"/>
</div>
<div class="services-details-cta-content">
<h4 class="services-details-cta-title">Need Emergency Call?</h4>
<a class="tp-btn" href="/demo-12/appointment">Get Consultation</a>
</div>
</div>
</div>
</div>
<div class="col-lg-8">
<div class="services-details-right">
<div class="services-details-item mb-55">
<div class="services-details-thumb mb-30">
<img alt="" src="/demo-12/assets/img/services/service-details/service-details-2.html"/>
</div>
<h4 class="services-details-item-title">The Better You Look, The More You See</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nisi urna. Curabitur ac ex eu odio dictum iaculis. Mauris quis elit nec ex fermentum pharetra eu ac magna. In et mauris libero. Morbi egestas massa nec lorem porttitor, ac posuere tellus faucibus. Nulla auctor volutpat libero vitae iaculis. Pellentesque non massa vel turpis sagittis fermentum. Sed convallis massa odio. Aliquam pulvinar quis nulla ac tempor. Mauris non nulla eget lacus interdum ullamcorper ac efficitur massa. Morbi dictum massa vel iaculis venenatis. Nunc a cursus lorem. In et varius felis. Nullam pellentesque vel ligula nec mollis. Sed condimentum urna id vulputate malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin lorem tortor, tincidunt eget dapibus sed, condimentum molestie mi. Ut ante arcu, aliquam nec consectetur et, varius mollis ex. Maece</p>
</div>
<div class="services-details-feature mb-25">
<ul>
<li>
<div class="services-details-feature-item">
<div class="services-details-feature-icon">
<span>
<svg fill="none" height="34" viewbox="0 0 28 34" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M14 21.9997C20.8 21.9997 26.41 27.0897 27.23 33.6663H0.77002C1.59002 27.0897 7.20002 21.9997 14 21.9997ZM10.9784 25.7997C8.58835 26.5563 6.57669 28.188 5.33335 30.333H14L10.9784 25.7997ZM17.0234 25.7997L14 30.333H22.665C21.4234 28.188 19.4117 26.5563 17.0234 25.7997V25.7997ZM24 0.333008V10.333C24 15.8563 19.5234 20.333 14 20.333C8.47669 20.333 4.00002 15.8563 4.00002 10.333V0.333008H24ZM7.33335 10.333C7.33335 14.0163 10.3167 16.9997 14 16.9997C17.6834 16.9997 20.6667 14.0163 20.6667 10.333H7.33335ZM20.6667 3.66634H7.33335V6.99967H20.6667V3.66634Z" fill="#CD5F37"></path>
</svg>
</span>
</div>
<div class="services-details-feature-content">
<h4 class="services-details-feature-title">Expert Sergeon</h4>
<p>Lorem ipsum dolors sitable ametu</p>
</div>
</div>
</li>
<li>
<div class="services-details-feature-item">
<div class="services-details-feature-icon">
<span>
<svg fill="none" height="32" viewbox="0 0 31 32" width="31" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33342 0V3.33333H4.00008V10C4.00008 13.6833 6.98341 16.6667 10.6667 16.6667C14.3501 16.6667 17.3334 13.6833 17.3334 10V3.33333H14.0001V0H19.0001C19.9201 0 20.6667 0.746667 20.6667 1.66667V10C20.6667 14.955 17.0634 19.0667 12.3334 19.8617V22.5C12.3334 25.7217 14.9451 28.3333 18.1667 28.3333C20.6617 28.3333 22.7917 26.7667 23.6251 24.5617C21.8801 23.7833 20.6667 22.0333 20.6667 20C20.6667 17.2383 22.9051 15 25.6667 15C28.4284 15 30.6667 17.2383 30.6667 20C30.6667 22.285 29.1334 24.2117 27.0401 24.8083C26.0167 28.7533 22.4317 31.6667 18.1667 31.6667C13.1034 31.6667 9.00008 27.5633 9.00008 22.5V19.8617C4.27008 19.0683 0.666748 14.955 0.666748 10V1.66667C0.666748 0.746667 1.41341 0 2.33341 0H7.33342ZM25.6667 18.3333C24.7467 18.3333 24.0001 19.08 24.0001 20C24.0001 20.92 24.7467 21.6667 25.6667 21.6667C26.5867 21.6667 27.3334 20.92 27.3334 20C27.3334 19.08 26.5867 18.3333 25.6667 18.3333Z" fill="#CD5F37"></path>
</svg>
</span>
</div>
<div class="services-details-feature-content">
<h4 class="services-details-feature-title">24/7 Services</h4>
<p>Lorem ipsum dolors sitable ametu</p>
</div>
</div>
</li>
</ul>
</div>
<div class="services-details-quote mb-50">
<h4 class="services-details-quote-text">
                              “Real plastic surgeons real results recaptures the beauty of self-confidence.”
                           </h4>
<p>Michle Jhon, <span>CEO &amp; Founder</span></p>
</div>
<div class="services-details-benifits mb-50">
<h4 class="services-details-benifits-title">Benefits Of Our Services</h4>
<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora dolore magnam aliquam quaerat voluptatem.</p>
<ul>
<li>We provide excellent services for your ultimate good health.</li>
<li>Preparing for all type of surgeries and emergencies cases.</li>
<li>Always provide original and latest medicine for health care.</li>
<li>Doctors use advanced latest equipment for patient surgery.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- services-details-area-end -->
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
