import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeroImage } from "../../assets/images";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState("light");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", theme === "light");
    document.documentElement.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {!isMobile ? (
        <section className="relative w-full h-screen flex items-center justify-center px-4 md:px-10 overflow-hidden">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="z-10 max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-color)] tracking-tight leading-snug">
                Hi, I'm Chibuike Vans
              </h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-xl md:text-3xl font-medium text-[var(--secondary-color)] mt-4 tracking-tight"
              >
                <TypeAnimation
                  sequence={[
                    "Software Technician.",
                    2000,
                    "Web Developer.",
                    2000,
                    "Web Designer.",
                    2000,
                    "Tech Enthusiast.",
                    2000,
                    "Scalable Solution Builder.",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg mt-6 text-gray-600 dark:text-gray-400 leading-snug tracking-tight"
              >
                I design and develop seamless digital experiences that are both{" "}
                <span className="text-[var(--accent-color)] font-medium">beautiful</span> and{" "}
                <span className="text-[var(--accent-color)] font-medium">functional</span>, using cutting-edge technologies and modern design principles.
                <br />
                <span className="text-[var(--accent-color)] font-medium">
                  Innovating the web
                </span>
                , one line and one layout at a time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-8 flex gap-4 flex-wrap"
              >
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-full bg-[var(--secondary-color)] text-white dark:text-black font-semibold hover:bg-opacity-90 transition duration-300"
                >
                  Explore My Innovations
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full border border-[var(--secondary-color)] text-[var(--secondary-color)] font-semibold hover:bg-[var(--secondary-color)] hover:text-white dark:hover:text-black transition duration-300"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 hidden md:block"
            >
              <div className="relative group w-[300px] md:w-[420px] lg:w-[480px]">
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[var(--accent-color)]/10 to-[var(--secondary-color)]/10 blur-lg opacity-50 group-hover:blur-md transition-all duration-500 pointer-events-none"
                  animate={{
                    rotate: [0, 2, -2, 0],
                    scale: [1, 1.03, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src={HeroImage}
                  loading="lazy"
                  alt="Hero"
                  className="rounded-xl object-cover shadow-2xl border border-[var(--accent-color)]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  style={{
                    transform: `translate(${mousePos.x * 0.005}px, ${
                      mousePos.y * 0.005
                    }px)`,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <motion.section
          className="relative w-full h-screen bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="absolute inset-0 z-10 bg-black/40" />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl font-bold tracking-tight leading-snug">
              Hi, I'm Chibuike Vans
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl font-semibold text-[#00F0FF] mt-3 tracking-tight"
            >
              <TypeAnimation
                sequence={[
                  "I'm a Software Technician.",
                  2000,
                  "I'm a Web Developer.",
                  2000,
                  "I'm a Web Designer.",
                  2000,
                  "I build scalable solutions.",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-base text-gray-200 mt-4 leading-snug tracking-tight"
            >
              I design and develop seamless digital experiences that are both{" "}
              <span className="text-[#9D00FF]">beautiful</span> and{" "}
              <span className="text-[#9D00FF]">functional</span>, blending visual creativity with modern technology. <br />
              <span className="text-[#9D00FF] font-semibold">Innovating the web</span>, one layout at a time.
            </motion.p>
          </div>
        </motion.section>
      )}

      <hr className="border-t border-gray-300 dark:border-gray-600 my-10" />
    </>
  );
};

export default HeroSection;
