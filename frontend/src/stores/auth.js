import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)
  const loading = ref(false)

  const userName = computed(() => user.value?.name || 'Invitado')
  const userEmail = computed(() => user.value?.email || '')

  async function login(credentials) {
    loading.value = true
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      user.value = {
        id: 1,
        name: 'Usuario Demo',
        email: credentials.email
      }
      isAuthenticated.value = true
      
      return user.value
    } catch (error) {
      throw new Error('Error en login')
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
    isAuthenticated.value = false
  }

  return {
    user,
    isAuthenticated,
    loading,
    userName,
    userEmail,
    login,
    logout
  }
})