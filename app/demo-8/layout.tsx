
import React from 'react';
import Header from '@/components/demo-8/Header';
import Footer from '@/components/demo-8/Footer';
import Loader from '@/components/demo-8/Loader';
import ScriptLoader from '@/components/demo-8/ScriptLoader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Loader />
        <ScriptLoader />
        <div className="page-wrapper">
          <Header />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
