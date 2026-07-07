"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Mobile accordion state
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setSidebarOpen(false);
    setSearchOpen(false);
    setActiveMobileSubmenu(null);
  }, [pathname]);

  const toggleMobileSubmenu = (menu: string) => {
    if (activeMobileSubmenu === menu) {
      setActiveMobileSubmenu(null);
    } else {
      setActiveMobileSubmenu(menu);
    }
  };

  // Determine header classes based on current route
  let headerClass = "header-1 header-style2";
  if (pathname === '/demo-9/index2' || pathname === '/demo-9/index2/') {
    headerClass = "header-1 bg-transparent sticky-header1";
  } else if (pathname === '/demo-9/index3' || pathname === '/demo-9/index3/') {
    headerClass = "header-3 bg-transparent sticky-header1";
  }

  return (
    <>
      {/* Header Section Start */}
      <header id="header-sticky" className={`${headerClass} ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main style-2">
              <div className="header-left">
                <div className="logo">
                  <Link href="/demo-9" className="header-logo">
                    <img src="/demo-9/assets/img/logo/logo.png" alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <Link href="/demo-9">
                            Home
                            <i className="fas fa-angle-down"></i>
                          </Link>
                          <ul className="submenu has-homemenu">
                            <li>
                              <div className="homemenu-items">
                                <div className="homemenu">
                                  <Link href="/demo-9" className="homemenu-thumb">
                                    <img src="/demo-9/assets/img/header/home-1.jpg" alt="img" />
                                    <span className="demo-button">
                                      <span className="theme-btn p1-bg box-style first-box">
                                        <span className="black">Home 01</span>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                                <div className="homemenu">
                                  <Link href="/demo-9/index2" className="homemenu-thumb mb-15">
                                    <img src="/demo-9/assets/img/header/home-2.jpg" alt="img" />
                                    <span className="demo-button">
                                      <span className="theme-btn p1-bg box-style first-box">
                                        <span className="black">Home 02</span>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                                <div className="homemenu">
                                  <Link href="/demo-9/index3" className="homemenu-thumb mb-15">
                                    <img src="/demo-9/assets/img/header/home-3.jpg" alt="img" />
                                    <span className="demo-button">
                                      <span className="theme-btn p1-bg box-style first-box">
                                        <span className="black">Home 03</span>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#!">
                            Service
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><Link href="/demo-9/service">Service</Link></li>
                            <li><Link href="/demo-9/service-details">Service Details</Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#!">
                            Projects
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><Link href="/demo-9/project">Project</Link></li>
                            <li><Link href="/demo-9/project-details">Project Details</Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#!">
                            Blog
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><Link href="/demo-9/blog">Blog</Link></li>
                            <li><Link href="/demo-9/blog-details">Blog Details</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="#!">
                            Pages
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><Link href="/demo-9/about">About Us</Link></li>
                            <li><Link href="/demo-9/doctor">Doctor</Link></li>
                            <li><Link href="/demo-9/doctor-details">Doctor Details</Link></li>
                            <li><Link href="/demo-9/pricing">Pricing</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/demo-9/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                
                <a 
                  href="#0" 
                  className="search-trigger search-icon d-none d-xl-block"
                  onClick={(e) => { e.preventDefault(); setSearchOpen(true); }}
                >
                  <i className="fal fa-search"></i>
                </a>
                
                <div 
                  className="header__hamburger d-xl-none my-auto"
                  onClick={() => setSidebarOpen(true)}
                >
                  <div className="sidebar__toggle">
                    <img src="/demo-9/assets/img/icon/menu.png" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Area Start */}
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebarOpen ? 'info-open' : ''}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/demo-9">
                    <img src="/demo-9/assets/img/logo/logo.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setSidebarOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              
              {/* Mobile Navigation Menu */}
              <div className="mobile-menu-container d-xl-none mb-4">
                <div className="mean-bar">
                  <nav className="mean-nav">
                    <ul className="list-unstyled">
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <Link href="/demo-9">Home</Link>
                          <a className="mean-expand" href="#!" onClick={(e) => { e.preventDefault(); toggleMobileSubmenu('home'); }}>
                            <i className={`far ${activeMobileSubmenu === 'home' ? 'fa-minus' : 'fa-plus'}`}></i>
                          </a>
                        </div>
                        <ul className="list-unstyled ps-3" style={{ display: activeMobileSubmenu === 'home' ? 'block' : 'none' }}>
                          <li><Link href="/demo-9">Home 01</Link></li>
                          <li><Link href="/demo-9/index2">Home 02</Link></li>
                          <li><Link href="/demo-9/index3">Home 03</Link></li>
                        </ul>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="#!" onClick={(e) => e.preventDefault()}>Service</a>
                          <a className="mean-expand" href="#!" onClick={(e) => { e.preventDefault(); toggleMobileSubmenu('service'); }}>
                            <i className={`far ${activeMobileSubmenu === 'service' ? 'fa-minus' : 'fa-plus'}`}></i>
                          </a>
                        </div>
                        <ul className="list-unstyled ps-3" style={{ display: activeMobileSubmenu === 'service' ? 'block' : 'none' }}>
                          <li><Link href="/demo-9/service">Service</Link></li>
                          <li><Link href="/demo-9/service-details">Service Details</Link></li>
                        </ul>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="#!" onClick={(e) => e.preventDefault()}>Projects</a>
                          <a className="mean-expand" href="#!" onClick={(e) => { e.preventDefault(); toggleMobileSubmenu('projects'); }}>
                            <i className={`far ${activeMobileSubmenu === 'projects' ? 'fa-minus' : 'fa-plus'}`}></i>
                          </a>
                        </div>
                        <ul className="list-unstyled ps-3" style={{ display: activeMobileSubmenu === 'projects' ? 'block' : 'none' }}>
                          <li><Link href="/demo-9/project">Project</Link></li>
                          <li><Link href="/demo-9/project-details">Project Details</Link></li>
                        </ul>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="#!" onClick={(e) => e.preventDefault()}>Blog</a>
                          <a className="mean-expand" href="#!" onClick={(e) => { e.preventDefault(); toggleMobileSubmenu('blog'); }}>
                            <i className={`far ${activeMobileSubmenu === 'blog' ? 'fa-minus' : 'fa-plus'}`}></i>
                          </a>
                        </div>
                        <ul className="list-unstyled ps-3" style={{ display: activeMobileSubmenu === 'blog' ? 'block' : 'none' }}>
                          <li><Link href="/demo-9/blog">Blog</Link></li>
                          <li><Link href="/demo-9/blog-details">Blog Details</Link></li>
                        </ul>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="#!" onClick={(e) => e.preventDefault()}>Pages</a>
                          <a className="mean-expand" href="#!" onClick={(e) => { e.preventDefault(); toggleMobileSubmenu('pages'); }}>
                            <i className={`far ${activeMobileSubmenu === 'pages' ? 'fa-minus' : 'fa-plus'}`}></i>
                          </a>
                        </div>
                        <ul className="list-unstyled ps-3" style={{ display: activeMobileSubmenu === 'pages' ? 'block' : 'none' }}>
                          <li><Link href="/demo-9/about">About Us</Link></li>
                          <li><Link href="/demo-9/doctor">Doctor</Link></li>
                          <li><Link href="/demo-9/doctor-details">Doctor Details</Link></li>
                          <li><Link href="/demo-9/pricing">Pricing</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/demo-9/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="offcanvas__contact mt-4">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#" rel="noopener noreferrer">Mirpur,10 Road 1 House 12 Mirpur Dhaka Bangladesh</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#" rel="noopener noreferrer">Sat-Friday, 02am -09pm</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+01755520127" className="d-block">017 5552-0127</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="/demo-9/contact" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded100">
                    Get Started
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center mt-4">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Offcanvas Overlay */}
      <div 
        className={`offcanvas__overlay ${sidebarOpen ? 'overlay-open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Search Area Start */}
      <div 
        className="search-wrap" 
        style={{ display: searchOpen ? 'block' : 'none', opacity: searchOpen ? 1 : 0 }}
      >
        <div className="search-inner">
          <i 
            className="fas fa-times search-close" 
            id="search-close"
            onClick={() => setSearchOpen(false)}
          ></i>
          <div className="search-cell">
            <form method="get" onSubmit={(e) => e.preventDefault()}>
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
