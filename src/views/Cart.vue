<template>
    <div class="py-10">
      <div class="container mx-auto px-4">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">Your Shopping Cart</h1>
          <p class="text-gray-600" v-if="items.length > 0">
            {{ items.length }} item{{ items.length !== 1 ? 's' : '' }} in your cart
          </p>
        </div>
        
        <div v-if="items.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Cart Items -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div v-for="item in items" :key="item.id" class="p-6 flex">
                  <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                    <img :src="item.image" :alt="item.title" class="w-full h-full object-center object-cover">
                  </div>
                  
                  <div class="ml-4 flex-1 flex flex-col">
                    <div>
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>{{ item.title }}</h3>
                        <p class="ml-4">${{ (item.price * item.quantity).toFixed(2) }}</p>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">{{ item.category }}</p>
                    </div>
                    
                    <div class="flex-1 flex items-end justify-between text-sm">
                      <div class="flex items-center">
                        <button @click="updateQuantity(item.id, item.quantity - 1)" 
                          :disabled="item.quantity <= 1"
                          class="text-gray-500 hover:text-teal-600 disabled:opacity-50">
                          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                          </svg>
                        </button>
                        <span class="mx-2">{{ item.quantity }}</span>
                        <button @click="updateQuantity(item.id, item.quantity + 1)" 
                          class="text-gray-500 hover:text-teal-600">
                          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                      
                      <div class="flex">
                        <button @click="removeFromCart(item.id)" type="button" class="font-medium text-teal-600 hover:text-teal-500">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Order Summary -->
          <div>
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="text-gray-600">Subtotal</span>
                  <span class="font-medium">${{ subtotal.toFixed(2) }}</span>
                </div>
                
                <div class="flex justify-between">
                  <span class="text-gray-600">Shipping</span>
                  <span class="font-medium">$0.00</span>
                </div>
                
                <div class="flex justify-between">
                  <span class="text-gray-600">Tax</span>
                  <span class="font-medium">${{ (subtotal * 0.1).toFixed(2) }}</span>
                </div>
                
                <div class="border-t border-gray-200 pt-4 flex justify-between">
                  <span class="text-base font-medium text-gray-900">Order Total</span>
                  <span class="text-base font-medium">${{ (subtotal * 1.1).toFixed(2) }}</span>
                </div>
              </div>
              
              <button 
                @click="checkout"
                class="mt-6 w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700"
              >
                Proceed to Checkout
              </button>
              
              <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  or
                  <router-link to="/designs" class="text-teal-600 font-medium hover:text-teal-500 ml-1">
                    Continue Shopping
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Empty Cart -->
        <div v-else class="text-center py-12">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
          <p class="mt-1 text-sm text-gray-500">Start adding some beautiful invitations to your cart</p>
          <div class="mt-6">
            <router-link to="/designs" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700">
              Browse Designs
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useCartStore } from '../stores/cart'
  import { useRouter } from 'vue-router'
  
  export default {
    setup() {
      const cartStore = useCartStore()
      const router = useRouter()
      
      const items = computed(() => cartStore.items)
      const subtotal = computed(() => cartStore.subtotal)
      
      const removeFromCart = (productId) => {
        cartStore.removeFromCart(productId)
      }
      
      const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return
        cartStore.updateQuantity(productId, quantity)
      }
      
      const checkout = () => {
        // In a real app, you would redirect to a checkout page
        alert('Proceeding to checkout!')
        router.push('/')
        cartStore.clearCart()
      }
      
      return {
        items,
        subtotal,
        removeFromCart,
        updateQuantity,
        checkout
      }
    }
  }
  </script>