<template>
    <div 
      class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      @click="$emit('service-selected', service.id)"
    >
      <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
        </svg>
      </div>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ service.title }}</h3>
      <p class="text-gray-600">{{ service.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServiceCard',
    props: {
      service: {
        type: Object,
        required: true,
        validator: (service) => {
          return [
            'id',
            'title',
            'description',
            'icon',
            'featured'
          ].every(key => key in service)
        }
      }
    },
    emits: ['service-selected']
  }
  </script>