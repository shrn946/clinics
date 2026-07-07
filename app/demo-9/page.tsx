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
<section class="banner-section white-bg fix">
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-9">
<div class="hero-content-version1">
<span class="cmn-tag p1-bg heading-font mb-xl-1 mb-2">Madical Care</span>
<h1 class="black wow fadeInUp mb-40" data-wow-delay="0.6s">
                            Quality
                            <span class="position-relative z-1 w-100">
                                Health
                                <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
                            close to home Caring you every step
                        </h1>
<div class="d-flex flex-wrap align-items-center gap-xxl-4 gap-xl-3 gap-3">
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden blackbg rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-9/doctor-details">
                                Make Appoinment
                                <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-white.png"/>
</a>
<div class="d-flex align-items-center gap-xl-2 gap-1">
<a class="video-choose d-center rounded-circle p2-bg video-popup" href="https://www.youtube.com/watch?v=0pYoyQCau5k">
<i class="fa-solid fa-play white"></i>
</a>
<span class="fs-six pra">
                                    Play Now
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="banner-adjust-thumb">
<div class="container">
<div class="hero-thumbs1 position-relative w-100 wow fadeInUp" data-wow-delay="0.5s">
<img alt="img" class="rounded-4 w-100" src="/demo-9/assets/img/banner/hero1-thumb.jpg"/>
<!-- Circle -->
<div class="text-circle-inner d-center p1-bg">
<img alt="img" class="copy" src="/demo-9/assets/img/element/circle-copy.png"/>
<!-- Ele -->
<img alt="circle" class="text-circle" src="/demo-9/assets/img/element/circle-element.png"/>
</div>
<!-- Ele -->
<img alt="img" class="hero-dot-element" src="/demo-9/assets/img/element/dots-element.png"/>
</div>
</div>
<!-- Element -->
<img alt="img" class="hero-shape-element" src="/demo-9/assets/img/element/hero-shape-elemenet.png"/>
</div>
<!-- Element -->
<img alt="img" class="hero-element1" src="/demo-9/assets/img/element/feature-element.png"/>
</section><!-- Adjust Category Start -->
<section class="adjust-category-section fix space-top space-bottom">
<div class="container">
<div class="row g-4">
<div class="col-lg-4 col-md-6 col-sm-6">
<div class="adjust-category-items">
<div class="icon"><img alt="icon" src="/demo-9/assets/img/icon/f-icon6.png"/></div>
<h4 class="black fw_600 wow fadeInUp" data-wow-delay="0.4s">Your health our priority wellness
                            Healing with heart</h4>
<a class="read-more text-nowrap heading-font d-inline-flex align-items-center pb-1" href="/demo-9/doctor-details">
                            Read More
                            <svg fill="none" height="16" viewbox="0 0 22 16" width="22" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M21.2074 9.29688H0.791016V7.54688H21.2074V9.29688Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 7.54688C16.2184 7.54688 12.8555 11.166 12.8555 15.0252V15.9002H14.6055V15.0252C14.6055 12.0951 17.2218 9.29688 20.3338 9.29688H21.2083V7.54688H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 9.29675C16.2184 9.29675 12.8555 5.67759 12.8555 1.81836V0.943359H14.6055V1.81836C14.6055 4.74854 17.2218 7.54675 20.3338 7.54675H21.2083V9.29675H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-6">
<div class="adjust-category-items">
<div class="icon"><img alt="icon" src="/demo-9/assets/img/icon/f-icon4.png"/></div>
<h4 class="black fw_600 wow fadeInUp" data-wow-delay="0.6s">A healthy tomorrow starts today
                            Where health meets hope</h4>
<a class="read-more text-nowrap heading-font d-inline-flex align-items-center pb-1" href="/demo-9/doctor-details">
                            Read More
                            <svg fill="none" height="16" viewbox="0 0 22 16" width="22" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M21.2074 9.29688H0.791016V7.54688H21.2074V9.29688Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 7.54688C16.2184 7.54688 12.8555 11.166 12.8555 15.0252V15.9002H14.6055V15.0252C14.6055 12.0951 17.2218 9.29688 20.3338 9.29688H21.2083V7.54688H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 9.29675C16.2184 9.29675 12.8555 5.67759 12.8555 1.81836V0.943359H14.6055V1.81836C14.6055 4.74854 17.2218 7.54675 20.3338 7.54675H21.2083V9.29675H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-6">
<div class="adjust-category-items">
<div class="icon"><img alt="icon" src="/demo-9/assets/img/icon/f-icon5.png"/></div>
<h4 class="black fw_600 wow fadeInUp" data-wow-delay="0.9s">Your health our priority wellness
                            Healing with heart</h4>
<a class="read-more text-nowrap heading-font d-inline-flex align-items-center pb-1" href="/demo-9/doctor-details">
                            Read More
                            <svg fill="none" height="16" viewbox="0 0 22 16" width="22" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M21.2074 9.29688H0.791016V7.54688H21.2074V9.29688Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 7.54688C16.2184 7.54688 12.8555 11.166 12.8555 15.0252V15.9002H14.6055V15.0252C14.6055 12.0951 17.2218 9.29688 20.3338 9.29688H21.2083V7.54688H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 9.29675C16.2184 9.29675 12.8555 5.67759 12.8555 1.81836V0.943359H14.6055V1.81836C14.6055 4.74854 17.2218 7.54675 20.3338 7.54675H21.2083V9.29675H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section><!-- AboutUs Section Start -->
<section class="about-section fix space-bottom">
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
                                    <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
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
<img alt="img" class="about-img" src="/demo-9/assets/img/about/about1.png"/>
</div>
<img alt="img" class="about1-bg" src="/demo-9/assets/img/element/about1-bg.png"/>
<!-- Element -->
<img alt="img" class="about1-element1" src="/demo-9/assets/img/element/about1-element1.png"/>
<img alt="img" class="about1-element2" src="/demo-9/assets/img/element/about1-element2.png"/>
</div>
</div>
</div>
</div>
</section><!-- Appiontment Section Start -->
<section class="appoentment-section fix">
<div class="container">
<div class="row g-4 align-items-center">
<div class="col-lg-6 order-lg-0 order-1">
<div class="apoentment-thumb">
<img alt="img" class="rounded-4" src="/demo-9/assets/img/blog/apoentment-thumb.jpg"/>
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
</section><!-- Feature Section Start -->
<section class="feature-section fix section-padding">
<div class="container">
<div class="featue-wrapper position-relative white-bg">
<div class="section-title mb-60">
<span class="cmn-tag p1-bg heading-font">Our Feature</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                        Compassionate Care <br/> Health
                        <span class="position-relative z-1">
                            Exceptional
                            <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
                        Results
                    </h2>
</div>
<div class="feature-inner">
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<div class="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
<div class="icons d-center rounded-circle p1-bg">
<img alt="icon" src="/demo-9/assets/img/icon/f-icon1.png"/>
</div>
<h4><a class="black fw_600" href="/demo-9/project-details">Quality Care <br/> Exceptional
                                        Service</a></h4>
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
<a class="common-btn cmn-border text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-9/project-details">
                            Read More
                            <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-9/assets/img/choose/feature1.jpg"/>
</div>
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<div class="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
<div class="icons d-center rounded-circle p1-bg">
<img alt="icon" src="/demo-9/assets/img/icon/f-icon2.png"/>
</div>
<h4><a class="black fw_600" href="/demo-9/project-details">Healing Lives One <br/> Patient
                                        at a Time</a></h4>
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
<a class="common-btn cmn-border text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-9/project-details">
                            Read More
                            <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-9/assets/img/choose/feature2.jpg"/>
</div>
<div class="line"></div>
<div class="feature-items">
<div class="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
<div class="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
<div class="icons d-center rounded-circle p1-bg">
<img alt="icon" src="/demo-9/assets/img/icon/f-icon3.png"/>
</div>
<h4><a class="black fw_600" href="/demo-9/project-details">Caring for You Caring <br/> for
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
<a class="common-btn cmn-border text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-9/project-details">
                            Read More
                            <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
<!-- Extra Hover -->
<img alt="img" class="extra-feature" src="/demo-9/assets/img/choose/feature3.jpg"/>
</div>
<div class="line"></div>
</div>
<!-- Element-->
<a class="feature-element" href="/demo-9/project-details">
<img alt="img" class="rounded-4" src="/demo-9/assets/img/element/feature-element.png"/>
</a>
</div>
</div>
</section><!-- TextSlide System Section Start -->
<div class="sponsor-text-slide white-bg swiper">
<div class="swiper-wrapper">
<div class="swiper-slide w-fit">
<div class="text-slide-item">
                    Quality Care Service
                </div>
</div>
<div class="swiper-slide w-fit">
<div class="text-slide-item">
<img alt="icon" src="/demo-9/assets/img/icon/star-text.png"/>
</div>
</div>
<div class="swiper-slide w-fit">
<div class="text-slide-item">
                    Your Wellness Priority
                </div>
</div>
<div class="swiper-slide w-fit">
<div class="text-slide-item">
<img alt="icon" src="/demo-9/assets/img/icon/star-text.png"/>
</div>
</div>
<div class="swiper-slide w-fit">
<div class="text-slide-item">
                    Caring for You Always
                </div>
</div>
<div class="swiper-slide w-fit">
<div class="text-slide-item">
<img alt="icon" src="/demo-9/assets/img/icon/star-text.png"/>
</div>
</div>
<div class="swiper-slide w-fit">
<div class="text-slide-item">
                    Quality Care Service
                </div>
</div>
<div class="swiper-slide w-fit">
<div class="text-slide-item">
<img alt="icon" src="/demo-9/assets/img/icon/star-text.png"/>
</div>
</div>
<div class="swiper-slide w-fit">
<div class="text-slide-item">
                    Quality Care Service
                </div>
</div>
<div class="swiper-slide w-fit">
<div class="text-slide-item">
<img alt="icon" src="/demo-9/assets/img/icon/star-text.png"/>
</div>
</div>
</div>
</div><!-- Choose Section Start -->
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
                                    <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
                                Care
                            </h2>
</div>
<a class="w-100 rounded-4 overflow-hidden" href="/demo-9/doctor">
<img alt="img" class="rounded-4 w-100" src="/demo-9/assets/img/choose/choose1.jpg"/>
</a>
</div>
</div>
<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
<div class="chosse-middle">
<a class="w-100 rounded-4 overflow-hidden mb-xxl-4 mb-3 d-block" href="/demo-9/doctor">
<img alt="img" class="rounded-4 w-100" src="/demo-9/assets/img/choose/choose2.jpg"/>
</a>
<h4 class="mb-xxl-3 mb-2">
<a class="black fw_700" href="#">
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
<img alt="img" class="rounded-4 w-100" src="/demo-9/assets/img/choose/choose3.jpg"/>
<a class="video-choose d-center rounded-circle p1-bg video-popup" href="/demo-9/doctor">
<i class="fa-solid fa-play black"></i>
</a>
</div>
</div>
</div>
</div>
</section><!-- Counter Care Section Start -->
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
</section><!-- Project Section Start -->
<section class="project-section space-bottom fix space-top">
<div class="container">
<div class="section-title text-center mb-60">
<span class="cmn-tag p1-bg heading-font">Latest Project</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                    Healing Lives One Patient <br/> at Time Trusted
                    <span class="position-relative z-1">
                        Results
                        <img alt="img" class="title-badge1 d-md-block d-none w-100" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
</h2>
</div>
<div class="row g-xs-lg-4 g-xs-3 gy-xxl-5 gy-4 justify-content-center">
<div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="project-items position-relative">
<div class="project-thumb d-center position-relative rounded-4 overflow-hidden reveal-left mb-4">
<img alt="img" class="w-100 rounded-4" src="/demo-9/assets/img/blog/project1.jpg"/>
<a class="project-arrws p1-bg d-center rounded-circle" href="/demo-9/project-details">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="cont">
<span class="pra fs-seven fw_500 d-block visible-slowly-right mb-2">Care Plus</span>
<h4><a class="black fw_700 wow fadeInUp" data-wow-delay="0.4s" href="/demo-9/project-details">Wellness Begins with
                                    Us</a></h4>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="project-items position-relative">
<div class="project-thumb d-center position-relative rounded-4 overflow-hidden reveal-left mb-4">
<img alt="img" class="w-100 rounded-4" src="/demo-9/assets/img/blog/project2.jpg"/>
<a class="project-arrws p1-bg d-center rounded-circle" href="/demo-9/project-details">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="cont">
<span class="pra fs-seven fw_500 d-block visible-slowly-right mb-2">Renew Health
                                Center</span>
<h4><a class="black fw_700 wow fadeInUp" data-wow-delay="0.4s" href="/demo-9/project-details">Quality health close
                                    to home</a></h4>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="project-items position-relative">
<div class="project-thumb d-center position-relative rounded-4 overflow-hidden reveal-left mb-4">
<img alt="img" class="w-100 rounded-4" src="/demo-9/assets/img/blog/project3.jpg"/>
<a class="project-arrws p1-bg d-center rounded-circle" href="/demo-9/project-details">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="cont">
<span class="pra fs-seven fw_500 d-block visible-slowly-right mb-2">Wellness Oasis</span>
<h4><a class="black fw_700 wow fadeInUp" data-wow-delay="0.4s" href="/demo-9/project-details">A
                                    healthy tomorrow
                                    starts today</a></h4>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="project-items position-relative">
<div class="project-thumb d-center position-relative rounded-4 overflow-hidden reveal-left mb-4">
<img alt="img" class="w-100 rounded-4" src="/demo-9/assets/img/blog/project4.jpg"/>
<a class="project-arrws p1-bg d-center rounded-circle" href="/demo-9/project-details">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="cont">
<span class="pra fs-seven fw_500 d-block visible-slowly-right mb-2">Revive Medical
                                Care</span>
<h4><a class="black fw_700 wow fadeInUp" data-wow-delay="0.4s" href="/demo-9/project-details">Caring for you every
                                    step of the way</a></h4>
</div>
</div>
</div>
</div>
</div>
</section><!-- Special Section Start -->
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
                                    <img alt="img" class="title-badge1 d-md-block d-none" src="/demo-9/assets/img/element/title-badge1.png"/>
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
<a class="common-btn box-style cmn-border d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-9/doctor-details">
                                    Read More
                                    <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
</a>
<a class="header-help d-lg-flex d-none align-items-center gap-xxl-3 gap-2" href="/demo-9/contact">
<img alt="cion" src="/demo-9/assets/img/icon/chat-icon.png"/>
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
<a class="special-tag d-flex align-items-center gap-3 gap-2 rounded-3 heading-font cmn-border" href="/demo-9/doctor-details">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
                                Caring for you every step of the way
                            </a>
<a class="special-tag d-flex align-items-center gap-3 gap-2 rounded-3 heading-font cmn-border" href="/demo-9/doctor-details">
<img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/>
                                Caring for you every step of the way
                            </a>
<div class="special-behaind text-center">
<div class="box position-relative">
<div class="icon d-center rounded-circle white-bg"><img alt="icon" src="/demo-9/assets/img/icon/behain.png"/></div>
<h4 class="white mb-2 visible-slowly-right">Building healthier communities</h4>
<p class="white mb-4">
                                        Health care is a vital aspect of maintaining overall well-being, encompassing a
                                        range of services from preventive
                                        care
                                        to treatment of cuses on promoting Health care is a vital aspect
                                    </p>
<a class="common-btn arrow-white-adding box-style white-border d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold py-3 white overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-9/doctor-details">
                                        Read More
                                        <img alt="icon" src="/demo-9/assets/img/icon/arrow-right-white.png"/>
</a>
</div>
</div>
</div>
</div>
</div>
<!-- Special Element -->
<img alt="element" class="special-element" src="/demo-9/assets/img/element/special-element.png"/>
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
<button class="array-prev d-center"><img alt="icon" src="/demo-9/assets/img/icon/arrow-left-black.png"/></button>
<button class="array-next d-center"><img alt="icon" src="/demo-9/assets/img/icon/arrow-right-black.png"/></button>
</div>
<!-- Element -->
<img alt="element" class="testimonial-element1" src="/demo-9/assets/img/element/testimap-element.png"/>
</div>
</div>
</section><!-- News Section Start -->
<section class="news-section body-bg space-bottom fix position-relative">
<div class="container">
<div class="section-title-area d-flex flex-lg-nowrap flex-wrap gap-lg-2 gap-2 align-items-end mb-60">
<div class="section-title">
<span class="cmn-tag p1-bg heading-font">Latest Blog and news</span>
<h2 class="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                        Caring for You, Caring for <br/> Health
                        <span class="position-relative z-1">
                            Guardians
                            <img alt="img" class="title-badge1 d-md-block d-none" src="/demo-9/assets/img/element/title-badge1.png"/>
</span>
</h2>
</div>
<p class="blog-pra wow fadeInLeft">
                    Medical care encompasses a range of services aimed at promoting health, preventing disease Medical
                    care encompasses
                    Medical care encompasses a range of services aimed at promoting health, preventing disease Medical
                    care encompasses
                </p>
</div>
<div class="news-wrapper">
<div class="row justify-content-center g-4">
<div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
<div class="news-single-items">
<div class="news-image news-image1 reveal-left mb-0">
<img alt="news-img" src="/demo-9/assets/img/blog/blogv1-1.jpg"/>
<h4 class="news-title white">
<a class="white fw_700" href="/demo-9/blog-details">
                                        Health Matters, We Care <br/> Wellness Begins with Us
                                    </a>
</h4>
</div>
</div>
</div>
<div class="col-xl-6 col-lg-6">
<div class="blog-inner-style1 d-flex flex-column">
<div class="news-single-items blog-style1 d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-between gap-md-0 gap-2 wow fadeInUp" data-wow-delay=".3s">
<div class="d-flex align-items-center gap-xl-4 gap-2">
<a class="news-image rounded-4" href="/demo-9/blog-details">
<img alt="news-img" class="rounded-4" src="/demo-9/assets/img/blog/blogv1-2.jpg"/>
</a>
<h4>
<a href="/demo-9/blog-details">
                                            Quality Care <br/> Exceptional Best <br/> Service
                                        </a>
</h4>
</div>
<a class="read-more text-nowrap heading-font d-inline-flex align-items-center pb-1" href="/demo-9/blog-details">
                                    Read More
                                    <svg fill="none" height="16" viewbox="0 0 22 16" width="22" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M21.2074 9.29688H0.791016V7.54688H21.2074V9.29688Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 7.54688C16.2184 7.54688 12.8555 11.166 12.8555 15.0252V15.9002H14.6055V15.0252C14.6055 12.0951 17.2218 9.29688 20.3338 9.29688H21.2083V7.54688H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 9.29675C16.2184 9.29675 12.8555 5.67759 12.8555 1.81836V0.943359H14.6055V1.81836C14.6055 4.74854 17.2218 7.54675 20.3338 7.54675H21.2083V9.29675H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
</svg>
</a>
</div>
<div class="blog-style1-line"></div>
<div class="news-single-items blog-style1 d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-between gap-md-0 gap-2 wow fadeInUp" data-wow-delay=".5s">
<div class="d-flex align-items-center gap-xl-4 gap-2">
<a class="news-image rounded-4" href="/demo-9/blog-details">
<img alt="news-img" class="rounded-4" src="/demo-9/assets/img/blog/blogv1-3.jpg"/>
</a>
<h4>
<a href="/demo-9/blog-details">
                                            Medical care <br/> encompasses a range <br/> of services
                                        </a>
</h4>
</div>
<a class="read-more text-nowrap heading-font d-inline-flex align-items-center pb-1" href="/demo-9/blog-details">
                                    Read More
                                    <svg fill="none" height="16" viewbox="0 0 22 16" width="22" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M21.2074 9.29688H0.791016V7.54688H21.2074V9.29688Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 7.54688C16.2184 7.54688 12.8555 11.166 12.8555 15.0252V15.9002H14.6055V15.0252C14.6055 12.0951 17.2218 9.29688 20.3338 9.29688H21.2083V7.54688H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 9.29675C16.2184 9.29675 12.8555 5.67759 12.8555 1.81836V0.943359H14.6055V1.81836C14.6055 4.74854 17.2218 7.54675 20.3338 7.54675H21.2083V9.29675H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
</svg>
</a>
</div>
<div class="blog-style1-line"></div>
<div class="news-single-items blog-style1 d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-between gap-md-0 gap-2 wow fadeInUp" data-wow-delay=".7s">
<div class="d-flex align-items-center gap-xl-4 gap-2">
<a class="news-image rounded-4" href="/demo-9/blog-details">
<img alt="news-img" class="rounded-4" src="/demo-9/assets/img/blog/blogv1-4.jpg"/>
</a>
<h4>
<a href="/demo-9/blog-details">
                                            Tomorrow's Health is a <br/> for Better Health
                                        </a>
</h4>
</div>
<a class="read-more text-nowrap heading-font d-inline-flex align-items-center pb-1" href="/demo-9/blog-details">
                                    Read More
                                    <svg fill="none" height="16" viewbox="0 0 22 16" width="22" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M21.2074 9.29688H0.791016V7.54688H21.2074V9.29688Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 7.54688C16.2184 7.54688 12.8555 11.166 12.8555 15.0252V15.9002H14.6055V15.0252C14.6055 12.0951 17.2218 9.29688 20.3338 9.29688H21.2083V7.54688H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M20.3338 9.29675C16.2184 9.29675 12.8555 5.67759 12.8555 1.81836V0.943359H14.6055V1.81836C14.6055 4.74854 17.2218 7.54675 20.3338 7.54675H21.2083V9.29675H20.3338Z" fill="#090A0B" fill-rule="evenodd"></path>
</svg>
</a>
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
