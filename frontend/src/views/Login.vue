<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="card-title text-center mb-4">Iniciar Sesión</h3>
            
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="email"
                  v-model="form.email"
                  required
                  placeholder="tu@email.com"
                >
              </div>
              
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input 
                  type="password" 
                  class="form-control" 
                  id="password"
                  v-model="form.password"
                  required
                  placeholder="Tu contraseña"
                >
              </div>

              <button 
                type="submit" 
                class="btn btn-primary w-100"
                :disabled="auth.loading"
              >
                <span v-if="auth.loading" class="spinner-border spinner-border-sm me-2"></span>
                {{ auth.loading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
              </button>
            </form>

            <div v-if="error" class="alert alert-danger mt-3">
              {{ error }}
            </div>

            <div class="text-center mt-3">
              <router-link to="/register">¿No tienes cuenta? Regístrate</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const router = useRouter()
const error = ref('')

const form = reactive({
  email: '',
  password: ''
})

const handleLogin = async () => {
  try {
    error.value = ''
    await auth.login(form)
    router.push('/dashboard')
  } catch (err) {
    error.value = 'Error al iniciar sesión. Verifica tus credenciales.'
  }
}
</script>