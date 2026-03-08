"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { config } from '@/config';

const GitHubStats = () => {
  const username = config.social.github;

  const statsCards = [
    {
      title: "GitHub Stats",
      src: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9&icon_color=58a6ff`,
      alt: "GitHub Stats"
    },
    {
      title: "GitHub Streak",
      src: `https://nirzak-streak-stats.vercel.app/?user=${username}&theme=dark&hide_border=true&background=0d1117&stroke=58a6ff&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff`,
      alt: "GitHub Streak Stats"
    },
    {
      title: "Top Languages",
      src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9`,
      alt: "Top Languages"
    }
  ];

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
            <FaGithub className="w-5 h-5" />
            <span className="text-sm font-medium">GitHub Analytics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Development Activity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time insights into my coding activity and project contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {statsCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-secondary/5 border border-zinc-800 rounded-xl p-6 hover:bg-secondary/10 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            <FaGithub className="w-4 h-4" />
            <span>View Full Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;