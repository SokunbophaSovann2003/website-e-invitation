<!-- <template>
    <div class="min-h-screen bg-gray-50">
        <AppHeader />

        <main class="container mx-auto px-4 py-12">
            <h1 class="text-4xl font-bold text-center mb-12">Our Portfolio</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project"
                    @click="navigateToProject(project.id)" class="cursor-pointer hover:shadow-lg transition-all" />
            </div>
        </main>

        <AppFooter />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import ProjectCard from '../components/projects/ProjectCard.vue'
import { projects } from '../data/projects.js'

const router = useRouter()

const navigateToProject = (projectId) => {
    router.push({ name: 'ProjectDetail', params: { id: projectId } })
}
</script> -->



<!-- <template>
    <div>
      <h1 class="text-3xl font-bold mb-8">Our Portfolio</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link 
          v-for="project in projects" 
          :key="project.id"
          :to="{ name: 'ProjectDetail', params: { id: project.id }}"
          class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3>{{ project.title }}</h3>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Portfolio',
    data() {
      return {
        projects: [
          { id: 1, title: "Project 1" },
          { id: 2, title: "Project 2" }
        ]
      }
    }
  }
  </script> -->











<template>
  <div class="bg-gray-100 font-sans min-h-screen">
    <AppHeader />
    
    <main class="pt-16">
      <HeroSection />
      <FeaturedProjects />
      <ServicesSection />
    </main>
    
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturedProjects from '../components/FeaturedProjects.vue'
import ServicesSection from '../components/ServicesSection.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    HeroSection,
    FeaturedProjects,
    ServicesSection
  }
}
</script>