import { motion } from "framer-motion";
import { TbSchool, TbCertificate, TbBriefcase, TbUsers } from "react-icons/tb";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { EXPERIENCE } from "../data/portfolioData";

const ICONS = {
  education: TbSchool,
  training: TbCertificate,
  work: TbBriefcase,
  community: TbUsers,
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-surface/30">
      <SectionHeading
        eyebrow="Background"
        title="Experience & Education"
        subtitle="The academic and practical path that shaped how I build AI systems."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/60 to-transparent md:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((item, index) => {
            const Icon = ICONS[item.type] || TbBriefcase;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon node */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-bg border-2 border-primary text-accent shadow-glow-primary">
                    <Icon className="text-lg" />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 md:w-[calc(50%-2.5rem)] ${
                    isEven ? "md:pr-4" : "md:pl-4 md:ml-auto"
                  }`}
                >
                  <Card
                    hoverGlow={isEven ? "primary" : "accent"}
                    className="p-6"
                  >
                    <span className="inline-block font-mono text-xs text-accent mb-2 tracking-wide">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary-light font-medium mb-1">
                      {item.org}
                    </p>
                    <p className="text-xs text-text-muted mb-3">
                      {item.location}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <ul className="space-y-1.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-text-muted"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
