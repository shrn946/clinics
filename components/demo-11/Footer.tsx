"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer bg-section dark-section" suppressHydrationWarning>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            {/* Let's Talk Box Start */}
            <div className="lets-talk-box">
              <div className="section-title">
                <span className="section-sub-title">Let's Start Your Project</span>
                <div className="lets-talk-title">
                  <h2><Link href="/demo-11/contact">Let's Talk</Link></h2>
                  <div className="years-experience-circle">
                    <div className="experience-circle-content">
                      <h3>15+</h3>
                      <p>Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Let's Talk Box End */}
          </div>

          <div className="col-xl-7">
            {/* Footer Links Box Start */}
            <div className="footer-links-box">
              <div className="footer-header">
                <div className="footer-logo">
                  <Link href="/demo-11">
                    <img src="/demo-11/assets/images/logo.svg" alt="logo" />
                  </Link>
                </div>
                <div className="footer-social-links">
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>

              <div className="footer-links">
                <h2>Quick Links</h2>
                <ul>
                  <li><Link href="/demo-11">Home</Link></li>
                  <li><Link href="/demo-11/about">About Us</Link></li>
                  <li><Link href="/demo-11/service">Our Services</Link></li>
                  <li><Link href="/demo-11/testimonials">Testimonials</Link></li>
                </ul>
              </div>

              <div className="footer-links">
                <h2>Medical Services</h2>
                <ul>
                  <li><Link href="/demo-11/service-details">Pediatric Care</Link></li>
                  <li><Link href="/demo-11/service-details">Family Medicine</Link></li>
                  <li><Link href="/demo-11/service-details">Preventive Healthcare</Link></li>
                  <li><Link href="/demo-11/service-details">Neurology Treatment</Link></li>
                </ul>
              </div>

              <div className="footer-links">
                <h2>Support</h2>
                <ul>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Customer Support</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><Link href="/demo-11/contact">Contact Support</Link></li>
                </ul>
              </div>
            </div>
            {/* Footer Links Box End */}
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright-text">
                <p>Copyright © 2026 Pluxes. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
