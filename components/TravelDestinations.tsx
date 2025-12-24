'use client'

import { motion } from 'framer-motion'
import { MapPin, Plane } from 'lucide-react'
import Image from 'next/image'

const destinations = [
  {
    country: 'Italy',
    flag: '🇮🇹',
    specialty: 'Espresso & Tiramisu',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80',
  },
  {
    country: 'Ethiopia',
    flag: '🇪🇹',
    specialty: 'Traditional Coffee Ceremony',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80',
  },
  {
    country: 'Colombia',
    flag: '🇨🇴',
    specialty: 'Premium Arabica',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  },
  {
    country: 'Japan',
    flag: '🇯🇵',
    specialty: 'Matcha & Wagashi',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
  },
  {
    country: 'Turkey',
    flag: '🇹🇷',
    specialty: 'Turkish Coffee',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
  },
  {
    country: 'Vietnam',
    flag: '🇻🇳',
    specialty: 'Vietnamese Iced Coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
  },
]

export default function TravelDestinations() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-brown-dark/50 dark:to-brown-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Plane className="w-6 h-6 text-gold" />
            <span className="font-accent text-sm font-semibold text-gold uppercase tracking-wider">Global Journey</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-primary dark:text-gold mb-4">
            Travel Through Taste
          </h2>
          <p className="font-body text-lg text-brown-light dark:text-cornsilk/80 max-w-2xl mx-auto">
            Experience authentic flavors from coffee capitals around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.country}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <motion.div 
                className="absolute inset-0"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={destination.image}
                  alt={destination.country}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.div 
                  className="text-4xl mb-2"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {destination.flag}
                </motion.div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  {destination.country}
                </h3>
                <p className="font-body text-xs text-white/90">
                  {destination.specialty}
                </p>
              </motion.div>
              <motion.div 
                className="absolute top-3 right-3"
                whileHover={{ scale: 1.3, rotate: 15 }}
                transition={{ type: "spring" }}
              >
                <MapPin className="w-5 h-5 text-gold drop-shadow-lg" />
              </motion.div>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
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

