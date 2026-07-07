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
<h1 class="text-anime-style-3" data-cursor="-opaque">Frequently asked questions</h1>
<nav class="wow fadeInUp">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/demo-11">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">FAQ's</li>
</ol>
</nav>
</div>
<!-- Page Header Box End -->
</div>
</div>
</div>
</div>
<!-- Page Header Section End -->
<!-- Page Faqs Start -->
<div class="page-faqs">
<div class="container">
<div class="row">
<div class="col-lg-4">
<!-- Page Single Sidebar Start -->
<div class="page-single-sidebar">
<!-- Page Category List Start -->
<div class="page-category-list wow fadeInUp">
<ul>
<li><a href="#faq_1">General Questions</a></li>
<li><a href="#faq_2">Appointment &amp; consultation</a></li>
<li><a href="#faq_3">Services &amp; treatment</a></li>
<li><a href="#faq_4">Payments &amp; pricing</a></li>
<li><a href="#faq_5">Emergency &amp; support</a></li>
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
<!-- Page FAQs List Start -->
<div class="page-faqs-list">
<!-- FAQs section start -->
<div class="page-single-faqs" id="faq_1">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="wow fadeInUp" data-cursor="-opaque">General questions</h2>
</div>
<!-- Section Title End -->
<!-- FAQ Accordion Start -->
<div class="faq-accordion our-faq-accordion" id="accordion">
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
<h2 class="accordion-header" id="heading1">
<button aria-controls="collapse1" aria-expanded="true" class="accordion-button collapsed" data-bs-target="#collapse1" data-bs-toggle="collapse" type="button">
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
<div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
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
<div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
<h2 class="accordion-header" id="heading3">
<button aria-controls="collapse3" aria-expanded="false" class="accordion-button" data-bs-target="#collapse3" data-bs-toggle="collapse" type="button">
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
<div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
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
<div class="accordion-item wow fadeInUp" data-wow-delay="1s">
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
<!-- FAQs section End -->
<!-- FAQs section start -->
<div class="page-single-faqs" id="faq_2">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="wow fadeInUp" data-cursor="-opaque">Appointment &amp; consultation</h2>
</div>
<!-- Section Title End -->
<!-- FAQ Accordion Start -->
<div class="faq-accordion our-faq-accordion" id="accordion1">
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
<h2 class="accordion-header" id="heading6">
<button aria-controls="collapse6" aria-expanded="true" class="accordion-button collapsed" data-bs-target="#collapse6" data-bs-toggle="collapse" type="button">
                                            1. How can I book an appointment?
                                        </button>
</h2>
<div aria-labelledby="heading6" class="accordion-collapse collapse" data-bs-parent="#accordion1" id="collapse6" role="region">
<div class="accordion-body">
<p>Please bring your previous medical records, prescriptions, test reports, and a valid ID. If you have health insurance, carry your insurance details as well.  </p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
<h2 class="accordion-header" id="heading7">
<button aria-controls="collapse7" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse7" data-bs-toggle="collapse" type="button">
                                            2. Can I choose a specific doctor?
                                        </button>
</h2>
<div aria-labelledby="heading7" class="accordion-collapse collapse" data-bs-parent="#accordion1" id="collapse7" role="region">
<div class="accordion-body">
<p>Please bring your previous medical records, prescriptions, test reports, and a valid ID. If you have health insurance, carry your insurance details as well.  </p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
<h2 class="accordion-header" id="heading8">
<button aria-controls="collapse8" aria-expanded="false" class="accordion-button" data-bs-target="#collapse8" data-bs-toggle="collapse" type="button">
                                            3. What should I bring to my appointment?
                                        </button>
</h2>
<div aria-labelledby="heading8" class="accordion-collapse collapse show" data-bs-parent="#accordion1" id="collapse8" role="region">
<div class="accordion-body">
<p>Please bring your previous medical records, prescriptions, test reports, and a valid ID. If you have health insurance, carry your insurance details as well.  </p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
<h2 class="accordion-header" id="heading9">
<button aria-controls="collapse9" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse9" data-bs-toggle="collapse" type="button">
                                            4. Do I need an appointment before visiting?
                                        </button>
</h2>
<div aria-labelledby="heading9" class="accordion-collapse collapse" data-bs-parent="#accordion1" id="collapse9" role="region">
<div class="accordion-body">
<p>Please bring your previous medical records, prescriptions, test reports, and a valid ID. If you have health insurance, carry your insurance details as well.  </p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="1s">
<h2 class="accordion-header" id="heading10">
<button aria-controls="collapse10" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse10" data-bs-toggle="collapse" type="button">
                                            5. What are your clinic working hours?
                                        </button>
</h2>
<div aria-labelledby="heading10" class="accordion-collapse collapse" data-bs-parent="#accordion1" id="collapse10" role="region">
<div class="accordion-body">
<p>Please bring your previous medical records, prescriptions, test reports, and a valid ID. If you have health insurance, carry your insurance details as well.  </p>
</div>
</div>
</div>
<!-- FAQ Item End -->
</div>
<!-- FAQ Accordion End -->
</div>
<!-- FAQs section End -->
<!-- FAQs section start -->
<div class="page-single-faqs" id="faq_3">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="wow fadeInUp" data-cursor="-opaque">Services &amp; treatment</h2>
</div>
<!-- Section Title End -->
<!-- FAQ Accordion Start -->
<div class="faq-accordion our-faq-accordion" id="accordion2">
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
<h2 class="accordion-header" id="heading11">
<button aria-controls="collapse11" aria-expanded="true" class="accordion-button collapsed" data-bs-target="#collapse11" data-bs-toggle="collapse" type="button">
                                            1. What medical services do you provide?
                                        </button>
</h2>
<div aria-labelledby="heading11" class="accordion-collapse collapse" data-bs-parent="#accordion2" id="collapse11" role="region">
<div class="accordion-body">
<p>Yes, we offer a full range of laboratory and diagnostic services at our clinic. Our advanced testing facilities ensure accurate and timely results to support proper diagnosis and effective treatment.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
<h2 class="accordion-header" id="heading12">
<button aria-controls="collapse12" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse12" data-bs-toggle="collapse" type="button">
                                            2. Do you provide full body checkups?
                                        </button>
</h2>
<div aria-labelledby="heading12" class="accordion-collapse collapse" data-bs-parent="#accordion2" id="collapse12" role="region">
<div class="accordion-body">
<p>Yes, we offer a full range of laboratory and diagnostic services at our clinic. Our advanced testing facilities ensure accurate and timely results to support proper diagnosis and effective treatment.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
<h2 class="accordion-header" id="heading13">
<button aria-controls="collapse13" aria-expanded="false" class="accordion-button" data-bs-target="#collapse13" data-bs-toggle="collapse" type="button">
                                            3. Are laboratory tests available at your clinic?
                                        </button>
</h2>
<div aria-labelledby="heading13" class="accordion-collapse collapse show" data-bs-parent="#accordion2" id="collapse13" role="region">
<div class="accordion-body">
<p>Yes, we offer a full range of laboratory and diagnostic services at our clinic. Our advanced testing facilities ensure accurate and timely results to support proper diagnosis and effective treatment.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
<h2 class="accordion-header" id="heading14">
<button aria-controls="collapse14" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse14" data-bs-toggle="collapse" type="button">
                                            4. How can I book an appointment?
                                        </button>
</h2>
<div aria-labelledby="heading14" class="accordion-collapse collapse" data-bs-parent="#accordion2" id="collapse14" role="region">
<div class="accordion-body">
<p>Yes, we offer a full range of laboratory and diagnostic services at our clinic. Our advanced testing facilities ensure accurate and timely results to support proper diagnosis and effective treatment.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="1s">
<h2 class="accordion-header" id="heading15">
<button aria-controls="collapse15" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse15" data-bs-toggle="collapse" type="button">
                                            5. What should I bring to my appointment?
                                        </button>
</h2>
<div aria-labelledby="heading15" class="accordion-collapse collapse" data-bs-parent="#accordion2" id="collapse15" role="region">
<div class="accordion-body">
<p>Yes, we offer a full range of laboratory and diagnostic services at our clinic. Our advanced testing facilities ensure accurate and timely results to support proper diagnosis and effective treatment.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
</div>
<!-- FAQ Accordion End -->
</div>
<!-- FAQs section End -->
<!-- FAQs section start -->
<div class="page-single-faqs" id="faq_4">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="wow fadeInUp" data-cursor="-opaque">Payments &amp; pricing</h2>
</div>
<!-- Section Title End -->
<!-- FAQ Accordion Start -->
<div class="faq-accordion our-faq-accordion" id="accordion3">
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
<h2 class="accordion-header" id="heading16">
<button aria-controls="collapse16" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse16" data-bs-toggle="collapse" type="button">
                                            1. What payment methods do you accept?
                                        </button>
</h2>
<div aria-labelledby="heading16" class="accordion-collapse collapse" data-bs-parent="#accordion3" id="collapse16" role="region">
<div class="accordion-body">
<p>Yes, we accept selected health insurance plans. Our team can assist you with the claim process and guide you on coverage details.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
<h2 class="accordion-header" id="heading17">
<button aria-controls="collapse17" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse17" data-bs-toggle="collapse" type="button">
                                            2. Are your services affordable?
                                        </button>
</h2>
<div aria-labelledby="heading17" class="accordion-collapse collapse" data-bs-parent="#accordion3" id="collapse17" role="region">
<div class="accordion-body">
<p>Yes, we accept selected health insurance plans. Our team can assist you with the claim process and guide you on coverage details.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
<h2 class="accordion-header" id="heading18">
<button aria-controls="collapse18" aria-expanded="false" class="accordion-button" data-bs-target="#collapse18" data-bs-toggle="collapse" type="button">
                                            3. Do you offer insurance support?
                                        </button>
</h2>
<div aria-labelledby="heading18" class="accordion-collapse collapse show" data-bs-parent="#accordion3" id="collapse18" role="region">
<div class="accordion-body">
<p>Yes, we accept selected health insurance plans. Our team can assist you with the claim process and guide you on coverage details.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
<h2 class="accordion-header" id="heading19">
<button aria-controls="collapse19" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse19" data-bs-toggle="collapse" type="button">
                                            4. What medical services do you provide?
                                        </button>
</h2>
<div aria-labelledby="heading19" class="accordion-collapse collapse" data-bs-parent="#accordion3" id="collapse19" role="region">
<div class="accordion-body">
<p>Yes, we accept selected health insurance plans. Our team can assist you with the claim process and guide you on coverage details.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="1s">
<h2 class="accordion-header" id="heading20">
<button aria-controls="collapse20" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse20" data-bs-toggle="collapse" type="button">
                                            5. Are laboratory tests available at your clinic?
                                        </button>
</h2>
<div aria-labelledby="heading20" class="accordion-collapse collapse" data-bs-parent="#accordion3" id="collapse20" role="region">
<div class="accordion-body">
<p>Yes, we accept selected health insurance plans. Our team can assist you with the claim process and guide you on coverage details.</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
</div>
<!-- FAQ Accordion End -->
</div>
<!-- FAQs section End -->
<!-- FAQs section start -->
<div class="page-single-faqs" id="faq_5">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="wow fadeInUp" data-cursor="-opaque">Emergency &amp; support</h2>
</div>
<!-- Section Title End -->
<!-- FAQ Accordion Start -->
<div class="faq-accordion our-faq-accordion" id="accordion4">
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
<h2 class="accordion-header" id="heading21">
<button aria-controls="collapse21" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse21" data-bs-toggle="collapse" type="button">
                                            1. Do you provide emergency services?
                                        </button>
</h2>
<div aria-labelledby="heading21" class="accordion-collapse collapse" data-bs-parent="#accordion4" id="collapse21" role="region">
<div class="accordion-body">
<p>We offer a wide range of healthcare services including general consultation, diagnostic testing, emergency care, pediatric care, cardiology, orthopedic treatment, preventive health checkups,</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
<h2 class="accordion-header" id="heading22">
<button aria-controls="collapse22" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse22" data-bs-toggle="collapse" type="button">
                                            2. How can I contact you in case of emergency?
                                        </button>
</h2>
<div aria-labelledby="heading22" class="accordion-collapse collapse" data-bs-parent="#accordion4" id="collapse22" role="region">
<div class="accordion-body">
<p>We offer a wide range of healthcare services including general consultation, diagnostic testing, emergency care, pediatric care, cardiology, orthopedic treatment, preventive health checkups,</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
<h2 class="accordion-header" id="heading23">
<button aria-controls="collapse23" aria-expanded="false" class="accordion-button" data-bs-target="#collapse23" data-bs-toggle="collapse" type="button">
                                            3. What medical services do you provide?
                                        </button>
</h2>
<div aria-labelledby="heading23" class="accordion-collapse collapse show" data-bs-parent="#accordion4" id="collapse23" role="region">
<div class="accordion-body">
<p>We offer a wide range of healthcare services including general consultation, diagnostic testing, emergency care, pediatric care, cardiology, orthopedic treatment, preventive health checkups,</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
<h2 class="accordion-header" id="heading24">
<button aria-controls="collapse24" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse24" data-bs-toggle="collapse" type="button">
                                            4. Do you offer insurance support?
                                        </button>
</h2>
<div aria-labelledby="heading24" class="accordion-collapse collapse" data-bs-parent="#accordion4" id="collapse24" role="region">
<div class="accordion-body">
<p>We offer a wide range of healthcare services including general consultation, diagnostic testing, emergency care, pediatric care, cardiology, orthopedic treatment, preventive health checkups,</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
<!-- FAQ Item Start -->
<div class="accordion-item wow fadeInUp" data-wow-delay="1s">
<h2 class="accordion-header" id="heading25">
<button aria-controls="collapse25" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapse25" data-bs-toggle="collapse" type="button">
                                            5. Can I choose my preferred doctor?
                                        </button>
</h2>
<div aria-labelledby="heading25" class="accordion-collapse collapse" data-bs-parent="#accordion4" id="collapse25" role="region">
<div class="accordion-body">
<p>We offer a wide range of healthcare services including general consultation, diagnostic testing, emergency care, pediatric care, cardiology, orthopedic treatment, preventive health checkups,</p>
</div>
</div>
</div>
<!-- FAQ Item End -->
</div>
<!-- FAQ Accordion End -->
</div>
<!-- FAQs section End -->
</div>
<!-- Page FAQs List End -->
</div>
</div>
</div>
</div>
<!-- Page Faqs End -->
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
