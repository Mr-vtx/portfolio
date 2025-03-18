import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, SunMoon, Home, User, Folder, Mail, Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "Home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "About", icon: <User size={18} />, path: "#about" },
    { name: "Projects", icon: <Folder size={18} />, path: "/projects" },
    { name: "Contact", icon: <Mail size={18} />, path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50"
    >
      <div className="flex justify-between items-center py-6 px-6 md:px-32">
        {/* Logo */}
        <motion.div
          href="#home"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[var(--text-color)] text-2xl font-bold"
        >
          <Link to="/">
            Chibuike <span className="text-[var(--accent-color)]">Wisdom</span>.
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base text-[var(--text-color)]">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + index * 0.1,
              }}
              className={`flex items-center gap-2 p-3 rounded-md cursor-pointer transition-all duration-300 hover:bg-[var(--secondary-color)] hover:text-black relative ${
                activeSection === item.name
                  ? "after:content-[''] after:absolute after:w-full after:h-1 after:bg-[var(--futuristic-color)] after:bottom-0 after:left-0"
                  : ""
              }`}
            >
              {item.path.startsWith("#") ? (
                <a
                  href={item.path}
                  className="flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetSection = document.querySelector(item.path);
                    if (targetSection) {
                      targetSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.icon} {item.name}
                </a>
              ) : (
                <Link to={item.path} className="flex items-center gap-2">
                  {item.icon} {item.name}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/chibuike-resume.pdf"
            download
            className={`hidden md:block bg-[var(--accent-color)] ${
              theme === "dark" ? "text-white" : "text-black"
            } px-4 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition-all`}
          >
            Download Resume
          </a>
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--accent-color)] text-black transition-all hover:bg-[var(--secondary-color)]"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <SunMoon size={20} /> : <Moon size={20} />}
          </motion.button>
          <button
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-md bg-[var(--accent-color)] text-black transition-all hover:bg-[var(--secondary-color)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-[var(--primary-color)] shadow-lg flex flex-col items-center justify-center xl:hidden"
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-md bg-[var(--accent-color)] text-black transition-all hover:bg-[var(--secondary-color)]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
            <ul className="flex flex-col gap-8 font-semibold text-xl text-[var(--text-color)]">
              {navItems.map((item) => (
                <li key={item.name} className="flex items-center gap-3">
                  {item.path.startsWith("#") ? (
                    <a
                      href={item.path}
                      className="flex items-center gap-3 hover:text-[var(--accent-color)] transition-all"
                      onClick={(e) => {
                        e.preventDefault();
                        const targetSection = document.querySelector(item.path);
                        if (targetSection) {
                          targetSection.scrollIntoView({ behavior: "smooth" });
                          setMenuOpen(false); 
                        }
                      }}
                    >
                      {item.icon} {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center gap-3 hover:text-[var(--accent-color)] transition-all"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.icon} {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="/chibuike-resume.pdf"
              download
              className={`mt-6 bg-[var(--accent-color)] ${
                theme === "dark" ? "text-white" : "text-black"
              } px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-all`}
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
