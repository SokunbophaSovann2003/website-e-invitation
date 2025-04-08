<template>
    <div class="space-y-4">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Project Details</h3>
      
      <div class="space-y-3">
        <div v-if="client" class="flex items-start">
          <svg class="h-5 w-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div>
            <p class="text-sm text-gray-500">Client</p>
            <p class="font-medium">{{ client }}</p>
          </div>
        </div>
        
        <div v-if="date" class="flex items-start">
          <svg class="h-5 w-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div>
            <p class="text-sm text-gray-500">Completion Date</p>
            <p class="font-medium">{{ date }}</p>
          </div>
        </div>
        
        <div v-if="budget" class="flex items-start">
          <svg class="h-5 w-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="text-sm text-gray-500">Budget</p>
            <p class="font-medium">{{ budget }}</p>
          </div>
        </div>
        
        <div v-if="location" class="flex items-start">
          <svg class="h-5 w-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p class="text-sm text-gray-500">Location</p>
            <p class="font-medium">{{ location }}</p>
          </div>
        </div>
        
        <div v-if="services && services.length" class="flex items-start">
          <svg class="h-5 w-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <div>
            <p class="text-sm text-gray-500">Services</p>
            <div class="flex flex-wrap gap-2 mt-1">
              <span v-for="(service, index) in services" :key="index" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {{ service }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectMeta',
    props: {
      client: String,
      date: String,
      budget: String,
      location: String,
      services: Array
    }
  }
  </script>