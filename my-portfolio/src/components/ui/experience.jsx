import React from "react";
import { motion } from "framer-motion";
import { educationData, experienceData } from "../../resources";

const Experience = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-12 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Education Section */}
      <div className="w-full md:w-1/2 relative">
        <h2 className="text-xl font-bold mb-4 text-secondary">Education</h2>
        <div className="relative border-l-2 border-accent pl-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative mb-6 pl-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute left-[-25px] top-0 w-4 h-4 bg-[var(--primary-color)] border-2 border-[var(--accent-color)] rounded-full transform translate-x-[-50%] translate-y-[50%]" />
              <h3 className="text-lg font-semibold text-[var(--secondary-color)] text-left">
                {edu.degree}
              </h3>
              <p className="text-sm text-secondary text-left">
                {edu.institution} ({edu.period})
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full md:w-1/2 relative">
        <h2 className="text-xl font-bold mb-4 text-secondary">Experience</h2>
        <div className="relative border-l-2 border-accent pl-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-6 pl-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute left-[-25px] top-0 w-4 h-4 bg-[var(--primary-color)] border-2 border-[var(--accent-color)] rounded-full transform translate-x-[-50%] translate-y-[50%]" />
              <h3 className="text-lg font-semibold text-[var(--secondary-color)] text-left">
                {exp.role}
              </h3>
              <p className="text-sm text-secondary text-left">
                {exp.company} ({exp.period})
              </p>
              <p className="text-sm text-gray-300 text-left">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
