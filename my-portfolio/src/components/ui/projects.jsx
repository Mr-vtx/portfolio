import React, { useState } from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { Prj1, Prj2, Prj3, Prj4 } from "../../assets/images";

const projectCategories = ["All", "Web Dev", "App", "Web3"];

const projects = [
  {
    title: "Portfolio Website",
    category: "Web Dev",
    image: Prj4,
    liveLink: "https://pinnaclebuild.vercel.app/",
    githubLink: "https://github.com/chibuikewis/pinnacle",
  },
  {
    title: "E-commerce Store",
    category: "Web Dev",
    image: Prj1,
    liveLink: "https://vans-mern-ecommerce.onrender.com",
    githubLink: "https://github.com/chibuikewis/vans-mern-ecommerce",
  },
  {
    title: "Crypto Tracker",
    category: "Web3",
    image: Prj2,
    liveLink: "https://yourcrypto.com",
    githubLink: "https://github.com/yourgithub/crypto-tracker",
  },
  {
    title: "Finance App",
    category: "App",
    image: Prj3,
    liveLink: "https://yourapp.com",
    githubLink: "https://github.com/yourgithub/finance-app",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto mt-24 py-5 p-6">
      <h2 className="text-3xl font-bold text-center text-neon-cyan mb-6">
        Portfolio
      </h2>
      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 font-semibold rounded-md transition-all border-2 border-transparent ${
              activeCategory === category
                ? "border-neon-cyan text-neon-cyan"
                : "text-gray-400 hover:text-neon-cyan"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer bg-charcoal-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-52 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-opacity-10 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl bg-opacity-20 p-3 rounded-full transition-all hover:bg-opacity-10"
              >
                <FaEye />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl bg-opacity-20 p-3 rounded-full transition-all hover:bg-opacity-10"
              >
                <FaGithub />
              </a>
            </div>
            <h3 className="text-lg font-semibold text-center text-neon-cyan mt-4">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
