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
<!-- Preloader Start -->

<!-- Preloader End -->
<!-- Header Start -->

<!-- Header End -->
<!-- Hero Section Start -->
<div class="hero dark-section parallaxie">
<div class="container">
<div class="row">
<div class="col-xl-7">
<!-- Hero Content Start -->
<div class="hero-content">
<!-- Section Title Start -->
<div class="section-title">
<span class="section-sub-title wow fadeInUp">Better Care For Better Life.</span>
<h1 class="text-anime-style-3" data-cursor="-opaque">Advanced healthcare solutions for healthier lives today</h1>
<p class="wow fadeInUp" data-wow-delay="0.2s">We provide advanced healthcare solutions designed to improve the well-being of every patient. With experienced medical professionals, modern technology.</p>
</div>
<!-- Section Title End -->
<!-- Hero Content Body Start -->
<div class="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
<!-- Hero Button Start -->
<div class="hero-btn">
<a class="btn-default btn-highlighted" href="/demo-11/contact">Start Consultation</a>
</div>
<!-- Hero Button End -->
<!-- Hero Client Box Start -->
<div class="hero-client-box">
<!-- Satisfy Client Image Start -->
<div class="satisfy-client-images">
<div class="satisfy-client-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-1.jpg"/>
</figure>
</div>
<div class="satisfy-client-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-2.jpg"/>
</figure>
</div>
<div class="satisfy-client-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-3.jpg"/>
</figure>
</div>
</div>
<!-- Satisfy Client Image End -->
<!-- Hero Client Content Start -->
<div class="hero-client-content">
<h2><span class="counter">4.9</span>/5<i class="fa fa-solid fa-star"></i></h2>
<p>More Than 2500 Reviews</p>
</div>
<!-- Hero Client Content End -->
</div>
<!-- Hero Client Box End -->
</div>
<!-- Hero Content Body End -->
</div>
<!-- Hero Content End -->
</div>
</div>
</div>
</div>
<!-- Hero Section End -->
<!-- About Us Section Start -->
<div class="about-us">
<div class="container">
<div class="row">
<div class="col-xl-6">
<!-- About Us Image Box Start -->
<div class="about-us-image-box wow fadeInUp">
<!-- About Image Title Start -->
<div class="about-image-title">
<h2>Healthcare</h2>
</div>
<!-- About Image Title End -->
<!-- About Image Box 1 Start -->
<div class="about-image-box-1">
<!-- About Us Image Start -->
<div class="about-us-image">
<figure>
<img alt="" src="/demo-11/assets/images/about-us-image.jpg"/>
</figure>
</div>
<!-- About Us Image End -->
<!-- About Review Box Start -->
<div class="about-review-box hero-client-box">
<!-- Satisfy Client Image Start -->
<div class="satisfy-client-images">
<div class="satisfy-client-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-1.jpg"/>
</figure>
</div>
<div class="satisfy-client-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-2.jpg"/>
</figure>
</div>
<div class="satisfy-client-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-3.jpg"/>
</figure>
</div>
</div>
<!-- Satisfy Client Image End -->
<!-- Hero Client Content Start -->
<div class="hero-client-content">
<h2><span class="counter">4.9</span>/5<i class="fa fa-solid fa-star"></i></h2>
<p>More Than 2500 Reviews</p>
</div>
<!-- Hero Client Content End -->
</div>
<!-- About Review Box End -->
</div>
<!-- About Image Box 1 End -->
</div>
<!-- About Us Image Box End -->
</div>
<div class="col-xl-6">
<!-- About Us Content Start -->
<div class="about-us-content">
<!-- Section Title Start -->
<div class="section-title">
<span class="section-sub-title wow fadeInUp">About Us</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">About our journey providing quality healthcare</h2>
<p class="wow fadeInUp" data-wow-delay="0.2s">We are dedicated to providing compassionate, high-quality healthcare that focuses on your overall well-being. Our experienced medical professionals technology with personalized care to ensure every patient receives.</p>
</div>
<!-- Section Title End -->
<!-- About Us Item List Start -->
<div class="about-us-item-list wow fadeInUp" data-wow-delay="0.4s">
<!-- About Us Item Start -->
<div class="about-us-item">
<h3>Patient Focused Care</h3>
<p>We prioritize every personalized care, clear communication.</p>
</div>
<!-- About Us Item End -->
<!-- About Us Item Start -->
<div class="about-us-item">
<h3>Quality Medical Treatment</h3>
<p>We prioritize every personalized care, clear communication.</p>
</div>
<!-- About Us Item End -->
</div>
<!-- About Us Item List End -->
<!-- About Content Footer Start -->
<div class="about-content-footer wow fadeInUp" data-wow-delay="0.6s">
<!-- About Us Button Start -->
<div class="about-us-btn">
<a class="btn-default" href="/demo-11/about">Learn More About</a>
</div>
<!-- About Us Button End -->
<!-- About Us Author Box Start -->
<div class="about-us-author-box">
<!-- About Author Image Start -->
<div class="about-us-author-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-1.jpg"/>
</figure>
</div>
<!-- About Author Image End -->
<!-- About Author Content Start -->
<div class="about-us-author-content">
<h3>Devon Lane</h3>
<p>Internal Medicine Specialist</p>
</div>
<!-- About Author Content End -->
</div>
<!-- About Us Author Box End -->
</div>
<!-- About Content Footer End -->
</div>
<!-- About Us Content End -->
</div>
</div>
</div>
</div>
<!-- About Us Section End -->
<!-- Our Service Section Start -->
<div class="our-service bg-section">
<div class="container">
<div class="row section-row">
<div class="col-lg-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">Our Services</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Expert healthcare services for better living</h2>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-xl-3 col-md-6">
<!-- Service Item Start -->
<div class="service-item wow fadeInUp">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-service-item-1.svg"/>
</div>
<div class="service-item-body">
<div class="service-item-content">
<h2><a href="/demo-11/service-details">Pediatric Care</a></h2>
<p>Our pediatric care focus on the health and well-being of infants, children.</p>
</div>
<div class="service-item-btn">
<a class="readmore-btn" href="/demo-11/service-details">View Details</a>
</div>
</div>
</div>
<!-- Service Item End -->
</div>
<div class="col-xl-3 col-md-6">
<!-- Service Item Start -->
<div class="service-item wow fadeInUp" data-wow-delay="0.2s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-service-item-2.svg"/>
</div>
<div class="service-item-body">
<div class="service-item-content">
<h2><a href="/demo-11/service-details">Family Medicine</a></h2>
<p>Our pediatric care focus on the health and well-being of infants, children.</p>
</div>
<div class="service-item-btn">
<a class="readmore-btn" href="/demo-11/service-details">View Details</a>
</div>
</div>
</div>
<!-- Service Item End -->
</div>
<div class="col-xl-3 col-md-6">
<!-- Service Item Start -->
<div class="service-item wow fadeInUp" data-wow-delay="0.4s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-service-item-3.svg"/>
</div>
<div class="service-item-body">
<div class="service-item-content">
<h2><a href="/demo-11/service-details">Preventive Healthcare</a></h2>
<p>Our pediatric care focus on the health and well-being of infants, children.</p>
</div>
<div class="service-item-btn">
<a class="readmore-btn" href="/demo-11/service-details">View Details</a>
</div>
</div>
</div>
<!-- Service Item End -->
</div>
<div class="col-xl-3 col-md-6">
<!-- Service Cta Box Start -->
<div class="service-item service-cta-box wow fadeInUp" data-wow-delay="0.6s">
<!-- Service Cta Box Title Start -->
<div class="service-cta-box-title">
<h3>Your Health Starts With One Call</h3>
</div>
<!-- Service Cta Box Title End -->
<!-- Service Cta Box Image Start -->
<div class="service-cta-box-image">
<figure>
<img alt="" src="/demo-11/assets/images/our-service-box-image.png"/>
</figure>
</div>
<!-- Service Cta Box  Image End -->
</div>
<!-- Service Cta Box End -->
</div>
<div class="col-lg-12">
<!-- Section Footer Text Start -->
<div class="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
<p>Browse all professional healthcare services available for you and family</p>
<ul>
<li class="section-footer-content">Trusted By <b>58,900+</b> Users</li>
<li>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</li>
<li><span class="counter">4.9</span>/5</li>
</ul>
</div>
<!-- Section Footer Text End -->
</div>
</div>
</div>
</div>
<!-- Our Service Section End -->
<!-- Why Choose Us Section Start -->
<div class="why-choose-us">
<div class="container">
<div class="row align-items-center">
<div class="col-xl-6">
<!-- Why Choose Us Content Start -->
<div class="why-choose-us-content">
<!-- Section Title Start -->
<div class="section-title">
<span class="section-sub-title wow fadeInUp">Why Choose Us</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Why choose us for quality healthcare services</h2>
<p class="wow fadeInUp" data-wow-delay="0.2s">Our experienced medical team focuses on accurate diagnosis, effective treatment, and personalized care to ensure the best outcomes for every patient.</p>
</div>
<!-- Section Title End -->
<!-- Why Choose Us Body Start -->
<div class="why-choose-us-body">
<!-- Why Choose Counter Box Start -->
<div class="why-choose-counter-box wow fadeInUp" data-wow-delay="0.4s">
<!-- Why choose Counter Item List Start -->
<div class="why-choose-counter-item-list">
<!-- Why choose Counter Item Start -->
<div class="why-choose-counter-item">
<h2><span class="counter">25</span>+</h2>
<p>Years Experience</p>
</div>
<!-- Why choose Counter Item End -->
<!-- Why choose Counter Item Start -->
<div class="why-choose-counter-item">
<h2><span class="counter">24</span>/7</h2>
<p>Emergency Support</p>
</div>
<!-- Why choose Counter Item End -->
</div>
<!-- Why Choose Counter Item List End -->
<!-- Why Choose Counter Image Start -->
<div class="why-choose-counter-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/why-choose-counter-image.jpg"/>
</figure>
</div>
<!-- Why Choose Counter Image End -->
</div>
<!-- Why Choose Counter Box End -->
<!-- Why Choose Body Image Start -->
<div class="why-choose-body-image">
<figure class="image-anime reveal">
<img alt="" src="/demo-11/assets/images/why-choose-body-image.jpg"/>
</figure>
</div>
<!-- Why Choose Body Image End -->
</div>
<!-- Why Choose Us Body End -->
</div>
<!-- Why Choose Us Content End -->
</div>
<div class="col-xl-6">
<!-- Why choose Us Image Box Start -->
<div class="why-choose-us-image-box wow fadeInUp">
<!-- Why Choose Experience Circle Start -->
<div class="years-experience-circle">
<figure>
<img alt="" src="/demo-11/assets/images/years-experience-circle-white.svg"/>
</figure>
</div>
<!-- Why Choose Experience Circle End -->
<!-- Why Choose Us Image Start -->
<div class="why-choose-us-image">
<figure>
<img alt="" src="/demo-11/assets/images/why-choose-us-image.png"/>
</figure>
</div>
<!-- Why Choose Us Image End -->
<!-- Why Choose Cta Box Start -->
<div class="why-choose-cta-box">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-why-choose-cta-box.svg"/>
</div>
<div class="why-choose-cta-content">
<h2><span class="counter">12</span>+</h2>
<p>Medical Departments</p>
</div>
</div>
<!-- Why Choose Counter Box End -->
</div>
<!-- Why choose Us Image Box End -->
</div>
</div>
</div>
</div>
<!-- Why Choose Us Section End -->
<!-- Core Features Section Start -->
<div class="core-features bg-section dark-section">
<div class="container">
<div class="row">
<div class="col-xl-5">
<!-- Core Features Content Start -->
<div class="core-features-content">
<!-- Section Title Start -->
<div class="section-title">
<span class="section-sub-title wow fadeInUp">Core Feature</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Core features of our healthcare services</h2>
<p class="wow fadeInUp" data-wow-delay="0.2s">Our medical services are designed to provide reliable, high-quality care with a strong focus on patient comfort and safety</p>
</div>
<!-- Section Title End -->
<!-- Core Features Content Button Start -->
<div class="core-features-content-btn wow fadeInUp" data-wow-delay="0.4s">
<a class="btn-default btn-highlighted" href="/demo-11/contact">Contact Us</a>
</div>
<!-- Core Features Content Button End -->
</div>
<!-- Core Features Content End -->
</div>
<div class="col-xl-7">
<!-- Core Features Item List Start -->
<div class="core-features-item-list">
<!-- Core Features Item Start -->
<div class="core-features-item wow fadeInUp">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-core-features-item-1.svg"/>
</div>
<div class="core-features-item-content">
<h3>Quality Medical Treatment</h3>
</div>
</div>
<!-- Core Features Item End -->
<!-- Core Features Item Start -->
<div class="core-features-item wow fadeInUp" data-wow-delay="0.2s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-core-features-item-2.svg"/>
</div>
<div class="core-features-item-content">
<h3>Personalized Patient Care</h3>
</div>
</div>
<!-- Core Features Item End -->
<!-- Core Features Item Start -->
<div class="core-features-item wow fadeInUp" data-wow-delay="0.4s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-core-features-item-3.svg"/>
</div>
<div class="core-features-item-content">
<h3>Modern Medical Facilities</h3>
</div>
</div>
<!-- Core Features Item End -->
<!-- Core Features Item Start -->
<div class="core-features-item wow fadeInUp" data-wow-delay="0.6s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-core-features-item-4.svg"/>
</div>
<div class="core-features-item-content">
<h3>24/7 Emergency Support</h3>
</div>
</div>
<!-- Core Features Item End -->
<!-- Core Features Item Start -->
<div class="core-features-item wow fadeInUp" data-wow-delay="0.8s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-core-features-item-5.svg"/>
</div>
<div class="core-features-item-content">
<h3>Fast and Accurate Test Results</h3>
</div>
</div>
<!-- Core Features Item End -->
<!-- Core Features Item Start -->
<div class="core-features-item wow fadeInUp" data-wow-delay="1s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-core-features-item-6.svg"/>
</div>
<div class="core-features-item-content">
<h3>Safe and Comfortable Environment</h3>
</div>
</div>
<!-- Core Features Item End -->
<!-- Core Features Item Start -->
<div class="core-features-item wow fadeInUp" data-wow-delay="1.2s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-core-features-item-7.svg"/>
</div>
<div class="core-features-item-content">
<h3>Experienced Medical Professionals</h3>
</div>
</div>
<!-- Core Features Item End -->
<!-- Core Features Item Start -->
<div class="core-features-item wow fadeInUp" data-wow-delay="1.4s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-core-features-item-8.svg"/>
</div>
<div class="core-features-item-content">
<h3>Advanced Diagnostic Technology</h3>
</div>
</div>
<!-- Core Features Item End -->
</div>
<!-- Core Features Item List End -->
</div>
</div>
</div>
</div>
<!-- Core Features Section End -->
<!-- Case Study Section Start -->
<div class="our-case-study">
<div class="container">
<div class="row section-row">
<div class="col-lg-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">Case Study's</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Real patient success stories </h2>
<p class="wow fadeInUp" data-wow-delay="0.2s">Discover inspiring stories from patients who trusted our medical expertise and experienced successful recoveries these real-life cases highlight our commitment.</p>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-xl-4 col-md-6">
<!-- Case Study Item Start -->
<div class="case-study-item wow fadeInUp">
<div class="case-study-item-image">
<a data-cursor-text="View" href="/demo-11/project-details">
<figure>
<img alt="" src="/demo-11/assets/images/case-study-image-1.jpg"/>
</figure>
</a>
</div>
<div class="case-study-item-content">
<h2><a href="/demo-11/project-details">Heart Health Recovery</a></h2>
<p>A patient experiencing severe as diagnosed with a cardiac condition.</p>
</div>
</div>
<!-- Case Study Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Case Study Item Start -->
<div class="case-study-item wow fadeInUp" data-wow-delay="0.2s">
<div class="case-study-item-image">
<a data-cursor-text="View" href="/demo-11/project-details">
<figure>
<img alt="" src="/demo-11/assets/images/case-study-image-2.jpg"/>
</figure>
</a>
</div>
<div class="case-study-item-content">
<h2><a href="/demo-11/project-details">Pediatric Care Improvement</a></h2>
<p>A patient experiencing severe as diagnosed with a cardiac condition.</p>
</div>
</div>
<!-- Case Study Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Case Study Item Start -->
<div class="case-study-item wow fadeInUp" data-wow-delay="0.4s">
<div class="case-study-item-image">
<a data-cursor-text="View" href="/demo-11/project-details">
<figure>
<img alt="" src="/demo-11/assets/images/case-study-image-3.jpg"/>
</figure>
</a>
</div>
<div class="case-study-item-content">
<h2><a href="/demo-11/project-details">Dermatology Skin Treatment</a></h2>
<p>A patient experiencing severe as diagnosed with a cardiac condition.</p>
</div>
</div>
<!-- Case Study Item End -->
</div>
<div class="col-lg-12">
<!-- Section Footer Text Start -->
<div class="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.6s">
<!-- Satisfy Client Images Start -->
<div class="satisfy-client-images">
<div class="satisfy-client-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-1.jpg"/>
</figure>
</div>
<div class="satisfy-client-image add-more">
<img alt="" src="/demo-11/assets/images/icon-phone-white.svg"/>
</div>
</div>
<!-- Satisfy Client Images End -->
<p>Helping You Move from Concern to Confidence with Expert Medical Care. - <a href="/demo-11/project">View all Case study</a></p>
</div>
<!-- Section Footer Text End -->
</div>
</div>
</div>
</div>
<!-- Case Study Section End -->
<!-- Our Fact Section Start -->
<div class="our-facts bg-section dark-section">
<div class="container">
<div class="row section-row">
<div class="col-lg-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">Fact / Statistics</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Key statistics that reflect our medical excellence</h2>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-xl-4 col-md-6">
<!-- Fact Item Start -->
<div class="fact-item wow fadeInUp">
<div class="fact-item-header">
<div class="fact-item-counter-content">
<h2><span class="counter">35</span>+</h2>
<ul>
<li>Experienced Doctors</li>
</ul>
</div>
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-fact-item-1.svg"/>
</div>
</div>
<div class="fact-item-content">
<p>Our team of experienced doctor dedicated to providing expert medical care with.</p>
</div>
</div>
<!-- Fact Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Fact Item Start -->
<div class="fact-item wow fadeInUp" data-wow-delay="0.2s">
<div class="fact-item-header">
<div class="fact-item-counter-content">
<h2><span class="counter">12</span>+</h2>
<ul>
<li>Medical Departments</li>
</ul>
</div>
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-fact-item-2.svg"/>
</div>
</div>
<div class="fact-item-content">
<p>Our team of experienced doctor dedicated to providing expert medical care with.</p>
</div>
</div>
<!-- Fact Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Fact Item Start -->
<div class="fact-item wow fadeInUp" data-wow-delay="0.4s">
<div class="fact-item-header">
<div class="fact-item-counter-content">
<h2><span class="counter">24</span>/7</h2>
<ul>
<li>Emergency Support</li>
</ul>
</div>
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-fact-item-3.svg"/>
</div>
</div>
<div class="fact-item-content">
<p>Our team of experienced doctor dedicated to providing expert medical care with.</p>
</div>
</div>
<!-- Fact Item End -->
</div>
<div class="col-lg-12">
<!-- Section Footer Text Start -->
<div class="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
<p>Browse all professional healthcare services available for you and family</p>
<ul>
<li class="section-footer-content">Trusted By <b>58,900+</b> Users</li>
<li>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</li>
<li><span class="counter">4.9</span>/5</li>
</ul>
</div>
<!-- Section Footer Text End -->
</div>
</div>
</div>
</div>
<!-- Our Fact Section End -->
<!-- Our Partners Section Start -->
<div class="our-partners light-section">
<div class="container">
<div class="row section-row">
<div class="col-xl-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">Trusted Partners</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Trusted by leading healthcare organizations</h2>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-lg-12">
<!-- Our Partners List Start -->
<div class="our-partners-list">
<ul>
<li><img alt="" src="/demo-11/assets/images/partners-logo-1.svg"/></li>
<li><img alt="" src="/demo-11/assets/images/partners-logo-2.svg"/></li>
<li><img alt="" src="/demo-11/assets/images/partners-logo-3.svg"/></li>
<li><img alt="" src="/demo-11/assets/images/partners-logo-4.svg"/></li>
<li><img alt="" src="/demo-11/assets/images/partners-logo-5.svg"/></li>
<li><img alt="" src="/demo-11/assets/images/partners-logo-6.svg"/></li>
<li><img alt="" src="/demo-11/assets/images/partners-logo-7.svg"/></li>
<li><img alt="" src="/demo-11/assets/images/partners-logo-8.svg"/></li>
</ul>
</div>
<!-- Our Partners List End -->
</div>
<div class="col-lg-12">
<!-- Section Footer Text Start -->
<div class="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
<p>Browse all professional healthcare services available for you and family</p>
<ul>
<li class="section-footer-content">Trusted By <b>58,900+</b> Users</li>
<li>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</li>
<li><span class="counter">4.9</span>/5</li>
</ul>
</div>
<!-- Section Footer Text End -->
</div>
</div>
</div>
</div>
<!-- Our Partners Section End -->
<!-- How It Work Section Start -->
<div class="how-it-work bg-section">
<div class="container">
<div class="row section-row">
<div class="col-lg-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">How It Work</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Simple steps to get started</h2>
<p class="wow fadeInUp" data-wow-delay="0.2s">Getting started with us is quick and hassle-free. We follow a streamlined process designed to make your journey smooth from the very beginning.</p>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-lg-12">
<!-- How Work Items List Start -->
<div class="how-work-items-list">
<!-- How Work Item Start -->
<div class="how-work-item wow fadeInUp">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-how-work-item-1.svg"/>
</div>
<div class="how-work-item-content">
<span>Step - 01</span>
<h3>Strategy &amp; Planning</h3>
<p>Our pediatric care focus on the health and well-being of infants, children.</p>
</div>
</div>
<!-- How Work Item End -->
<!-- How Work Item Start -->
<div class="how-work-item wow fadeInUp" data-wow-delay="0.2s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-how-work-item-2.svg"/>
</div>
<div class="how-work-item-content">
<span>Step - 02</span>
<h3>Design &amp; Development</h3>
<p>Our pediatric care focus on the health and well-being of infants, children.</p>
</div>
</div>
<!-- How Work Item End -->
<!-- How Work Item Start -->
<div class="how-work-item wow fadeInUp" data-wow-delay="0.4s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-how-work-item-3.svg"/>
</div>
<div class="how-work-item-content">
<span>Step - 03</span>
<h3>Review &amp; Launch</h3>
<p>Our pediatric care focus on the health and well-being of infants, children.</p>
</div>
</div>
<!-- How Work Item End -->
<!-- How Work Item Start -->
<div class="how-work-item wow fadeInUp" data-wow-delay="0.6s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-how-work-item-4.svg"/>
</div>
<div class="how-work-item-content">
<span>Step - 04</span>
<h3>Support &amp; Growth</h3>
<p>Our pediatric care focus on the health and well-being of infants, children.</p>
</div>
</div>
<!-- How Work Item End -->
</div>
<!-- How Work Items List End -->
</div>
<div class="col-lg-12">
<!-- Section Footer Text Start -->
<div class="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.4s">
<!-- Satisfy Client Images Start -->
<div class="satisfy-client-images">
<div class="satisfy-client-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-1.jpg"/>
</figure>
</div>
<div class="satisfy-client-image add-more">
<img alt="" src="/demo-11/assets/images/icon-phone-white.svg"/>
</div>
</div>
<!-- Satisfy Client Images End -->
<p>Helping You Move from Concern to Confidence with Expert Medical Care. -<a href="/demo-11/contact">Contact Us Today!</a></p>
</div>
<!-- Section Footer Text End -->
</div>
</div>
</div>
</div>
<!-- How It Work Section End -->
<!-- Our Team Section Start -->
<div class="our-team">
<div class="container">
<div class="row section-row">
<div class="col-lg-12">
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">Our Team</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Our skilled medical team serving patients with care</h2>
</div>
</div>
</div>
<div class="row">
<div class="col-xl-4 col-md-6">
<!-- Team Item Start -->
<div class="team-item wow fadeInUp">
<!-- Team Item Iamage Start -->
<div class="team-item-image">
<a data-cursor-text="View" href="/demo-11/doctor-details">
<figure>
<img alt="" src="/demo-11/assets/images/team-1.jpg"/>
</figure>
</a>
</div>
<!-- Team Item Iamage End -->
<!-- Team Item Body Start -->
<div class="team-item-body">
<!-- Team Social List Box Start -->
<div class="team-social-list-box">
<div class="team-social-btn">
<a href="/demo-11/doctor-details"><img alt="" src="/demo-11/assets/images/icon-share.svg"/></a>
</div>
<div class="team-social-list">
<ul>
<li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
<li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
<li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
</ul>
</div>
</div>
<!-- Team Social List Box End -->
<!-- Team Item Content Start -->
<div class="team-item-content">
<h2><a href="/demo-11/doctor-details">Dr. David Wilson</a></h2>
<p>Cardiologist</p>
</div>
<!-- Team Item Content End -->
</div>
<!-- Team Item Body End -->
</div>
<!-- Team Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Team Item Start -->
<div class="team-item wow fadeInUp" data-wow-delay="0.2s">
<!-- Team Item Iamage Start -->
<div class="team-item-image">
<a data-cursor-text="View" href="/demo-11/doctor-details">
<figure>
<img alt="" src="/demo-11/assets/images/team-2.jpg"/>
</figure>
</a>
</div>
<!-- Team Item Iamage End -->
<!-- Team Item Body Start -->
<div class="team-item-body">
<!-- Team Social List Box Start -->
<div class="team-social-list-box">
<div class="team-social-btn">
<a href="/demo-11/doctor-details"><img alt="" src="/demo-11/assets/images/icon-share.svg"/></a>
</div>
<div class="team-social-list">
<ul>
<li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
<li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
<li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
</ul>
</div>
</div>
<!-- Team Social List Box End -->
<!-- Team Item Content Start -->
<div class="team-item-content">
<h2><a href="/demo-11/doctor-details">Dr. Emma Roberts</a></h2>
<p>Pediatric Specialist</p>
</div>
<!-- Team Item Content End -->
</div>
<!-- Team Item Body End -->
</div>
<!-- Team Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Team Item Start -->
<div class="team-item wow fadeInUp" data-wow-delay="0.4s">
<!-- Team Item Iamage Start -->
<div class="team-item-image">
<a data-cursor-text="View" href="/demo-11/doctor-details">
<figure>
<img alt="" src="/demo-11/assets/images/team-3.jpg"/>
</figure>
</a>
</div>
<!-- Team Item Iamage End -->
<!-- Team Item Body Start -->
<div class="team-item-body">
<!-- Team Social List Box Start -->
<div class="team-social-list-box">
<div class="team-social-btn">
<a href="/demo-11/doctor-details"><img alt="" src="/demo-11/assets/images/icon-share.svg"/></a>
</div>
<div class="team-social-list">
<ul>
<li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
<li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
<li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
</ul>
</div>
</div>
<!-- Team Social List Box End -->
<!-- Team Item Content Start -->
<div class="team-item-content">
<h2><a href="/demo-11/doctor-details">Dr. Michael Johnson</a></h2>
<p>Orthopedic Surgeon</p>
</div>
<!-- Team Item Content End -->
</div>
<!-- Team Item Body End -->
</div>
<!-- Team Item End -->
</div>
<div class="col-lg-12">
<!-- Section Footer Text Start -->
<div class="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.6s">
<!-- Satisfy Client Images Start -->
<div class="satisfy-client-images">
<div class="satisfy-client-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-1.jpg"/>
</figure>
</div>
<div class="satisfy-client-image add-more">
<img alt="" src="/demo-11/assets/images/icon-phone-white.svg"/>
</div>
</div>
<!-- Satisfy Client Images End -->
<p>Helping You Move from Concern to Confidence with Expert Medical Care. - <a href="/demo-11/contact"> Contact Us Today!</a></p>
</div>
<!-- Section Footer Text End -->
</div>
</div>
</div>
</div>
<!-- Our Team Section End -->
<!-- Our Pricing Section Start -->
<div class="our-pricing bg-section">
<div class="container">
<div class="row section-row">
<div class="col-lg-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">Pricing Plan</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Affordable healthcare plans for every need</h2>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-xl-4 col-md-6">
<!-- Pricing Item Start -->
<div class="pricing-item wow fadeInUp">
<!-- Pricing Item Header Start -->
<div class="pricing-item-header">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-pricing-item-1.svg"/>
</div>
<div class="pricing-item-content">
<h2>Basic Care</h2>
<p>Ideal for individuals seeking medical check - ups and consultations.</p>
</div>
<div class="pricing-item-price">
<h2>\$49.00<sub>/Month</sub></h2>
</div>
</div>
<!-- Pricing Item Header End -->
<!-- Pricing Item Body Start -->
<div class="pricing-item-body">
<div class="pricing-item-list">
<ul>
<li>2 General Consultations</li>
<li>Basic Lab Tests</li>
<li>Online Health Portal Access</li>
<li>Prescriptions Services</li>
</ul>
</div>
<div class="pricing-item-btn">
<a class="btn-default" href="/demo-11/contact">Choose This Plan</a>
</div>
</div>
<!-- Pricing Item Body End -->
</div>
<!-- Pricing Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Pricing Item Start -->
<div class="pricing-item wow fadeInUp">
<!-- Pricing Item Header Start -->
<div class="pricing-item-header">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-pricing-item-2.svg"/>
</div>
<div class="pricing-item-content">
<h2>Advanced Care</h2>
<p>Ideal for individuals seeking medical check - ups and consultations.</p>
</div>
<div class="pricing-item-price">
<h2>\$69.00<sub>/Month</sub></h2>
</div>
</div>
<!-- Pricing Item Header End -->
<!-- Pricing Item Body Start -->
<div class="pricing-item-body">
<div class="pricing-item-list">
<ul>
<li>2 General Consultations</li>
<li>Basic Lab Tests</li>
<li>Online Health Portal Access</li>
<li>Prescriptions Services</li>
</ul>
</div>
<div class="pricing-item-btn">
<a class="btn-default" href="/demo-11/contact">Choose This Plan</a>
</div>
</div>
<!-- Pricing Item Body End -->
</div>
<!-- Pricing Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Pricing Item Start -->
<div class="pricing-item wow fadeInUp">
<!-- Pricing Item Header Start -->
<div class="pricing-item-header">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-pricing-item-3.svg"/>
</div>
<div class="pricing-item-content">
<h2>Premium Care</h2>
<p>Ideal for individuals seeking medical check - ups and consultations.</p>
</div>
<div class="pricing-item-price">
<h2>\$99.00<sub>/Month</sub></h2>
</div>
</div>
<!-- Pricing Item Header End -->
<!-- Pricing Item Body Start -->
<div class="pricing-item-body">
<div class="pricing-item-list">
<ul>
<li>2 General Consultations</li>
<li>Basic Lab Tests</li>
<li>Online Health Portal Access</li>
<li>Prescriptions Services</li>
</ul>
</div>
<div class="pricing-item-btn">
<a class="btn-default" href="/demo-11/contact">Choose This Plan</a>
</div>
</div>
<!-- Pricing Item Body End -->
</div>
<!-- Pricing Item End -->
</div>
<div class="col-lg-12">
<!-- Pricing Benifit List Start -->
<div class="pricing-benefit-list wow fadeInUp" data-wow-delay="0.6s">
<ul>
<li><img alt="" src="/demo-11/assets/images/icon-pricing-benefit-1.svg"/>Get 30 day free trial</li>
<li><img alt="" src="/demo-11/assets/images/icon-pricing-benefit-2.svg"/>No any hidden fee pay</li>
<li><img alt="" src="/demo-11/assets/images/icon-pricing-benefit-3.svg"/>You can cancel anytime </li>
</ul>
</div>
<!-- Pricing Benifit List End -->
</div>
</div>
</div>
</div>
<!-- Our Pricing Section End -->
<!-- Our Support Section Start -->
<div class="our-support">
<div class="container">
<div class="row section-row">
<div class="col-lg-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">Emergency Care</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">24/7 emergency support</h2>
<p class="wow fadeInUp" data-wow-delay="0.2s">Our emergency department is available around the clock to provide immediate medical assistance and life-saving care when you need it most.</p>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-lg-12">
<!-- Support Video Image Box Start -->
<div class="support-video-image-box wow fadeInUp" data-wow-delay="0.4s">
<!-- Support CTA Box Start -->
<div class="support-cta-box">
<!-- Support CTA Header Start -->
<div class="support-cta-header">
<div class="icon-box">
<i class="fa-regular fa-clock"></i>
</div>
<div class="support-cta-title">
<h3>Schedule a hours:</h3>
</div>
</div>
<!-- Support CTA Header End -->
<!-- Support CTA Body Start -->
<div class="support-cta-body">
<!-- Support CTA List Start -->
<div class="support-cta-list">
<ul>
<li><span>Mon to Fri:</span>09:00 AM - 07:00 PM</li>
<li><span>Saturday:</span>09:00 AM - 07:00 PM</li>
<li><span>Sunday</span>Closed</li>
</ul>
</div>
<!-- Support CTA List End -->
<!-- Support CTA Button Start -->
<div class="support-cta-btn">
<a class="btn-default" href="/demo-11/contact">24/7 Services for Emergancy</a>
</div>
<!-- Support CTA Button End -->
</div>
<!-- Support CTA Body End -->
</div>
<!-- Support CTA Box End -->
<!-- Support Video Box Start -->
<div class="support-video-box">
<!-- Support Video Image Start -->
<div class="support-video-image">
<figure>
<img alt="" src="/demo-11/assets/images/support-video-image.jpg"/>
</figure>
</div>
<!-- Support Video Image End -->
<!-- Video Play Button Start -->
<div class="video-play-button">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<span class="bg-effect"><i class="fa-solid fa-play"></i></span>
</a>
</div>
<!-- Video Play Button End -->
</div>
<!-- Support Video Box End -->
</div>
<!-- Support Video Image Box End -->
</div>
<div class="col-lg-12">
<!-- Section Footer Text Start -->
<div class="section-footer-text wow fadeInUp" data-wow-delay="0.6s">
<p>Browse all professional healthcare services available for you and family</p>
<ul>
<li class="section-footer-content">Trusted By <b>58,900+</b> Users</li>
<li>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</li>
<li><span class="counter">4.9</span>/5</li>
</ul>
</div>
<!-- Section Footer Text End -->
</div>
</div>
</div>
</div>
<!-- Our Support Section End -->
<!-- Our Testimonial Section Start -->
<div class="our-testimonial bg-section">
<div class="container">
<div class="row section-row">
<div class="col-lg-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">Patients Testimonials</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">What our patients are saying</h2>
<p class="wow fadeInUp" data-wow-delay="0.2s">Hear from our patients about their experiences with our dedicated medical team and quality healthcare services their feedback reflects our commitment.</p>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-lg-12">
<!-- Testimonial Slider Start -->
<div class="testimonial-slider wow fadeInUp">
<div class="swiper">
<div class="swiper-wrapper" data-cursor-text="Drag">
<!-- Swiper Slide Start -->
<div class="swiper-slide">
<!-- Testimonial Item Start -->
<div class="testimonial-item">
<div class="testimonial-item-header">
<div class="testimonial-item-quote">
<img alt="" src="/demo-11/assets/images/testimonial-quote.svg"/>
</div>
<div class="testimonial-item-content">
<p>“The doctors and staff were incredibly supportive throughout my treatment. Their expertise and care helped me recover expected.”</p>
</div>
</div>
<div class="testimonial-item-author">
<div class="testimonial-author-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-1.jpg"/>
</figure>
</div>
<div class="testimonial-author-content">
<h2>John Peterson</h2>
<p>Internal Medicine Specialist</p>
</div>
</div>
</div>
<!-- Testimonial Item End -->
</div>
<!-- Swiper Slide End -->
<!-- Swiper Slide Start -->
<div class="swiper-slide">
<!-- Testimonial Item Start -->
<div class="testimonial-item">
<div class="testimonial-item-header">
<div class="testimonial-item-quote">
<img alt="" src="/demo-11/assets/images/testimonial-quote.svg"/>
</div>
<div class="testimonial-item-content">
<p>“The doctors and staff were incredibly supportive throughout my treatment. Their expertise and care helped me recover expected.”</p>
</div>
</div>
<div class="testimonial-item-author">
<div class="testimonial-author-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-5.jpg"/>
</figure>
</div>
<div class="testimonial-author-content">
<h2>Maria Gonzalez</h2>
<p>Internal Medicine Specialist</p>
</div>
</div>
</div>
<!-- Testimonial Item End -->
</div>
<!-- Swiper Slide End -->
<!-- Swiper Slide Start -->
<div class="swiper-slide">
<!-- Testimonial Item Start -->
<div class="testimonial-item">
<div class="testimonial-item-header">
<div class="testimonial-item-quote">
<img alt="" src="/demo-11/assets/images/testimonial-quote.svg"/>
</div>
<div class="testimonial-item-content">
<p>“The doctors and staff were incredibly supportive throughout my treatment. Their expertise and care helped me recover expected.”</p>
</div>
</div>
<div class="testimonial-item-author">
<div class="testimonial-author-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-3.jpg"/>
</figure>
</div>
<div class="testimonial-author-content">
<h2>David Robinson</h2>
<p>Internal Medicine Specialist</p>
</div>
</div>
</div>
<!-- Testimonial Item End -->
</div>
<!-- Swiper Slide End -->
<!-- Swiper Slide Start -->
<div class="swiper-slide">
<!-- Testimonial Item Start -->
<div class="testimonial-item">
<div class="testimonial-item-header">
<div class="testimonial-item-quote">
<img alt="" src="/demo-11/assets/images/testimonial-quote.svg"/>
</div>
<div class="testimonial-item-content">
<p>“The doctors and staff were incredibly supportive throughout my treatment. Their expertise and care helped me recover expected.”</p>
</div>
</div>
<div class="testimonial-item-author">
<div class="testimonial-author-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-4.jpg"/>
</figure>
</div>
<div class="testimonial-author-content">
<h2>Savannah Nguyen</h2>
<p>Internal Medicine Specialist</p>
</div>
</div>
</div>
<!-- Testimonial Item End -->
</div>
<!-- Swiper Slide End -->
</div>
</div>
</div>
<!-- Testimonial Slider End -->
</div>
<div class="col-lg-12">
<!-- Section Footer Text Start -->
<div class="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.2s">
<!-- Satisfy Client Images Start -->
<div class="satisfy-client-images">
<div class="satisfy-client-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-1.jpg"/>
</figure>
</div>
<div class="satisfy-client-image add-more">
<img alt="" src="/demo-11/assets/images/icon-phone-white.svg"/>
</div>
</div>
<!-- Satisfy Client Images End -->
<p>Helping You Move from Concern to Confidence with Expert Medical Care. -<a href="/demo-11/testimonials">View our All reviews</a></p>
</div>
<!-- Section Footer Text End -->
</div>
</div>
</div>
</div>
<!-- Our Testimonial Section End -->
<!-- Our FAQs Section Start -->
<div class="our-faqs">
<div class="container">
<div class="row">
<div class="col-xl-5">
<!-- FAQ CTA Box Start -->
<div class="faq-cta-box">
<!-- FAQ CTA Image Start -->
<div class="faq-cta-image">
<figure class="image-anime reveal">
<img alt="" src="/demo-11/assets/images/faq-cta-image.jpg"/>
</figure>
</div>
<!-- FAQ CTA Image End -->
<!-- FAQ CTA Body Start -->
<div class="faq-cta-body">
<!-- FAQ CTA Content Start -->
<div class="faq-cta-content wow fadeInUp">
<h3>Have a any Questions !</h3>
<p>If you have any questions about our medical services, appointments, or treatments, our team is here to help. We are committed to providing clear information and friendly support to ensure you receive the care and guidance you need.</p>
</div>
<!-- FAQ CTA Content End -->
<!-- FAQ CTA Button Start -->
<div class="faq-cta-btn wow fadeInUp" data-wow-delay="0.2s">
<a class="btn-default" href="/demo-11/faq">View all Questions</a>
</div>
<!-- FAQ CTA Button End -->
</div>
<!-- FAQ CTA Body End -->
</div>
<!-- FAQ CTA Box End -->
</div>
<div class="col-xl-7">
<!-- Section Title Start -->
<div class="section-title">
<span class="section-sub-title wow fadeInUp">Frequently Asked Questions</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Your questions answered about our medical services</h2>
</div>
<!-- Section Title End -->
<!-- FAQ Accordion Start -->
<div class="faq-accordion" id="accordion">
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp">
<h2 class="accordion-header" id="heading1">
<button aria-controls="collapse1" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse1" data-bs-toggle="collapse" type="button">
                                    1. How can I book an appointment with a doctor?
                                </button>
</h2>
<div aria-labelledby="heading1" class="accordion-collapse collapse" data-bs-parent="#accordion" id="collapse1" role="region">
<div class="accordion-body">
<p>We provide a wide range of services including general checkups, cardiology, pediatrics, orthopedics, dermatology, and diagnostic tests.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
<h2 class="accordion-header" id="heading2">
<button aria-controls="collapse2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse2" data-bs-toggle="collapse" type="button">
                                    2. Do you provide emergency medical services?
                                </button>
</h2>
<div aria-labelledby="heading2" class="accordion-collapse collapse" data-bs-parent="#accordion" id="collapse2" role="region">
<div class="accordion-body">
<p>We provide a wide range of services including general checkups, cardiology, pediatrics, orthopedics, dermatology, and diagnostic tests.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
<h2 class="accordion-header" id="heading3">
<button aria-controls="collapse3" aria-expanded="true" class="accordion-button" data-bs-target="#collapse3" data-bs-toggle="collapse" type="button">
                                    3. What medical services do you provide?
                                </button>
</h2>
<div aria-labelledby="heading3" class="accordion-collapse collapse show" data-bs-parent="#accordion" id="collapse3" role="region">
<div class="accordion-body">
<p>We provide a wide range of services including general checkups, cardiology, pediatrics, orthopedics, dermatology, and diagnostic tests.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
<h2 class="accordion-header" id="heading4">
<button aria-controls="collapse4" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse4" data-bs-toggle="collapse" type="button">
                                    4. How early should I arrive for my appointment?
                                </button>
</h2>
<div aria-labelledby="heading4" class="accordion-collapse collapse" data-bs-parent="#accordion" id="collapse4" role="region">
<div class="accordion-body">
<p>We provide a wide range of services including general checkups, cardiology, pediatrics, orthopedics, dermatology, and diagnostic tests.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
<h2 class="accordion-header" id="heading5">
<button aria-controls="collapse5" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse5" data-bs-toggle="collapse" type="button">
                                    5. What should I bring to my medical appointment?
                                </button>
</h2>
<div aria-labelledby="heading5" class="accordion-collapse collapse" data-bs-parent="#accordion" id="collapse5" role="region">
<div class="accordion-body">
<p>We provide a wide range of services including general checkups, cardiology, pediatrics, orthopedics, dermatology, and diagnostic tests.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
</div>
<!-- FAQ Accordion End -->
</div>
</div>
</div>
</div>
<!-- Our FAQs Section End -->
<!-- Book Appointment Section Start -->
<div class="book-appointment bg-section dark-section">
<div class="container">
<div class="row">
<div class="col-xl-6">
<!-- Appointment Content Start -->
<div class="our-appointment-content">
<!-- Section Title Start -->
<div class="section-title">
<span class="section-sub-title wow fadeInUp">Book an Appointment</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Book your appointment for better health today</h2>
</div>
<!-- Section Title End -->
<!-- Google Map Start -->
<div class="google-map-iframe wow fadeInUp" data-wow-delay="0.2s">
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"></iframe>
</div>
<!-- Google Map End -->
</div>
<!-- Appointment Content End -->
</div>
<div class="col-xl-6">
<!-- Appointment Form Start -->
<div class="appointment-form">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="text-anime-style-3" data-cursor="-opaque">Book an appointment</h2>
</div>
<!-- Section Title End -->
<!-- Appointment Form Start -->
<form action="#" class="wow fadeInUp" data-toggle="validator" data-wow-delay="0.2s" id="appointmentForm" method="POST">
<div class="row">
<div class="form-group col-md-6 mb-4">
<input class="form-control" id="name" name="name" placeholder="Full Name" required="" type="text"/>
<div class="help-block with-errors"></div>
</div>
<div class="form-group col-md-6 mb-4">
<input class="form-control" id="email" name="email" placeholder="Email Address" required="" type="email"/>
<div class="help-block with-errors"></div>
</div>
<div class="form-group col-md-6 mb-4">
<input class="form-control" id="phone" name="phone" placeholder="Phone Number" required="" type="text"/>
<div class="help-block with-errors"></div>
</div>
<div class="form-group col-md-6 mb-4">
<select class="form-control form-select" id="service" name="service" required="">
<option disabled="" selected="" value="">Select Service</option>
<option value="beginner_driving_course">Beginner Driving Course</option>
<option value="license_test_preparation">License Test Preparation</option>
<option value="automatic_car_driving">Automatic Car Driving</option>
<option value="defensive_training">Defensive Training</option>
<option value="refresher_driving_courses">Refresher Driving Courses</option>
<option value="night_driving_lessons">Night Driving Lessons</option>
<option value="highway_driving_sessions">Highway Driving Sessions</option>
<option value="road_safety_workshops">Road Safety Workshops</option>
</select>
<div class="help-block with-errors"></div>
</div>
<div class="form-group col-md-12 mb-5">
<textarea class="form-control" id="message" name="message" placeholder="Write Message Here..." rows="5"></textarea>
<div class="help-block with-errors"></div>
</div>
<div class="col-md-12">
<button class="btn-default btn-highlighted" type="submit">Submit Message</button>
<div class="h3 hidden" id="msgSubmit"></div>
</div>
</div>
</form>
<!-- Appointment Form End -->
</div>
<!-- Appointment Form End -->
</div>
</div>
</div>
</div>
<!-- Our Appointment Section End -->
<!-- Our Blog Section Start -->
<div class="our-blog">
<div class="container">
<div class="row section-row align-items-center">
<div class="col-lg-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">Latest Article</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Latest articles and insights on healthcare trends</h2>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-xl-4 col-md-6">
<!-- Post Item Start -->
<div class="post-item wow fadeInUp">
<!-- Post Featured Image Start-->
<div class="post-featured-image">
<a data-cursor-text="View" href="/demo-11/blog-details">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/post-1.jpg"/>
</figure>
</a>
<div class="post-item-tags">
<a href="/demo-11/blog-details">General Health</a>
</div>
</div>
<!-- Post Featured Image End -->
<!-- Post Item Body Start -->
<div class="post-item-body">
<div class="post-item-content">
<h2><a href="/demo-11/blog-details">10 Early Warning Signs You Should Never Ignore</a></h2>
</div>
<div class="post-item-btn">
<a class="readmore-btn" href="/demo-11/blog-details">Read More</a>
</div>
</div>
<!-- Post Item Body End -->
</div>
<!-- Post Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Post Item Start -->
<div class="post-item wow fadeInUp" data-wow-delay="0.2s">
<!-- Post Featured Image Start-->
<div class="post-featured-image">
<a data-cursor-text="View" href="/demo-11/blog-details">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/post-2.jpg"/>
</figure>
</a>
<div class="post-item-tags">
<a href="/demo-11/blog-details">Cardiology</a>
</div>
</div>
<!-- Post Featured Image End -->
<!-- Post Item Body Start -->
<div class="post-item-body">
<div class="post-item-content">
<h2><a href="/demo-11/blog-details">Heart Health 101 Simple Habits for a Stronger Heart</a></h2>
</div>
<div class="post-item-btn">
<a class="readmore-btn" href="/demo-11/blog-details">Read More</a>
</div>
</div>
<!-- Post Item Body End -->
</div>
<!-- Post Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Post Item Start -->
<div class="post-item wow fadeInUp" data-wow-delay="0.4s">
<!-- Post Featured Image Start-->
<div class="post-featured-image">
<a data-cursor-text="View" href="/demo-11/blog-details">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/post-3.jpg"/>
</figure>
</a>
<div class="post-item-tags">
<a href="/demo-11/blog-details">Pediatrics</a>
</div>
</div>
<!-- Post Featured Image End -->
<!-- Post Item Body Start -->
<div class="post-item-body">
<div class="post-item-content">
<h2><a href="/demo-11/blog-details">Essential Vaccinations Every Child Should Receive</a></h2>
</div>
<div class="post-item-btn">
<a class="readmore-btn" href="/demo-11/blog-details">Read More</a>
</div>
</div>
<!-- Post Item Body End -->
</div>
<!-- Post Item End -->
</div>
</div>
</div>
</div>
<!-- Our Blog Section End -->
<!-- Main Footer Start -->

<!-- Main Footer End -->
<!-- Jquery Library File -->

<!-- Circle Progress Js File -->

<!-- Bootstrap js file -->

<!-- Validator js file -->

<!-- SlickNav js file -->

<!-- Swiper js file -->

<!-- Counter js file -->


<!-- Magnific js file -->

<!-- SmoothScroll -->

<!-- Parallax js -->

<!-- MagicCursor js file -->


<!-- Text Effect js file -->


<!-- YTPlayer js File -->

<!-- Wow js file -->

<!-- Main Custom js file -->

`}} />
  );
}
