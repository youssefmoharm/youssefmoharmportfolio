import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * SectionWrapper
 * Wraps every page section with consistent id, spacing, max-width,
 * and a fade + slide-up reveal animation triggered on scroll into view.
 */
export default function SectionWrapper({
  id,
  children,
  className = "",
  fullBleed = false,
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={fadeUpVariants}
      className={`relative w-full py-20 md:py-28 section-padding ${className}`}
    >
      <div className={fullBleed ? "" : "max-w-7xl mx-auto"}>{children}</div>
    </motion.section>
  );
}
