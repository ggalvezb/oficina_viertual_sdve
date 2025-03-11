<template>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item title="Oficina Virtual" subtitle="SDVE"></v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="route in filteredRoutes"
          :key="route.path"
          :to="route.path"
          link
        >
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  const drawer = ref(true);
  const router = useRouter();
  
  // Filtrar solo las rutas visibles en el sidebar (excluyendo rutas sin nombre)
  const filteredRoutes = computed(() =>
    router.options.routes.filter(route => route.name)
  );
  </script>
  