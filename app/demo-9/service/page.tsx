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
<h2 class="black">Service</h2>
<ul class="d-flex align-items-center gap-3">
<li>
<a href="/demo-9">Home</a>
</li>
<li>/</li>
<li>Service</li>
</ul>
</div>
</div>
<!-- Bread Ele -->
<img alt="img" class="bread-ele" src="/demo-9/assets/img/about/breadcrumnd-shap.png"/>
</section>
<!-- Banner Section Start -->
<!-- Servie Section Start -->
<section class="services-section main-style cmn-bg fix section-padding">
<div class="container">
<div class="row g-4">
<div class="col-lg-4 col-md-6">
<div class="service-item overflow-hidden white-bg rounded-4 position-relative">
<div class="icon-area d-flex align-items-center gap-2">
<div class="icon d-center">
<img alt="icon" src="/demo-9/assets/img/icon/ser1.png"/>
</div>
<h4 class="black"><a href="/demo-9/service-details">Quality Care Service</a></h4>
</div>
<p class="pra">
                            Health care is a vital aspect maintaining overall well-being, encompassing a range
                        </p>
<div class="thumb overflow-hidden reveal-left position-relative">
<img alt="img" class="rounded-4 overflow-hidden w-100" src="/demo-9/assets/img/service/service2-v4.jpg"/>
</div>
<div class="text-center service-btn-inner">
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/service-details">
                                Read More
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="service-item overflow-hidden white-bg rounded-4 position-relative">
<div class="icon-area d-flex align-items-center gap-2">
<div class="icon d-center">
<img alt="icon" src="/demo-9/assets/img/icon/ser2.png"/>
</div>
<h4 class="black"><a href="/demo-9/service-details">Your Wellness Priority</a></h4>
</div>
<p class="pra">
                            Health care is a vital aspect maintaining overall well-being, encompassing a range
                        </p>
<div class="thumb overflow-hidden reveal-left position-relative">
<img alt="img" class="rounded-4 overflow-hidden w-100" src="/demo-9/assets/img/service/service2-v5.jpg"/>
</div>
<div class="text-center service-btn-inner">
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/service-details">
                                Read More
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="service-item overflow-hidden white-bg rounded-4 position-relative">
<div class="icon-area d-flex align-items-center gap-2">
<div class="icon d-center">
<img alt="icon" src="/demo-9/assets/img/icon/ser3.png"/>
</div>
<h4 class="black"><a href="/demo-9/service-details">Caring for You Always</a></h4>
</div>
<p class="pra">
                            Health care is a vital aspect maintaining overall well-being, encompassing a range
                        </p>
<div class="thumb overflow-hidden reveal-left position-relative">
<img alt="img" class="rounded-4 overflow-hidden w-100" src="/demo-9/assets/img/service/service2-v3.jpg"/>
</div>
<div class="text-center service-btn-inner">
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/service-details">
                                Read More
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="service-item overflow-hidden white-bg rounded-4 position-relative">
<div class="icon-area d-flex align-items-center gap-2">
<div class="icon d-center">
<img alt="icon" src="/demo-9/assets/img/icon/ser4.png"/>
</div>
<h4 class="black"><a href="/demo-9/service-details">Quality Care Service</a></h4>
</div>
<p class="pra">
                            Health care is a vital aspect maintaining overall well-being, encompassing a range
                        </p>
<div class="thumb overflow-hidden reveal-left position-relative">
<img alt="img" class="rounded-4 overflow-hidden w-100" src="/demo-9/assets/img/service/service2-v6.jpg"/>
</div>
<div class="text-center service-btn-inner">
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/service-details">
                                Read More
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="service-item overflow-hidden white-bg rounded-4 position-relative">
<div class="icon-area d-flex align-items-center gap-2">
<div class="icon d-center">
<img alt="icon" src="/demo-9/assets/img/icon/ser5.png"/>
</div>
<h4 class="black"><a href="/demo-9/service-details">Where health meets</a></h4>
</div>
<p class="pra">
                            Health care is a vital aspect maintaining overall well-being, encompassing a range
                        </p>
<div class="thumb overflow-hidden reveal-left position-relative">
<img alt="img" class="rounded-4 overflow-hidden w-100" src="/demo-9/assets/img/service/service2-v1.jpg"/>
</div>
<div class="text-center service-btn-inner">
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/service-details">
                                Read More
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="service-item overflow-hidden white-bg rounded-4 position-relative">
<div class="icon-area d-flex align-items-center gap-2">
<div class="icon d-center">
<img alt="icon" src="/demo-9/assets/img/icon/ser6.png"/>
</div>
<h4 class="black"><a href="/demo-9/service-details">Center Harmony</a></h4>
</div>
<p class="pra">
                            Health care is a vital aspect maintaining overall well-being, encompassing a range
                        </p>
<div class="thumb overflow-hidden reveal-left position-relative">
<img alt="img" class="rounded-4 overflow-hidden w-100" src="/demo-9/assets/img/service/service2-v2.jpg"/>
</div>
<div class="text-center service-btn-inner">
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/service-details">
                                Read More
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Appiontment Section Start -->
<section class="appoentment-section fix space-bottom">
<div class="container">
<div class="row g-4 align-items-center">
<div class="col-lg-6 order-lg-0 order-1">
<div class="apoentment-thumb">
<img alt="img" class="rounded-4" src="/demo-9/assets/img/service/sub-contact.jpg"/>
</div>
</div>
<div class="col-lg-6">
<form action="#" class="appoentment-forms">
<div class="section-title mb-60">
<span class="cmn-tag p1-bg heading-font">Contact Us</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                                Get an
                                <span class="position-relative z-1">
                                    Appiontment
                                    <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
</h2>
</div>
<div class="row g-lg-4 g-3">
<div class="col-lg-6">
<input placeholder="Your Name" type="text"/>
</div>
<div class="col-lg-6">
<input placeholder="Your Email" type="email"/>
</div>
<div class="col-lg-6">
<input placeholder="Phone Number" type="text"/>
</div>
<div class="col-lg-6">
<input placeholder="Subject" type="text"/>
</div>
<div class="col-lg-12">
<textarea name="message" placeholder="Message" rows="5"></textarea>
</div>
<div class="col-lg-12">
<a class="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-9/doctor-details">
                                    Book An Appiontment
                                    <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-white.png"/>
</a>
</div>
</div>
</form>
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
