// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import ContactMe from './views/ContactMe.vue';
// Create a Home component

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/portfolio',
    component: Portfolio,
  },
  {
    path: '/contact-me',
    component: ContactMe,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
