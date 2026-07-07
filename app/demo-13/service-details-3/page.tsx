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
                                        <li className="dropdown"><a href="/demo-13/index2">Home</a>
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
                                        <li className="current dropdown"><a href="/demo-13/index2">Services</a>
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


        
        <section className="page-title centred" style={{ backgroundImage: "url(/demo-13/assets/images/background/page-title.jpg)" }}>
            <div className="auto-container">
                <div className="content-box">
                    <ul className="bread-crumb clearfix">
                        <li><a href="/demo-13/index2">Home</a></li>
                        <li>Service Details</li>
                    </ul>
                    <div className="title">
                        <h1>Sport Injuries</h1>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="service-details">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="service-sidebar">
                            <div className="sidebar-widget categories-widget">
                                <h4>All Categories</h4>
                                <ul className="list clearfix">
                                    <li><a href="/demo-13/service-details">Physiotherapy</a></li>
                                    <li><a href="/demo-13/service-details-2">Massage Therapy</a></li>
                                    <li><a href="/demo-13/service-details-3" className="active">Sport Injuries</a></li>
                                    <li><a href="/demo-13/service-details-4">Chiroptratic Therapy</a></li>
                                    <li><a href="/demo-13/service-details-5">Clinical Pilates</a></li>
                                    <li><a href="/demo-13/service-details-6">Work Injusries</a></li>
                                </ul>
                            </div>
                            <div className="sidebar-widget sidebar-support" style={{ backgroundImage: "url(/demo-13/assets/images/resource/support-1.jpg)" }}>
                                <div className="widget-content">
                                    <h4>Need Help?</h4>
                                    <p>Speak with a human to filling out a form? call corporate office and we will connect you with a team member who can help.</p>
                                    <h3><a href="tel:6660009999">666 000 9999</a></h3>
                                    <div className="btn-box"><a href="/demo-13/service-details" className="theme-btn-one">Book Appointment</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="service-details-content">
                            <div className="content-one">
                                <figure className="image-box">
                                    <img src="/demo-13/assets/images/service/service-details-3.jpg" alt="" />
                                    <i className="flaticon-massage"></i>
                                </figure>
                                <div className="text">
                                    <h2>Sport Injuries</h2>
                                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum take a look at our round. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                                </div>
                            </div>
                            <div className="two-column">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure className="image-box"><img src="/demo-13/assets/images/service/service-details-7.jpg" alt="" /></figure>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                        <div className="text">
                                            <h3>Be Strong and Healthy</h3>
                                            <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</h4>
                                            <ul className="list-item clearfix">
                                                <li>Refresing to get such a personal touch.</li>
                                                <li>Duis aute irure dolor in in voluptate.</li>
                                                <li>Velit esse cillum eu fugiat pariatur.</li>
                                                <li>Duis aute irure dolor in in voluptate.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-inner">
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
                            <div className="content-two">
                                <div className="text">
                                    <h2>Our Benefits</h2>
                                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="inner-box" style={{ backgroundImage: "url(/demo-13/assets/images/service/service-details-8.jpg)" }}>
                                    <ul className="list-item clearfix">
                                        <li>Refresing to get a personal touch.</li>
                                        <li>Velit esse cillum eu fugiat pariatur.</li>
                                        <li>Duis aute irure dolor in in voluptate.</li>
                                        <li>Duis aute irure dolor in in voluptate.</li>
                                    </ul>
                                </div>
                                <div className="text">
                                    <p><span>Lorem Ipsum is simply dummy text</span> of the new design printng and type setting Ipsum take a look at our round. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                        </div>
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
