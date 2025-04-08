<template>
    <div class="rounded-xl overflow-hidden bg-white shadow-md">
      <!-- Main Image -->
      <div class="relative h-96 overflow-hidden">
        <img 
          :src="currentImage || images[0]" 
          :alt="'Project image ' + (currentIndex + 1)"
          class="w-full h-full object-cover transition-opacity duration-300"
        />
        <!-- Navigation Arrows -->
        <button 
          @click="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <!-- Thumbnail Strip -->
      <div class="flex p-4 space-x-2 overflow-x-auto">
        <button 
          v-for="(image, index) in images" 
          :key="index"
          @click="currentIndex = index"
          :class="{
            'ring-2 ring-blue-500': currentIndex === index,
            'opacity-75 hover:opacity-100': currentIndex !== index
          }"
          class="flex-shrink-0 w-20 h-20 rounded overflow-hidden transition-all"
        >
          <img 
            :src="image" 
            :alt="'Thumbnail ' + (index + 1)"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  
  export default {
    name: 'ProjectGallery',
    props: {
      images: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    setup(props) {
      const currentIndex = ref(0)
  
      const currentImage = computed(() => props.images[currentIndex.value])
  
      const nextImage = () => {
        currentIndex.value = (currentIndex.value + 1) % props.images.length
      }
  
      const prevImage = () => {
        currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
      }
  
      return {
        currentIndex,
        currentImage,
        nextImage,
        prevImage
      }
    }
  }
  </script>