"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Certifications = () => {
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
            <span className="text-sm font-medium">Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications and specialized training programs
          </p>
        </motion.div>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {config.certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="group relative bg-secondary/5 border border-zinc-800 rounded-xl p-6 hover:bg-secondary/10 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {cert.issuer}
                  </p>
                  {cert.details && (
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.details}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <HiCalendar className="w-4 h-4" />
                <span>{cert.date}</span>
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;