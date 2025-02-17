import React from "react";
import { motion, useInView } from "framer-motion";
import { skillsData } from "../../resources";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillsData[0]).map(([category, skills], index) => (
          <motion.div
            key={index}
            className="p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-accent capitalize mb-3">
              {category}
            </h3>
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-text-color text-sm">{skill.name}</p>
                  <p className="text-text-color text-sm">{skill.level}%</p>
                </div>
                <div className="relative w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden mt-1">
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--accent-color), var(--secondary-color))",
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: index * 0.2 + i * 0.1,
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
