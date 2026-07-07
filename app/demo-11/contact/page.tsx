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
<h1 class="text-anime-style-3" data-cursor="-opaque">Contact us</h1>
<nav class="wow fadeInUp">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/demo-11">home</a></li>
<li aria-current="page" class="breadcrumb-item active">Contact us</li>
</ol>
</nav>
</div>
<!-- Page Header Box End -->
</div>
</div>
</div>
</div>
<!-- Page Header Section End -->
<!-- Page Contact Us Start -->
<div class="page-contact-us">
<div class="container">
<div class="row section-row align-items-center">
<div class="col-lg-12">
<!-- Section Title Start -->
<div class="section-title section-title-center">
<span class="section-sub-title wow fadeInUp">Get In Touch</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Reach out for expert care</h2>
<p class="wow fadeInUp" data-wow-delay="0.2s">Reach out for expert care and let our dedicated medical professionals support you every step of the way we are here to provide timely guidance, personalized treatment.</p>
</div>
<!-- Section Title End -->
</div>
</div>
<div class="row">
<div class="col-lg-12">
<!-- Contact Info Item List Start -->
<div class="contact-info-item-list">
<!-- Contact Info Item Start -->
<div class="contact-info-item wow fadeInUp">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-headphone.svg"/>
</div>
<div class="contact-info-item-content">
<p>Emergency Call</p>
<h3><a href="tel:123456789">+(123) 456-789</a></h3>
</div>
</div>
<!-- Contact Info Item End -->
<!-- Contact Info Item Start -->
<div class="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-mail-white.svg"/>
</div>
<div class="contact-info-item-content">
<p>E-mail Us</p>
<h3><a href="mailto:info@domainname.com">info@domainname.com</a></h3>
</div>
</div>
<!-- Contact Info Item End -->
<!-- Contact Info Item Start -->
<div class="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
<div class="icon-box">
<img alt="" src="/demo-11/assets/images/icon-location-white.svg"/>
</div>
<div class="contact-info-item-content">
<p>Our Location</p>
<h3>123 Health Street, State, 001</h3>
</div>
</div>
<!-- Contact Info Item End -->
</div>
<!-- Contact Info Item List End -->
</div>
</div>
</div>
</div>
<!-- Page Contact Us Section End -->
<!-- Contact location Form Box Start -->
<div class="contact-location-form-box">
<div class="container">
<div class="row">
<div class="col-xl-6">
<!-- Contact location Info Box Start -->
<div class="contact-location-info-box">
<!-- Section Title Start -->
<div class="section-title">
<span class="section-sub-title wow fadeInUp">Contact Us</span>
<h2 class="text-anime-style-3" data-cursor="-opaque">Reach out to our healthcare experts today</h2>
</div>
<!-- Section Title End -->
<!-- Google Map Start -->
<div class="google-map-iframe wow fadeInUp" data-wow-delay="0.2s">
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"></iframe>
</div>
<!-- Google Map End -->
</div>
<!-- Contact location Info Box End -->
</div>
<div class="col-xl-6">
<!-- Contact Form Start -->
<div class="contact-form">
<!-- Section Title Start -->
<div class="section-title">
<p class="wow fadeInUp">Reach out to our healthcare experts today for trusted guidance and personalized care.</p>
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
<!-- Contact location Form Box End -->
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
