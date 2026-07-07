import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/demo-12/Header';
import Footer from '@/components/demo-12/Footer';
import ScriptLoader from '@/components/demo-12/ScriptLoader';

export const metadata: Metadata = {
  title: "Vamary - Plastic Surgery Clinic & Medical Center",
  description: "Vamary - Premium Plastic Surgery Clinic Next.js Template",
};

export default function Demo12Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/demo-12/assets/img/logo/favicon.png" />
        <link rel="stylesheet" href="/demo-12/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/demo-12/assets/css/animate.css" />
        <link rel="stylesheet" href="/demo-12/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/demo-12/assets/css/slick.css" />
        <link rel="stylesheet" href="/demo-12/assets/css/nouislider.css" />
        <link rel="stylesheet" href="/demo-12/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/demo-12/assets/css/splide.css" />
        <link rel="stylesheet" href="/demo-12/assets/css/odometer.css" />
        <link rel="stylesheet" href="/demo-12/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/demo-12/assets/css/spacing.css" />
        <link rel="stylesheet" href="/demo-12/assets/css/main.css" />
      </head>
      <body suppressHydrationWarning>
        {/* pre loader area start */}
        <div id="loading">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <div className="object" id="object_one"></div>
              <div className="object" id="object_two" style={{ left: '20px' }}></div>
              <div className="object" id="object_three" style={{ left: '40px' }}></div>
              <div className="object" id="object_four" style={{ left: '60px' }}></div>
              <div className="object" id="object_five" style={{ left: '80px' }}></div>
            </div>
          </div>
        </div>
        {/* pre loader area end */}

        {/* back to top start */}
        <div className="back-to-top-wrapper">
          <button id="back_to_top" type="button" className="back-to-top-btn">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>               
          </button>
        </div>
        {/* back to top end */}

        <ScriptLoader />
        
        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
