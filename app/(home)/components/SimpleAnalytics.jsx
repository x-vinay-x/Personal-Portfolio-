"use client"
import { useEffect } from 'react';

const SimpleAnalytics = () => {
  useEffect(() => {
    // Simple analytics that works on Vercel
    const trackVisit = async () => {
      try {
        // This will send data to a simple analytics service
        const data = {
          timestamp: new Date().toISOString(),
          page: window.location.pathname,
          referrer: document.referrer || 'direct',
          userAgent: navigator.userAgent,
          // No personal info - just anonymous visit data
        };

        // You can replace this with any analytics service
        // For now, this just logs to console (you can see in browser dev tools)
        console.log('Portfolio Visit:', data);
        
        // Optional: Send to a simple analytics API
        // await fetch('/api/analytics', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });
      } catch (error) {
        // Silently fail - don't break the site
        console.log('Analytics error:', error);
      }
    };

    trackVisit();
  }, []);

  return null;
};

export default SimpleAnalytics;