// src/components/About.jsx
'use client';

import { motion } from "framer-motion";
import { AnimatedArcHighlight } from './AnimatedArcHighlight';

export default function About() {
  const skills = {
    "Languages": ["Java", "Python", "C++", "JavaScript", "SQL", "R-Programming", "PostgreSQL", "MySQL"],
    "Frameworks": ["Spring", "ReactJS", "Flask", "REST API", "PyTorch", "OpenCV", "Keras", "TensorFlow", "NodeJS", "Scikit-learn", "NextJS"],
    "Other": ["Docker", "Hadoop", "AWS", "Git", "Hibernate"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="container mx-auto px-6 md:px-20 py-10">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading text-3xl font-bold mb-12"
      >
        About Me
      </motion.h2>

      {/* Two-column layout: text on left, skills on right */}
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        {/* Left: About text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-8">
            <div className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-accent to-transparent rounded-full" />
            <p className="text-lg leading-relaxed text-muted">
              I'm a <AnimatedArcHighlight color="var(--highlight-mint)" delay={0.3}>full-stack software engineer</AnimatedArcHighlight> with expertise in building scalable,
              <AnimatedArcHighlight color="var(--highlight-rose)" delay={1.0}>enterprise-grade APIs</AnimatedArcHighlight> paired with dynamic, user-centric front-end interfaces.
            </p>
            <p className="text-lg leading-relaxed text-muted mt-4">
              My passion lies in <AnimatedArcHighlight color="var(--highlight-cyan)" delay={1.5}>Machine Learning and Generative AI</AnimatedArcHighlight>,
              where I specialize in creating intelligent, data-driven solutions that
              <AnimatedArcHighlight color="var(--highlight-amber)" delay={2.0}>solve real-world problems</AnimatedArcHighlight> and enhance user experiences.
            </p>
            <p className="text-lg leading-relaxed text-muted mt-4">
              As the founder of <AnimatedArcHighlight color="var(--highlight-purple)" delay={2.5}>SwyffAI</AnimatedArcHighlight>,
              I'm building a web platform that brings AI assistance to any website, featuring smart content selection,
              YouTube integration with timestamp navigation, and multi-model AI support (GPT-4, Claude, Gemini) through an intelligent Chrome extension.
            </p>
          </div>
        </motion.div>

        {/* Right: Skills badges styled like coursework */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-bright">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-surface rounded-full text-xs font-medium border border-gray-800/50"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
