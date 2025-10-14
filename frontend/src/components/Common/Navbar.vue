<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link to="/" class="navbar-brand">Mi App</router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
        </ul>
        
        <ul class="navbar-nav">
          <template v-if="auth.isAuthenticated">
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click="handleLogout">Cerrar Sesión ({{ auth.userName }})</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Registro</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const handleLogout = () => {
  auth.logout()
}
</script>