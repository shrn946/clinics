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
<h1 class="text-anime-style-3" data-cursor="-opaque">Case study</h1>
<nav class="wow fadeInUp">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/demo-11">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Case Study</li>
</ol>
</nav>
</div>
<!-- Page Header Box End -->
</div>
</div>
</div>
</div>
<!-- Page Header Section End -->
<!-- Page Case Study Start -->
<div class="page-case-study">
<div class="container">
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
<div class="col-xl-4 col-md-6">
<!-- Case Study Item Start -->
<div class="case-study-item wow fadeInUp" data-wow-delay="0.6s">
<div class="case-study-item-image">
<a data-cursor-text="View" href="/demo-11/project-details">
<figure>
<img alt="" src="/demo-11/assets/images/case-study-image-4.jpg"/>
</figure>
</a>
</div>
<div class="case-study-item-content">
<h2><a href="/demo-11/project-details">Successful Heart Treatment</a></h2>
<p>Our cardiology team performed advanced diagnostic tests followed</p>
</div>
</div>
<!-- Case Study Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Case Study Item Start -->
<div class="case-study-item wow fadeInUp" data-wow-delay="0.8s">
<div class="case-study-item-image">
<a data-cursor-text="View" href="/demo-11/project-details">
<figure>
<img alt="" src="/demo-11/assets/images/case-study-image-5.jpg"/>
</figure>
</a>
</div>
<div class="case-study-item-content">
<h2><a href="/demo-11/project-details">Orthopedic Recovery</a></h2>
<p>A combination of surgical treatment and physiotherapy was provided.</p>
</div>
</div>
<!-- Case Study Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Case Study Item Start -->
<div class="case-study-item wow fadeInUp" data-wow-delay="1s">
<div class="case-study-item-image">
<a data-cursor-text="View" href="/demo-11/project-details">
<figure>
<img alt="" src="/demo-11/assets/images/case-study-image-6.jpg"/>
</figure>
</a>
</div>
<div class="case-study-item-content">
<h2><a href="/demo-11/project-details">Pediatric Care Success</a></h2>
<p>The child was frequently experiencing breathing problems.</p>
</div>
</div>
<!-- Case Study Item End -->
</div>
</div>
</div>
</div>
<!-- Page Case Study End -->
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
