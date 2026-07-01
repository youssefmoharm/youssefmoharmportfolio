import { motion } from "framer-motion";

/**
 * FormField
 * Shared text input / textarea with floating-label style, focus glow,
 * and inline validation error display. Used by the Contact section.
 */
export default function FormField({
  label,
  name,
  type = "text",
  as = "input",
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  rows = 5,
}) {
  const showError = touched && error;
  const Component = as === "textarea" ? "textarea" : "input";

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-sm font-medium text-text-muted"
      >
        {label}
      </label>
      <Component
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows : undefined}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full rounded-xl2 bg-white/[0.03] border px-4 py-3 text-text-primary placeholder:text-text-muted/50 outline-none transition-all duration-300 resize-none focus:bg-white/[0.05] ${
          showError
            ? "border-red-500/60 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
            : "border-white/10 focus:border-accent/50 focus:shadow-glow-accent"
        }`}
      />
      <motion.div
        initial={false}
        animate={{ height: showError ? "auto" : 0, opacity: showError ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="text-xs text-red-400 mt-0.5">{error}</p>
      </motion.div>
    </div>
  );
}
