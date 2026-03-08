"use client"
import { useEffect, useState } from 'react';

const Analytics = () => {
  const [views, setViews] = useState(0);
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Simple view tracking
    const trackView = () => {
      // Get or create visitor ID
      let visitorId = localStorage.getItem('visitor-id');
      if (!visitorId) {
        visitorId = 'visitor-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('visitor-id', visitorId);
      }

      // Track page view
      const currentViews = parseInt(localStorage.getItem('portfolio-views') || '0');
      const newViews = currentViews + 1;
      localStorage.setItem('portfolio-views', newViews.toString());
      setViews(newViews);

      // Track unique visitors (simplified)
      const visitorsData = JSON.parse(localStorage.getItem('portfolio-visitors') || '[]');
      if (!visitorsData.includes(visitorId)) {
        visitorsData.push(visitorId);
        localStorage.setItem('portfolio-visitors', JSON.stringify(visitorsData));
      }
      setVisitors(visitorsData.length);

      // Track visit timestamp
      const visits = JSON.parse(localStorage.getItem('portfolio-visit-log') || '[]');
      visits.push({
        timestamp: new Date().toISOString(),
        visitorId: visitorId,
        page: window.location.pathname,
        referrer: document.referrer || 'direct'
      });
      // Keep only last 100 visits
      if (visits.length > 100) visits.splice(0, visits.length - 100);
      localStorage.setItem('portfolio-visit-log', JSON.stringify(visits));
    };

    trackView();
  }, []);

  return null; // This component doesn't render anything visible
};

export default Analytics;