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
<h2 class="tpbreadcrumb-title">Blog</h2>
<p>At vero eos et accusamus et iusto odio dignissimos <br/> ducimus qui blan ditisede voluptatum.</p>
</div>
</div>
</div>
</div>
</section>
<!-- breadcrumb-area-end -->
<!-- postbox area start -->
<section class="postbox__area pt-145 pb-105">
<div class="container">
<div class="row">
<div class="col-xxl-8 col-xl-8 col-lg-8">
<div class="postbox-wrapper pr-20">
<article class="postbox-item format-image mb-50 transition-3">
<div class="postbox-thumb w-img">
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-big-1.html"/>
</a>
</div>
<div class="postbox-content">
<div class="postbox-meta">
<span>
<a href="#">
<svg fill="none" height="17" viewbox="0 0 12 17" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16.5H10.5V15C10.5 14.4033 10.2629 13.831 9.84099 13.409C9.41903 12.9871 8.84674 12.75 8.25 12.75H3.75C3.15326 12.75 2.58097 12.9871 2.15901 13.409C1.73705 13.831 1.5 14.4033 1.5 15V16.5H0V15C0 14.0054 0.395088 13.0516 1.09835 12.3483C1.80161 11.6451 2.75544 11.25 3.75 11.25H8.25C9.24456 11.25 10.1984 11.6451 10.9017 12.3483C11.6049 13.0516 12 14.0054 12 15V16.5ZM6 9.75C5.40905 9.75 4.82389 9.6336 4.27792 9.40746C3.73196 9.18131 3.23588 8.84984 2.81802 8.43198C2.40016 8.01412 2.06869 7.51804 1.84254 6.97208C1.6164 6.42611 1.5 5.84095 1.5 5.25C1.5 4.65905 1.6164 4.07389 1.84254 3.52792C2.06869 2.98196 2.40016 2.48588 2.81802 2.06802C3.23588 1.65016 3.73196 1.31869 4.27792 1.09254C4.82389 0.866396 5.40905 0.75 6 0.75C7.19347 0.75 8.33807 1.22411 9.18198 2.06802C10.0259 2.91193 10.5 4.05653 10.5 5.25C10.5 6.44347 10.0259 7.58807 9.18198 8.43198C8.33807 9.27589 7.19347 9.75 6 9.75V9.75ZM6 8.25C6.79565 8.25 7.55871 7.93393 8.12132 7.37132C8.68393 6.80871 9 6.04565 9 5.25C9 4.45435 8.68393 3.69129 8.12132 3.12868C7.55871 2.56607 6.79565 2.25 6 2.25C5.20435 2.25 4.44129 2.56607 3.87868 3.12868C3.31607 3.69129 3 4.45435 3 5.25C3 6.04565 3.31607 6.80871 3.87868 7.37132C4.44129 7.93393 5.20435 8.25 6 8.25V8.25Z" fill="#6A5952"></path>
</svg>
                                       Admin</a>
</span>
<span>
<svg fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.75 2.25H14.75C14.9489 2.25 15.1397 2.32902 15.2803 2.46967C15.421 2.61032 15.5 2.80109 15.5 3V15C15.5 15.1989 15.421 15.3897 15.2803 15.5303C15.1397 15.671 14.9489 15.75 14.75 15.75H1.25C1.05109 15.75 0.860322 15.671 0.71967 15.5303C0.579018 15.3897 0.5 15.1989 0.5 15V3C0.5 2.80109 0.579018 2.61032 0.71967 2.46967C0.860322 2.32902 1.05109 2.25 1.25 2.25H4.25V0.75H5.75V2.25H10.25V0.75H11.75V2.25ZM14 8.25H2V14.25H14V8.25ZM10.25 3.75H5.75V5.25H4.25V3.75H2V6.75H14V3.75H11.75V5.25H10.25V3.75ZM3.5 9.75H5V11.25H3.5V9.75ZM7.25 9.75H8.75V11.25H7.25V9.75ZM11 9.75H12.5V11.25H11V9.75Z" fill="#6A5952"></path>
</svg>
                                       Oct 14, 2023 
                                 </span>
<span>
<a href="#">
<svg fill="none" height="16" viewbox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 15.875L8.4 13.25H4.5C4.30109 13.25 4.11032 13.171 3.96967 13.0303C3.82902 12.8897 3.75 12.6989 3.75 12.5V4.32725C3.75 4.12834 3.82902 3.93757 3.96967 3.79692C4.11032 3.65627 4.30109 3.57725 4.5 3.57725H16.5C16.6989 3.57725 16.8897 3.65627 17.0303 3.79692C17.171 3.93757 17.25 4.12834 17.25 4.32725V12.5C17.25 12.6989 17.171 12.8897 17.0303 13.0303C16.8897 13.171 16.6989 13.25 16.5 13.25H12.6L10.5 15.875ZM11.8792 11.75H15.75V5.07725H5.25V11.75H9.12075L10.5 13.4735L11.8792 11.75ZM1.5 0.5H14.25V2H2.25V10.25H0.75V1.25C0.75 1.05109 0.829018 0.860322 0.96967 0.71967C1.11032 0.579018 1.30109 0.5 1.5 0.5V0.5Z" fill="#6A5952"></path>
</svg>
                                       0 Comments
                                    </a>
</span>
</div>
<h3 class="postbox-title">
<a href="/demo-12/blog-details">Beauty Can Be Preserved And We Will Tell You How Improve</a>
</h3>
<div class="postbox-text">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
</div>
<div class="postbox-read-more">
<a class="tp-btn" href="/demo-12/blog-details">Read More</a>
</div>
</div>
</article>
<article class="postbox-item format-video mb-50 transition-3">
<div class="postbox-thumb postbox-video w-img p-relative">
<a href="/demo-12/blog-details">
<img alt="" src="/demo-12/assets/img/blog/blog-big-1.html"/>
</a>
<a class="play-btn pulse-btn popup-video" href="https://www.youtube.com/watch?v=8Oa21aCw8nU"><i class="fas fa-play"></i></a>
</div>
<div class="postbox-content">
<div class="postbox-meta">
<span>
<a href="#">
<svg fill="none" height="17" viewbox="0 0 12 17" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16.5H10.5V15C10.5 14.4033 10.2629 13.831 9.84099 13.409C9.41903 12.9871 8.84674 12.75 8.25 12.75H3.75C3.15326 12.75 2.58097 12.9871 2.15901 13.409C1.73705 13.831 1.5 14.4033 1.5 15V16.5H0V15C0 14.0054 0.395088 13.0516 1.09835 12.3483C1.80161 11.6451 2.75544 11.25 3.75 11.25H8.25C9.24456 11.25 10.1984 11.6451 10.9017 12.3483C11.6049 13.0516 12 14.0054 12 15V16.5ZM6 9.75C5.40905 9.75 4.82389 9.6336 4.27792 9.40746C3.73196 9.18131 3.23588 8.84984 2.81802 8.43198C2.40016 8.01412 2.06869 7.51804 1.84254 6.97208C1.6164 6.42611 1.5 5.84095 1.5 5.25C1.5 4.65905 1.6164 4.07389 1.84254 3.52792C2.06869 2.98196 2.40016 2.48588 2.81802 2.06802C3.23588 1.65016 3.73196 1.31869 4.27792 1.09254C4.82389 0.866396 5.40905 0.75 6 0.75C7.19347 0.75 8.33807 1.22411 9.18198 2.06802C10.0259 2.91193 10.5 4.05653 10.5 5.25C10.5 6.44347 10.0259 7.58807 9.18198 8.43198C8.33807 9.27589 7.19347 9.75 6 9.75V9.75ZM6 8.25C6.79565 8.25 7.55871 7.93393 8.12132 7.37132C8.68393 6.80871 9 6.04565 9 5.25C9 4.45435 8.68393 3.69129 8.12132 3.12868C7.55871 2.56607 6.79565 2.25 6 2.25C5.20435 2.25 4.44129 2.56607 3.87868 3.12868C3.31607 3.69129 3 4.45435 3 5.25C3 6.04565 3.31607 6.80871 3.87868 7.37132C4.44129 7.93393 5.20435 8.25 6 8.25V8.25Z" fill="#6A5952"></path>
</svg>
                                       Admin
                                    </a>
</span>
<span>
<svg fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.75 2.25H14.75C14.9489 2.25 15.1397 2.32902 15.2803 2.46967C15.421 2.61032 15.5 2.80109 15.5 3V15C15.5 15.1989 15.421 15.3897 15.2803 15.5303C15.1397 15.671 14.9489 15.75 14.75 15.75H1.25C1.05109 15.75 0.860322 15.671 0.71967 15.5303C0.579018 15.3897 0.5 15.1989 0.5 15V3C0.5 2.80109 0.579018 2.61032 0.71967 2.46967C0.860322 2.32902 1.05109 2.25 1.25 2.25H4.25V0.75H5.75V2.25H10.25V0.75H11.75V2.25ZM14 8.25H2V14.25H14V8.25ZM10.25 3.75H5.75V5.25H4.25V3.75H2V6.75H14V3.75H11.75V5.25H10.25V3.75ZM3.5 9.75H5V11.25H3.5V9.75ZM7.25 9.75H8.75V11.25H7.25V9.75ZM11 9.75H12.5V11.25H11V9.75Z" fill="#6A5952"></path>
</svg>
                                    Oct 14, 2023 
                                 </span>
<span>
<a href="#">
<svg fill="none" height="16" viewbox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 15.875L8.4 13.25H4.5C4.30109 13.25 4.11032 13.171 3.96967 13.0303C3.82902 12.8897 3.75 12.6989 3.75 12.5V4.32725C3.75 4.12834 3.82902 3.93757 3.96967 3.79692C4.11032 3.65627 4.30109 3.57725 4.5 3.57725H16.5C16.6989 3.57725 16.8897 3.65627 17.0303 3.79692C17.171 3.93757 17.25 4.12834 17.25 4.32725V12.5C17.25 12.6989 17.171 12.8897 17.0303 13.0303C16.8897 13.171 16.6989 13.25 16.5 13.25H12.6L10.5 15.875ZM11.8792 11.75H15.75V5.07725H5.25V11.75H9.12075L10.5 13.4735L11.8792 11.75ZM1.5 0.5H14.25V2H2.25V10.25H0.75V1.25C0.75 1.05109 0.829018 0.860322 0.96967 0.71967C1.11032 0.579018 1.30109 0.5 1.5 0.5V0.5Z" fill="#6A5952"></path>
</svg>
                                    0 Comments
                                    </a>
</span>
</div>
<h3 class="postbox-title">
<a href="/demo-12/blog-details">Four Ways a Clean Workplace Makes Employees Happy and Healthy</a>
</h3>
<div class="postbox-text">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
</div>
<div class="postbox-read-more">
<a class="tp-btn" href="/demo-12/blog-details">Read More</a>
</div>
</div>
</article>
<article class="postbox-item format-image mb-50 transition-3">
<div class="postbox-thumb postbox-slider swiper-container w-img p-relative">
<div class="swiper-wrapper">
<div class="postbox-slider-item swiper-slide">
<img alt="" src="/demo-12/assets/img/blog/blog-big-2.html"/>
</div>
<div class="postbox-slider-item swiper-slide">
<img alt="" src="/demo-12/assets/img/blog/blog-big-3.html"/>
</div>
<div class="postbox-slider-item swiper-slide">
<img alt="" src="/demo-12/assets/img/blog/blog-big-4.html"/>
</div>
</div>
<div class="postbox-nav">
<button class="postbox-slider-button-next">
<svg fill="none" height="28" viewbox="0 0 35 28" width="35" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_326_645)">
<path d="M0 13.9954H35" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
<path d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
</g>
<defs>
<clippath id="clip0_326_6451">
<rect fill="white" height="28" width="35"></rect>
</clippath>
</defs>
</svg>
</button>
<button class="postbox-slider-button-prev">
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
</button>
</div>
</div>
<div class="postbox-content">
<div class="postbox-meta">
<span>
<a href="#">
<svg fill="none" height="17" viewbox="0 0 12 17" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16.5H10.5V15C10.5 14.4033 10.2629 13.831 9.84099 13.409C9.41903 12.9871 8.84674 12.75 8.25 12.75H3.75C3.15326 12.75 2.58097 12.9871 2.15901 13.409C1.73705 13.831 1.5 14.4033 1.5 15V16.5H0V15C0 14.0054 0.395088 13.0516 1.09835 12.3483C1.80161 11.6451 2.75544 11.25 3.75 11.25H8.25C9.24456 11.25 10.1984 11.6451 10.9017 12.3483C11.6049 13.0516 12 14.0054 12 15V16.5ZM6 9.75C5.40905 9.75 4.82389 9.6336 4.27792 9.40746C3.73196 9.18131 3.23588 8.84984 2.81802 8.43198C2.40016 8.01412 2.06869 7.51804 1.84254 6.97208C1.6164 6.42611 1.5 5.84095 1.5 5.25C1.5 4.65905 1.6164 4.07389 1.84254 3.52792C2.06869 2.98196 2.40016 2.48588 2.81802 2.06802C3.23588 1.65016 3.73196 1.31869 4.27792 1.09254C4.82389 0.866396 5.40905 0.75 6 0.75C7.19347 0.75 8.33807 1.22411 9.18198 2.06802C10.0259 2.91193 10.5 4.05653 10.5 5.25C10.5 6.44347 10.0259 7.58807 9.18198 8.43198C8.33807 9.27589 7.19347 9.75 6 9.75V9.75ZM6 8.25C6.79565 8.25 7.55871 7.93393 8.12132 7.37132C8.68393 6.80871 9 6.04565 9 5.25C9 4.45435 8.68393 3.69129 8.12132 3.12868C7.55871 2.56607 6.79565 2.25 6 2.25C5.20435 2.25 4.44129 2.56607 3.87868 3.12868C3.31607 3.69129 3 4.45435 3 5.25C3 6.04565 3.31607 6.80871 3.87868 7.37132C4.44129 7.93393 5.20435 8.25 6 8.25V8.25Z" fill="#6A5952"></path>
</svg>
                                       Admin
                                    </a>
</span>
<span>
<svg fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.75 2.25H14.75C14.9489 2.25 15.1397 2.32902 15.2803 2.46967C15.421 2.61032 15.5 2.80109 15.5 3V15C15.5 15.1989 15.421 15.3897 15.2803 15.5303C15.1397 15.671 14.9489 15.75 14.75 15.75H1.25C1.05109 15.75 0.860322 15.671 0.71967 15.5303C0.579018 15.3897 0.5 15.1989 0.5 15V3C0.5 2.80109 0.579018 2.61032 0.71967 2.46967C0.860322 2.32902 1.05109 2.25 1.25 2.25H4.25V0.75H5.75V2.25H10.25V0.75H11.75V2.25ZM14 8.25H2V14.25H14V8.25ZM10.25 3.75H5.75V5.25H4.25V3.75H2V6.75H14V3.75H11.75V5.25H10.25V3.75ZM3.5 9.75H5V11.25H3.5V9.75ZM7.25 9.75H8.75V11.25H7.25V9.75ZM11 9.75H12.5V11.25H11V9.75Z" fill="#6A5952"></path>
</svg>
                                    Oct 14, 2023 
                                 </span>
<span>
<a href="#">
<svg fill="none" height="16" viewbox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 15.875L8.4 13.25H4.5C4.30109 13.25 4.11032 13.171 3.96967 13.0303C3.82902 12.8897 3.75 12.6989 3.75 12.5V4.32725C3.75 4.12834 3.82902 3.93757 3.96967 3.79692C4.11032 3.65627 4.30109 3.57725 4.5 3.57725H16.5C16.6989 3.57725 16.8897 3.65627 17.0303 3.79692C17.171 3.93757 17.25 4.12834 17.25 4.32725V12.5C17.25 12.6989 17.171 12.8897 17.0303 13.0303C16.8897 13.171 16.6989 13.25 16.5 13.25H12.6L10.5 15.875ZM11.8792 11.75H15.75V5.07725H5.25V11.75H9.12075L10.5 13.4735L11.8792 11.75ZM1.5 0.5H14.25V2H2.25V10.25H0.75V1.25C0.75 1.05109 0.829018 0.860322 0.96967 0.71967C1.11032 0.579018 1.30109 0.5 1.5 0.5V0.5Z" fill="#6A5952"></path>
</svg>
                                    0 Comments
                                    </a>
</span>
</div>
<h3 class="postbox-title">
<a href="/demo-12/blog-details">How to Clean Your Home Faster and More Efficiently</a>
</h3>
<div class="postbox-text">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
</div>
<div class="postbox-read-more">
<a class="tp-btn" href="/demo-12/blog-details">Read More</a>
</div>
</div>
</article>
<div class="basic-pagination mb-40">
<nav>
<ul>
<li>
<a href="/demo-12/blog">
<i class="far fa-angle-left"></i>
</a>
</li>
<li>
<a href="/demo-12/blog">1</a>
</li>
<li>
<span class="current">2</span>
</li>
<li>
<a href="/demo-12/blog">3</a>
</li>
<li>
<a href="/demo-12/blog">
<i class="far fa-angle-right"></i>
</a>
</li>
</ul>
</nav>
</div>
</div>
</div>
<div class="col-xxl-4 col-xl-4 col-lg-4">
<div class="sidebar-wrapper ml-10">
<div class="sidebar-widget mb-40">
<div class="sidebar-widget-content">
<div class="sidebar-search">
<form action="#">
<div class="sidebar-search-input">
<input placeholder="Search Here..." type="text"/>
</div>
<div class="sidebar-search-btn">
<button type="submit"><i class="far fa-search"></i></button>
</div>
</form>
</div>
</div>
</div>
<div class="sidebar-widget sidebar-widget-2 mb-40">
<h3 class="sidebar-widget-title">Category</h3>
<div class="sidebar-widget-content">
<ul>
<li><a href="/demo-12/blog-details">Plustic Surgery <span>(8)</span></a></li>
<li><a href="/demo-12/blog-details">Liposaction <span>(12)</span></a></li>
<li><a href="/demo-12/blog-details">Breast Implant <span>(20)</span></a></li>
<li><a href="/demo-12/blog-details">Pender Unity <span>(15)</span></a></li>
<li><a href="/demo-12/blog-details">Non Surgical <span>(9)</span></a></li>
<li><a href="/demo-12/blog-details">Nose Reshaping <span>(12)</span></a></li>
</ul>
</div>
</div>
<div class="sidebar-widget sidebar-widget-2 mb-40">
<h3 class="sidebar-widget-title">Latest From Blog</h3>
<div class="sidebar-widget-content">
<div class="sidebar-post rc-post">
<div class="rc-post mb-20 d-flex align-items-center">
<div class="rc-post-thumb mr-20">
<a href="/demo-12/blog-details"><img alt="" src="/demo-12/assets/img/blog/sidebar/blog-sm-1.html"/></a>
</div>
<div class="rc-post-content">
<h3 class="rc-post-title">
<a href="/demo-12/blog-details">Recapture The Beauty Self-Confidence</a>
</h3>
<div class="rc-meta">
<span><i class="fa-light fa-calendar-days"></i> July 21, 2023</span>
</div>
</div>
</div>
<div class="rc-post mb-20 d-flex align-items-center">
<div class="rc-post-thumb mr-20">
<a href="/demo-12/blog-details"><img alt="" src="/demo-12/assets/img/blog/sidebar/blog-sm-2.html"/></a>
</div>
<div class="rc-post-content">
<h3 class="rc-post-title">
<a href="/demo-12/blog-details">When You Feel Good We Feel Good</a>
</h3>
<div class="rc-meta">
<span><i class="fa-light fa-calendar-days"></i> July 21, 2023</span>
</div>
</div>
</div>
<div class="rc-post mb-20 d-flex align-items-center">
<div class="rc-post-thumb mr-20">
<a href="/demo-12/blog-details"><img alt="" src="/demo-12/assets/img/blog/sidebar/blog-sm-3.html"/></a>
</div>
<div class="rc-post-content">
<h3 class="rc-post-title">
<a href="/demo-12/blog-details">Refresh Your Image To Beauty</a>
</h3>
<div class="rc-meta">
<span><i class="fa-light fa-calendar-days"></i> July 21, 2023</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="sidebar-widget sidebar-widget-2 mb-40">
<h3 class="sidebar-widget-title">Popular Tag</h3>
<div class="sidebar-widget-content">
<div class="tagcloud">
<a href="/demo-12/blog-details">Medical</a>
<a href="/demo-12/blog-details">Surgery</a>
<a href="/demo-12/blog-details">Cosmetics</a>
<a href="/demo-12/blog-details">Skin Care</a>
<a href="/demo-12/blog-details">Plastic Surgery</a>
<a href="/demo-12/blog-details">Eye Surgery</a>
<a href="/demo-12/blog-details">Reshaping</a>
<a href="/demo-12/blog-details">Breast Implants</a>
<a href="/demo-12/blog-details">Pender Unity</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- postbox area end -->
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
