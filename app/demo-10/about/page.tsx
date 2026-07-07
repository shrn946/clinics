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
<h2 class="black">About</h2>
<ul class="d-flex align-items-center gap-3">
<li>
<a href="/demo-10">Home</a>
</li>
<li>/</li>
<li>About</li>
</ul>
</div>
</div>
<!-- Bread Ele -->
<img alt="img" class="bread-ele" src="/demo-10/assets/img/about/breadcrumnd-shap.png"/>
</section>
<!-- Banner Section Start -->
<!-- AboutUs Section Start -->
<section class="about-section fix space-top">
<div class="container">
<div class="row g-4 justify-content-between">
<div class="col-lg-6">
<div class="about-content">
<div class="section-title mb-40">
<span class="cmn-tag p1-bg heading-font">About Us</span>
<h2 class="wow fadeInUp black visible-slowly-right mb-xxl-3 mb-3" data-wow-delay=".3s">
                                Compassionate Care <br/> Always There
                                <span class="position-relative z-1">
                                    Health
                                    <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-10/assets/img/element/title-badge1.png"/>
</span>
                                First
                            </h2>
<p class="pra">Health care is a vital aspect of maintaining overall well-being, encompassing
                                a range of services from preventive care
                                to treatment of cuses on promoting</p>
</div>
<div class="about-steps d-flex flex-column gap-xxl-5 gap-xl-3 gap-3">
<div class="about-step-item d-flex gap-sm-3 gap-1 flex-sm-nowrap flex-wrap">
<h4 class="fw_700 black">
                                    01
                                </h4>
<div class="cont">
<h4 class="black fw_600 mb-2">
                                        Enhancing Lives Through Care
                                    </h4>
<p class="pra fs-seven">
                                        Health care is a vital aspect of maintaining overall well-being, encompassing a
                                        range of services from preventive care
                                        to treatment of cuses on promoting
                                    </p>
</div>
</div>
<div class="about-step-item d-flex gap-sm-3 gap-1 flex-sm-nowrap flex-wrap">
<h4 class="fw_700 black">
                                    02
                                </h4>
<div class="cont">
<h4 class="black fw_600 mb-2">
                                        Tomorrow's Health, Today's Care
                                    </h4>
<p class="pra fs-seven">
                                        Health care is a vital aspect of maintaining overall well-being, encompassing a
                                        range of services from preventive care
                                        to treatment of cuses on promoting
                                    </p>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-5">
<div class="about-thumb-inner">
<div class="thumb">
<img alt="img" class="about-img" src="/demo-10/assets/img/about/about1.png"/>
</div>
<img alt="img" class="about1-bg" src="/demo-10/assets/img/element/about1-bg.png"/>
<!-- Element -->
<img alt="img" class="about1-element1" src="/demo-10/assets/img/element/about1-element1.png"/>
<img alt="img" class="about1-element2" src="/demo-10/assets/img/element/about1-element2.png"/>
</div>
</div>
</div>
</div>
</section>
<!-- Feature Section Start -->
<section class="feature-section fix space-top">
<div class="container">
<div class="featue-wrapper position-relative white-bg">
<div class="section-title mb-60">
<span class="cmn-tag p1-bg heading-font">Our Feature</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                        Compassionate Care <br/> Health
                        <span class="position-relative z-1">
                            Exceptional
                            <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-10/assets/img/element/title-badge1.png"/>
</span>
                        Results
                    </h2>
</div>
<div class="feature-inner">
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<div class="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
<div class="icons d-center rounded-circle p1-bg">
<img alt="icon" src="/demo-10/assets/img/icon/f-icon1.png"/>
</div>
<h4><a class="black fw_600" href="/demo-10/doctor">Quality Care <br/> Exceptional Service</a>
</h4>
</div>
<ul class="feature-list d-flex flex-column gap-1">
<li>
                                    Your Health, Our Priority
                                </li>
<li>
                                    Harmony Health
                                </li>
</ul>
</div>
<a class="common-btn cmn-border text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-10/doctor">
                            Read More
                            <img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-10/assets/img/choose/feature1.jpg"/>
</div>
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<div class="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
<div class="icons d-center rounded-circle p1-bg">
<img alt="icon" src="/demo-10/assets/img/icon/f-icon2.png"/>
</div>
<h4><a class="black fw_600" href="/demo-10/doctor">Healing Lives One <br/> Patient at a
                                        Time</a></h4>
</div>
<ul class="feature-list d-flex flex-column gap-1">
<li>
                                    Your Health, Our Priority
                                </li>
<li>
                                    Harmony Health
                                </li>
</ul>
</div>
<a class="common-btn cmn-border text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-10/doctor">
                            Read More
                            <img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-10/assets/img/choose/feature2.jpg"/>
</div>
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<div class="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
<div class="icons d-center rounded-circle p1-bg">
<img alt="icon" src="/demo-10/assets/img/icon/f-icon3.png"/>
</div>
<h4><a class="black fw_600" href="/demo-10/doctor">Caring for You Caring <br/> for
                                        Tomorrow</a></h4>
</div>
<ul class="feature-list d-flex flex-column gap-1">
<li>
                                    Your Health, Our Priority
                                </li>
<li>
                                    Harmony Health
                                </li>
</ul>
</div>
<a class="common-btn cmn-border text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-10/doctor">
                            Read More
                            <img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-10/assets/img/choose/feature3.jpg"/>
</div>
<div class="line"></div>
</div>
<!-- Element-->
<a class="feature-element" href="/demo-10/doctor">
<img alt="img" class="rounded-4" src="/demo-10/assets/img/element/feature-element.png"/>
</a>
</div>
</div>
</section>
<!-- Counter Care Section Start -->
<section class="care-counter fix">
<div class="container">
<div class="care-counter-wrap">
<div class="row g-4 justify-content-center">
<div class="col-lg-5">
<div class="care-counter-text">
<h3 class="black fw_700 visible-slowly-right">Tomorrow's Health <br/> Today's Care</h3>
</div>
</div>
<div class="col-lg-7">
<div class="care-counter">
<div class="counter-items box-style first-box wow fadeIn" data-wow-delay="0.4s">
<div class="content">
<h2><span class="count">600</span>+</h2>
<p class="black">Complte Project</p>
</div>
</div>
<div class="counter-items box-style first-box wow fadeIn" data-wow-delay="0.5s">
<div class="content">
<h2><span class="count">200</span>+</h2>
<p class="black">Team Member</p>
</div>
</div>
<div class="counter-items box-style first-box wow fadeIn" data-wow-delay="0.6s">
<div class="content">
<h2><span class="count">500</span>k+</h2>
<p class="black">Clients Reviews</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Choose Section Start -->
<section class="choose-section space-bottom space-top">
<div class="container">
<div class="row g-4">
<div class="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="choose-left">
<div class="section-title mb-60">
<span class="cmn-tag p1-bg heading-font">Why Chose Us</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                                Empower Health <br/>
                                Lives
                                <span class="position-relative z-1">
                                    Expert
                                    <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-10/assets/img/element/title-badge1.png"/>
</span>
                                Care
                            </h2>
</div>
<a class="w-100 rounded-4 overflow-hidden" href="/demo-10/doctor-details">
<img alt="img" class="rounded-4 w-100" src="/demo-10/assets/img/choose/choose1.jpg"/>
</a>
</div>
</div>
<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
<div class="chosse-middle">
<a class="w-100 rounded-4 overflow-hidden mb-xxl-4 mb-3 d-block" href="/demo-10/doctor-details">
<img alt="img" class="rounded-4 w-100" src="/demo-10/assets/img/choose/choose2.jpg"/>
</a>
<h4 class="mb-xxl-3 mb-2">
<a class="black fw_700" href="/demo-10/doctor-details">
                                The Enhanc Lives care Through Care
                            </a>
</h4>
<p class="pra fs-seven">
                            Health care is a vital aspect of maintaining overall well-being, encompassing a range of
                            services from preventive
                        </p>
</div>
</div>
<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
<div class="choose-right position-relative d-center overflow-hidden rounded-4 w-100">
<img alt="img" class="rounded-4 w-100" src="/demo-10/assets/img/choose/choose3.jpg"/>
<a class="video-choose d-center rounded-circle p1-bg video-popup" href="/demo-10/doctor-details">
<i class="fa-solid fa-play black"></i>
</a>
</div>
</div>
</div>
</div>
</section>
<!-- Special Section Start -->
<section class="special-care-section body-bg space-bottom">
<div class="container custom-contaienr">
<div class="special-care-wrap position-relative">
<div class="row g-4 justify-content-lg-between">
<div class="col-lg-6">
<div class="section-title">
<span class="cmn-tag p1-bg heading-font">Spaical Care</span>
<h2 class="wow fadeInUp black visible-slowly-right mb-xxl-4 mb-3" data-wow-delay=".3s">
                                Your health, our priority <br/>
<span class="position-relative z-1">
                                    The Healing
                                    <img alt="img" class="title-badge1 d-md-block d-none" src="/demo-10/assets/img/element/title-badge1.png"/>
</span>
                                with heart
                            </h2>
<p class="pra mb-40">
                                Health care is a vital aspect of maintaining overall well-being, encompassing a range of
                                services from preventive care
                                to treatment of cuses on promoting Health care is a vital aspect of maintaining overall
                                well-being,
                            </p>
<div class="d-flex align-items-center gap-sm-4 gap-2">
<a class="common-btn box-style cmn-border d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-10/doctor-details">
                                    Read More
                                    <img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
<a class="header-help d-lg-flex d-none align-items-center gap-xxl-3 gap-2" href="/demo-10/contact">
<img alt="cion" src="/demo-10/assets/img/icon/chat-icon.png"/>
<span class="cont">
<span class="pra d-block">Need help?</span>
<span class="black fw_600">(603) 555-0123</span>
</span>
</a>
</div>
</div>
</div>
<div class="col-lg-5">
<div class="special-tag-inner d-flex flex-column gap-xxl-4 gap-3">
<a class="special-tag d-flex align-items-center gap-3 gap-2 rounded-3 heading-font cmn-border" href="/demo-10/project">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
                                Caring for you every step of the way
                            </a>
<a class="special-tag d-flex align-items-center gap-3 gap-2 rounded-3 heading-font cmn-border" href="/demo-10/project">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
                                Caring for you every step of the way
                            </a>
<div class="special-behaind text-center">
<div class="box position-relative">
<div class="icon d-center rounded-circle white-bg"><img alt="icon" src="/demo-10/assets/img/icon/behain.png"/></div>
<h4 class="white mb-2 visible-slowly-right">Building healthier communities</h4>
<p class="white mb-4">
                                        Health care is a vital aspect of maintaining overall well-being, encompassing a
                                        range of services from preventive
                                        care
                                        to treatment of cuses on promoting Health care is a vital aspect
                                    </p>
<a class="common-btn arrow-white-adding box-style white-border d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold py-3 white overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-10/project">
                                        Read More
                                        <img alt="icon" src="/demo-10/assets/img/icon/arrow-right-white.png"/>
</a>
</div>
</div>
</div>
</div>
</div>
<!-- Special Element -->
<img alt="element" class="special-element" src="/demo-10/assets/img/element/special-element.png"/>
</div>
</div>
<div class="container">
<div class="testimonail-wrapper-style1">
<div class="swiper testimonial-slider1">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="testimonial-items1">
<span class="fs-eight fw_500 black d-block mb-2">Clients Testimonial</span>
<h2 class="black fw_700 mb-xl-4 mb-3">What Our Users <br/> Are Saying</h2>
<p class="fs-five black mb-xxl-4 mb-3">
                                    Health is wealth, and in the realm of medical health, every life matters. It is a
                                    encompasses a wide range of
                                    specialties aimed at diagnosing, treating, and preventing diseases and maintaining
                                    overall well-being. Medical health
                                    for a professionals dedicate their lives to providing care
                                </p>
<div class="d-flex align-items-center gap-2 fs-six fw_600 black">
<div class="line"></div> Mukesh Kumer
                                </div>
</div>
</div>
</div>
</div>
<div class="array-button array-button-black wow fadeInUp" data-wow-delay=".5s">
<button class="array-prev d-center"><img alt="icon" src="/demo-10/assets/img/icon/arrow-left-black.png"/></button>
<button class="array-next d-center"><img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/></button>
</div>
<!-- Element -->
<img alt="element" class="testimonial-element1" src="/demo-10/assets/img/element/testimap-element.png"/>
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
