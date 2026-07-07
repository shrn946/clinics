"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

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

  // If path is Home 03 (which is demo-10 root)
  if (pathname === '/demo-10' || pathname === '/demo-10/') {
    return (
      <footer suppressHydrationWarning className="footer-section3 footer-style3 z-1 position-relative blackbg">
        <div className="container">
          <div className="footer-widgets-wrapper3">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-3 col-md-6 col-sm-5 d-flex justify-content-lg-center">
                <div className="single-footer-widget3 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="widget-head">
                    <Link href="/demo-10">
                      <DentalLogo white />
                    </Link>
                  </div>
                  <ul className="footer-info d-flex flex-column gap-3">
                    <li className="d-flex align-items-center gap-2">
                      <div className="cont">
                        <span className="fs-seven d-block text-white-50">Address</span>
                        <span className="fs-six fw_500 white sub-font">66 Brooklyn, India</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <div className="cont">
                        <span className="fs-seven d-block text-white-50">Phone Number</span>
                        <a href="tel:+0123456789" className="fs-six fw_500 white sub-font">012 345 678 9101</a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <div className="cont">
                        <span className="fs-seven d-block text-white-50">Email</span>
                        <a href="mailto:info@example.com" className="fs-six fw_500 white sub-font">info@example.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 col-sm-5 d-flex justify-content-lg-center">
                <div className="single-footer-widget3 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="widget-head">
                    <h4 className="white fw_600">Quick Links</h4>
                  </div>
                  <ul className="list-area">
                    <li><Link href="/demo-10/about">About Us</Link></li>
                    <li><Link href="/demo-10/service">Our Services</Link></li>
                    <li><Link href="/demo-10/contact">Why Choose Us</Link></li>
                    <li><Link href="/demo-10/doctor">Doctors</Link></li>
                    <li><Link href="/demo-10/blog">Blog And News</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-center">
                <div className="single-footer-widget3 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="widget-head">
                    <h4 className="white fw_600">Services</h4>
                  </div>
                  <ul className="list-area">
                    <li><a href="#" className="d-flex align-items-center gap-2"><i className="fa-solid fa-angles-right"></i> Vitality Vitals Clinic</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-2"><i className="fa-solid fa-angles-right"></i> MedEx Wellness Center</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-2"><i className="fa-solid fa-angles-right"></i> HopeHealth Medical Group</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-2"><i className="fa-solid fa-angles-right"></i> SwiftCare Urgent Center</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-2"><i className="fa-solid fa-angles-right"></i> WellSpring Women's Clinic</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-5 d-flex justify-content-lg-center">
                <div className="single-footer-widget3 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="widget-head">
                    <h4 className="white">Popular Post</h4>
                  </div>
                  <ul className="footer-info3 d-flex flex-column gap-3">
                    <li className="align-items-center gap-2">
                      <span className="icon3 text-white-50"><i className="fa-solid fa-calendar-days me-2"></i>October 19, 2024</span>
                      <div className="cont3">
                        <h4><Link href="/demo-10/blog-details">Leading the Way in That Moves You</Link></h4>
                      </div>
                    </li>
                    <li className="align-items-center gap-2">
                      <span className="icon3 text-white-50"><i className="fa-solid fa-calendar-days me-2"></i>October 19, 2024</span>
                      <div className="cont3">
                        <h4><Link href="/demo-10/blog-details">Tech Excellence, Always The Future is Now</Link></h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom3">
          <div className="container">
            <div className="footer-bottom-wrap">
              <p className="body-font fs-seven text-white-50">
                &copy; 2026 MediZen | All Rights Reserved
              </p>
              <ul className="privacy">
                <li><Link href="/demo-10/contact" className="fs-seven">Terms &amp; Condition</Link></li>
                <li><Link href="/demo-10/contact" className="fs-seven">Privacy Policy</Link></li>
                <li><Link href="/demo-10/contact" className="fs-seven">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // If path is Home 02
  if (pathname === '/demo-10/index2' || pathname === '/demo-10/index2/') {
    return (
      <footer suppressHydrationWarning className="footer-section footer-style2 z-1 position-relative blackbg">
        <div className="container">
          <div className="footer-social-logo d-flex align-items-center justify-content-sm-between justify-content-center">
            <Link href="/demo-10">
              <img src="/demo-10/assets/img/logo/logo-white.png" alt="logo" />
            </Link>
            <div className="social-wrapper d-flex align-items-center gap-2">
              <a href="#" className="black"><i className="fab fa-facebook-f text-white"></i></a>
              <a href="#" className="black"><i className="fab fa-linkedin-in text-white"></i></a>
              <a href="#" className="black"><i className="fab fa-instagram text-white"></i></a>
              <a href="#" className="black"><i className="fab fa-x-twitter text-white"></i></a>
            </div>
          </div>
          <div className="footer-widgets-wrapper">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-3 col-md-6 col-sm-5 d-flex justify-content-lg-center">
                <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.7s">
                  <div className="widget-head">
                    <h4 className="white">Contact</h4>
                  </div>
                  <ul className="footer-info d-flex flex-column gap-3">
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon d-center"><i className="p1-clr fa-solid fa-location-dot"></i></span>
                      <div className="cont">
                        <span className="white fs-seven d-block">Address</span>
                        <span className="fs-six fw_500 white sub-font">66 Brooklyn, India</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon d-center"><i className="p1-clr fa-solid fa-phone"></i></span>
                      <div className="cont">
                        <span className="white fs-seven d-block">Phone Number</span>
                        <a href="tel:+0123456789" className="fs-six fw_500 white sub-font">012 345 678 9101</a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon d-center"><i className="p1-clr fa-solid fa-envelope"></i></span>
                      <div className="cont">
                        <span className="white fs-seven d-block">Email</span>
                        <a href="mailto:info@example.com" className="fs-six fw_500 white sub-font">info@example.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 col-sm-5 d-flex justify-content-lg-center">
                <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.6s">
                  <div className="widget-head">
                    <h4 className="white fw_600">Quick Links</h4>
                  </div>
                  <ul className="list-area">
                    <li><Link href="/demo-10/about">About Us</Link></li>
                    <li><Link href="/demo-10/service">Our Services</Link></li>
                    <li><Link href="/demo-10/contact">Why Choose Us</Link></li>
                    <li><Link href="/demo-10/doctor">Doctors</Link></li>
                    <li><Link href="/demo-10/blog">Blog And News</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-center">
                <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.6s">
                  <div className="widget-head">
                    <h4 className="white fw_600">Services</h4>
                  </div>
                  <ul className="list-area">
                    <li><a href="#" className="d-flex align-items-center gap-2"><i className="fa-solid fa-angles-right"></i> Vitality Vitals Clinic</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-2"><i className="fa-solid fa-angles-right"></i> MedEx Wellness Center</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-2"><i className="fa-solid fa-angles-right"></i> HopeHealth Medical Group</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-2"><i className="fa-solid fa-angles-right"></i> SwiftCare Urgent Center</a></li>
                    <li><a href="#" className="d-flex align-items-center gap-2"><i className="fa-solid fa-angles-right"></i> WellSpring Women's Clinic</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-7">
                <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.4s">
                  <div className="widget-head">
                    <h4 className="white fw_600">Newsletter</h4>
                  </div>
                  <div className="footer-content">
                    <p className="white text-white-50">
                      Medical services are an essential part of our lives, offering care and treatment for various conditions.
                    </p>
                  </div>
                  <form action="#" className="form-cmn-style1 mt-3" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Enter your email" className="form-control mb-2" />
                    <button type="submit" className="common-btn text-nowrap box-style first-box d-inline-flex justify-content-center align-items-center fs-seven fw_600 gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded-5">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-wrap">
              <p className="body-font fs-seven text-white-50">
                &copy; 2026 MediZen | All Rights Reserved
              </p>
              <ul className="privacy">
                <li><Link href="/demo-10/contact" className="fs-seven">Terms &amp; Condition</Link></li>
                <li><Link href="/demo-10/contact" className="fs-seven">Privacy Policy</Link></li>
                <li><Link href="/demo-10/contact" className="fs-seven">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Otherwise return standard Home 01 Footer
  return (
    <footer suppressHydrationWarning className="footer-section bg-cover" style={{ backgroundImage: "url('/demo-10/assets/img/element/footer-bg2.png')" }}>
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.4s">
                <div className="widget-head">
                  <Link href="/demo-10">
                    <img src="/demo-10/assets/img/logo/logo-white.png" alt="logo" className="footer-logo" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p className="white-para">
                    MediZen offers professional healthcare services, modern medical solutions, and compassionate clinical treatments to support your wellness journey.
                  </p>
                  <div className="social-icon d-flex align-items-center gap-2">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-center">
              <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.5s">
                <div className="widget-head">
                  <h4 className="white fw_600">Quick Links</h4>
                </div>
                <ul className="list-area">
                  <li><Link href="/demo-10/about">About Us</Link></li>
                  <li><Link href="/demo-10/service">Our Services</Link></li>
                  <li><Link href="/demo-10/doctor">Doctors</Link></li>
                  <li><Link href="/demo-10/blog">Blog And News</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-center">
              <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.6s">
                <div className="widget-head">
                  <h4 className="white fw_600">Information</h4>
                </div>
                <ul className="list-area">
                  <li><Link href="/demo-10/contact">Terms &amp; Condition</Link></li>
                  <li><Link href="/demo-10/contact">Privacy Policy</Link></li>
                  <li><Link href="/demo-10/contact">Contact Us</Link></li>
                  <li><Link href="/demo-10/contact">Terms of Use</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-5 d-flex justify-content-lg-center">
              <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.7s">
                <div className="widget-head">
                  <h4 className="white">Contact Info</h4>
                </div>
                <ul className="footer-info d-flex flex-column gap-3">
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon d-center text-white"><i className="fa-solid fa-location-dot"></i></span>
                    <div className="cont">
                      <span className="pra fs-seven d-block text-white-50">Address</span>
                      <span className="fs-six fw_500 white sub-font">66 Brooklyn, India</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon d-center text-white"><i className="fa-solid fa-phone"></i></span>
                    <div className="cont">
                      <span className="pra fs-seven d-block text-white-50">Phone Number</span>
                      <a href="tel:+0123456789" className="fs-six fw_500 white sub-font">012 345 678 9101</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon d-center text-white"><i className="fa-solid fa-envelope"></i></span>
                    <div className="cont">
                      <span className="pra fs-seven d-block text-white-50">Email</span>
                      <a href="mailto:info@example.com" className="fs-six fw_500 white sub-font">info@example.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="container">
          <p className="body-font text-center py-4 text-white-50">
            &copy; 2026 MediZen | All Rights Reserved
          </p>
        </div>
      </div>
      {/* Element */}
      <img src="/demo-10/assets/img/element/footer-element.png" alt="element" className="footer-element" />
    </footer>
  );
}
