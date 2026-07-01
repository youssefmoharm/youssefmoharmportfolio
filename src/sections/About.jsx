import { motion } from "framer-motion";
import { TbTargetArrow, TbBulb, TbCode } from "react-icons/tb";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import profileImg from "../assets/profile.jpg";

const pillars = [
  {
    icon: TbBulb,
    title: "How I think",
    text: "I treat every model as part of a system, not a standalone artifact. Before tuning hyperparameters, I want to understand the data, the constraints, and what 'good' actually means for the problem.",
  },
  {
    icon: TbCode,
    title: "How I build",
    text: "I write code meant to be read again — by me in three months, or by a teammate tomorrow. That means clear structure, sensible naming, and evaluation metrics that catch problems early.",
  },
  {
    icon: TbTargetArrow,
    title: "What I'm aiming for",
    text: "A long-term career applying machine learning to real, measurable problems — at a team that cares as much about evaluation rigor and deployment as it does about the latest architecture.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Engineer first, ML practitioner by focus"
        subtitle="A bit about how I got here, and how I approach building AI systems."
      />

      {/* Profile photo + narrative */}
      <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start mb-12">
        {/* Narrative column */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 space-y-5 text-text-muted text-base md:text-[17px] leading-relaxed"
        >
          {/* Photo — visible on mobile at top, hidden on md (shown in sidebar) */}
          <div className="flex md:hidden justify-center mb-6">
            <ProfilePhoto />
          </div>

          <p>
            I'm a Computer Science student at Alamein International University
            in Alexandria, Egypt — graduating in 2026. My coursework spans
            Natural Language Processing, Knowledge-Based Systems, Mathematical
            Optimization, Algorithms, and Web Development. I treat each course
            as a chance to build something that works end-to-end, not just
            complete an assignment.
          </p>
          <p>
            That habit produced real work: a forward-chaining medical diagnosis
            expert system with MYCIN certainty factors, a smart city
            transportation optimizer using Dijkstra, A*, and dynamic
            programming, an NLP preprocessing pipeline for tweet sentiment
            analysis, and a fraud detection pipeline benchmarking four
            classifiers on 300K+ transactions.
          </p>
          <p>
            Alongside university I completed a 6-month AI/ML bootcamp at ITI
            (500+ hours), contributed to Outlier AI refining 500+ ML training
            datasets, and became an AI member and organising committee member
            at IEEE — running workshops for 150+ students and mentoring 20+
            juniors.
          </p>
          <p>
            I'm not chasing buzzwords. I'm trying to become genuinely good at
            the unglamorous parts of ML engineering — data quality, evaluation,
            and shipping something reliable — because that's usually what
            separates a working system from a notebook that only runs once.
          </p>
        </motion.div>

        {/* Photo + pillars column */}
        <div className="md:col-span-2 flex flex-col gap-5">
          {/* Photo — hidden on mobile (shown above), visible md+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex justify-center mb-2"
          >
            <ProfilePhoto />
          </motion.div>

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                hoverGlow={index % 2 === 0 ? "primary" : "accent"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl2 bg-primary/10 border border-primary/20 text-accent text-lg">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-text-primary">{pillar.title}</h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{pillar.text}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ProfilePhoto() {
  return (
    <div className="relative w-48 h-48 md:w-52 md:h-52">
      {/* Rotating gradient ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-primary animate-spin-slow opacity-70 blur-[2px]" />
      {/* Photo */}
      <div className="absolute inset-[3px] rounded-full overflow-hidden border-2 border-bg">
        <img
          src={profileImg}
          alt="Youssef Moharm"
          className="w-full h-full object-cover object-top"
        />
      </div>
      {/* Online badge */}
      <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-bg/80 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-[10px] font-mono text-accent">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping absolute" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent relative" />
        Open to work
      </span>
    </div>
  );
}
