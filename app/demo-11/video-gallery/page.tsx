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
<h1 class="text-anime-style-3" data-cursor="-opaque">Our video</h1>
<nav class="wow fadeInUp">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/demo-11">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Video</li>
</ol>
</nav>
</div>
<!-- Page Header Box End -->
</div>
</div>
</div>
</div>
<!-- Page Header Section End -->
<!-- Page Video Gallery Start -->
<div class="page-video-gallery">
<div class="container">
<div class="row">
<div class="col-lg-4 col-md-6">
<!-- Video Gallery start -->
<div class="video-gallery-image wow fadeInUp">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<figure>
<img alt="" src="/demo-11/assets/images/gallery-1.jpg"/>
</figure>
</a>
</div>
<!-- Video Gallery end -->
</div>
<div class="col-lg-4 col-md-6">
<!-- Video Gallery start -->
<div class="video-gallery-image wow fadeInUp" data-wow-delay="0.2s">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<figure>
<img alt="" src="/demo-11/assets/images/gallery-2.jpg"/>
</figure>
</a>
</div>
<!-- Video Gallery end -->
</div>
<div class="col-lg-4 col-md-6">
<!-- Video Gallery start -->
<div class="video-gallery-image wow fadeInUp" data-wow-delay="0.4s">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<figure>
<img alt="" src="/demo-11/assets/images/gallery-3.jpg"/>
</figure>
</a>
</div>
<!-- Video Gallery end -->
</div>
<div class="col-lg-4 col-md-6">
<!-- Video Gallery start -->
<div class="video-gallery-image wow fadeInUp" data-wow-delay="0.6s">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<figure>
<img alt="" src="/demo-11/assets/images/gallery-4.jpg"/>
</figure>
</a>
</div>
<!-- Video Gallery end -->
</div>
<div class="col-lg-4 col-md-6">
<!-- Video Gallery start -->
<div class="video-gallery-image wow fadeInUp" data-wow-delay="0.8s">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<figure>
<img alt="" src="/demo-11/assets/images/gallery-5.jpg"/>
</figure>
</a>
</div>
<!-- Video Gallery end -->
</div>
<div class="col-lg-4 col-md-6">
<!-- Video Gallery start -->
<div class="video-gallery-image wow fadeInUp" data-wow-delay="1s">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<figure>
<img alt="" src="/demo-11/assets/images/gallery-6.jpg"/>
</figure>
</a>
</div>
<!-- Video Gallery end -->
</div>
<div class="col-lg-4 col-md-6">
<!-- Video Gallery start -->
<div class="video-gallery-image wow fadeInUp" data-wow-delay="1.2s">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<figure>
<img alt="" src="/demo-11/assets/images/gallery-7.jpg"/>
</figure>
</a>
</div>
<!-- Video Gallery end -->
</div>
<div class="col-lg-4 col-md-6">
<!-- Video Gallery start -->
<div class="video-gallery-image wow fadeInUp" data-wow-delay="1.4s">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<figure>
<img alt="" src="/demo-11/assets/images/gallery-8.jpg"/>
</figure>
</a>
</div>
<!-- Video Gallery end -->
</div>
<div class="col-lg-4 col-md-6">
<!-- Video Gallery start -->
<div class="video-gallery-image wow fadeInUp" data-wow-delay="1.6s">
<a class="popup-video" data-cursor-text="Play" href="https://www.youtube.com/watch?v=Y-x0efG1seA">
<figure>
<img alt="" src="/demo-11/assets/images/gallery-9.jpg"/>
</figure>
</a>
</div>
<!-- Video Gallery end -->
</div>
</div>
</div>
</div>
<!-- Page Video Gallery End -->
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
