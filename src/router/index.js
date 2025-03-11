import { createRouter, createWebHistory } from 'vue-router';
import Ds27 from '@/pages/Ds27.vue';
import Ds49 from '@/pages/Ds49.vue';
import Inicio from '@/pages/Inicio.vue';

const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/ds27', name: 'Ds27', component: Ds27 },
  { path: '/ds49', name: 'Ds49', component: Ds49 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
