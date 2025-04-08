<template>
    <div class="px-4 py-2">
      <button 
        @click="open = !open" 
        class="flex justify-between items-center w-full text-gray-700 focus:outline-none"
      >
        <span class="font-medium">{{ title }}</span>
        <svg 
          :class="{'rotate-180': open}" 
          class="h-4 w-4 transition-transform" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <div 
        v-show="open" 
        :class="{
          'mt-2 pl-4 border-l-2 border-blue-500': !portfolio,
          'mt-2 space-y-4': portfolio
        }"
      >
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue'
  
  export default {
    props: {
      title: String,
      portfolio: Boolean,
      open: Boolean
    },
    emits: ['update:open'],
    setup(props, { emit }) {
      const open = ref(props.open)
  
      watch(open, (newVal) => {
        emit('update:open', newVal)
      })
  
      watch(() => props.open, (newVal) => {
        open.value = newVal
      })
  
      return {
        open
      }
    }
  }
  </script>