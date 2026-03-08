"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker, HiCalendar, HiStar } from 'react-icons/hi';
import { config } from '@/config';

const Education = () => {
  const education = config.education;

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-zinc-800 px-4 py-2 rounded-full text-primary backdrop-blur-sm mb-4">
            <HiAcademicCap className="w-5 h-5" />
            <span className="text-sm font-medium">Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Academic Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Electronics and Communication Engineering with strong academic performance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="group relative bg-secondary/5 border border-zinc-800 rounded-xl p-8 hover:bg-secondary/10 hover:border-zinc-700 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    {education.institution}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <HiLocationMarker className="w-4 h-4" />
                    <span>{education.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <HiCalendar className="w-4 h-4" />
                    <span>{education.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <HiStar className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">CGPA</span>
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {education.cgpa}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;