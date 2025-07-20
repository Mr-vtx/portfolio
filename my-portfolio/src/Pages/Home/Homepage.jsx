import React, { useState } from "react";
import HeroSection from "../../components/ui/hero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaServer,
  FaCogs,
  FaEthereum,
  FaDatabase,
} from "react-icons/fa";

import SkillsSection from "../../components/ui/skills";
import Experience from "../../components/ui/experience";
import Testimonials from "../../components/ui/testimonials";
import Projects from "../../components/ui/projects";
import About from "../About/About";
import Blog from "../../components/ui/blog";

function Homepage() {
  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  const [selectedTech, setSelectedTech] = useState("MERN Stack");

  const techDetails = {
    "MERN Stack": {
      description:
        "Expertise in MongoDB, Express.js, React, and Node.js for full-stack web applications.",
      icon: <FaCode className="text-blue-500 text-3xl" />,
    },
    "Software Technician": {
      description:
        "Experience in troubleshooting, maintaining, and optimizing software applications.",
      icon: <FaCogs className="text-green-500 text-3xl" />,
    },
    "Backend Development": {
      description:
        "Skilled in building robust APIs and server-side applications.",
      icon: <FaServer className="text-purple-500 text-3xl" />,
    },
    "Web3 Development": {
      description:
        "Experience in developing decentralized applications and smart contracts.",
      icon: <FaEthereum className="text-yellow-500 text-3xl" />,
    },
    "Database Management": {
      description:
        "Proficiency in SQL and NoSQL databases like MongoDB and PostgreSQL.",
      icon: <FaDatabase className="text-orange-500 text-3xl" />,
    },
  };

  return (
    <div className="mt-16">
      <div>
        <HeroSection />
      </div>
      <section id="about" className="w-full px-6 md:px-20 py-16 text-center">
        <About />
      </section>
      <section ref={techRef} className="w-full px-6 md:px-20 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={techInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-text-color mb-6"
        >
          Tech Stack
        </motion.h2>
        <div className="flex justify-center gap-4 md:gap-6 mb-6 flex-wrap">
          {Object.keys(techDetails).map((tech, index) => (
            <motion.button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-6 py-2 rounded-md text-lg font-semibold flex items-center gap-2 transition-all cursor-pointer relative backdrop-blur-md shadow-md border border-white/20 
              ${
                selectedTech === tech
                  ? "bg-[var(--accent-color)] text-black dark:text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={techInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {techDetails[tech].icon} {tech}
            </motion.button>
          ))}
        </div>
        <motion.div
          key={selectedTech}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center gap-4"
        >
          {techDetails[selectedTech].icon}{" "}
          {techDetails[selectedTech].description}
        </motion.div>
      </section>
      <section className="w-full px-6 md:px-20 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-[var(--text-color)] mb-6"
        >
          Skills
        </motion.h2>
        <SkillsSection />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-[var(--text-color)] mb-6"
        >
          Resume
        </motion.h2>
        <Experience />
      </section>
      <section className="w-full px-6 md:px-20 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-[var(--text-color)] mb-6"
        ></motion.h2>
        <Testimonials />
        <Blog />
      </section>
    </div>
  );
}

export default Homepage;
