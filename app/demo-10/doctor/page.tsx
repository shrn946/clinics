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
<h2 class="black">Doctor</h2>
<ul class="d-flex align-items-center gap-3">
<li>
<a href="/demo-10">Home</a>
</li>
<li>/</li>
<li>Doctor</li>
</ul>
</div>
</div>
<!-- Bread Ele -->
<img alt="img" class="bread-ele" src="/demo-10/assets/img/about/breadcrumnd-shap.png"/>
</section>
<!-- Banner Section Start -->
<!-- Feature Section Start -->
<section class="feature-section fix section-padding">
<div class="container">
<div class="featue-wrapper feaure-wrapper2 position-relative">
<div class="feature-inner">
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="/demo-10/doctor-details">Dr.Alvin Eclair</a>
</h4>
<ul class="feature-list d-flex flex-column gap-1">
<li class="text-nowrap">
                                        Neurology Expert
                                    </li>
</ul>
<p class="pra fs-seven">
                                    Medical care encompasses a range of services aimed at promoting health, preventing
                                    disease
                                </p>
</div>
<a class="cmn-arrows d-center" href="/demo-10/doctor-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-10/assets/img/choose/feature5.jpg"/>
</div>
<div class="line"></div>
</div>
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="/demo-10/doctor-details">Dr.Alan Jellybean</a>
</h4>
<ul class="feature-list d-flex flex-column gap-1">
<li class="text-nowrap">
                                        Dental Care
                                    </li>
</ul>
<p class="pra fs-seven">
                                    Medical care encompasses a range of services aimed at promoting health, preventing
                                    disease
                                </p>
</div>
<a class="cmn-arrows d-center" href="/demo-10/doctor-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-10/assets/img/choose/feature1.jpg"/>
</div>
<div class="line"></div>
</div>
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="/demo-10/doctor-details">Dr.Dean R.
                                        Chassay</a></h4>
<ul class="feature-list d-flex flex-column gap-1">
<li class="text-nowrap">
                                        Eye Expert
                                    </li>
</ul>
<p class="pra fs-seven">
                                    Medical care encompasses a range of services aimed at promoting health, preventing
                                    disease
                                </p>
</div>
<a class="cmn-arrows d-center" href="/demo-10/doctor-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-10/assets/img/choose/feature2.jpg"/>
</div>
<div class="line"></div>
</div>
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="/demo-10/doctor-details">Dr.Alan Jellybean</a>
</h4>
<ul class="feature-list d-flex flex-column gap-1">
<li class="text-nowrap">
                                        Heart Spacialist
                                    </li>
</ul>
<p class="pra fs-seven">
                                    Medical care encompasses a range of services aimed at promoting health, preventing
                                    disease
                                </p>
</div>
<a class="cmn-arrows d-center" href="/demo-10/doctor-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-10/assets/img/choose/feature3.jpg"/>
</div>
<div class="line"></div>
</div>
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="/demo-10/doctor-details">Dr.Nikol Jons</a>
</h4>
<ul class="feature-list d-flex flex-column gap-1">
<li class="text-nowrap">
                                        Heart Spacialist
                                    </li>
</ul>
<p class="pra fs-seven">
                                    Medical care encompasses a range of services aimed at promoting health, preventing
                                    disease
                                </p>
</div>
<a class="cmn-arrows d-center" href="/demo-10/doctor-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-10/assets/img/choose/feature4.jpg"/>
</div>
<div class="line"></div>
</div>
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="/demo-10/doctor-details">Dr.Harry Kane</a>
</h4>
<ul class="feature-list d-flex flex-column gap-1">
<li class="text-nowrap">
                                        Eye Spacilist
                                    </li>
</ul>
<p class="pra fs-seven">
                                    Medical care encompasses a range of services aimed at promoting health, preventing
                                    disease
                                </p>
</div>
<a class="cmn-arrows d-center" href="/demo-10/doctor-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-10/assets/img/choose/feature5.jpg"/>
</div>
<div class="line"></div>
</div>
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="#">Dr.Nathan Kyler</a></h4>
<ul class="feature-list d-flex flex-column gap-1">
<li class="text-nowrap">
                                        Heart Spacialist
                                    </li>
</ul>
<p class="pra fs-seven">
                                    Medical care encompasses a range of services aimed at promoting health, preventing
                                    disease
                                </p>
</div>
<a class="cmn-arrows d-center" href="/demo-10/doctor-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-10/assets/img/choose/feature1.jpg"/>
</div>
<div class="line"></div>
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
<img alt="img" class="rounded-4" src="/demo-10/assets/img/service/sub-contact.jpg"/>
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
                                    <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-10/assets/img/element/title-badge1.png"/>
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
<a class="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-10/doctor-details">
                                    Book An Appiontment
                                    <img alt="icon" src="/demo-10/assets/img/icon/arrow-right-white.png"/>
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
