<template>
    <header class="bg-white sticky top-0 z-50 shadow-sm">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Left side - Logo and Desktop Nav -->
          <div class="flex items-center">
            <!-- Mobile menu button -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" 
                    class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 md:hidden">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" :class="{'hidden': mobileMenuOpen, 'block': !mobileMenuOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="h-6 w-6" :class="{'hidden': !mobileMenuOpen, 'block': mobileMenuOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
  
            <!-- Logo -->
            <router-link to="/" class="ml-4 flex items-center md:ml-0">
              <svg class="h-8 w-auto text-teal-600" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z" fill="currentColor" />
              </svg>
              <span class="ml-2 hidden md:block text-xl font-bold text-gray-900">InviteMe</span>
            </router-link>
  
            <!-- Desktop Navigation -->
            <nav class="hidden md:ml-6 md:flex md:space-x-8">
              <router-link 
                v-for="item in navigation" 
                :key="item.name" 
                :to="item.href"
                class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                :class="[
                  $route.path === item.href 
                    ? 'border-teal-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                ]"
              >
                {{ item.name }}
              </router-link>
            </nav>
          </div>
  
          <!-- Right side - Auth and Cart -->
          <div class="flex items-center">
            <!-- Shopping Cart -->
            <div class="ml-4 flow-root">
              <button @click="cartStore.toggleCart" class="group -m-2 flex items-center p-2">
                <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span v-if="cartStore.totalItems > 0" class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {{ cartStore.totalItems }}
                </span>
                <span class="sr-only">items in cart, view bag</span>
              </button>
            </div>
  
            <!-- Auth Buttons -->
            <div class="ml-4">
              <router-link 
                v-if="!authStore.isAuthenticated"
                to="/login" 
                class="ml-6 inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700"
              >
                Sign in
              </router-link>
  
              <!-- User dropdown -->
              <div v-else class="relative ml-4">
                <button @click="userMenuOpen = !userMenuOpen" type="button" class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  <span class="sr-only">Open user menu</span>
                  <div class="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    {{ authStore.userInitials }}
                  </div>
                </button>
  
                <!-- Dropdown menu -->
                <div v-show="userMenuOpen" 
                     @click="userMenuOpen = false"
                     class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <router-link 
                    to="/my-account" 
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    @click="userMenuOpen = false"
                  >
                    Your Account
                  </router-link>
                  <router-link 
                    to="/my-designs" 
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    @click="userMenuOpen = false"
                  >
                    Your Designs
                  </router-link>
                  <button 
                    @click="logout"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Mobile menu -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="space-y-1 pt-2 pb-3">
          <router-link 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href"
            class="block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
            :class="[
              $route.path === item.href 
                ? 'bg-teal-50 border-teal-500 text-teal-700' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            ]"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
        
        <div class="border-t border-gray-200 pt-4 pb-3">
          <div v-if="authStore.isAuthenticated" class="flex items-center px-4">
            <div class="flex-shrink-0">
              <div class="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                {{ authStore.userInitials }}
              </div>
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">{{ authStore.user.name }}</div>
              <div class="text-sm font-medium text-gray-500">{{ authStore.user.email }}</div>
            </div>
          </div>
          
          <div class="mt-3 space-y-1">
            <router-link 
              v-if="authStore.isAuthenticated"
              to="/my-account" 
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              @click="mobileMenuOpen = false"
            >
              Your Account
            </router-link>
            
            <router-link 
              v-if="!authStore.isAuthenticated"
              to="/login" 
              class="block w-full bg-teal-600 px-4 py-2 text-center text-base font-medium text-white hover:bg-teal-700"
              @click="mobileMenuOpen = false"
            >
              Sign in
            </router-link>
            
            <button 
              v-if="authStore.isAuthenticated"
              @click="logout"
              class="block w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'
  import { useCartStore } from '@/stores/cart'
  
  const router = useRouter()
  const authStore = useAuthStore()
  const cartStore = useCartStore()
  
  const mobileMenuOpen = ref(false)
  const userMenuOpen = ref(false)
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Designs', href: '/designs' },
    { name: 'Create', href: '/create' },
    { name: 'About', href: '/about' },
  ]
  
  const logout = () => {
    authStore.logout()
    mobileMenuOpen.value = false
    userMenuOpen.value = false
    router.push('/login')
  }
  </script>
  
  <style scoped>
  .router-link-active.router-link-exact-active {
    @apply border-teal-500 text-gray-900;
  }
  </style>