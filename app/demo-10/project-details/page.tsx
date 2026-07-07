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
<h2 class="black">Project Details</h2>
<ul class="d-flex align-items-center gap-3">
<li>
<a href="/demo-10">Home</a>
</li>
<li>/</li>
<li>Project Details</li>
</ul>
</div>
</div>
<!-- Bread Ele -->
<img alt="img" class="bread-ele" src="/demo-10/assets/img/about/breadcrumnd-shap.png"/>
</section>
<!-- Banner Section Start -->
<!-- Project Section Start -->
<section class="project-details-section space-bottom fix space-top">
<div class="container">
<div class="project-details-wrapping">
<h1 class="black mb-60 text-center wow fadeInUp" data-wow-delay="0.3s">Healing Lives One Patient at a
                    Time</h1>
<div class="project-cate-wrap rounded-4 white-bg wow fadeInUp mb-60" data-wow-delay="0.4s">
<div class="project-cate-item">
<h4 class="black mb-xxl-2 mb-1">Location</h4>
<p class="pra">Mirpur 10 Road 14 House 2 ,Dhaka</p>
</div>
<div class="project-cate-item">
<h4 class="black mb-xxl-2 mb-1">Clients</h4>
<p class="pra">Jenny Wilson</p>
</div>
<div class="project-cate-item">
<h4 class="black mb-xxl-2 mb-1">Website</h4>
<p class="pra">www.Medisan.com</p>
</div>
<div class="project-cate-item">
<h4 class="black mb-xxl-2 mb-1">Date</h4>
<p class="pra">16 August 2024</p>
</div>
</div>
<div class="thumb-area">
<img alt="img" class="w-100 rounded-4 mb-xxl-5 mb-xl-4 mb-3 wow fadeInUp" data-wow-delay="0.5s" src="/demo-10/assets/img/service/project-details1.jpg"/>
<p class="pra wow fadeInUp" data-wow-delay="0.6s">
                        Medical care encompasses a range of services aimed at promoting health, preventing disease, and
                        treating illnesses. From
                        routine check-ups to life-saving surgeries, medical care plays a crucial role in ensuring the
                        well-being of individuals
                        and communities Medical care encompasses a range of services aimed at promoting health,
                        preventing disease, and treating
                        illnesses. From routine check-ups to life-saving surgeries, medical care plays a crucial role in
                        ensuring the well-being
                        of individuals and communities
                    </p>
</div>
<div class="project-drop-inner">
<div class="row g-4">
<div class="col-lg-6">
<div class="project-drop-item">
<div class="thumb mb-xxl-4 mb-3 wow fadeInUp" data-wow-delay="0.3s">
<img alt="img" class="rounded-3 w-100" src="/demo-10/assets/img/service/project-details2.jpg"/>
</div>
<div class="mb-xxl-4 mb-3">
<h4 class="black mb-xxl-2 mb-1 wow fadeInUp" data-wow-delay="0.4s">Health Guardians
                                    </h4>
<p class="pra wow fadeInUp" data-wow-delay="0.5s">
                                        Medical care encompasses a range of services aimed at promoting health,
                                        preventing
                                        disease, and treating illnesses.
                                        From
                                        routine check-ups to life-saving surgeries
                                    </p>
</div>
<ul class="drop-project d-grid gap-xl-2 gap-1 wow fadeInUp" data-wow-delay="0.3s">
<li class="d-flex align-items-center gap-2 pra">
<i class="fa-solid fa-angles-right p2-clr"></i> Your Health, Our Priority
                                    </li>
<li class="d-flex align-items-center gap-2 pra">
<i class="fa-solid fa-angles-right p2-clr"></i> Compassionate Care, Exceptional
                                        Results
                                    </li>
<li class="d-flex align-items-center gap-2 pra">
<i class="fa-solid fa-angles-right p2-clr"></i> Healing Lives, One Patient at a
                                        Time
                                    </li>
<li class="d-flex align-items-center gap-2 pra">
<i class="fa-solid fa-angles-right p2-clr"></i> Empowering Health, Empowering
                                        Lives
                                    </li>
</ul>
</div>
</div>
<div class="col-lg-6">
<div class="project-drop-item">
<div class="thumb mb-xxl-4 mb-3 wow fadeInUp" data-wow-delay="0.3s">
<img alt="img" class="rounded-3 w-100" src="/demo-10/assets/img/service/project-details3.jpg"/>
</div>
<div class="mb-xxl-4 mb-3">
<h4 class="black mb-xxl-2 mb-1 wow fadeInUp" data-wow-delay="0.4s">Harmony Health
                                    </h4>
<p class="pra wow fadeInUp" data-wow-delay="0.5s">
                                        Medical care encompasses a range of services aimed at promoting health,
                                        preventing
                                        disease, and treating illnesses.
                                        From
                                        routine check-ups to life-saving surgeries
                                    </p>
</div>
<ul class="drop-project d-grid gap-xl-2 gap-1 wow fadeInUp" data-wow-delay="0.3s">
<li class="d-flex align-items-center gap-2 pra">
<i class="fa-solid fa-angles-right p2-clr"></i> Partnering for Better Health
                                    </li>
<li class="d-flex align-items-center gap-2 pra">
<i class="fa-solid fa-angles-right p2-clr"></i> Tomorrow's Health, Today's Care
                                    </li>
<li class="d-flex align-items-center gap-2 pra">
<i class="fa-solid fa-angles-right p2-clr"></i> Caring for You, Caring for
                                        Tomorrow
                                    </li>
<li class="d-flex align-items-center gap-2 pra">
<i class="fa-solid fa-angles-right p2-clr"></i> Expert Care, Trusted Results
                                    </li>
</ul>
</div>
</div>
</div>
</div>
<div class="mb-60">
<h4 class="black mb-xl-3 mb-2">Health Matters We Care</h4>
<p class="pra mb-xl-2 mb-1">
                        Medical services are an essential part of our lives, offering care and treatment for various
                        health conditions. These
                        are a services encompass a wide range of specialties, including primary care, pediatrics,
                        cardiology Medical services
                        are an essential part of our lives, offering care and treatment for various health conditions
                        These services
                    </p>
<p class="pra">
                        Medical care encompasses a range of services aimed at promoting health, preventing disease, and
                        treating illnesses. From
                        routine check-ups to life-saving surgeries, medical care plays a crucial role in ensuring the
                        well-being of individuals
                        and communities Medical care encompasses a range of services aimed at promoting health,
                        preventing disease, and treating
                        illnesses. From routine check-ups to life-saving surgeries, medical care plays a crucial role in
                        ensuring the well-being
                        of individuals and communities
                    </p>
</div>
<div class="project-prenext d-flex align-items-center justify-content-between">
<button class="d-flex align-items-center gap-xxl-3 gap-2 black fw_600 fs-six" type="button">
<i class="fa-solid fa-angle-left black"></i> Previous post
                    </button>
<button class="d-flex align-items-center gap-xxl-3 gap-2 black fw_600 fs-six" type="button">
                        Next post <i class="fa-solid fa-angle-right p2-clr"></i>
</button>
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
