// src/components/Contact.jsx
'use client';

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

export default function Contact() {
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "qadeer2syed@gmail.com",
      link: "mailto:qadeer2syed@gmail.com",
      delay: 0.1
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "github.com/Qadeer2syed",
      link: "https://github.com/Qadeer2syed",
      delay: 0.2
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/qadeerullahsyed/",
      link: "https://www.linkedin.com/in/qadeerullahsyed/",
      delay: 0.3
    }
  ];

  return (
    <section
      id="contact"
      className="container mx-auto px-6 md:px-20 py-20"
    >
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading text-3xl font-bold mb-4"
      >
        Get in Touch
      </motion.h2>

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg text-muted mb-8"
      >
        Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
      </motion.p>

      {/* Contact info list */}
      <div className="space-y-6">
        {contactInfo.map(({ icon: Icon, label, value, link, delay }) => (
          <motion.a
            key={label}
            href={link}
            target={link.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-muted hover:text-bright"
          >
            <Icon className="text-2xl text-accent" />
            <span className="text-lg">{value}</span>
          </motion.a>
        ))}

        {/* Resume download */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="/Qadeerullah_Syed_Resume.pdf"
            download
            className="inline-flex items-center gap-2 btn btn-outline mt-4"
          >
            <FiDownload size={18} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
