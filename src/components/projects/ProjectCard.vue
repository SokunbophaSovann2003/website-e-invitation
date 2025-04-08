<template>
    <div @click="$emit('click')" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div class="relative h-64 overflow-hidden">
        <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4">{{ project.description }}</p>
        <a 
          :href="project.link" 
          class="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
        >
          View Project
        </a>
        <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }" class="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
        View Projects
      </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true,
        default: () => ({
          title: '',
          description: '',
          image: '',
          link: '#'
        })
      }
    }
  }
  </script>