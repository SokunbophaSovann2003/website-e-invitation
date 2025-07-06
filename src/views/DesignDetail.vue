<template>
  <div class="py-10">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <router-link to="/designs" class="text-teal-600 hover:text-teal-800 flex items-center">
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Designs
        </router-link>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Design Preview -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="relative">
            <img :src="design.image" :alt="design.title" class="w-full rounded-lg">
          </div>
        </div>

        <!-- Design Info -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ design.title }}</h1>
          <p class="text-gray-600 mb-4">{{ design.description }}</p>

          <div class="flex items-center mb-6">
            <div class="flex text-yellow-400 mr-4">
              <svg v-for="star in 5" :key="star" class="w-5 h-5" :class="{ 'text-gray-300': star > design.rating }"
                fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span class="text-gray-600 text-sm">({{ design.reviews }} reviews)</span>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Details</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex">
                <svg class="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Fully customizable text and colors
              </li>
              <li class="flex">
                <svg class="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Digital delivery within minutes
              </li>
              <li class="flex">
                <svg class="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Multiple sharing options
              </li>
            </ul>
          </div>

          <div class="flex items-center justify-between mb-6">
            <div>
              <span class="text-3xl font-bold text-teal-600">${{ design.price }}</span>
              <span v-if="design.originalPrice" class="text-lg text-gray-500 line-through ml-2">${{ design.originalPrice
                }}</span>
            </div>
            <span class="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {{ design.category }}
            </span>
          </div>

          <div class="space-y-4">
            <button @click="addToCart(design)"
              class="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Cart - ${{ design.price }}
            </button>

            <router-link to="/create"
              class="w-full border border-teal-600 text-teal-600 py-3 px-4 rounded-md hover:bg-teal-50 flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Customize This Design
            </router-link>
          </div>
        </div>
      </div>

      <!-- Similar Designs -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Similar Designs</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="similarDesign in similarDesigns" :key="similarDesign.id"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div v-if="similarDesign.category == design.category">
              <router-link :to="`/designs/${similarDesign.id}`">
                <div class="relative">
                  <img :src="similarDesign.image" :alt="similarDesign.title" class="w-full h-90 object-cover">
                  <span class="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold">
                    {{ similarDesign.category }}
                  </span>
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-semibold mb-2">{{ similarDesign.title }}</h3>
                  <div class="flex justify-between items-center">
                    <span class="text-lg font-bold text-teal-600">${{ similarDesign.price }}</span>
                    <button @click.prevent="addToCart(similarDesign)" class="text-teal-600 hover:text-teal-800">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { designs } from '../data/designs.js'

export default {
  setup() {
    const route = useRoute()
    const cartStore = useCartStore()

    const design = ref({})
    const designId = ref(parseInt(route.params.id))

    // Set design when component is mounted
    const setDesign = (id) => {
      const d = designs.find(design => design.id === id)
      if (d) design.value = d
    }

    // Init
    setDesign(designId.value)

    // Watch for route changes
    watch(() => route.params.id, (newId) => {
      const id = parseInt(newId)
      designId.value = id
      setDesign(id)
    })

    const similarDesigns = computed(() => {
      return designs.filter(d =>
        d.category === design.value.category && d.id !== design.value.id
      )
    })

    const addToCart = (product) => {
      cartStore.addToCart(product)
    }

    return {
      design,
      similarDesigns,
      addToCart
    }
  }
}
</script>
