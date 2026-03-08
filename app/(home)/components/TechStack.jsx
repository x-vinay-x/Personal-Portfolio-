"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const TechCard = ({ tech, category }) => {
  const getAccentColor = (category) => {
    switch (category) {
      case 'languages': return 'from-blue-500 to-cyan-500';
      case 'embedded': return 'from-green-500 to-emerald-500';
      case 'ai': return 'from-purple-500 to-pink-500';
      case 'llm': return 'from-orange-500 to-red-500';
      case 'tools': return 'from-indigo-500 to-blue-500';
      case 'iot': return 'from-teal-500 to-cyan-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  const getBorderColor = (category) => {
    switch (category) {
      case 'languages': return 'hover:border-blue-500/50';
      case 'embedded': return 'hover:border-green-500/50';
      case 'ai': return 'hover:border-purple-500/50';
      case 'llm': return 'hover:border-orange-500/50';
      case 'tools': return 'hover:border-indigo-500/50';
      case 'iot': return 'hover:border-teal-500/50';
      default: return 'hover:border-blue-500/50';
    }
  };

  return (
    <motion.div
      variants={itemAnimation}
      className={`tech-card group bg-[#0d0d0d] border border-[#1e1e1e] rounded-2xl p-8 flex flex-col items-center gap-3 transition-all duration-300 hover:transform hover:-translate-y-1 ${getBorderColor(category)}`}
    >
      <div className="tech-icon-box bg-[#1a1a1a] rounded-xl p-3.5 w-15 h-15 flex items-center justify-center">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-8 h-8 brightness-0 invert"
          loading="lazy"
        />
      </div>
      
      <span className="tech-name text-white text-sm font-medium text-center">
        {tech.name}
      </span>
      
      <div className={`w-10 h-0.5 bg-gradient-to-r ${getAccentColor(category)} rounded-full mt-1`} />
    </motion.div>
  );
};

const TechSection = ({ title, techs, category }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {techs.map((tech, index) => (
        <TechCard key={index} tech={tech} category={category} />
      ))}
    </div>
  </div>
);

const TechStack = () => {
  const techStacks = {
    languages: {
      title: "Programming Languages",
      techs: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
        { name: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-plain.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" }
      ]
    },
    embedded: {
      title: "Embedded & Hardware",
      techs: [
        { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-plain.svg" },
        { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-plain.svg" },
        { name: "ESP8266", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E" },
        { name: "Verilog HDL", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E" },
        { name: "Xilinx Vivado", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E" }
      ]
    },
    ai: {
      title: "AI / ML & Data Science",
      techs: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-plain.svg" },
        { name: "scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/white" },
        { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-plain.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-plain.svg" }
      ]
    },
    llm: {
      title: "LLM / Prompt Engineering",
      techs: [
        { name: "LangChain", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E" },
        { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/white" },
        { name: "Generative AI", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E" },
        { name: "RAG", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'/%3E%3C/svg%3E" }
      ]
    },
    tools: {
      title: "Tools & Platforms",
      techs: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-plain.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" }
      ]
    },
    iot: {
      title: "IoT & Cloud",
      techs: [
        { name: "ThingSpeak", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z'/%3E%3C/svg%3E" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
        { name: "ESP8266 WiFi", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z'/%3E%3C/svg%3E" }
      ]
    }
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-zinc-800 px-4 py-2 rounded-full text-primary backdrop-blur-sm mb-4">
            <HiCode className="w-5 h-5" />
            <span className="text-sm font-medium">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies & Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I use to build innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {Object.entries(techStacks).map(([key, section]) => (
            <TechSection
              key={key}
              title={section.title}
              techs={section.techs}
              category={key}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;