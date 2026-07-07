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
<h2 class="black">Project</h2>
<ul class="d-flex align-items-center gap-3">
<li>
<a href="/demo-10">Home</a>
</li>
<li>/</li>
<li>Project</li>
</ul>
</div>
</div>
<!-- Bread Ele -->
<img alt="img" class="bread-ele" src="/demo-10/assets/img/about/breadcrumnd-shap.png"/>
</section>
<!-- Banner Section Start -->
<!-- Project Section Start -->
<section class="project-section space-bottom fix space-top">
<div class="container">
<div class="row g-xs-lg-4 g-xs-3 gy-xxl-5 gy-4 justify-content-center">
<div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="project-items position-relative">
<div class="project-thumb d-center position-relative rounded-4 overflow-hidden reveal-left mb-4">
<img alt="img" class="w-100 rounded-4" src="/demo-10/assets/img/blog/project1.jpg"/>
<a class="project-arrws p1-bg d-center rounded-circle" href="/demo-10/project-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="cont">
<span class="pra fs-seven fw_500 d-block visible-slowly-right mb-2">Care Plus</span>
<h4><a class="black fw_700 wow fadeInUp" data-wow-delay="0.4s" href="/demo-10/project-details">Wellness Begins with
                                    Us</a></h4>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="project-items position-relative">
<div class="project-thumb d-center position-relative rounded-4 overflow-hidden reveal-left mb-4">
<img alt="img" class="w-100 rounded-4" src="/demo-10/assets/img/blog/project2.jpg"/>
<a class="project-arrws p1-bg d-center rounded-circle" href="/demo-10/project-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="cont">
<span class="pra fs-seven fw_500 d-block visible-slowly-right mb-2">Renew Health
                                Center</span>
<h4><a class="black fw_700 wow fadeInUp" data-wow-delay="0.4s" href="/demo-10/project-details">Quality health close
                                    to home</a></h4>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="project-items position-relative">
<div class="project-thumb d-center position-relative rounded-4 overflow-hidden reveal-left mb-4">
<img alt="img" class="w-100 rounded-4" src="/demo-10/assets/img/blog/project3.jpg"/>
<a class="project-arrws p1-bg d-center rounded-circle" href="/demo-10/project-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="cont">
<span class="pra fs-seven fw_500 d-block visible-slowly-right mb-2">Wellness Oasis</span>
<h4><a class="black fw_700 wow fadeInUp" data-wow-delay="0.4s" href="/demo-10/project-details">A
                                    healthy tomorrow
                                    starts today</a></h4>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="project-items position-relative">
<div class="project-thumb d-center position-relative rounded-4 overflow-hidden reveal-left mb-4">
<img alt="img" class="w-100 rounded-4" src="/demo-10/assets/img/blog/project4.jpg"/>
<a class="project-arrws p1-bg d-center rounded-circle" href="/demo-10/project-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="cont">
<span class="pra fs-seven fw_500 d-block visible-slowly-right mb-2">Revive Medical
                                Care</span>
<h4><a class="black fw_700 wow fadeInUp" data-wow-delay="0.4s" href="/demo-10/project-details">Caring for you every
                                    step of the way</a></h4>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
<div class="project-items position-relative">
<div class="project-thumb d-center position-relative rounded-4 overflow-hidden reveal-left mb-4">
<img alt="img" class="w-100 rounded-4" src="/demo-10/assets/img/blog/project5.jpg"/>
<a class="project-arrws p1-bg d-center rounded-circle" href="/demo-10/project-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="cont">
<span class="pra fs-seven fw_500 d-block visible-slowly-right mb-2">Harmony Med</span>
<h4><a class="black fw_700 wow fadeInUp" data-wow-delay="0.4s" href="/demo-10/project-details">Tomorrow's Health,
                                    Today's Care</a></h4>
</div>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
<div class="project-items position-relative">
<div class="project-thumb d-center position-relative rounded-4 overflow-hidden reveal-left mb-4">
<img alt="img" class="w-100 rounded-4" src="/demo-10/assets/img/blog/project6.jpg"/>
<a class="project-arrws p1-bg d-center rounded-circle" href="/demo-10/project-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
<div class="cont">
<span class="pra fs-seven fw_500 d-block visible-slowly-right mb-2">Life Harbor</span>
<h4><a class="black fw_700 wow fadeInUp" data-wow-delay="0.4s" href="/demo-10/project-details">Your Health, Our
                                    Priority</a></h4>
</div>
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
<a class="special-tag d-flex align-items-center gap-3 gap-2 rounded-3 heading-font cmn-border" href="/demo-10/doctor-details">
<img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
                                Caring for you every step of the way
                            </a>
<a class="special-tag d-flex align-items-center gap-3 gap-2 rounded-3 heading-font cmn-border" href="/demo-10/doctor-details">
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
<a class="common-btn arrow-white-adding box-style white-border d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold py-3 white overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s" href="/demo-10/doctor-details">
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
