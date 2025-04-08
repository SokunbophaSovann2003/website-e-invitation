<template>
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <!-- <img src="/api/placeholder/150/50" alt="Logo" class="h-8 mb-4"> -->
            <p class="text-gray-400 mb-4">Creating beautiful spaces since 2010. Our award-winning design team is dedicated to bringing your vision to life.</p>
            <div class="flex space-x-4">
              <SocialIcon platform="facebook" />
              <SocialIcon platform="twitter" />
              <SocialIcon platform="instagram" />
              <SocialIcon platform="dribbble" />
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li v-for="(link, index) in quickLinks" :key="index">
                <a :href="link.url" class="text-gray-400 hover:text-white transition-colors">{{ link.text }}</a>
              </li>
            </ul>
          </div>
          
          <!-- Services -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2">
              <li v-for="(service, index) in services" :key="index">
                <a :href="service.url" class="text-gray-400 hover:text-white transition-colors">{{ service.text }}</a>
              </li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <ContactIcon type="address" />
                <span class="text-gray-400">123 Design Street, Creative City, 10001</span>
              </li>
              <li class="flex items-start">
                <ContactIcon type="phone" />
                <span class="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li class="flex items-start">
                <ContactIcon type="email" />
                <span class="text-gray-400">info@designcompany.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Design Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { ref } from 'vue'
  import SocialIcon from './SocialIcon.vue'
  import ContactIcon from './ContactIcon.vue'
  
  export default {
    name: 'AppFooter',
    components: {
      SocialIcon,
      ContactIcon
    },
    setup() {
      const quickLinks = ref([
        { text: 'Home', url: '#' },
        { text: 'About Us', url: '#' },
        { text: 'Services', url: '#' },
        { text: 'Portfolio', url: '#' },
        { text: 'Contact', url: '#' }
      ])
  
      const services = ref([
        { text: 'Interior Design', url: '#' },
        { text: 'Architectural Planning', url: '#' },
        { text: '3D Visualization', url: '#' },
        { text: 'Renovation Consulting', url: '#' },
        { text: 'Furniture Selection', url: '#' }
      ])
  
      return {
        quickLinks,
        services
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here if needed */
  </style>