'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function Counter({ end, duration = 1500, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let started = false;
    
    const startCounting = () => {
      if (started) return;
      started = true;
      
      // Remove listeners
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Smooth ease-out quad deceleration curve
        const easeProgress = progress * (2 - progress);
        
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const checkVisibility = () => {
      if (started || !elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Check if element is scrolled into view (works even with visibility: hidden)
      if (rect.top <= viewportHeight && rect.bottom >= 0) {
        startCounting();
      }
    };

    // Initial check on mount
    checkVisibility();
    
    // Bind scroll and resize listeners
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
    
    // Fallback: If it hasn't triggered within 1 second, force run to guarantee the final value is displayed
    const fallbackTimer = setTimeout(() => {
      if (!started) {
        startCounting();
      }
    }, 1000);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      clearTimeout(fallbackTimer);
    };
  }, [end, duration]);

  return (
    <span ref={elementRef} className="counter">
      {prefix}{count}{suffix}
    </span>
  );
}
