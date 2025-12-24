'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/store/useCart'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart()
  const total = getTotal()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-brown-dark z-50 shadow-2xl rounded-l-3xl overflow-hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-brown-primary/20">
                <h2 className="font-heading text-2xl font-bold text-brown-primary dark:text-gold">
                  Your Cart
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-2xl hover:bg-brown-primary/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="w-16 h-16 text-brown-light mb-4" />
                    <p className="font-body text-brown-light text-lg">Your cart is empty</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-gray-50 dark:bg-brown-dark/50 rounded-2xl p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-semibold text-brown-primary dark:text-gold">
                            {item.name}
                          </h3>
                          <p className="font-body text-sm text-brown-light mt-1">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-xl bg-white dark:bg-brown-dark hover:bg-brown-primary/10 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-accent font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-xl bg-white dark:bg-brown-dark hover:bg-brown-primary/10 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-accent font-semibold text-brown-primary dark:text-gold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-brown-primary/20 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-accent text-lg font-semibold">Total:</span>
                    <span className="font-display text-2xl font-bold text-brown-primary dark:text-gold">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-brown-primary dark:bg-gold text-white dark:text-brown-dark rounded-2xl font-accent font-semibold text-lg hover:bg-brown-secondary dark:hover:bg-gold/90 transition-colors"
                  >
                    Checkout
                  </motion.button>
                  <button
                    onClick={clearCart}
                    className="w-full py-2 text-brown-light hover:text-red-600 transition-colors font-body text-sm"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

