"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  const toggleSubmenu = (menu: string) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menu);
    }
  };

  return (
    <header className={`main-header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" href="/demo-11">
              <img src="/demo-11/assets/images/logo.svg" alt="Logo" />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className={`collapse navbar-collapse main-menu ${mobileMenuOpen ? 'show' : ''}`}>
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item submenu">
                    <Link className="nav-link" href="/demo-11" onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                        toggleSubmenu('home');
                      }
                    }}>Home</Link>
                    <ul className={`submenu-list ${activeSubmenu === 'home' ? 'd-block' : ''}`} style={{ listStyle: 'none', paddingLeft: '15px' }}>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11">Home - Default</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/index2">Home - Version 1</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/index3">Home - Version 2</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/index4">Home - Version 3</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" href="/demo-11/about">About Us</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/demo-11/service">Services</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/demo-11/blog">Blog</Link></li>
                  
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#" onClick={(e) => {
                      e.preventDefault();
                      toggleSubmenu('pages');
                    }}>Pages</a>
                    <ul className={`submenu-list ${activeSubmenu === 'pages' ? 'd-block' : ''}`} style={{ listStyle: 'none', paddingLeft: '15px' }}>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/service-details">Service Details</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/blog-details">Blog Details</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/project">Case Study</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/project-details">Case Study Details</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/doctor">Our Team</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/doctor-details">Team Details</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/pricing">Pricing Plan</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/testimonials">Testimonials</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/gallery">Image Gallery</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/video-gallery">Video Gallery</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-11/faq">FAQs</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" href="/demo-11/contact">Contact Us</Link></li>
                  <li className="nav-item highlighted-menu"><Link className="nav-link" href="/demo-11/appointment">Book Appointment</Link></li>
                </ul>
              </div>
              
              {/* Header Btn Start */}
              <div className="header-btn">
                <Link href="/demo-11/appointment" className="btn-default btn-highlighted">Book Appointment</Link>
              </div>
              {/* Header Btn End */}
            </div>
            
            {/* Mobile Menu Hamburger Toggle */}
            <div className={`navbar-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer', zIndex: 1100 }}>
              <i className={mobileMenuOpen ? "fa-solid fa-xmark text-white fs-3" : "fa-solid fa-bars fs-3"} style={{ color: 'var(--black)' }}></i>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
