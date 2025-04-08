<template>
    <div class="relative" v-click-outside="closeDropdown">
      <button 
        @click="toggleDropdown" 
        class="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
      >
        <span>{{ title }}</span>
        <svg :class="{'rotate-180': open}" class="ml-1 h-4 w-4 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
  
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 transform scale-95"
        enter-to-class="opacity-100 transform scale-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 transform scale-100"
        leave-to-class="opacity-0 transform scale-95"
      >
        <div 
          v-show="open"
          :class="{
            'dropdown-content absolute mt-2 py-2 bg-white/80 rounded-md shadow-xl blur-bg': true,
            'right-0': !portfolio,
            'portfolio-dropdown': portfolio,
            'min-w-[200px]': !portfolio
          }"
        >
          <slot></slot>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import vClickOutside from 'click-outside-vue3'
  
  export default {
    directives: {
      clickOutside: vClickOutside.directive
    },
    props: {
      title: String,
      portfolio: Boolean
    },
    setup() {
      const open = ref(false)
  
      const toggleDropdown = () => {
        open.value = !open.value
      }
  
      const closeDropdown = () => {
        open.value = false
      }
  
      return {
        open,
        toggleDropdown,
        closeDropdown
      }
    }
  }
  </script>
  
  <style>
  .dropdown-content {
    z-index: 50;
  }
  .portfolio-dropdown {
    min-width: 90vw;
    max-width: 1200px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  @media (max-width: 1024px) {
    .portfolio-dropdown {
      width: 95vw;
    }
  }
  </style>