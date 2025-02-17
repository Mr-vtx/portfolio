import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-primary-color text-text-color py-6 text-center">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Social Icons with Animation */}
        <div className="flex space-x-6">
          {[
            {
              icon: FaLinkedin,
              link: "https://www.linkedin.com/in/chibuike-w-a1b951301",
            },
            {
              icon: FaInstagram,
              link: "https://www.instagram.com/evans_wis?igsh=MTUxZzliNTR1MjJiZg==",
            },
            { icon: FaGithub, link: "https://github.com/chibuikewis" },
          ].map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Slight shrink on click
              transition={{ type: "spring", stiffness: 200 }}
              className="text-secondary-color text-2xl hover:text-[var(--accent-color)] transition duration-300"
            >
              <Icon className="text-[var(--accent-color)]" />
            </motion.a>
          ))}
        </div>

        {/* Footer Text */}
        <motion.p
          className="text-sm opacity-80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Chibuike Vans. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;
