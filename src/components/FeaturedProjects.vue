<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              v-for="(project, index) in projects" 
              :key="index" 
              :project="project" 
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue'
  import ProjectCard from './projects/ProjectCard.vue'
  
  export default {
    name: 'FeaturedProjects',
    components: {
      ProjectCard
    },
    setup() {
      const projects = ref([
        {
          title: "Modern Office Design",
          description: "A sleek and functional workspace designed for collaboration and productivity.",
          image: "/api/placeholder/600/400",
          link: "#"
        },
        {
          title: "Luxury Apartment Renovation",
          description: "Transforming an outdated apartment into a modern luxury living space.",
          image: "/api/placeholder/600/400",
          link: "#"
        },
        {
          title: "Restaurant Interior",
          description: "Creating an inviting atmosphere for a high-end dining experience.",
          image: "/api/placeholder/600/400",
          link: "#"
        }
      ])
  
      return {
        projects
      }
    }
  }
  </script>