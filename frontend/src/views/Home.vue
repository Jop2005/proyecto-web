<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h1 class="display-4 mb-4">¡Home Funciona! 🎉</h1>
        <p class="lead">
          Vue 3 Composition API funcionando.
        </p>
        
        <div class="mt-4">
          <button @click="increment" class="btn btn-primary me-2">
            Contador: {{ count }}
          </button>
          <button @click="reset" class="btn btn-outline-secondary">
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactividad con Composition API
const count = ref(0)

const increment = () => {
  count.value++
}

const reset = () => {
  count.value = 0
}
</script>