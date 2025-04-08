<!-- <template>
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
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturedProjects from './components/FeaturedProjects.vue'
import ServicesSection from './components/ServicesSection.vue'

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
</script> -->

<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>