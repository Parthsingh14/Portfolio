import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import FloatingIcons from "./FloatingIcons";
import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [state, handleSubmit] = useForm("xjkrgebd");

  return (
    <div className="relative overflow-hidden">
      <FloatingIcons />

      <section
        id="contact"
        className="relative flex min-h-screen items-center justify-center px-6 py-24"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[var(--primary)] opacity-10 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[var(--secondary)] opacity-10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Let's Talk
            </span>

            <h2
              className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base text-[var(--text-secondary)] md:text-lg">
              Have an idea, a project, or just want to say hi? I'd love to
              hear from you.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
            {/* Big Intro / CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-2 md:row-span-2"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: "var(--gradient-primary)" }}
              />

              <div className="relative">
                <p className="text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
                  {CONTACT.text}
                </p>

                <div className="mt-10 space-y-4">
                  
                   <a href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/10 p-4 transition hover:border-[var(--primary)]/40 hover:bg-white/5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-lg">
                      ✉️
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                        Email
                      </p>
                      <p className="text-base font-medium text-[var(--text-primary)] md:text-lg">
                        {CONTACT.email}
                      </p>
                    </div>
                  </a>

                  
                   <a href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/10 p-4 transition hover:border-[var(--primary)]/40 hover:bg-white/5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-lg">
                      📞
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                        Phone
                      </p>
                      <p className="text-base font-medium text-[var(--text-primary)] md:text-lg">
                        {CONTACT.phone}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <motion.button
                onClick={() => setShowForm(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-primary)] py-4 font-semibold text-white shadow-lg transition hover:shadow-[0_10px_30px_rgba(124,58,237,0.35)] md:w-auto md:px-10"
              >
                Send a Message
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </motion.button>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Currently Available
                </span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Open for freelance & full-time roles
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Usually respond within 24 hours.
              </p>
            </motion.div>

            {/* Socials Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <h3 className="mb-5 text-sm font-medium uppercase tracking-wide text-[var(--text-secondary)]">
                Find Me Online
              </h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/10 text-2xl text-[var(--text-secondary)] transition hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
              onClick={() => setShowForm(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-[var(--surface)] p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-secondary)] transition hover:bg-white/10 hover:text-[var(--primary)]"
                >
                  ✕
                </button>

                {state.succeeded ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 text-3xl text-emerald-400">
                      ✓
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--primary)]">
                      Message Sent
                    </h3>
                    <p className="mt-2 text-[var(--text-secondary)]">
                      I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-1 text-2xl font-bold text-[var(--text-primary)]">
                      Send Me a Message
                    </h3>
                    <p className="mb-6 text-sm text-[var(--text-secondary)]">
                      Fill out the form below and I'll reply as soon as I can.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--primary)] focus:bg-white/10"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--primary)] focus:bg-white/10"
                      />

                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--primary)] focus:bg-white/10"
                      />

                      <ValidationError
                        prefix="Form"
                        field="message"
                        errors={state.errors}
                      />

                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full rounded-xl bg-[image:var(--gradient-primary)] py-3.5 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                      >
                        {state.submitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Parth Singh. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;