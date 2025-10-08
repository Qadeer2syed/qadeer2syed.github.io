// src/components/Experience.jsx
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    title: "Founder",
    company: "SwyffAI",
    timeline: "Oct 2024 - Present",
    points: [
      "Founded and developed an AI-powered web platform providing intelligent assistance across any website through a Chrome extension",
      "Built a scalable Next.js application with Supabase authentication, credit management system, and multi-model AI integration (GPT-4, Claude, Gemini)",
      "Implemented smart content selection, YouTube video analysis with timestamp navigation, and context-aware chat functionality",
      "Engineered RESTful APIs for AI processing, user management, and real-time content analysis using React 19 and Tailwind CSS"
    ]
  },
  {
    title: "Instructional Student Assistant",
    company: "San Jose State University",
    timeline: "Aug 2024 - Jan 2025",
    points: [
      "Facilitated student learning through tutoring, lectures and mentorship for DBMS (CS-157A) course",
      "Provided full-time teaching support and managed course materials for 60+ students"
    ]
  },
  {
    title: "Software Engineer - Full-Time",
    company: "Deloitte",
    timeline: "Jan 2023 - Jun 2023",
    points: [
      "Streamlined backend development and API integration for Fortune 500 financial institution",
      "Designed and deployed workflow for 12+ APIs, increasing efficiency by 15%",
      "Enhanced backend security protocols to reduce vulnerability risks"
    ]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };
  const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };

  return (
    <section id="experience" className="container mx-auto px-6 md:px-20 py-10">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
        className="section-heading text-3xl font-bold mb-12"
      >
        Experience
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 space-y-8"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.title}
            variants={itemVariants}
            className="relative pl-8 md:pl-12 border-l-2 border-accent hover:border-accent/80 transition-colors duration-300"
          >
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />
            <div className="card p-6 md:p-8 ml-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-bright italic">{exp.title}</h3>
                <span className="inline-block px-4 py-1 mt-2 italic md:mt-0 text-sm font-medium bg-accent/10 border border-accent/30 rounded-full text-accent">
                  {exp.timeline}
                </span>
              </div>
              <p className="text-lg text-muted mb-6 font-bold italic">{exp.company}</p>
              <ul className="space-y-3">
                {exp.points.map((pt) => (
                  <li key={pt} className="text-muted flex items-start italic">
                    <span className="mr-2 mt-1.5 block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
