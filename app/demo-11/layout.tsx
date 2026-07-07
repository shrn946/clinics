import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/demo-11/Header';
import Footer from '@/components/demo-11/Footer';
import ScriptLoader from '@/components/demo-11/ScriptLoader';

export const metadata: Metadata = {
  title: "Pluxes - Premium Medical & Healthcare Services",
  description: "Pluxes - Premium Medical & Healthcare Next.js Template",
};

export default function Demo11Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/demo-11/assets/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/demo-11/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/demo-11/assets/css/slicknav.min.css" />
        <link rel="stylesheet" href="/demo-11/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/demo-11/assets/css/all.min.css" />
        <link rel="stylesheet" href="/demo-11/assets/css/animate.css" />
        <link rel="stylesheet" href="/demo-11/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/demo-11/assets/css/mousecursor.css" />
        <link rel="stylesheet" href="/demo-11/assets/css/custom.css" />
      </head>
      <body suppressHydrationWarning>
        {/* Preloader Start */}
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon">
              <img src="/demo-11/assets/images/loader.svg" alt="loading" />
            </div>
          </div>
        </div>
        {/* Preloader End */}

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
