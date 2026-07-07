'use client';

import React, {useEffect} from 'react';

export default function Page() {
  useEffect(() => {
    // Trigger scroll and load events so that scripts on page mount bind correctly
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

<!-- Start Cursor Pointer -->

<!-- End Cursor Pointer --><!-- header -->
<!-- Header Section Start -->
 <!-- Banner Section Start -->
<section class="breadcrumb-section position-relative fix">
<div class="container">
<div class="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
<h2 class="black">Blog</h2>
<ul class="d-flex align-items-center gap-3">
<li>
<a href="/demo-10">Home</a>
</li>
<li>/</li>
<li>Blog</li>
</ul>
</div>
</div>
<!-- Bread Ele -->
<img alt="img" class="bread-ele" src="/demo-10/assets/img/about/breadcrumnd-shap.png"/>
</section>
<!-- Banner Section Start -->
<!-- blog Section Start-->
<section class="blog-details-section section-padding">
<div class="container">
<div class="row g-4">
<div class="col-lg-8">
<div class="blog-details-left">
<div class="blog-items2 d-grid rounded-4 wow fadeInUp" data-wow-delay="0.4s">
<div class="thumb rounded-4 position-relative w-100">
<img alt="img" class="rounded-4 w-100" src="/demo-10/assets/img/blog/blog-details1.jpg"/>
<div class="d-flex gap-1 align-items-center blog-date">
<div class="icon d-center"><i class="fa-solid fa-calendar-days"></i></div>
<span class="cont">23 Dec 2023</span>
</div>
</div>
<div class="content">
<div class="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-solid fa-user p2-clr"></i>
                                        Admin
                                    </div>
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-regular fa-folder-open p2-clr"></i>
                                        Catagory
                                    </div>
</div>
<h4 class="mb-4"><a class="black" href="/demo-10/blog-details">Healing Lives, One Patient at
                                        a Time Empowering Health One Patient at a Time Empowering Health</a></h4>
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-10/blog-details">
                                    Read More
                                    <img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
<div class="blog-items2 d-grid rounded-4 wow fadeInUp" data-wow-delay="0.4s">
<div class="thumb rounded-4 position-relative w-100">
<img alt="img" class="rounded-4 w-100" src="/demo-10/assets/img/blog/blog-details2.jpg"/>
<div class="d-flex gap-1 align-items-center blog-date">
<div class="icon d-center"><i class="fa-solid fa-calendar-days"></i></div>
<span class="cont">23 Dec 2023</span>
</div>
</div>
<div class="content">
<div class="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-solid fa-user p2-clr"></i>
                                        Admin
                                    </div>
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-regular fa-folder-open p2-clr"></i>
                                        Catagory
                                    </div>
</div>
<h4 class="mb-4"><a class="black" href="/demo-10/blog-details">A healthy tomorrow starts
                                        today Where health meets hope Your partner in wellness</a></h4>
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-10/blog-details">
                                    Read More
                                    <img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
<div class="blog-items2 d-grid rounded-4 wow fadeInUp" data-wow-delay="0.4s">
<div class="thumb rounded-4 position-relative w-100">
<img alt="img" class="rounded-4 w-100" src="/demo-10/assets/img/blog/blog-details3.jpg"/>
<div class="d-flex gap-1 align-items-center blog-date">
<div class="icon d-center"><i class="fa-solid fa-calendar-days"></i></div>
<span class="cont">23 Dec 2023</span>
</div>
</div>
<div class="content">
<div class="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-solid fa-user p2-clr"></i>
                                        Admin
                                    </div>
<div class="d-flex align-items-center gap-1 fs-eight pra">
<i class="fa-regular fa-folder-open p2-clr"></i>
                                        Catagory
                                    </div>
</div>
<h4 class="mb-4"><a class="black" href="/demo-10/blog-details">Your health, our priority
                                        Healing with heart Empowering wellness Compassionate care, always</a></h4>
<a class="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100" href="/demo-10/blog-details">
                                    Read More
                                    <img alt="icon" src="/demo-10/assets/img/icon/arrow-right-black.png"/>
</a>
</div>
</div>
</div>
<ul class="blog-pagination">
<li><a href="javascript:void(0)">1</a></li>
<li><a href="javascript:void(0)">2</a></li>
<li><a href="javascript:void(0)">3</a></li>
<li><a href="javascript:void(0)">4</a></li>
<li><a href="javascript:void(0)"><i class="fa-solid fa-angles-right"></i></a></li>
</ul>
</div>
<div class="col-lg-4">
<div class="blog-details-right">
<div class="details-common search-box">
<h5 class="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right"><img alt="ele" src="/demo-10/assets/img/element/cate-badge.png"/> Search</h5>
<form action="#">
<input placeholder="Search..." type="text"/>
<button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
</form>
</div>
<div class="details-common category-blog">
<h5 class="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right"><img alt="ele" src="/demo-10/assets/img/element/cate-badge.png"/> Category</h5>
<ul class="cates">
<li>
<a class="d-flex align-items-center justify-content-between fs-five black" href="javascript:void(0)">
                                        Serenity Med
                                        <span class="seri d-center"><i class="fa-solid fa-plus"></i></span>
</a>
</li>
<li>
<a class="d-flex align-items-center justify-content-between fs-five black" href="javascript:void(0)">
                                        Serenity Health Center
                                        <span class="seri d-center"><i class="fa-solid fa-plus"></i></span>
</a>
</li>
<li>
<a class="d-flex align-items-center justify-content-between fs-five black" href="javascript:void(0)">
                                        Unity Health Services
                                        <span class="seri d-center"><i class="fa-solid fa-plus"></i></span>
</a>
</li>
<li>
<a class="d-flex align-items-center justify-content-between fs-five black" href="javascript:void(0)">
                                        Revive Medical Care
                                        <span class="seri d-center"><i class="fa-solid fa-plus"></i></span>
</a>
</li>
<li>
<a class="d-flex align-items-center justify-content-between fs-five black" href="javascript:void(0)">
                                        Harmony Holistic Health
                                        <span class="seri d-center"><i class="fa-solid fa-plus"></i></span>
</a>
</li>
</ul>
</div>
<div class="details-common search-box">
<h5 class="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right"><img alt="ele" src="/demo-10/assets/img/element/cate-badge.png"/> Recent post</h5>
<div class="blog-latest">
<div class="blog-latest-item wow fadeInUp" data-wow-delay="0.4s">
<div class="thumb">
<img alt="icon" src="/demo-10/assets/img/blog/latest1.png"/>
</div>
<div class="content">
<div class="d-flex black align-items-center gap-2 mb-1">
<i class="fa-regular fa-folder-open p2-clr"></i> Category
                                        </div>
<a class="black" href="/demo-10/blog-details">
                                            Building health communities A healthy tomorrow
                                        </a>
</div>
</div>
<div class="blog-latest-item wow fadeInUp" data-wow-delay="0.4s">
<div class="thumb">
<img alt="icon" src="/demo-10/assets/img/blog/lates2.png"/>
</div>
<div class="content">
<div class="d-flex black align-items-center gap-2 mb-1">
<i class="fa-regular fa-folder-open p2-clr"></i> Category
                                        </div>
<a class="black" href="/demo-10/blog-details">
                                            Quality health, close to home Caring for
                                        </a>
</div>
</div>
<div class="blog-latest-item wow fadeInUp" data-wow-delay="0.4s">
<div class="thumb">
<img alt="icon" src="/demo-10/assets/img/blog/lates3.png"/>
</div>
<div class="content">
<div class="d-flex black align-items-center gap-2 mb-1">
<i class="fa-regular fa-folder-open p2-clr"></i> Category
                                        </div>
<a class="black" href="/demo-10/blog-details">
                                            you every step of the way Renew Health Center
                                        </a>
</div>
</div>
</div>
</div>
<div class="details-common quick-call text-center">
<h4 class="black">Need Help?Call Us</h4>
<a class="d-center call rounded-circle p1-bg" href="#"><i class="fa-solid fa-phone"></i></a>
<p class="pra mb-xxl-4 mb-3">Health care is a vital aspect of maintaining overall
                                well-being, encompassing a range of services from preventive care</p>
<a class="numbs heading-font" href="#">(+888) 178 456 765</a>
</div>
<div class="details-common category-blog">
<h5 class="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right"><img alt="ele" src="/demo-10/assets/img/element/cate-badge.png"/> Tags</h5>
<ul class="tags">
<li><a href="javascript:void(0)">LifeHarbor</a></li>
<li><a href="javascript:void(0)">Thrive Clinic</a></li>
<li><a href="javascript:void(0)">Life</a></li>
<li><a href="javascript:void(0)">Health</a></li>
<li><a href="javascript:void(0)">CareUnity</a></li>
<li><a href="javascript:void(0)">Harmony</a></li>
<li><a href="javascript:void(0)">Care Plus</a></li>
<li><a href="javascript:void(0)">Well</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>
<!--<< Footer Section Start >>-->

<!-- Offcanvas Area Start -->

<!-- Search Area Start -->
<!--<< All JS Plugins >>-->

<!--<< Viewport Js >>-->

<!--<< Bootstrap Js >>-->

<!--<< Nice Select Js >>-->

<!--<< Waypoints Js >>-->

<!--<< Counterup Js >>-->

<!--<< Swiper Slider Js >>-->

<!--<< MeanMenu Js >>-->

<!--<< Magnific Popup Js >>-->

<!--<< Wow Animation Js >>-->

<!--<< Gsap Js >>-->

<!--<< Lenis Js >>-->

<!--<< ScrollSmoother Js >>-->

<!--<< ScrollTrigger Js >>-->

<!--<< Spalit Text Js >>-->

<!--<< Valina Tilt Js >>-->

<!--<< Main.js >>-->
`}} />
  );
}
