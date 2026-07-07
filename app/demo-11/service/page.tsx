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
<!-- Page Header Section Start -->
<div class="page-header dark-section parallaxie">
<div class="container">
<div class="row">
<div class="col-lg-12">
<!-- Page Header Box Start -->
<div class="page-header-box">
<h1 class="text-anime-style-3" data-cursor="-opaque">Our services</h1>
<nav class="wow fadeInUp">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/demo-11">home</a></li>
<li aria-current="page" class="breadcrumb-item active">services</li>
</ol>
</nav>
</div>
<!-- Page Header Box End -->
</div>
</div>
</div>
</div>
<!-- Page Header Section End -->
<!-- Page Service Section Start -->
<div class="page-service">
<div class="container">
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
<!-- Service Item Start -->
<div class="service-item wow fadeInUp" data-wow-delay="0.6s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-service-item-4.svg"/>
</div>
<div class="service-item-body">
<div class="service-item-content">
<h2><a href="/demo-11/service-details">Neurology Treatment</a></h2>
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
<div class="service-item wow fadeInUp" data-wow-delay="0.8s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-service-item-5.svg"/>
</div>
<div class="service-item-body">
<div class="service-item-content">
<h2><a href="/demo-11/service-details">Dermatology Services</a></h2>
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
<div class="service-item wow fadeInUp" data-wow-delay="1s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-service-item-6.svg"/>
</div>
<div class="service-item-body">
<div class="service-item-content">
<h2><a href="/demo-11/service-details">Diagnostic Imaging</a></h2>
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
<div class="service-item wow fadeInUp" data-wow-delay="1.2s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-service-item-7.svg"/>
</div>
<div class="service-item-body">
<div class="service-item-content">
<h2><a href="/demo-11/service-details">Laboratory Testing</a></h2>
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
<div class="service-item wow fadeInUp" data-wow-delay="1.4s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-service-item-8.svg"/>
</div>
<div class="service-item-body">
<div class="service-item-content">
<h2><a href="/demo-11/service-details">Mental Health Support</a></h2>
<p>Our pediatric care focus on the health and well-being of infants, children.</p>
</div>
<div class="service-item-btn">
<a class="readmore-btn" href="/demo-11/service-details">View Details</a>
</div>
</div>
</div>
<!-- Service Item End -->
</div>
</div>
</div>
</div>
<!-- Page Service Section End -->
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
<!-- Our Approach Section Start -->
<div class="our-approach bg-section">
<div class="container">
<div class="row section-row">
<div class="col-lg-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title">Our Approach</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Our patient first approach to quality healthcare</h2>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-xl-4 col-md-6">
<!-- Approach CTA Box Start -->
<div class="approach-cta-box wow fadeInUp">
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
<div class="approach-cta-body">
<div class="approach-cta-content">
<p>We prioritize comfort, trust, and treatment to ensure the best possible health outcomes for every patient.</p>
</div>
<div class="approach-cta-btn">
<a class="btn-default" href="/demo-11/contact">24/7 Services for Emergancy</a>
</div>
</div>
</div>
<!-- Approach CTA Box End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Approach Item Start -->
<div class="approach-item wow fadeInUp" data-wow-delay="0.2s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-approach-item-1.svg"/>
</div>
<div class="approach-item-content">
<h3>Your Health Our Priority</h3>
<p>Your health is at the heart of everything we do. We are committed to high-quality care tailored to your journey.</p>
</div>
</div>
<!-- Approach Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Approach Item Start -->
<div class="approach-item wow fadeInUp" data-wow-delay="0.4s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-approach-item-2.svg"/>
</div>
<div class="approach-item-content">
<h3>Vision For Better Healthcare</h3>
<p>Your health is at the heart of everything we do. We are committed to high-quality care tailored to your journey.</p>
</div>
</div>
<!-- Approach Item End -->
</div>
<div class="col-lg-12">
<!-- Section Footer Text Start -->
<div class="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
<p>Browse all professional healthcare services available for you and family</p>
<ul>
<li class="section-footer-content">Trusted By <b>58,900+</b> Users</li>
<li class="section-footer-rating">
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
<!-- Our Approach Section End -->
<!-- Our Expertise Start -->
<div class="our-expertise">
<div class="container">
<div class="row">
<div class="col-xl-6">
<!-- Expertise Image Box Start -->
<div class="expertise-image-box wow fadeInUp">
<!-- Expertise Image Box 1 Start -->
<div class="expertise-image-box-1">
<div class="expertise-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/our-expertise-image-1.jpg"/>
</figure>
</div>
</div>
<!-- Expertise Image Box 1 End -->
<!-- Expertise Image Box 2 Start -->
<div class="expertise-image-box-2">
<div class="expertise-experience-circle">
<figure>
<img alt="" src="/demo-11/assets/images/experience-circle-accent.svg"/>
</figure>
</div>
<div class="expertise-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/our-expertise-image-2.jpg"/>
</figure>
</div>
</div>
<!-- Expertise Image Box 2 End -->
</div>
<!-- Expertise Image Box End -->
</div>
<div class="col-xl-6">
<!-- Our Expertise Content start -->
<div class="our-expertise-content">
<!-- Section Title Start -->
<div class="section-title">
<span class="section-sub-title wow fadeInUp">Medical Expertise</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Experience and expertise you can trust always</h2>
<p class="wow fadeInUp" data-wow-delay="0.2s">With years of hands-on experience and deep medical expertise, we provide care you can trust at every step our skilled professionals are committed.</p>
</div>
<!-- Section Title End -->
<!-- Expertise Item List Start -->
<div class="expertise-item-list">
<!-- Expertise Item Start -->
<div class="expertise-item">
<div class="circle" data-size="60" data-value="0.85">
<div class="progress_value"><span class="pro_data"></span><span>%</span></div>
</div>
<div class="expertise-item-content">
<h3>General Medicine And Primary Care</h3>
<p>Our General Medicine and Primary Care services focus on patients.</p>
</div>
</div>
<!-- Expertise Item End -->
<!-- Expertise Item Start -->
<div class="expertise-item">
<div class="circle" data-size="60" data-value="0.67">
<div class="progress_value"><span class="pro_data"></span><span>%</span></div>
</div>
<div class="expertise-item-content">
<h3>Orthopedic And Bone Treatments</h3>
<p>Our General Medicine and Primary Care services focus on patients.</p>
</div>
</div>
<!-- Expertise Item End -->
</div>
<!-- Expertise Content Footer Start -->
<div class="expertise-content-footer wow fadeInUp" data-wow-delay="0.4s">
<!-- Expertise Content Button Start -->
<div class="expertise-content-btn">
<a class="btn-default" href="/demo-11/appointment">Book Appointment</a>
</div>
<!-- Expertise Content Button End -->
<!-- What We Contact Item Start -->
<div class="what-we-contact-item">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-headphone.svg"/>
</div>
<div class="what-we-contact-item-content">
<p>Emergency Call</p>
<h3><a href="tel:+123456789">+(123) 456-789</a></h3>
</div>
</div>
<!-- What We Contact Item End -->
</div>
<!-- Expertise Content Footer End -->
</div>
<!-- Our Expertise Content End -->
</div>
</div>
</div>
</div>
<!-- Our Expertise Section End -->
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
