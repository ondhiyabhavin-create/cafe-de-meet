'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

export default function Hero() {
  const words = "365 The Travel Cafe".split(" ")
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    setMounted(true)
    // Generate particles only on client
    const particleData = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
    }))
    setParticles(particleData)
  }, [])

  return (
    <section ref={ref} id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Gradient */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/videos/2675511-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />
        
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(139,69,19,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Floating particles - only render on client */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-gold/30 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            y: [particle.y, particle.y + (Math.random() * 200 - 100), particle.y],
            x: [particle.x, particle.x + (Math.random() * 200 - 100), particle.x],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span className="font-accent text-sm text-white">Travel & Taste Experience</span>
          </motion.div>

          {/* Headline with character animation */}
          <div className="space-y-4">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    delay: i * 0.15, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block mr-3 sm:mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle with typewriter effect */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 font-light tracking-wide"
            >
              Journey Through Flavors, One Cup at a Time
            </motion.p>
          </div>

          {/* Buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4"
          >
            <motion.a
              href="#menu"
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: "0 20px 40px rgba(255,215,0,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-brown-dark rounded-2xl font-accent text-base sm:text-lg font-bold overflow-hidden group shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FFA500] to-[#FFD700]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Explore Menu</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                backgroundColor: "rgba(255,255,255,0.95)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/90 text-white rounded-2xl font-accent text-base sm:text-lg font-semibold backdrop-blur-sm bg-white/10 relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
              <span className="relative z-10 group-hover:text-brown-primary transition-colors">
                Book a Table
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/80 text-xs font-accent uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
