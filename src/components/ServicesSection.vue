<template>
    <section id="services" class="py-16 bg-gray-50 scroll-mt-16">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-12">
            <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
              Our Offerings
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comprehensive Design Services</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              We transform spaces with innovative solutions tailored to your vision and needs.
            </p>
          </div>
          
          <!-- Services Filter -->
          <div class="flex justify-center mb-8">
            <div class="inline-flex rounded-md shadow-sm" role="group">
              <button
                v-for="(filter, index) in filters"
                :key="index"
                @click="activeFilter = filter.value"
                :class="{
                  'px-4 py-2 text-sm font-medium border': true,
                  'bg-blue-600 text-white border-blue-600': activeFilter === filter.value,
                  'bg-white text-gray-700 border-gray-300 hover:bg-gray-50': activeFilter !== filter.value,
                  'rounded-l-lg': index === 0,
                  'rounded-r-lg': index === filters.length - 1,
                  'border-l-0': index !== 0
                }"
              >
                {{ filter.label }}
              </button>
            </div>
          </div>
  
          <!-- Services Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              v-for="service in filteredServices" 
              :key="service.id" 
              :service="service"
              @service-selected="handleServiceSelection"
            />
          </div>
  
          <!-- CTA Section -->
          <div class="mt-12 text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Don't see what you need?</h3>
            <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can create custom solutions for your unique requirements.
            </p>
            <button
              @click="openContactModal"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Request Custom Service
              <svg class="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Service Detail Modal -->
      <ServiceModal 
        v-if="selectedService"
        :service="selectedService"
        @close="selectedService = null"
      />
    </section>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import ServiceCard from './ServiceCard.vue'
  import ServiceModal from './ServiceModal.vue'
  
  export default {
    name: 'ServicesSection',
    components: {
      ServiceCard,
      ServiceModal
    },
    setup() {
      const services = ref([
        {
          id: 1,
          title: "Interior Design",
          description: "Creating beautiful, functional spaces tailored to your lifestyle and preferences.",
          longDescription: "Our interior design service includes space planning, color consultation, furniture selection, lighting design, and full project management. We work with residential and commercial clients to create spaces that are both aesthetically pleasing and highly functional.",
          icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
          category: "design",
          featured: true,
          startingPrice: 2500,
          image: "/api/placeholder/600/400?text=Interior+Design"
        },
        {
          id: 2,
          title: "Architectural Planning",
          description: "Comprehensive planning services for new constructions and major renovations.",
          longDescription: "From concept to completion, our architectural services include schematic design, design development, construction documents, and construction administration. We specialize in sustainable design practices and innovative use of materials.",
          icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
          category: "architecture",
          featured: true,
          startingPrice: 5000,
          image: "/api/placeholder/600/400?text=Architecture"
        },
        {
          id: 3,
          title: "3D Visualization",
          description: "Realistic 3D renderings to help you visualize your project before construction.",
          longDescription: "Our 3D visualization services include photorealistic renderings, virtual tours, and animation walkthroughs. We use the latest software to create accurate representations of your future space, helping you make informed decisions before construction begins.",
          icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
          category: "technology",
          featured: true,
          startingPrice: 1200,
          image: "/api/placeholder/600/400?text=3D+Viz"
        },
        {
          id: 4,
          title: "Renovation Consulting",
          description: "Expert advice and project management for your renovation projects.",
          longDescription: "Our renovation consultants provide guidance on feasibility, budgeting, timeline planning, and contractor selection. We help you navigate the complexities of renovation projects to ensure smooth execution and optimal results.",
          icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
          category: "consulting",
          featured: true,
          startingPrice: 1800,
          image: "/api/placeholder/600/400?text=Consulting"
        },
        {
          id: 5,
          title: "Space Planning",
          description: "Optimizing your space for maximum functionality and flow.",
          longDescription: "Our space planning service analyzes your existing or proposed space to create the most efficient layout. We consider traffic patterns, furniture placement, and functional requirements to create spaces that work perfectly for your needs.",
          icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
          category: "design",
          featured: false,
          startingPrice: 1500,
          image: "/api/placeholder/600/400?text=Space+Planning"
        },
        {
          id: 6,
          title: "Lighting Design",
          description: "Creating the perfect ambiance with strategic lighting solutions.",
          longDescription: "Our lighting design service includes fixture selection, placement planning, control systems, and energy-efficient solutions. We create lighting schemes that enhance architecture, highlight features, and create the right mood for every space.",
          icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
          category: "design",
          featured: false,
          startingPrice: 2200,
          image: "/api/placeholder/600/400?text=Lighting"
        }
      ])
  
      const filters = ref([
        { label: 'All Services', value: 'all' },
        { label: 'Design', value: 'design' },
        { label: 'Architecture', value: 'architecture' },
        { label: 'Consulting', value: 'consulting' }
      ])
  
      const activeFilter = ref('all')
      const selectedService = ref(null)
  
      const filteredServices = computed(() => {
        if (activeFilter.value === 'all') return services.value
        return services.value.filter(service => service.category === activeFilter.value)
      })
  
      const handleServiceSelection = (serviceId) => {
        selectedService.value = services.value.find(service => service.id === serviceId)
      }
  
      const openContactModal = () => {
        // In a real app, this would open a contact modal
        console.log('Opening custom service request modal')
      }
  
      return {
        services,
        filters,
        activeFilter,
        filteredServices,
        selectedService,
        handleServiceSelection,
        openContactModal
      }
    }
  }
  </script>
  
  <style scoped>
  .scroll-mt-16 {
    scroll-margin-top: 4rem;
  }
  </style>