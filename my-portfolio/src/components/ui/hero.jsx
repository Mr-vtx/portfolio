import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeroImage } from "../../assets/images";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState("light");
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust based on your mobile breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
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
      {/* Desktop View */}
      {!isMobile && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-screen flex items-center justify-between overflow-hidden px-10 md:px-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left z-10 max-w-lg"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm Chibuike Vans
            </h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl md:text-4xl font-semibold text-[#00F0FF] dark:text-[#005f77] mt-4"
            >
              <TypeAnimation
                sequence={[
                  "I'm a Software Technician.",
                  2000,
                  "I'm a Web Developer.",
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
              className="text-lg text-gray-600 dark:text-gray-400 mt-6"
            >
              Crafting seamless digital experiences with cutting-edge
              technologies.
              <br />{" "}
              <span className="text-[#9D00FF] dark:text-[#7d0077]">
                Innovating
              </span>{" "}
              the web, one line of code at a time.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 hidden md:block"
          >
            <motion.img
              src={HeroImage}
              loading="lazy"
              alt="Hero"
              className="w-[300px] md:w-[400px] lg:w-[500px] rounded-xl object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                transform: `translate(${mousePos.x * 0.01}px, ${
                  mousePos.y * 0.01
                }px)`,
              }}
            />
          </motion.div>
        </motion.section>
      )}

      {/* Mobile View */}
      {isMobile && (
        <motion.section
          className="relative w-full h-screen bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${HeroImage})`,
          }}
        >
          {/* Black Overlay with RGBA color for opacity control */}
          <div
            className="absolute inset-0 z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          ></div>

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl font-bold">Hi, I'm Chibuike Vans</h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl font-semibold text-[#00F0FF] mt-4"
            >
              <TypeAnimation
                sequence={[
                  "I'm a Software Technician.",
                  2000,
                  "I'm a Web Developer.",
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
              className="text-lg text-gray-200 mt-6"
            >
              Crafting seamless digital experiences with cutting-edge
              technologies.
              <br /> <span className="text-[#9D00FF]">Innovating</span> the web,
              one line of code at a time.
            </motion.p>
          </div>
        </motion.section>
      )}

      <hr className="border-t border-gray-300 dark:border-gray-600 my-10" />
    </>
  );
};

export default HeroSection;
