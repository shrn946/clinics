"use client";

import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).initResoxAnimations) {
      (window as any).initResoxAnimations();
    }
  }, []);

  return (
    <div className="boxed_wrapper rtl">


        
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
        


        
        <header className="main-header style-one">
            
            <div className="header-top">
                <div className="auto-container">
                    <div className="top-inner clearfix">
                        <div className="text pull-left">
                            <p>Welcome to the professional physiotherapy clinic</p>
                        </div>
                        <ul className="info pull-right">
                            <li><i className="flaticon-pin"></i>88 broklyn silver street, USA</li>
                            <li><i className="flaticon-alarm-clock"></i>Mon to Fri 9:00am to 6:00pm</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="header-upper">
                <div className="auto-container">
                    <div className="upper-inner clearfix">
                        <div className="logo-box pull-left">
                            <figure className="logo"><a href="/demo-13/index2"><img src="/demo-13/assets/images/logo.png" alt="" /></a></figure>
                        </div>
                        <ul className="upper-info pull-right clearfix">
                            <li>
                                <i className="flaticon-telephone"></i>
                                <p>Call us anytime</p>
                                <h5><a href="tel:886660009999">88 666 000 9999</a></h5>
                            </li>
                            <li>
                                <i className="flaticon-email"></i>
                                <p>Write a mail</p>
                                <h5><a href="mailto:needhelp@info.com">needhelp@info.com</a></h5>
                            </li>
                            <li className="btn-box">
                                <a href="/demo-13/contact" className="theme-btn-one">Book Appointment</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="header-lower">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="menu-area clearfix">
                            
                            <div className="mobile-nav-toggler">
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light pull-left">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="current dropdown"><a href="/demo-13/index2">Home</a>
                                            <ul>
                                                <li><a href="/demo-13/index2">Home Page 01</a></li>
                                                <li><a href="/demo-13/index3">Home Page 02</a></li>
                                                <li><a href="/demo-13/index-onepage">OnePage Home</a></li>
                                                <li><a href="/demo-13/index-rtl">RTL Home</a></li>
                                                <li className="dropdown"><a href="/demo-13/index2">Header Style</a>
                                                    <ul>
                                                        <li><a href="/demo-13/index2">Header Style 01</a></li>
                                                        <li><a href="/demo-13/index3">Header Style 02</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li> 
                                        <li className="dropdown"><a href="/demo-13/index2">Pages</a>
                                            <ul>
                                                <li><a href="/demo-13/about">About Us</a></li>
                                                <li><a href="/demo-13/doctor">Our Therapists</a></li>
                                                <li><a href="/demo-13/doctor-details">Therapists Details</a></li>
                                                <li><a href="/demo-13/404">404</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="/demo-13/index2">Services</a>
                                            <ul>
                                                <li><a href="/demo-13/service">Our Services</a></li>
                                                <li><a href="/demo-13/service-details">Physiotherapy</a></li>
                                                <li><a href="/demo-13/service-details-2">Massage Therapy</a></li>
                                                <li><a href="/demo-13/service-details-3">Sport Injuries</a></li>
                                                <li><a href="/demo-13/service-details-4">Chiroptratic Therapy</a></li>
                                                <li><a href="/demo-13/service-details-5">Clinical Pilates</a></li>
                                                <li><a href="/demo-13/service-details-6">Work Injusries</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="/demo-13/index2">Elements</a>
                                            <div className="megamenu">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 column">
                                                        <ul>
                                                            <li><h4>Elements 1</h4></li>
                                                            <li><a href="/demo-13/about-element-1">About Block 01</a></li>
                                                            <li><a href="/demo-13/about-element-2">About Block 02</a></li>
                                                            <li><a href="/demo-13/about-element-3">About Block 03</a></li>
                                                            <li><a href="/demo-13/service-element-1">Service Block 01</a></li>
                                                            <li><a href="/demo-13/service-element-2">Service Block 02</a></li>
                                                            <li><a href="/demo-13/news-element-1">News Block 01</a></li>
                                                            <li><a href="/demo-13/news-element-2">News Block 02</a></li>
                                                            <li><a href="/demo-13/project-element-1">Project Block 01</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 column">
                                                        <ul>
                                                            <li><h4>Elements 2</h4></li>
                                                            <li><a href="/demo-13/project-element-2">Project Block 02</a></li>
                                                            <li><a href="/demo-13/team-element-1">Team Block 01</a></li>
                                                            <li><a href="/demo-13/team-element-2">Team Block 02</a></li>
                                                            <li><a href="/demo-13/feature-element-1">Feature Block 01</a></li>
                                                            <li><a href="/demo-13/feature-element-2">Feature Block 02</a></li>
                                                            <li><a href="/demo-13/testimonial-element">Testimonial Block</a></li>
                                                            <li><a href="/demo-13/clients-element">Clients Block</a></li>
                                                            <li><a href="/demo-13/faq-element">Faq Block</a></li>
                                                        </ul>
                                                    </div>                                    
                                                </div>                                        
                                            </div>
                                        </li>   
                                        <li className="dropdown"><a href="/demo-13/index2">Blog</a>
                                            <ul>
                                                <li><a href="/demo-13/blog">Blog Grid</a></li>
                                                <li><a href="/demo-13/blog2">Blog Standard</a></li>
                                                <li><a href="/demo-13/blog-details">Blog Details</a></li>
                                            </ul>
                                        </li>  
                                        <li><a href="/demo-13/contact">Contact</a></li>   
                                    </ul>
                                </div>
                            </nav>
                            <ul className="social-links pull-right clearfix">
                                <li><a href="/demo-13/index2"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="/demo-13/index2"><i className="fab fa-facebook-square"></i></a></li>
                                <li><a href="/demo-13/index2"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="/demo-13/index2"><i className="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="sticky-header">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="menu-area clearfix">
                            <nav className="main-menu pull-left">
                                
                            </nav>
                            <ul className="social-links pull-right clearfix">
                                <li><a href="/demo-13/index2"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="/demo-13/index2"><i className="fab fa-facebook-square"></i></a></li>
                                <li><a href="/demo-13/index2"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="/demo-13/index2"><i className="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
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


        
        <section className="banner-section centred">
            <div className="banner-carousel owl-theme owl-carousel owl-dots-none nav-style-one">
                <div className="slide-item">
                    <div className="image-layer" style={{ backgroundImage: "url(/demo-13/assets/images/banner/banner-1.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h6>Welcome to physiotherapy clinic</h6>
                            <h1>We’re Restoring Health Since Years.</h1>
                            <div className="btn-box">
                                <a href="/demo-13/index2" className="theme-btn-one">Discover More</a>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="slide-item">
                    <div className="image-layer" style={{ backgroundImage: "url(/demo-13/assets/images/banner/banner-2.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h6>Welcome to physiotherapy clinic</h6>
                            <h1>We’re Restoring Health Since Years.</h1>
                            <div className="btn-box">
                                <a href="/demo-13/index2" className="theme-btn-one">Discover More</a>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="slide-item">
                    <div className="image-layer" style={{ backgroundImage: "url(/demo-13/assets/images/banner/banner-3.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h6>Welcome to physiotherapy clinic</h6>
                            <h1>We’re Restoring Health Since Years.</h1>
                            <div className="btn-box">
                                <a href="/demo-13/index2" className="theme-btn-one">Discover More</a>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="feature-section">
            <div className="outer-container clearfix">
                <div className="feature-block-one">
                    <div className="inner-box">
                        <div className="icon-box">
                            <i className="flaticon-therapist"></i>
                        </div>
                        <div className="inner">
                            <h4>Experienced Therapists</h4>
                            <p>Lorem ipsum is fre dolor sit amet cectetuer adipiscing elit, sed diam nonummy nibh.</p>
                            <a href="/demo-13/index2"><i className="fas fa-chevron-circle-right"></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="feature-block-one">
                    <div className="inner-box">
                        <div className="icon-box">
                            <i className="flaticon-24-hours"></i>
                        </div>
                        <div className="inner">
                            <h4>24/7 Emergency Services</h4>
                            <p>Lorem ipsum is fre dolor sit amet cectetuer adipiscing elit, sed diam nonummy nibh.</p>
                            <a href="/demo-13/index2"><i className="fas fa-chevron-circle-right"></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="feature-block-one">
                    <div className="inner-box">
                        <div className="icon-box">
                            <i className="flaticon-consultation"></i>
                        </div>
                        <div className="inner">
                            <h4>Get Free Consultation</h4>
                            <p>Lorem ipsum is fre dolor sit amet cectetuer adipiscing elit, sed diam nonummy nibh.</p>
                            <a href="/demo-13/index2"><i className="fas fa-chevron-circle-right"></i>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="about-section sec-pad" style={{ backgroundImage: "url(/demo-13/assets/images/background/about-1.jpg)" }}>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-7 col-lg-12 col-md-12 content-column">
                        <div id="content_block_1">
                            <div className="content-box">
                                <div className="sec-title">
                                    <p>Clinic Introduction</p>
                                    <h2>Welcome to Physiotherapy & Chiroparctor Clinic</h2>
                                </div>
                                <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum lorem ipsum is simply free.</h3>
                                <ul className="list-item clearfix"> 
                                    <li>Refresing to get such a personal touch.</li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
                                    <li>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <div className="inner-box clearfix">
                                    <div className="inner">
                                        <div className="icon-box"><i className="flaticon-foot"></i></div>
                                        <h4>Get your lifestyle back</h4>
                                    </div>
                                    <div className="author">
                                        <figure className="author-thumb"><img src="/demo-13/assets/images/resource/author-1.png" alt="" /></figure>
                                        <figure className="signature"><img src="/demo-13/assets/images/resource/signature-1.png" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="service-section sec-pad border-bottom">
            <div className="auto-container">
                <div className="sec-title">
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
        


        
        <section className="clients-section">
            <div className="auto-container">
                <div className="clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
                    <figure className="clients-logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/clients/clients-logo-1.png" alt="" /></a></figure>
                    <figure className="clients-logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/clients/clients-logo-2.png" alt="" /></a></figure>
                    <figure className="clients-logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/clients/clients-logo-3.png" alt="" /></a></figure>
                    <figure className="clients-logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/clients/clients-logo-4.png" alt="" /></a></figure>
                    <figure className="clients-logo-box"><a href="/demo-13/index2"><img src="/demo-13/assets/images/clients/clients-logo-5.png" alt="" /></a></figure>
                </div>
            </div>
        </section>
        


        
        <section className="proudly-section bg-color-1">
            <div className="pattern-layer" style={{ backgroundImage: "url(/demo-13/assets/images/shape/pattern-1.png)" }}></div>
            <figure className="image-layer"><img src="/demo-13/assets/images/resource/proudly-1.jpg" alt="" /></figure>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-7 col-lg-12 col-md-12 offset-xl-5 content-column">
                        <div id="content_block_2">
                            <div className="content-box">
                                <div className="sec-title light">
                                    <p>Solutions to your pain</p>
                                    <h2>We Proudly Give Quality Treatments</h2>
                                </div>
                                <div className="text">
                                    <p>Donec pellentesque dapibus interdum. Mauris et tellus congue , rutrum neque a, varius felis. Phasellus nibh diam, tincidunt nec risus ut, auctor gravida metus that covers the front of the eye.</p>
                                </div>
                                <ul className="list-item clearfix">
                                    <li>24 -Hours Emergency Services</li>
                                    <li>Professional and Certified Therapists</li>
                                    <li>Get Free Consultation Anytime</li>
                                </ul>
                                <div className="counter-inner clearfix">
                                    <div className="counter-block">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="flaticon-doctor"></i></div>
                                            <div className="count-outer count-box">
                                                <span className="count-text" data-speed="1500" data-stop="78">0</span>
                                            </div>
                                            <p>Skiled Therapist</p>
                                        </div>
                                    </div>
                                    <div className="counter-block">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="flaticon-physical"></i></div>
                                            <div className="count-outer count-box">
                                                <span className="count-text" data-speed="1500" data-stop="880">0</span>
                                            </div>
                                            <p>Solved Cases</p>
                                        </div>
                                    </div>
                                    <div className="counter-block">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="flaticon-patient"></i></div>
                                            <div className="count-outer count-box">
                                                <span className="count-text" data-speed="1500" data-stop="640">0</span>
                                            </div>
                                            <p>Happy Patients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="feature-style-two">
            <div className="auto-container">
                <div className="inner-container clearfix">
                    <div className="feature-block-two">
                        <div className="inner-box bg-color-2">
                            <div className="content-inner">
                                <h2>2 Tips <br />How Can <br />Chiropractic Care Help You</h2>
                                <a href="/demo-13/index2" className="theme-btn-one">Book Appointment</a>
                            </div>
                        </div>
                    </div>
                    <div className="feature-block-two">
                        <div className="inner-box centred">
                            <div className="image-layer" style={{ backgroundImage: "url(/demo-13/assets/images/resource/feature-1.jpg)" }}></div>
                            <div className="content-box">
                                <div className="count-box"><span>01</span></div>
                                <h3>Body Relexation</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-block-two">
                        <div className="inner-box centred">
                            <div className="image-layer" style={{ backgroundImage: "url(/demo-13/assets/images/resource/feature-2.jpg)" }}></div>
                            <div className="content-box">
                                <div className="count-box"><span>02</span></div>
                                <h3>Body Treatment</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="testimonial-section sec-pad centred">
            <div className="auto-container">
                <div className="sec-title">
                    <p>Our Testimonials</p>
                    <h2>What Our Patients Say</h2>
                </div>
                <div className="inner-container">
                    <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <h4>David Coper</h4>
                                <p>I was very impresed by the power wash resox services lorem ipsum is simply free text available used by copy typing refreshing. Neque porro noting est qui.</p>
                                <figure className="image-box"><img src="/demo-13/assets/images/resource/testimonial-1.png" alt="" /></figure>
                                <figure className="quote-box"><img src="/demo-13/assets/images/icons/quote-1.png" alt="" /></figure>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <h4>Jessica Brown</h4>
                                <p>I was very impresed by the power wash resox services lorem ipsum is simply free text available used by copy typing refreshing. Neque porro noting est qui.</p>
                                <figure className="image-box"><img src="/demo-13/assets/images/resource/testimonial-2.png" alt="" /></figure>
                                <figure className="quote-box"><img src="/demo-13/assets/images/icons/quote-1.png" alt="" /></figure>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <h4>Kevin Martin</h4>
                                <p>I was very impresed by the power wash resox services lorem ipsum is simply free text available used by copy typing refreshing. Neque porro noting est qui.</p>
                                <figure className="image-box"><img src="/demo-13/assets/images/resource/testimonial-3.png" alt="" /></figure>
                                <figure className="quote-box"><img src="/demo-13/assets/images/icons/quote-1.png" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="startup-section" style={{ backgroundImage: "url(/demo-13/assets/images/background/startup-1.jpg)" }}>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div id="content_block_3">
                            <div className="content-box mr-40">
                                <div className="sec-title light">
                                    <p>We’re here to help you</p>
                                    <h2>Start Up Your Health Care With Us</h2>
                                </div>
                                <div className="single-box">
                                    <div className="inner">
                                        <div className="icon-box"><i className="fas fa-check"></i></div>
                                        <h4><a href="/demo-13/index2">No Charges for Consultation</a></h4>
                                        <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.</p>
                                    </div>
                                    <div className="inner">
                                        <div className="icon-box"><i className="fas fa-check"></i></div>
                                        <h4><a href="/demo-13/index2">Quality Equipment & Tools</a></h4>
                                        <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.</p>
                                    </div>
                                </div>
                                <div className="inner-box">
                                    <div className="icon-box"><i className="flaticon-physiotherapy"></i></div>
                                    <h3>Resox is trust by more <br />then <span>8800</span> healthy patients</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                        <div id="content_block_4">
                            <div className="form-inner ml-40">
                                <h6>Fill the form</h6>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipisicin elit ipmon sed tempor</p>
                                <form action="https://azim.commonsupport.com/Resox/index.html" method="post">
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email Address" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="Phone Number" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group message-btn">
                                        <button type="submit" className="theme-btn-one">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="news-section sec-pad">
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
        


        
        <section className="gallery-section">
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 gallery-block">
                        <div className="gallery-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/demo-13/assets/images/gallery/gallery-1.jpg" alt="" /></figure>
                                <div className="link"><a href="assets/images/gallery/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-plus-symbol"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 gallery-block">
                        <div className="gallery-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/demo-13/assets/images/gallery/gallery-2.jpg" alt="" /></figure>
                                <div className="link"><a href="assets/images/gallery/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-plus-symbol"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 gallery-block">
                        <div className="gallery-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/demo-13/assets/images/gallery/gallery-3.jpg" alt="" /></figure>
                                <div className="link"><a href="assets/images/gallery/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-plus-symbol"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 gallery-block">
                        <div className="gallery-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/demo-13/assets/images/gallery/gallery-4.jpg" alt="" /></figure>
                                <div className="link"><a href="assets/images/gallery/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-plus-symbol"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="cta-section bg-color-2">
            <div className="auto-container">
                <div className="inner-box clearfix">
                    <div className="text pull-left">
                        <h2>Choose the best physio therapy for youself</h2>
                    </div>
                    <div className="btn-box pull-right">
                        <a href="/demo-13/index2" className="theme-btn-one">Book Appointment</a>
                    </div>
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
                                <div className="footer-widget links-widget mr-70">
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
