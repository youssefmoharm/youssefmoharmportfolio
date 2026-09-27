import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { PROJECTS } from "../data/portfolioData";

const FILTERS = ["All", "ML", "NLP", "Algorithms", "Web"];

const PROJECT_CATEGORIES = {
  "misinformation":         ["ML", "NLP"],
  "fraud-detection":        ["ML"],
  "image-enhancer":         ["ML", "Web"],
  "smart-city":             ["Algorithms"],
  "medical-diagnosis":      ["ML", "Web"],
  "text-to-sql-platform":   ["ML", "NLP"],
  "nerve":                 ["Web"],
  "examly":                ["Web"],
  "image-enhancement-web":  ["Web"],
  "computer-network":       ["Web"],
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = PROJECTS.filter((p) =>
    activeFilter === "All" ? true : PROJECT_CATEGORIES[p.id]?.includes(activeFilter)
  );

  return (
    <section id="projects" className="relative w-full py-20 md:py-28 px-6 md:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          subtitle="Selected projects across AI, data, algorithms, and software."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeFilter === filter
                  ? "text-white"
                  : "text-text-muted hover:text-text-primary glass border border-white/10"
              }`}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
          >
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <p className="col-span-full text-center text-text-muted py-16">
                No projects in this category yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-center">
          <Button
            href="https://github.com/youssefmoharm?tab=repositories"
            variant="secondary"
            icon={FaGithub}
          >
            View all projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
