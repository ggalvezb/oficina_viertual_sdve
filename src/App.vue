<template>
  <v-app>

    <v-main>
      <router-view></router-view>
      
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Footer from '@/components/footer.vue';
</script>
