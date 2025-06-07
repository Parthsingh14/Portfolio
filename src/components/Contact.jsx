import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import FloatingIcons from "./FloatingIcons";
import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [state, handleSubmit] = useForm("xjkrgebd"); // Replace with your Formspree ID

  return (
    <div className="relative overflow-hidden">
      <FloatingIcons />
      <section id="contact" className="relative min-h-screen py-20 flex items-center justify-center">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lime-300/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-lime-300/5 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6"
              style={{
                background: "linear-gradient(90deg, rgba(163,230,53,1) 0%, rgba(210,255,137,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let's Connect
            </motion.h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-lime-300 to-transparent mx-auto w-1/2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Main content */}
          <div className="relative z-10">
            {/* Contact card */}
            <motion.div
              className="bg-gray-900/80 backdrop-blur-sm border border-lime-300/20 rounded-2xl p-8 md:p-12 shadow-2xl shadow-lime-300/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.p
                    className="text-xl md:text-2xl leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {CONTACT.text}
                  </motion.p>
                  
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 rounded-full bg-lime-300/10 border border-lime-300/30 flex items-center justify-center group-hover:bg-lime-300/20 transition-all">
                        <svg className="w-6 h-6 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <a 
                        href={`mailto:${CONTACT.email}`} 
                        className="text-xl md:text-2xl text-lime-100 hover:text-lime-300 transition-colors"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 rounded-full bg-lime-300/10 border border-lime-300/30 flex items-center justify-center group-hover:bg-lime-300/20 transition-all">
                        <svg className="w-6 h-6 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <a 
                        href={`tel:${CONTACT.phone.replace(/\D/g, '')}`} 
                        className="text-xl md:text-2xl text-lime-100 hover:text-lime-300 transition-colors"
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </motion.div>
                </div>
                
                {/* Social links */}
                <motion.div
                  className="flex flex-col items-center space-y-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl text-lime-300 font-medium">Find Me Online</h3>
                  <div className="flex space-x-6">
                    {SOCIAL_MEDIA_LINKS.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-gray-400 hover:text-lime-300 transition-colors relative group"
                        whileHover={{ y: -5 }}
                      >
                        {link.icon}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-300 group-hover:w-full transition-all duration-300"></span>
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* Direct Message Button */}
                  <motion.button
                    onClick={() => setShowForm(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-lime-300 to-lime-400 text-black font-bold text-lg shadow-lg hover:shadow-lime-300/30 transition-all"
                  >
                    Send Direct Message
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Animated Contact Form */}
            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                  onClick={() => setShowForm(false)}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    className="bg-gray-900 border border-lime-300/30 rounded-xl p-8 max-w-md w-full relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button 
                      onClick={() => setShowForm(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-lime-300 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>

                    {state.succeeded ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-8"
                      >
                        <div className="w-16 h-16 bg-lime-300/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-10 h-10 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-xl text-lime-300">Message Sent!</p>
                        <p className="text-gray-300 mt-2">I'll get back to you soon.</p>
                        <button
                          onClick={() => setShowForm(false)}
                          className="mt-6 px-6 py-2 rounded-full bg-lime-300 text-black font-medium hover:bg-lime-400 transition-colors"
                        >
                          Close
                        </button>
                      </motion.div>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold text-lime-300 mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                              <input
                                id="name"
                                type="text" 
                                name="name"
                                required
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-lime-300 focus:outline-none"
                              />
                              <ValidationError 
                                prefix="Name" 
                                field="name"
                                errors={state.errors}
                                className="text-red-400 text-sm mt-1"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                              <input
                                id="email"
                                type="email" 
                                name="email"
                                required
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-lime-300 focus:outline-none"
                              />
                              <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                                className="text-red-400 text-sm mt-1"
                              />
                            </div>
                            <div>
                              <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                              <textarea
                                id="message"
                                name="message"
                                required
                                rows="5"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-lime-300 focus:outline-none"
                              />
                              <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                                className="text-red-400 text-sm mt-1"
                              />
                            </div>
                            <motion.button
                              type="submit"
                              disabled={state.submitting}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-gradient-to-r from-lime-300 to-lime-400 text-black font-bold py-3 rounded-lg flex items-center justify-center"
                            >
                              {state.submitting ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Sending...
                                </>
                              ) : (
                                'Send Message'
                              )}
                            </motion.button>
                          </div>
                        </form>
                      </>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Footer */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 py-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Parth Singh. All rights reserved.</p>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;