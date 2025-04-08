<template>
  <section class="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Creative Design Solutions for Your Space</h1>
        <p class="text-xl text-gray-600 mb-8">We transform your ideas into beautiful, functional spaces that inspire and
          delight.</p>
          <!-- <router-link to="/portfolio">Test Link</router-link>
          <router-link to="/portfolio">Explore Our Work</router-link> -->
        <router-link to="/portfolio"
          class="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors">
          Explore Our Work
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>