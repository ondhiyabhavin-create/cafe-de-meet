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

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gold/30 transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year Bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                    <span className="font-accent font-bold text-brown-dark text-sm">
                      {milestone.year}
                    </span>
                  </div>
                </div>

                {/* Story Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-white dark:bg-brown-dark/50 rounded-2xl p-6 shadow-lg">
                    <h3 className="font-heading text-2xl font-semibold text-brown-primary dark:text-gold mb-3">
                      {milestone.title}
                    </h3>
                    <p className="font-body text-brown-light dark:text-cornsilk/80">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
