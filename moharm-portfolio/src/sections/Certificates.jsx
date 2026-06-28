import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbCertificate, TbX, TbDownload, TbFilter } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { CERTIFICATIONS } from "../data/portfolioData";

const CATEGORY_COLORS = {
  "AI / ML":      "text-accent border-accent/30 bg-accent/10",
  "Data Science": "text-primary-light border-primary/30 bg-primary/10",
  "Programming":  "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "Engineering":  "text-orange-400 border-orange-400/30 bg-orange-400/10",
};

const CATEGORY_BG = {
  "AI / ML":      "from-cyan-500/20 via-accent/10",
  "Data Science": "from-primary/20 via-primary/10",
  "Programming":  "from-emerald-500/20 via-emerald-500/10",
  "Engineering":  "from-orange-500/20 via-orange-500/10",
};

const ALL_CATEGORIES = ["All", ...Array.from(new Set(CERTIFICATIONS.map((c) => c.category)))];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Certificates() {
  const [selected, setSelected]     = useState(null);
  const [activeFilter, setFilter]   = useState("All");

  const filtered = activeFilter === "All"
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.category === activeFilter);

  return (
    <SectionWrapper id="certificates">
      <SectionHeading
        eyebrow="Credentials"
        title="Certificates & Courses"
        subtitle={`${CERTIFICATIONS.length} certificates across AI/ML, data science, programming, and engineering.`}
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <TbFilter className="text-text-muted text-lg mr-1" />
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold border transition-all duration-200 ${
              activeFilter === cat
                ? "bg-accent/20 text-accent border-accent/40 shadow-glow-primary"
                : "text-text-muted border-white/10 hover:border-white/20 hover:text-text-primary"
            }`}
          >
            {cat}
            {cat !== "All" && (
              <span className="ml-1.5 opacity-60">
                ({CERTIFICATIONS.filter((c) => c.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((cert, i) => (
            <motion.div
              key={cert.id}
              custom={i}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              layout
            >
              <Card
                hoverGlow={i % 2 === 0 ? "primary" : "accent"}
                className="p-0 flex flex-col cursor-pointer group h-full overflow-hidden"
                onClick={() => setSelected(cert)}
              >
                {/* Top color band */}
                <div
                  className={`relative h-24 w-full bg-gradient-to-br ${
                    CATEGORY_BG[cert.category] || "from-primary/20 via-accent/10"
                  } to-transparent flex items-center justify-center`}
                >
                  <FaAward className="text-5xl text-white/10 group-hover:text-white/20 transition-colors duration-300" />
                  <TbCertificate className="absolute text-3xl text-accent/60 group-hover:text-accent transition-colors duration-300" />
                  <span
                    className={`absolute top-2.5 right-2.5 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border backdrop-blur-sm ${
                      CATEGORY_COLORS[cert.category] || "text-text-muted border-white/10 bg-black/30"
                    }`}
                  >
                    {cert.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-sm font-bold text-text-primary leading-snug group-hover:text-accent transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-text-muted">{cert.issuer}</p>
                  <p className="text-xs font-mono text-accent mt-auto pt-2">{cert.date}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl h-[85vh] bg-surface border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 p-5 border-b border-white/[0.06] flex-shrink-0">
                <div className="flex-1 min-w-0">
                  <span
                    className={`inline-block text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border mb-2 ${
                      CATEGORY_COLORS[selected.category] || "text-text-muted border-white/10 bg-white/5"
                    }`}
                  >
                    {selected.category}
                  </span>
                  <h2 className="text-base font-bold text-text-primary leading-snug truncate">
                    {selected.title}
                  </h2>
                  <p className="text-xs text-text-muted mt-0.5">{selected.issuer} · {selected.date}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Download button */}
                  <a
                    href={selected.file}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold hover:bg-accent/20 transition-all"
                  >
                    <TbDownload className="text-sm" />
                    Download
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-text-muted hover:text-text-primary transition-all"
                    aria-label="Close"
                  >
                    <TbX />
                  </button>
                </div>
              </div>

              {/* PDF embed */}
              <div className="flex-1 min-h-0 bg-black/20">
                <iframe
                  src={`${selected.file}#toolbar=0&navpanes=0`}
                  title={selected.title}
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
