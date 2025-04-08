<template>
    <header :class="{
      'fixed top-0 left-0 right-0 transition-all duration-300 z-40 blur-bg shadow-lg': true,
      'bg-white/70': scrolled,
      'bg-white': !scrolled
    }">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="#" class="text-2xl font-bold text-blue-600">
              <!-- <img src="/api/placeholder/150/50" alt="Logo" class="h-10"> -->
            </a>
          </div>
  
          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden block text-gray-600 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-show="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              <path v-show="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
  
          <!-- Desktop Menu -->
          <nav class="hidden lg:flex space-x-8 items-center">
            <DropdownMenu title="About Us">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">Our History</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">Our Team</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">Mission & Vision</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">Careers</a>
            </DropdownMenu>
  
            <DropdownMenu title="Portfolio" portfolio>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PortfolioCard v-for="(project, index) in portfolioProjects" :key="index" :project="project" />
              </div>
            </DropdownMenu>
  
            <DropdownMenu title="Services">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">Interior Design</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">Architectural Planning</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">3D Visualization</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">Renovation Consulting</a>
            </DropdownMenu>
  
            <DropdownMenu title="Contact Us">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">Email Us</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">Call Us</a>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50">Office Locations</a>
            </DropdownMenu>
          </nav>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div 
        v-show="mobileMenuOpen"
        class="lg:hidden bg-white/80 blur-bg py-2 shadow-lg"
      >
        <MobileDropdown title="About Us" v-model:open="dropdowns.about">
          <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Our History</a>
          <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Our Team</a>
          <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Mission & Vision</a>
        </MobileDropdown>
  
        <MobileDropdown title="Portfolio" v-model:open="dropdowns.portfolio">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PortfolioCard v-for="(project, index) in portfolioProjects.slice(0, 2)" :key="index" :project="project" mobile />
          </div>
          <a href="#" class="block w-full py-2 text-center text-blue-600 font-medium hover:underline">View All Projects</a>
        </MobileDropdown>
  
        <MobileDropdown title="Services" v-model:open="dropdowns.services">
          <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Interior Design</a>
          <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Architectural Planning</a>
          <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">3D Visualization</a>
        </MobileDropdown>
  
        <MobileDropdown title="Contact Us" v-model:open="dropdowns.contact">
          <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Email Us</a>
          <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Call Us</a>
          <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Office Locations</a>
        </MobileDropdown>
      </div>
    </header>
  
    <!-- Overlay -->
    <div 
      v-show="Object.values(dropdowns).some(val => val === true)"
      class="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
      @click="closeAllDropdowns"
    ></div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue'
  import DropdownMenu from './DropdownMenu.vue'
  import MobileDropdown from './MobileDropdown.vue'
  import PortfolioCard from './PortfolioCard.vue'
  
  export default {
    components: {
      DropdownMenu,
      MobileDropdown,
      PortfolioCard
    },
    setup() {
      const scrolled = ref(false)
      const mobileMenuOpen = ref(false)
      const dropdowns = ref({
        about: false,
        portfolio: false,
        services: false,
        contact: false
      })
  
      const portfolioProjects = ref([
        { title: "Modern Office Design", price: "$2,500", image: "/api/placeholder/300/200" },
        { title: "Luxury Apartment Renovation", price: "$5,800", image: "/api/placeholder/300/200" },
        // Add more projects as needed
      ])
  
      const handleScroll = () => {
        scrolled.value = window.scrollY > 10
      }
  
      const closeAllDropdowns = () => {
        Object.keys(dropdowns.value).forEach(key => {
          dropdowns.value[key] = false
        })
      }
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll)
      })
  
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })
  
      return {
        scrolled,
        mobileMenuOpen,
        dropdowns,
        portfolioProjects,
        closeAllDropdowns
      }
    }
  }
  </script>
  
  <style>
  .blur-bg {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  </style>