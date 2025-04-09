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
                <img :src="design.image" :alt="design.title" class="w-full h-64 object-cover">
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
            image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 2,
            title: 'Modern Birthday Party',
            category: 'Birthday',
            price: '19.99',
            description: 'Colorful and playful design for all ages',
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 3,
            title: 'Professional Corporate Event',
            category: 'Corporate',
            price: '24.99',
            description: 'Clean, modern design for business occasions',
            image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 4,
            title: 'Rustic Wedding Invitation',
            category: 'Wedding',
            price: '34.99',
            description: 'Natural textures and earthy tones',
            image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 5,
            title: 'Baby Shower Celebration',
            category: 'Baby Shower',
            price: '22.99',
            originalPrice: '29.99',
            description: 'Sweet and adorable baby-themed design',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 6,
            title: 'Graduation Announcement',
            category: 'Graduation',
            price: '21.99',
            description: 'Elegant design to celebrate academic achievements',
            image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 7,
            title: 'Minimalist Wedding',
            category: 'Wedding',
            price: '27.99',
            description: 'Simple yet sophisticated design',
            image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 8,
            title: 'Kids Birthday Party',
            category: 'Birthday',
            price: '18.99',
            description: 'Fun and colorful design perfect for kids',
            image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
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