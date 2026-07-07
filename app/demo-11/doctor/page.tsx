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
<h1 class="text-anime-style-3" data-cursor="-opaque">Our team</h1>
<nav class="wow fadeInUp">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/demo-11">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Team</li>
</ol>
</nav>
</div>
<!-- Page Header Box End -->
</div>
</div>
</div>
</div>
<!-- Page Header Section End -->
<!-- Page Team Start -->
<div class="page-team">
<div class="container">
<div class="row">
<div class="col-xl-4 col-md-6">
<!-- Team Item Start -->
<div class="team-item wow fadeInUp">
<div class="team-item-image">
<a data-cursor-text="View" href="/demo-11/doctor-details">
<figure>
<img alt="" src="/demo-11/assets/images/team-1.jpg"/>
</figure>
</a>
</div>
<div class="team-item-body">
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
<div class="team-item-content">
<h2><a href="/demo-11/doctor-details">Dr. David Wilson</a></h2>
<p>Cardiologist</p>
</div>
</div>
</div>
<!-- Team Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Team Item Start -->
<div class="team-item wow fadeInUp" data-wow-delay="0.2s">
<div class="team-item-image">
<a data-cursor-text="View" href="/demo-11/doctor-details">
<figure>
<img alt="" src="/demo-11/assets/images/team-2.jpg"/>
</figure>
</a>
</div>
<div class="team-item-body">
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
<div class="team-item-content">
<h2><a href="/demo-11/doctor-details">Dr. Emma Roberts</a></h2>
<p>Pediatric Specialist</p>
</div>
</div>
</div>
<!-- Team Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Team Item Start -->
<div class="team-item wow fadeInUp" data-wow-delay="0.4s">
<div class="team-item-image">
<a data-cursor-text="View" href="/demo-11/doctor-details">
<figure>
<img alt="" src="/demo-11/assets/images/team-3.jpg"/>
</figure>
</a>
</div>
<div class="team-item-body">
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
<div class="team-item-content">
<h2><a href="/demo-11/doctor-details">Dr. Michael Johnson</a></h2>
<p>Orthopedic Surgeon</p>
</div>
</div>
</div>
<!-- Team Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Team Item Start -->
<div class="team-item wow fadeInUp" data-wow-delay="0.6s">
<div class="team-item-image">
<a data-cursor-text="View" href="/demo-11/doctor-details">
<figure>
<img alt="" src="/demo-11/assets/images/team-4.jpg"/>
</figure>
</a>
</div>
<div class="team-item-body">
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
<div class="team-item-content">
<h2><a href="/demo-11/doctor-details">Dr. Olivia Martinez</a></h2>
<p>Neurologist</p>
</div>
</div>
</div>
<!-- Team Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Team Item Start -->
<div class="team-item wow fadeInUp" data-wow-delay="0.8s">
<div class="team-item-image">
<a data-cursor-text="View" href="/demo-11/doctor-details">
<figure>
<img alt="" src="/demo-11/assets/images/team-5.jpg"/>
</figure>
</a>
</div>
<div class="team-item-body">
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
<div class="team-item-content">
<h2><a href="/demo-11/doctor-details">Dr. David Wilson</a></h2>
<p>Gynecologist</p>
</div>
</div>
</div>
<!-- Team Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Team Item Start -->
<div class="team-item wow fadeInUp" data-wow-delay="1s">
<div class="team-item-image">
<a data-cursor-text="View" href="/demo-11/doctor-details">
<figure>
<img alt="" src="/demo-11/assets/images/team-6.jpg"/>
</figure>
</a>
</div>
<div class="team-item-body">
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
<div class="team-item-content">
<h2><a href="/demo-11/doctor-details">Dr. William Harris</a></h2>
<p>ENT Specialist</p>
</div>
</div>
</div>
<!-- Team Item End -->
</div>
</div>
</div>
</div>
<!-- Page Team End -->
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
