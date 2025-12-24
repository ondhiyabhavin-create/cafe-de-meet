'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const milestones = [
  {
    year: '2015',
    title: 'The Beginning',
    description: 'Cafe De Meet opened its doors with a vision to create a community space where people could connect over great coffee.',
  },
  {
    year: '2017',
    title: 'Expansion',
    description: 'We expanded our menu to include artisanal pastries and introduced our signature blend that customers love.',
  },
  {
    year: '2020',
    title: 'Recognition',
    description: 'Awarded "Best Local Cafe" by the city council, recognizing our commitment to quality and community.',
  },
  {
    year: '2024',
    title: 'Today',
    description: 'Continuing to serve our community with passion, quality, and the warm hospitality that defines us.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-brown-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
              alt="Cafe founder"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-primary dark:text-gold mb-6">
              Our Story
            </h2>
            <p className="font-body text-lg text-brown-light dark:text-cornsilk/80 leading-relaxed mb-6">
              What started as a small dream in 2015 has grown into a beloved community hub. 
              We believe that coffee is more than just a beverage—it&apos;s a catalyst for connection, 
              creativity, and conversation.
            </p>
            <p className="font-body text-lg text-brown-light dark:text-cornsilk/80 leading-relaxed">
              Every cup we serve is crafted with care, using only the finest beans sourced from 
              ethical farms around the world. Our pastries are baked fresh daily, and our space 
              is designed to make everyone feel at home.
            </p>
          </motion.div>
        </div>

        {/* Modern Timeline - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-brown-dark/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-brown-dark/30">
                {/* Year Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    <span className="font-accent font-bold text-brown-dark text-sm relative z-10">
                      {milestone.year}
                    </span>
                  </motion.div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#FFD700]/60 via-[#FFA500]/40 to-transparent" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-brown-primary dark:text-gold mb-3">
                  {milestone.title}
                </h3>
                <p className="font-body text-brown-light dark:text-cornsilk/80 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
