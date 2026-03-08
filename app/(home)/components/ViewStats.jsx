"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiEye, HiUsers, HiClock, HiExternalLink } from 'react-icons/hi';

const ViewStats = () => {
  const [stats, setStats] = useState({
    views: 0,
    visitors: 0,
    recentVisits: []
  });
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const updateStats = () => {
      const views = parseInt(localStorage.getItem('portfolio-views') || '0');
      const visitorsData = JSON.parse(localStorage.getItem('portfolio-visitors') || '[]');
      const visits = JSON.parse(localStorage.getItem('portfolio-visit-log') || '[]');
      
      setStats({
        views,
        visitors: visitorsData.length,
        recentVisits: visits.slice(-10).reverse() // Last 10 visits, most recent first
      });
    };

    updateStats();
    // Update every 5 seconds
    const interval = setInterval(updateStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const getReferrerName = (referrer) => {
    if (!referrer || referrer === 'direct') return 'Direct';
    if (referrer.includes('linkedin.com')) return 'LinkedIn';
    if (referrer.includes('google.com')) return 'Google';
    if (referrer.includes('github.com')) return 'GitHub';
    try {
      return new URL(referrer).hostname;
    } catch {
      return 'Unknown';
    }
  };

  // Hidden trigger - press Ctrl+Shift+A to show stats
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowStats(!showStats);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showStats]);

  if (!showStats) {
    return null; // Completely hidden from visitors
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 z-50 bg-black/90 backdrop-blur-md border border-zinc-800 rounded-xl p-4 w-80 max-h-96 overflow-y-auto"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">Portfolio Analytics</h3>
        <button
          onClick={() => setShowStats(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <HiEye className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-blue-400">Total Views</span>
          </div>
          <div className="text-xl font-bold text-white">{stats.views}</div>
        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <HiUsers className="w-4 h-4 text-green-400" />
            <span className="text-xs text-green-400">Unique Visitors</span>
          </div>
          <div className="text-xl font-bold text-white">{stats.visitors}</div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-300 flex items-center gap-2">
          <HiClock className="w-4 h-4" />
          Recent Visits
        </h4>
        <div className="space-y-1 max-h-40 overflow-y-auto">
          {stats.recentVisits.map((visit, index) => (
            <div key={index} className="bg-zinc-800/50 rounded p-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">{formatDate(visit.timestamp)}</span>
                <div className="flex items-center gap-1 text-gray-400">
                  <HiExternalLink className="w-3 h-3" />
                  <span>{getReferrerName(visit.referrer)}</span>
                </div>
              </div>
              <div className="text-gray-500 mt-1">{visit.page}</div>
            </div>
          ))}
          {stats.recentVisits.length === 0 && (
            <div className="text-gray-500 text-center py-2">No visits yet</div>
          )}
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-zinc-700">
        <p className="text-xs text-gray-500">
          Press Ctrl+Shift+A to toggle • Data stored locally
        </p>
      </div>
    </motion.div>
  );
};

export default ViewStats;