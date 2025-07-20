import React from "react";
import { AboutMeImage } from "../../assets/images";
import { useInView } from "react-intersection-observer";
import { BriefcaseBusiness, Cake,  Languages, MapPin, Phone } from "lucide-react";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";

function About() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={aboutRef}
      className="w-full px-4 sm:px-6 md:px-24 py-16 md:py-24 text-center"
      id="about"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 px-2"
      >
        I'm a passionate software developer with expertise in building modern
        web applications and mobile technologies. With a keen interest in
        learning, I focus on creating smooth, efficient, and seamless user
        experiences and scalable solutions that combine performance with
        simplicity to deliver real value.
      </motion.p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        <motion.img
          src={AboutMeImage}
          alt="About Me"
          loading="lazy"
          className="w-full max-w-xs sm:max-w-sm md:w-80 h-auto object-cover rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-left text-sm sm:text-base w-full max-w-2xl p-4 sm:p-6 rounded-lg shadow-md"
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--text-color)",
          }}
        >
          <div className="flex items-center gap-2">
            <Cake className="w-5 h-5 text-[var(--accent-color)]" />
            <strong>Birthday:</strong>
            <span className="ml-2">Feb 18</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[var(--accent-color)]" />
            <strong>City:</strong>
            <span className="ml-2">Enugu, Nigeria</span>
          </div>

          <div className="flex items-center gap-2">
            <TfiEmail className="text-[20px] text-[var(--accent-color)]" />
            <strong>Email:</strong>
            <a
              href="mailto:chibuikeejiheri34@gmail.com"
              className="ml-2 text-[var(--secondary-color)] hover:underline text-sm break-all"
            >
              chibuike@mail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="w-5 h-5 text-[var(--accent-color)]" />
            <strong>Freelance:</strong>
            <span className="ml-2">Available</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[var(--accent-color)]" />
            <strong>Phone:</strong>
            <a
              href="tel:+2349065320183"
              className="ml-2 text-[var(--secondary-color)] hover:underline text-sm"
            >
              +234 906-5320-183
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base">
            <Languages className="w-5 h-5 text-[var(--accent-color)]" />
            <strong>Languages:</strong>
            <span>English - Fluent</span>
            <span className="hidden sm:inline">|</span>
            <span>Igbo - Proficient</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
