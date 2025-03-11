<template>
  <Sidebar />
  <v-container>
    <v-card class="pa-5">
      <v-card-title>Solicitud de Prórroga de Subsidio</v-card-title>

      <!-- Contenedor de botones con espacio entre ellos -->
      <div class="button-group">
        <v-btn color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeolUvSAb_zSxcH4ZlgG-cktrTniabGb0-aqhMD0enLkaEczg/viewform" target="_blank">
          Formulario
        </v-btn>

        <v-btn color="primary" href="https://app.powerbi.com/view?r=eyJrIjoiZjA4YTU3NGItNGM0My00ZTE3LWIwMDQtNWI1MzFiMjgzYzVkIiwidCI6IjljYWNkMjEwLTcwYTktNDRlZS04MjZiLWY2Yjc2ODVhMDFkNiIsImMiOjR9" target="_blank">
          Panel de Seguimiento
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<style scoped>
/* Contenedor de botones con espacio */
.button-group {
  display: flex;
  gap: 10px; /* Espacio entre los botones */
  margin-top: 10px; /* Espacio entre el título y los botones */
  justify-content: flex-start; /* Centrar los botones */
}
</style>
