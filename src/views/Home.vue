<template>
    <div>
      <!-- Hero Section -->
      <section class="relative py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Beautiful Digital Invitations</h1>
            <p class="text-xl text-gray-600 mb-8">
              Create, customize, and send stunning digital invitations for any occasion. 
              Perfect for weddings, birthdays, corporate events and more.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <router-link 
                to="/designs" 
                class="rounded-md bg-teal-600 px-6 py-3 text-lg font-medium text-white shadow hover:bg-teal-700 transition-colors"
              >
                Browse Designs
              </router-link>
              <router-link 
                to="/create" 
                class="rounded-md border border-teal-600 px-6 py-3 text-lg font-medium text-teal-600 hover:bg-teal-50 transition-colors"
              >
                Create Your Own
              </router-link>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              We make it easy to create invitations that impress your guests
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Easy Customization</h3>
              <p class="text-gray-600">
                Change colors, text, and images with our simple editor. No design skills needed.
              </p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Instant Delivery</h3>
              <p class="text-gray-600">
                Send invitations via email, text, or social media immediately after creation.
              </p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Premium Quality</h3>
              <p class="text-gray-600">
                Professionally designed templates that make your event stand out.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Popular Designs Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Popular Designs</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our most loved invitation designs
            </p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(design, index) in popularDesigns" :key="index" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="relative">
                <img :src="design.image" :alt="design.title" class="w-full h-90 object-cover">
                <span class="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold">
                  {{ design.category }}
                </span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{{ design.title }}</h3>
                <div class="flex justify-between items-center">
                  <div>
                    <span class="text-2xl font-bold text-teal-600">${{ design.price }}</span>
                  </div>
                  <router-link 
                    :to="`/designs/${design.id}`" 
                    class="text-teal-600 hover:text-teal-800 font-medium transition-colors"
                  >
                    View Design →
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-10">
            <router-link 
              to="/designs" 
              class="inline-block px-6 py-3 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-600 hover:text-white transition-colors"
            >
              View All Designs
            </router-link>
          </div>
        </div>
      </section>
  
      <!-- Testimonials -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our happy customers
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-gray-50 p-6 rounded-lg">
              <div class="flex items-center mb-4">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full object-cover">
                <div class="ml-4">
                  <h4 class="font-semibold">{{ testimonial.name }}</h4>
                  <p class="text-gray-600 text-sm">{{ testimonial.event }}</p>
                </div>
              </div>
              <p class="text-gray-700 mb-4">"{{ testimonial.comment }}"</p>
              <div class="flex text-yellow-400">
                <svg v-for="star in 5" :key="star" class="w-5 h-5" :class="{'text-gray-300': star > testimonial.rating}" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-16 bg-teal-600 text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-6">Ready to Create Your Invitation?</h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who've created beautiful invitations with us.
          </p>
          <router-link 
            to="/create" 
            class="inline-block bg-white text-teal-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
      return {
        popularDesigns: [
          {
            id: 9,
            title: 'Elegant Floral Wedding',
            category: 'Wedding',
            price: '29.99',
            image: 'https://i.pinimg.com/736x/ec/dc/cc/ecdccc7d12cbfe2c236a94dd5b44446e.jpg'
          },
          {
            id: 10,
            title: 'Modern Birthday Party',
            category: 'Birthday',
            price: '19.99',
            image: 'https://i.pinimg.com/736x/b9/fc/fc/b9fcfc559c8763eb7d9ef07785e90d5a.jpg'
          },
          {
            id: 11,
            title: 'Professional Corporate Event',
            category: 'Corporate',
            price: '24.99',
            image: 'https://i.pinimg.com/736x/d6/fe/03/d6fe03e0f820865dc2a28d8a2aca4421.jpg'
          },
          {
            id: 12,
            title: 'Professional Corporate Event',
            category: 'Graduation',
            price: '24.99',
            image: 'https://i.pinimg.com/736x/85/38/6b/85386b1e6b0bcefb9eaba6f60ec7bcf2.jpg'
          }
        ],
        testimonials: [
          {
            name: 'Sarah Johnson',
            event: 'Wedding',
            comment: 'The invitations were absolutely stunning! Our guests couldn\'t stop complimenting them.',
            rating: 5,
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
          },
          {
            name: 'Michael Chen',
            event: 'Corporate Event',
            comment: 'Easy to customize and perfect for our company anniversary. Will definitely use again!',
            rating: 4,
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
          },
          {
            name: 'Emily Wilson',
            event: 'Birthday Party',
            comment: 'So many beautiful designs to choose from. Made planning my daughter\'s party so much easier.',
            rating: 5,
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
          }
        ]
      }
    }
  }
  </script>