'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Plus, MapPin } from 'lucide-react'
import Image from 'next/image'
import { menuItems, categories } from '@/data/menuItems'
import { useCart } from '@/store/useCart'
import { MenuItem } from '@/store/useCart'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const { addItem } = useCart()

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Show only first 9 items for compact view
  const displayedItems = filteredItems.slice(0, 9)

  const handleAddToCart = (item: MenuItem) => {
    addItem(item)
  }

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
                    ? 'bg-gradient-to-r from-brown-primary to-brown-secondary dark:from-gold dark:to-yellow-400 text-white shadow-md scale-105'
                    : 'bg-white dark:bg-brown-dark/50 text-brown-primary dark:text-gold hover:bg-gray-100 dark:hover:bg-brown-dark/70 shadow-sm'
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative bg-white dark:bg-brown-dark/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-brown-dark/30"
              >
                {/* Compact Image */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brown-primary/10 to-gold/10">
                  <Image
                    src={item.image || `https://source.unsplash.com/400x300/?${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gold text-brown-dark text-xs font-accent font-bold rounded-lg shadow-md backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Compact Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-lg font-bold text-brown-primary dark:text-gold flex-1 pr-2">
                      {item.name}
                    </h3>
                    <span className="font-display text-xl font-bold bg-gradient-to-r from-gold to-brown-primary bg-clip-text text-transparent whitespace-nowrap">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="font-body text-xs text-brown-light dark:text-cornsilk/80 mb-3 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAddToCart(item)}
                    className="w-full py-2.5 bg-gradient-to-r from-brown-primary to-brown-secondary dark:from-gold dark:to-yellow-400 text-white dark:text-brown-dark rounded-xl font-accent font-semibold text-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </motion.button>
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
