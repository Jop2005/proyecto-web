<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="card-title text-center mb-4">Crear Cuenta</h3>
            
            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <label for="name" class="form-label">Nombre completo</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="name"
                  v-model="form.name"
                  required
                  placeholder="Tu nombre completo"
                >
              </div>

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
                  placeholder="Mínimo 6 caracteres"
                >
              </div>

              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
                <input 
                  type="password" 
                  class="form-control" 
                  id="confirmPassword"
                  v-model="form.confirmPassword"
                  required
                  placeholder="Repite tu contraseña"
                >
              </div>

              <button type="submit" class="btn btn-primary w-100">
                Crear Cuenta
              </button>
            </form>

            <div v-if="error" class="alert alert-danger mt-3">
              {{ error }}
            </div>

            <div class="text-center mt-3">
              <router-link to="/login">¿Ya tienes cuenta? Inicia sesión</router-link>
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

const router = useRouter()
const error = ref('')

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleRegister = async () => {
  if (form.password !== form.confirmPassword) {
    error.value = 'Las contraseñas no coinciden'
    return
  }

  if (form.password.length < 6) {
    error.value = 'La contraseña debe tener al menos 6 caracteres'
    return
  }

  try {
    // Simular registro
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push('/login')
  } catch (err) {
    error.value = 'Error en el registro. Intenta nuevamente.'
  }
}
</script>