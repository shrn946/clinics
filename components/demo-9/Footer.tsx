"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  // If path is Home 03
  if (pathname === '/demo-9/index3' || pathname === '/demo-9/index3/') {
    return (
      <footer suppressHydrationWarning className="footer-section3 footer-style3 z-1 position-relative blackbg">
        <div className="container">
          <div className="footer-widgets-wrapper3">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-3 col-md-6 col-sm-5 d-flex justify-content-lg-center">
                <div className="single-footer-widget3 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="widget-head">
                    <Link href="/demo-9">
                      <img src="/demo-9/assets/img/logo/logo-white.png" alt="logo" />
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
                    <li><Link href="/demo-9/about">About Us</Link></li>
                    <li><Link href="/demo-9/service">Our Services</Link></li>
                    <li><Link href="/demo-9/contact">Why Choose Us</Link></li>
                    <li><Link href="/demo-9/doctor">Doctors</Link></li>
                    <li><Link href="/demo-9/blog">Blog And News</Link></li>
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
                        <h4><Link href="/demo-9/blog-details">Leading the Way in That Moves You</Link></h4>
                      </div>
                    </li>
                    <li className="align-items-center gap-2">
                      <span className="icon3 text-white-50"><i className="fa-solid fa-calendar-days me-2"></i>October 19, 2024</span>
                      <div className="cont3">
                        <h4><Link href="/demo-9/blog-details">Tech Excellence, Always The Future is Now</Link></h4>
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
                <li><Link href="/demo-9/contact" className="fs-seven">Terms &amp; Condition</Link></li>
                <li><Link href="/demo-9/contact" className="fs-seven">Privacy Policy</Link></li>
                <li><Link href="/demo-9/contact" className="fs-seven">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // If path is Home 02
  if (pathname === '/demo-9/index2' || pathname === '/demo-9/index2/') {
    return (
      <footer suppressHydrationWarning className="footer-section footer-style2 z-1 position-relative blackbg">
        <div className="container">
          <div className="footer-social-logo d-flex align-items-center justify-content-sm-between justify-content-center">
            <Link href="/demo-9">
              <img src="/demo-9/assets/img/logo/logo-white.png" alt="logo" />
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
                    <li><Link href="/demo-9/about">About Us</Link></li>
                    <li><Link href="/demo-9/service">Our Services</Link></li>
                    <li><Link href="/demo-9/contact">Why Choose Us</Link></li>
                    <li><Link href="/demo-9/doctor">Doctors</Link></li>
                    <li><Link href="/demo-9/blog">Blog And News</Link></li>
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
                <li><Link href="/demo-9/contact" className="fs-seven">Terms &amp; Condition</Link></li>
                <li><Link href="/demo-9/contact" className="fs-seven">Privacy Policy</Link></li>
                <li><Link href="/demo-9/contact" className="fs-seven">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Otherwise return standard Home 01 Footer
  return (
    <footer suppressHydrationWarning className="footer-section bg-cover" style={{ backgroundImage: "url('/demo-9/assets/img/element/footer-bg2.png')" }}>
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.4s">
                <div className="widget-head">
                  <Link href="/demo-9">
                    <img src="/demo-9/assets/img/logo/logo-white.png" alt="logo" className="footer-logo" />
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
                  <li><Link href="/demo-9/about">About Us</Link></li>
                  <li><Link href="/demo-9/service">Our Services</Link></li>
                  <li><Link href="/demo-9/doctor">Doctors</Link></li>
                  <li><Link href="/demo-9/blog">Blog And News</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-center">
              <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.6s">
                <div className="widget-head">
                  <h4 className="white fw_600">Information</h4>
                </div>
                <ul className="list-area">
                  <li><Link href="/demo-9/contact">Terms &amp; Condition</Link></li>
                  <li><Link href="/demo-9/contact">Privacy Policy</Link></li>
                  <li><Link href="/demo-9/contact">Contact Us</Link></li>
                  <li><Link href="/demo-9/contact">Terms of Use</Link></li>
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
      <img src="/demo-9/assets/img/element/footer-element.png" alt="element" className="footer-element" />
    </footer>
  );
}
