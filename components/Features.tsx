'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Coffee, Users, Clock, Award } from 'lucide-react'
import { useRef } from 'react'

const stats = [
  {
    icon: Coffee,
    value: '365',
    label: 'Days of Adventure',
    color: 'text-brown-primary',
    bgColor: 'bg-brown-primary/10',
    delay: 0,
  },
  {
    icon: Users,
    value: '50+',
    label: 'Global Flavors',
    color: 'text-gold',
    bgColor: 'bg-gold/10',
    delay: 0.1,
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Travel Vibes',
    color: 'text-brown-secondary',
    bgColor: 'bg-brown-secondary/10',
    delay: 0.2,
  },
  {
    icon: Award,
    value: '5★',
    label: 'Traveler Rating',
    color: 'text-gold',
    bgColor: 'bg-gold/10',
    delay: 0.3,
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
  const statsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress: statsProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"]
  })
  
  const statsY = useTransform(statsProgress, [0, 1], [50, -50])
  const statsOpacity = useTransform(statsProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <>
      {/* Stats Section with Parallax */}
      <section ref={statsRef} className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-brown-dark dark:to-brown-dark/90 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(255,215,0,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(139,69,19,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(255,215,0,0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.div 
          style={{ y: statsY, opacity: statsOpacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: stat.delay, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-20 h-20 ${stat.bgColor} rounded-2xl mb-4 relative overflow-hidden`}
                  whileHover={{ scale: 1.15 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-20 transition-opacity"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color} relative z-10`} />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="font-accent text-sm sm:text-base text-brown-light dark:text-cornsilk/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-white dark:bg-brown-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-brown-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -50, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-4"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
            </motion.div>
            <motion.h2 
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-primary dark:text-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Why Travel With Us
            </motion.h2>
            <motion.p 
              className="font-body text-lg text-brown-light dark:text-cornsilk/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Experience authentic global flavors and a community of travelers
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 100, rotateX: -15 }}
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
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-brown-dark/50 dark:to-brown-dark p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Animated gradient background */}
                <motion.div 
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.gradient === 'from-brown-primary to-brown-secondary' ? 'from-[#8B4513] to-[#D2691E]' : feature.gradient === 'from-gold to-yellow-400' ? 'from-[#FFD700] to-[#FFA500]' : 'from-[#D2691E] to-[#8B4513]'} opacity-0 group-hover:opacity-30 rounded-full blur-3xl transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                {/* Icon with rotation */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient === 'from-brown-primary to-brown-secondary' ? 'from-[#8B4513] to-[#D2691E]' : feature.gradient === 'from-gold to-yellow-400' ? 'from-[#FFD700] to-[#FFA500]' : 'from-[#D2691E] to-[#8B4513]'} rounded-2xl mb-6 shadow-lg relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.1,
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
                  <feature.icon className="w-10 h-10 text-white relative z-10" />
                </motion.div>
                
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-brown-primary dark:text-gold mb-4">
                  {feature.title}
                </h3>
                <p className="font-body text-base lg:text-lg text-brown-light dark:text-cornsilk/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
