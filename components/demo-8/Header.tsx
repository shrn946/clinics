
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header suppressHydrationWarning className="header-section header-1" id="sticky-header">
<div className="header-main">
{/* ===================== DESKTOP NAVBAR ===================== */}
<nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
<a className="navbar-brand" href="/demo-8">
<h2 style={{margin: 0, fontWeight: "800", fontSize: "32px", fontFamily: "var(--theme-font, sans-serif)", letterSpacing: "-1px"}}><span style={{color: "var(--theme-color-2)"}}>Lumina</span> <span style={{fontWeight: "300", color: "var(--theme-color-1)"}}>Beauty</span></h2>
</a>
<button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav">
{/* HOME */}
<li className="nav-item menu-thumb">
<a className="nav-link active" href="javascript:void(0)">
                                            Home <i className="fas fa-chevron-down"></i>
</a>
<ul className="sub-menu has-homemenu list-unstyled">
<li>
<div className="homemenu-items">
<div className="row row-cols-xl-5 row-cols-md-2 row-cols-2">
<div className="col homemenu">
<div className="homemenu-thumb">
<img alt="img" src="/demo-8/assets/img/header/home-1.jpg"/>
<div className="demo-button">
<a className="theme-btn" href="/demo-8">
                                                                        Demo Page <i className="fa-solid fa-arrow-up-right"></i>
</a>
</div>
</div>
<div className="homemenu-content text-center">
<a className="hometitle" href="/demo-8">
                                                                    Plastic Surgery 01
                                                                </a>
</div>
</div>
<div className="col homemenu">
<div className="homemenu-thumb">
<img alt="img" src="/demo-8/assets/img/header/home-2.jpg"/>
<div className="demo-button">
<a className="theme-btn" href="/demo-8/index-2">
                                                                        Demo Page <i className="fa-solid fa-arrow-up-right"></i>
</a>
</div>
</div>
<div className="homemenu-content text-center">
<a className="hometitle" href="/demo-8/index-2">
                                                                  Plastic Surgery 02
                                                                </a>
</div>
</div>
<div className="col homemenu">
<div className="homemenu-thumb">
<img alt="img" src="/demo-8/assets/img/header/home-3.jpg"/>
<div className="demo-button">
<a className="theme-btn" href="/demo-8/index-3">
                                                                        Demo Page <i className="fa-solid fa-arrow-up-right"></i>
</a>
</div>
</div>
<div className="homemenu-content text-center">
<a className="hometitle" href="/demo-8/index-3">
                                                                   Plastic Surgery 03
                                                                </a>
</div>
</div>
<div className="col homemenu">
<div className="homemenu-thumb">
<img alt="img" src="/demo-8/assets/img/header/home-5.jpg"/>
</div>
<div className="homemenu-content text-center">
<span className="hometitle">
                                                                   Coming Soon
                                                                </span>
</div>
</div>
<div className="col homemenu">
<div className="homemenu-thumb">
<img alt="img" src="/demo-8/assets/img/header/home-5.jpg"/>
</div>
<div className="homemenu-content text-center">
<span className="hometitle">
                                                                   Coming Soon
                                                                </span>
</div>
</div>
</div>
</div>
</li>
</ul>
</li>
{/* ABOUT */}
<li className="nav-item">
<a className="nav-link" href="/demo-8/about">About Us</a>
</li>
{/* SERVICES */}
<li className="nav-item">
<a className="nav-link" href="javascript:void(0)">
                                            Services <i className="fas fa-chevron-down"></i>
</a>
<ul className="sub-menu list-unstyled">
<li><a href="/demo-8/service">Service Page</a></li>
<li><a href="/demo-8/service-details">Service Details</a></li>
</ul>
</li>
{/* PAGES */}
<li className="has-dropdown nav-item">
<a className="nav-link" href="javascript:void(0)">
                                            Pages <i className="fas fa-chevron-down"></i>
</a>
<ul className="sub-menu list-unstyled">
<li className="has-dropdown">
<a href="javascript:void(0)">
                                                    Projects <i className="fas fa-angle-right"></i>
</a>
<ul className="sub-menu list-unstyled">
<li><a href="/demo-8/project">Projects page</a></li>
<li><a href="/demo-8/project-details">Project Details</a></li>
</ul>
</li>
<li className="has-dropdown">
<a href="javascript:void(0)">
                                                    Doctors <i className="fas fa-angle-right"></i>
</a>
<ul className="sub-menu list-unstyled">
<li><a href="/demo-8/team">Our Doctor</a></li>
<li><a href="/demo-8/team-details">Doctor Details</a></li>
</ul>
</li>

<li><a href="/demo-8/pricing">Pricing Page</a></li>
<li><a href="/demo-8/gallery">Gallery Page</a></li>
<li><a href="/demo-8/faq">Faq Page</a></li>
<li><a href="/demo-8/analysis">AI facial analysis</a></li>
<li><a href="/demo-8/login">Login Page</a></li>
<li><a href="/demo-8/appointment">Appointment Page</a></li>
<li><a href="/demo-8/register">Register Page</a></li>
<li><a href="/demo-8/404">404 Error</a></li>
</ul>
</li>
{/* BLOG */}

{/* CONTACT */}
<li className="nav-item">
<a className="nav-link" href="/demo-8/contact">Contact</a>
</li>
</ul>
<div className="menu-right-info">
<div className="number-info">
<div className="icon">
<img alt="img" src="/demo-8/assets/img/phone.png"/>
</div>
<a className="number" href="tel:+380961381876">+380961381876</a>
</div>
<a className="appo-btn" href="/demo-8/analysis">
<img alt="img" src="/demo-8/assets/img/ai.svg"/> Your AI Analysis
                                    </a>
<div className="sidebar__toggle offcanvas-btn">
<span></span>
<span></span>
<span></span>
</div>
</div>
</div>
</nav>
</div>
<div className="offcanvas-overlay position-fixed top-0 start-0 w-100 h-100"></div>
<div className="offcanvas-menu position-fixed">
<div className="header-top d-flex align-items-center justify-content-between gap-4">
<div className="logo">
<a href="/demo-8">
<h2 style={{margin: 0, fontWeight: "800", fontSize: "32px", fontFamily: "var(--theme-font, sans-serif)", letterSpacing: "-1px"}}><span style={{color: "#ffffff"}}>Lumina</span> <span style={{fontWeight: "300", color: "rgba(255,255,255,0.7)"}}>Beauty</span></h2>
</a>
</div>
<button className="offcasvas-close black-bg border-0 text-white d-flex align-items-center justify-content-center rounded-pill">
<i className="fa-regular fa-xmark"></i>
</button>
</div>
<span className="action-title">Happy You’re Here</span>
<a className="news-btn" href="/demo-8/appointment">
<span className="text">
<span className="text-default">book appointment  <i className="fa-regular fa-arrow-up-right"></i></span>
<span className="text-hover">book appointment  <i className="fa-regular fa-arrow-up-right"></i></span>
</span>
</a>
<div className="offcanvas_gallery d-none d-lg-block">
<img alt="gallery" className="gallery_img" src="/demo-8/assets/img/header/offcanvas1.jpg"/>
<img alt="gallery" className="gallery_img" src="/demo-8/assets/img/header/offcanvas2.jpg"/>
<img alt="gallery" className="gallery_img" src="/demo-8/assets/img/header/offcanvas3.jpg"/>
<img alt="gallery" className="gallery_img" src="/demo-8/assets/img/header/offcanvas4.jpg"/>
</div>
<div className="off-contact-info">
<span className="info-title">Contact Info</span>
<div className="contact-details">
<span className="sub-info">Phone</span>
<p>
<a href="tel:+18005550123">+1 (800) 555-0123</a>
</p>
</div>
<div className="contact-details">
<span className="sub-info">Email</span>
<p>
<a href="mailto:hello@medixen.com">hello@medixen.com</a>
</p>
</div>
<div className="contact-details">
<span className="sub-info">Location</span>
<p>
                            374 William S Canning Blvd USA
                        </p>
</div>
</div>
<div className="social-icon-list">
<span className="follow-title">
                            Follow us:
                        </span>
<div className="social-icon d-flex align-items-center">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-vimeo-v"></i></a>
<a href="#"><i className="fab fa-pinterest-p"></i></a>
</div>
</div>
</div>
{/* ===================== MOBILE MENU ===================== */}
<div className="mobile-menu-area d-block d-xl-none">
<div className="container">
<div className="mobile-topbar">
<div className="d-flex justify-content-between align-items-center">
<div className="logo">
<a href="/demo-8">
<h2 style={{margin: 0, fontWeight: "800", fontSize: "32px", fontFamily: "var(--theme-font, sans-serif)", letterSpacing: "-1px"}}><span style={{color: "var(--theme-color-2)"}}>Lumina</span> <span style={{fontWeight: "300", color: "var(--theme-color-1)"}}>Beauty</span></h2>
</a>
</div>
<div className="menu-search d-flex align-items-center gap-4">
<div className="bars">
<span></span>
<span></span>
<span></span>
</div>
</div>
</div>
</div>
</div>
<div className="mobile-menu-overlay"></div>
<div className="mobile-menu-main">
<div className="logo">
<a href="/demo-8">
<h2 style={{margin: 0, fontWeight: "800", fontSize: "32px", fontFamily: "var(--theme-font, sans-serif)", letterSpacing: "-1px"}}><span style={{color: "#ffffff"}}>Lumina</span> <span style={{fontWeight: "300", color: "rgba(255,255,255,0.7)"}}>Beauty</span></h2>
</a>
</div>
<div className="close-mobile-menu">
<i className="fas fa-times"></i>
</div>
<div className="menu-body">
<div className="menu-list">
<ul className="list-unstyled">
<li className="sub-mobile-menu">
<a href="javascript:void(0)">
                                            Home <i className="fas fa-chevron-down float-end"></i>
</a>
<ul className="list-unstyled">
<li><a href="/demo-8">Plastic Surgery 01</a></li>
<li><a href="/demo-8/index-2">Plastic Surgery 02</a></li>
<li><a href="/demo-8/index-3">Plastic Surgery 03</a></li>
</ul>
</li>
<li><a href="/demo-8/about">About Us</a></li>
<li className="sub-mobile-menu">
<a href="javascript:void(0)">
                                            Services <i className="fas fa-chevron-down float-end"></i>
</a>
<ul className="list-unstyled">
<li><a href="/demo-8/service">Service Page</a></li>
<li><a href="/demo-8/service-details">Service Details</a></li>
</ul>
</li>
<li className="sub-mobile-menu has-dropdown">
<a href="javascript:void(0)">
                                            Pages <i className="fas fa-chevron-down float-end"></i>
</a>
<ul className="list-unstyled">
<li className="sub-child-menu has-dropdown">
<a href="javascript:void(0)">
                                                    Projects <i className="fas fa-angle-right"></i>
</a>
<ul className="list-unstyled">
<li><a href="/demo-8/project">Projects page</a></li>
<li><a href="/demo-8/project-details">Project Details</a></li>
</ul>
</li>
<li className="sub-child-menu has-dropdown">
<a href="javascript:void(0)">
                                                    Doctors <i className="fas fa-angle-right"></i>
</a>
<ul className="list-unstyled">
<li><a href="/demo-8/team">Our Doctor</a></li>
<li><a href="/demo-8/team-details">Doctor Details</a></li>
</ul>
</li>

<li><a href="/demo-8/pricing">Pricing Page</a></li>
<li><a href="/demo-8/gallery">Gallery Page</a></li>
<li><a href="/demo-8/faq">Faq Page</a></li>
<li><a href="/demo-8/analysis">AI facial analysis</a></li>
<li><a href="/demo-8/login">Login Page</a></li>
<li><a href="/demo-8/appointment">Appointment Page</a></li>
<li><a href="/demo-8/register">Register Page</a></li>
<li><a href="/demo-8/404">404 Error</a></li>
</ul>
</li>

<li><a href="/demo-8/contact">Contact</a></li>
</ul>
</div>
</div>
</div>
</div>
{/* ===================== MOBILE MENU END ===================== */}
</header>
    </>
  );
}
