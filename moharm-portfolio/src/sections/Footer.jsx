import { motion } from "framer-motion";
import { SOCIAL_LINKS, NAV_LOGO } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-bg">
      <div className="max-w-7xl mx-auto section-padding py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-lg font-bold text-text-primary"
        >
          <span className="text-gradient">{"<"}</span>
          {NAV_LOGO}
          <span className="text-gradient">{" />"}</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4"
        >
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 rounded-xl2 bg-white/[0.03] border border-white/10 text-text-muted hover:text-accent hover:border-accent/40 hover:shadow-glow-accent transition-all duration-300"
              >
                <Icon className="text-base" />
              </a>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs text-text-muted text-center md:text-right"
        >
          © {year} Youssef Moharm. Built with React, Tailwind &amp; Framer Motion.
        </motion.p>
      </div>
    </footer>
  );
}
