import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'; // Import the router instance

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const Vuetify = createVuetify({
  components,
  directives,
  theme: false,
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router); // Install the router instance
app.use(Vuetify); // Install Vuetify without theme
app.mount('#app');  // Mount the application at #
