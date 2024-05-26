import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Projects from './components/views/Projects.vue'
import TheWelcome from './components/views/TheWelcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheWelcome
    },
    {
      path: '/project',
      name: 'project',
      // Importe o componente corretamente do local onde ele está definido
      component: Projects
    }
  ]
})

// Correção da constante app
const app = createApp(App)
app.use(router)
app.mount('#app')
