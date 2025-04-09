<template>
    <footer class="bg-white border-t border-gray-200">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- Company Info -->
          <div class="sm:col-span-2">
            <router-link to="/" class="flex items-center">
              <svg class="h-8 w-auto text-teal-600" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z" fill="currentColor" />
              </svg>
              <span class="ml-2 text-xl font-bold text-gray-900">InviteMe</span>
            </router-link>
            <p class="mt-6 text-sm text-gray-600">
              Create beautiful digital invitations for any occasion. Our designs are crafted with care to make your events memorable.
            </p>
          </div>
  
          <!-- Quick Links -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul class="mt-6 space-y-4">
              <li v-for="item in quickLinks" :key="item.name">
                <router-link :to="item.href" class="text-sm text-gray-600 hover:text-teal-600">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
  
          <!-- Contact Info -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900">Contact Us</h3>
            <ul class="mt-6 space-y-4">
              <li class="flex text-sm text-gray-600">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="ml-3">(123) 456-7890</span>
              </li>
              <li class="flex text-sm text-gray-600">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="ml-3">support@inviteme.com</span>
              </li>
              <li class="flex text-sm text-gray-600">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="ml-3">123 Invitation St, Design City</span>
              </li>
            </ul>
          </div>
  
          <!-- Social Media -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900">Follow Us</h3>
            <div class="mt-6 flex space-x-6">
              <a v-for="item in socialLinks" :key="item.name" :href="item.href" class="text-gray-500 hover:text-teal-600">
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-6 w-6" />
              </a>
            </div>
            <div class="mt-6">
              <h4 class="text-sm font-semibold text-gray-900 mb-2">Newsletter</h4>
              <form class="flex">
                <input type="email" placeholder="Your email" class="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                <button type="submit" class="rounded-r-md bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
  
        <!-- Copyright -->
        <div class="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p class="text-sm text-gray-600">
            &copy; {{ new Date().getFullYear() }} InviteMe. All rights reserved.
          </p>
          <ul class="mt-4 flex space-x-6 md:mt-0">
            <li v-for="item in legalLinks" :key="item.name">
              <router-link :to="item.href" class="text-sm text-gray-600 hover:text-teal-600">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { 
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    PinterestIcon 
  } from '@/components/icons' // You'll need to create these icon components
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Designs', href: '/designs' },
    { name: 'Create', href: '/create' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]
  
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'Instagram', href: '#', icon: InstagramIcon },
    { name: 'Pinterest', href: '#', icon: PinterestIcon }
  ]
  
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
  </script>