// src/app/page.js
'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUp } from "react-icons/fi";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";
import useActiveSection from "../hooks/useActiveSection";
import './globals.css';

export default function Page() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionIds = ["home", "about", "experience", "education", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home",      href: "#home"      },
    { name: "About",     href: "#about"     },
    { name: "Experience",href: "#experience"},
    { name: "Education", href: "#education" },
    { name: "Projects",  href: "#projects"  },
    { name: "Contact",   href: "#contact"   },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-primary min-h-screen">
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-primary/80 border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-display text-xl font-bold gradient-text">
            QS
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activeSection === item.href.slice(1) ? 'text-accent' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Qadeerullah_Syed_Resume.pdf"
              download="Qadeerullah_Syed_Resume.pdf"
              className="btn btn-outline text-sm py-2"
            >
              Resume
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-muted hover:text-bright"
            onClick={() => setIsNavOpen(open => !open)}
          >
            {isNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-primary/90 backdrop-blur-md border-t border-gray-800/50"
            >
              <div className="flex flex-col px-6 py-4 space-y-4">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsNavOpen(false)}
                    className={`nav-link block ${activeSection === item.href.slice(1) ? 'text-accent' : ''}`}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/Qadeerullah_Syed_Resume.pdf"
                  download="Qadeerullah_Syed_Resume.pdf"
                  onClick={() => setIsNavOpen(false)}
                  className="btn btn-outline text-sm py-2 w-fit"
                >
                  Resume
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">
        <div id="home"><Hero /></div>
        <div className="container mx-auto px-6 space-y-16">
          <About />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </div>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-surface/30 border-t border-gray-800/50 mt-20 py-8"
      >
        <div className="container mx-auto px-6 text-center">
          <Copyright />
          <p className="text-sm text-muted mt-2">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </motion.footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-accent/80 hover:bg-accent p-3 rounded-full shadow-lg z-50"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
