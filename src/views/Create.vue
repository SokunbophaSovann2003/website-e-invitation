<template>
    <div class="py-10">
      <div class="container mx-auto px-4">
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-2">Create Your Invitation</h1>
          <p class="text-gray-600">Design a custom invitation for your special event</p>
        </div>
        
        <DesignEditor @save="handleSave" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import DesignEditor from '../components/DesignEditor.vue'
  
  export default {
    components: {
      DesignEditor
    },
    setup() {
      const router = useRouter()
      
      const handleSave = (designData) => {
        // In a real app, you would save to backend here
        console.log('Design saved:', designData)
        alert('Design saved successfully!')
        router.push('/my-designs')
      }
  
      return {
        handleSave
      }
    }
  }
  </script>