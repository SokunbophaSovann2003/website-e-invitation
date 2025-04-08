<template>
    <a 
      :href="project.link || '#'" 
      :class="{
        'group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300': true,
        'h-full': !mobile,
        'h-36': mobile
      }"
    >
      <div class="relative h-48 overflow-hidden" :class="{ 'h-36': mobile }">
        <img 
          :src="project.image" 
          :alt="project.title" 
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        >
      </div>
      <div :class="{ 'p-4': !mobile, 'p-3': mobile }">
        <h3 
          :class="{
            'text-lg font-semibold text-gray-800 group-hover:text-blue-600': !mobile,
            'text-sm font-semibold text-gray-800': mobile
          }"
        >
          {{ project.title }}
        </h3>
        <p 
          :class="{
            'mt-1 text-blue-600 font-medium': !mobile,
            'text-sm text-blue-600 font-medium': mobile
          }"
        >
          {{ project.price }}
        </p>
      </div>
    </a>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true,
        default: () => ({
          title: '',
          price: '',
          image: '',
          link: '#'
        })
      },
      mobile: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>