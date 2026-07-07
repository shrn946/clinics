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
<h2 class="tpbreadcrumb-title">Blog Details</h2>
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
<div class="postbox-main-wrapper mb-35">
<div class="postbox-meta-wrapper">
<article class="postbox-item format-image mb-75 transition-3">
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
                                    Beauty Can Be Preserved And We Will Tell You How Improve
                                 </h3>
<div class="postbox-text">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nisi urna. Curabitur ac ex eu odio dictum iaculis. Mauris quis elit nec ex fermentum pharetra eu ac magna. In et mauris libero. Morbi egestas massa nec lorem porttitor, ac posuere tellus faucibus. Nulla auctor volutpat libero vitae iaculis. Pellentesque non massa vel turpis sagittis fermentum. Sed convallis massa odio. Aliquam pulvinar quis nulla ac tempor. Mauris non nulla eget lacus interdum ullamcorper ac efficitur massa. Morbi dictum massa vel iaculis venenatis. Nunc a cursus lorem. In et varius felis. Nullam pellentesque vel ligula nec mollis. Sed condimentum urna id vulputate malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin lorem tortor, tincidunt eget dapibus sed, condimentum molestie mi. Ut ante arcu, aliquam nec consectetur et, varius mollis ex. Maece</p>
<div class="postbox-blockquote p-relative">
<blockquote>
<h4>“ There's no better time look and feel fantastic in everything you do. Where safety &amp; skill with unite to provide natural results.”</h4>
<span>
<img alt="" src="/demo-12/assets/img/blog/postbox-shape-1.html"/>
</span>
</blockquote>
</div>
<ul>
<li>Recapture the beauty of self-confidence</li>
<li>Emerge to incredible possibilities experience a More Beautiful You.</li>
<li>Real plastic surgeons real results recapture the beauty of self-confidence.</li>
<li>Experience youthful skin for life! feel beautiful.</li>
</ul>
<div class="postbox-thumb-sm mb-30">
<div class="row">
<div class="col-lg-6 col-md-6">
<div class="postbox-thumb-sm-item">
<img alt="" src="/demo-12/assets/img/blog/postbox-thumb-1.html"/>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="postbox-thumb-sm-item">
<img alt="" src="/demo-12/assets/img/blog/postbox-thumb-2.html"/>
</div>
</div>
</div>
</div>
<p>Sed convallis massa odio. Aliquam pulvinar quis nulla ac tempor. Mauris non nulla eget lacus interdum ullamcorper ac efficitur massa. Morbi dictum massa vel iaculis venenatis.</p>
</div>
</div>
</article>
</div>
<div class="postbox-meta-wrapper">
<div class="postbox-share mb-25">
<div class="row">
<div class="col-xl-6 col-lg-7">
<div class="tagcloud tagcloud-sm mb-20">
<span>Tag:</span>
<a href="#">Medical</a>
<a href="#">Surgery</a>
<a href="#">Cosmetics</a>
</div>
</div>
<div class="col-xl-6 col-lg-5">
<div class="postbox-social text-lg-end mb-20">
<span>Share:</span>
<a href="#"><i class="fa-brands fa-twitter"></i></a>
<a class="social-fb" href="#"><i class="fa-brands fa-facebook-f"></i></a>
<a class="social-pin" href="#"><i class="fa-brands fa-pinterest-p"></i></a>
<a class="social-link" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
</div>
</div>
</div>
</div>
<div class="postbox-post">
<div class="row">
<div class="col-lg-6">
<div class="postbox-post-prev">
<h4 class="postbox-post-title"><a href="/demo-12/blog-details">We’ll Get Mountain Out Molehills</a></h4>
<div class="postbox-post-arrow">
<a href="/demo-12/blog-details">
<span>
<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3.52301 6.16689H13.6663V7.83355H3.52301L7.99301 12.3036L6.81467 13.4819L0.333008 7.00022L6.81467 0.518555L7.99301 1.69689L3.52301 6.16689Z" fill="currentColor"></path>
</svg>
</span>
                                             Prev
                                          </a>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="postbox-post-next text-lg-end">
<h4 class="postbox-post-title"><a href="/demo-12/blog-details">Safety &amp; Skill Unite to Natural Results</a></h4>
<div class="postbox-post-arrow">
<a href="/demo-12/blog-details">
                                             Next
                                             <span>
<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4763 6.16689L6.00634 1.69689L7.18467 0.518555L13.6663 7.00022L7.18467 13.4819L6.00634 12.3036L10.4763 7.83355H0.333008V6.16689H10.4763Z" fill="currentColor"></path>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="postbox-comment mb-60">
<h4 class="postbox-comment-title">
                              Comments (3)
                           </h4>
<ul>
<li>
<div class="postbox-comment-box">
<div class="postbox-comment-avater">
<img alt="" src="/demo-12/assets/img/product/review/review-1.html"/>
</div>
<div class="postbox-comment-content">
<div class="postbox-comment-author">
<p class="postbox-comment-name">Stiphen Smith</p>
<span class="postbox-meta">Nov 30, 2023 at 3:27 am</span>
</div>
<p>Dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor.</p>
<div class="postbox-comment-rating">
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 11.976L12.1825 13.7587L11.4708 10.179L14.1505 7.70025L10.5258 7.2705L8.99725 3.95625V11.976ZM8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
</div>
</div>
</div>
<ul class="children">
<li>
<div class="postbox-comment-box">
<div class="postbox-comment-avater">
<img alt="" src="/demo-12/assets/img/product/review/review-2.html"/>
</div>
<div class="postbox-comment-content">
<div class="postbox-comment-author">
<p class="postbox-comment-name">Sonia Madrose</p>
<span class="postbox-meta">Nov 30, 2023 at 3:27 am</span>
</div>
<p>Dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor.</p>
<div class="postbox-comment-rating">
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 11.976L12.1825 13.7587L11.4708 10.179L14.1505 7.70025L10.5258 7.2705L8.99725 3.95625V11.976ZM8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
</div>
</div>
</div>
</li>
</ul>
</li>
<li>
<div class="postbox-comment-box">
<div class="postbox-comment-avater">
<img alt="" src="/demo-12/assets/img/product/review/review-3.html"/>
</div>
<div class="postbox-comment-content">
<div class="postbox-comment-author">
<p class="postbox-comment-name">Levao Recolta</p>
<span class="postbox-meta">Nov 30, 2023 at 3:27 am</span>
</div>
<p>Dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor.</p>
<div class="postbox-comment-rating">
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
<span>
<svg fill="none" height="17" viewbox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg"> <path d="M8.99725 11.976L12.1825 13.7587L11.4708 10.179L14.1505 7.70025L10.5258 7.2705L8.99725 3.95625V11.976ZM8.99725 13.695L3.7075 16.656L4.88875 10.71L0.4375 6.594L6.45775 5.88L8.99725 0.375L11.5368 5.88L17.557 6.594L13.1058 10.71L14.287 16.656L8.99725 13.695Z" fill="currentColor"></path>
</svg>
</span>
</div>
</div>
</div>
</li>
</ul>
</div>
<div class="postbox-reviw-wrapper">
<div class="postbox-review-content">
<h4 class="postbox-review-title">Leave A Reply</h4>
<span>Your email address will not be published. Required fields are marked *</span>
</div>
<div class="postbox-review-form">
<form action="#">
<div class="row">
<div class="col-lg-6">
<div class="postbox-review-form-input">
<input placeholder="Your Name" type="text"/>
</div>
</div>
<div class="col-lg-6">
<div class="postbox-review-form-input">
<input placeholder="Email Address" type="email"/>
</div>
</div>
<div class="col-lg-12">
<div class="postbox-review-form-input">
<textarea name="message" placeholder="Write Your Comment"></textarea>
</div>
</div>
<div class="col-lg-12">
<div class="form-inner-check d-flex mb-30">
<input class="form-check-input" id="flexCheckDefault01" type="checkbox" value=""/>
<label class="form-check-label" for="flexCheckDefault01">Save my name, email, and website in this browser for the next time I comment.</label>
</div>
</div>
<div class="col-lg-12">
<div class="form-inner-btn">
<button class="tp-btn">Post Your Comment</button>
</div>
</div>
</div>
</form>
</div>
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
<li><a href="/demo-12/blog">Plustic Surgery <span>(8)</span></a></li>
<li><a href="/demo-12/blog">Liposaction <span>(12)</span></a></li>
<li><a href="/demo-12/blog">Breast Implant <span>(20)</span></a></li>
<li><a href="/demo-12/blog">Pender Unity <span>(15)</span></a></li>
<li><a href="/demo-12/blog">Non Surgical <span>(9)</span></a></li>
<li><a href="/demo-12/blog">Nose Reshaping <span>(12)</span></a></li>
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
<a href="#">Medical</a>
<a href="#">Surgery</a>
<a href="#">Cosmetics</a>
<a href="#">Skin Care</a>
<a href="#">Plastic Surgery</a>
<a href="#">Eye Surgery</a>
<a href="#">Reshaping</a>
<a href="#">Breast Implants</a>
<a href="#">Pender Unity</a>
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
