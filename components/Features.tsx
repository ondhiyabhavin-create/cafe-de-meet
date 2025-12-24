'use client'

import { motion } from 'framer-motion'
import { Coffee, Users, Clock, Award } from 'lucide-react'

const stats = [
  {
    icon: Coffee,
    value: '365',
    label: 'Days of Adventure',
    color: 'text-brown-primary',
    bgColor: 'bg-brown-primary/10',
  },
  {
    icon: Users,
    value: '50+',
    label: 'Global Flavors',
    color: 'text-gold',
    bgColor: 'bg-gold/10',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Travel Vibes',
    color: 'text-brown-secondary',
    bgColor: 'bg-brown-secondary/10',
  },
  {
    icon: Award,
    value: '5★',
    label: 'Traveler Rating',
    color: 'text-gold',
    bgColor: 'bg-gold/10',
  },
]

const features = [
  {
    icon: Coffee,
    title: 'Global Coffee Selection',
    description: 'Authentic flavors from 30+ countries, each cup telling a story of its origin and culture.',
    gradient: 'from-brown-primary to-brown-secondary',
  },
  {
    icon: Users,
    title: 'Traveler Community',
    description: 'A hub for digital nomads, travelers, and adventure seekers sharing stories and experiences.',
    gradient: 'from-gold to-yellow-400',
  },
  {
    icon: Award,
    title: '365 Days of Adventure',
    description: 'New flavors and experiences every day, bringing the world to your neighborhood cafe.',
    gradient: 'from-brown-secondary to-brown-primary',
  },
]

export default function Features() {
  return (
    <>
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-brown-dark dark:to-brown-dark/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-2xl mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="font-accent text-sm sm:text-base text-brown-light dark:text-cornsilk/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-brown-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-primary dark:text-gold mb-4">
              Why Travel With Us
            </h2>
            <p className="font-body text-lg text-brown-light dark:text-cornsilk/80 max-w-2xl mx-auto">
              Experience authentic global flavors and a community of travelers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-brown-dark/50 dark:to-brown-dark p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-brown-primary dark:text-gold mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-body text-base lg:text-lg text-brown-light dark:text-cornsilk/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
