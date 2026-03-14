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
  const [domBodies, setDomBodies] = useState([]);
  const [isSimulationReady, setIsSimulationReady] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (!sceneRef.current) return;

    const Engine = Matter.Engine,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    // create engine
    const engine = Engine.create();
    engineRef.current = engine;

    // adjust gravity for a heavier, realistic feel
    engine.gravity.y = 0.8;

    const containerWidth = sceneRef.current.clientWidth;
    const containerHeight = sceneRef.current.clientHeight;

    // Extremely thick boundaries to prevent tunneling at high speeds
    const wallOptions = {
      isStatic: true,
      render: { visible: false },
      friction: 0.5,
      restitution: 0.2 // slightly bouncy walls
    };

    const wallThickness = 500;

    const ground = Bodies.rectangle(containerWidth / 2, containerHeight + (wallThickness / 2), containerWidth, wallThickness, wallOptions);
    const leftWall = Bodies.rectangle(0 - (wallThickness / 2), containerHeight / 2, wallThickness, containerHeight, wallOptions);
    const rightWall = Bodies.rectangle(containerWidth + (wallThickness / 2), containerHeight / 2, wallThickness, containerHeight, wallOptions);
    const topWall = Bodies.rectangle(containerWidth / 2, 0 - (wallThickness / 2), containerWidth, wallThickness, wallOptions);

    Composite.add(engine.world, [ground, leftWall, rightWall, topWall]);

    // Calculate dynamic base radius based on screen size
    const isMobile = window.innerWidth < 768;
    setIsMobileView(isMobile);
    const baseSize = isMobile ? 30 : 40;

    // create tech stack entities with varied shapes and sizes
    const physicsBodies = flatTechs.map((tech, i) => {
      // stagger initial positions inside the box
      const x = Math.random() * (containerWidth - baseSize * 2) + baseSize;
      const y = Math.random() * (containerHeight / 2) + baseSize;

      const sizeMultiplier = Math.random() > 0.8 ? 1.3 : (Math.random() < 0.2 ? 0.8 : 1);
      const currentSize = baseSize * sizeMultiplier;

      // Determine if it should be a circle or rounded rectangle (1 in 4 chance for a square)
      const isRect = Math.random() > 0.75;

      const bodyOptions = {
        restitution: 0.5, // bounciness
        frictionAir: 0.015,
        friction: 0.1,
        density: 0.005 * sizeMultiplier,
        render: { visible: false }
      };

      const body = isRect
        ? Bodies.rectangle(x, y, currentSize * 2, currentSize * 2, { ...bodyOptions, chamfer: { radius: currentSize * 0.4 } })
        : Bodies.circle(x, y, currentSize, bodyOptions);

      // Attach React payload to body
      body.plugin = { tech, originalSize: currentSize, isRect };
      return body;
    });

    Composite.add(engine.world, physicsBodies);

    // Add a safety respawn loop for any bodies that tunnel out of bounds
    Matter.Events.on(engine, 'afterUpdate', () => {
      physicsBodies.forEach(body => {
        if (body.position.y > containerHeight + 100 || body.position.x < -100 || body.position.x > containerWidth + 100) {
          Matter.Body.setPosition(body, {
            x: containerWidth / 2 + (Math.random() * 50 - 25),
            y: containerHeight / 4
          });
          Matter.Body.setVelocity(body, { x: 0, y: 0 });
        }
      });
    });

    // add mouse control
    const mouse = Mouse.create(sceneRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    // Make scrolling work on mobile by avoiding capturing scroll events unless explicitly interacting 
    // We let the mouse module know the scroll element
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    Composite.add(engine.world, mouseConstraint);

    // Run the engine
    const runner = Runner.create();
    Runner.run(runner, engine);
    setIsSimulationReady(true);

    // React Animation Loop
    let animationFrameId;
    const updateDOM = () => {
      setDomBodies(physicsBodies.map(body => ({
        id: body.id,
        x: body.position.x,
        y: body.position.y,
        angle: body.angle,
        tech: body.plugin.tech,
        size: body.plugin.originalSize,
        isRect: body.plugin.isRect
      })));
      animationFrameId = requestAnimationFrame(updateDOM);
    };
    updateDOM();

    // Handle Resize (Update walls)
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
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getGlowColor = (category, isMobile) => {
    // Reduce shadow calculations on mobile Android for better FPS
    const shadowIntensity = isMobile ? '5px' : '15px';
    const bgOpacity = isMobile ? '50' : '10'; // Darker background if blur is removed

    switch (category) {
      case 'languages': return `shadow-[0_0_${shadowIntensity}_rgba(59,130,246,0.5)] border-blue-500/60 bg-blue-500/${bgOpacity}`;
      case 'embedded': return `shadow-[0_0_${shadowIntensity}_rgba(16,185,129,0.5)] border-emerald-500/60 bg-emerald-500/${bgOpacity}`;
      case 'ai': return `shadow-[0_0_${shadowIntensity}_rgba(168,85,247,0.5)] border-purple-500/60 bg-purple-500/${bgOpacity}`;
      case 'llm': return `shadow-[0_0_${shadowIntensity}_rgba(249,115,22,0.5)] border-orange-500/60 bg-orange-500/${bgOpacity}`;
      case 'tools': return `shadow-[0_0_${shadowIntensity}_rgba(99,102,241,0.5)] border-indigo-500/60 bg-indigo-500/${bgOpacity}`;
      default: return `shadow-[0_0_${shadowIntensity}_rgba(113,113,122,0.5)] border-zinc-500/60 bg-zinc-500/${bgOpacity}`;
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
            {isSimulationReady && domBodies.map((body) => (
              <div
                key={body.id}
                title={body.tech.name}
                className={`absolute top-0 left-0 border-2 flex items-center justify-center select-none ${isMobileView ? 'backdrop-blur-none' : 'backdrop-blur-md'} ${getGlowColor(body.tech.category, isMobileView)} ${body.isRect ? 'rounded-2xl' : 'rounded-full'} hover:scale-110 active:scale-95 transition-transform duration-75`}
                style={{
                  width: body.size * 2,
                  height: body.size * 2,
                  transform: `translate(${body.x - body.size}px, ${body.y - body.size}px) rotate(${body.angle}rad)`,
                  willChange: 'transform'
                }}
              >
                <img
                  src={body.tech.icon}
                  alt={body.tech.name}
                  draggable={false}
                  className="w-[55%] h-[55%] brightness-0 invert pointer-events-none select-none opacity-90"
                  loading="lazy"
                />
              </div>
            ))}

            {/* Glass Jar Overlays */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-900/50 to-transparent pointer-events-none rounded-b-[32px] md:rounded-b-[48px]" />
            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;