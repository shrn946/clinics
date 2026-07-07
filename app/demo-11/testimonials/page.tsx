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
<h1 class="text-anime-style-3" data-cursor="-opaque">Our testimonials</h1>
<nav class="wow fadeInUp">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/demo-11">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Testimonials</li>
</ol>
</nav>
</div>
<!-- Page Header Box End -->
</div>
</div>
</div>
</div>
<!-- Page Header Section End -->
<!-- Page Testimonials Start -->
<div class="page-testimonials">
<div class="container">
<div class="row">
<div class="col-xl-4 col-md-6">
<!-- Testimonial Item Start -->
<div class="testimonial-item wow fadeInUp">
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
<div class="col-xl-4 col-md-6">
<!-- Testimonial Item Start -->
<div class="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
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
<img alt="" src="/demo-11/assets/images/author-2.jpg"/>
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
<div class="col-xl-4 col-md-6">
<!-- Testimonial Item Start -->
<div class="testimonial-item wow fadeInUp" data-wow-delay="0.4s">
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
<div class="col-xl-4 col-md-6">
<!-- Testimonial Item Start -->
<div class="testimonial-item wow fadeInUp" data-wow-delay="0.6s">
<div class="testimonial-item-header">
<div class="testimonial-item-quote">
<img alt="" src="/demo-11/assets/images/testimonial-quote.svg"/>
</div>
<div class="testimonial-item-content">
<p>“The doctors and staff were extremely professional and caring. They explained my treatment clearly and made me feel comfortable throughout”</p>
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
<div class="col-xl-4 col-md-6">
<!-- Testimonial Item Start -->
<div class="testimonial-item wow fadeInUp" data-wow-delay="0.8s">
<div class="testimonial-item-header">
<div class="testimonial-item-quote">
<img alt="" src="/demo-11/assets/images/testimonial-quote.svg"/>
</div>
<div class="testimonial-item-content">
<p>“I had a great experience with the medical team. The clinic is very clean and well-organized, and the doctors are very knowledgeable”</p>
</div>
</div>
<div class="testimonial-item-author">
<div class="testimonial-author-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-5.jpg"/>
</figure>
</div>
<div class="testimonial-author-content">
<h2>Guy Hawkins</h2>
<p>Internal Medicine Specialist</p>
</div>
</div>
</div>
<!-- Testimonial Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Testimonial Item Start -->
<div class="testimonial-item wow fadeInUp" data-wow-delay="1s">
<div class="testimonial-item-header">
<div class="testimonial-item-quote">
<img alt="" src="/demo-11/assets/images/testimonial-quote.svg"/>
</div>
<div class="testimonial-item-content">
<p>“The level of care I received was outstanding. The doctors listened carefully to my concerns and provided the best treatment.”</p>
</div>
</div>
<div class="testimonial-item-author">
<div class="testimonial-author-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/author-6.jpg"/>
</figure>
</div>
<div class="testimonial-author-content">
<h2>Bessie Cooper</h2>
<p>Internal Medicine Specialist</p>
</div>
</div>
</div>
<!-- Testimonial Item End -->
</div>
</div>
</div>
</div>
<!-- Page Testimonials End -->
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
