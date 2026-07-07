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
<h1 class="text-anime-style-3" data-cursor="-opaque">Family medicine</h1>
<nav class="wow fadeInUp">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/demo-11">home</a></li>
<li class="breadcrumb-item"><a href="/demo-11/service">Services</a></li>
<li aria-current="page" class="breadcrumb-item active">Family medicine</li>
</ol>
</nav>
</div>
<!-- Page Header Box End -->
</div>
</div>
</div>
</div>
<!-- Page Header Section End -->
<!-- Page Service Single Start -->
<div class="page-service-single">
<div class="container">
<div class="row">
<div class="col-lg-4">
<!-- Page Single Sidebar Start -->
<div class="page-single-sidebar">
<!-- Page Category List Start -->
<div class="page-category-list wow fadeInUp">
<h2 class="page-category-list-title">Discover Our Services</h2>
<ul>
<li><a href="#">Preventive Healthcare</a></li>
<li><a href="#">Neurology Treatment</a></li>
<li><a href="#">Dermatology Services</a></li>
<li><a href="#">Diagnostic Imaging</a></li>
<li><a href="#">Mental Health Support</a></li>
</ul>
</div>
<!-- Page Category List End -->
<!-- Sidebar CTA Box Start -->
<div class="sidebar-cta-box dark-section wow fadeInUp" data-wow-delay="0.25s">
<div class="sidebar-cta-header">
<div class="icon-box">
<i class="fa-regular fa-clock"></i>
</div>
<div class="sidebar-cta-title">
<h2>Schedule a hours:</h2>
</div>
</div>
<div class="sidebar-cta-body">
<div class="sidebar-cta-list">
<ul>
<li><span>Mon to Fri:</span>9AM - 7PM</li>
<li><span>Saturday:</span>9AM - 7PM</li>
<li><span>Sunday</span>Only Emergency</li>
</ul>
</div>
<div class="sidebar-cta-btn">
<a class="btn-default btn-highlighted" href="/demo-11/appointment">Book An Appointment</a>
</div>
</div>
</div>
<!-- Sidebar CTA Box End -->
</div>
<!-- Page Single Sidebar End -->
</div>
<div class="col-lg-8">
<!-- Service Single Content Start -->
<div class="service-single-content">
<!-- Page Single Image Start -->
<div class="page-single-image">
<figure class="image-anime reveal">
<img alt="" src="/demo-11/assets/images/service-single-image.jpg"/>
</figure>
</div>
<!-- Page Single Image End -->
<!-- Service Entry Start -->
<div class="service-entry">
<p class="wow fadeInUp">Family medicine plays a vital role in maintaining the overall health and well-being of individuals and families at every stage of life. It focuses on providing comprehensive, continuous, and personalized healthcare, addressing a wide range of medical needs—from routine check-ups and preventive care to the diagnosis and management of acute and chronic conditions.</p>
<p class="wow fadeInUp" data-wow-delay="0.2s">Our approach to family medicine goes beyond treating symptoms. We emphasize preventive care, early detection, and patient education to help individuals make informed decisions about their health.</p>
<!-- Service Why Choose Box Start -->
<div class="service-why-choose-box">
<h2 class="text-anime-style-3">Why choose our family medicine</h2>
<p class="wow fadeInUp">Choosing the right healthcare provider is essential for long-term well-being, and our family medicine services are built on trust, experience, and personalized care. We take the time to understand your medical history, lifestyle, and unique needs to deliver treatments that are both effective and compassionate.</p>
<!-- Service Why Choose Item List Start -->
<div class="service-why-choose-item-list">
<!-- Service Why Choose Item Start -->
<div class="service-why-choose-item wow fadeInUp" data-wow-delay="0.2s">
<div class="service-why-choose-item-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/service-why-choose-item-image-1.jpg"/>
</figure>
</div>
<div class="service-why-choose-item-content">
<h3>Modern Medical Facilities And Technology</h3>
<p>We are equipped with modern medical facilities and advanced technology to ensure accurate diagnosis and effective treatment for every patient.</p>
</div>
</div>
<!-- Service Why Choose Item End -->
<!-- Service Why Choose Item Start -->
<div class="service-why-choose-item wow fadeInUp" data-wow-delay="0.4s">
<div class="service-why-choose-item-image">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/service-why-choose-item-image-2.jpg"/>
</figure>
</div>
<div class="service-why-choose-item-content">
<h3>Modern Medical Facilities And Technology</h3>
<p>We are equipped with modern medical facilities and advanced technology to ensure accurate diagnosis and effective treatment for every patient.</p>
</div>
</div>
<!-- Service Why Choose Item End -->
</div>
<!-- Service Why Choose Item List End -->
</div>
<!-- Service Why Choose Box End -->
<!-- Service Process Box Start -->
<div class="service-process-box">
<h2 class="text-anime-style-3">Family medicine process</h2>
<p class="wow fadeInUp">Our family medicine process is designed to provide seamless, personalized, and continuous care for every patient. We follow a structured approach to ensure accurate diagnosis, effective treatment.</p>
<!-- Service Process item List Start -->
<div class="service-process-item-list">
<!-- Service Process Item Start -->
<div class="service-process-item wow fadeInUp" data-wow-delay="0.2s">
<div class="service-process-item-number">
<h3>01</h3>
</div>
<div class="service-process-item-content">
<h3>Consultation</h3>
<p>Our pediatric care focus on the health </p>
</div>
</div>
<!-- Service Process Item End -->
<!-- Service Process Item Start -->
<div class="service-process-item wow fadeInUp" data-wow-delay="0.4s">
<div class="service-process-item-number">
<h3>02</h3>
</div>
<div class="service-process-item-content">
<h3>Examination</h3>
<p>Our pediatric care focus on the health </p>
</div>
</div>
<!-- Service Process Item End -->
<!-- Service Process Item Start -->
<div class="service-process-item wow fadeInUp" data-wow-delay="0.6s">
<div class="service-process-item-number">
<h3>03</h3>
</div>
<div class="service-process-item-content">
<h3>Follow-Up</h3>
<p>Our pediatric care focus on the health </p>
</div>
</div>
<!-- Service Process Item End -->
</div>
<!-- Service Process item List End -->
<!-- Section Footer Text Start -->
<div class="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
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
<!-- Service Process Box End -->
<!-- Service Key Benefits Start -->
<div class="service-benefits-box">
<h2 class="text-anime-style-3">Who can benefit</h2>
<p class="wow fadeInUp">Our family medicine services are designed to support individuals and families at every stage of life. From children and young adults to seniors, anyone seeking reliable, continuous.</p>
<!-- Service Benefits Video Image Box Start -->
<div class="service-benefits-video-image-box wow fadeInUp" data-wow-delay="0.2s">
<!-- Service Key Benefits Image Start -->
<div class="service-benefits-video-image">
<figure>
<img alt="" src="/demo-11/assets/images/service-benefits-video-image.jpg"/>
</figure>
</div>
<!-- Service Key Benefits Image End -->
<!-- Video Play Button Start -->
<div class="video-play-button">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<span class="bg-effect"><i class="fa-solid fa-play"></i></span>
</a>
</div>
<!-- Video Play Button End -->
<!-- Service Key Benefits List Start -->
<div class="service-benefits-list">
<ul>
<li>Individuals Of All Age Groups</li>
<li>General Health Patients</li>
<li>Preventive Care Seekers</li>
</ul>
</div>
<!-- Service Key Benefits List End -->
</div>
<!-- Service Benefits Video Image Box End -->
</div>
<!-- Service Key Benefits End -->
</div>
<!-- Service Entry End -->
<!-- Page Single FAQs Start -->
<div class="page-single-faqs">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="text-anime-style-3">Frequently Asked Questions</h2>
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
<div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
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
<!-- Page Single FAQs End -->
</div>
<!-- Service Single Content End -->
</div>
</div>
</div>
</div>
<!-- Page Service Single End -->
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
