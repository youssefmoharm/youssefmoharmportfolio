import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500,  label: "Datasets Refined",     suffix: "+" },
  { value: 17,   label: "Projects Shipped",      suffix: "+" },
  { value: 92,   label: "NLP Chatbot Accuracy",  suffix: "%" },
  { value: 40,   label: "DB Latency Reduced",    suffix: "%" },
  { value: 150,  label: "Students Reached",      suffix: "+" },
  { value: 500,  label: "Hours ML Training",     suffix: "+" },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const duration = 1600;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative w-full py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-gradient font-mono">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-text-muted leading-snug">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
