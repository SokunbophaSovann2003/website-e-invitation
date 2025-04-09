<template>
    <div class="py-10">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help!
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div class="bg-white rounded-lg shadow-md p-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    id="name" 
                    v-model="form.name" 
                    type="text" 
                    required
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    id="email" 
                    v-model="form.email" 
                    type="email" 
                    required
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select 
                    id="subject" 
                    v-model="form.subject" 
                    required
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="" disabled selected>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Design Help">Design Help</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    v-model="form.message" 
                    rows="5" 
                    required
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    :disabled="loading"
                    class="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 disabled:opacity-50"
                  >
                    <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div>
            <div class="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div class="space-y-6">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-lg font-medium text-gray-900">Phone</h3>
                    <p class="text-gray-600">(123) 456-7890</p>
                    <p class="text-sm text-gray-500">Monday-Friday, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-lg font-medium text-gray-900">Email</h3>
                    <p class="text-gray-600">support@inviteme.com</p>
                    <p class="text-sm text-gray-500">We typically reply within 24 hours</p>
                  </div>
                </div>
                
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-lg font-medium text-gray-900">Office</h3>
                    <p class="text-gray-600">123 Invitation Street</p>
                    <p class="text-gray-600">Design City, DC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              
              <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-200 pb-4">
                  <button 
                    @click="toggleFaq(index)"
                    class="flex justify-between items-center w-full text-left focus:outline-none"
                  >
                    <span class="text-lg font-medium text-gray-800">{{ faq.question }}</span>
                    <svg 
                      class="h-5 w-5 text-teal-600 transform transition-transform duration-200" 
                      :class="{ 'rotate-180': faq.open }" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="faq.open" class="mt-2 text-gray-600">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const form = ref({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      const loading = ref(false)
      
      const faqs = ref([
        {
          question: 'How do I customize my invitation?',
          answer: 'After selecting a design, you can edit all text, colors, fonts, and images using our easy-to-use editor.',
          open: false
        },
        {
          question: 'Can I print my digital invitations?',
          answer: 'Yes! All our designs can be downloaded as high-resolution PDFs suitable for printing.',
          open: false
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
          open: false
        },
        {
          question: 'How do I share my invitation with guests?',
          answer: 'You can share via email, text message, social media, or by generating a unique link to your invitation.',
          open: false
        }
      ])
      
      const toggleFaq = (index) => {
        faqs.value[index].open = !faqs.value[index].open
      }
      
      const submitForm = () => {
        loading.value = true
        // Simulate form submission
        setTimeout(() => {
          alert('Thank you for your message! We will get back to you soon.')
          form.value = {
            name: '',
            email: '',
            subject: '',
            message: ''
          }
          loading.value = false
        }, 1500)
      }
      
      return {
        form,
        loading,
        faqs,
        toggleFaq,
        submitForm
      }
    }
  }
  </script>