/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 * 
 * 
 * Comandos utiles:
 * Iniciar el servidor de desarrollo: npm run dev
 * Construir la aplicación para producción: npm run build
 * Subir la aplicacion a GitHub: git push -u origin main
 * Subir la aplicación a Heroku: git push heroku main
 * 
 * 
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
