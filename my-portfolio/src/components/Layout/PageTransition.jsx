import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Page messages split into two parts for better timing
const pageMessages = {
  home: ["Booting up mainframe...", "Access granted 😊"],
  projects: ["Decrypting blueprints...", "Loading innovations 🔍"],
  blog: ["Syncing neural cache...", "Retrieving data logs 📖"],
  contact: ["Pinging network...", "Establishing secure link 🔗"],
};

const TypewriterEffect = ({ textParts = [], onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    if (!textParts.length) return;

    let i = 0;
    const firstText = textParts[0]; 
    if (!firstText) return; 

    const interval = setInterval(() => {
      if (i < firstText.length) {
        setDisplayText(firstText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowSecondText(true), 600); 
        setTimeout(onComplete, 1500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [textParts, onComplete]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-2xl font-mono"
      style={{
        color: "var(--text-color)",
        backgroundColor: "var(--primary-color)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* First part of the text */}
      <motion.p
        className="text-center text-4xl tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        {displayText}
      </motion.p>

      {/* Second part with delay */}
      {showSecondText && textParts[1] && (
        <motion.p
          className="text-center text-3xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          {textParts[1]}
        </motion.p>
      )}
    </motion.div>
  );
};

function PageTransition({ children, page }) {
  const [showPage, setShowPage] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {!showPage ? (
        <TypewriterEffect
          textParts={pageMessages[page] || ["Loading...", "Please wait..."]}
          onComplete={() => setShowPage(true)}
        />
      ) : (
        children
      )}
    </motion.div>
  );
}

export default PageTransition;
