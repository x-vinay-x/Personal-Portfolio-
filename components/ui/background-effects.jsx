"use client"
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.2,
            ease: 'easeOut',
        },
    },
};

const blobVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
};

const BackgroundEffects = ({
    className,
    variant = 'default',
    colors = {
        first: 'secondary',
        second: 'secondary',
    },
    intensity = '10',
    blurAmount = '3xl',
}) => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Reduce blur heavily on mobile to save GPU compositing
    const mobileOptimizedBlur = isMobile ? 'xl' : blurAmount;

    const positions = {
        default: {
            first: 'top-1/4 -translate-y-1/2 left-1/4',
            second: 'bottom-1/4 translate-y-1/2 right-1/4',
        },
        centered: {
            first: 'top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2',
            second: 'top-1/2 -translate-y-1/2 right-1/3 translate-x-1/2',
        },
        diagonal: {
            first: 'top-0 left-0',
            second: 'bottom-0 right-0',
        },
        corners: {
            first: 'top-0 right-0',
            second: 'bottom-0 left-0',
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className={cn(
                'absolute inset-0 overflow-hidden pointer-events-none',
                className
            )}
        >
            <motion.div
                variants={blobVariants}
                className={cn(
                    'absolute w-96 h-96 rounded-full will-change-transform',
                    `bg-${colors.first}/${Math.max(5, parseInt(intensity) - (isMobile ? 5 : 0))}`,
                    `blur-${mobileOptimizedBlur}`,
                    positions[variant].first
                )}
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                key={`blob-1-${colors.first}-${variant}`}
            />
            <motion.div
                variants={blobVariants}
                className={cn(
                    'absolute w-96 h-96 rounded-full will-change-transform',
                    `bg-${colors.second}/${Math.max(5, parseInt(intensity) - (isMobile ? 5 : 0))}`,
                    `blur-${mobileOptimizedBlur}`,
                    positions[variant].second
                )}
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                key={`blob-2-${colors.second}-${variant}`}
            />
        </motion.div>
    );
};

export const BackgroundPresets = {
    Subtle: () => (
        <BackgroundEffects
            variant="centered"
            colors={{ first: 'primary', second: 'secondary' }}
            intensity="5"
            blurAmount="3xl"
        />
    ),

    Vibrant: () => (
        <BackgroundEffects
            variant="diagonal"
            colors={{ first: 'primary', second: 'primary' }}
            intensity="20"
            blurAmount="3xl"
        />
    ),

    Corner: () => (
        <BackgroundEffects
            variant="corners"
            colors={{ first: 'secondary', second: 'secondary' }}
            intensity="10"
            blurAmount="3xl"
        />
    ),

    Minimal: () => (
        <BackgroundEffects
            variant="default"
            colors={{ first: 'secondary', second: 'secondary' }}
            intensity="5"
            blurAmount="3xl"
        />
    ),
};

export default BackgroundEffects;
