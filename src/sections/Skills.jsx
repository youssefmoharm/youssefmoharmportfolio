import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { SKILLS, CERTIFICATIONS } from "../data/portfolioData";

const LEVEL_CONFIG = {
  Expert: {
    label: "Expert",
    color: "bg-gradient-to-r from-primary to-accent",
    badge: "bg-accent/10 text-accent border-accent/30",
    width: "100%",
  },
  Proficient: {
    label: "Proficient",
    color: "bg-gradient-to-r from-primary to-primary-light",
    badge: "bg-primary/10 text-primary-light border-primary/30",
    width: "75%",
  },
  Familiar: {
    label: "Familiar",
    color: "bg-gradient-to-r from-white/20 to-white/30",
    badge: "bg-white/5 text-text-muted border-white/10",
    width: "50%",
  },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(SKILLS[0].category);

  const activeGroup = SKILLS.find((g) => g.category === activeTab);

  return (
    <SectionWrapper id="skills" className="bg-surface/30">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I use to build ML systems"
        subtitle="From data manipulation to model training to the interfaces people actually use."
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {SKILLS.map((group) => (
          <motion.button
            key={group.category}
            onClick={() => setActiveTab(group.category)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
              activeTab === group.category
                ? "text-white"
                : "text-text-muted hover:text-text-primary glass border border-white/10"
            }`}
          >
            {activeTab === group.category && (
              <motion.span
                layoutId="skill-tab-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{group.category}</span>
          </motion.button>
        ))}
      </div>

      {/* Skills panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Card
            hoverGlow="primary"
            className="p-6 md:p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent mb-6">
              {activeGroup?.category}
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {activeGroup?.items.map((skill) => {
                const Icon = skill.icon;
                const cfg = LEVEL_CONFIG[skill.level] || LEVEL_CONFIG.Familiar;
                return (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 text-primary-light text-sm">
                          <Icon />
                        </span>
                        <span className="text-sm text-text-primary font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${cfg.badge}`}>
                        {cfg.label}
                      </span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: cfg.width }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className={`h-full rounded-full ${cfg.color}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-xl3 border border-white/[0.06] p-6 md:p-8 mt-8 max-w-3xl mx-auto"
      >
        <h3 className="text-sm font-mono uppercase tracking-wider text-accent mb-5">
          Certifications
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {CERTIFICATIONS.map((cert) => (
            <span
              key={cert.id}
              className="text-sm text-text-muted bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 hover:border-accent/30 hover:text-text-primary transition-colors duration-200"
            >
              {cert.title}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
