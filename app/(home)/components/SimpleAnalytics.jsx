"use client"
import { useEffect } from 'react';

const SimpleAnalytics = () => {
  useEffect(() => {
    // Simple analytics that works on Netlify
    const trackVisit = async () => {
      try {
        // Skip tracking if it's the owner (you) visiting
        const isOwner = () => {
          const hostname = window.location.hostname;
          
          // Skip if it's localhost (your development)
          if (hostname === 'localhost' || hostname === '127.0.0.1') {
            console.log('Analytics: Skipping localhost visit');
            return true;
          }
          
          // Skip if user has owner flag in localStorage (you can set this)
          if (localStorage.getItem('portfolio-owner') === 'true') {
            console.log('Analytics: Skipping owner visit');
            return true;
          }
          
          return false;
        };

        // Don't track owner visits
        if (isOwner()) {
          return;
        }

        const data = {
          timestamp: new Date().toISOString(),
          page: window.location.pathname,
          referrer: document.referrer || 'direct',
          userAgent: navigator.userAgent,
          // No personal info - just anonymous visit data
        };

        // Track the visit
        console.log('Portfolio Visit Tracked:', data);
        
        // Update visit counter (excluding owner)
        const currentViews = parseInt(localStorage.getItem('portfolio-public-views') || '0');
        localStorage.setItem('portfolio-public-views', (currentViews + 1).toString());
        
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