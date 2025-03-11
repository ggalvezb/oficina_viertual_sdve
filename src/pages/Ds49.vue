<template>
  <Sidebar />
  <v-container>
    <!-- Seccion 1 -->
    <v-card class="pa-5 mb-4">
      <v-card-title>Panel de Seguimiento PEH</v-card-title>
      <div class="button-group">
        <v-btn color="primary" href="https://app.powerbi.com/view?r=eyJrIjoiOTU2NWM5ODctZWRmZC00YTM1LTk1NzMtNGIxZjE3YTMyMGIwIiwidCI6IjljYWNkMjEwLTcwYTktNDRlZS04MjZiLWY2Yjc2ODVhMDFkNiIsImMiOjR9" target="_blank">
          VER
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
