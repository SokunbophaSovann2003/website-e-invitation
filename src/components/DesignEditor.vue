<template>
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Preview Section -->
        <div class="lg:w-1/2">
          <div class="border-2 border-gray-200 rounded-lg p-4">
            <div class="relative" :style="{ backgroundColor: form.backgroundColor, color: form.textColor }">
              <div class="p-8 text-center">
                <h2 class="text-3xl font-bold mb-4" :style="{ fontFamily: form.fontFamily }">
                  {{ form.title || 'Your Event Title' }}
                </h2>
                <p class="text-xl mb-6" :style="{ fontFamily: form.fontFamily }">
                  {{ form.subtitle || 'Event details will go here' }}
                </p>
                <div class="mb-6" :style="{ fontFamily: form.fontFamily }">
                  <p>{{ form.date || 'Date' }}</p>
                  <p>{{ form.time || 'Time' }}</p>
                  <p>{{ form.location || 'Location' }}</p>
                </div>
                <div v-if="form.image" class="mb-6">
                  <img :src="form.image" alt="Invitation background" class="mx-auto max-h-48 rounded">
                </div>
                <p class="text-sm" :style="{ fontFamily: form.fontFamily }">
                  {{ form.footer || 'RSVP information' }}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Editor Controls -->
        <div class="lg:w-1/2">
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input v-model="form.title" type="text" class="w-full border border-gray-300 rounded-md px-3 py-2">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
              <input v-model="form.subtitle" type="text" class="w-full border border-gray-300 rounded-md px-3 py-2">
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input v-model="form.date" type="text" class="w-full border border-gray-300 rounded-md px-3 py-2">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input v-model="form.time" type="text" class="w-full border border-gray-300 rounded-md px-3 py-2">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input v-model="form.location" type="text" class="w-full border border-gray-300 rounded-md px-3 py-2">
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Footer Text</label>
              <input v-model="form.footer" type="text" class="w-full border border-gray-300 rounded-md px-3 py-2">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Background Color</label>
              <div class="flex items-center">
                <input v-model="form.backgroundColor" type="color" class="h-10 w-10 rounded border border-gray-300 mr-2">
                <input v-model="form.backgroundColor" type="text" class="w-full border border-gray-300 rounded-md px-3 py-2">
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Text Color</label>
              <div class="flex items-center">
                <input v-model="form.textColor" type="color" class="h-10 w-10 rounded border border-gray-300 mr-2">
                <input v-model="form.textColor" type="text" class="w-full border border-gray-300 rounded-md px-3 py-2">
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Font Family</label>
              <select v-model="form.fontFamily" class="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="Arial, sans-serif">Arial</option>
                <option value="'Times New Roman', serif">Times New Roman</option>
                <option value="'Courier New', monospace">Courier New</option>
                <option value="'Georgia', serif">Georgia</option>
                <option value="'Palatino Linotype', 'Book Antiqua', Palatino, serif">Palatino</option>
                <option value="'Comic Sans MS', cursive">Comic Sans</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Background Image</label>
              <input type="file" @change="handleImageUpload" class="w-full border border-gray-300 rounded-md px-3 py-2">
            </div>
            
            <div class="pt-4">
              <button @click="saveDesign" class="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700">
                Save Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    props: {
      initialData: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props) {
      const form = ref({
        title: props.initialData.title || '',
        subtitle: props.initialData.subtitle || '',
        date: props.initialData.date || '',
        time: props.initialData.time || '',
        location: props.initialData.location || '',
        footer: props.initialData.footer || '',
        backgroundColor: props.initialData.backgroundColor || '#ffffff',
        textColor: props.initialData.textColor || '#000000',
        fontFamily: props.initialData.fontFamily || 'Arial, sans-serif',
        image: props.initialData.image || null
      })
  
      function handleImageUpload(event) {
        const file = event.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            form.value.image = e.target.result
          }
          reader.readAsDataURL(file)
        }
      }
  
      function saveDesign() {
        // Emit the saved design data to parent
        emit('save', form.value)
      }
  
      return {
        form,
        handleImageUpload,
        saveDesign
      }
    }
  }
  </script>