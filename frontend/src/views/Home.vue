<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h1 class="display-4 mb-4">Bienvenido a Mi App</h1>
        <p class="lead mb-4">
          Una aplicación moderna construida con Vue 3, Vite, Bootstrap y Pinia.
        </p>
        
        <div class="row mt-5">
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">🚀 Vue 3</h5>
                <p class="card-text">Framework progresivo para interfaces modernas.</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">⚡ Vite</h5>
                <p class="card-text">Build tool rápido para desarrollo ágil.</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">🎨 Bootstrap</h5>
                <p class="card-text">Framework CSS para diseño responsive.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <router-link v-if="!auth.isAuthenticated" to="/login" class="btn btn-primary btn-lg me-3">
            Iniciar Sesión
          </router-link>
          <router-link v-if="!auth.isAuthenticated" to="/register" class="btn btn-outline-primary btn-lg">
            Registrarse
          </router-link>
          <router-link v-else to="/dashboard" class="btn btn-success btn-lg">
            Ir al Dashboard
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>