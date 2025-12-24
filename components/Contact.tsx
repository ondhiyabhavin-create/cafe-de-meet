'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', message: '' })
      }, 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-brown-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brown-primary dark:text-gold mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border-4 border-gold"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576894!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

          {/* Contact Info & Form */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-brown-dark/50 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brown-primary dark:text-gold mb-2">
                      Address
                    </h3>
                    <p className="font-body text-brown-light dark:text-cornsilk/80">
                      123 Coffee Street<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 dark:bg-brown-dark/50 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brown-primary dark:text-gold mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="font-body text-brown-light dark:text-cornsilk/80 hover:text-gold transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 dark:bg-brown-dark/50 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brown-primary dark:text-gold mb-2">
                      Hours
                    </h3>
                    <p className="font-body text-brown-light dark:text-cornsilk/80">
                      Mon-Fri: 7am - 8pm<br />
                      Sat-Sun: 8am - 9pm
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-accent font-semibold rounded-full">
                      Open Now
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-brown-dark/50 rounded-3xl p-10 shadow-lg"
            >
              <h3 className="font-heading text-2xl font-semibold text-brown-primary dark:text-gold mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-6 py-4 rounded-2xl border-2 ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-brown-primary/20 focus:border-gold focus:ring-4 focus:ring-gold/20'
                    } bg-white dark:bg-brown-dark text-brown-text dark:text-cornsilk placeholder-brown-light/50 focus:outline-none transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 font-body">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-6 py-4 rounded-2xl border-2 ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-brown-primary/20 focus:border-gold focus:ring-4 focus:ring-gold/20'
                    } bg-white dark:bg-brown-dark text-brown-text dark:text-cornsilk placeholder-brown-light/50 focus:outline-none transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 font-body">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone (Optional)"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-brown-primary/20 focus:border-gold focus:ring-4 focus:ring-gold/20 bg-white dark:bg-brown-dark text-brown-text dark:text-cornsilk placeholder-brown-light/50 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className={`w-full px-6 py-4 rounded-2xl border-2 ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-brown-primary/20 focus:border-gold focus:ring-4 focus:ring-gold/20'
                    } bg-white dark:bg-brown-dark text-brown-text dark:text-cornsilk placeholder-brown-light/50 focus:outline-none transition-all resize-vertical`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 font-body">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-brown-primary dark:bg-gold text-white dark:text-brown-dark rounded-2xl font-accent font-semibold text-lg hover:bg-brown-secondary dark:hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

