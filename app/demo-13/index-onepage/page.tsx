"use client";

import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).initResoxAnimations) {
      (window as any).initResoxAnimations();
    }
  }, []);

  return (
    <div className="boxed_wrapper">


        
        <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">Preloader Close</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="R" className="letters-loading">
                                R
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                e
                            </span>
                            <span data-text-preloader="s" className="letters-loading">
                                s
                            </span>
                            <span data-text-preloader="o" className="letters-loading">
                                o
                            </span>
                            <span data-text-preloader="x" className="letters-loading">
                                x
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        


        
        <header className="main-header style-two">
            
            <div className="header-top">
                <div className="auto-container">
                    <div className="top-inner clearfix">
                        <ul className="info pull-left">
                            <li><i className="flaticon-email"></i><a href="mailto:needhelp@info.com">needhelp@info.com</a></li>
                            <li><i className="flaticon-telephone"></i><a href="tel:886660009999">88 666 000 9999</a></li>
                            <li><i className="flaticon-pin"></i>88 broklyn silver street, USA</li>
                        </ul>
                        <ul className="social-links pull-right clearfix">
                            <li><a href="/demo-13/index3"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/demo-13/index3"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="/demo-13/index3"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="/demo-13/index3"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="header-lower">
                <div className="auto-container">
                    <div className="outer-box clearfix">
                        <div className="logo-box pull-left">
                            <figure className="logo"><a href="/demo-13/index2"><img src="/demo-13/assets/images/logo.png" alt="" /></a></figure>
                        </div>
                        <div className="menu-area pull-left clearfix">
                            <div className="search-box-outer">
                                <div className="dropdown">
                                    <button className="search-box-btn" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-search"></i></button>
                                    <div className="dropdown-menu search-panel" aria-labelledby="dropdownMenu3">
                                        <div className="form-container">
                                            <form method="post" action="https://azim.commonsupport.com/Resox/blog.html">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" defaultValue="" placeholder="Search...." required />
                                                    <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mobile-nav-toggler">
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light pull-left">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation scroll-nav clearfix">
                                        <li className="current dropdown"><a href="/demo-13/index2">Home</a>
                                            <ul>
                                                <li><a href="/demo-13/index2">Home Page 01</a></li>
                                                <li><a href="/demo-13/index3">Home Page 02</a></li>
                                                <li><a href="/demo-13/index-onepage">OnePage Home</a></li>
                                                <li><a href="/demo-13/index-rtl">RTL Home</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#service">Services</a></li>
                                        <li><a href="#testimonial">Testimonial</a></li>
                                        <li><a href="#team">Team</a></li>
                                        <li><a href="#news">News</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="btn-box pull-right"><a href="/demo-13/contact" className="theme-btn-one">Book Appointment</a></div>
                    </div>
                </div>
            </div>

            
            <div className="sticky-header">
                <div className="auto-container">
                    <div className="outer-box clearfix">
                        <div className="menu-area pull-left">
                            <nav className="main-menu">
                                
                            </nav>
                        </div>
                        <div className="btn-box pull-right"><a href="/demo-13/contact" className="theme-btn-one">Book Appointment</a></div>
                    </div>
                </div>
            </div>
        </header>
        

        
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><i className="fas fa-times"></i></div>
            
            <nav className="menu-box">
                <div className="nav-logo"><a href="/demo-13/index2"><img src="/demo-13/assets/images/logo-2.png" alt="" title="" /></a></div>
                <div className="menu-outer"></div>
                <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Chicago 12, Melborne City, USA</li>
                        <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                        <li><a href="mailto:info@example.com">info@example.com</a></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul className="clearfix">
                        <li><a href="/demo-13/index2"><span className="fab fa-twitter"></span></a></li>
                        <li><a href="/demo-13/index2"><span className="fab fa-facebook-square"></span></a></li>
                        <li><a href="/demo-13/index2"><span className="fab fa-pinterest-p"></span></a></li>
                        <li><a href="/demo-13/index2"><span className="fab fa-instagram"></span></a></li>
                        <li><a href="/demo-13/index2"><span className="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div>


        
        <section className="banner-section style-two">
            <div className="banner-carousel owl-theme owl-carousel owl-dots-none nav-style-one">
                <div className="slide-item">
                    <div className="image-layer" style={{ backgroundImage: "url(/demo-13/assets/images/banner/banner-4.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>We Only Give <br />Best <span>Treatment</span></h1>
                            <p>Physiotherapists help people affected by injury, illness or disability through movement and exercise.</p>
                            <div className="btn-box">
                                <a href="/demo-13/index2" className="theme-btn-one">Discover More</a>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="slide-item">
                    <div className="image-layer" style={{ backgroundImage: "url(/demo-13/assets/images/banner/banner-5.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>We Only Give <br />Best <span>Treatment</span></h1>
                            <p>Physiotherapists help people affected by injury, illness or disability through movement and exercise.</p>
                            <div className="btn-box">
                                <a href="/demo-13/index2" className="theme-btn-one">Discover More</a>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="slide-item">
                    <div className="image-layer" style={{ backgroundImage: "url(/demo-13/assets/images/banner/banner-6.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>We Only Give <br />Best <span>Treatment</span></h1>
                            <p>Physiotherapists help people affected by injury, illness or disability through movement and exercise.</p>
                            <div className="btn-box">
                                <a href="/demo-13/index2" className="theme-btn-one">Discover More</a>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="welcome-section bg-color-2">
            <div className="pattern-layer" style={{ backgroundImage: "url(/demo-13/assets/images/shape/pattern-2.png)" }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                        <div className="sec-title light mr-50">
                            <p>Welcome to clinic</p>
                            <h2>We're a Recognized & Quality Leader in Physiotherapy</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div id="content_block_3">
                            <div className="content-box">
                                <div className="single-box">
                                    <div className="inner">
                                        <div className="icon-box"><i className="fas fa-check"></i></div>
                                        <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.</p>
                                    </div>
                                    <div className="inner">
                                        <div className="icon-box"><i className="fas fa-check"></i></div>
                                        <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="certified-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-9 col-md-12 col-sm-12 content-column">
                            <div id="content_block_5">
                                <div className="content-box mr-30">
                                    <figure className="image-box"><img src="/demo-13/assets/images/resource/certified-1.jpg" alt="" /></figure>
                                    <div className="inner-box">
                                        <h3>We’re Certified Physiotherapy Clinic</h3>
                                        <p>Lorem ipsum dolor sit amet, notted elit sed do eius mod tempor incididunt ut labore et.</p>
                                        <div className="inner">
                                            <div className="video-inner" style={{ backgroundImage: "url(/demo-13/assets/images/resource/small-bg-1.jpg)" }}>
                                                <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image video-btn" data-caption=""><i className="fas fa-play"></i></a>
                                            </div>
                                            <div className="counter-block">
                                                <div className="count-outer count-box">
                                                    <span className="count-text" data-speed="1500" data-stop="34560">0</span>
                                                </div>
                                                <h5>Happy and healthy patients</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 inner-column">
                            <div id="content_block_6">
                                <div className="content-box centred bg-color-3">
                                    <div className="icon-layer"><i className="flaticon-alarm-clock-1"></i></div>
                                    <h4>Timings</h4>
                                    <ul className="shediul-list clearfix">
                                        <li>
                                            <span>Mon</span>
                                            <h6>9:00am - 6:00pm</h6>
                                        </li>
                                        <li>
                                            <span>Fri to Sat</span>
                                            <h6>10:00am - 4:00pm</h6>
                                        </li>
                                        <li>
                                            <span>Sun</span>
                                            <h6>Work off</h6>
                                        </li>
                                        <li>
                                            <a href="/demo-13/index2" className="theme-btn-one">Book Appointment</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="about-style-two" id="about">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div id="image_block_1">
                            <div className="image-box mr-30">
                                <figure className="image image-1"><img src="/demo-13/assets/images/resource/about-1.jpg" alt="" /></figure>
                                <figure className="image image-2"><img src="/demo-13/assets/images/resource/about-2.jpg" alt="" /></figure>
                                <figure className="icon-box rotate-me"><img src="/demo-13/assets/images/icons/icon-2.png" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div id="content_block_7">
                            <div className="content-box ml-40">
                                <div className="sec-title">
                                    <p>ABOUT CLINIC</p>
                                    <h2>We’re Offering Whole Range of Treatments For You</h2>
                                </div>
                                <div className="text">
                                    <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or words even slightly believable.</p>
                                </div>
                                <div className="inner-box">
                                    <div className="single-item">
                                        <h5>Magnis Dis Montes Nascet</h5>
                                        <p>Lorem ipsum is simply free dolor sit amet, consecte notted</p>
                                    </div>
                                    <div className="single-item">
                                        <h5> Libero id Faucibus Tincidunt Ege</h5>
                                        <p>Lorem ipsum is simply free dolor sit amet, consecte notted</p>
                                    </div>
                                </div>
                                <div className="lower-box clearfix">
                                    <div className="btn-box pull-left mr-10"><a href="/demo-13/about" className="theme-btn-one">Discover More</a></div>
                                    <div className="support-box pull-left">
                                        <i className="flaticon-telephone"></i>
                                        <p>Call Us Anytime</p>
                                        <h3><a href="tel:6660009999">666 000 9999</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="service-style-two sec-pad" id="service">
            <div className="pattern-layer" style={{ backgroundImage: "url(/demo-13/assets/images/shape/pattern-3.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title light">
                    <p>Our Services</p>
                    <h2>What We’re Offering</h2>
                </div>
                <div className="four-item-carousel owl-carousel owl-theme owl-dots-none">
                    <div className="service-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="/demo-13/service-details"><img src="/demo-13/assets/images/service/service-1.jpg" alt="" /></a></figure>
                                <div className="icon-box"><i className="flaticon-physical"></i></div>
                            </div>
                            <div className="lower-content">
                                <h4><a href="/demo-13/service-details">Physiotherapy</a></h4>
                                <p>Lorem is free text no used by other agencies...</p>
                                <div className="link"><a href="/demo-13/service-details"><i className="fas fa-chevron-circle-right"></i>Read More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="/demo-13/service-details-2"><img src="/demo-13/assets/images/service/service-2.jpg" alt="" /></a></figure>
                                <div className="icon-box"><i className="flaticon-massage"></i></div>
                            </div>
                            <div className="lower-content">
                                <h4><a href="/demo-13/service-details-2">Massage Therapy</a></h4>
                                <p>Lorem is free text no used by other agencies...</p>
                                <div className="link"><a href="/demo-13/service-details-2"><i className="fas fa-chevron-circle-right"></i>Read More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="/demo-13/service-details-3"><img src="/demo-13/assets/images/service/service-3.jpg" alt="" /></a></figure>
                                <div className="icon-box"><i className="flaticon-broken-bone"></i></div>
                            </div>
                            <div className="lower-content">
                                <h4><a href="/demo-13/service-details-3">Sport Injuries</a></h4>
                                <p>Lorem is free text no used by other agencies...</p>
                                <div className="link"><a href="/demo-13/service-details-3"><i className="fas fa-chevron-circle-right"></i>Read More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><a href="/demo-13/service-details-4"><img src="/demo-13/assets/images/service/service-4.jpg" alt="" /></a></figure>
                                <div className="icon-box"><i className="flaticon-chiropractic"></i></div>
                            </div>
                            <div className="lower-content">
                                <h4><a href="/demo-13/service-details-4">Chiropratic Therapy</a></h4>
                                <p>Lorem is free text no used by other agencies...</p>
                                <div className="link"><a href="/demo-13/service-details-4"><i className="fas fa-chevron-circle-right"></i>Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="weare-section">
            <div className="auto-container">
                <div className="sec-title centred">
                    <p>Who We Are</p>
                    <h2>Learn About Clinic</h2>
                </div>
                <div className="inner-content">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/demo-13/assets/images/resource/weare-1.jpg" alt="" /></figure>
                                    <h5>Our Mission</h5>
                                    <p>Lorem is free text no used by other agencies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/demo-13/assets/images/resource/weare-2.jpg" alt="" /></figure>
                                    <h5>Our Vision</h5>
                                    <p>Lorem is free text no used by other agencies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/demo-13/assets/images/resource/weare-3.jpg" alt="" /></figure>
                                    <h5>Our Values</h5>
                                    <p>Lorem is free text no used by other agencies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="testimonial-style-two" id="testimonial" style={{ backgroundImage: "url(/demo-13/assets/images/background/testimonial-1.jpg)" }}>
            <div className="auto-container">
                <div className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                    <div className="testimonial-content">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/demo-13/assets/images/resource/testimonial-1.jpg" alt="" /></figure>
                            <div className="text">
                                <h2>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</h2>
                                <h3>- Christine Eve</h3>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-content">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/demo-13/assets/images/resource/testimonial-1.jpg" alt="" /></figure>
                            <div className="text">
                                <h2>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</h2>
                                <h3>- Christine Eve</h3>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-content">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/demo-13/assets/images/resource/testimonial-1.jpg" alt="" /></figure>
                            <div className="text">
                                <h2>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</h2>
                                <h3>- Christine Eve</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="faq-section sec-pad bg-color-4">
            <figure className="image-layer"><img src="/demo-13/assets/images/resource/faq-1.jpg" alt="" /></figure>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 content-column">
                        <div id="content_block_8">
                            <div className="content-box">
                                <div className="sec-title">
                                    <p>Your Quesiton</p>
                                    <h2>Have any Quesiton</h2>
                                </div>
                                <ul className="accordion-box">
                                    <li className="accordion block active-block">
                                        <div className="acc-btn active">
                                            <div className="icon-outer"><i className="far fa-angle-up"></i></div>
                                            <h5>We repair your past hurts and issues</h5>
                                        </div>
                                        <div className="acc-content current">
                                            <div className="text">
                                                <p>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <div className="icon-outer"><i className="far fa-angle-up"></i></div>
                                            <h5>How to recover your body injury by exercise</h5>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">
                                                <p>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                         <div className="acc-btn">
                                            <div className="icon-outer"><i className="far fa-angle-up"></i></div>
                                            <h5>How to protect your back from cold</h5>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">
                                                <p>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="team-section" id="team">
            <div className="auto-container">
                <div className="title-inner clearfix">
                    <div className="sec-title pull-left">
                        <p>Professional team</p>
                        <h2>Meet Our Therapists</h2>
                    </div>
                    <div className="text pull-right">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    </div>
                </div>
                <div className="team-inner clearfix">
                    <div className="team-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="/demo-13/assets/images/team/team-1.jpg" alt="" />
                                <ul className="social-links clearfix">
                                    <li><a href="/demo-13/index3"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-facebook-square"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </figure>
                            <div className="lower-content">
                                <h5><a href="/demo-13/doctor-details">Jessica Brown</a></h5>
                                <span className="designation">Therapist</span>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="/demo-13/assets/images/team/team-2.jpg" alt="" />
                                <ul className="social-links clearfix">
                                    <li><a href="/demo-13/index3"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-facebook-square"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </figure>
                            <div className="lower-content">
                                <h5><a href="/demo-13/doctor-details">David Coper</a></h5>
                                <span className="designation">Therapist</span>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="/demo-13/assets/images/team/team-3.jpg" alt="" />
                                <ul className="social-links clearfix">
                                    <li><a href="/demo-13/index3"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-facebook-square"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </figure>
                            <div className="lower-content">
                                <h5><a href="/demo-13/doctor-details">Sarah Rose</a></h5>
                                <span className="designation">Therapist</span>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="/demo-13/assets/images/team/team-4.jpg" alt="" />
                                <ul className="social-links clearfix">
                                    <li><a href="/demo-13/index3"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-facebook-square"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="/demo-13/index3"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </figure>
                            <div className="lower-content">
                                <h5><a href="/demo-13/doctor-details">Sarah Rose</a></h5>
                                <span className="designation">Therapist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="clients-section alternat-2 bg-color-2">
            <div className="auto-container">
                <div className="clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
                    <figure className="clients-logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/clients/clients-logo-6.png" alt="" /></a></figure>
                    <figure className="clients-logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/clients/clients-logo-7.png" alt="" /></a></figure>
                    <figure className="clients-logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/clients/clients-logo-8.png" alt="" /></a></figure>
                    <figure className="clients-logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/clients/clients-logo-9.png" alt="" /></a></figure>
                    <figure className="clients-logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/clients/clients-logo-10.png" alt="" /></a></figure>
                </div>
            </div>
        </section>
        


        
        <section className="news-section sec-pad" id="news">
            <div className="auto-container">
                <div className="sec-title centred">
                    <p>from the blog</p>
                    <h2>News & Articles</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href="/demo-13/blog-details"><img src="/demo-13/assets/images/news/news-1.jpg" alt="" /></a>
                                    <span className="post-date">20 June, 2020</span>
                                </figure>
                                <div className="lower-content">
                                    <ul className="post-info clearfix">
                                        <li><i className="far fa-user-circle"></i><a href="/demo-13/index2">Admin</a></li>
                                        <li><i className="far fa-comments"></i><a href="/demo-13/index2">7 Comments</a></li>
                                    </ul>
                                    <h3><a href="/demo-13/blog-details">How you can choose the best physiotherapy clinic</a></h3>
                                    <p>Lorem ipsum is simply free text used by new pesnhl note this copytyping refreshing.</p>
                                    <div className="link"><a href="/demo-13/blog-details"><i className="fas fa-chevron-circle-right"></i>Read More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href="/demo-13/blog-details"><img src="/demo-13/assets/images/news/news-2.jpg" alt="" /></a>
                                    <span className="post-date">19 June, 2020</span>
                                </figure>
                                <div className="lower-content">
                                    <ul className="post-info clearfix">
                                        <li><i className="far fa-user-circle"></i><a href="/demo-13/index2">Admin</a></li>
                                        <li><i className="far fa-comments"></i><a href="/demo-13/index2">5 Comments</a></li>
                                    </ul>
                                    <h3><a href="/demo-13/blog-details">Eat the right diet for your body to stay healthy</a></h3>
                                    <p>Lorem ipsum is simply free text used by new pesnhl note this copytyping refreshing.</p>
                                    <div className="link"><a href="/demo-13/blog-details"><i className="fas fa-chevron-circle-right"></i>Read More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href="/demo-13/blog-details"><img src="/demo-13/assets/images/news/news-3.jpg" alt="" /></a>
                                    <span className="post-date">18 June, 2020</span>
                                </figure>
                                <div className="lower-content">
                                    <ul className="post-info clearfix">
                                        <li><i className="far fa-user-circle"></i><a href="/demo-13/index2">Admin</a></li>
                                        <li><i className="far fa-comments"></i><a href="/demo-13/index2">4 Comments</a></li>
                                    </ul>
                                    <h3><a href="/demo-13/blog-details">How can chiropractic care help your health system</a></h3>
                                    <p>Lorem ipsum is simply free text used by new pesnhl note this copytyping refreshing.</p>
                                    <div className="link"><a href="/demo-13/blog-details"><i className="fas fa-chevron-circle-right"></i>Read More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="cta-style-two">
            <div className="auto-container">
                <div className="inner-container bg-color-2">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 text-column">
                            <div className="text">
                                <i className="flaticon-email"></i>
                                <h3>Subscribe our newsletter</h3>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                            <form action="https://azim.commonsupport.com/Resox/contact.html" method="post" className="subscribe-form">
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Enter email address" required />
                                    <button type="submit" className="theme-btn-one">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="google-map-section">
            <div className="map-inner">
                <div 
                    className="google-map" 
                    id="contact-google-map" 
                    data-map-lat="40.712776" 
                    data-map-lng="-74.005974" 
                    data-icon-path="assets/images/icons/map-marker.png"  
                    data-map-title="Brooklyn, New York, United Kingdom" 
                    data-map-zoom="12" 
                    data-markers='{
                        "marker-1": [40.712776, -74.005974, "<h4>Branch Office</h4><p>77/99 New York</p>","assets/images/icons/map-marker.png"]
                    }'>

                </div>
            </div>
        </section>
        


        
        <footer className="main-footer">
            <div className="footer-top" style={{ backgroundImage: "url(/demo-13/assets/images/background/footer-1.jpg)" }}>
                <figure className="icon-layer"><img src="/demo-13/assets/images/icons/icon-1.png" alt="" /></figure>
                <div className="auto-container">
                    <div className="widget-section">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/footer-logo.png" alt="" /></a></figure>
                                    <div className="text">
                                        <p>There are many variatio of lorem ipsum available.</p>
                                    </div>
                                    <ul className="info clearfix">
                                        <li><i className="flaticon-email"></i><a href="mailto:needhelp@info.com">needhelp@info.com</a></li>
                                        <li><i className="flaticon-pin"></i>88 broklyn silver street, USA</li>
                                    </ul>
                                    <div className="support-box">
                                        <i className="flaticon-telephone"></i>
                                        <p>Call us anytime</p>
                                        <h5><a href="tel:6660009999">666 000 9999</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml-70">
                                    <div className="widget-title">
                                        <h4>Links</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><a href="/demo-13/index2">About</a></li>
                                            <li><a href="/demo-13/index2">Make Appointment</a></li>
                                            <li><a href="/demo-13/index2">Our Services</a></li>
                                            <li><a href="/demo-13/index2">Team Members</a></li>
                                            <li><a href="/demo-13/index2">Team Members</a></li>
                                            <li><a href="/demo-13/index2">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>Services</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><a href="/demo-13/index2">Massage Therapy</a></li>
                                            <li><a href="/demo-13/index2">Physiotherapy</a></li>
                                            <li><a href="/demo-13/index2">Chiroptratic Therapy</a></li>
                                            <li><a href="/demo-13/index2">Sport Injuries</a></li>
                                            <li><a href="/demo-13/index2">Clinical Pilates</a></li>
                                            <li><a href="/demo-13/index2">Work Injuries</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget appointment-widget centred">
                                    <div className="icon-layer"><i className="flaticon-alarm-clock-1"></i></div>
                                    <div className="widget-title">
                                        <h4>Timings</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="shediul-list clearfix">
                                            <li>
                                                <span>Mon</span>
                                                <h6>9:00am - 6:00pm</h6>
                                            </li>
                                            <li>
                                                <span>Fri to Sat</span>
                                                <h6>10:00am - 4:00pm</h6>
                                            </li>
                                            <li>
                                                <span>Sun</span>
                                                <h6>Work off</h6>
                                            </li>
                                            <li>
                                                <a href="/demo-13/index2" className="theme-btn-one">Book Appointment</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-botton">
                <div className="auto-container clearfix">
                    <div className="copyright pull-left">
                        <p>&copy; Copyright 2020 by <a href="/demo-13/index2">Resox</a></p>
                    </div>
                    <ul className="social-links pull-right clearfix">
                        <li><a href="/demo-13/index2"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="/demo-13/index2"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="/demo-13/index2"><i className="fab fa-pinterest-p"></i></a></li>
                        <li><a href="/demo-13/index2"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
        


        
        <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-arrow-up"></span>
        </button>
    </div>
  );
}
