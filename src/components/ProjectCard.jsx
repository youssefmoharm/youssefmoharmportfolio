import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaShareAlt, FaCheck } from "react-icons/fa";
import Card from "./Card";
import Tag from "./Tag";
import Button from "./Button";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Unique gradient cover per project
const COVERS = {
  "misinformation":        "from-red-500/20 via-rose-500/10 to-transparent",
  "fraud-detection":       "from-purple-500/20 via-violet-500/10 to-transparent",
  "image-enhancer":        "from-teal-500/20 via-cyan-500/10 to-transparent",
  "smart-city":            "from-emerald-500/20 via-green-500/10 to-transparent",
  "medical-diagnosis":     "from-rose-500/20 via-pink-500/10 to-transparent",
  "text-to-sql-platform":  "from-cyan-500/20 via-teal-500/10 to-transparent",
  "nerve":                 "from-fuchsia-500/20 via-pink-500/10 to-transparent",
  "examly":                "from-indigo-500/20 via-blue-500/10 to-transparent",
  "image-enhancement-web": "from-teal-500/20 via-green-500/10 to-transparent",
  "computer-network":      "from-slate-500/20 via-gray-500/10 to-transparent",
};

const COVER_ICONS = {
  "misinformation":        "📰",
  "fraud-detection":       "🔍",
  "image-enhancer":        "🏥",
  "smart-city":            "🏙️",
  "medical-diagnosis":     "🧠",
  "text-to-sql-platform":  "🗃️",
  "nerve":                 "🛍️",
  "examly":                "📝",
  "image-enhancement-web": "🖼️",
  "computer-network":      "🌐",
};

export default function ProjectCard({ project }) {
  const glow = project.accent === "accent" ? "accent" : "primary";
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#projects`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Card
      variants={cardVariants}
      hoverGlow={glow}
      className="flex flex-col h-full overflow-hidden"
    >
      {/* Cover banner */}
      {project.cover ? (
        <div className="relative h-36 w-full overflow-hidden border-b border-white/10 bg-black/20">
          <img
            src={project.cover}
            alt={project.coverAlt || `${project.title} cover`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute right-4 top-4 flex items-center gap-2 z-10">
            <button
              onClick={handleShare}
              title="Copy link"
              className="flex items-center justify-center w-8 h-8 rounded-xl2 bg-black/25 border border-white/10 text-white/80 hover:text-accent hover:border-accent/40 transition-all duration-200 backdrop-blur-sm"
            >
              {copied ? <FaCheck className="text-xs text-accent" /> : <FaShareAlt className="text-xs" />}
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`relative h-24 w-full bg-gradient-to-br ${COVERS[project.id] || "from-primary/20 to-transparent"} flex items-center justify-between px-6`}
        >
          <span className="text-4xl select-none">{COVER_ICONS[project.id] || "✨"}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Copy link"
              className="flex items-center justify-center w-8 h-8 rounded-xl2 bg-black/20 border border-white/10 text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
            >
              {copied ? <FaCheck className="text-xs text-accent" /> : <FaShareAlt className="text-xs" />}
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-text-primary leading-snug mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-muted leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-5">
          {project.highlights.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-text-muted">
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  glow === "accent" ? "bg-accent" : "bg-primary"
                }`}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {/* Impact */}
        <div className="mb-6 rounded-xl2 bg-white/[0.03] border border-white/[0.06] p-4">
          <p className="text-xs font-mono uppercase tracking-wider text-accent mb-1.5">
            Impact
          </p>
          <p className="text-sm text-text-muted leading-relaxed">{project.impact}</p>
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-3">
          {project.github && (
            <Button href={project.github} variant="secondary" icon={FaGithub} className="flex-1">
              View Code
            </Button>
          )}
          {project.demo && (
            <Button href={project.demo} variant="primary" icon={FaExternalLinkAlt} className="flex-1">
              Visit Website
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
