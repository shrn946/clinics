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

function DentalLogo({ white = false }: { white?: boolean }) {
  return (
    <div className="d-flex align-items-center gap-3">
      <svg width="52" height="52" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15C42 15 35 25 35 35C35 45 42 55 42 75C42 85 35 90 40 90C45 90 47 80 50 80C53 80 55 90 60 90C65 90 58 85 58 75C58 55 65 45 65 35C65 25 58 15 50 15Z" fill="url(#tooth-grad)" />
        <path d="M50 25C47 25 45 32 45 38C45 44 47 50 47 62C47 68 43 72 46 72C49 72 50 66 50 62C50 58 50 58 50 62C50 66 51 72 54 72C57 72 53 68 53 62C53 50 55 44 55 38C55 32 53 25 50 25Z" fill="white" opacity="0.3" />
        <defs>
          <linearGradient id="tooth-grad" x1="50" y1="15" x2="50" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0EA5E9" />
            <stop offset="1" stopColor="#0D9488" />
          </linearGradient>
        </defs>
      </svg>
      <span className="fs-3 fw-bold heading-font" style={{ color: white ? '#fff' : '#090A0B', letterSpacing: '0.5px', fontSize: '28px', lineHeight: '1' }}>
        Medi<span style={{ color: '#0EA5E9' }}>Dental</span>
      </span>
    </div>
  );
}

  // Determine header classes based on current route
  let headerClass = "header-1 header-style2";
  if (pathname === '/demo-10' || pathname === '/demo-10/') {
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
                  <Link href="/demo-10" className="header-logo">
                    <DentalLogo />
                  </Link>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <ul>
                        <li className="active">
                          <Link href="/demo-10">
                            Home
                          </Link>
                        </li>
                        <li>
                          <a href="#!">
                            Service
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><Link href="/demo-10/service">Service</Link></li>
                            <li><Link href="/demo-10/service-details">Service Details</Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#!">
                            Projects
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><Link href="/demo-10/project">Project</Link></li>
                            <li><Link href="/demo-10/project-details">Project Details</Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#!">
                            Blog
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><Link href="/demo-10/blog">Blog</Link></li>
                            <li><Link href="/demo-10/blog-details">Blog Details</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="#!">
                            Pages
                            <i className="fas fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><Link href="/demo-10/about">About Us</Link></li>
                            <li><Link href="/demo-10/doctor">Doctor</Link></li>
                            <li><Link href="/demo-10/doctor-details">Doctor Details</Link></li>
                            <li><Link href="/demo-10/pricing">Pricing</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/demo-10/contact">Contact</Link>
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
                    <img src="/demo-10/assets/img/icon/menu.png" alt="icon" />
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
                  <Link href="/demo-10">
                    <img src="/demo-10/assets/img/logo/logo.png" alt="logo-img" />
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
                          <Link href="/demo-10">Home</Link>
                          <a className="mean-expand" href="#!" onClick={(e) => { e.preventDefault(); toggleMobileSubmenu('home'); }}>
                            <i className={`far ${activeMobileSubmenu === 'home' ? 'fa-minus' : 'fa-plus'}`}></i>
                          </a>
                        </div>
                        <ul className="list-unstyled ps-3" style={{ display: activeMobileSubmenu === 'home' ? 'block' : 'none' }}>
                          <li><Link href="/demo-10">Home 01</Link></li>
                          <li><Link href="/demo-10/index2">Home 02</Link></li>
                          <li><Link href="/demo-10/index3">Home 03</Link></li>
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
                          <li><Link href="/demo-10/service">Service</Link></li>
                          <li><Link href="/demo-10/service-details">Service Details</Link></li>
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
                          <li><Link href="/demo-10/project">Project</Link></li>
                          <li><Link href="/demo-10/project-details">Project Details</Link></li>
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
                          <li><Link href="/demo-10/blog">Blog</Link></li>
                          <li><Link href="/demo-10/blog-details">Blog Details</Link></li>
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
                          <li><Link href="/demo-10/about">About Us</Link></li>
                          <li><Link href="/demo-10/doctor">Doctor</Link></li>
                          <li><Link href="/demo-10/doctor-details">Doctor Details</Link></li>
                          <li><Link href="/demo-10/pricing">Pricing</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/demo-10/contact">Contact</Link>
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
                  <Link href="/demo-10/contact" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded100">
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
