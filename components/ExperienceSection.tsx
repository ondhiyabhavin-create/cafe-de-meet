'use client'

import { motion } from 'framer-motion'
import { Coffee, Globe, Users, Sparkles } from 'lucide-react'
import Image from 'next/image'

const experiences = [
  {
    icon: Coffee,
    title: 'Coffee Tasting Journey',
    description: 'Join our weekly coffee tasting sessions and explore flavors from different regions around the world.',
    gradient: 'from-brown-primary to-brown-secondary',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80',
  },
  {
    icon: Globe,
    title: 'Virtual Travel Experience',
    description: 'Experience the culture and stories behind each coffee origin through our immersive storytelling sessions.',
    gradient: 'from-gold to-yellow-400',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
  },
  {
    icon: Users,
    title: 'Traveler Meetups',
    description: 'Connect with fellow travelers, digital nomads, and adventure seekers in our community events.',
    gradient: 'from-brown-secondary to-brown-primary',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
  },
  {
    icon: Sparkles,
    title: 'Special Events',
    description: 'Monthly themed events celebrating different countries, their coffee culture, and traditions.',
    gradient: 'from-gold to-brown-primary',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-brown-dark dark:via-brown-dark/90 dark:to-brown-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-primary dark:text-gold mb-4">
            Unique Experiences
          </h2>
          <p className="font-body text-lg text-brown-light dark:text-cornsilk/80 max-w-2xl mx-auto">
            More than just coffee - discover events, workshops, and community gatherings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                rotateY: 3,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-brown-dark/50 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Animated Background Image */}
              <motion.div 
                className="absolute inset-0 opacity-20"
                whileHover={{ opacity: 0.3, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${experience.gradient === 'from-brown-primary to-brown-secondary' ? 'from-[#8B4513] to-[#D2691E]' : experience.gradient === 'from-gold to-yellow-400' ? 'from-[#FFD700] to-[#FFA500]' : experience.gradient === 'from-brown-secondary to-brown-primary' ? 'from-[#D2691E] to-[#8B4513]' : 'from-[#FFD700] to-[#8B4513]'} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10 p-8 lg:p-10">
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${experience.gradient === 'from-brown-primary to-brown-secondary' ? 'from-[#8B4513] to-[#D2691E]' : experience.gradient === 'from-gold to-yellow-400' ? 'from-[#FFD700] to-[#FFA500]' : experience.gradient === 'from-brown-secondary to-brown-primary' ? 'from-[#D2691E] to-[#8B4513]' : 'from-[#FFD700] to-[#8B4513]'} rounded-2xl mb-6 shadow-lg relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
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
                  <experience.icon className="w-8 h-8 text-white relative z-10" />
                </motion.div>
                <motion.h3 
                  className="font-heading text-2xl lg:text-3xl font-bold text-brown-primary dark:text-gold mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring" }}
                >
                  {experience.title}
                </motion.h3>
                <p className="font-body text-base lg:text-lg text-brown-light dark:text-cornsilk/80 leading-relaxed mb-6">
                  {experience.description}
                </p>
                <motion.button
                  whileHover={{ 
                    scale: 1.1,
                    y: -3,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 bg-gradient-to-r ${experience.gradient === 'from-brown-primary to-brown-secondary' ? 'from-[#8B4513] to-[#D2691E]' : experience.gradient === 'from-gold to-yellow-400' ? 'from-[#FFD700] to-[#FFA500]' : experience.gradient === 'from-brown-secondary to-brown-primary' ? 'from-[#D2691E] to-[#8B4513]' : 'from-[#FFD700] to-[#8B4513]'} text-white rounded-xl font-accent font-semibold overflow-hidden group/btn`}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Learn More</span>
                </motion.button>
              </div>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%", skewX: -20 }}
                whileHover={{ x: "200%", transition: { duration: 0.8 } }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

