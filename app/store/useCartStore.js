import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(persist(
  (set, get) => ({
    cart: [],
    addToCart: (product, quantity = 1) => {
      const existing = get().cart.find(item => item.id === product.id)
      if (existing) {
        set({
          cart: get().cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
        })
      } else {
        set({ cart: [...get().cart, { ...product, quantity }] })
      }
    },
    removeFromCart: (id) => set({ cart: get().cart.filter(item => item.id !== id) }),
    updateQuantity: (id, quantity) => set({ cart: get().cart.map(item => item.id === id ? { ...item, quantity } : item) }),
  }),
  { name: 'cart-storage' }
))

export default useCartStore