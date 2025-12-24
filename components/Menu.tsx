'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin } from 'lucide-react'
import Image from 'next/image'
import { menuItems, categories } from '@/data/menuItems'

// Function to get proper image URLs for menu items
const getMenuImageUrl = (name: string, category: string) => {
  // Coffee images
  const coffeeImages = [
    'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop&q=80',
  ]
  
  // Pastry/Food images
  const foodImages = [
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1607958996343-3ffc38c8b0a4?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&q=80',
  ]
  
  // Map specific items to images
  const imageMap: Record<string, string> = {
    'Espresso': coffeeImages[0],
    'Cappuccino': coffeeImages[1],
    'Latte': coffeeImages[2],
    'Americano': coffeeImages[3],
    'Mocha': coffeeImages[4],
    'Caramel Macchiato': coffeeImages[5],
    'Flat White': coffeeImages[6],
    'Cortado': coffeeImages[7],
    'Iced Coffee': coffeeImages[4],
    'Cold Brew': coffeeImages[3],
    'Nitro Cold Brew': coffeeImages[2],
    'Vietnamese Coffee': coffeeImages[1],
    'Turkish Coffee': coffeeImages[0],
    'Affogato': coffeeImages[5],
    'Matcha Latte': coffeeImages[6],
    'Chai Latte': coffeeImages[7],
    'Hot Chocolate': coffeeImages[4],
    'Croissant': foodImages[0],
    'Chocolate Croissant': foodImages[0],
    'Almond Croissant': foodImages[0],
    'Blueberry Muffin': foodImages[1],
    'Banana Bread': foodImages[1],
    'Carrot Cake': foodImages[2],
    'Cheesecake': foodImages[2],
    'Tiramisu': foodImages[2],
    'Brownie': foodImages[3],
    'Cookies (3pc)': foodImages[3],
    'Bagel with Cream Cheese': foodImages[1],
    'Avocado Toast': foodImages[1],
    'Breakfast Sandwich': foodImages[0],
  }
  
  // Return mapped image or fallback based on category
  if (imageMap[name]) {
    return imageMap[name]
  }
  
  // Fallback based on category
  if (category === 'Coffee' || category === 'Tea') {
    return coffeeImages[Math.floor(Math.random() * coffeeImages.length)]
  }
  
  return foodImages[Math.floor(Math.random() * foodImages.length)]
}

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Show only first 9 items for compact view
  const displayedItems = filteredItems.slice(0, 9)

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-brown-dark dark:to-brown-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-gold" />
            <span className="font-accent text-sm font-semibold text-gold uppercase tracking-wider">Global Flavors</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-primary dark:text-gold mb-4">
            Our Menu
          </h2>
          <p className="font-body text-base text-brown-light dark:text-cornsilk/80 max-w-2xl mx-auto">
            Discover authentic flavors from around the world
          </p>
        </motion.div>

        {/* Compact Search & Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mb-10 max-w-4xl mx-auto"
        >
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brown-light" />
            <input
              type="text"
              placeholder="Search flavors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-brown-dark/50 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white dark:bg-brown-dark/50 text-brown-text dark:text-cornsilk shadow-sm"
            />
          </div>

          {/* Compact Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-accent text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#D2691E] dark:from-[#FFD700] dark:via-[#FFA500] dark:to-[#FF8C00] text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-brown-dark/50 text-brown-primary dark:text-gold hover:bg-gray-100 dark:hover:bg-brown-dark/70 shadow-sm border border-gray-200 dark:border-brown-dark/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Compact Menu Grid - 3 columns, smaller cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.08, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white dark:bg-brown-dark/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-brown-dark/30"
              >
                {/* Compact Image with enhanced effects */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brown-primary/10 to-gold/10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={getMenuImageUrl(item.name, item.category)}
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.4 }}
                    transition={{ duration: 0.3 }}
                  />
                  {item.tags && item.tags.length > 0 && (
                    <motion.div 
                      className="absolute top-3 right-3 flex gap-1.5"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + 0.3 }}
                    >
                      {item.tags.slice(0, 2).map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 + tagIndex * 0.1 + 0.4, type: "spring" }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="px-2 py-1 bg-gold text-brown-dark text-xs font-accent font-bold rounded-lg shadow-md backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%", skewX: -20 }}
                    whileHover={{ x: "200%", transition: { duration: 0.8 } }}
                  />
                </div>

                {/* Compact Content */}
                <div className="p-5">
                  <motion.h3 
                    className="font-heading text-xl font-bold text-brown-primary dark:text-gold mb-3 group-hover:text-gold transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.2 }}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p 
                    className="font-body text-sm text-brown-light dark:text-cornsilk/80 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button if more items exist */}
        {filteredItems.length > 9 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white dark:bg-brown-dark/50 border-2 border-brown-primary dark:border-gold text-brown-primary dark:text-gold rounded-xl font-accent font-semibold hover:bg-brown-primary hover:text-white dark:hover:bg-gold dark:hover:text-brown-dark transition-all shadow-sm hover:shadow-md"
            >
              View All {filteredItems.length} Items
            </motion.button>
          </motion.div>
        )}

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="font-body text-lg text-brown-light dark:text-cornsilk/80">
              No items found. Try a different search or category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
