import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import FloatingIcons from "./FloatingIcons";
import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [state, handleSubmit] =
    useForm("xjkrgebd");

  return (
    <div className="relative overflow-hidden">
      <FloatingIcons />

      <section
        id="contact"
        className="relative flex min-h-screen items-center justify-center px-6 py-20"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-[var(--primary)] opacity-10 blur-3xl" />

          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[var(--secondary)] opacity-10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <motion.h2
              className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl"
              style={{
                background:
                  "linear-gradient(135deg, #7C3AED, #3B82F6)",
                WebkitBackgroundClip:
                  "text",
                WebkitTextFillColor:
                  "transparent",
              }}
            >
              {`connectWith("Parth")`}
            </motion.h2>

            <motion.div
              className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Main Card */}
          <motion.div
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <div className="grid items-center gap-14 md:grid-cols-2">
              {/* Left Side */}
              <div>
                <motion.p
                  className="mb-8 text-lg leading-9 text-[var(--text-secondary)] md:text-xl"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                >
                  {CONTACT.text}
                </motion.p>

                {/* Email */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    ✉️
                  </div>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-lg text-[var(--text-primary)] transition hover:text-[var(--primary)] md:text-xl"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    📞
                  </div>

                  <a
                    href={`tel:${CONTACT.phone.replace(
                      /\D/g,
                      ""
                    )}`}
                    className="text-lg text-[var(--text-primary)] transition hover:text-[var(--primary)] md:text-xl"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              {/* Right Side */}
              <motion.div
                className="flex flex-col items-center"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                viewport={{ once: true }}
              >
                {/* SSH Badge */}
                <div className="mb-8 rounded-xl border border-white/10 bg-[var(--surface)] px-5 py-3 font-mono text-sm text-[var(--text-secondary)] backdrop-blur-md md:text-base">
                  <span className="text-[var(--primary)]">
                    ssh
                  </span>{" "}
                  <span className="text-[var(--text-primary)]">
                    parth_singh
                  </span>
                  <span className="text-[var(--secondary)]">
                    @socials
                  </span>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6">
                  {SOCIAL_MEDIA_LINKS.map(
                    (link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          y: -6,
                          scale: 1.1,
                        }}
                        className="text-4xl text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
                      >
                        {link.icon}
                      </motion.a>
                    )
                  )}
                </div>

                {/* Message Button */}
                <motion.button
                  onClick={() =>
                    setShowForm(true)
                  }
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="mt-10 rounded-full bg-[image:var(--gradient-primary)] px-8 py-3 font-semibold text-white shadow-lg transition hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)]"
                >
                  Send Direct Message
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
              onClick={() =>
                setShowForm(false)
              }
            >
              <motion.div
                initial={{
                  scale: 0.95,
                }}
                animate={{
                  scale: 1,
                }}
                exit={{
                  scale: 0.95,
                }}
                className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-[var(--surface)] p-8"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >
                <button
                  onClick={() =>
                    setShowForm(false)
                  }
                  className="absolute right-5 top-5 text-[var(--text-secondary)] hover:text-[var(--primary)]"
                >
                  ✕
                </button>

                {state.succeeded ? (
                  <div className="py-8 text-center">
                    <h3 className="text-2xl font-semibold text-[var(--primary)]">
                      Message Sent
                    </h3>

                    <p className="mt-2 text-[var(--text-secondary)]">
                      I’ll get back to you
                      soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
                      Send Me a Message
                    </h3>

                    <form
                      onSubmit={
                        handleSubmit
                      }
                      className="space-y-5"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--primary)]"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--primary)]"
                      />

                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--primary)]"
                      />

                      <ValidationError
                        prefix="Form"
                        field="message"
                        errors={
                          state.errors
                        }
                      />

                      <button
                        type="submit"
                        disabled={
                          state.submitting
                        }
                        className="w-full rounded-xl bg-[image:var(--gradient-primary)] py-3 font-semibold text-white transition hover:opacity-90"
                      >
                        {state.submitting
                          ? "Sending..."
                          : "Send Message"}
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
            © {new Date().getFullYear()} Parth
            Singh. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;