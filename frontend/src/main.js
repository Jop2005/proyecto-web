import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'  // Asegurar que existe

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Estilos personalizados
import '@/assets/styles/variables.css'
import '@/assets/styles/main.css'

console.log('🚀 Iniciando aplicación...')

const app = createApp(App)
const pinia = createPinia()

// IMPORTANTE: Este orden
app.use(pinia)    // Primero Pinia
app.use(router)   // Luego Router

app.mount('#app')

console.log('✅ Aplicación montada correctamente')