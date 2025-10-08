// src/components/Hero.jsx
'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiArrowDown } from "react-icons/fi";
import { AnimatedArcHighlight } from './AnimatedArcHighlight';

// Slide URLs from /public/images
const slides = ["/images/profile.jpeg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 10000);
    return () => clearInterval(iv);
  }, []);

  const iconLinks = [
    { icon: FiMail,     url: "mailto:qadeer2syed@gmail.com", label: "Email" },
    { icon: FiGithub,   url: "https://github.com/Qadeer2syed",           label: "GitHub" },
    { icon: FiLinkedin, url: "https://www.linkedin.com/in/qadeerullahsyed/",         label: "LinkedIn" },
  ];

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden px-6">
      
      {/* Left: Text (≈66%) */}
      <div className="w-full md:w-2/3 relative z-10 py-12">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left max-w-lg mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-accent/10 border border-accent/30 rounded-full text-accent"
          >
            Hello, I'm
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            >
            {/*
                First name letters
            */}
            {"Qadeerullah".split("").map((char, i) => (
                <motion.span
                key={`first-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.03 }}
                className="inline-block"
                >
                {char}
                </motion.span>
            ))}
            <br />
            {/*
                Last name letters
            */}
            {"Syed".split("").map((char, i) => (
                <motion.span
                key={`last-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + ("Qadeerullah".length + i) * 0.03 }}
                className="inline-block"
                >
                {char}
                </motion.span>
            ))}
            </motion.h1>

          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl mb-10 text-muted"
          >
            <AnimatedArcHighlight color="var(--highlight-yellow)" delay={1.0}>Full-Stack Engineer</AnimatedArcHighlight> <span className="text-accent">|</span> <AnimatedArcHighlight color="var(--highlight-rose)" delay={1.5}> ML & Generative AI Specialist</AnimatedArcHighlight>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center md:justify-start gap-6 mb-12"
          >
            {iconLinks.map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                className="text-muted hover:text-accent transition-colors duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                title={label}
                target={label !== "Email" && label !== "Phone" ? "_blank" : undefined}
                rel={label !== "Email" && label !== "Phone" ? "noopener noreferrer" : undefined}
              >
                <span className="block p-3 rounded-full bg-surface/80 border border-gray-800/50 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                  <Icon size={20} />
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-16"
          >
            <a href="#projects" className="btn btn-primary font-semibold">View My Work</a>
            <a href="#contact"  className="btn btn-outline font-semibold">Get In Touch</a>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.5, duration: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.2
          }}
          className="absolute bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2 md:translate-x-0 text-muted hover:text-bright z-10"
          aria-label="Scroll down"
        >
          <FiArrowDown size={24} />
        </motion.button>
      </div>

      {/* Right: Photo Slider (≈33%) */}
      <div className="w-full md:w-1/3 flex items-center justify-center py-12">
        <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-xl shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[current]})` }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
