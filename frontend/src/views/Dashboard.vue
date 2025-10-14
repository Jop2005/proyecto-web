<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1>Dashboard</h1>
          <button @click="auth.logout()" class="btn btn-outline-danger">
            Cerrar Sesión
          </button>
        </div>

        <div class="alert alert-success">
          <h4 class="alert-heading">¡Bienvenido, {{ auth.userName }}!</h4>
          <p class="mb-0">Has iniciado sesión correctamente en el sistema.</p>
        </div>

        <div class="row mt-4">
          <div class="col-md-3 mb-3">
            <div class="card text-white bg-primary">
              <div class="card-body">
                <h5 class="card-title">Perfil</h5>
                <p class="card-text">Gestiona tu información personal</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-3">
            <div class="card text-white bg-success">
              <div class="card-body">
                <h5 class="card-title">Configuración</h5>
                <p class="card-text">Ajusta las preferencias</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-3">
            <div class="card text-white bg-warning">
              <div class="card-body">
                <h5 class="card-title">Reportes</h5>
                <p class="card-text">Visualiza estadísticas</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-3 mb-3">
            <div class="card text-white bg-info">
              <div class="card-body">
                <h5 class="card-title">Ayuda</h5>
                <p class="card-text">Soporte y documentación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>