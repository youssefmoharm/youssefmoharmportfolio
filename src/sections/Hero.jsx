import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";
import { FaRocket, FaEnvelope, FaDownload } from "react-icons/fa";
import AnimatedBackground from "../components/AnimatedBackground";
import Button from "../components/Button";
import { HERO_ROLES } from "../data/portfolioData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function TypewriterText({ texts, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800 }) {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex, texts, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span>
      {displayed}
      <span className="animate-blink text-accent">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      <AnimatedBackground />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-5xl mx-auto text-center section-padding flex flex-col items-center"
      >
        {/* Eyebrow badge */}
        <motion.div
          variants={itemVariants}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-mono text-accent border-accent/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to AI/ML Engineering Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-text-primary mb-4"
        >
          Youssef Moharm
        </motion.h1>

        {/* Typewriter title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-3xl font-semibold text-gradient mb-6 min-h-[2rem] md:min-h-[2.5rem]"
        >
          <TypewriterText texts={HERO_ROLES} />
        </motion.h2>

        {/* Intro */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-text-muted text-base md:text-lg leading-relaxed mb-10"
        >
          I design and build machine learning systems — from data pipelines
          and model training to deployable, production-minded interfaces. My
          work spans classical ML, deep learning, applied NLP, and graph
          algorithms, with a focus on shipping things that actually work, not
          just notebooks that run once.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="#projects" variant="primary" icon={FaRocket}>
            View Projects
          </Button>
          <Button href="#contact" variant="secondary" icon={FaEnvelope}>
            Contact Me
          </Button>
          <Button
            href="/Youssef_Moharm_CV.pdf"
            variant="ghost"
            icon={FaDownload}
            className="text-text-muted hover:text-accent border border-white/10 hover:border-accent/40 rounded-xl2 px-5 py-3 transition-colors duration-300"
          >
            Download CV
          </Button>
        </motion.div>

        {/* Floating scroll cue */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2 text-text-muted"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono tracking-widest uppercase">
              Scroll
            </span>
            <HiOutlineArrowDown className="text-lg" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
