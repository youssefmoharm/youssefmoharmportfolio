import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import FormField from "../components/FormField";
import { SOCIAL_LINKS } from "../data/portfolioData";

// ─── EmailJS config ────────────────────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service and note the Service ID
// 3. Create an Email Template and note the Template ID
// 4. Copy your Public Key from Account > API Keys
// Replace the three placeholders below with your actual values.
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
// ──────────────────────────────────────────────────────────────────────────────

const initialValues = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const formRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const errors = validate(values);
  const hasErrors = Object.keys(errors).length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;

    // If EmailJS is not configured yet, fall back to mailto
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      const mailto = `mailto:youssefmoharm74@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(values.name)}&body=${encodeURIComponent(values.message)}%0A%0AFrom: ${encodeURIComponent(values.email)}`;
      window.location.href = mailto;
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          to_name: "Youssef",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setValues(initialValues);
      setTouched({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitError("Something went wrong. Please try emailing me directly at youssefmoharm74@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's build something"
        subtitle="Have a role, project, or idea in mind? I'd love to hear about it."
      />

      <div className="grid md:grid-cols-5 gap-10 items-start">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 flex flex-col gap-6"
        >
          <p className="text-text-muted leading-relaxed">
            Whether you're hiring for an AI/ML role, exploring a
            collaboration, or just want to talk about a project — my inbox is
            open. I usually reply within a day or two.
          </p>

          <div className="flex flex-col gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 glass rounded-xl2 px-4 py-3 border-white/10 hover:border-accent/40 hover:shadow-glow-accent transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl2 bg-white/5 text-accent text-base group-hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </span>
                  <span className="text-sm font-medium text-text-primary">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <Card className="p-6 md:p-8" hoverGlow="primary">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                    className="text-5xl text-accent"
                  >
                    <FaCheckCircle />
                  </motion.div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Message sent!
                  </h3>
                  <p className="text-text-muted text-sm max-w-sm">
                    Thanks for reaching out — I'll get back to you as soon as I can.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <FormField
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                    touched={touched.name}
                    placeholder="Your full name"
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                    placeholder="you@example.com"
                  />
                  <FormField
                    label="Message"
                    name="message"
                    as="textarea"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.message}
                    touched={touched.message}
                    placeholder="Tell me a bit about the role or project..."
                  />

                  {submitError && (
                    <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl2 px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl2 bg-gradient-to-r from-primary to-accent px-6 py-3.5 font-semibold text-white shadow-glow-primary hover:shadow-glow-primary-lg transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                      />
                    ) : (
                      <FaPaperPlane />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
