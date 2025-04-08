<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Project {{ $route.params.id }}</h1>
    <router-link to="/portfolio" class="text-blue-600 hover:underline">
      ← Back to Portfolio
    </router-link>
  </div>
  <div class="min-h-screen bg-gray-50">
    <!-- Header (reuse your existing AppHeader component) -->
    <AppHeader />

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12">
      <!-- Back Button -->
      <router-link to="/portfolio"
        class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Portfolio
      </router-link>

      <!-- Project Gallery -->
      <ProjectGallery :images="project.images" />

      <!-- Project Details -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div class="lg:col-span-2">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ project.title }}</h1>
          <div class="prose max-w-none text-gray-700 mb-8">
            <p class="text-lg">{{ project.description }}</p>
          </div>

          <!-- Project Features -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Project Highlights</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li v-for="(feature, index) in project.features" :key="index" class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Full Description -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Detailed Overview</h2>
            <div class="prose max-w-none text-gray-700" v-html="project.fullDescription"></div>
          </div>
        </div>

        <!-- Project Meta -->
        <div class="lg:col-span-1">
          <div class="bg-white p-6 rounded-lg shadow-md sticky top-6">
            <ProjectMeta :client="project.client" :date="project.date" :budget="project.budget"
              :location="project.location" :services="project.services" />

            <!-- CTA Button -->
            <button @click="openContactModal"
              class="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors">
              Request Similar Project
            </button>
          </div>
        </div>
      </div>

      <!-- Related Projects -->
      <section class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard v-for="project in relatedProjects" :key="project.id" :project="project"
            class="hover:shadow-lg transition-shadow" />
        </div>
      </section>
    </main>

    <!-- Footer (reuse your existing AppFooter component) -->
    <AppFooter />

    <!-- Contact Modal -->
    <ContactModal v-if="showContactModal" @close="showContactModal = false" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import ProjectGallery from '../components/projects/ProjectGallery.vue'
import ProjectMeta from '../components/projects/ProjectMeta.vue'
import ProjectCard from '../components/projects/ProjectCard.vue'
// import ContactModal from '../components/ContactModal.vue'
import { projects } from '../data/projects.js'

export default {
  name: 'ProjectDetail',
  components: {
    AppHeader,
    AppFooter,
    ProjectGallery,
    ProjectMeta,
    ProjectCard,
    // ContactModal
  },
  setup() {
    const route = useRoute()
    const showContactModal = ref(false)

    // Get project ID from route params
    const projectId = parseInt(route.params.id)

    // Find current project
    const project = computed(() =>
      projects.find(p => p.id === projectId) || projects[0]
    )

    // Get related projects (excluding current)
    const relatedProjects = computed(() =>
      projects
        .filter(p => p.id !== projectId && p.category === project.value.category)
        .slice(0, 3)
    )

    const openContactModal = () => {
      showContactModal.value = true
    }

    return {
      project,
      relatedProjects,
      showContactModal,
      openContactModal
    }
  }
}
</script>