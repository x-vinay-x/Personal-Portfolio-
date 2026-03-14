"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiOutlineCursorClick } from 'react-icons/hi';
import Matter from 'matter-js';

const flatTechs = [
  { name: "C", icon: "https://cdn.simpleicons.org/c/white", category: "languages" },
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/white", category: "languages" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/white", category: "languages" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/white", category: "languages" },
  { name: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg", category: "languages" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/white", category: "languages" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/white", category: "languages" },
  { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/white", category: "embedded" },
  { name: "Raspberry Pi", icon: "https://cdn.simpleicons.org/raspberrypi/white", category: "embedded" },
  { name: "ESP8266", icon: "https://cdn.simpleicons.org/espressif/white", category: "embedded" },
  { name: "Verilog HDL", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='4' y='4' width='16' height='16' rx='2' ry='2'%3E%3C/rect%3E%3Crect x='9' y='9' width='6' height='6'%3E%3C/rect%3E%3Cline x1='9' y1='1' x2='9' y2='4'%3E%3C/line%3E%3Cline x1='15' y1='1' x2='15' y2='4'%3E%3C/line%3E%3Cline x1='9' y1='20' x2='9' y2='23'%3E%3C/line%3E%3Cline x1='15' y1='20' x2='15' y2='23'%3E%3C/line%3E%3Cline x1='20' y1='9' x2='23' y2='9'%3E%3C/line%3E%3Cline x1='20' y1='14' x2='23' y2='14'%3E%3C/line%3E%3Cline x1='1' y1='9' x2='4' y2='9'%3E%3C/line%3E%3Cline x1='1' y1='14' x2='4' y2='14'%3E%3C/line%3E%3C/svg%3E", category: "embedded" },
  { name: "Xilinx Vivado", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='2' width='20' height='8' rx='2' ry='2'%3E%3C/rect%3E%3Crect x='2' y='14' width='20' height='8' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='6' y1='6' x2='6' y2='6'%3E%3C/line%3E%3Cline x1='6' y1='18' x2='6' y2='18'%3E%3C/line%3E%3C/svg%3E", category: "embedded" },
  { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/white", category: "ai" },
  { name: "scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/white", category: "ai" },
  { name: "Keras", icon: "https://cdn.simpleicons.org/keras/white", category: "ai" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/white", category: "ai" },
  { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/white", category: "ai" },
  { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/white", category: "ai" },
  { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/white", category: "llm" },
  { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/white", category: "llm" },
  { name: "Generative AI", icon: "https://cdn.simpleicons.org/google/white", category: "llm" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/white", category: "tools" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white", category: "tools" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/white", category: "tools" },
  { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/white", category: "tools" }
];

const TechStack = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const itemRefs = useRef([]);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeTechs, setActiveTechs] = useState([]);
  const [isSimulationReady, setIsSimulationReady] = useState(false);

  useEffect(() => {
    if (!sceneRef.current) return;

    const isMobile = window.innerWidth < 768;
    setIsMobileView(isMobile);

    // Filter techs on mobile to save GPU cycles (limit to 18)
    const filteredTechs = isMobile ? flatTechs.slice(0, 18) : flatTechs;
    setActiveTechs(filteredTechs);

    const Engine = Matter.Engine,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    const engine = Engine.create();
    engineRef.current = engine;
    engine.gravity.y = 0.8;

    const containerWidth = sceneRef.current.clientWidth;
    const containerHeight = sceneRef.current.clientHeight;

    const wallOptions = { isStatic: true, render: { visible: false }, friction: 0.5, restitution: 0.2 };
    const wallThickness = 500;

    const ground = Bodies.rectangle(containerWidth / 2, containerHeight + (wallThickness / 2), containerWidth, wallThickness, wallOptions);
    const leftWall = Bodies.rectangle(0 - (wallThickness / 2), containerHeight / 2, wallThickness, containerHeight, wallOptions);
    const rightWall = Bodies.rectangle(containerWidth + (wallThickness / 2), containerHeight / 2, wallThickness, containerHeight, wallOptions);
    const topWall = Bodies.rectangle(containerWidth / 2, 0 - (wallThickness / 2), containerWidth, wallThickness, wallOptions);

    Composite.add(engine.world, [ground, leftWall, rightWall, topWall]);

    const baseSize = isMobile ? 30 : 40;

    const physicsBodies = filteredTechs.map((tech, i) => {
      const x = Math.random() * (containerWidth - baseSize * 2) + baseSize;
      const y = Math.random() * (containerHeight / 2) + baseSize;
      const sizeMultiplier = Math.random() > 0.8 ? 1.2 : (Math.random() < 0.2 ? 0.8 : 1);
      const currentSize = baseSize * sizeMultiplier;
      const isRect = Math.random() > 0.8;

      const bodyOptions = {
        restitution: 0.4,
        frictionAir: 0.02,
        friction: 0.1,
        density: 0.005,
        render: { visible: false }
      };

      const body = isRect
        ? Bodies.rectangle(x, y, currentSize * 2, currentSize * 2, { ...bodyOptions, chamfer: { radius: currentSize * 0.4 } })
        : Bodies.circle(x, y, currentSize, bodyOptions);

      body.plugin = { originalSize: currentSize, isRect };
      return body;
    });

    Composite.add(engine.world, physicsBodies);

    Matter.Events.on(engine, 'afterUpdate', () => {
      physicsBodies.forEach(body => {
        if (body.position.y > containerHeight + 100) {
          Matter.Body.setPosition(body, { x: containerWidth / 2, y: 50 });
          Matter.Body.setVelocity(body, { x: 0, y: 0 });
        }
      });
    });

    const mouse = Mouse.create(sceneRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });

    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    Composite.add(engine.world, mouseConstraint);

    const runner = Runner.create();
    runnerRef.current = runner;

    // Performance Guard: Only run if in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        Runner.run(runner, engine);
      } else {
        Runner.stop(runner);
      }
    }, { threshold: 0.1 });

    observer.observe(sceneRef.current);

    setIsSimulationReady(true);

    // HIGH PERFORMANCE ANIMATION LOOP
    let animationFrameId;
    const updateLoop = () => {
      physicsBodies.forEach((body, idx) => {
        const element = itemRefs.current[idx];
        if (element) {
          const size = body.plugin.originalSize;
          element.style.transform = `translate3d(${body.position.x - size}px, ${body.position.y - size}px, 0) rotate(${body.angle}rad)`;
        }
      });
      animationFrameId = requestAnimationFrame(updateLoop);
    };
    updateLoop();

    const handleResize = () => {
      if (!sceneRef.current) return;
      const newWidth = sceneRef.current.clientWidth;
      const newHeight = sceneRef.current.clientHeight;
      Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + (wallThickness / 2) });
      Matter.Body.setPosition(rightWall, { x: newWidth + (wallThickness / 2), y: newHeight / 2 });
      Matter.Body.setPosition(leftWall, { x: 0 - (wallThickness / 2), y: newHeight / 2 });
      Matter.Body.setPosition(topWall, { x: newWidth / 2, y: 0 - (wallThickness / 2) });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      Runner.stop(runner);
      Engine.clear(engine);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getGlowColor = (category, isMobile) => {
    if (isMobile) {
      switch (category) {
        case 'languages': return 'border-blue-500/40 bg-blue-900/40';
        case 'embedded': return 'border-emerald-500/40 bg-emerald-900/40';
        case 'ai': return 'border-purple-500/40 bg-purple-900/40';
        default: return 'border-zinc-500/40 bg-zinc-900/40';
      }
    }

    switch (category) {
      case 'languages': return 'shadow-[0_0_15px_rgba(59,130,246,0.3)] border-blue-500/60 bg-blue-500/10';
      case 'embedded': return 'shadow-[0_0_15px_rgba(16,185,129,0.3)] border-emerald-500/60 bg-emerald-500/10';
      case 'ai': return 'shadow-[0_0_15px_rgba(168,85,247,0.3)] border-purple-500/60 bg-purple-500/10';
      case 'llm': return 'shadow-[0_0_15px_rgba(249,115,22,0.3)] border-orange-500/60 bg-orange-500/10';
      case 'tools': return 'shadow-[0_0_15px_rgba(99,102,241,0.3)] border-indigo-500/60 bg-indigo-500/10';
      default: return 'shadow-[0_0_15px_rgba(113,113,122,0.3)] border-zinc-500/60 bg-zinc-500/10';
    }
  };

  return (
    <section className="py-16 relative w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-zinc-800 px-4 py-2 rounded-full text-primary backdrop-blur-sm mb-4">
            <HiCode className="w-5 h-5" />
            <span className="text-sm font-medium">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies & Tools
          </h2>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm max-w-2xl mx-auto border border-primary/20 bg-primary/5 py-2 px-4 rounded-full">
            <HiOutlineCursorClick className="w-5 h-5 text-primary animate-pulse" />
            <p className="font-medium text-white/80">Play with the tech icons below!</p>
          </div>
        </motion.div>

        <div className="w-full flex justify-center">
          <div
            ref={sceneRef}
            className="w-full max-w-5xl h-[350px] md:h-[400px] bg-gradient-to-b from-[#0d0d0d] to-[#141414] border border-[#2a2a2a] rounded-[32px] md:rounded-[48px] overflow-hidden relative shadow-2xl shadow-black/50 cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'none' }}
          >
            {/* Physics Engine positions these absolute elements */}
            {/* Render icons once; positions updated via direct DOM access */}
            {isSimulationReady && activeTechs.map((tech, idx) => {
              const isRect = ((idx * 0.1337) % 1) > 0.8;
              const sizeMult = ((idx * 0.4242) % 1) > 0.8 ? 1.2 : (((idx * 0.4242) % 1) < 0.2 ? 0.8 : 1);
              const baseS = isMobileView ? 30 : 40;
              const size = baseS * sizeMult;

              return (
                <div
                  key={idx}
                  ref={el => itemRefs.current[idx] = el}
                  className={`absolute top-0 left-0 border flex items-center justify-center select-none ${isMobileView ? 'backdrop-blur-none' : 'backdrop-blur-md'} ${getGlowColor(tech.category, isMobileView)} ${isRect ? 'rounded-xl' : 'rounded-full'} will-change-transform shadow-sm`}
                  style={{
                    width: size * 2,
                    height: size * 2,
                    position: 'absolute',
                  }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    draggable={false}
                    className="w-[50%] h-[50%] brightness-0 invert pointer-events-none select-none opacity-80"
                    loading="lazy"
                  />
                </div>
              );
            })}

            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-zinc-900/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;