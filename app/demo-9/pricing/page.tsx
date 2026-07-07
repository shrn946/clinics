'use client';

import React, {useEffect} from 'react';

export default function Page() {
  useEffect(() => {
    // Trigger scroll and load events so that scripts on page mount bind correctly
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
<!-- Preloader Start -->

<!-- Start Cursor Pointer -->

<!-- End Cursor Pointer --><!-- header -->
<!-- Header Section Start -->
 <!-- Banner Section Start -->
<section class="breadcrumb-section position-relative fix">
<div class="container">
<div class="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
<h2 class="black">Pricing</h2>
<ul class="d-flex align-items-center gap-3">
<li>
<a href="/demo-9">Home</a>
</li>
<li>/</li>
<li>Pricing</li>
</ul>
</div>
</div>
<!-- Bread Ele -->
<img alt="img" class="bread-ele" src="/demo-9/assets/img/about/breadcrumnd-shap.png"/>
</section>
<!-- Banner Section Start -->
<!-- Pricing Section Start -->
<section class="pricing-section fix n900-bg space-top">
<div class="container">
<div class="section-title text-center mb-60">
<span class="cmn-tag p1-bg heading-font">Pricing Plane</span>
<h2 class="wow fadeInUp white visible-slowly-right" data-wow-delay=".3s">
                    Where health meets hope <br/> partner in
                    <span class="position-relative z-1">
                        wellness
                        <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
</h2>
</div>
<div class="row g-xxl-5 g-4 justify-content-center align-items-center">
<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="pricing-items">
<div class="pricing-head">
<h4 class="white mb-2">Perfect</h4>
<div class="d-flex align-items-end white">
<h2 class="white">\$29</h2>
<h6 class="white">/month</h6>
</div>
</div>
<ul class="pricing-list d-flex flex-column mb-4 pb-xl-3">
<li class="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
<i class="fa-solid fa-angles-right white"></i> Mistakes To Avoid
                            </li>
<li class="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
<i class="fa-solid fa-angles-right white"></i> Knew About Fonts
                            </li>
<li class="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
<i class="fa-solid fa-angles-right white"></i> Winning Metric for Your Startup
                            </li>
</ul>
<a class="common-btn box-style w-100 first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden n900-bg rounded100" href="/demo-9/pricing">
                            Book An Appiontment
                            <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-white.png"/>
</a>
</div>
</div>
<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
<div class="pricing-items premium">
<div class="pricing-head">
<h4 class="white mb-2">Easy</h4>
<div class="d-flex align-items-end white">
<h2 class="white">\$19</h2>
<h6 class="white">/month</h6>
</div>
</div>
<ul class="pricing-list d-flex flex-column mb-4 pb-xl-3">
<li class="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
<i class="fa-solid fa-angles-right white"></i> Mistakes To Avoid
                            </li>
<li class="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
<i class="fa-solid fa-angles-right white"></i> Knew About Fonts
                            </li>
<li class="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
<i class="fa-solid fa-angles-right white"></i> Winning Metric for Your Startup
                            </li>
</ul>
<a class="common-btn box-style w-100 first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden n900-bg rounded100" href="/demo-9/pricing">
                            Book An Appiontment
                            <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-white.png"/>
</a>
</div>
</div>
<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="pricing-items">
<div class="pricing-head">
<h4 class="white mb-2">Perfect</h4>
<div class="d-flex align-items-end white">
<h2 class="white">\$29</h2>
<h6 class="white">/month</h6>
</div>
</div>
<ul class="pricing-list d-flex flex-column mb-4 pb-xl-3">
<li class="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
<i class="fa-solid fa-angles-right white"></i> Mistakes To Avoid
                            </li>
<li class="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
<i class="fa-solid fa-angles-right white"></i> Knew About Fonts
                            </li>
<li class="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
<i class="fa-solid fa-angles-right white"></i> Winning Metric for Your Startup
                            </li>
</ul>
<a class="common-btn box-style w-100 first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden n900-bg rounded100" href="/demo-9/pricing">
                            Book An Appiontment
                            <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-white.png"/>
</a>
</div>
</div>
</div>
</div>
</section>
<!-- Video Bg Section Start -->
<div class="video-section section-padding cmn-bg fix">
<div class="container">
<div class="video-uniquewrap position-relative d-center w-100">
<img alt="img" class="w-100 rounded-4" src="/demo-9/assets/img/global/video-unique.png"/>
<a class="video-choose position-absolute d-center rounded-circle p1-bg video-popup" href="https://www.youtube.com/watch?v=0pYoyQCau5k">
<i class="fa-solid fa-play white"></i>
</a>
</div>
</div>
</div>
<!-- Faq Section Start -->
<section class="faq-section space-bottom fix">
<div class="container">
<div class="row g-4 justify-content-between align-items-end">
<div class="col-lg-6">
<div class="section-title mb-4">
<span class="cmn-tag p1-bg heading-font">Pricing</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                            Compassionate Care <br/> Always There
                            <span class="position-relative z-1">
                                Health
                                <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
                            First
                        </h2>
</div>
<div class="accordion border-0 d-flex flex-column gap-xxl-4 gap-3" id="accordionExample">
<div class="accordion-item white-bg">
<div class="accordion-header" id="headingOne">
<button aria-controls="collapseOne" aria-expanded="true" class="accordion-button" data-bs-target="#collapseOne" data-bs-toggle="collapse" type="button">
                                    Wellness Begins with Us
                                </button>
<div aria-labelledby="headingOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" id="collapseOne">
<div class="accordion-body">
<p>Health care is a vital aspect of maintaining overall well-being, encompassing
                                            a range of services from preventive
                                            care
                                            to treatment</p>
</div>
</div>
</div>
</div>
<div class="accordion-item white-bg">
<div class="accordion-header" id="headingTwo">
<button aria-controls="collapseTwo" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseTwo" data-bs-toggle="collapse" type="button">
                                    Quality health close to home
                                </button>
<div aria-labelledby="headingTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseTwo">
<div class="accordion-body">
<p>Health care is a vital aspect of maintaining overall well-being, encompassing
                                            a range of services from preventive
                                            care
                                            to treatment</p>
</div>
</div>
</div>
</div>
<div class="accordion-item white-bg">
<div class="accordion-header" id="headingThree">
<button aria-controls="collapseThree" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseThree" data-bs-toggle="collapse" type="button">
                                    A healthy tomorrow starts today
                                </button>
<div aria-labelledby="headingThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapseThree">
<div class="accordion-body">
<p>Health care is a vital aspect of maintaining overall well-being, encompassing
                                            a range of services from preventive
                                            care
                                            to treatment</p>
</div>
</div>
</div>
</div>
<div class="accordion-item white-bg">
<div class="accordion-header" id="headingfour">
<button aria-controls="collapsefour" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapsefour" data-bs-toggle="collapse" type="button">
                                    Caring for you every step of the way
                                </button>
<div aria-labelledby="headingfour" class="accordion-collapse collapse" data-bs-parent="#accordionExample" id="collapsefour">
<div class="accordion-body">
<p>Health care is a vital aspect of maintaining overall well-being, encompassing
                                            a range of services from preventive care
                                            to treatment</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-5">
<div class="counter-wrap ps-xxl-5">
<div class="counter-items box-style first-box wow fadeIn" data-wow-delay="0.4s">
<div class="content">
<h2><span class="count">4000</span>+</h2>
<p>Team member</p>
</div>
</div>
<div class="counter-items box-style first-box wow fadeIn" data-wow-delay="0.5s">
<div class="content">
<h2><span class="count">40</span>+</h2>
<p>Winning award</p>
</div>
</div>
<div class="counter-items box-style first-box wow fadeIn" data-wow-delay="0.6s">
<div class="content">
<h2><span class="count">80</span>k+</h2>
<p>Client review</p>
</div>
</div>
<div class="counter-items box-style first-box wow fadeIn" data-wow-delay="0.7s">
<div class="content">
<h2><span class="count">105</span>+</h2>
<p>Complete project</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!--<< Footer Section Start >>-->

<!-- Offcanvas Area Start -->

<!-- Search Area Start -->
<!--<< All JS Plugins >>-->

<!--<< Viewport Js >>-->

<!--<< Bootstrap Js >>-->

<!--<< Nice Select Js >>-->

<!--<< Waypoints Js >>-->

<!--<< Counterup Js >>-->

<!--<< Swiper Slider Js >>-->

<!--<< MeanMenu Js >>-->

<!--<< Magnific Popup Js >>-->

<!--<< Wow Animation Js >>-->

<!--<< Gsap Js >>-->

<!--<< Lenis Js >>-->

<!--<< ScrollSmoother Js >>-->

<!--<< ScrollTrigger Js >>-->

<!--<< Spalit Text Js >>-->

<!--<< Valina Tilt Js >>-->

<!--<< Main.js >>-->
`}} />
  );
}
