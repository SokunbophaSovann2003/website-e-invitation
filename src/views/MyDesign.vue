<template>
    <div class="py-10">
      <div class="container mx-auto px-4">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">My Designs</h1>
          <p class="text-gray-600">Your saved invitation designs</p>
        </div>
        
        <div v-if="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
        </div>
        
        <div v-else>
          <div v-if="designs.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="design in designs" 
              :key="design.id" 
              class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div class="relative">
                <img :src="design.previewImage" :alt="design.title" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <router-link 
                    :to="`/designs/${design.id}`" 
                    class="bg-white text-teal-600 px-4 py-2 rounded-md font-medium hover:bg-teal-50"
                  >
                    View Design
                  </router-link>
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">{{ design.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ design.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500">Created {{ design.createdAt }}</span>
                  <button 
                    @click="deleteDesign(design.id)"
                    class="text-red-600 hover:text-red-800"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div v-else class="text-center py-12">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No saved designs</h3>
            <p class="mt-1 text-sm text-gray-500">Get started by creating a new invitation design.</p>
            <div class="mt-6">
              <router-link to="/create" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700">
                Create New Design
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  
  export default {
    setup() {
      const loading = ref(true)
      const designs = ref([])
      
      // Simulate loading designs from API
      onMounted(() => {
        setTimeout(() => {
          designs.value = [
            {
              id: '1',
              title: 'Wedding Invitation',
              description: 'Elegant floral design for our wedding',
              previewImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
              createdAt: '2 days ago'
            },
            {
              id: '2',
              title: 'Birthday Party',
              description: 'Fun and colorful birthday invitation',
              previewImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
              createdAt: '1 week ago'
            }
          ]
          loading.value = false
        }, 1000)
      })
      
      const deleteDesign = (id) => {
        if (confirm('Are you sure you want to delete this design?')) {
          designs.value = designs.value.filter(design => design.id !== id)
        }
      }
      
      return {
        loading,
        designs,
        deleteDesign
      }
    }
  }
  </script>