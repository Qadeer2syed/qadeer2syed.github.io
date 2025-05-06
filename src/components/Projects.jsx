// src/components/Projects.jsx
'use client';

import Image from 'next/image';
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
{
    title: "Fingerprint Reconstruction using Diffusion Models",
    image: "/images/diff.jpg",
    tech: ["Python", "Pytorch", "diffusers"],
    description: "Reconstruction of damamged fingerprints using Diffusion models to match original fingerprint pattern. DDPM using U-Net models",
    githubLink: "https://github.com/Qadeer2syed/Fingerprint-Reconstruction-using-Diffusion-Models",
    liveLink: null
    },
  {
    title: "LLM Agent for Disease Diagnosis using RAG",
    image: "/images/doc.jpg",   // put your image in public/images/
    tech: ["ML", "Llama-2", "RAG Framework"],
    description: "Fine-tuned Llama-2 model with RAG framework for differential diagnosis of diseases based on symptoms, medical history, and latest research papers.",
    githubLink: "https://github.com/Qadeer2syed/Medical-Diagnosis-using-RAG-LLM",
    liveLink: null
  },
  {
    title: "Quick-Cart E-commerce",
    image: "/images/quick-cart.jpg",
    tech: ["Springboot", "React", "PostgreSQL"],
    description: "Production-level e-commerce platform with real-time updates, secure payment processing, and personalized product recommendations.",
    githubLink: "https://github.com/Qadeer2syed/Ecommerce-API",
    liveLink: null
  },
  {
    title: "Image generation using Transformers",
    image: "/images/img-gen.jpg",
    tech: ["Python", "PyTorch", "Transformers"],
    description: "Pioneered research to propose novel applications of transformers to generate images. Formulated model on MNIST and Fashion MNIST dataset by varying attention heads and hidden nodes in mode",
    githubLink: "https://github.com/Qadeer2syed/Transformer-image-generation",
    liveLink: null
  },
  {
    title: "Vision Aid for Visually Impaired",
    image: "/images/vision.jpg",
    tech: ["OpenCV", "Python", "Tensorflow"],
    description: "Devised software to capture visual content from videos and translate into text and audio formats.",
    githubLink: "https://github.com/Qadeer2syed/Vision-Aid",
    liveLink: null
  },
  {
    
    title: "Fingerprint Matching Using DCNN",
    image: "/images/match.jpg",
    tech: ["Python","OpenCV", "PyTorch"],
    description: "Deep Neural Network trained to identify patterns for a fingerprint recognition system",
    githubLink: "https://github.com/Qadeer2syed/Fingerprint-Matcher-using-DCNN",
    liveLink: null
  },
  {
    title: "Food Calorie Detection using CNN - myHealth",
    image: "/images/cal.jpg",
    tech: ["OpenCV", "Python", "Tensorflow"],
    description: "Invented application to identify food and get its nutritional value from photos.",
    githubLink: "https://github.com/Qadeer2syed/MyHealth1",
    liveLink: null
  },
  {
    title: "Dial-AI",
    image: "/images/dial.jpg",
    tech: ["Fetch-AI", "Vapi", "Twilio"],
    description: "Automation of 911 Emergency Call System with AI Agents",
    githubLink: "https://github.com/Qadeer2syed/Dial-AI",
    liveLink: null
  },
  {
    title: "Quick-Connect",
    image: "/images/connect.jpg",
    tech: ["Sprinboot", "PostgreSQL"],
    description: "Developed a fully-functional social networking platform with domain-restricted access within university to eliminate anonymity",
    githubLink: null,
    liveLink: null
  }
];

export default function Projects() {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };
    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    };
  
    return (
      <section id="projects" className="container mx-auto px-6 md:px-20 py-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-heading text-3xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>
  
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="card overflow-hidden flex flex-col"
            >
              {/* Slightly larger square image with rounded corners */}
              <div className="relative w-60 h-60 md:w-72 md:h-72 mx-auto mt-4 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
  
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-bright">
                  {project.title}
                </h3>
                <p className="text-muted mb-4 flex-1">{project.description}</p>
  
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
  
                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-800/50">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-bright transition-colors duration-200 flex items-center gap-1"
                  >
                    <FiGithub size={18} /> Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-bright transition-colors duration-200 flex items-center gap-1"
                    >
                      <FiExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Qadeer2syed"
            target="https://github.com/Qadeer2syed"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2"
          >
            <FiGithub /> View More on GitHub
          </a>
        </motion.div>
      </section>
    );
  }
