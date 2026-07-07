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

<!-- End Cursor Pointer -->
<!-- Header Section Start -->

<!-- Banner Section Start -->
<section class="banner-section2 white-bg fix">
<div class="container">
<div class="row justify-content-between">
<div class="col-xxl-5 col-xl-5 col-lg-5">
<div class="hero-content-version2">
<span class="cmn-tag p1-bg heading-font mb-xxl-1 mb-3">Madical Care</span>
<h1 class="black wow fadeInUp mb-40" data-wow-delay="0.6s">
                            Quality health <br/>
<span class="position-relative z-1 w-100">
                                Care
                                <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
<span class="fw-normal">Health Excellence</span>
</h1>
<div class="d-flex align-items-center gap-xl-2 gap-1">
<a class="video-choose d-center rounded-circle p2-bg video-popup" href="https://www.youtube.com/watch?v=0pYoyQCau5k">
<i class="fa-solid fa-play white"></i>
</a>
<span class="fs-six pra">
                                Play Now
                            </span>
</div>
<div class="hero2-counter-wrap">
<div class="hero-count-item d-xl-flex align-items-center gap-2">
<h2 class="black">120+</h2>
<p class="black">
                                    Winning <br/> award
                                </p>
</div>
<div class="hero-count-item d-xl-flex align-items-center gap-2">
<h2 class="black">500+</h2>
<p class="black">
                                    Clients <br/> Reviews
                                </p>
</div>
</div>
</div>
</div>
<div class="col-xxl-4 col-xl-3 col-lg-3 d-lg-block d-none">
<div class="hero2-thumb">
<img alt="img" src="/demo-9/assets/img/banner/hero2-thumb.png"/>
</div>
</div>
<div class="col-xxl-3 col-xl-4 col-lg-4">
<form action="#" class="hero-appoinment">
<h4 class="black mb-xxl-3 mb-2">Appiontment</h4>
<p class="pra mb-xxl-3 mb-2">Health care is a vital aspect of overall well-being</p>
<input class="mb-3" placeholder="Your Name" type="text"/>
<input class="mb-3" placeholder="Your Phone" type="text"/>
<input class="mb-3" placeholder="Your Email" type="email"/>
<select class="mb-3" name="selected">
<option value="1">Select One</option>
<option value="1">3:25 Am</option>
<option value="1">3:25 Am</option>
<option value="1">3:25 Pm</option>
</select>
<a class="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs-seven fw-medium white overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-9/doctor-details">
                            Book Appiontment
                            <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-white.png"/>
</a>
</form>
</div>
</div>
</div>
</section><!-- Servie Section Start -->
<section class="services-section cmn-bg fix section-padding">
<div class="container">
<div class="section-title text-center mb-60">
<span class="cmn-tag p1-bg heading-font">Latest Service</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                    Your Wellness Our Priority <br/>
<span class="position-relative z-1">
                        Healthier
                        <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
                    Lives
                </h2>
</div>
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
<img alt="icon" src="/demo-9/assets/img/icon/ser2.png"/>
</div>
<h4 class="black"><a href="/demo-9/service-details">Your Wellness Priority</a></h4>
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
</div>
</div>
</section><!-- About Section Start -->
<section class="about-section2 space-bottom cmn-bg fix">
<div class="container">
<div class="row g-4 align-items-center justify-content-between flex-row-reverse">
<div class="col-lg-6">
<div class="about-content2">
<div class="section-title mb-4">
<span class="cmn-tag p1-bg heading-font">About Us</span>
<h2 class="wow fadeInUp black visible-slowly-right mb-xxl-4 mb-3" data-wow-delay=".3s">
                                Compassionate Care <br/> Always
                                <span class="position-relative z-1">
                                    There
                                    <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
                                Health First
                            </h2>
<p class="pra mb-sm-4 mb-3 position-relative syle-pra d-flex align-items-center gap-3">
<img alt="element" class="d-sm-block d-none" src="/demo-9/assets/img/element/pra-element.png"/>
                                Over 30 year’s experience providing top quality country'sacross world. The energy that
                                is
                                sourceable , free and healthy.
                            </p>
<p class="pra">
                                Health care is a vital aspect of maintaining overall well-being, encompassing a range of
                                services from preventive care
                                to treatment of cuses on promoting Health care is a vital aspect of maintaining overall
                                well-being, encompassing a range
                                of services
                            </p>
</div>
<div class="about-point mb-40">
<div class="about-point-item d-flex align-items-center gap-sm-3 gap-2">
<img alt="icon" src="/demo-9/assets/img/icon/about-icon1.png"/>
<h4 class="black">Vitality Clinic <br/> Wellness</h4>
</div>
<div class="about-point-item d-flex align-items-center gap-sm-3 gap-2">
<img alt="icon" src="/demo-9/assets/img/icon/about-icon2.png"/>
<h4 class="black">CarePoint <br/> Health</h4>
</div>
</div>
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/about">
                            Read More
                            <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
<div class="col-xl-5 col-lg-6">
<div class="about-thumb2 reveal-left rounded-4">
<img alt="img" class="w-100 rounded-4" src="/demo-9/assets/img/about/about2.jpg"/>
</div>
</div>
</div>
</div>
</section>
<!-- Feature Section Start -->
<section class="feature-section fix section-padding">
<div class="container">
<div class="section-title text-center mb-60">
<span class="cmn-tag p1-bg heading-font">Our Team Member</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                    Compassionate Care <br/> Health Exceptional
                    <span class="position-relative z-1">
                        Results
                        <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
</h2>
</div>
<div class="featue-wrapper feaure-wrapper2 position-relative white-bg">
<div class="feature-inner">
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="/demo-9/doctor-details">Dr.Alvin Eclair</a>
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
<a class="cmn-arrows d-center" href="/demo-9/doctor-details">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-9/assets/img/choose/feature4.jpg"/>
</div>
<div class="line"></div>
</div>
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="/demo-9/doctor-details">Dr.Alan Jellybean</a>
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
<a class="cmn-arrows d-center" href="/demo-9/doctor-details">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-9/assets/img/choose/feature1.jpg"/>
</div>
<div class="line"></div>
</div>
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="/demo-9/doctor-details">Dr.Dean R.
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
<a class="cmn-arrows d-center" href="/demo-9/doctor-details">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-9/assets/img/choose/feature2.jpg"/>
</div>
<div class="line"></div>
</div>
<div class="ins d-flex flex-column gap-xxl-4 gap-3">
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<h4><a class="black fw_600 text-nowrap" href="/demo-9/doctor-details">Dr.Alan Jellybean</a>
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
<a class="cmn-arrows d-center" href="/demo-9/doctor-details">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-9/assets/img/choose/feature3.jpg"/>
</div>
<div class="line"></div>
</div>
</div>
</div>
</div>
</section><!-- Latest Project Section Start -->
<section class="latest-projects fix">
<div class="container">
<div class="d-flex flex-sm-nowrap flex-wrap gap-2 align-items-end justify-content-between mb-60">
<div class="section-title">
<span class="cmn-tag p1-bg heading-font mb-3">Latest Project</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                        A healthy tomorrow <br/> starts today
                        <span class="position-relative z-1">
                            Where
                            <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
                        health
                    </h2>
</div>
<div class="array-button d-flex align-items-center gap-3 wow fadeInUp" data-wow-delay=".5s">
<button class="array-prev d-center">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-left-black.png"/>
</button>
<button class="array-next d-center active">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</button>
</div>
</div>
<div class="swiper lastes-project__wrapper">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="latest-project-slide">
<img alt="img" src="/demo-9/assets/img/choose/ls1.jpg"/>
<div class="ls-content text-center">
<span class="white d-block mb-2">StrategyCraft</span>
<h4 class="white"><a class="white" href="/demo-9/project-details">Caring for You Caring</a>
</h4>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="latest-project-slide">
<img alt="img" src="/demo-9/assets/img/choose/ls2.png"/>
<div class="ls-content text-center">
<span class="white d-block mb-2">StrategyCraft</span>
<h4 class="white"><a class="white" href="/demo-9/project-details">Caring for You Caring</a>
</h4>
</div>
</div>
</div>
<div class="swiper-slide">
<div class="latest-project-slide">
<img alt="img" src="/demo-9/assets/img/choose/ls3.jpg"/>
<div class="ls-content text-center">
<span class="white d-block mb-2">StrategyCraft</span>
<h4 class="white"><a class="white" href="/demo-9/project-details">Caring for You Caring</a>
</h4>
</div>
</div>
</div>
</div>
</div>
</div>
</section><!-- Helth Compassionate -->
<section class="helth-compassionate cmn-bg section-padding">
<div class="container">
<div class="row g-4">
<div class="col-lg-7 h-100">
<div class="compassionate-left-content">
<div class="box">
<h4 class="black mb-md-3 mb-2">Compassionate Care There Health First</h4>
<p class="black mb-40 pb-2">Health care is a vital aspect of maintaining overall well-being
                                encompassing a range of services from preventive</p>
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100" href="/demo-9/doctor-details">
                                Book An Appiontment
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="thumb d-md-block d-none">
<img alt="img" src="/demo-9/assets/img/global/compassionate.png"/>
</div>
</div>
</div>
<div class="col-lg-5 h-100">
<div class="compassionate-right">
<div class="compassionate-item">
<div class="icon d-center rounded-circle"><img alt="icon" src="/demo-9/assets/img/icon/compasi1.png"/></div>
<div class="cont">
<h4 class="white mb-2">Your health our priority</h4>
<p class="white">
                                    Medical care encompasses a range of services aimed at the a promoting health,
                                    preventing
                                </p>
</div>
</div>
<div class="compassionate-item">
<div class="icon d-center rounded-circle"><img alt="icon" src="/demo-9/assets/img/icon/compasi2.png"/></div>
<div class="cont">
<h4 class="white mb-2">wellness Healing with heart</h4>
<p class="white">
                                    Medical care encompasses a range of services aimed at the a promoting health,
                                    preventing
                                </p>
</div>
</div>
<div class="compassionate-item">
<div class="icon d-center rounded-circle"><img alt="icon" src="/demo-9/assets/img/icon/compasi3.png"/></div>
<div class="cont">
<h4 class="white mb-2">Care Point Health Institute</h4>
<p class="white">
                                    Medical care encompasses a range of services aimed at the a promoting health,
                                    preventing
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section><!-- Pricing Section Start -->
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
</section><!-- Video Bg Section Start -->
<div class="video-section section-padding cmn-bg fix">
<div class="container">
<div class="video-uniquewrap position-relative d-center w-100">
<img alt="img" class="w-100 rounded-4" src="/demo-9/assets/img/global/video-unique.png"/>
<a class="video-choose position-absolute d-center rounded-circle p1-bg video-popup" href="https://www.youtube.com/watch?v=0pYoyQCau5k">
<i class="fa-solid fa-play white"></i>
</a>
</div>
</div>
</div><!-- Testimonial Section Start -->
<section class="testimonial-sectio2 cmn-bg fix">
<div class="container">
<div class="row g-4 justify-content-between">
<div class="col-xxl-4 col-xl-5 col-lg-5">
<div class="section-title">
<span class="cmn-tag p1-bg heading-font mb-3">Clients Reviews</span>
<h2 class="wow fadeInUp black visible-slowly-right mb-xxl-4 mb-3" data-wow-delay=".3s">
                            What Our Users Are
                            <span class="position-relative z-1">
                                Saying
                                <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
</h2>
<p class="pra mb-40">
                            Health care is a vital aspect of maintaining overall well-being, encompassing a range of
                            services from preventive care
                            to treatment
                        </p>
<div class="array-button d-flex align-items-center gap-3 wow fadeInUp" data-wow-delay=".5s">
<button class="array-prev"><i class="fal fa-arrow-left"></i></button>
<button class="array-next"><i class="fal fa-arrow-right"></i></button>
</div>
</div>
</div>
<div class="col-xxl-7 col-xl-7 col-lg-7">
<div class="swiper testimonial-slider">
<div class="swiper-wrapper">
<div class="swiper-slide">
<div class="testimonial-items style2">
<div class="ratting mb-3">
<i class="fa-solid fa-star p3-clr fs-six"></i>
<i class="fa-solid fa-star p3-clr fs-six"></i>
<i class="fa-solid fa-star p3-clr fs-six"></i>
<i class="fa-solid fa-star p3-clr fs-six"></i>
<i class="fa-solid fa-star p3-clr fs-six"></i>
</div>
<p class="fs-five pra mt-xxl-4 mt-4 mb-4">
                                        Health is wealth, and in the realm of medical heal every life matters. It
                                        encompasses a wide range of specialties aimed
                                        at diagnosing, treating, and preventing diseases and maintaining overall very
                                        famous
                                    </p>
<div class="d-flex align-items-center justify-content-between">
<div class="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
<img alt="img" class="rounded-circle" src="/demo-9/assets/img/testimonial/testimonial-john.png"/>
<div class="cont">
<h4 class="black">Michael Ramirez</h4>
<span class="fs-seven pra">Ceo</span>
</div>
</div>
<img alt="img" class="quote" src="/demo-9/assets/img/testimonial/quote-icons.png"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><!--<< Blog News Start >>-->
<section class="blog-section2 section-padding cmn-bg">
<div class="container">
<div class="section-title text-center mb-60">
<span class="cmn-tag p1-bg heading-font">Latest Blog and news</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                    Caring for You, Caring for <br/> Health
                    <span class="position-relative z-1">
                        Guardians
                        <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
</h2>
</div>
<div class="row g-4">
<div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
<div class="blog-items2 rounded-4">
<div class="thumb rounded-4 position-relative">
<img alt="img" class="rounded-4" src="/demo-9/assets/img/blog/blog2-v1.jpg"/>
<div class="d-flex gap-1 align-items-center blog-date">
<div class="icon d-center"><i class="fa-solid fa-calendar-days"></i></div>
<span class="cont">23 Dec 2023</span>
</div>
</div>
<div class="content">
<div class="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-solid fa-user n900-clr"></i>
                                    Admin
                                </div>
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-regular fa-folder-open n900-clr"></i>
                                    Catagory
                                </div>
</div>
<h4 class="mb-4"><a class="black" href="/demo-9/blog-details">Empowering Futures an Quality
                                    Care</a></h4>
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/blog-details">
                                Read More
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
<div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
<div class="blog-items2 rounded-4">
<div class="thumb rounded-4 position-relative">
<img alt="img" class="rounded-4" src="/demo-9/assets/img/blog/blog2-v2.jpg"/>
<div class="d-flex gap-1 align-items-center blog-date">
<div class="icon d-center"><i class="fa-solid fa-calendar-days"></i></div>
<span class="cont">23 Dec 2023</span>
</div>
</div>
<div class="content">
<div class="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-solid fa-user n900-clr"></i>
                                    Admin
                                </div>
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-regular fa-folder-open n900-clr"></i>
                                    Catagory
                                </div>
</div>
<h4 class="mb-4"><a class="black" href="/demo-9/blog-details">Health Matters, We Care Wellness
                                    Begins</a></h4>
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/blog-details">
                                Read More
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
<div class="col-lg-6 wow fadeInUp" data-wow-delay="0.7s">
<div class="blog-items2 rounded-4">
<div class="thumb rounded-4 position-relative">
<img alt="img" class="rounded-4" src="/demo-9/assets/img/blog/blog2-v3.jpg"/>
<div class="d-flex gap-1 align-items-center blog-date">
<div class="icon d-center"><i class="fa-solid fa-calendar-days"></i></div>
<span class="cont">23 Dec 2023</span>
</div>
</div>
<div class="content">
<div class="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-solid fa-user n900-clr"></i>
                                    Admin
                                </div>
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-regular fa-folder-open n900-clr"></i>
                                    Catagory
                                </div>
</div>
<h4 class="mb-4"><a class="black" href="/demo-9/blog-details">CareMed Solutions Vitality
                                    Health</a></h4>
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/blog-details">
                                Read More
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
<div class="col-lg-6 wow fadeInUp" data-wow-delay="0.9s">
<div class="blog-items2 rounded-4">
<div class="thumb rounded-4 position-relative">
<img alt="img" class="rounded-4" src="/demo-9/assets/img/blog/blog2-v4.jpg"/>
<div class="d-flex gap-1 align-items-center blog-date">
<div class="icon d-center"><i class="fa-solid fa-calendar-days"></i></div>
<span class="cont">23 Dec 2023</span>
</div>
</div>
<div class="content">
<div class="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-solid fa-user n900-clr"></i>
                                    Admin
                                </div>
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-regular fa-folder-open n900-clr"></i>
                                    Catagory
                                </div>
</div>
<h4 class="mb-4"><a class="black" href="/demo-9/blog-details">Center Serene Care Services
                                    Peak</a></h4>
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-9/blog-details">
                                Read More
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!--<< Footer News Appinment Start >>-->
<div class="footer-new-appoinment position-relative cmn-bg">
<div class="container">
<div class="newsletter-appoinment-wrap p1-bg rounded-4">
<div class="section-title text-center">
<h2 class="wow fadeInUp black mb-xxl-4 mb-3 visible-slowly-right" data-wow-delay=".3s">
                        Ready To Turn Dreams Into Reality Lets Get
                        <span class="position-relative z-1">
                            Started
                            <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/newsletter-element.png"/>
</span>
                        Now
                    </h2>
<p class="black mb-4">
                        Health care is a vital aspect of maintaining overall well-being, encompassing a range of
                        services from preventive care
                        to treatment of cuses on promoting Health care is a vital aspect of maintaining
                    </p>
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p2-bg rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-9/doctor-details">
                        Book An Appiontment
                        <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-white.png"/>
</a>
</div>
</div>
</div>
</div>
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
