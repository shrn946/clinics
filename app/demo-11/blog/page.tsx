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
<h1 class="text-anime-style-3" data-cursor="-opaque">Our blog</h1>
<nav class="wow fadeInUp">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/demo-11">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">blog</li>
</ol>
</nav>
</div>
<!-- Page Header Box End -->
</div>
</div>
</div>
</div>
<!-- Page Header Section End -->
<!-- Page Blog Start -->
<div class="page-blog">
<div class="container">
<div class="row">
<div class="col-xl-4 col-md-6">
<!-- Post Item Start -->
<div class="post-item wow fadeInUp">
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
<div class="post-item-body">
<div class="post-item-content">
<h2><a href="/demo-11/blog-details">10 Early Warning Signs You Should Never Ignore</a></h2>
</div>
<div class="post-item-btn">
<a class="readmore-btn" href="/demo-11/blog-details">Read More</a>
</div>
</div>
</div>
<!-- Post Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Post Item Start -->
<div class="post-item wow fadeInUp" data-wow-delay="0.2s">
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
<div class="post-item-body">
<div class="post-item-content">
<h2><a href="/demo-11/blog-details">Heart Health 101 Simple Habits for a Stronger Heart</a></h2>
</div>
<div class="post-item-btn">
<a class="readmore-btn" href="/demo-11/blog-details">Read More</a>
</div>
</div>
</div>
<!-- Post Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Post Item Start -->
<div class="post-item wow fadeInUp" data-wow-delay="0.4s">
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
<div class="post-item-body">
<div class="post-item-content">
<h2><a href="/demo-11/blog-details">Essential Vaccinations Every Child Should Receive</a></h2>
</div>
<div class="post-item-btn">
<a class="readmore-btn" href="/demo-11/blog-details">Read More</a>
</div>
</div>
</div>
<!-- Post Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Post Item Start -->
<div class="post-item wow fadeInUp" data-wow-delay="0.6s">
<div class="post-featured-image">
<a data-cursor-text="View" href="/demo-11/blog-details">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/post-4.jpg"/>
</figure>
</a>
<div class="post-item-tags">
<a href="/demo-11/blog-details">Health Tips</a>
</div>
</div>
<div class="post-item-body">
<div class="post-item-content">
<h2><a href="/demo-11/blog-details">Importance Of Regular Health Checkups</a></h2>
</div>
<div class="post-item-btn">
<a class="readmore-btn" href="/demo-11/blog-details">Read More</a>
</div>
</div>
</div>
<!-- Post Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Post Item Start -->
<div class="post-item wow fadeInUp" data-wow-delay="0.8s">
<div class="post-featured-image">
<a data-cursor-text="View" href="/demo-11/blog-details">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/post-5.jpg"/>
</figure>
</a>
<div class="post-item-tags">
<a href="/demo-11/blog-details">Medical News</a>
</div>
</div>
<div class="post-item-body">
<div class="post-item-content">
<h2><a href="/demo-11/blog-details">How To Boost Your Immune System Naturally</a></h2>
</div>
<div class="post-item-btn">
<a class="readmore-btn" href="/demo-11/blog-details">Read More</a>
</div>
</div>
</div>
<!-- Post Item End -->
</div>
<div class="col-xl-4 col-md-6">
<!-- Post Item Start -->
<div class="post-item wow fadeInUp" data-wow-delay="1s">
<div class="post-featured-image">
<a data-cursor-text="View" href="/demo-11/blog-details">
<figure class="image-anime">
<img alt="" src="/demo-11/assets/images/post-6.jpg"/>
</figure>
</a>
<div class="post-item-tags">
<a href="/demo-11/blog-details">Wellness Guide</a>
</div>
</div>
<div class="post-item-body">
<div class="post-item-content">
<h2><a href="/demo-11/blog-details">Signs You Should Visit A Doctor Immediately</a></h2>
</div>
<div class="post-item-btn">
<a class="readmore-btn" href="/demo-11/blog-details">Read More</a>
</div>
</div>
</div>
<!-- Post Item End -->
</div>
<div class="col-lg-12">
<!-- Page Pagination Start -->
<div class="page-pagination wow fadeInUp" data-wow-delay="1.2s">
<ul class="pagination">
<li><a href="#"><i class="fa-solid fa-angle-left"></i></a></li>
<li class="active"><a href="#">1</a></li>
<li><a href="#">2</a></li>
<li><a href="#">3</a></li>
<li><a href="#"><i class="fa-solid fa-angle-right"></i></a></li>
</ul>
</div>
<!-- Page Pagination End -->
</div>
</div>
</div>
</div>
<!-- Page Blog End -->
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
