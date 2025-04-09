<template>
    <div class="fixed inset-0 overflow-hidden z-50" v-show="isOpen">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="toggleCart"></div>
        
        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div class="w-screen max-w-md">
            <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2 class="text-lg font-medium text-gray-900">Shopping cart</h2>
                  <div class="ml-3 h-7 flex items-center">
                    <button @click="toggleCart" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Close panel</span>
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
  
                <div class="mt-8">
                  <div class="flow-root">
                    <ul v-if="items.length > 0" class="-my-6 divide-y divide-gray-200">
                      <li v-for="item in items" :key="item.id" class="py-6 flex">
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
                      </li>
                    </ul>
                    <div v-else class="text-center py-12">
                      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                      <p class="mt-1 text-sm text-gray-500">Start adding some beautiful invitations to your cart</p>
                      <div class="mt-6">
                        <button @click="toggleCart" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700">
                          Browse Designs
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div v-if="items.length > 0" class="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${{ subtotal.toFixed(2) }}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div class="mt-6">
                  <router-link 
                    to="/cart" 
                    @click="toggleCart"
                    class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700"
                  >
                    Checkout
                  </router-link>
                </div>
                <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or
                    <button @click="toggleCart" type="button" class="text-teal-600 font-medium hover:text-teal-500">
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useCartStore } from '../stores/cart'
  
  export default {
    setup() {
      const cartStore = useCartStore()
      
      return {
        isOpen: computed(() => cartStore.isOpen),
        items: computed(() => cartStore.items),
        subtotal: computed(() => cartStore.subtotal),
        toggleCart: cartStore.toggleCart,
        removeFromCart: cartStore.removeFromCart,
        updateQuantity: cartStore.updateQuantity
      }
    }
  }
  </script>