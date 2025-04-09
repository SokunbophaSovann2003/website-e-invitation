import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const isAuthenticated = computed(() => !!user.value)

  async function login(email, password) {
    try {
      loading.value = true
      error.value = null
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (email === 'user@example.com' && password === 'password') {
        user.value = {
          id: 1,
          name: 'John Doe',
          email: 'user@example.com'
        }
        localStorage.setItem('user', JSON.stringify(user.value))
        router.push({ name: 'Home' })
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  async function register(userData) {
    try {
      loading.value = true
      error.value = null
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      user.value = {
        id: 2,
        name: userData.name,
        email: userData.email
      }
      localStorage.setItem('user', JSON.stringify(user.value))
      router.push({ name: 'Home' })
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
    localStorage.removeItem('user')
    router.push({ name: 'Home' })
  }

  function initialize() {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      user.value = JSON.parse(storedUser)
    }
  }

  return {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
    initialize
  }
})