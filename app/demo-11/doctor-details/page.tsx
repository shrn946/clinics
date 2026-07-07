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
<h1 class="text-anime-style-3" data-cursor="-opaque">Dr. david wilson</h1>
<nav class="wow fadeInUp">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/demo-11">Home</a></li>
<li class="breadcrumb-item"><a href="/demo-11/doctor">Team</a></li>
<li aria-current="page" class="breadcrumb-item active"> Dr. david wilson</li>
</ol>
</nav>
</div>
<!-- Page Header Box End -->
</div>
</div>
</div>
</div>
<!-- Page Header Section End -->
<!-- Page Team Single Start -->
<div class="page-team-single">
<div class="container">
<div class="row">
<div class="col-lg-4">
<!-- Page Single Sidebar Start -->
<div class="page-single-sidebar">
<!-- Team Single Image Start -->
<div class="team-single-image">
<figure class="image-anime reveal">
<img alt="" src="/demo-11/assets/images/team-1.jpg"/>
</figure>
</div>
<!-- Team Single Image End -->
<!-- Sidebar CTA Box Start -->
<div class="team-sidebar-cta-box dark-section wow fadeInUp" data-wow-delay="0.25s">
<div class="team-sidebar-cta-title">
<h2>Contact Details:</h2>
</div>
<!-- Team Sidebar CTA List Start -->
<div class="team-sidebar-cta-list">
<!-- Team Sidebar CTA Item Start -->
<div class="team-sidebar-cta-item">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-headphone.svg"/>
</div>
<div class="team-sidebar-cta-item-content">
<p>Call Us!</p>
<h3><a href="tel:123456789">+(123) 456-789</a></h3>
</div>
</div>
<!-- Team Sidebar CTA Item End -->
<!-- Team Sidebar CTA Item Start -->
<div class="team-sidebar-cta-item">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-mail-white.svg"/>
</div>
<div class="team-sidebar-cta-item-content">
<p>E-mail Us!</p>
<h3><a href="mailto:info@domainname.com">domain@gmail.com</a></h3>
</div>
</div>
<!-- Team Sidebar CTA Item End -->
<!-- Team Sidebar CTA Item Start -->
<div class="team-sidebar-cta-item">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-position.svg"/>
</div>
<div class="team-sidebar-cta-item-content">
<p>Position:</p>
<h3>Cardiologist</h3>
</div>
</div>
<!-- Team Sidebar CTA Item End -->
<!-- Team Sidebar CTA Item Start -->
<div class="team-sidebar-cta-item">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-location-white.svg"/>
</div>
<div class="team-sidebar-cta-item-content">
<p>Location:</p>
<h3>123 Health Street, 001</h3>
</div>
</div>
<!-- Team Sidebar CTA Item End -->
</div>
<!-- Team Sidebar CTA List End -->
</div>
<!-- Sidebar CTA Box End -->
</div>
<!-- Page Single Sidebar End -->
</div>
<div class="col-lg-8">
<!-- Service Single Content Start -->
<div class="team-single-content">
<!-- Team Member About Start -->
<div class="team-member-about">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="text-anime-style-3" data-cursor="-opaque">About me</h2>
<p class="wow fadeInUp">Dr. David Wilson is a highly experienced cardiologist specializing in the diagnosis and treatment of heart-related conditions. With over 12 years of medical expertise, he is dedicated to providing advanced cardiac care using modern technology and evidence-based treatments.</p>
</div>
<!-- Section Title End -->
<!-- About Item List Start -->
<div class="member-about-item-list">
<!-- About Item Start -->
<div class="member-about-item wow fadeInUp" data-wow-delay="0.2s">
<h3>Pediatric And Geriatric Care</h3>
<p>Our Mission is to become a trusted and leading healthcare provider known for excellence, innovation, and advanced medical care.</p>
<ul>
<li>Patient-Centered Care Approach</li>
</ul>
</div>
<!-- About Item End -->
<!-- About Item Start -->
<div class="member-about-item wow fadeInUp" data-wow-delay="0.4s">
<h3>Wellness Counseling</h3>
<p>Our vision is to become a trusted and leading healthcare provider known for excellence, innovation, and advanced medical care.</p>
<ul>
<li>Modern UI Mission &amp; Vision Layout</li>
</ul>
</div>
<!-- About Item End -->
</div>
<!-- About Item List End -->
</div>
<!-- Team Member About End -->
<!-- Team Member Education Start -->
<div class="team-member-education">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="text-anime-style-3" data-cursor="-opaque">Education &amp; qualifications</h2>
<p class="wow fadeInUp">With years of experience and deep medical knowledge, I specialize in providing accurate diagnosis, advanced treatment, and personalized care. My expertise focuses on ensuring the best possible outcomes while maintaining patient comfort and trust.</p>
</div>
<!-- Section Title End -->
<!-- Member Education List Start -->
<div class="member-education-list">
<!-- Member Education Item Start -->
<div class="member-education-item wow fadeInUp" data-wow-delay="0.2s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-member-education-1.svg"/>
</div>
<div class="member-education-item-content">
<h3>Doctor of Medicine (MD)</h3>
<p>This qualification reflects a strong commitment to medical excellence, ethical continuous learning in delivering safe.</p>
</div>
</div>
<!-- Member Education Item End -->
<!-- Member Education Item Start -->
<div class="member-education-item wow fadeInUp" data-wow-delay="0.4s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-member-education-2.svg"/>
</div>
<div class="member-education-item-content">
<h3>Board Certified In Family Medicine</h3>
<p>This qualification reflects a strong commitment to medical excellence, ethical continuous learning in delivering safe.</p>
</div>
</div>
<!-- Member Education Item End -->
</div>
<!-- Member Education List End -->
</div>
<!-- Team Member Education End -->
<!-- Team Member Expertise Start -->
<div class="team-member-expertise">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="text-anime-style-3" data-cursor="-opaque">Areas of expertise</h2>
<p class="wow fadeInUp">With extensive experience in the medical field, I have developed strong clinical and diagnostic skills to provide accurate treatment and high-quality patient care.</p>
</div>
<!-- Section Title End -->
<!-- Member Skills List Start -->
<div class="member-skill-list">
<!-- Skills Progress Bar Start -->
<div class="skills-progress-bar">
<!-- Skill Item Start -->
<div class="skillbar" data-percent="95%">
<div class="skill-data">
<div class="skill-title">Cardiac Diagnosis</div>
<div class="skill-no">95%</div>
</div>
<div class="skill-progress">
<div class="count-bar"></div>
</div>
</div>
<!-- Skill Item End -->
</div>
<!-- Skills Progress Bar End -->
<!-- Skills Progress Bar Start -->
<div class="skills-progress-bar">
<!-- Skill Item Start -->
<div class="skillbar" data-percent="85%">
<div class="skill-data">
<div class="skill-title">Heart Disease Treatment</div>
<div class="skill-no">85%</div>
</div>
<div class="skill-progress">
<div class="count-bar"></div>
</div>
</div>
<!-- Skill Item End -->
</div>
<!-- Skills Progress Bar End -->
<!-- Skills Progress Bar Start -->
<div class="skills-progress-bar">
<!-- Skill Item Start -->
<div class="skillbar" data-percent="90%">
<div class="skill-data">
<div class="skill-title">Preventive Care</div>
<div class="skill-no">90%</div>
</div>
<div class="skill-progress">
<div class="count-bar"></div>
</div>
</div>
<!-- Skill Item End -->
</div>
<!-- Skills Progress Bar End -->
<!-- Skills Progress Bar Start -->
<div class="skills-progress-bar">
<!-- Skill Item Start -->
<div class="skillbar" data-percent="65%">
<div class="skill-data">
<div class="skill-title">Patient Care &amp; Communication</div>
<div class="skill-no">65%</div>
</div>
<div class="skill-progress">
<div class="count-bar"></div>
</div>
</div>
<!-- Skill Item End -->
</div>
<!-- Skills Progress Bar End -->
</div>
<!-- Member Skills List End -->
</div>
<!-- Team Member Expertise End -->
<!-- Contact Form Start -->
<div class="contact-form team-contact-form">
<!-- Section Title Start -->
<div class="section-title">
<h2 class="text-anime-style-3" data-cursor="-opaque">Contact to david wilson</h2>
</div>
<!-- Section Title End -->
<!-- Contact Form Start -->
<form action="#" class="wow fadeInUp" data-toggle="validator" data-wow-delay="0.2s" id="contactForm" method="POST">
<div class="row">
<div class="form-group col-md-6 mb-4">
<input class="form-control" id="fname" name="fname" placeholder="First Name*" required="" type="text"/>
<div class="help-block with-errors"></div>
</div>
<div class="form-group col-md-6 mb-4">
<input class="form-control" id="lname" name="lname" placeholder="Last Name*" required="" type="text"/>
<div class="help-block with-errors"></div>
</div>
<div class="form-group col-md-6 mb-4">
<input class="form-control" id="call" name="call" placeholder="Phone Number*" required="" type="text"/>
<div class="help-block with-errors"></div>
</div>
<div class="form-group col-md-6 mb-4">
<input class="form-control" id="mail" name="mail" placeholder="E-mail Address*" required="" type="email"/>
<div class="help-block with-errors"></div>
</div>
<div class="form-group col-md-12 mb-5">
<textarea class="form-control" id="msg" name="msg" placeholder="Write Message Here..." rows="5"></textarea>
<div class="help-block with-errors"></div>
</div>
<div class="col-md-12">
<button class="btn-default" type="submit">Submit Message</button>
<div class="h3 hidden" id="formsubmit"></div>
</div>
</div>
</form>
<!-- Contact Form End -->
</div>
<!-- Contact Form End -->
</div>
</div>
</div>
</div>
</div>
<!-- Page Team Single End -->
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
