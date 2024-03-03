import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // Import the router instance

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// 
const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(router); // Install the vue
app.use(vuetify); // Install
app.mount('#app');  // Mount the application at #