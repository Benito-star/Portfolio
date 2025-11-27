import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 🆕 Importe la config du router

const app = createApp(App)

app.use(router) // 🆕 Branche le router sur ton app Vue. C'est comme installer le GPS dans ta voiture.

app.mount('#app')
