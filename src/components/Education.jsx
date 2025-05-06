// src/components/Education.jsx
import { motion } from "framer-motion";

const education = [
  {
    degree: "Masters of Science, Computer Science",
    university: "San Jose State University",
    timeline: " Aug 2023 - May 2025",
    coursework: ["Web Development", "Android Development", "AI/ML", "Big Data"]
  },
  {
    degree: "Bachelor of Science, Computer Science",
    university: "Osmania University",
    timeline: " Jul 2018 - Jun 2022",
    coursework: ["Data Structures", "DBMS", "Distributed Systems", "Machine Learning"]
  }
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };
  const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };

  return (
    <section id="education" className="container mx-auto px-6 md:px-20 py-10">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading text-3xl font-bold mb-12"
      >
        Education
      </motion.h2>

      {/* Timeline entries */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 space-y-8"
      >
        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            variants={itemVariants}
            className="relative pl-8 md:pl-12 border-l-2 border-accent hover:border-accent/80 transition-colors duration-300"
          >
            {/* Dot */}
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />

            {/* Card */}
            <div className="card p-6 ml-4">
              {/* Header: degree & timeline */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-bright italic">{edu.degree}</h3>
                <span className="inline-block px-4 py-1 mt-2 md:mt-0 italic text-sm font-medium bg-accent/10 border border-accent/30 rounded-full text-accent">
                  {edu.timeline}
                </span>
              </div>

              {/* University */}
              <p className="text-lg text-muted font-semibold mb-6 italic">{edu.university}</p>

              {/* Coursework as badges */}
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-surface italic rounded-full text-xs font-medium border border-gray-800/50"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
