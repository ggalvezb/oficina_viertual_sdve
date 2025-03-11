<template>
  <div class="background">
    <div class="overlay"></div> <!-- Capa con blur sobre la imagen -->
    <v-container class="content">
      <v-card class="pa-5 card-container">
        <v-card-title>Oficina Virtual SDVE</v-card-title>
        <v-card-text>Serviu Metropolitano</v-card-text>
        <!-- Botones para navegar -->
        <v-card-actions class="button-group">
          <v-btn color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeEKPZD_O9ZAoI3uhLDQQtOzNnW0jVIJpSKhhruZpTode4V4g/viewform" target="_blank">Accesos Munin</v-btn>
          <v-btn color="secondary" @click="goTods27">DS 27</v-btn>
          <v-btn color="secondary" @click="goTods49">DS 49</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Funciones para redirigir a Home y About
const goToHome = () => {
  router.push('/');
};

const goTods27 = () => {
  router.push('/ds27');
};
const goTods49 = () => {
  router.push('/ds49');
};
</script>



<style scoped>
/* Contenedor principal que ocupa todo el tamaño de la pantalla */
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* 100% del ancho de la ventana */
  height: 100vh; /* 100% del alto de la ventana */
  background-image: url('@/assets/background.jpg'); /* Cambia la ruta según la ubicación de tu imagen */
  background-size: cover; /* Asegura que la imagen cubra todo el espacio */
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Capa borrosa sobre la imagen de fondo */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px); /* Aplica el desenfoque */
  background: rgba(0, 0, 0, 0.3); /* Oscurece un poco para mejor contraste */
}

/* Asegurar que el contenido (tarjeta) está centrado */
.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
/* Tarjeta centrada con fondo semitransparente */
.card-container {
  background: rgba(66, 48, 48, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  text-align: center;
}

/* Botones alineados */
.button-group {
  display: flex;
  justify-content: center;
  gap: 10px; /* Espacio entre los botones */
}
</style>

