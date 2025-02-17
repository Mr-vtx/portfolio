import React from "react";
import { AboutMeImage } from "../../assets/images";
import { useInView } from "react-intersection-observer";
import { BriefcaseBusiness, Cake, Globe, MapPin, Phone } from "lucide-react";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";

function About() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  return (
    <div>
      <section
        ref={aboutRef}
        className="w-full px-6 md:px-24 py-24 text-center"
        id="about"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-[var(--text-color)] dark:text-[var(--text-color)] mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10"
        >
          I'm a passionate software developer with expertise in building modern
          web applications. I love crafting seamless user experiences and
          scalable solutions that bridge creativity with technology.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <motion.img
            src={AboutMeImage}
            alt="About Me"
            loading="lazy"
            className="w-80 h-80 object-cover rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg p-12 rounded-lg shadow-md w-full max-w-2xl"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--text-color)",
            }}
          >
            <p className="flex items-center gap-4 whitespace-nowrap">
              <Cake className="text-xl text-[var(--accent-color)]" />
              <strong>Birthday:</strong> <span>Feb 18</span>
            </p>
            <p className="flex items-center gap-4 whitespace-nowrap">
              <Globe className="text-xl text-[var(--accent-color)]" />
              <strong>Website:</strong>
              <a
                href="https://www.vans.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--secondary-color)] hover:underline"
              >
                www.vans.com
              </a>
            </p>
            <p className="flex items-center gap-4 whitespace-nowrap">
              <MapPin className="text-xl text-[var(--accent-color)]" />
              <strong>City:</strong> <span>Enugu, Nigeria</span>
            </p>
            <p className="flex items-center gap-4 whitespace-nowrap">
              <TfiEmail className="text-xl text-[var(--accent-color)]" />
              <strong>Email:</strong>
              <a
                href="mailto:chibuikeejiheri34@gmail.com"
                className="text-[var(--secondary-color)] hover:underline"
              >
                chibuike@mail.com
              </a>
            </p>
            <p className="flex items-center gap-4 whitespace-nowrap">
              <BriefcaseBusiness className="text-xl text-[var(--accent-color)]" />
              <strong>Freelance:</strong> <span>Available</span>
            </p>
            <p className="flex items-center gap-4 whitespace-nowrap">
              <Phone className="text-xl text-[var(--accent-color)]" />
              <strong>Phone:</strong>
              <a
                href="tel:+2349065320183"
                className="text-[var(--secondary-color)] hover:underline"
              >
                +234 906-5320-183
              </a>
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-400 mt-12 max-w-3xl mx-auto"
        >
          My journey in software development has been fueled by curiosity and a
          drive to create impactful solutions. I'm always eager to learn, adapt,
          and collaborate on exciting projects that push boundaries.
        </motion.p>
      </section>
    </div>
  );
}

export default About;
