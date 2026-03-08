"use client"
import { useEffect, useState } from 'react';

const OwnerMode = () => {
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    // Check if owner mode is already set
    const ownerMode = localStorage.getItem('portfolio-owner') === 'true';
    setIsOwner(ownerMode);

    // Secret key combination to toggle owner mode: Ctrl+Shift+O
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'O') {
        const newOwnerMode = !isOwner;
        setIsOwner(newOwnerMode);
        localStorage.setItem('portfolio-owner', newOwnerMode.toString());
        
        if (newOwnerMode) {
          console.log('🔒 Owner mode ENABLED - Your visits will NOT be tracked');
        } else {
          console.log('🔓 Owner mode DISABLED - Your visits will be tracked');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOwner]);

  // Show owner indicator (only visible to you)
  if (isOwner) {
    return (
      <div className="fixed top-4 left-4 z-50 bg-green-500/20 border border-green-500/50 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
        🔒 Owner Mode (Not Tracked)
      </div>
    );
  }

  return null;
};

export default OwnerMode;