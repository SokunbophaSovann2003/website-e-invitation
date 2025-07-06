<template>
    <div class="py-10">
      <!-- Designs Header -->
      <div class="container mx-auto px-4 mb-10">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Invitation Designs</h1>
        <p class="text-gray-600">Browse our collection of beautiful invitation templates</p>
        
        <!-- Categories -->
        <div class="flex flex-wrap gap-2 mt-6 mb-8">
          <button 
            v-for="category in categories" 
            :key="category" 
            @click="filterDesigns(category)"
            :class="{'bg-teal-600 text-white': activeCategory === category, 'bg-gray-100 text-gray-800': activeCategory !== category}"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-teal-500 hover:text-white"
          >
            {{ category }}
          </button>
        </div>
      </div>
      
      <!-- Designs Grid -->
      <div class="container mx-auto px-4">
        <div v-if="filteredDesigns.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div 
            v-for="design in filteredDesigns" 
            :key="design.id" 
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <router-link :to="`/designs/${design.id}`">
              <div class="relative">
                <img :src="design.image" :alt="design.title" class="w-full h-90 object-cover">
                <span class="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold">
                  {{ design.category }}
                </span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{{ design.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ design.description }}</p>
                <div class="flex justify-between items-center">
                  <div>
                    <span class="text-2xl font-bold text-teal-600">${{ design.price }}</span>
                    <span v-if="design.originalPrice" class="text-sm text-gray-500 line-through ml-2">${{ design.originalPrice }}</span>
                  </div>
                  <button 
                    @click.prevent="addToCart(design)"
                    class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        
        <div v-else class="text-center py-12">
          <p class="text-gray-500">No designs found in this category.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Designs',
    data() {
      return {
        activeCategory: 'All',
        categories: ['All', 'Wedding', 'Birthday', 'Corporate', 'Baby Shower', 'Graduation'],
        designs: [
          {
            id: 1,
            title: 'Elegant Floral Wedding',
            category: 'Wedding',
            price: '29.99',
            originalPrice: '39.99',
            description: 'Classic design with delicate floral accents',
            image: 'https://i.pinimg.com/736x/21/1c/a2/211ca21a693f0595ff6513eaa04ea0e9.jpg'
          },
          {
            id: 2,
            title: 'Modern Birthday Party',
            category: 'Birthday',
            price: '19.99',
            description: 'Colorful and playful design for all ages',
            image: 'https://i.pinimg.com/736x/b9/fc/fc/b9fcfc559c8763eb7d9ef07785e90d5a.jpg'
          },
          {
            id: 3,
            title: 'Professional Corporate Event',
            category: 'Corporate',
            price: '24.99',
            description: 'Clean, modern design for business occasions',
            image: 'https://i.pinimg.com/736x/8f/ee/cb/8feecb813199116d3f1c5273c4dcad64.jpg'
          },
          {
            id: 4,
            title: 'Rustic Wedding Invitation',
            category: 'Wedding',
            price: '34.99',
            description: 'Natural textures and earthy tones',
            image: 'https://i.pinimg.com/736x/d8/e2/6f/d8e26fd0340ac98a6ad9afa14a4a9f98.jpg'
          },
          {
            id: 5,
            title: 'Baby Shower Celebration',
            category: 'Baby Shower',
            price: '22.99',
            originalPrice: '29.99',
            description: 'Sweet and adorable baby-themed design',
            image: 'https://images.greetingsisland.com/images/invitations/baby/previews/princess-gold-castle-&-roses-19113.jpeg?auto=format,compress&w=932'
          },
          {
            id: 6,
            title: 'Graduation Announcement',
            category: 'Graduation',
            price: '21.99',
            description: 'Elegant design to celebrate academic achievements',
            image: 'https://images.greetingsisland.com/images/cards/thank-you/graduation-thank%20you/previews/gold-star-confetti-32662.jpeg?auto=format,compress&w=932'
          },
          {
            id: 7,
            title: 'Minimalist Wedding',
            category: 'Wedding',
            price: '27.99',
            description: 'Simple yet sophisticated design',
            image: 'https://i.pinimg.com/736x/66/12/7f/66127f07bff9786700f2af3c27e71376.jpg'
          },
          {
            id: 8,
            title: 'Kids Birthday Party',
            category: 'Birthday',
            price: '18.99',
            description: 'Fun and colorful design perfect for kids',
            image: 'https://images.greetingsisland.com/images/invitations/birthday/previews/magical-butterflies-photo-18112.gif?auto=format,compress&w=932'
          },
                    {
            id: 9,
            title: 'Elegant Floral Wedding',
            category: 'Wedding',
            price: '29.99',
            image: 'https://i.pinimg.com/736x/ec/dc/cc/ecdccc7d12cbfe2c236a94dd5b44446e.jpg'
          },
          {
            id: 10,
            title: 'Modern Birthday Party',
            category: 'Birthday',
            price: '19.99',
            image: 'https://i.pinimg.com/736x/b9/fc/fc/b9fcfc559c8763eb7d9ef07785e90d5a.jpg'
          },
          {
            id: 11,
            title: 'Professional Corporate Event',
            category: 'Corporate',
            price: '24.99',
            image: 'https://i.pinimg.com/736x/d6/fe/03/d6fe03e0f820865dc2a28d8a2aca4421.jpg'
          },
          {
            id: 12,
            title: 'Professional Corporate Event',
            category: 'Graduation',
            price: '24.99',
            image: 'https://i.pinimg.com/736x/85/38/6b/85386b1e6b0bcefb9eaba6f60ec7bcf2.jpg'
          }
        ]
      }
    },
    computed: {
      filteredDesigns() {
        if (this.activeCategory === 'All') {
          return this.designs
        }
        return this.designs.filter(design => design.category === this.activeCategory)
      }
    },
    methods: {
      filterDesigns(category) {
        this.activeCategory = category
      },
      addToCart(design) {
        // In a real app, you would dispatch to Vuex or handle cart logic here
        alert(`${design.title} added to cart!`)
      }
    }
  }
  </script>