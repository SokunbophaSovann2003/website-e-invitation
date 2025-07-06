<template>
    <div class="py-10">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">About InviteMe</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating beautiful invitations for life's special moments
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p class="text-gray-600 mb-4">
              Founded in 2020, InviteMe began with a simple mission: to make invitation design easy, accessible, and enjoyable for everyone. 
              We noticed that people were spending too much time and money on traditional paper invitations, and we wanted to offer a better solution.
            </p>
            <p class="text-gray-600 mb-4">
              Our team of designers and developers came together to create a platform that combines beautiful design with intuitive technology. 
              Whether you're planning a wedding, birthday party, or corporate event, we've got you covered.
            </p>
            <p class="text-gray-600">
              Today, we've helped over 50,000 customers create stunning invitations for their special events. 
              We're proud to be part of so many important moments in people's lives.
            </p>
          </div>
          <div class="rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                 alt="Our team working" 
                 class="w-full h-full object-cover">
          </div>
        </div>
        
        <div class="py-12 bg-gray-50 rounded-lg mb-16">
          <div class="max-w-4xl mx-auto text-center px-4">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p class="text-xl text-gray-600 mb-8">
              To empower everyone to create beautiful, personalized invitations that make their events unforgettable.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4 mx-auto">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Fast</h3>
                <p class="text-gray-600">Create and send invitations in minutes, not days</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4 mx-auto">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Secure</h3>
                <p class="text-gray-600">Your data and designs are always protected</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4 mx-auto">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Beautiful</h3>
                <p class="text-gray-600">Designs created by professionals, customized by you</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mb-16 justify-items-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Meet the Team</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 w-72">
            <div class="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <img src="../assets/img/sokunbopha1.png" class="w-full h-84 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-1">Sokunbopha Sovann</h3>
                <p class="text-teal-600 mb-3">Project Leader</p>
                <p class="text-gray-600 text-sm">I am the founder and creator behind the E-Invitation project, combining original ideas with over 3 years of design and development experience to build a modern, user-friendly solution from the ground up.</p>
              </div>
            </div>
            <!-- <div v-for="member in team" :key="member.name" class="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-1">{{ member.name }}</h3>
                <p class="text-teal-600 mb-3">{{ member.role }}</p>
                <p class="text-gray-600 text-sm">{{ member.bio }}</p>
              </div>
            </div> -->
          </div>
        </div>
        
        <div class="bg-teal-600 rounded-lg p-8 text-center text-white">
          <h2 class="text-3xl font-bold mb-4">Ready to create your perfect invitation?</h2>
          <p class="text-xl mb-6 max-w-2xl mx-auto">
            Join thousands of happy customers who've created beautiful invitations with us.
          </p>
          <router-link 
            to="/create" 
            class="inline-block bg-white text-teal-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const team = ref([
        {
          name: 'Michael Chen',
          role: 'Lead Designer',
          bio: 'Michael brings over 10 years of design experience to create our stunning templates.',
          image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Emily Wilson',
          role: 'Developer',
          bio: 'Emily builds the technology that makes our platform easy and enjoyable to use.',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'David Kim',
          role: 'Customer Support',
          bio: 'David ensures every customer has an amazing experience with InviteMe.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        }
      ])
  
      return {
        team
      }
    }
  }
  </script>