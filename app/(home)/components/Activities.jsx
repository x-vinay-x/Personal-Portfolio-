"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiUsers, HiCalendar, HiOfficeBuilding } from 'react-icons/hi';
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

const Activities = () => {
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
            <HiUsers className="w-5 h-5" />
            <span className="text-sm font-medium">Professional Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Activities & Participation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Active participation in IEEE events, workshops, and hackathons
          </p>
        </motion.div>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {config.activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="group relative bg-secondary/5 border border-zinc-800 rounded-xl p-6 hover:bg-secondary/10 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <HiUsers className="w-4 h-4" />
                    <span className="font-medium">{activity.role}</span>
                  </div>
                  
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <HiOfficeBuilding className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{activity.organization}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HiCalendar className="w-4 h-4" />
                    <span>{activity.date}</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;