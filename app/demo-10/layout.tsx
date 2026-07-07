import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/demo-10/Header';
import Footer from '@/components/demo-10/Footer';
import ScriptLoader from '@/components/demo-10/ScriptLoader';

export const metadata: Metadata = {
  title: "MediDental - Premium Dental Clinic & Surgery",
  description: "MediDental - Premium Dental Clinic & Surgery Next.js Template",
};

export default function Demo9Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/demo-10/assets/img/logo/favs.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/demo-10/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/demo-10/assets/css/all.min.css" />
        <link rel="stylesheet" href="/demo-10/assets/css/animate.css" />
        <link rel="stylesheet" href="/demo-10/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/demo-10/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/demo-10/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/demo-10/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/demo-10/assets/css/main.css" />
      </head>
      <body suppressHydrationWarning className="body-bg">
        {/* Preloader Start */}
        <div id="preloader" className="preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="M" className="letters-loading">M</span>
              <span data-text-preloader="D" className="letters-loading">D</span>
              <span data-text-preloader="I" className="letters-loading">I</span>
              <span data-text-preloader="Z" className="letters-loading">Z</span>
              <span data-text-preloader="E" className="letters-loading">E</span>
              <span data-text-preloader="N" className="letters-loading">N</span>
            </div>
            <p className="text-center">Loading</p>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mouse Follower */}
        <div className="mouse-follower">
          <span className="cursor-outline"></span>
          <span className="cursor-dot"></span>
        </div>

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
