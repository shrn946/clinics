'use client';
import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay to ensure CSS has loaded and layout shifts have settled
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0056b3', // Fancy blue background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999999,
      transition: 'opacity 0.5s ease'
    }}>
      <div style={{
        width: '80px', // Little big size
        height: '80px',
        border: '6px solid rgba(255, 255, 255, 0.3)', // Translucent border
        borderTop: '6px solid #ffffff', // White spinner
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
