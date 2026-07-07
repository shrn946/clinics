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
<h2 class="black">Service Details</h2>
<ul class="d-flex align-items-center gap-3">
<li>
<a href="/demo-9">Home</a>
</li>
<li>/</li>
<li>Service Details</li>
</ul>
</div>
</div>
<!-- Bread Ele -->
<img alt="img" class="bread-ele" src="/demo-9/assets/img/about/breadcrumnd-shap.png"/>
</section>
<!-- Banner Section Start -->
<!-- Service Section Start-->
<section class="service-details-section section-padding">
<div class="container">
<div class="row g-4">
<div class="col-lg-8">
<div class="service-details-wraping">
<div class="mb-4 wow fadeInUp" data-wow-delay="0.2s">
<h2 class="black mb-xxl-3 mb-2 wow fadeInUp">A healthy tomorrow starts today</h2>
<p class="pra">Medical services are an essential part of our lives, offering care and
                                treatment for various health
                                conditions. These
                                services encompass a wide range of specialties, including primary care, pediatrics,
                                cardiology</p>
</div>
<div class="thumb rounded-4 mb-4 w-100 wow fadeInUp" data-wow-delay="0.3s">
<img alt="img" class="rounded-4 w-100" src="/demo-9/assets/img/service/service-details-big.jpg"/>
</div>
<div class="mb-4 wow fadeInUp" data-wow-delay="0.4s">
<h4 class="black mb-3">Senior Care Coordination</h4>
<ul class="d-grid gap-xxl-3 gap-2">
<li class="d-flex align-items-center gap-2 pra fs-seven">
<i class="fa-solid fa-angles-right pra"></i>
                                    Dental operations involve various procedures performed by dentists
                                </li>
<li class="d-flex align-items-center gap-2 pra fs-seven">
<i class="fa-solid fa-angles-right pra"></i>
                                    Medical services are an essential part of our lives, offering care
                                </li>
<li class="d-flex align-items-center gap-2 pra fs-seven">
<i class="fa-solid fa-angles-right pra"></i>
                                    These services encompass a wide range of specialties, including primary care,
                                    pediatrics, cardiology
                                </li>
<li class="d-flex align-items-center gap-2 pra fs-seven">
<i class="fa-solid fa-angles-right pra"></i>
                                    Empowering Health, Empowering Lives Expert Care, Trusted Results
                                </li>
</ul>
</div>
<div class="mb-4 wow fadeInUp" data-wow-delay="0.5s">
<h4 class="black mb-3">Holistic Health Consultations</h4>
<p class="pra mb-xxl-3 mb-2">
                                Medical services are an essential part of our lives, offering care and treatment for
                                various health conditions. These
                                services encompass a wide range of specialties, including primary care, pediatrics,
                                cardiology
                            </p>
<p class="pra">
                                Medical services are an essential part of our lives, offering care and treatment for
                                various health conditions. These
                                are a services encompass a wide range of specialties, including primary care,
                                pediatrics, cardiology Medical services
                                are an essential part of our lives, offering care and treatment for various health
                                conditions These services
                            </p>
</div>
<div class="mb-4 wow fadeInUp" data-wow-delay="0.6s">
<h4 class="black mb-3">Health Matters We Care</h4>
<p class="pra">
                                Medical services are an essential part of our lives, offering care and treatment for
                                various health conditions. These
                                are a services encompass a wide range of specialties, including primary care,
                                pediatrics, cardiology Medical services
                                are an essential part of our lives, offering care and treatment for various health
                                conditions These services
                            </p>
</div>
<div class="row g-4 mb-4 wow fadeInUp" data-wow-delay="0.7s">
<div class="col-lg-6 col-md-6">
<div class="service-dorp-out">
<img alt="img" class="mb-xxl-3 mb-2" src="/demo-9/assets/img/icon/flask.png"/>
<h6 class="fw_500 mb-xxl-3 mb-2 black">
                                        Wellness Oasis CarePoint Health the Institute Thrive Wellness Hub
                                    </h6>
<p class="pra">
                                        Health care is a vital aspect maintaining overall well-being, encompassing a
                                        range
                                    </p>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="service-dorp-out">
<img alt="img" class="mb-xxl-3 mb-2" src="/demo-9/assets/img/icon/serum.png"/>
<h6 class="fw_500 mb-xxl-3 mb-2 black">
                                        Where health meets hope Your the a partner in wellness
                                    </h6>
<p class="pra">
                                        Health care is a vital aspect maintaining overall well-being, encompassing a
                                        range
                                    </p>
</div>
</div>
</div>
<div class="mb-0 wow fadeInUp" data-wow-delay="0.8s">
<h4 class="black mb-3">Partnering for Better Health</h4>
<p class="mb-xxl-3 mb-2 pra">
                                Medical services are an essential part of our lives, offering care and treatment for
                                various health conditions. These
                                are a services encompass a wide range of specialties, including primary care,
                                pediatrics, cardiology Medical services
                                are an essential part of our lives, offering care and treatment for various health
                                conditions These services
                            </p>
<p class="pra">
                                Medical services are an essential part of our lives, offering care and treatment for
                                various health conditions. These
                                services encompass a wide range of specialties, including primary care, pediatrics,
                                cardiology
                            </p>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="blog-details-right">
<div class="details-common category-service">
<h4 class="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right"> Services
                            </h4>
<ul class="cates">
<li>
<a class="d-flex align-items-center justify-content-between fs-five black" href="javascript:void(0)">
<span class="pra fs-seven">
<i class="fa-solid fa-angles-right p2-clr"></i> A Tradition of Healing
                                        </span>
<span class="just-serial">(02)</span>
</a>
</li>
<li>
<a class="d-flex align-items-center justify-content-between fs-five black" href="javascript:void(0)">
<span class="pra fs-seven">
<i class="fa-solid fa-angles-right p2-clr"></i> Harmony Holistic Health
                                        </span>
<span class="just-serial">(02)</span>
</a>
</li>
<li>
<a class="d-flex align-items-center justify-content-between fs-five black" href="javascript:void(0)">
<span class="pra fs-seven">
<i class="fa-solid fa-angles-right p2-clr"></i> Revive Medical Care
                                        </span>
<span class="just-serial">(02)</span>
</a>
</li>
<li>
<a class="d-flex align-items-center justify-content-between fs-five black" href="javascript:void(0)">
<span class="pra fs-seven">
<i class="fa-solid fa-angles-right p2-clr"></i> Unity Health Services
                                        </span>
<span class="just-serial">(02)</span>
</a>
</li>
</ul>
</div>
<div class="details-common quick-call text-center">
<h4 class="black">Need Help?Call Us</h4>
<a class="d-center call rounded-circle p2-bg" href="#"><i class="fa-solid fa-phone text-white"></i></a>
<p class="pra mb-xxl-4 mb-3">Health care is a vital aspect of maintaining overall
                                well-being, encompassing a range of services from preventive care</p>
<a class="numbs heading-font" href="#">(+888) 178 456 765</a>
</div>
<div class="details-common download-area">
<div class="thumb rounded-circle m-auto w-100">
<img alt="img" class="rounded-circle w-100" src="/demo-9/assets/img/service/service-detail-devid.jpg"/>
</div>
<div class="cont mt-xl-4 mt-3 text-center mb-3">
<h4 class="black mb-1">Dr.Chirs Bekham</h4>
<span class="pra">Cardiac Surgeon</span>
</div>
<div class="social-wrapper d-flex justify-content-center align-items-center">
<a class="black" href="#"><i class="fab fa-facebook-f"></i></a>
<a class="black" href="#"><i class="fab fa-instagram"></i></a>
<a class="black" href="#">
<svg fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5855_218)">
<path d="M8.30314 5.92804L13.4029 0H12.1944L7.7663 5.14724L4.22958 0H0.150391L5.4986 7.78354L0.150391 14H1.35894L6.03514 8.56434L9.77017 14H13.8494L8.30284 5.92804H8.30314ZM6.64787 7.85211L6.10598 7.07705L1.79439 0.909771H3.65065L7.13015 5.88696L7.67204 6.66202L12.195 13.1316H10.3387L6.64787 7.85241V7.85211Z" fill="#090A0B"></path>
</g>
<defs>
<clippath id="clip0_5855_218">
<rect fill="white" height="14" width="14"></rect>
</clippath>
</defs>
</svg>
</a>
<a class="black" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
</div>
</div>
<div class="details-common download-area">
<a class="download-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
<div class="d-flex align-items-center gap-xxl-3 gap-2 pra">
<i class="fa-solid fa-download"></i> (1.5Mb)
                                </div>
<span class="pra fs-seven">Company File</span>
</a>
<a class="download-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
<div class="d-flex align-items-center gap-xxl-3 gap-2 pra">
<i class="fa-solid fa-download"></i> (1.5Mb)
                                </div>
<span class="pra fs-seven">Company File</span>
</a>
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
