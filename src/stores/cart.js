import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isOpen = ref(false)

  const totalItems = computed(() => items.value.reduce((total, item) => total + item.quantity, 0))
  
  const subtotal = computed(() => 
    items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  )

  function addToCart(product, quantity = 1) {
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      items.value.push({
        ...product,
        quantity
      })
    }
    
    isOpen.value = true
  }

  function removeFromCart(productId) {
    items.value = items.value.filter(item => item.id !== productId)
  }

  function updateQuantity(productId, quantity) {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  function clearCart() {
    items.value = []
  }

  function toggleCart() {
    isOpen.value = !isOpen.value
  }

  return {
    items,
    isOpen,
    totalItems,
    subtotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart
  }
})